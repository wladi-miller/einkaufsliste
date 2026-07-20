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
          <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3">
            <div className="flex items-center gap-3">
              <input type="checkbox" className="h-5 w-5" />

              <span className="text-gray-800">Milch</span>
            </div>

            <button
              type="button"
              className="rounded-md px-3 py-1 text-sm text-red-600 hover:bg-red-50"
            >
              Löschen
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
