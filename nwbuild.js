import nwbuild from "nw-builder";


const nwjsVersion = process.env.NWJS_VERSION ?? "0.90.0"

const baseOptions = {
  srcDir: "./nw",
  mode: "build",
  version: nwjsVersion,
  manifestUrl: process.env.NWJS_MANIFEST_URL ?? "https://nwjs.io/versions.json",
  downloadUrl: process.env.NWJS_DOWNLOAD_URL ?? "https://dl.nwjs.io",
  glob: false,
  logLevel: "debug",
  arch: "x64",
}

const win = Object.assign(structuredClone(baseOptions), {
  outDir: "build/win/SMEditor",
  platform: "win",
  app: {
    name: "SMEditor",
    genericName: "SMEditor",
    internalName: "SMEditor",
    company: "tillvit",
    icon: "./public/assets/icon/favicon.ico",
    comment: "Open source tool to view and edit StepMania charts"
  }
})


console.log(`Building desktop target: win`)
await nwbuild(win)
