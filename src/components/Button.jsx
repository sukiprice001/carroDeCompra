import { Component } from "react";

const style = {
    button:{
        backgroundColor: '#0A283e',
        color: '#fff', 
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'

    }
}

class Button extends Component{
    render(){
        return(
            <button style={style.button} {...this.props} />
        )
    }
}

export default Button;