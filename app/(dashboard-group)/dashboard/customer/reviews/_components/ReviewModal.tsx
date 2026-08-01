"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

import { createReviewAction } from "../_action/createReviewAction";

interface Props {
  bookingId: string;
}

const ReviewModal = ({ bookingId }: Props) => {
  const router = useRouter();

  const [rating, setRating] = useState(5);

  const [comment, setComment] = useState("");

  const [open, setOpen] = useState(false);

  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    if (!comment.trim()) {
      toast.error("Please write your review.");

      return;
    }

    startTransition(async () => {
      const res = await createReviewAction({
        bookingId,
        rating,
        comment,
      });

      if (res.success) {
        toast.success("Review submitted");

        setOpen(false);

        router.refresh();
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="w-full rounded-xl bg-[#C93C3F] py-3 text-center font-semibold text-white hover:bg-[#b23437] transition cursor-pointer">
            Give Review
        </DialogTrigger>

      <DialogContent className="border-white/10 bg-[#181818] text-white">
        <DialogHeader>
          <DialogTitle>Rate Your Experience</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <p className="mb-3 text-sm text-gray-400">Rating</p>

          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="cursor-pointer"
              >
                <Star
                  size={32}
                  fill={star <= rating ? "#facc15" : "transparent"}
                  className={
                    star <= rating ? "text-yellow-400" : "text-gray-500"
                  }
                />
              </button>
            ))}
          </div>

          <Textarea
            rows={5}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your experience..."
            className="mt-6 border-white/10 bg-black"
          />

          <Button
            onClick={handleSubmit}
            disabled={isPending}
            className="mt-6 w-full cursor-pointer bg-[#C93C3F]"
          >
            {isPending ? "Submitting..." : "Submit Review"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModal;
