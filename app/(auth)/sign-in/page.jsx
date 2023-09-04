import SignInForm from "@/components/form/SignInForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Signin = async () => {
  const session = await getServerSession(authOptions);

  if (session) redirect("/")
  return (
    <div className="w-full">
      <SignInForm />
    </div>
  );
};

export default Signin;
