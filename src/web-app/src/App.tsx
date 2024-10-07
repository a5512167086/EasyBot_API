import { Suspense } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CustomLoader } from "@/components/CustomLoader";
import { theme } from "@/configs/theme";
import { BaseWrapper } from "./components/BaseWrapper";
import { SignInPage } from "@/pages/SignInPage/SignInPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseWrapper>
        <Suspense fallback={<CustomLoader size="6rem" text="Loading..." />}>
          <SignInPage></SignInPage>
        </Suspense>
      </BaseWrapper>
    </ThemeProvider>
  );
}

export default App;
