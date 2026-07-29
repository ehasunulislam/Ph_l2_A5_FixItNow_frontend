"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginFormValues, loginSchema } from "../../schemas/login.schema";
import { loginAction } from "../../_action/loginAction";

const inputClass =
  "h-12 rounded-xl border border-white/10 bg-[#262626] text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#C93C3F]";

const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const result = await loginAction(data);

      toast.success(result.message);

      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error(
        err instanceof Error
          ? err.message
          : "Login failed"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <div>
        <Input
          placeholder="Email"
          className={inputClass}
          {...register("email")}
        />

        {errors.email && (
          <p className="mt-1 text-xs text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <Input
          type="password"
          placeholder="Password"
          className={inputClass}
          {...register("password")}
        />

        {errors.password && (
          <p className="mt-1 text-xs text-red-500">
            {errors.password.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-12 w-full rounded-xl bg-[#C93C3F]"
      >
        {isSubmitting ? "Signing In..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;