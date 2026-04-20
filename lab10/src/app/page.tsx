import Link from "next/link";

export default function HomePage() {
  return (
    <section className="card">
      <h1>Впровадження серверного рендерингу</h1>
      <p>
        Це демонстраційний проєкт для SSR у Next.js App Router: серверний
        рендеринг, динамічні маршрути, 404-обробка, гідрація та пошук через URL.
      </p>

      <div className="grid">
        <Link href="/system-status" className="panel-link">
          <h2>Стан системи</h2>
          <p>Серверний час і request headers у вже готовому HTML.</p>
        </Link>

        <Link href="/product/1" className="panel-link">
          <h2>Детальна інформація про товар</h2>
          <p>Динамічний SSR-маршрут для сторінки продукту.</p>
        </Link>

        <Link href="/search?q=phone" className="panel-link">
          <h2>Пошук</h2>
          <p>Пошук, який читає query string на сервері.</p>
        </Link>
      </div>
    </section>
  );
}
