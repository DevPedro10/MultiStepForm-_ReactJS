import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'
import App from '../App';

export class FormPersonalDetails extends Component {
    
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render(){
        const {values: {firstName, lastName, email, occupation, city, bio}} = this.props;
    return (
        <MuiThemeProvider>
            <React.Fragment>
            <AppBar title="Confirmação de dados" />
        <List>
            <ListItem
                primaryText="Nome"
                secondaryText= {firstName} />
            <ListItem
                primaryText="Sobrenome"
                secondaryText= {lastName} />
            <ListItem
                primaryText="E-mail"
                secondaryText= {email} />
            <ListItem
                primaryText="Cidade"
                secondaryText= {city} />
            <ListItem
                primaryText="Profissão"
                secondaryText= {occupation} />
            <ListItem
                primaryText="Biografia"
                secondaryText= {bio} />
        </List>
           <br/>
            <RaisedButton
            label="Confirmar e continuar"
            primary={false}
            style={styles.button}
            onClick={this.continue}
            />
            <RaisedButton
            label="Editar"
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
