import Link from "next/link";

export default function NotFound() {
  return (
    <section className="card">
      <h1>404 — Сторінку не знайдено</h1>
      <p>
        Сервер не знайшов потрібний ресурс, тому одразу повернув сторінку
        помилки.
      </p>

      <Link href="/" className="primary-button inline-button">
        Повернутися на головну
      </Link>
    </section>
  );
}
