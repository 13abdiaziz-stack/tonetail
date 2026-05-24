'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { Sparkles, Copy, LogOut, CreditCard, History, Zap } from 'lucide-react';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [prospectUrl, setProspectUrl] = useState('');
  const [emailDraft, setEmailDraft] = useState('');
  const [rewrittenEmail, setRewrittenEmail] = useState('');
  const [explanation, setExplanation] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  const handleRewrite = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prospectUrl, emailDraft }),
      });
      const data = await res.json();
      if (data.rewrittenEmail) {
        setRewrittenEmail(data.rewrittenEmail);
        setExplanation(data.explanation || '');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateCheckout = async () => {
    try {
      const res = await fetch('/api/create-checkout-session', { method: 'POST' });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (error) {
      console.error(error);
    }
  };

  if (status === 'loading') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Dashboard Nav */}
      <nav className="bg-white border-b px-4 py-4 sm:px-6 lg:px-8 sticky top-0 z-50 shadow-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          <Link href="/dashboard" className="flex items-center">
            <Logo className="h-7 w-7 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ToneTail</span>
          </Link>
          <div className="flex items-center gap-6">
            <span className="text-sm font-medium text-gray-500 hidden md:block">
              {session?.user?.email}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-red-600 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Form */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-indigo-100 rounded-lg">
                  <Sparkles className="h-5 w-5 text-indigo-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Magic Email Rewriter</h2>
              </div>
              <form onSubmit={handleRewrite} className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">
                    Prospect Context (URL or Bio)
                  </label>
                  <textarea
                    required
                    value={prospectUrl}
                    onChange={(e) => setProspectUrl(e.target.value)}
                    className="w-full rounded-2xl border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 min-h-[100px] p-4 text-gray-800 bg-gray-50 border transition-all"
                    placeholder="e.g., https://linkedin.com/in/sarah-sales or 'Sarah is a CTO at a growth-stage AI startup who values technical precision.'"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">
                    Your Cold Email Draft
                  </label>
                  <textarea
                    required
                    value={emailDraft}
                    onChange={(e) => setEmailDraft(e.target.value)}
                    className="w-full rounded-2xl border-gray-200 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 min-h-[180px] p-4 text-gray-800 bg-gray-50 border transition-all"
                    placeholder="Hi Sarah, wanted to share how our tool helps CTOs..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-2xl hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Analyzing & Rewriting...
                    </>
                  ) : (
                    <>
                      <Zap className="h-5 w-5 fill-white" />
                      Rewrite with AI
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Results Section */}
            {rewrittenEmail && (
              <div className="bg-white p-8 rounded-3xl shadow-lg border-2 border-indigo-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Tailored Result</h3>
                  <button
                    onClick={() => navigator.clipboard.writeText(rewrittenEmail)}
                    className="flex items-center gap-2 text-sm font-bold text-indigo-600 hover:bg-indigo-50 px-4 py-2 rounded-xl transition-all border border-indigo-100"
                  >
                    <Copy className="h-4 w-4" />
                    Copy
                  </button>
                </div>
                <div className="p-6 bg-indigo-50/50 rounded-2xl border border-indigo-50 text-gray-800 whitespace-pre-wrap leading-relaxed mb-6 font-medium">
                  {rewrittenEmail}
                </div>
                {explanation && (
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <p className="text-sm text-gray-500 italic">
                      <span className="font-bold text-gray-700 not-italic mr-2">Why this works:</span>
                      {explanation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <div className="space-y-8">
            {/* Usage Stats */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Subscription
              </h3>
              <div className="mb-8">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-3xl font-black text-gray-900">Unlimited</span>
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md uppercase">Pro Plan</span>
                </div>
                <p className="text-sm text-gray-500">Rewrites this month</p>
              </div>
              <button 
                onClick={handleCreateCheckout}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold text-gray-700 hover:text-indigo-600 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-indigo-100 transition-all"
              >
                <CreditCard className="h-4 w-4" />
                Manage Billing
              </button>
            </div>

            {/* Quick Tips */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-3xl shadow-xl text-white">
              <h3 className="font-bold text-lg mb-4">Pro Tip 💡</h3>
              <p className="text-indigo-100 text-sm leading-relaxed mb-6">
                Adding more context about the prospect{"'"}s specific role or recent achievements helps the AI create a much deeper personal connection.
              </p>
              <div className="flex items-center gap-3 text-xs font-bold bg-white/10 p-3 rounded-xl border border-white/10">
                <History className="h-4 w-4" />
                History feature coming soon!
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M85 65C85 67.7614 82.7614 70 80 70H30L15 85V20C15 17.2386 17.2386 15 20 15H80C82.7614 15 85 17.2386 85 20V65Z" fill="currentColor"/>
      <path d="M60 30L40 50" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <path d="M40 30L60 50" stroke="white" strokeWidth="4" strokeLinecap="round"/>
      <circle cx="65" cy="30" r="3" fill="#A5B4FC"/>
      <circle cx="35" cy="55" r="3" fill="#A5B4FC"/>
    </svg>
  );
}
