import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { format } from "prettier";
import path from "node:path";
import ejs from "ejs";

export default (config) => {
    const __filename = fileURLToPath(import.meta.url)
    const indexTemplate = readFileSync(
        path.resolve(__filename, "../template/index.ejs")
    )

    const code = ejs.render(indexTemplate.toString(), {
        port: config.port,
        middleware: config.middleware
    });

    return format(code, { parser: "babel" });
}