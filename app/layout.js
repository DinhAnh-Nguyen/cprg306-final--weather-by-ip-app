import Footer from "./components/footer";
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
      <body className="flex flex-col min-h-screen bg-gray-50">
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
