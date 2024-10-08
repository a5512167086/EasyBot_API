import {
  Avatar,
  Button,
  TextField,
  Link,
  Grid2,
  Box,
  Typography
} from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { StyledSignUpPage } from './SignUpPage.style'

export const SignUpPage = () => {
  return (
    <StyledSignUpPage maxWidth="xs">
      <Box className="signup__box">
        <Avatar className="signup__avatar">
          <PersonAddAltIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" noValidate className="signup__formBox">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirm-password"
            label="Confirm Password"
            type="password"
            id="confirm-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="sigin__signupButton"
          >
            Sign Up
          </Button>
          <Grid2 container>
            <Link href="#" variant="body2">
              Already have an account?
            </Link>
          </Grid2>
        </Box>
      </Box>
    </StyledSignUpPage>
  )
}
