import nwbuild from "nw-builder";


const nwjsVersion = process.env.NWJS_VERSION ?? "0.90.0"

const baseOptions = {
  srcDir: "./nw",
  mode: "build",
  version: nwjsVersion,
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
