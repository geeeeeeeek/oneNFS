import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/theme/theme-provider";
import PrivyWrapper from "@/privy/privyProvider";
import { Toaster } from "sonner";
import ReduxProvider from "@/redux/redux-provider";

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
          <ReduxProvider>
            <ThemeProvider attribute="class" defaultTheme="light">
              {children}
              <Toaster />
            </ThemeProvider>
          </ReduxProvider>
        </PrivyWrapper>
      </body>
    </html>
  );
}
