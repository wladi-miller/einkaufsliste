import "./App.css";

function App() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col items-center justify-center px-4">
      <h1 className="mb-10 mt-16 text-3xl font-semibold">Einkaufsliste</h1>

      <div className="flex w-full gap-2">
        <input
          type="text"
          placeholder="Produkt eingeben..."
          className="h-10 flex-1 rounded-md border border-gray-200 bg-white px-3 text-sm outline-none placeholder:text-gray-500 focus:border-gray-400"
        />

        <input
          type="number"
          defaultValue={1}
          min={1}
          className="h-10 w-14 rounded-md border border-gray-200 bg-white px-3 text-sm outline-none focus:border-gray-400"
        />
      </div>

      <button
        type="button"
        className="mt-2 h-11 w-full rounded-md bg-gray-900 px-8 text-sm font-medium text-white transition-colors hover:bg-gray-800"
      >
        Eintrag Hinzufügen
      </button>

      <div className="mt-6 flex w-full flex-col gap-2">
        <article className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow">
          <div>
            <h2 className="text-lg font-semibold">Milch</h2>

            <p className="text-sm text-gray-500">Anzahl: 1</p>
          </div>

          <button
            type="button"
            className="h-11 rounded-md border border-gray-200 bg-white px-6 text-sm font-medium transition-colors hover:bg-gray-100"
          >
            Abhaken
          </button>
        </article>
      </div>
    </main>
  );
}

export default App;
