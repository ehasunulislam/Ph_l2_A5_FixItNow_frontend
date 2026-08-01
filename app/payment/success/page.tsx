import SuccessCard from "../_components/SuccessCard";


interface Props {
  searchParams: Promise<{
    session_id?: string;
  }>;
}

const SuccessPage = async ({ searchParams }: Props) => {
  const { session_id } = await searchParams;

  return <SuccessCard sessionId={session_id || ""} />;
};

export default SuccessPage;
