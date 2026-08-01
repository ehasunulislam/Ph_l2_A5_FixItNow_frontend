"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { confirmPaymentAction } from "../_action/confirmPaymentAction";

interface Props {
  sessionId: string;
}

const SuccessCard = ({ sessionId }: Props) => {
  const router = useRouter();

  useEffect(() => {
    const confirm = async () => {
      const res = await confirmPaymentAction(sessionId);

      if (res.success) {
        toast.success("Payment Successful");

        router.replace("/dashboard/customer");
      } else {
        toast.error(res.message);
      }
    };

    if (sessionId) {
      confirm();
    }
  }, [router, sessionId]);

  return (
    <div className="flex h-[70vh] items-center justify-center">
      <div className="rounded-2xl border border-green-500/20 bg-[#181818] p-10">
        <h1 className="text-3xl font-bold text-green-500">
          Processing Payment...
        </h1>
      </div>
    </div>
  );
};

export default SuccessCard;
