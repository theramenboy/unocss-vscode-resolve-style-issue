import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from "unocss";

import extractorPug from "@unocss/extractor-pug";
import { extractorSplit } from "@unocss/core";

export default defineConfig({
	shortcuts: [
		["p-container-s", "max-w-6xl mx-auto px-2 sm:px-6 lg:px-6"],
		["p-container", "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"],
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			prefix: "i-",
			scale: 1.2,
			warn: true,
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: "DM Sans",
				serif: "DM Serif Display",
				mono: "DM Mono",
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	extractors: [extractorPug(), extractorSplit],
	safelist: [..."prose prose-sm m-auto text-left".split(" ")],
});
