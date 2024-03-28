# lanky-tracker

Use [lanky-tracker](https://wolfman2000.github.io/) now!

This is a [Donkey Kong 64 Randomizer](https://dk64randomizer.com/) tracker written with an [electron-vite](https://electron-vite.org/) setup in addition to [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).
An Electron application with React and TypeScript.

## Current Features

- Left click to enable/disable most moves/kongs found.
  - Right click can work with the dual items like camera/shockwave and homing/sniper.
  - The scroll wheel can be used for slams, pearls, and levels.
- Full logic tracker to let you know what checks are in logic.
  - Check the ones that are done to not worry about them.
- Foolish hint section automatically marks the locations that won't have major items.

## Current Bugs

Not every piece of logic is in place correctly. This is still a work in progress.

## Future Versions

The tracker is currently compatible with most standard races and KEVIN settings. However, some things need to be added first.

- Proper bananaport support.
- Proper hard shooting challenges support.
- Day selection in Forest (currently only either or for dusk).
- Flexible banana counts for presets like Treasure Hurry.

There's more to add, but the above are the most important at this time.

## Unlikely Features

If there is a way to enable autotracking with the underlying languages, it's not known at this time.

# Development

For those that wish to contribute to this project, committing directly to main is not allowed. Pull requests and forks are allowed, though.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) + [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows
$ npm run build:win

# For macOS
$ npm run build:mac

# For Linux
$ npm run build:linux
```

# Special Thanks

- 2dos and Ballaam for creating and maintaining the randomizer.
- Brian0255 for creating [Track-O-Matic](https://github.com/Brian0255/Track-O-Matic), a great tracker for KEVIN settings.
- ElectricFortune for providing a map tracker to the community.
- Spike_ssbu for blowing our minds and showing new sequence breaks.

Keep on donkin' everyone.
