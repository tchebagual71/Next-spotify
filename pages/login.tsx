import { signIn } from "next-auth/react";
import Image from "next/image";
import Layout from "../components/Layout";

export default function Login() {
  const handleLogin = () => {
    signIn("spotify", { callbackUrl: "http://localhost:3000" });
  };

  return (
    <Layout title="Log in to Spotify">
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-20 rounded-lg">
        <Image
          src="/images/hippodrome_logo.JPG"
          alt="spotify logo"
          width={500}
          height={500}
        />
        <button
          className="flex px-12 py-2 text-lg tracking-widest uppercase rounded-full focus:outline-none bg-primary hover:bg-opacity-80"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </Layout>
  );
}
