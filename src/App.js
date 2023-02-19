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
      warning: {
        main: "#d32f2f",
        dark: "#c62828",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Box
          className="App"
          sx={{
            height: "100%",
          }}
        >
          <RouterProvider router={router} />
        </Box>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
