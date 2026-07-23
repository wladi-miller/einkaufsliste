import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRef } from "react";

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
  const inputRef = useRef<HTMLInputElement>(null);

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
          ref={inputRef}
          type="text"
          placeholder="Produkt eingeben..."
          value={productName}
          onChange={(event) => onNameChange(event.target.value)}
          className="flex-1"
        />

        <Input
          type="number"
          value={productAmount}
          onChange={(event) => onAmountChange(Number(event.target.value))}
          className="w-14"
        />
      </div>

      <Button
        type="submit"
        variant="default"
        size="lg"
        className="mt-2 w-full"
        disabled={productName.trim().length < 1}
        style={{ cursor: "pointer" }}
      >
        Eintrag Hinzufügen
      </Button>
    </form>
  );
}

export default ShoppingForm;
