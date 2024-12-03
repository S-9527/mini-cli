import {checkbox, input} from "@inquirer/prompts";
import _port from "./port.js";
import _packageName from "./packageName.js";
import _middleware from "./middleware.js";
export default async () => {
    const port = await input(_port())
    const packageName = await input(_packageName())
    const middleware = await checkbox(_middleware())
    return { port, packageName, middleware }
}