/**
 * An array of routes that are accessable to public
 * these routes doesnt require auth
 * @type {string[]}
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification",
    "/videoplayback.mp4",
]


/**
 * An array of routes that are accessable to private
 * these routes require auth
 * @type {string[]}
 */
export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password"
]

/**
 * the prefix for api authentication routes
 * Routes that start with prefix are used for API auth purposes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth"

export const DEFAULT_LOGIN_REDIRECT = "/profile";