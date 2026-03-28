import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout({children}) { 
  return (
    <>


      <main>
        <Header></Header>
        {children} 
      </main>
    </>
  );
}

export default Layout;