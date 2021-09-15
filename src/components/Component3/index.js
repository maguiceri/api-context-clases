import React from 'react';
import ThemeContext from "../../contexts/ThemeContext"

class Component3 extends React.Component{
    static contextType = ThemeContext;
    render(){
        return(
            <>
            <p>soy el componente 3</p>
            <p>El valor de mi context es {this.context} </p>
            </>
        )
    }
}

export default Component3;