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
    comment: 'Tooltip information',
    /* File path of icon from where it is copied. */
    icon: './program/input/icon.png',
    hidden: false,
    // TODO: test in different Linux desktop environments
    // onlyShowIn: [],
    // notShowIn: [],
    dBusActivatable: true,
    // TODO: test in Linux environment
    // tryExec: '/path/to/exe?'
    exec: './program/input/output/linux/魔降ル夜ノ凜 Animation',
  }
});
