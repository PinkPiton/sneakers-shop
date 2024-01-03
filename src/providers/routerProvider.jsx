import { useRoutes } from "react-router-dom";
import { Home } from "../components/Home";
import Layout from "../components/Layout/Layout";

export function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
    // {
    //   element: <LoginPage />,
    //   path: PATH_PAGE.login,
    // },
    // {
    //   element: auth.isAuthenticated ? <Layout /> : <LoginPage />,
    //   children: [
    //     {
    //       path: PATH_PAGE.admin.root,
    //       element: <AdminPage />,
    //     },
    //   ],
    // },
  ]);
}
