import { Suspense } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { CustomLoader } from "@/components/CustomLoader";
import { theme } from "@/configs/theme";
import { BaseWrapper } from "./components/BaseWrapper";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseWrapper>
        <Suspense fallback={<CustomLoader size="6rem" text="Loading..." />}>
          <div>test</div>
        </Suspense>
      </BaseWrapper>
    </ThemeProvider>
  );
}

export default App;
