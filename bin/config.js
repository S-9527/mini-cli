export function createConfig(answer) {
    const haveMiddleware = name => answer.middleware.includes(name);

    return {
        packageName: answer.packageName,
        port: answer.port,
        middleware: {
            router: haveMiddleware("router"),
            static: haveMiddleware("static"),
            views: haveMiddleware("views"),
            body: haveMiddleware("body")
        }
    }
}