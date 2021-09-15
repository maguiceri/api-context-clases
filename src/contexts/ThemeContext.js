import React from 'react'

//creamos el contexto
const ThemeContext = React.createContext({})
//creamos el provider
export const ThemeProvider = ThemeContext.Provider;
//exportamos el contexto
export default ThemeContext;