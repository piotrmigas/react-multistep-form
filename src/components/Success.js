import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

class Success extends Component {
  render() {
    return (
      <Dialog open="true">
        <DialogTitle>Success!</DialogTitle>
      </Dialog>
    );
  }
}

export default Success;
