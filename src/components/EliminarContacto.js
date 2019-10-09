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
      dni:''
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };
  handleDelete = () => {
    console.log("props",this.props);
    let data = {
      dniEliminado : this.state.dni
    }
    ApiController.deleteContacto(data);
    this.setState({ open: false });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  onChangeDNI = (e)=>{
    this.setState({dni : e.target.value});
  }
  render() {
    return (
      <div>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Eliminar Contacto
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Eliminar Contacto</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Aqui puede eliminar un contacto por DNI.
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
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleDelete} color="primary">
              Eliminar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
