import { Suspense } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CustomLoader } from '@/components/CustomLoader'
import { theme } from '@/configs/theme'
import { BaseWrapper } from './components/BaseWrapper'
import { SignInPage } from '@/pages/SignInPage/'
import { SignUpPage } from '@/pages/SignUpPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseWrapper>
        <Suspense fallback={<CustomLoader size="6rem" text="Loading..." />}>
          <SignUpPage></SignUpPage>
          <SignInPage></SignInPage>
        </Suspense>
      </BaseWrapper>
    </ThemeProvider>
  )
}

export default App
