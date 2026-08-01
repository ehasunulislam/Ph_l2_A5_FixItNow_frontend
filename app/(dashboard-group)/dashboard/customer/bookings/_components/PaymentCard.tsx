"use client";

import { Loader2 } from "lucide-react";
import { useTransition } from "react";
import { toast } from "sonner";
import { createPaymentAction } from "../_actions/createPaymentAction";


interface Props {
  bookingId: string;
}

const PaymentCard = ({
  bookingId,
}: Props) => {
  const [pending, startTransition] =
    useTransition();

  const handlePayment = () => {
    startTransition(async () => {
      const res =
        await createPaymentAction(bookingId);

      if (!res.success) {
        toast.error(res.message);
        return;
      }

      window.location.href =
        res.data.payment.checkoutURL;
    });
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-[#181818] p-8">

      <h2 className="text-3xl font-bold text-white">
        Stripe Payment
      </h2>

      <p className="mt-3 text-gray-400">
        Complete your payment securely with
        Stripe.
      </p>

      <button
        onClick={handlePayment}
        disabled={pending}
        className="mt-8 h-12 w-full rounded-xl bg-[#C93C3F] text-white"
      >
        {pending ? (
          <Loader2 className="mx-auto animate-spin" />
        ) : (
          "Proceed To Payment"
        )}
      </button>
    </div>
  );
};

export default PaymentCard;