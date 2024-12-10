import "./globals.css";

// Creating a metadata object
export const metadata = {
  title: "Weather By IP App",
  description: "Created Hao Bui and Dinh Anh Nguyen",
};

// Managing the root layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
