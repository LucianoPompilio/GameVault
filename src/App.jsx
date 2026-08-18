import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import MyLibrary from './pages/MyLibrary';
import GameDetail from "./pages/GameDetail";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/library',
    element: <MyLibrary />,
  },
  {
    path: "/game/:id",
    element: <GameDetail />
  }
]);

function App() {
  return (
    <>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </>
  );
}

export default App;
