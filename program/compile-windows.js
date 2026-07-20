import nwbuild from '../src/index.js';

await nwbuild({
  mode: 'build',
  flavor: 'sdk',
  platform: 'win',
  srcDir: './program/input',
  cacheDir: './node_modules/nw',
  outDir: './program/output/win',
  glob: false,
  logLevel: 'debug',
  app: {
    name: '魔降ル夜ノ凜 Animation',
    /* File path of icon from where it is copied. */
    icon: './program/input/icon.ico',
    version: '1.0.0',
    comments: '',
    company: 'LILITH',
    fileDescription: '魔降ル夜ノ凜 Animation',
    fileVersion: '1.0.0',
    internalName: '魔降ル夜ノ凜 Animation',
    legalCopyright: 'Copyright © 2020 LILITH',
    originalFilename: '魔降ル夜ノ凜 Animation',
    productName: '魔降ル夜ノ凜 Animation',
    productVersion: '1.0.0',
  }
});
