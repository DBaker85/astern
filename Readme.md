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

![astern screenshot](https://raw.githubusercontent.com/DBaker85/astern/main/src/docs/screenshot.jpg)

## Installation

Download the latest release.

## Tested on

| Board           | 15min load avg |
| --------------- | -------------- |
| Raspberry pi 3B | 0.60 ~ 15%     |
| Raspberry pi A+ |                |

## Tech stack

Built with Preact and Redux to minimise DOM lookups.
Another big part was to use svgs and Visx to make the App as lightweight as possible while being feature packed. Also a big focus on memoization ( Maybe too much but 🤷 ).
