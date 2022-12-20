import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../not-found-page";
import { QueryClient } from "react-query";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "../components/Login/Login";
import Dashboard, {
  loader as dashboardLoader,
} from "../components/Dashboard/Dashboard";
import UserList, {
  loader as userLoader,
  action as userAction,
} from "../components/User/UserList";
import JournalList from "../components/Journal/JournalList";

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
        loader: userLoader(queryClient),
        action: userAction(queryClient),
      },
      {
        path: "journal/",
        element: <JournalList />,
      },
    ],
  },
]);

export default router;
