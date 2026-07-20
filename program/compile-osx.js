import nwbuild from '../src/index.js';

await nwbuild({
  mode: 'build',
  flavor: 'sdk',
  platform: 'osx',
  srcDir: './program/input',
  cacheDir: './node_modules/nw',
  outDir: './program/output/osx',
  glob: false,
  logLevel: 'debug',
  app: {
    name: '魔降ル夜ノ凜 Animation',
    /* File path of icon from where it is copied. */
    icon: './program/input/icon.icns',
    LSApplicationCategoryType: 'public.app-category.games',
    CFBundleIdentifier: 'com.lilith.mafuruyorunorin',
    CFBundleName: '魔降ル夜ノ凜 Animation',
    CFBundleDisplayName: '魔降ル夜ノ凜 Animation',
    CFBundleSpokenName: '魔降ル夜ノ凜 Animation',
    CFBundleVersion: '1.0.0',
    CFBundleShortVersionString: '1.0.0',
    NSHumanReadableCopyright: 'Copyright © 2020 LILITH',
    NSLocalNetworkUsageDescription: '魔降ル夜ノ凜 Animation requires access to network to showcase its capabilities',
  }
});
