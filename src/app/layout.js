import localFont from "next/font/local";
import "./globals.css";


export const metadata = {
  title: "Calculator",
  description: "Made with Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-gray-200 flex justify-center items-center antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
