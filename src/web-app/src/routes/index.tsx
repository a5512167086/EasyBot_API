import { createBrowserRouter } from 'react-router-dom'
import { SignInPage } from '@/pages/SignInPage'
import { SignUpPage } from '@/pages/SignUpPage'
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage'
import { BaseWrapper } from '@/components/BaseWrapper'
import { lazy } from 'react'
import OAuthCallback from '@/pages/OAuthCallbackPage/OAuthCallback'

const BotPage = lazy(() =>
  import('@/pages/BotPage').then((module) => ({ default: module.BotPage }))
)

export const PAGE_PATHS = {
  BASE: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  FORGOT_PASSWORD: '/forgot-password',
  OAUTH_CALLBACK: '/oauth-callback'
}

export const PUBLIC_NAVIGATION_ROUTE = [
  { text: 'Home', link: PAGE_PATHS.BASE },
  { text: 'Sign In', link: PAGE_PATHS.SIGN_IN },
  { text: 'Sign Up', link: PAGE_PATHS.SIGN_UP }
]

export const router = createBrowserRouter([
  {
    path: PAGE_PATHS.BASE,
    element: <BaseWrapper />,
    children: [
      {
        index: true,
        element: <BotPage />
      },
      {
        path: PAGE_PATHS.SIGN_IN,
        element: <SignInPage />
      },
      {
        path: PAGE_PATHS.SIGN_UP,
        element: <SignUpPage />
      },
      {
        path: PAGE_PATHS.FORGOT_PASSWORD,
        element: <ForgotPasswordPage />
      },
      {
        path: PAGE_PATHS.OAUTH_CALLBACK,
        element: <OAuthCallback />
      }
    ]
  }
])