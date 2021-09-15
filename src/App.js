import React from 'react';
import { ThemeProvider } from "./contexts/ThemeContext";
import Component2 from "./components/Component2"

class App extends React.Component{
  render(){
    return(
      <ThemeProvider value="CourseIt">
        <p>Primer componente</p>
        <Component2/>
      </ThemeProvider>
    )
  }
}

export default App;
