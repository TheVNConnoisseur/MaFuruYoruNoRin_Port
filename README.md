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


## Building

**1.** Clone the repository (or download)
   ```
   git clone https://github.com/TheVNConnoisseur/MaFuruYoruNoRin_Port.git
   ```
**2.** Install Node.JS and npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

**3.** Open a terminal session and make its working directory to be _the folder that holds the repository_

**4.** Extract the game files from the ``data.pkg`` file. Copy the extracted resources onto the folder from this repository called ``program/input``.

**5.** Compile the application for your platform of choice by using the correspoding [script](https://github.com/TheVNConnoisseur/MaFuruYoruNoRin_Port/blob/7b9e696716bee888710361e1bbeb76874537f62b/package.json#L30). Remember that the way of proceeding is ``npm run {the script name chosen}``.

If the building process finished successfully, the terminal will report the output path.

## Licenses

All of the programs used for this tool are mentioned in the README, check their respective home pages to see their corresponding licenses.
