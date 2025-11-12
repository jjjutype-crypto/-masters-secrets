export default function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 700 }}>🇬🇧 영국 문학 전시</h1>
      <p>준비 중입니다.</p>

      <section style={{ marginBottom: "48px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: 600 }}>🎬 영상 보기</h3>
        <p>※ 유튜브 / Vimeo 링크 연결 예정</p>
        <div style={{ width: "100%", aspectRatio: "16/9", background: "#ddd" }} />
      </section>

      <section style={{ marginBottom: "48px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: 600 }}>📌 전시 정보</h3>
        <ul>
          <li>📅 기간 : 2025</li>
          <li>📍 장소 : (추가 예정)</li>
          <li>🏛️ 주최 : (추가 예정)</li>
        </ul>
      </section>

      <footer style={{ marginTop: "64px", opacity: 0.6 }}>
        <p>© 2025. All rights reserved.</p>
      </footer>
    </main>
  );
}
