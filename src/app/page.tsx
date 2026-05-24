import Link from 'next/link';
import { ArrowRight, Zap, Target, Layout, CheckCircle } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-white sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="/">
          <Logo className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-2xl font-bold tracking-tight text-gray-900">ToneTail</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-8 items-center">
          <Link className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-semibold text-gray-600 hover:text-indigo-600 transition-colors" href="/login">
            Login
          </Link>
          <Link
            className="text-sm font-bold bg-indigo-600 text-white px-5 py-2.5 rounded-full hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg"
            href="/login"
          >
            Get Started
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center max-w-4xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-gray-900">
                  Turn Cold Emails Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Conversations</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl lg:text-2xl font-medium">
                  Instantly rewrite your outreach to match a prospect{"'"}s tone, industry, and style. 10x your response rates with AI-powered personalization.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  className="inline-flex h-14 items-center justify-center rounded-full bg-indigo-600 px-10 text-lg font-bold text-white shadow-xl transition-all hover:bg-indigo-700 hover:scale-105"
                  href="/login"
                >
                  Start Rewriting for Free
                </Link>
                <Link
                  className="inline-flex h-14 items-center justify-center rounded-full border-2 border-gray-200 bg-white px-10 text-lg font-bold text-gray-900 shadow-sm transition-all hover:bg-gray-50 hover:border-indigo-200"
                  href="#demo"
                >
                  See How It Works
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="demo" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-16 text-gray-900">How ToneTail Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">1</div>
                <h3 className="text-xl font-bold">Paste</h3>
                <p className="text-gray-500">Drop in a prospect{"'"}s LinkedIn URL or a recent email thread.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">2</div>
                <h3 className="text-xl font-bold">Analyze</h3>
                <p className="text-gray-500">Our AI extracts their communication style, industry context, and pain points.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl font-bold">3</div>
                <h3 className="text-xl font-bold">Rewrite</h3>
                <p className="text-gray-500">Get a tailored version of your email that sounds like it was written just for them.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-16 text-gray-900">Built for Modern Sales Teams</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
              <FeatureCard 
                icon={<Zap className="h-8 w-8" />}
                title="Tone Detection"
                description="Instantly identify if your prospect prefers formal, casual, or direct communication."
              />
              <FeatureCard 
                icon={<Layout className="h-8 w-8" />}
                title="Industry Awareness"
                description="Automatically adjusts jargon and context based on the prospect's sector."
              />
              <FeatureCard 
                icon={<Target className="h-8 w-8" />}
                title="Pain Point Recognition"
                description="Highlight how you solve specific problems relevant to their role."
              />
              <FeatureCard 
                icon={<ArrowRight className="h-8 w-8" />}
                title="One-Click Rewrite"
                description="Transform your draft in seconds without losing the core value prop."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-20 bg-white">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="max-w-2xl mx-auto space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-900">Simple, Transparent Pricing</h2>
              <p className="text-gray-500 text-lg">One plan, everything you need to scale your outreach.</p>
            </div>
            <div className="max-w-sm mx-auto p-8 rounded-3xl border-2 border-indigo-600 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                Pro Plan
              </div>
              <div className="text-gray-900 mb-6">
                <span className="text-5xl font-extrabold tracking-tight">$29</span>
                <span className="text-xl font-semibold">/month</span>
              </div>
              <ul className="space-y-4 text-left mb-8">
                <PricingItem text="Unlimited Email Rewrites" />
                <PricingItem text="Advanced Tone Analysis" />
                <PricingItem text="LinkedIn Integration" />
                <PricingItem text="Priority Support" />
                <PricingItem text="Export to CSV/HubSpot" />
              </ul>
              <Link
                className="block w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg"
                href="/login"
              >
                Get Pro Now
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-4 border-t bg-white">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center">
            <Logo className="h-6 w-6 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">ToneTail</span>
          </div>
          <p className="text-sm text-gray-500">© 2024 ToneTail. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="text-xs font-medium text-gray-500 hover:text-indigo-600" href="#">Terms</Link>
            <Link className="text-xs font-medium text-gray-500 hover:text-indigo-600" href="#">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

function PricingItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle className="h-5 w-5 text-green-500" />
      <span className="text-gray-700 font-medium">{text}</span>
    </li>
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
