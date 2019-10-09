import React from 'react';
import {Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ApiController from '../controller/ApiController';

export default class CrearContacto extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      open: false,
      nombre: '',
      domicilio:'',
      mail:'',
      dni:'',
      cumple:''
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = (e) => {
      console.log("nombre",this.state.nombre);
      let data = {
          nombre : this.state.nombre,
          domicilio : this.state.domicilio,
          mail : this.state.mail,
          dni : this.state.dni,
          cumple : this.state.cumple
      };
      ApiController.insertContacto(data);
      this.setState({ open: false });

    //this.setState({ open: false });
  };

  onChangeNombre (e){
    
    this.setState({nombre : e.target.value});
  }
  onChangeMail = (e)=>{
    this.setState({mail : e.target.value});
  }
  onChangeDomicilio = (e)=>{
    this.setState({domicilio : e.target.value});
  }
  onChangeDNI = (e)=>{
    this.setState({dni : e.target.value});
  }
  onChangeCumple = (e)=>{
    this.setState({cumple : e.target.value});
  }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Crear nuevo Contacto
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Crear Contacto</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Ingrese los datos requeridos para crear un nuevo contacto.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Nombre"
              type="text"
              fullWidth
              value = {this.state.name}
              onChange = {this.onChangeNombre.bind(this)}
            />
            <TextField
              margin="dense"
              id="domicilio"
              label="Domicilio"
              type="text"
              fullWidth
              value = {this.state.domicilio}
              onChange = {this.onChangeDomicilio.bind(this)}
            />
            <TextField
              margin="dense"
              id="mail"
              label="Mail"
              type="email"
              fullWidth
              value = {this.state.mail}
              onChange = {this.onChangeMail.bind(this)}
            />
            <TextField
              margin="dense"
              id="dni"
              label="DNI"
              type="text"
              fullWidth
              value={this.state.dni}
              onChange = {this.onChangeDNI.bind(this)}
            />
            <TextField
              margin="dense"
              id="cumple"
              label="Cumpleaños"
              type="text"
              fullWidth
              value={this.state.cumple}
              onChange = {this.onChangeCumple.bind(this)}
            />
            
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Grabar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
