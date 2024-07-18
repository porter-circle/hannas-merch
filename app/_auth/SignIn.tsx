import { redirect } from "next/navigation";
import { signIn } from "./auth";
import Hanger from "../_components/Hanger";

const SignIn = () => (
  <section className="h-screen">
    <div className="flex justify-center items-center h-full flex-col">
      <Hanger />
      <h1 className="text-2xl pb-8">Hanna&apos;s Merch</h1>
      <form
        action={async (formData) => {
          "use server";
          if (!formData.get("username")) return;
          await signIn(formData);
          redirect("/shop");
        }}
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="username"
            name="username"
            className="input input-bordered w-full max-w-xs"
          />
          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default SignIn;
