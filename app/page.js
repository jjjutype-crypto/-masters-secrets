// app/page.js
import "./globals.css";

export default function Home() {
  return (
    <main className="wrap">
      {/* HERO */}
      <section className="hero">
        <span className="badge">🇬🇧 Writers Revealed</span>
        <h1 className="title">영국 문학 전시 <em>프리뷰</em></h1>
        <p style={{color:"var(--muted)", margin:"4px 0 8px"}}>
          현재 준비 중입니다. 아래 영상/정보 카드만 먼저 공개해 둘게요.
        </p>
        <a className="btn" href="#video">🎬 영상 보기</a>
      </section>

      {/* CONTENT */}
      <section className="grid">
        {/* LEFT: VIDEO */}
        <article className="card" id="video">
          <h3>🎞️ 영상 프리뷰</h3>
          <p>유튜브/Vimeo 연결 예정. 임시 프레임만 잡아두었어요.</p>
          <div className="video" style={{marginTop:12}}>
            {/* 임시: 나중에 iframe만 교체 */}
            {/* <iframe
              src="https://www.youtube.com/embed/XXXXXXXX"
              title="Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{width:"100%", height:"100%", border:0, borderRadius:12}}
            /> */}
            <small>16:9 ⟶ 여기에 YouTube/Vimeo iframe 넣으면 바로 노출</small>
          </div>
        </article>

        {/* RIGHT: INFO */}
        <aside className="card">
          <h3>📌 전시 정보</h3>
          <ul style={{margin:"8px 0 0 0", padding:"0 0 0 18px"}}>
            <li>기간: 2025 (예정)</li>
            <li>장소: 추후 공개</li>
            <li>주최: 추후 공개</li>
          </ul>

          <div style={{marginTop:16}}>
            <a className="btn" href="#" onClick={(e)=>e.preventDefault()}>
              📩 소식 받아보기 (준비중)
            </a>
          </div>
        </aside>
      </section>

      <p className="footer">© 2025. All rights reserved.</p>
    </main>
  );
}
