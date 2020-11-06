![](https://img.shields.io/travis/DBaker85/astern?style=flat-square) [![Coverage Status](https://img.shields.io/coveralls/github/DBaker85/astern?style=flat-square)](https://coveralls.io/github/DBaker85/astern?branch=main)

<p align="center"> 
    <img src="https://raw.githubusercontent.com/DBaker85/astern/main/src/docs/astern_logo.png" alt="astern logo">
 </p>

# fAST modERN mobro theme

I wanted this theme to be modern and show some relevant stats like Core clock and Gpu stats but also very easy to run on less capable hardware.

## Features

| CPU         | GPU         | Ram   |
| ----------- | ----------- | ----- |
| Core Clock  | Core Clock  | Usage |
| Temperature | Temperature |
| Usage       | Vram Usage  |
|             | Usage       |

## Screenshot

![astern screenshot](https://raw.githubusercontent.com/DBaker85/astern/main/src/docs/screenshot.JPG)

## Installation

Download the [latest release](https://github.com/DBaker85/astern/releases)

### windows

- Navigate to `C:\Users\<username>\AppData\Local\MoBro\app-<version-number>\resources\resources\public\theme`
- Extract the all contents of the package there
- Restart MoBro server on your machine.
- The Theme should now be available

For more detailed instructions [click here](https://www.mod-bros.com/en/blog/b/configure-themes~916)

## Tested on

| Board           | 15min load avg |
| --------------- | -------------- |
| Raspberry pi 3B | 0.60 ~ 15%     |
| Raspberry pi A+ |                |

## Tech stack

Built with Preact and Redux to minimise DOM lookups.
Another big part was to use svgs and Visx to make the App as lightweight as possible while being feature packed. Also a big focus on memoization ( Maybe too much but 🤷 ).

## Bugs / Feature requests

If you do find any bugs, or have any feature requests fell free to open an [issue on Github](https://github.com/DBaker85/astern/issues)
