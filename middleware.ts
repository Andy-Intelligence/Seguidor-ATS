// import { authMiddleware } from "@clerk/nextjs";
// import { NextResponse } from "next/server";
// import { fetchUser } from "./backend/actions/user.actions";
// import { redirect } from "next/navigation";
 

// // const userInfo = await fetchUser(auth.userId);
// // console.log(userInfo)
// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
// export default authMiddleware({
//     publicRoutes:['/api/webhook/clerk',],
//     ignoredRoutes:['/api/webhook/clerk',],
//     // afterAuth:(auth,req)=>auth.isPublicRoute ? NextResponse.next() : undefined
//     async afterAuth(auth, req) {
//       if (auth.isPublicRoute) {
//         //  For public routes, we don't need to do anything
//         return NextResponse.next();
//       }
  
//       const url = new URL(req.nextUrl.origin);
  
//        if(!auth.userId) {
//         //  If user tries to access a private route without being authenticated,
//         //  redirect them to the sign in page
//         url.pathname = "/sign-in";
//         return NextResponse.redirect(url);
//       }

//         if(auth.userId){
//         url.pathname = "/onboarding";
//         return NextResponse.redirect(url);
//       }
//     },
// });
 
// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };
 
// // export const config = {
// //   matcher: ["/((?!.*\\..*|_next).*)"],
// // };


import { authMiddleware, redirectToSignIn } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { fetchUser } from "./backend/actions/user.actions"; // Import functions for user actions

export default authMiddleware({
  // debug:true,
  publicRoutes: ['/api/webhook/clerk',],
  ignoredRoutes: ['/api/webhook/clerk'],
  // async afterAuth(auth, req, evt) {
  //   // handle users who aren't authenticated
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     return redirectToSignIn({ returnBackUrl: req.url });
  //   }

  //   // redirect them to organization selection page
  //   if(auth.userId && req.nextUrl.pathname !== "/onboarding"){
  //     const orgSelection = new URL('/onboarding', req.url)
  //     return NextResponse.redirect(orgSelection)
  //   }
  //   if(auth.userId){
  //     const url = new URL(req.nextUrl.origin);
  //     // const orgSelection = new URL('/onboarding', req.url)
  //     // return NextResponse.redirect(orgSelection)
  //     url.pathname = "/onboarding";
  //     return NextResponse.redirect(url);
  //     console.log("hello")
  //   }
  // }
  // afterAuth(auth, req, evt) {
  //   // handle users who aren't authenticated
  //   if (!auth.userId && !auth.isPublicRoute) {
  //     return redirectToSignIn({ returnBackUrl: req.url });
  //   }
  //   // redirect them to organization selection page
  //   if(auth.userId && !auth.orgId && req.nextUrl.pathname !== "/onboarding"){
  //     const orgSelection = new URL('/onboarding', req.url)
  //     return NextResponse.redirect(orgSelection)
  //   }
  // }

  // async afterAuth(auth, req) {
  //   if (auth.isPublicRoute) {
  //     // For public routes, no additional action is needed
  //     return NextResponse.next();
  //   }

  //   const url = new URL(req.nextUrl.origin);

  //   if (!auth.userId) {
  //     // If the user tries to access a private route without being authenticated,
  //     // redirect them to the sign-in page
  //     url.pathname = "/sign-in";
  //     return NextResponse.redirect(url);
  //   }

  //   // Check if the user exists in your MongoDB database
  //   const existingUser = await fetchUser(auth.userId);

  //   if (existingUser.onboarded) {
  //     // If the user exists, redirect them to the dashboard
  //     url.pathname = "/dashboard";
  //     return NextResponse.redirect(url);
  //   } else {
      
  //     // Redirect the user to the onboarding page
  //     url.pathname = "/onboarding";
  //     return NextResponse.redirect(url);
  //   }
  // },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
