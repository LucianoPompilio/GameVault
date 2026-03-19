import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MyLibrary from "./pages/MyLibrary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/library",
    element: <MyLibrary />,
  },
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App;
