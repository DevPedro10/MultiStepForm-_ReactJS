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
            <AppBar title="Sucess." />
            <h1>Thank You For You Submision</h1>
            <p>You Will get an Email with further instructions</p>
            
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
