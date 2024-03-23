import useDonkStore from '.'

const selectors = {
  dk: useDonkStore.getState().dk,
  diddy: useDonkStore.getState().diddy,
  lanky: useDonkStore.getState().lanky,
  tiny: useDonkStore.getState().tiny,
  chunky: useDonkStore.getState().chunky
}

export const complexSelectors = {
  anyKong: selectors.dk || selectors.diddy || selectors.lanky || selectors.tiny || selectors.chunky
}

export default selectors
