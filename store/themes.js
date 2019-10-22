import { firstBy } from 'thenby'
import tinycolor from 'tinycolor2'

export const state = () => ({
  themes: [
    { secondary: '#e2f9b2', primary: '#4d2f01', name: 'Avocado' },
    { secondary: '#0b0b0b', primary: '#2dff5b', name: 'Hacker' },
    { secondary: '#dadbe0', primary: '#072163', name: 'Deep' },
    { secondary: '#190444', primary: '#1cfff1', name: 'Quantum' },
    { secondary: '#060f3c', primary: '#ea2d87', name: 'Neon' },
    { secondary: '#ffb802', primary: '#d91104', name: 'Ketchup-mayo' },
    { secondary: '#d94404', primary: '#e8a21b', name: 'Fire' },
    { secondary: '#e2fdfe', primary: '#3c3c3c', name: 'Ice' },
    { secondary: '#ffffff', primary: '#000000', name: 'Minimalist' },
    { secondary: '#fdfddd', primary: '#e5cf06', name: 'Treasure' },
    { secondary: '#0d162c', primary: '#f24c18', name: 'Lava' },
    { secondary: '#ffffff', primary: '#268cce', name: 'The Past' },
    { secondary: '#6a0404', primary: '#f30e0e', name: 'Blood' },
    { secondary: '#F9F9F9', primary: '#ff0000', name: 'Duperré' }
  ],
  current: { secondary: '#e2f9b2', primary: '#4d2f01', name: 'Avocado' },
  inverted: false
})

export const getters = {
  isCurrent: (state, getters) => (theme) =>
    /* Determine if the given theme is identical to the currently set theme
     */
    theme.secondary === getters.current._secondary &&
    theme.primary === getters.current._primary,
  all: (state, getters) =>
    /* Retrieves all the available themes, and add a bool prop "current"
     */
    state.themes.map((theme) => ({
      ...theme,
      isCurrent: getters.isCurrent(theme)
    })),
  notCurrent: (state, getters) =>
    /* Retrieves all themes, except the current one.
     */
    getters.all.filter((o) => !o.isCurrent),
  current: (state, getters) => {
    /* Retrieves the current theme, and adds the CSS declaration to it for convenience.
       The CSS declaration also accounts for the inverted theme state, which is not stored
       directly by swapping .primary's & .secondary's values.
       Also overwrite .primary & .secondary in the returned object to reflect theme inversion.
       Keep the original colors w/ ._primary & ._secondary.
     */
    let primary = state.current.primary
    let secondary = state.current.secondary
    if (getters.inverted) {
      // Swap colors when theme is inverted
      ;[primary, secondary] = [secondary, primary]
    }
    return {
      ...state.current,
      _primary: state.current.primary,
      _secondary: state.current.secondary,
      css: `--primary:${primary};--secondary:${secondary};`,
      primary,
      secondary
    }
  },
  by: (state, getters) => (value, prop = 'name') =>
    /* Get a theme object that has a `prop` equal to `value`
     */
    getters.themes.find((o) => o[prop] === value),
  sorted: (state, getters) => (themes) =>
    /* Sort an array of themes object by...
      - light or dark
      - secondary color hue
      - primary color hue
      - name
    */
    themes.sort(
      // firstBy((o) => tinycolor(o.secondary).isLight())
      firstBy((o) => tinycolor(o.secondary).toHsl().l)
        .thenBy((o) => tinycolor(o.primary).toHsl().h)
        .thenBy('name')
    ),
  inverted: (state, getters) =>
    /* Retrieves a boolean representing the state of the current theme:
     * inverted (true) or not (false)
     * "inverted" means that the primary & secondary colors must be switched.
     */
    state.inverted
}

export const mutations = {
  SET_CURRENT(state, theme) {
    /* Sets the current theme.
     */
    state.current = theme
  },
  SET_INVERTED(state, inverted) {
    /* Sets the inversion state of the current theme.
     * See getters.inverted
     */
    state.inverted = inverted
  }
}

export const actions = {
  setCurrent({ commit }, theme) {
    /* Sets the current theme.
     */
    commit('SET_CURRENT', theme)
  },
  setInverted({ commit }, inverted) {
    /* Sets the inversion state of the current theme.
     * See getters.inverted
     */
    commit('SET_INVERTED', inverted)
  },
  invert({ dispatch, getters }) {
    /* Inverts the theme.
     */
    dispatch('setInverted', !getters.inverted)
  }
}
