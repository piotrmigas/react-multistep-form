import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Dialog open="true" fullWidth="true" maxWidth="sm">
        <DialogTitle>Enter User Details</DialogTitle>
        <DialogContent>
          <TextField
            autofocus
            fullWidth
            margin="dense"
            label="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <TextField
            autofocus
            fullWidth
            margin="dense"
            label="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <TextField
            label="Email"
            onChange={handleChange("email")}
            defaultValue={values.email}
            autofocus
            fullWidth
            margin="dense"
          />
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="contained" onClick={this.continue} style={styles.button}>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
