import "./App.css";
import Login from "./components/Login/Login";
import { Container, Button, Flex } from "./components/styles/UI";
import { ThemeProvider } from "styled-components";
import { theme } from "./utilities/constant";
import { fetchapi } from "./utilities/helper";
import { RouterProvider, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import router from "./routes/router.js";

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Container className="App" minHeight="100%" width="inherit">
          <RouterProvider router={router} />
        </Container>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
