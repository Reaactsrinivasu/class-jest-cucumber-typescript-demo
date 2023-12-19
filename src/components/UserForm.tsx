import React, { ChangeEvent, Component } from 'react';
import {
    Box,
    Grid,
    Paper,
    Button,
    TextField,
    Typography,
} from "@mui/material";

interface UserFormData {
  firstName: string;
    errors: {
         firstName?: string,
      }
}

class UserForm extends Component<{}, UserFormData> {
  constructor(props: {}) {
    super(props);
    this.state = {
      firstName: '',
        errors: {
         firstName: '',
      }
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
   
    const { name, value } = event.target;
    // this.setState({ [name]: value } as unknown as Pick<UserFormData, keyof UserFormData>);
       this.setState((prevState) => ({[name]: value,errors: {...prevState.errors,[name]: ''}})as unknown as Pick<UserFormData, keyof UserFormData>);
  };
  validateField = (name: string, value: string) => { 
    const errors: Partial<UserFormData['errors']> = {};
    if (name === 'firstName') {
      if (!value.trim()) {
        errors[name] = 'First Name is required';
      } else {
        errors[name] = '';
      }
    }

    return errors;
  }
  handleButtonClick = () => {
    // console.log('Form:', this.state,);
    const { firstName,} = this.state;

    // Validate each field
    const errors = {
      //  firstName: this.validateField('firstName', firstName).firstName,
       ...this.validateField('firstName', firstName),
    };
    // Check if there are any validation errors
    if (Object.values(errors).some((error) => error !== '')) {
      this.setState({ errors });
      return;
    }
    // Perform form submission logic here (e.g., API call, data processing)
    // Reset errors and proceed with form submission logic
    this.setState({firstName: '',errors: {}});
    // console.log('Form submitted:', this.state);
  };

  render() {
    const {errors} = this.state;
    return (
        <>
           
             <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "10%",
          }}
        >
          <Paper
            elevation={2}
            sx={{
              padding: "3%",
                width: "100%",
                maxWidth:"40%",
              borderRadius: "5px",
            }}
          >
            <Grid container display="flex" justifyContent="center" >
              <Typography
                sx={{ fontSize: "20px", fontWeight: "bold", color: "blue" }}
              >
                Employee Form
              </Typography>
              
                <Grid item xs={12} sm={12} md={12}>
                <TextField
                    type="text"
                    label="First Name"
                    placeholder="your first name here"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    error={!!errors.firstName}
                    helperText={errors.firstName}
                    fullWidth
                    margin="normal"
                    autoComplete="off"
                    autoFocus
                    id='#firstNameError'
                  />
                </Grid>
                <Button
                  variant="contained"
                  id = '#submitBtn'
                  sx={{
                      textTransform: "none",
                      borderRadius: "20px",
                      backgroundColor: "#ff9f00eb",
                      color: "#fffff",
                      fontWeight: "bold",
                      fontSize: "18px",
                      marginTop: "4%",
                      '&:hover': {
                          // backgroundColor: "#fb641b",
                          backgroundColor: "#ff9f00eb",
                          color: "#fff",
                      },
                }}
                 onClick={() => this.handleButtonClick()}
                >
                  Submit Details
                </Button>
              
            </Grid>
          </Paper>
        </Box>
        </>
    );
  };
};
export default UserForm;