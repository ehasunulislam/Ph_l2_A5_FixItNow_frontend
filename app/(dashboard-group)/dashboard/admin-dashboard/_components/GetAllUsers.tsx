"use client";

import { Badge } from "@/components/ui/badge";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "ADMIN" | "CUSTOMER" | "TECHNICIAN";
  status: "ACTIVE" | "BLOCKED";
  profileImage: string | null;
  address: string;
}

interface Props {
  users: User[];
}

const GetAllUsers = ({ users }: Props) => {
  return (
    <div className="rounded-xl border border-white/10 p-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-5">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">
            User Management
          </h2>

          <p className="text-sm text-gray-400">
            Total Users: {users.length}
          </p>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-white/10">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#262626]">
              <TableHead className="text-gray-500">User</TableHead>
              <TableHead className="text-gray-500">Email</TableHead>
              <TableHead className="text-gray-500">Phone</TableHead>
              <TableHead className="text-gray-500">Role</TableHead>
              <TableHead className="text-gray-500">Status</TableHead>
              <TableHead className="text-gray-500">Address</TableHead>
              <TableHead className="text-right text-gray-500">
                Action
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-white">
            {users.map((user) => (
              <TableRow
                key={user.id}
                className="border-white/10"
              >
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 border border-white/10">
                        <AvatarImage src={user.profileImage || ""} />
                        <AvatarFallback className="bg-[#C93C3F] text-white">
                            {user.name?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="font-medium text-white">
                        {user.name}
                      </p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>{user.email}</TableCell>

                <TableCell>{user.phone}</TableCell>

                <TableCell>
                  <Badge className={`${
                    user.role === "TECHNICIAN"
                        ? "bg-[#e9c56a9f]"
                        : user.role === "CUSTOMER"
                        ? "bg-[#5996FF]"
                        : "bg-[#c5574b]"
                    }`}>
                    {user.role}
                  </Badge>
                </TableCell>

                <TableCell>
                  <Badge
                    className={
                      user.status === "ACTIVE"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>

                <TableCell>
                  {user.address || "-"}
                </TableCell>

                <TableCell className="text-right">
                  <button className="bg-[#cff81bcc] text-black p-2 rounded-[10px] cursor-pointer">
                    Edit
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default GetAllUsers;