import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <Dialog open="true" fullWidth="true" maxWidth="sm">
        <DialogTitle>Enter Personal Details</DialogTitle>
        <DialogContent>
          <TextField
            autofocus
            fullWidth
            margin="dense"
            label="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
          <TextField
            autofocus
            fullWidth
            margin="dense"
            label="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <TextField
            autofocus
            fullWidth
            margin="dense"
            label="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
        </DialogContent>
        <DialogActions>
          <Button color="secondary" variant="contained" onClick={this.back}>
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
            style={styles.nextButton}
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

const styles = {
  nextButton: {
    margin: 15
  }
};

export default FormPersonalDetails;
