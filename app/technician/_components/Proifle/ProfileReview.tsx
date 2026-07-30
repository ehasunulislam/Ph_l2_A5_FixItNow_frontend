import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Props {
  technician: {
    reviews: {
      id: string;
      rating: number;
      comment: string;
      createdAt: string;
      customer: {
        name: string;
        profileImage: string | null;
      };
    }[];
  };
}

const ProfileReviews = ({ technician }: Props) => {
  return (
    <section>
      <div className="rounded-2xl border border-white/10 bg-[#1d1d1d] p-6 ">
        <h2 className="text-2xl font-bold text-white">
          Customer Reviews
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          {technician.reviews.length} Review
          {technician.reviews.length !== 1 && "s"}
        </p>

        <div className="mt-6 space-y-5">
          {technician.reviews.length > 0 ? (
            technician.reviews.map((review) => (
              <div
                key={review.id}
                className="rounded-xl border border-white/10 bg-[#262626] p-4"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <Avatar className="h-8 w-8 border border-white/10">
                        <AvatarImage src={review.customer.profileImage ?? ""} />

                        <AvatarFallback className="bg-[#C93C3F] text-white">
                            {review.customer?.name?.[0]?.toUpperCase() || "U"}
                        </AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className="font-semibold text-white">
                        {review.customer.name}
                      </h3>

                      <p className="text-xs text-gray-400">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1">
                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />
                    <span className="font-medium text-yellow-400">
                      {review.rating}
                    </span>
                  </div>
                </div>

                <p className="mt-4 leading-7 text-gray-300">
                  {review.comment}
                </p>
              </div>
            ))
          ) : (
            <div className="rounded-xl border border-dashed border-white/10 py-10 text-center">
              <p className="text-gray-400">
                No reviews yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileReviews;