# Ma Furu Yoru no Rin (Android)

The game was designed originally to be played with **CefSharp**, based specifically on a build made for [Chromium 73.0.3683.75](https://chromium.googlesource.com/chromium/src/+/73.0.3683.75), according to the README file included on the game.
That means that while the game can be run on a simple HTTP server, the developers decided to use a framework that is only compatible with Windows, not allowing other devices to play with it.

The aim of this project is to modernize to the best extent the framework of this game, while ensuring that no original game file has to be modified.
## Changes done

| | Original | New | Comments |
| :--- | :---: | :---: | :---: |
| **Files encryption** | [MadMilkman.Ini](https://github.com/MarioZ/MadMilkman.Ini) | - | The original resources can be decrypted through this [tool](https://github.com/TheVNConnoisseur/MadMilkMan.Ini_Decrypter) |
| **Framework** | [CefSharp](https://cefsharp.github.io/) | - | Built using the template given in [RPG Maker to Android APK Guide](https://github.com/Reishandy/RPG-Maker-to-Android) |
| **JS and CSS files** | Most are minified | Beautified or official development versions | While not necessary, this helps to keep the games to be ported to newer libraries |

### Original files

It is important to note that these files are taken from the `Player.pkg` file.

| File name | Comments |
| :---: | :---: |
| skin.css | Since there is no way to resize the buttons to choose what submenu of the configuration tab is currently selected, those had to be made smaller and realigned vertically. Also, the close and reset configuration menu have been readjusted horizontally to be clickable. |
| title.html | In Android the more "correct" way of closing an application is by the user getting out of it, and shutting it down, rendering the close button in-game useless. Thus, the close button in the main menu has been removed. Also, all references to the other main menu buttons were removed that need an active internet connection. |

## Building

**1.** Clone the repository (or download).

**2.** Install Android Studio: [https://developer.android.com/studio](https://developer.android.com/studio)

**3.** Extract the game files from the ``data.pkg`` file. Copy the extracted resources onto the folder from this repository called ``app/src/main/assets/www``.

**4.** Convert to a [format supported by Chromium](https://www.chromium.org/audio-video/) the video files (preferably with ffmpeg), and then edit the following line in the file `app/src/main/assets/www/info.json`:

```json
	"videoExt":".ogv",
```

   In this case, the extension should be changed to the one that has been chosen.

**5.** Compile the application by following the steps required by Android Studio.

## Licenses

[RPG Maker to Android APK Guide](https://github.com/Reishandy/RPG-Maker-to-Android) - Apache 2.0 License
