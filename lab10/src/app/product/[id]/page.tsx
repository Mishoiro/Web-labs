import { notFound } from "next/navigation";
import LiveStockCounter from "@/components/LiveStockCounter";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
}

async function getProduct(id: string): Promise<Product | null> {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Не вдалося отримати продукт із зовнішнього API.");
  }

  return response.json();
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <section className="card">
      <h1>{product.title}</h1>
      <p className="lead">{product.description}</p>

      <div className="info-list">
        <div className="info-item">
          <span>ID продукту</span>
          <strong>{product.id}</strong>
        </div>

        <div className="info-item">
          <span>Категорія</span>
          <strong>{product.category}</strong>
        </div>

        <div className="info-item">
          <span>Ціна</span>
          <strong>${product.price}</strong>
        </div>
      </div>

      <LiveStockCounter initialStock={12} />
    </section>
  );
}
