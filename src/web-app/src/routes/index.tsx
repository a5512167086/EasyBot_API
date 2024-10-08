import { createBrowserRouter } from 'react-router-dom'
import { SignInPage } from '@/pages/SignInPage'
import { SignUpPage } from '@/pages/SignUpPage'
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage'
import { BaseWrapper } from '@/components/BaseWrapper'

export const PAGE_PATHS = {
  BASE: '/',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  FORGOT_PASSWORD: '/forgot-password'
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
        element: <div>Test</div>
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
      }
    ]
  }
])
