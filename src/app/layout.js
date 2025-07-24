import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from './context/LanguageContext';



export const metadata = {
  title: "Marine Knots - Learn and Master Sailing Knots",
  description: "An offline app to master 45+ maritime knots with animations and quizzes.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>

      </body>
    </html>
  );
}
