import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center px-4"
      style={{ backgroundColor: '#333333' }}
    >
      <div className="text-center space-y-8 max-w-md">
        {/* Icon */}
        <div className="flex justify-center">
          <AlertCircle
            size={80}
            style={{ color: '#C93C3F' }}
            className="animate-pulse"
          />
        </div>

        {/* 404 Text */}
        <div className="space-y-2">
          <h1
            className="text-8xl font-bold font-mono"
            style={{ color: '#C93C3F' }}
          >
            404
          </h1>
          <p
            className="text-2xl font-semibold"
            style={{ color: '#C93C3F' }}
          >
            Page Not Found
          </p>
        </div>

        {/* Description */}
        <p
          className="text-lg leading-relaxed"
          style={{ color: '#C93C3F' }}
        >
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* CTA Button */}
        <Link
          href="/"
          className="inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
          style={{
            backgroundColor: '#C93C3F',
            color: '#333333',
          }}
        >
          Go Back Home
        </Link>

        {/* Decorative elements */}
        <div className="pt-8 space-y-2 text-sm" style={{ color: '#C93C3F' }}>
          <p>Lost? Here are some helpful links:</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/"
              className="underline hover:opacity-80 transition-opacity"
            >
              Home
            </Link>
            <span style={{ color: '#555' }}>•</span>
            <a
              href="mailto:support@example.com"
              className="underline hover:opacity-80 transition-opacity"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
