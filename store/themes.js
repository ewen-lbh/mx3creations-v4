export const store = () => ({
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
  current: { secondary: '#e2f9b2', primary: '#4d2f01', name: 'Avocado' }
})

export const getters = {
  isCurrentTheme: (state, getters) => (theme) =>
    /* Determine if the given theme is identical to the currently set theme
     */
    theme.secondary === getters.current.secondary &&
    theme.primary === getters.current.primary,
  themes: (state, getters) =>
    /* Retrieves all the available themes, and add a bool prop "current"
     */
    state.themes.map((theme) => ({
      ...theme,
      isCurrent: getters.isCurrentTheme(theme)
    })),
  current: (state, getters) =>
    /* Retrieves the current theme
     */
    state.current,
  by: (state, getters) => (value, prop = 'name') =>
    /* Get a theme object that has a `prop` equal to `value`
     */
    getters.themes.find((o) => o[prop] === value)
}

export const mutations = {
  SET_CURRENT_THEME({ state }, theme) {
    /* Sets the current theme.
     */
    state.current = theme
  }
}

export const actions = {
  setCurrentTheme({ commit }, theme) {
    /* Sets the current theme.
     */
    commit('SET_CURRENT_THEME', theme)
  }
}
