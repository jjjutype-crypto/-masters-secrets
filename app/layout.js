// app/layout.js
export const metadata = {
  title: "영국 문학 전시",
  description: "Writers Revealed – 500 Years of Literature and Art",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
