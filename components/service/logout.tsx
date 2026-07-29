import { logoutAction } from "@/app/(auth)/_action/logoutAction";
import { LogOut } from "lucide-react";
import React from "react";

const Logout = () => {
  return (
    <div>
      <form action={logoutAction} className="w-full">
        <button
          type="submit"
          className="w-full cursor-pointer flex gap-3 items-center text-left"
        >
          <LogOut size={18} />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Logout;
