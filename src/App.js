import "./App.css";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./routes/router.js";
import { blue } from "@mui/material/colors";

function App() {
  const queryClient = new QueryClient();
  const theme = createTheme({
    palette: {
      primary: {
        main: "#439A97",
      },
      error: {
        main: "#d32f2f",
      },
      warning: {
        main: "#ed6c02",
      },
      info: {
        main: "#0288d1",
      },
      success: {
        main: "#2e7d32",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box
          className="App"
          sx={{
            minHeight: "100vh",
          }}
        >
          <RouterProvider router={router} />
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
