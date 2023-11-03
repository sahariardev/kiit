import {authMiddleware} from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", "/post(.*)", "/singlePost(.*)"]
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};