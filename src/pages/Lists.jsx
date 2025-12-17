import { Link } from 'react-router-dom';

const ListPage = () => {
  return (
    <section className="p-8 space-y-4">
      <h1 className="text-2xl font-semibold text-gray-900">List Index</h1>
      <p className="text-gray-600">Jump into the Claude component demo from here:</p>
      <Link
        to="/claude"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
      >
        View Claude Examples
      </Link>
      <Link
        to="/openai-examples"
        className="inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-lg shadow-sm hover:bg-emerald-700 transition-colors"
      >
        View OpenAI Component Examples
      </Link>
    </section>
  );
};

export default ListPage;
