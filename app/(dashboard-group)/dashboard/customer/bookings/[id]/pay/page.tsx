import PaymentCard from "../../_components/PaymentCard";


interface Props {
  params: Promise<{
    id: string;
  }>;
}

const PaymentPage = async ({
  params,
}: Props) => {
  const { id } = await params;

  return (
    <div className="mx-auto max-w-4xl py-10">
      <PaymentCard bookingId={id} />
    </div>
  );
};

export default PaymentPage;