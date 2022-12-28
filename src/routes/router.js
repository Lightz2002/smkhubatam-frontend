import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../not-found-page";
import { QueryClient } from "react-query";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "../components/Login/Login";
import Dashboard, {
  loader as dashboardLoader,
  action as dashboardAction,
} from "../components/Dashboard/Dashboard";
import UserList, {
  loader as userLoader,
  action as userAction,
} from "../components/User/UserList";
import JournalList from "../components/Journal/JournalList";
import LocationList, {
  loader as locationLoader,
  action as locationAction,
} from "../components/Location/LocationList";

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
    action: dashboardAction(queryClient),
    loader: dashboardLoader(queryClient),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "student/",
        element: <UserList />,
        loader: userLoader(queryClient),
        action: userAction(queryClient),
      },
      {
        path: "student/:studentId",
        element: <UserList />,
        loader: userLoader(queryClient),
        action: userAction(queryClient),
      },
      {
        path: "journal/",
        element: <JournalList />,
      },
      {
        path: "location/",
        element: <LocationList />,
        loader: locationLoader(queryClient),
        action: locationAction(queryClient),
      },
    ],
  },
]);

export default router;
