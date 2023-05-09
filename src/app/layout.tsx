import Container from "./components/Container";
import "./globals.css";

export const metadata = {
  title: "Home Page",
  description: "Created Manually",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        {children}
        </body>
    </html>
  );
}
