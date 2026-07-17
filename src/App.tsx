import "./App.css";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <section className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Einkaufsliste</h1>

          <p className="mt-2 text-sm text-gray-500">Produkt eingeben....</p>
        </header>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-400">
            Noch keine Artikel vorhanden.
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
