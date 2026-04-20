"use client";

import { useState, useSyncExternalStore } from "react";

interface LiveStockCounterProps {
  initialStock: number;
}

function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return false;
}

function getClientSnapshot() {
  return true;
}

export default function LiveStockCounter({
  initialStock,
}: LiveStockCounterProps) {
  const [stock, setStock] = useState(initialStock);

  const hydrated = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  const handleAddToCart = () => {
    if (stock > 0) {
      setStock((current) => current - 1);
    }
  };

  return (
    <div className="stock-box">
      <h3>Live Stock Counter</h3>
      <p>
        Поточний залишок: <strong>{stock}</strong>
      </p>

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!hydrated || stock === 0}
        className="primary-button"
      >
        {!hydrated
          ? "Завантаження JavaScript..."
          : stock === 0
            ? "Немає в наявності"
            : "Add to Cart"}
      </button>
    </div>
  );
}
