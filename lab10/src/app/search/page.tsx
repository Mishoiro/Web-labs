interface SearchPageProps {
  searchParams: Promise<{
    q?: string;
  }>;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
}

async function searchProducts(query: string): Promise<Product[]> {
  const url = query
    ? `https://dummyjson.com/products/search?q=${encodeURIComponent(query)}`
    : "https://dummyjson.com/products?limit=8";

  const response = await fetch(url, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Не вдалося отримати результати пошуку.");
  }

  const data = await response.json();
  return data.products ?? [];
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q = "" } = await searchParams;
  const results = await searchProducts(q);

  return (
    <section className="card">
      <h1>Server-Side Search</h1>
      <p>
        Поточний запит береться з URL, тому після оновлення сторінки результати
        залишаються такими самими.
      </p>

      <form method="GET" className="search-form">
        <input
          type="text"
          name="q"
          defaultValue={q}
          placeholder="Введіть пошуковий запит..."
          className="search-input"
        />
        <button type="submit" className="primary-button">
          Пошук
        </button>
      </form>

      <p className="note">
        Поточний параметр: <strong>{q || "порожній запит"}</strong>
      </p>

      <div className="results-grid">
        {results.length > 0 ? (
          results.map((product) => (
            <article key={product.id} className="result-card">
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <span className="tag">{product.category}</span>
            </article>
          ))
        ) : (
          <p>Нічого не знайдено за цим запитом.</p>
        )}
      </div>
    </section>
  );
}
