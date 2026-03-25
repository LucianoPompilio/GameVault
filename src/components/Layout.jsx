import { Outlet } from "react-router-dom";


function Layout({children, pepito}) { 
  return (
    <>
      <header>
        <h1>Mi App</h1>
      </header>

      <main>
        {children} {pepito}
      </main>
    </>
  );
}

export default Layout;