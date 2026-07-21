import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ShoppingFormProps = {
  productName: string;
  productAmount: number;
  onNameChange: (name: string) => void;
  onAmountChange: (amount: number) => void;
  onAdd: () => void;
};

function ShoppingForm({
  productName,
  productAmount,
  onNameChange,
  onAmountChange,
  onAdd,
}: ShoppingFormProps) {
  return (
    <form
      className="w-full"
      onSubmit={(event) => {
        event.preventDefault();
        onAdd();
      }}
    >
      <div className="flex w-full gap-2">
        <Input
          placeholder="Produkt eingeben..."
          className="flex-1"
          value={productName}
          onChange={(event) => onNameChange(event.target.value)}
        />

        <Input
          type="number"
          min={1}
          value={productAmount}
          onChange={(event) => onAmountChange(Number(event.target.value))}
          className="w-16"
        />
      </div>

      <Button type="submit" className="mt-2 w-full">
        Hinzufügen
      </Button>
    </form>
  );
}

export default ShoppingForm;
