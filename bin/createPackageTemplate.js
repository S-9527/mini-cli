import {readFileSync} from "fs";
import ejs from "ejs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { format } from "prettier";

export default (config) => {
    const __filename = fileURLToPath(import.meta.url)
    const packageTemplate = readFileSync(
        path.resolve(__filename,"../template/package.ejs")
    )

    const code = ejs.render(packageTemplate.toString(), {
        packageName: config.packageName,
        middleware: config.middleware
    });

    return format(code, { parser: "json" });
}