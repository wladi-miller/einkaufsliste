import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import ShoppingItem from "./components/ShoppingItem";

type ShoppingItem = {
  id: number;
  name: string;
  amount: number;
  checked: boolean;
};

function App() {
  const [shoppingItems, setShoppingItems] = useState<ShoppingItem[]>(() => {
    const savedItems = localStorage.getItem("shoppingItems");

    if (savedItems === null) {
      return [];
    }

    return JSON.parse(savedItems);
  });

  const [productName, setProductName] = useState("");
  const [productAmount, setProductAmount] = useState(1);

  useEffect(() => {
    localStorage.setItem("shoppingItems", JSON.stringify(shoppingItems));
  }, [shoppingItems]);

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

    setShoppingItems((currentItems) => [...currentItems, newProduct]);
    setProductName("");
    setProductAmount(1);
  }

  function toggleChecked(id: number) {
    setShoppingItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  }

  function deleteProduct(id: number) {
    setShoppingItems((currentItems) =>
      currentItems.filter((item) => item.id !== id),
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
          <ShoppingItem
            key={item.id}
            item={item}
            onToggle={toggleChecked}
            onDelete={deleteProduct}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
