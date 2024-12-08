import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import PrivyWrapper from "@/privy/privyProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Own Sound",
  description: "Made with love by the Qoneqt team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrivyWrapper>
          <ThemeProvider attribute="class" defaultTheme="light">
            {children}
          </ThemeProvider>
        </PrivyWrapper>
      </body>
    </html>
  );
}
