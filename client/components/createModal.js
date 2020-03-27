import React from "react";
import {
  Button,
  DialogTitle,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

const Window = props => {
  const [open, setOpen] = React.useState(false);
  const [good, setGood] = React.useState({
    name: "",
    description: "",
    price: 0
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = e => {
    setGood({
      ...good,
      [e.target.id]: e.target.value
    });
  };

  const onSubmit = () => {
    // setOpen(false);
    props.createGood(good);
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>Create good</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create good</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the fields with the correct values to create a new good.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Good's name"
            type="text"
            onChange={e => onChange(e)}
            fullWidth
          />

          <TextField
            margin="dense"
            id="description"
            label="Good's description"
            type="text"
            onChange={e => onChange(e)}
            fullWidth
          />

          <TextField
            margin="dense"
            id="price"
            label="Good's price"
            type="number"
            onChange={e => onChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Window;
