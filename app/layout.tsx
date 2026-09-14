import "./globals.css";

export const metadata = {
  title: "ይሁኔ ቦንዳ",
  description: "የወንዶች ልብስ መሸጫ",
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="am">
      <body>{children}</body>
    </html>
  );
}
