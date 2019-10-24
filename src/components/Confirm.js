import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import { List, ListItem, ListItemText } from "@material-ui/core/";

class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio }
    } = this.props;
    return (
      <Dialog open="true" fullWidth="true" maxWidth="sm">
        <DialogTitle>Confirm User Data</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <ListItemText primary="First Name" secondary={firstName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Name" secondary={lastName} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={email} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Occupation" secondary={occupation} />
            </ListItem>
            <ListItem>
              <ListItemText primary="City" secondary={city} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Bio" secondary={bio} />
            </ListItem>
          </List>
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
            Confirm & Continue
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

export default Confirm;
