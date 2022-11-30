import "./App.css";
import Login from "./components/Login/Login";
import { ThemeProvider, createTheme, Container, Box } from "@mui/material";
import { fetchapi } from "./utilities/helper";
import { RouterProvider, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./routes/router.js";
import { blue } from "@mui/material/colors";

function App() {
  const queryClient = new QueryClient();
  const theme = createTheme({
    // palette: {
    //   primary: {
    //     main: blue[50],
    //   },
    // },
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
