import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';

export class Sucess extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const {values, handleChange} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar title="Enviado com Sucesso" />
            <h1>Obrigado pela sua inscrição</h1>
            <h3>Você receberá um e-mail em breve. Fique de olho na sua caixa de entrada.</h3>            
            </React.Fragment>
        </MuiThemeProvider>
    );
}
}

const styles = {
    button: {
        margin: 15
    }
}

export default Sucess
