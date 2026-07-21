import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function App() {
  const [shoppingItems, setShoppingItems] = useState<
    { id: number; name: string; amount: number; checked: boolean }[]
  >([]);
  const [productName, setProductName] = useState("");
  const [productAmount, setProductAmount] = useState(1);

  function addProduct() {
    if (productName.trim() === "" || productAmount <= 0) {
      return;
    }
    const newProduct = {
      id: Date.now(),
      name: productName.trim(),
      amount: productAmount,
      checked: false,
    };

    setShoppingItems([...shoppingItems, newProduct]);
    setProductName("");
    setProductAmount(1);
  }

  function toggleChecked(id: number) {
    setShoppingItems(
      shoppingItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  return (
    <main className="mx-auto flex w-full max-w-lg flex-col items-center justify-center px-4">
      <h1 className="mb-10 mt-16 text-3xl font-semibold">Einkaufsliste</h1>

      <div className="flex w-full gap-2">
        <Input
          placeholder="Produkt eingeben..."
          className="flex-1"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <Input
          type="number"
          min={1}
          value={productAmount}
          onChange={(e) => setProductAmount(Number(e.target.value))}
          className="w-16"
        />
      </div>

      <Button className="mt-2 w-full" onClick={addProduct}>
        Eintrag hinzufügen
      </Button>

      <div className="mt-6 flex w-full flex-col gap-2">
        {shoppingItems.map((item) => (
          <article
            key={item.id}
            className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow"
          >
            <div>
              <h2
                className={`text-lg font-semibold ${
                  item.checked ? "text-gray-400 line-through" : ""
                }`}
              >
                {item.name}
              </h2>

              <p className="text-sm text-gray-500">Anzahl: {item.amount}</p>
            </div>

            <Button variant="outline" onClick={() => toggleChecked(item.id)}>
              {item.checked ? "Rückgängig" : "Abhaken"}
            </Button>
          </article>
        ))}
      </div>
    </main>
  );
}

export default App;
