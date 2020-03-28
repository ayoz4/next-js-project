import React from "react";
import {
  Button,
  DialogTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  TextField
} from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const goodCreateSchema = Yup.object().shape({
  name: Yup.string().required(),
  description: Yup.string().required(),
  price: Yup.string().required()
});

const Window = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = good => {
    setOpen(false);
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
        <Formik
          initialValues={{ name: "", description: "", price: 0 }}
          validationSchema={goodCreateSchema}
          onSubmit={values => {
            onSubmit(values);
          }}
        >
          {({ errors, touched, values, handleChange }) => (
            <Form>
              <DialogTitle id="form-dialog-title">Create good</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Enter the fields with the correct values to create a new good.
                </DialogContentText>

                <TextField
                  autoFocus
                  value={values.name}
                  error={errors.name && touched.name}
                  margin="dense"
                  name="name"
                  onChange={handleChange}
                  label="Good's name"
                  type="text"
                  helperText={errors.name}
                  fullWidth
                />

                <TextField
                  error={errors.description && touched.description}
                  margin="dense"
                  name="description"
                  label="Good's description"
                  type="text"
                  values={values.description}
                  helperText={errors.description}
                  onChange={handleChange}
                  fullWidth
                />

                <TextField
                  error={errors.price && touched.price}
                  margin="dense"
                  name="price"
                  label="Good's price"
                  type="number"
                  value={values.price}
                  helperText={errors.price}
                  onChange={handleChange}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </div>
  );
};

export default Window;
