import { Avatar, Button, TextField, Box, Typography } from '@mui/material'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import { StyledSignUpPage } from './SignUpPage.style'
import { PAGE_PATHS } from '@/routes'
import { CustomLink } from '@/components/CustomLink'

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
          <CustomLink
            linkText="Already have an account?"
            link={PAGE_PATHS.SIGN_IN}
            variant="body2"
          />
        </Box>
      </Box>
    </StyledSignUpPage>
  )
}
