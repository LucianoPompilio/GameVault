import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
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
  return <Layout pepito={"hola"}> <RouterProvider  router={router} /></Layout>;
  }

export default App;