# ToneTail — AI Sales Email Rewriter

ToneTail is a micro-SaaS that helps sales teams instantly rewrite cold emails to match their prospect's tone, industry, and pain points.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **AI**: [OpenAI GPT-4o-mini](https://openai.com/)
- **Auth**: [Auth.js v5](https://authjs.dev/) (Google OAuth)
- **Payments**: [Stripe](https://stripe.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- OpenAI API Key
- Google OAuth Credentials
- Stripe API Keys

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file based on the template in `.env.local.example`.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the result.

## Architecture

- `src/app`: Application routes and API endpoints.
- `src/components`: Reusable UI components.
- `src/lib`: Shared utilities (Stripe, AI client, etc.).
- `src/auth.ts`: Auth.js configuration.
- `src/middleware.ts`: Route protection.

## License

MIT
