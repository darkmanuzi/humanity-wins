"use client";

import { useEffect, useMemo, useState } from "react";

type Supporter = {
  paymentId: string;
  status: "pending" | "approved" | "rejected";
  paid: boolean;
  amount: string | null;
  currency: string;
  wallVisible: boolean;
  anonymous: boolean;
  publicName: string;
  country: string;
  foundingYear: number;
  createdAt: string;
  approvedAt: string | null;
  rejectedAt: string | null;
};

const endpoint = "/.netlify/functions/wall-admin";

export default function WallAdminPage() {
  const [token, setToken] = useState("");
  const [supporters, setSupporters] = useState<Supporter[]>([]);
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("hw-wall-admin-token");
    if (saved) setToken(saved);
  }, []);

  const pending = useMemo(
    () => supporters.filter((s) => s.status === "pending"),
    [supporters]
  );

  const approved = useMemo(
    () => supporters.filter((s) => s.status === "approved"),
    [supporters]
  );

  const rejected = useMemo(
    () => supporters.filter((s) => s.status === "rejected"),
    [supporters]
  );

  async function load() {
    if (!token.trim()) {
      setMessage("Admin-Schlüssel eingeben.");
      return;
    }

    setBusy(true);
    setMessage("");

    try {
      sessionStorage.setItem("hw-wall-admin-token", token);
      const res = await fetch(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);

      setSupporters(data.supporters || []);
      setMessage("Daten geladen.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Fehler beim Laden.");
    } finally {
      setBusy(false);
    }
  }

  async function moderate(paymentId: string, action: "approve" | "reject") {
    if (!confirm(action === "approve"
      ? "Diesen Namen wirklich für die Wall freigeben?"
      : "Diesen Wall-Eintrag ablehnen?"
    )) return;

    setBusy(true);
    setMessage("");

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentId, action }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `HTTP ${res.status}`);

      await load();
      setMessage(action === "approve" ? "Freigegeben." : "Abgelehnt.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Änderung fehlgeschlagen.");
    } finally {
      setBusy(false);
    }
  }

  function Card({ supporter }: { supporter: Supporter }) {
    const publishable =
      supporter.paid &&
      supporter.wallVisible &&
      !supporter.anonymous &&
      Boolean(supporter.publicName) &&
      Boolean(supporter.country);

    return (
      <article style={{
        border: "1px solid rgba(206,164,78,.28)",
        padding: "20px",
        background: "rgba(255,255,255,.02)",
      }}>
        <div style={{ fontSize: 12, letterSpacing: ".16em", opacity: .58 }}>
          {supporter.paymentId}
        </div>
        <h3 style={{ margin: "12px 0 4px", fontSize: 24 }}>
          {supporter.anonymous ? "Anonyme Unterstützung" : supporter.publicName || "—"}
        </h3>
        <div style={{ opacity: .75 }}>{supporter.country || "Kein öffentliches Land"}</div>
        <div style={{ marginTop: 14, lineHeight: 1.8, opacity: .78 }}>
          Betrag: {supporter.amount || "—"} {supporter.currency}<br/>
          Bezahlt: {supporter.paid ? "Ja" : "Nein"}<br/>
          Wall gewünscht: {supporter.wallVisible ? "Ja" : "Nein"}<br/>
          Status: <strong>{supporter.status}</strong><br/>
          Founding Wall: {supporter.foundingYear}
        </div>

        {supporter.status === "pending" && (
          <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
            {publishable && (
              <button disabled={busy} onClick={() => moderate(supporter.paymentId, "approve")} style={buttonGold}>
                FREIGEBEN
              </button>
            )}
            <button disabled={busy} onClick={() => moderate(supporter.paymentId, "reject")} style={buttonDark}>
              ABLEHNEN
            </button>
          </div>
        )}
      </article>
    );
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#061421",
      color: "#eef3f7",
      padding: "56px 22px 100px",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ color: "#d7ab4b", letterSpacing: ".24em", fontSize: 12 }}>
          HUMANITY WINS · PRIVATE ADMIN
        </div>
        <h1 style={{
          fontFamily: "Georgia, serif",
          fontWeight: 400,
          fontSize: "clamp(46px,7vw,86px)",
          margin: "18px 0 16px"
        }}>
          Wall of Humanity.
        </h1>
        <p style={{ maxWidth: 700, opacity: .7, lineHeight: 1.7 }}>
          Bezahlte Unterstützer werden hier geprüft. Erst nach deiner Freigabe
          darf ein Name über die öffentliche Wall-API ausgegeben werden.
        </p>

        <section style={{
          marginTop: 34,
          border: "1px solid rgba(255,255,255,.16)",
          padding: 22
        }}>
          <label style={{ fontSize: 12, letterSpacing: ".15em", opacity: .7 }}>
            ADMIN-SCHLÜSSEL
          </label>
          <div style={{ display: "flex", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
            <input
              type="password"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && load()}
              placeholder="WALL_ADMIN_TOKEN"
              autoComplete="off"
              style={{
                flex: "1 1 360px",
                minWidth: 0,
                padding: "15px 16px",
                background: "#061421",
                color: "#fff",
                border: "1px solid rgba(255,255,255,.22)",
              }}
            />
            <button onClick={load} disabled={busy} style={buttonGold}>
              {busy ? "LÄDT …" : "ANMELDEN / AKTUALISIEREN"}
            </button>
          </div>
          {message && <div style={{ marginTop: 12, color: "#d7ab4b" }}>{message}</div>}
        </section>

        <Section title={`WARTET AUF FREIGABE · ${pending.length}`}>
          {pending.length ? pending.map((s) => <Card key={s.paymentId} supporter={s}/>) :
            <Empty text="Keine offenen Einträge."/>}
        </Section>

        <Section title={`FREIGEGEBEN · ${approved.length}`}>
          {approved.length ? approved.map((s) => <Card key={s.paymentId} supporter={s}/>) :
            <Empty text="Noch keine freigegebenen Einträge."/>}
        </Section>

        <Section title={`ABGELEHNT · ${rejected.length}`}>
          {rejected.length ? rejected.map((s) => <Card key={s.paymentId} supporter={s}/>) :
            <Empty text="Keine abgelehnten Einträge."/>}
        </Section>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 52 }}>
      <h2 style={{
        color: "#d7ab4b",
        letterSpacing: ".18em",
        fontSize: 13,
        borderBottom: "1px solid rgba(255,255,255,.12)",
        paddingBottom: 12
      }}>{title}</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
        gap: 14,
        marginTop: 18
      }}>{children}</div>
    </section>
  );
}

function Empty({ text }: { text: string }) {
  return <div style={{ opacity: .55, padding: "18px 0" }}>{text}</div>;
}

const buttonGold: React.CSSProperties = {
  padding: "14px 18px",
  border: "1px solid #d7ab4b",
  background: "rgba(215,171,75,.1)",
  color: "#e5bb5d",
  fontWeight: 700,
  letterSpacing: ".1em",
  cursor: "pointer",
};

const buttonDark: React.CSSProperties = {
  padding: "14px 18px",
  border: "1px solid rgba(255,255,255,.2)",
  background: "transparent",
  color: "#d9e0e5",
  fontWeight: 700,
  letterSpacing: ".1em",
  cursor: "pointer",
};
