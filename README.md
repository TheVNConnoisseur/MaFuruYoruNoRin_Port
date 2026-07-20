# Ma Furu Yoru no Rin

The game was designed originally to be played with **CefSharp**, based specifically on a build made for [Chromium 73.0.3683.75](https://chromium.googlesource.com/chromium/src/+/73.0.3683.75), according to the README file included on the game.
That means that while the game can be run on a simple HTTP server, the developers decided to use a framework that is only compatible with Windows, not allowing other devices to play with it.

The aim of this project is to modernize to the best extent the framework of this game, while ensuring that no original game file has to be modified.

## Roadmap

- [ ] Mobile native port (NW.JS still has [no native Android/iOS support](https://github.com/Elanis/web-to-desktop-framework-comparison/#operating-systems-support))
- [X] Obtain the non-minified version of all JS libraries
- [ ] Video playback support for [.ogv video files](https://en.wikipedia.org/wiki/Theora)

## Changes done

| | Original | New | Comments |
| :--- | :---: | :---: | :---: |
| **Files encryption** | [MadMilkman.Ini](https://github.com/MarioZ/MadMilkman.Ini) | - | The original resources can be decrypted through this [tool](https://github.com/TheVNConnoisseur/MadMilkMan.Ini_Decrypter) |
| **Framework** | [CefSharp](https://cefsharp.github.io/) | [NW.JS](https://nwjs.io/) | Built using [nw-builder](https://github.com/nwutils/nw-builder/) |
| **Video files** | .ogv files played natively | .ogv files played through [ogv.js](https://github.com/bvibber/ogv.js) | Official support in Chromium [got dropped](https://chromestatus.com/feature/5158654475239424) |
| **JS and CSS files** | Most are minified | Beautified or official development versions | While not necessary, this helps to keep the games to be ported to newer libraries |
