import { Suspense } from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { CustomLoader } from '@/components/CustomLoader'
import { theme } from '@/configs/theme'
import { BaseWrapper } from './components/BaseWrapper'
import { ForgotPasswordPage } from '@/pages/ForgotPasswordPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseWrapper>
        <Suspense fallback={<CustomLoader size="6rem" text="Loading..." />}>
          <ForgotPasswordPage></ForgotPasswordPage>
        </Suspense>
      </BaseWrapper>
    </ThemeProvider>
  )
}

export default App
