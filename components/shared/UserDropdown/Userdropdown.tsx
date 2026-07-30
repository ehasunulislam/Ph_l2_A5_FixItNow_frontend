import Link from "next/link";
import {
  CalendarCheck,
  LayoutDashboard,
  User,
} from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Logout from "@/components/service/logout";

interface UserDropdownProps {
  user: {
    id: string;
    name: string;
    email: string;
    profileImage?: string;
    role?: "CUSTOMER" | "TECHNICIAN";
  };
}

const UserDropdown = ({ user }: UserDropdownProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            className="h-auto rounded-full p-0 hover:bg-transparent cursor-pointer"
          >
            <Avatar className="h-10 w-10 border border-white/10">
              <AvatarImage src={user.profileImage || ""} />
              <AvatarFallback className="bg-[#C93C3F] text-white">
                {user.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </Button>
        }
      />

      <DropdownMenuContent
        align="end"
        className="w-64 bg-[#262626] border-white/10 text-white"
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel>
            <div className="space-y-1">
              <p className="font-semibold">{user.name}</p>
              <p className="text-xs text-gray-400">{user.email}</p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuSeparator />

          <DropdownMenuItem
            render={
              <Link
                href="/dashboard"
                className="flex w-full items-center gap-2"
              >
                <LayoutDashboard size={18} />
                Dashboard
              </Link>
            }
          />

          <DropdownMenuItem
            render={
              <Link
                href="/bookings"
                className="flex w-full items-center gap-2"
              >
                <CalendarCheck size={18} />
                My Bookings
              </Link>
            }
          />

          <DropdownMenuItem
            render={
              <Link
                href={`/technician/${user.id}`}
                className="flex w-full items-center gap-2"
              >
                <User size={18} />
                Profile
              </Link>
            }
          />

          <DropdownMenuSeparator />

          <DropdownMenuItem
            render={<Logout />}
           />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;