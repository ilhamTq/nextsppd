import MainLayout from "@/components/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext"

export const metadata = {
  title: "SPPD LPSE",
  description: "SPPD Project from Ilham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}
