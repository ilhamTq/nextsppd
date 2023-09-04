import MainLayout from "@/components/MainLayout";
export const metadata = {
  title: "User",
};

const Userlayout = ({ children }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Userlayout;
