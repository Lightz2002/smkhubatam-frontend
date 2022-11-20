import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../not-found-page";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "../components/Login/Login";
import Dashboard, {
  loader as dashboardLoader,
} from "../components/Dashboard/Dashboard";
import { QueryClient } from "react-query";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    action: loginAction(queryClient),
    loader: loginLoader(queryClient),
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: dashboardLoader(queryClient),
    errorElement: <ErrorPage />,
  },
]);

export default router;
