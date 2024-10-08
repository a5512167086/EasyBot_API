import { CssBaseline, ThemeProvider } from '@mui/material'
import { CustomLoader } from '@/components/CustomLoader'
import { theme } from '@/configs/theme'
import { RouterProvider } from 'react-router-dom'
import { router } from '@/routes/index'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider
        router={router}
        fallbackElement={<CustomLoader size="6rem" text="Loading..." />}
      />
    </ThemeProvider>
  )
}

export default App
