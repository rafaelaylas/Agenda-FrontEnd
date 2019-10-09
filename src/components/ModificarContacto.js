import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ApiController from '../controller/ApiController';

export default class CrearContacto extends React.Component {
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

  handleUpdate = () => {
    console.log("props",this.props);
    let data = {
      dniBuscado : this.state.dni,
      newData :{
        nombre : this.state.nombre
      }
    }
    ApiController.updateContacto(data);
    this.setState({ open: false });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  onChangeNombre (e){
    this.setState({nombre : e.target.value});
  }
  onChangeDNI = (e)=>{
    this.setState({dni : e.target.value});
  }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          modificar Contacto
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Modificar Contacto</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Aqui puede modificar los datos de un contacto.
            </DialogContentText>
            <TextField
              autoFocus
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
              id="name"
              label="Nombre"
              type="text"
              fullWidth
              value = {this.state.name}
              onChange = {this.onChangeNombre.bind(this)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleUpdate} color="primary">
              Modificar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
