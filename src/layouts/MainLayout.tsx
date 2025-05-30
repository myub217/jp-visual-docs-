const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold">JP Visual & Docs</h1>
        </div>
      </header>

      <main className="flex-grow px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-100 py-4 mt-8 text-center text-sm text-gray-600">
        &copy; {new Date().getFullYear()} JP Visual & Docs. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;