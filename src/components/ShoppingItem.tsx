import { Button } from "@/components/ui/button";

type ShoppingItemProps = {
  item: {
    id: number;
    name: string;
    amount: number;
    checked: boolean;
  };
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function ShoppingItem({ item, onToggle, onDelete }: ShoppingItemProps) {
  return (
    <article className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-6 shadow">
      <div className={item.checked ? "text-gray-400 line-through" : ""}>
        <h2 className="text-lg font-semibold">{item.name}</h2>

        <p className="text-sm text-gray-500">Anzahl: {item.amount}</p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" onClick={() => onToggle(item.id)}>
          {item.checked ? "Rückgängig" : "Abhaken"}
        </Button>

        <Button variant="destructive" onClick={() => onDelete(item.id)}>
          Löschen
        </Button>
      </div>
    </article>
  );
}

export default ShoppingItem;
