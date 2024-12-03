#!/usr/bin/env node
import { mkdirSync, writeFileSync } from "node:fs";
import createIndexTemplate from "./createIndexTemplate.js";
import createPackageTemplate from "./createPackageTemplate.js";
import question from "./question/index.js";
import { createConfig } from "./config.js";
import { execa } from "execa";
import path from "node:path";

const answer = await question();
const config = createConfig(answer);

// 1. 创建项目文件夹
mkdirSync(getRootPath())

// 2.创建入口文件 -> index.js
writeFileSync(`${getRootPath()}/index.js`, await createIndexTemplate(config))

// 3.创建 package.json
writeFileSync(`${getRootPath()}/package.json`, await createPackageTemplate(config))

// 4.安装依赖
execa("pnpm", ["install"], {
    cwd: getRootPath(),
    stdio: "inherit"
})

function getRootPath() {
    return path.resolve(process.cwd(), config.packageName)
}