import { clerkMiddleware } from '@clerk/nextjs/server';

// Define clerkMiddleware with default options
const middleware = clerkMiddleware();

// Export the middleware function
export default middleware;

// Export configuration for the middleware
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)', // Run middleware on API routes
  ],
};
