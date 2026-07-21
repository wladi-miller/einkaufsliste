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
    <>
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

      <Button className="mt-2 w-full" onClick={onAdd}>
        Eintrag hinzufügen
      </Button>
    </>
  );
}

export default ShoppingForm;
