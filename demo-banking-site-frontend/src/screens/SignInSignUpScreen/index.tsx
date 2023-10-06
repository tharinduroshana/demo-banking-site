import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import React, { useState } from "react";

/*
* Sign In screen.
*
* This screen displays a username and password field to the user for the login
* */
const SignInSignUpScreen = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const setSignUp = () => {
    setIsSignUp(true);
  };

  const setSignIn = () => {
    setIsSignUp(false);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {isSignUp ? "Sign Up" : "Sign In"}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {isSignUp && (
            <TextField
              margin="normal"
              required
              fullWidth
              name="re-password"
              label="Re-enter Password"
              type="password"
              id="re-password"
              autoComplete="current-password"
            />
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          <Grid container>
            <Grid item xs>
              {!isSignUp && (
                <Link
                  style={{ textDecoration: "none" }}
                  href="#"
                  variant="body2"
                >
                  Forgot password?
                </Link>
              )}
            </Grid>
            <Grid item>
              <Link
                onClick={!isSignUp ? setSignUp : setSignIn}
                style={{ textDecoration: "none" }}
                href="#"
                variant="body2"
              >
                {!isSignUp ? "Sign Up" : "Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default SignInSignUpScreen;
