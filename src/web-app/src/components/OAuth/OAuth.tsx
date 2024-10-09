import { Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { StyledOAuth } from './OAuth.style'

export const OAuth = () => {
  const handleLogin = () => {
    const client_id =
      '48844684655-se9surcs5rvd5ek14o1b39k0lbhvk6on.apps.googleusercontent.com'
    const redirect_uri = 'http://localhost:5173/oauth-callback'
    const scope =
      'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid' // 要請求的 OAuth 權限
    const response_type = 'code' // 授權碼流程
    const access_type = 'offline' // 如果需要刷新令牌
    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}&access_type=${access_type}`

    window.location.href = oauthUrl // 導向到 Google OAuth 入口
  }

  return (
    <StyledOAuth maxWidth="xs">
      <Button
        onClick={handleLogin}
        fullWidth
        variant="contained"
        className="oauth__button"
        startIcon={<GoogleIcon />}
      >
        Continue with Google
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        className="oauth__button"
        startIcon={<FacebookIcon />}
      >
        Continue with Facebook
      </Button>
    </StyledOAuth>
  )
}
