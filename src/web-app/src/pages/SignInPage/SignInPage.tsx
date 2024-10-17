import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid2,
  Box,
  Typography
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { StyledSignInPage } from './SignInPage.style'
import { CustomDivider } from '@/components/CustomDivider'
import { OAuth } from '@/components/OAuth'
import { CustomLink } from '@/components/CustomLink'
import { PAGE_PATHS } from '@/routes'
import { useNavigate } from 'react-router-dom'

export const SignInPage = () => {
  const navigate = useNavigate()

  const handleSignIn = () => {
    navigate(PAGE_PATHS.BOT_LIST)
  }

  return (
    <StyledSignInPage maxWidth="xs">
      <Box className="signin__box">
        <Avatar className="signin__avatar">
          <LockOutlinedIcon />
        </Avatar>
        <OAuth />
        <CustomDivider text="OR" />
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box
          component="form"
          className="signin__formBox"
          onSubmit={(event) => {
            event.preventDefault()
            handleSignIn()
          }}
        >
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className="sigin__signinButton"
          >
            Sign In
          </Button>
          <Grid2 container>
            <Grid2 size={{ xs: 12, sm: 4 }}>
              <CustomLink
                linkText="Forgot password?"
                link={PAGE_PATHS.FORGOT_PASSWORD}
                variant="body2"
              />
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 8 }} className="signin__signupButton">
              <CustomLink
                linkText="Don't have an account? Sign Up"
                link={PAGE_PATHS.SIGN_UP}
                variant="body2"
              />
            </Grid2>
          </Grid2>
        </Box>
      </Box>
    </StyledSignInPage>
  )
}
