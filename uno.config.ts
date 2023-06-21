import { defineConfig, presetTypography, presetUno, presetIcons } from "unocss";
import { presetHeadlessUi } from "unocss-preset-primitives";

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons(),
    presetHeadlessUi({
      prefix: "ui",
    }) as any,
  ],
  shortcuts: {
    "input-base":
      "w-full px-3 rounded-md bg-transparent text-sm border border-slate-700 h-9 focus-visible:(outline-none ring-2 ring-offset-2 ring-offset-slate-800 ring-fuchsia-500 ring-opacity-50)",
    "input-error": "border-red-500",

    panel: "bg-slate-800 border border-slate-700 rounded-md",
  },
});
