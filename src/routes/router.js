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
import UserList from "../components/User/UserList";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    action: loginAction(queryClient),
    loader: loginLoader(queryClient),
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Dashboard />,
    loader: dashboardLoader(queryClient),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "users/",
        element: <UserList />,
      },
    ],
  },
]);

export default router;
