// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware({
//   // @ts-expect-error expected
//   publicRoutes: ["/api/webhooks/clerk"],
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//     // Always run for API routes
//     "/(api|trpc)(.*)",
//   ],
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Public routes: root (/), static files, and webhooks
    "/((?!_next/static|_next/image|favicon.ico|api/webhooks/clerk|api/webhooks/stripe|$).*)",
  ],
};
