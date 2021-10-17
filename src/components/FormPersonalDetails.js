import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import App from '../App';

export class FormPersonalDetails extends Component {
    
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
            <AppBar title="Dados pessoais" />
            <TextField hintText="Sua profissão" 
            floatingLabelText="Profissão"
            onChange={handleChange('occupation')}
            defaultValue={values.occupation} />
            <br/>

            <TextField hintText="Sua Cidade" 
            floatingLabelText="Cidade"
            onChange={handleChange('city')}
            defaultValue={values.city} />
            <br/>

            <TextField hintText="Fale um pouco sobre você" 
            floatingLabelText="Biografia"
            onChange={handleChange('bio')}
            defaultValue={values.bio} />
            <br/>
            <RaisedButton
            label="Continuar"
            primary={true}
            style={styles.button}
            onClick={this.continue}
            />

            <RaisedButton
            label="Voltar"
            primary={false}
            style={styles.button}
            onClick={this.back}
            />
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

export default FormPersonalDetails
