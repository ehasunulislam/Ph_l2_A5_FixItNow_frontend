import { getAllCategoriesAction } from "../_action/getAllCategoriesAction";
import CreateServiceForm from "../_components/CreateServiceForm";


const CreateServicePage = async () => {
  const result = await getAllCategoriesAction();

  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Create New Service
        </h1>

        <p className="mt-2 text-gray-400">
          Add a new service that customers can book.
        </p>
      </div>

      <CreateServiceForm
        categories={result.data.categories}
      />
    </section>
  );
};

export default CreateServicePage;