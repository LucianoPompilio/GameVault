import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-black text-white">
        <Header></Header>
        {children}
      </main>
    </>
  );
}

export default Layout;
