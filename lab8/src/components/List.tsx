import type { ReactNode } from "react";

interface ListProps<T extends { id: number }> {
  items: T[];
  renderItem: (item: T) => ReactNode;
  emptyMessage?: string;
}

export const List = <T extends { id: number }>({
  items,
  renderItem,
  emptyMessage = "Елементів не знайдено.",
}: ListProps<T>) => {
  if (items.length === 0) {
    return <p className="empty-state">{emptyMessage}</p>;
  }

  return (
    <div className="task-list">
      {items.map((item) => (
        <div key={item.id}>{renderItem(item)}</div>
      ))}
    </div>
  );
};
