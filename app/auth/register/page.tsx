import { RegisterForm } from "@/components/auth/register-form";
import RegisterModal from "@/components/auth/register-modal";

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      {/* <RegisterForm /> */}
      <RegisterModal title="What's your email?" />
    </div>
  );
};

export default RegisterPage;
