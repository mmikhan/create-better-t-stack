import path from "node:path";
import { fileURLToPath } from "node:url";
import type { ProjectConfig } from "./types";

const __filename = fileURLToPath(import.meta.url);
const distPath = path.dirname(__filename);
export const PKG_ROOT = path.join(distPath, "../");

export const DEFAULT_CONFIG: ProjectConfig = {
	projectName: "my-better-t-app",
	database: "sqlite",
	orm: "drizzle",
	auth: true,
	addons: [],
	git: true,
	packageManager: "npm",
	noInstall: false,
	examples: ["todo"],
};

export const dependencyVersionMap = {
	"better-auth": "^1.2.4",

	"drizzle-orm": "^0.38.4",
	"drizzle-kit": "^0.30.5",

	"@libsql/client": "^0.14.0",
	postgres: "^3.4.5",

	"@prisma/client": "^6.5.0",
	prisma: "^6.5.0",

	"vite-plugin-pwa": "^0.21.2",
	"@vite-pwa/assets-generator": "^0.2.6",

	"@tauri-apps/cli": "^2.4.0",

	"@biomejs/biome": "1.9.4",

	husky: "^9.1.7",
	"lint-staged": "^15.5.0",
} as const;

export type AvailableDependencies = keyof typeof dependencyVersionMap;
