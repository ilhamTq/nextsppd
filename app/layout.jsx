// import MainLayout from "@/components/MainLayout";
import "./globals.css";
import MenuContextProvider from "@/context/MenuContext";
import { AuthProvider } from "./Providers";
// import Provider from "@/context/Provider";

export const metadata = {
  title: "SPPD LPSE",
  description: "SPPD Project from Ilham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <Provider> */}
      <body>
        <MenuContextProvider>
          
            <AuthProvider>{children}</AuthProvider>
          
        </MenuContextProvider>
      </body>
      {/* </Provider> */}
    </html>
  );
}
