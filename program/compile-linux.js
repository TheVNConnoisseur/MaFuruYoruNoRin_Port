import nwbuild from '../src/index.js';

await nwbuild({
  mode: 'build',
  flavor: 'sdk',
  platform: 'linux',
  srcDir: './program/input',
  cacheDir: './node_modules/nw',
  outDir: './program/output/linux',
  glob: false,
  logLevel: 'debug',
  app: {
    name: '魔降ル夜ノ凜 Animation',
    genericName: '魔降ル夜ノ凜 Animation',
    noDisplay: false,
    comment: '',
    // File path of icon from where it is copied. Since Linux executables do not have icons embedded onto them, 
    // this just copies directly this path for the executable created in the output folder, which in tandem means 
    // the path defined here should be done from within the output folder
    icon: './icon.png',
    hidden: false,
    // onlyShowIn: [],
    // notShowIn: [],
    dBusActivatable: true,
    exec: './program/output/linux/"魔降ル夜ノ凜 Animation"',
  }
});
