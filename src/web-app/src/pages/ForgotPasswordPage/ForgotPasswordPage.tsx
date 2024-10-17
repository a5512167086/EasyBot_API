import { Avatar, Button, TextField, Box, Typography } from '@mui/material'
import HelpCenterIcon from '@mui/icons-material/HelpCenter'
import { StyledForgotPasswordPage } from './ForgotPasswordPage.style'

export const ForgotPasswordPage = () => {
  return (
    <StyledForgotPasswordPage maxWidth="xs">
      <Box className="forgot__box">
        <Avatar className="forgot__avatar">
          <HelpCenterIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Your Password?
        </Typography>
        <Typography className="forgot__description">
          Enter your email address and we will send you a password reset email.
        </Typography>
        <Box component="form" className="forgot__formBox">
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="sigin__forgotButton"
          >
            Send Password Reset Email
          </Button>
        </Box>
      </Box>
    </StyledForgotPasswordPage>
  )
}
