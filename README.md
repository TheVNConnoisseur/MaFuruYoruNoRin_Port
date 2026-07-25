# Ma Furu Yoru no Rin

The game was designed originally to be played with **CefSharp**, based specifically on a build made for [Chromium 73.0.3683.75](https://chromium.googlesource.com/chromium/src/+/73.0.3683.75), according to the README file included on the game.
That means that while the game can be run on a simple HTTP server, the developers decided to use a framework that is only compatible with Windows, not allowing other devices to play with it.

The aim of this project is to modernize to the best extent the framework of this game, while ensuring that no original game file has to be modified.

## Roadmap

- [ ] Mobile native port (NW.JS still has [no native Android/iOS support](https://github.com/Elanis/web-to-desktop-framework-comparison/#operating-systems-support))
- [X] Obtain the non-minified version of all JS libraries
- [X] Store cookies in a folder next to the game files (the game uses a cookie inside LocalStorage to keep track of all the unlocked scenes and each of the save states)
- [X] Video playback support for [.ogv video files](https://en.wikipedia.org/wiki/Theora)

## Changes done

| | Original | New | Comments |
| :--- | :---: | :---: | :---: |
| **Files encryption** | [MadMilkman.Ini](https://github.com/MarioZ/MadMilkman.Ini) | - | The original resources can be decrypted through this [tool](https://github.com/TheVNConnoisseur/MadMilkMan.Ini_Decrypter) |
| **Framework** | [CefSharp](https://cefsharp.github.io/) | [NW.JS](https://nwjs.io/) | Built using [nw-builder](https://github.com/nwutils/nw-builder/) |
| **Video files** | .ogv files played natively | .ogv files played through [ogv.js](https://github.com/bvibber/ogv.js) | Official support in Chromium [got dropped](https://chromestatus.com/feature/5158654475239424). Sadly, due to this library still [not supporting proper looping](https://github.com/bvibber/ogv.js/blob/3e7cbd3d0b0274b11191cb2e1bed0186f8661f84/src/js/OGVPlayer.js#L561), a version with the files being converted to a supported format natively is recommended.  |
| **JS and CSS files** | Most are minified | Beautified or official development versions | While not necessary, this helps to keep the games to be ported to newer libraries |

### ogv.js

In order to implement loading the original video files, some changes had to be done with the library offered to load Theora video files.

What got changed from the original code of said library is in **bold**.

| File name | Code | Comments |
| :--- | :---: | :---: |
| ogv.js | l = void 0 === d ? **999999999** : d | For some reason, the server responds with a 200, implying that the file has transfered completely, when it should be a 206. This change makes the size of the petition to be big enough to fit all video files inside one HTTP response. |
| ogv.js | return h.url = i, h.offset = u, h.length = d, h.cachever = l, h.loaded = !1, h.seekable = !**0**, h.headers = {}, h.eof = !1, h.bytesRead = 0, h.xhr = new XMLHttpRequest, h | Because of the file being completely transfered in one go (because of the change done above this one), the library assumes that the file is not seekable, and thus, this parameter never gets set to true. To ensure proper looping, this value gets set to true before the creation of the video stream. |
| ogv-demuxer-ogg-wasm.js | p = **false** | The game runs inside a Chromium instance, but for some reason the environment exposes a process object, making the Emscripten-generated loader think that it's running under Node.js, so it assumes that the value __dirname exists (it only does with CommonJS modules). |


### Original files

It is important to note that these files are taken from the `Player.pkg` file.

| File name | Code | Comments |
| :--- | :---: | :---: |
| vinos-event-handler-web.js | onExit : function() | The old version of CefSharp used the same function but from `vinos-event-handler-app.js`, which has this functionality implemented, while for the web version not. This allows for the game to shut down using the native button in-game. |

## Building

**1.** Clone the repository (or download)
   ```
   git clone https://github.com/TheVNConnoisseur/MaFuruYoruNoRin_Port.git
   ```
**2.** Install Node.JS and npm: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

**3.** Open a terminal session and make its working directory to be _the folder that holds the repository_

**4.** Extract the game files from the ``data.pkg`` file. Copy the extracted resources onto the folder from this repository called ``program/input``.

**5.** *(Optional)* Decide if to make the game load the original .ogv video files or those being converted to a [format supported by Chromium](https://www.chromium.org/audio-video/).

- **.ogv:** Replace the files in `program/input-ogv` to the `program/input` folder.
- **A valid native format**: Convert the video files to a valid format (preferably use ffmpeg). Edit the following line in the file `program/input/info.json`:

	```json
   "videoExt":".ogv",
   ```

   In this case, the extension should be changed to the one that has been chosen.

**6.** Compile the application for your platform of choice by using the correspoding [script](https://github.com/TheVNConnoisseur/MaFuruYoruNoRin_Port/blob/7b9e696716bee888710361e1bbeb76874537f62b/package.json#L30). Remember that the way of proceeding is ``npm run {the script name chosen}``.

If the building process finished successfully, the terminal will report the output path.

## Licenses

[nw-builder](https://github.com/nwutils/nw-builder) - MIT License

[ogv.js](https://github.com/bvibber/ogv.js) - Copyright © 2013-2024 Brooke Vibber and other contributors