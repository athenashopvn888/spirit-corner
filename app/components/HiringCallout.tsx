import Link from "next/link";

export default function HiringCallout() {
  return (
    <section
      aria-label="Spirit Corner Cannabis hiring"
      style={{
        padding: "110px 20px 24px",
        background: "#020617",
      }}
    >
      <div
        style={{
          width: "min(100%, 1120px)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "minmax(0, 1fr) auto",
          gap: "18px",
          alignItems: "center",
          border: "1px solid #34d399",
          borderRadius: 16,
          background: "linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(2, 6, 23, 0.98))",
          boxShadow: "0 22px 48px rgba(0, 0, 0, 0.32)",
          padding: "22px",
        }}
      >
        <div>
          <span
            style={{
              display: "inline-flex",
              width: "fit-content",
              marginBottom: 10,
              padding: "6px 10px",
              borderRadius: 999,
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#34d399",
              fontSize: 11,
              fontWeight: 900,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
            }}
          >
            Budtenders / Managers Wanted
          </span>
          <h2
            style={{
              margin: "0 0 8px",
              color: "#ffffff",
              fontSize: "clamp(28px, 4vw, 46px)",
              lineHeight: 1,
              fontWeight: 950,
            }}
          >
            Join Spirit Corner
          </h2>
          <p
            style={{
              margin: 0,
              maxWidth: 780,
              color: "#dbeafe",
              fontSize: 15,
              lineHeight: 1.55,
              fontWeight: 750,
            }}
          >
            Spirit Corner needs motivated people who can bring clear customer service and steady team energy. Online applications only. Please do not call the store about hiring.
          </p>
        </div>
        <Link
          href="/careers/budtender"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: 48,
            whiteSpace: "nowrap",
            borderRadius: 999,
            padding: "13px 20px",
            background: "#34d399",
            color: "#111827",
            fontSize: 13,
            fontWeight: 950,
            textDecoration: "none",
            textTransform: "uppercase",
          }}
        >
          Apply Online
        </Link>
      </div>
    </section>
  );
}
