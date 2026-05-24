'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4">
      <div className="w-full max-w-md space-y-10 bg-white p-12 rounded-[2.5rem] shadow-2xl border border-indigo-50 relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-600 to-purple-600" />
        
        <div>
          <Link href="/" className="inline-flex items-center justify-center mb-8">
            <Logo className="h-12 w-12 text-indigo-600" />
            <span className="ml-3 text-4xl font-black tracking-tighter text-gray-900 italic">ToneTail</span>
          </Link>
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Welcome back</h2>
          <p className="mt-3 text-gray-500 font-medium">
            Sign in to start personalizing your sales outreach.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => signIn('google', { redirectTo: '/dashboard' })}
            className="group relative flex w-full justify-center items-center gap-3 rounded-2xl border-2 border-gray-100 bg-white px-6 py-4 text-lg font-bold text-gray-700 shadow-sm hover:border-indigo-200 hover:bg-indigo-50 transition-all duration-200"
          >
            <GoogleIcon className="h-6 w-6" />
            Continue with Google
          </button>
        </div>

        <div className="text-xs text-gray-400 mt-8 font-medium">
          By continuing, you agree to our <Link href="#" className="underline hover:text-indigo-600">Terms of Service</Link> and <Link href="#" className="underline hover:text-indigo-600">Privacy Policy</Link>.
        </div>
      </div>
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

function GoogleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}
