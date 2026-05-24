import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const requestSchema = z.object({
  prospectUrl: z.string().min(1),
  emailDraft: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { prospectUrl, emailDraft } = requestSchema.parse(body);

    const prompt = `
      You are an expert sales copywriter. Rewrite the following cold email draft based on the prospect's context (LinkedIn URL or description).

      PROSPECT CONTEXT:
      """
      ${prospectUrl}
      """

      DRAFT EMAIL:
      """
      ${emailDraft}
      """

      INSTRUCTIONS:
      1. Analyze the prospect's likely tone, industry, and pain points.
      2. Rewrite the email to be highly personalized, matching their style (formal, casual, etc.).
      3. Keep it concise and focused on the value proposition.
      4. Provide the rewritten email first.
      5. After the email, provide a brief explanation (max 2 sentences) of why you made certain tone or content adjustments.

      FORMAT:
      [Rewritten Email]
      ---
      [Brief Explanation]
    `;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a master of sales communication and tone matching.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      temperature: 0.7,
    });

    const fullResponse = response.choices[0].message.content || '';
    const [rewrittenEmail, explanation] = fullResponse.split('---').map(s => s.trim());

    return NextResponse.json({ rewrittenEmail, explanation });
  } catch (error) {
    console.error('REWRITE_ERROR', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
