import { inject } from '@vercel/analytics';

// Initialize Vercel Web Analytics
// Mode is automatically detected based on environment
// In development (localhost), events are logged to console
// In production (deployed), events are sent to Vercel Analytics
inject({
  mode: 'auto', // automatically detects production vs development
  debug: false  // set to true to see analytics events in console
});
