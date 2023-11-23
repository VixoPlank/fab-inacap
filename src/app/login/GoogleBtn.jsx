import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { BsGoogle } from "react-icons/bs";

export default function SignInBtn() {
  const router = useRouter();

  const handleSignInWithGoogle = async () => {
    const result = await signIn("google", {
      callbackUrl: "/user/dashboard",
    });

    if (result?.error) {
      // Manejar cualquier error que pueda ocurrir durante el inicio de sesión
      console.error(result.error);
    } else {
      // Redirige al usuario a su pagina
      router.push("/user/dashboard");
    }
  };

  return (
    <button
      onClick={handleSignInWithGoogle}
      className="flex w-full items-center justify-center gap-3 rounded-md bg-red-600 hover:bg-red-700 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
    >
      <BsGoogle />
      <span className="text-sm font-semibold leading-6">Google</span>
    </button>
  );
}
