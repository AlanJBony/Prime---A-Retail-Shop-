import Navbar from "./components/Navbar";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="pt-20">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
