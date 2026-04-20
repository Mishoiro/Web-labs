import { headers } from "next/headers";

export default async function SystemStatusPage() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "Невідомо";
  const host = headersList.get("host") ?? "Невідомо";
  const acceptLanguage = headersList.get("accept-language") ?? "Невідомо";
  const serverTime = new Date().toLocaleString("uk-UA", {
    dateStyle: "full",
    timeStyle: "medium",
  });

  return (
    <section className="card">
      <h1>Стан системи</h1>
      <p>
        Ця сторінка рендериться на сервері, тому в View Source видно вже готовий
        час сервера і значення заголовків запиту.
      </p>

      <div className="info-list">
        <div className="info-item">
          <span>Поточний серверний час</span>
          <strong>{serverTime}</strong>
        </div>

        <div className="info-item">
          <span>User-Agent</span>
          <strong>{userAgent}</strong>
        </div>

        <div className="info-item">
          <span>Host</span>
          <strong>{host}</strong>
        </div>

        <div className="info-item">
          <span>Accept-Language</span>
          <strong>{acceptLanguage}</strong>
        </div>
      </div>
    </section>
  );
}
