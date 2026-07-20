import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function App() {
  return (
    <main className="mx-auto flex w-full max-w-lg flex-col items-center justify-center px-4">
      <h1 className="mb-10 mt-16 text-3xl font-semibold">Einkaufsliste</h1>

      <div className="flex w-full gap-2">
        <Input placeholder="Produkt eingeben..." className="flex-1" />

        <Input type="number" defaultValue={1} className="w-16" />
      </div>

      <Button className="mt-2 w-full">Eintrag hinzufügen</Button>

      <div className="mt-6 flex w-full flex-col gap-2">
        <article className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow">
          <div>
            <h2 className="text-lg font-semibold">Milch</h2>

            <p className="text-sm text-gray-500">Anzahl: 1</p>
          </div>

          <Button variant="outline">Abhaken</Button>
        </article>
      </div>
    </main>
  );
}

export default App;
