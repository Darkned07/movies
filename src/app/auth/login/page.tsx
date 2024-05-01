import Button from "@/components/Button";
import Input from "@/components/Input";
import Links from "@/components/Links";

function Login() {
  return (
    <div className="h-screen grid place-content-center">
      <h2 className="text-center font-bold text-2xl">Login</h2>
      <form className="flex flex-col max-w-lg w-full gap-[20px] p-4">
        <Input
          lbName="Email"
          type="email"
          placeholder="email writing"
          cls="md:w-96 w-full"
        />
        <Input
          lbName="Password"
          type="password"
          placeholder="password writing"
          cls="md:w-96 w-full"
        />
        <Button clsBtn="btn-outline md:w-96 w-full" btnName="Login" />
        <div className="flex flex-row items-center gap-2">
          <hr className="w-6/12 bg-black" />
          <span>or</span>
          <hr className="w-6/12 bg-black" />
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          <span className="font-bold">Don't have an account?</span>
          <Links
            hrefLink="/auth/register"
            linkName="Sign up"
            cls="link link-secondary link-hover"
          />
        </div>
      </form>
    </div>
  );
}

export default Login;
