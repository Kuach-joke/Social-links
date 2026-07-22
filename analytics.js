import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
// The inject() function automatically detects the environment:
// - In development (localhost), events are logged to console
// - In production (vercel.app or custom domain), events are sent to Vercel Analytics
inject();
