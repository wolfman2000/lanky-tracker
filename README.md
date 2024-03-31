# lanky-tracker

Use [lanky-tracker](https://wolfman2000.github.io/) now!

This is a [Donkey Kong 64 Randomizer](https://dk64randomizer.com/) tracker written with an [electron-vite](https://electron-vite.org/) setup in addition to [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/).
An Electron application with React and TypeScript.

## Current Features

- Left click to enable/disable most moves/kongs found.
  - Right click can work with the dual items like camera/shockwave and homing/sniper.
  - The scroll wheel can be used for slams, pearls, and levels. It is not guaranteed to work on the scrolling windows for things like hints and switchsanity switches.
- Full logic tracker to let you know what checks are in logic.
  - Check the ones that are done to not worry about them.
- Region hint section can be set to marks the locations as `FOOL` if they don't have major items, or `PATH` if they should be investigated.

## Current Bugs

The logic should be sound, but at this time only further testing can reveal additional bugs. If you see any logical issues, please bring them up respectfully.

## Future Versions

The tracker is currently compatible with a variety of settings, from standard races to NSAK and even esoteric settings like Dropsanity. In the future, the following can hopefully be added if enough time and testing takes place.

- Flexible banana counts for presets like Treasure Hurry.
- UI options for things like grouping everything by region and horizontal level tracking.
- More logic testing coverage. Some of the important pieces are in, but more should be in place.

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
- VerdantAsh for providing feedback regarding future versions of this tracker.

Keep on donkin' everyone.
