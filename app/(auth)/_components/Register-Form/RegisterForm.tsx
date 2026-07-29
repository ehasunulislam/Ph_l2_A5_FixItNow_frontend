"use client"

import React from 'react'
import { useForm } from 'react-hook-form';
import { RegisterFormValues, registerSchema } from '../../schemas/register.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const RegisterForm = () => {
  const { register, handleSubmit, setValue, formState: { errors, isSubmitting },} = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
        name: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        profileImage: "",
    },
  });

    const onSubmit = async (data: RegisterFormValues) => {
        console.log(data);
    };

    const inputClass ="h-12 rounded-xl border border-white/10 bg-[#262626] text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-red-500 focus-visible:border-red-500";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

    {/* Profile Image */}
    <Input
        placeholder="Profile Image URL (Optional)"
        className={inputClass}
        {...register("profileImage")}
    />

    {/* Name & Email */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
        <Input
            placeholder="Full Name"
            className={inputClass}
            {...register("name")}
        />
        {errors.name && (
            <p className="mt-1 text-xs text-red-500">
            {errors.name.message}
            </p>
        )}
        </div>

        <div>
        <Input
            type="email"
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
    </div>

    {/* Password & Phone */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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

        <div>
        <Input
            placeholder="Phone (Optional)"
            className={inputClass}
            {...register("phone")}
        />
        </div>
    </div>

    {/* Role & Address */}
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

        <div>
        <Select
            onValueChange={(value) =>
            setValue("role", value as "CUSTOMER" | "TECHNICIAN", {
                shouldValidate: true,
            })
            }
        >
            <SelectTrigger className={inputClass}>
            <SelectValue placeholder="Select Role" />
            </SelectTrigger>

            <SelectContent>
            <SelectItem value="CUSTOMER">
                Customer
            </SelectItem>

            <SelectItem value="TECHNICIAN">
                Technician
            </SelectItem>
            </SelectContent>
        </Select>

        {errors.role && (
            <p className="mt-1 text-xs text-red-400">
            {errors.role.message}
            </p>
        )}
        </div>

        <div>
        <Input
            placeholder="Address"
            className={inputClass}
            {...register("address")}
        />
        {errors.address && (
            <p className="mt-1 text-xs text-red-500">
            {errors.address.message}
            </p>
        )}
        </div>
    </div>

    <Button
        type="submit"
        className="mt-2 h-12 w-full rounded-xl bg-[#C93C3F] cursor-pointer"
        disabled={isSubmitting}
    >
        {isSubmitting ? "Creating Account..." : "Create Account"}
    </Button>

    </form>
  )
}

export default RegisterForm
