import { Button } from "@/components/ui/button";
import type { ShoppingItemData } from "../types/shopping-item";
import { CheckCircledIcon, ResetIcon, TrashIcon } from "@radix-ui/react-icons";

type ShoppingItemProps = {
  item: ShoppingItemData;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

function ShoppingItem({ item, onToggle, onDelete }: ShoppingItemProps) {
  return (
    <article className="flex items-center justify-between rounded-xl border bg-card p-6 text-card-foreground shadow">
      <div>
        <h3
          className={`text-lg font-semibold${
            item.checked ? " text-muted-foreground line-through" : ""
          }`}
        >
          {item.name}
        </h3>

        <p className="text-sm text-muted-foreground">Anzahl: {item.amount}</p>
      </div>

      <div className="flex gap-2">
        {item.checked ? (
          <>
            <Button
              variant="destructive"
              size="icon"
              onClick={() => onDelete(item.id)}
              className="enabled:cursor-pointer"
            >
              <TrashIcon className="h-4 w-4" />
            </Button>

            <Button
              variant="secondary"
              onClick={() => onToggle(item.id)}
              style={{ cursor: "pointer" }}
            >
              <ResetIcon />
              Zurück
            </Button>
          </>
        ) : (
          <Button
            variant="outline"
            size="lg"
            onClick={() => onToggle(item.id)}
            style={{ cursor: "pointer" }}
          >
            <CheckCircledIcon />
            Abhaken
          </Button>
        )}
      </div>
    </article>
  );
}

export default ShoppingItem;
