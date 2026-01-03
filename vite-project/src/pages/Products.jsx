import { useState } from "react";
import { productsData } from "../data/dummyData";

const Products = () => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    stock: "",
  });

  const PER_PAGE = 4;

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const paginated = filtered.slice(start, start + PER_PAGE);

  // Open add product form modal
  const handleAdd = () => {
    setIsModalOpen(true);
    setFormData({ name: "", price: "", stock: "" });
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setFormData({ name: "", price: "", stock: "" });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.price && formData.stock) {
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        price: Number(formData.price),
        stock: Number(formData.stock),
      };
      setProducts([newProduct, ...products]);
      handleCloseModal();
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Products
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage product inventory and pricing
          </p>
        </div>

        <button
          onClick={handleAdd}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg
                     bg-blue-600 text-white font-medium
                     hover:bg-blue-700 transition"
        >
          + Add Product
        </button>
      </div>

      {/* Add Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Add New Product
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Product Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border
                             bg-white dark:bg-gray-800
                             text-gray-800 dark:text-gray-200
                             border-gray-300 dark:border-gray-700
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Price (₹)
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={(e) =>
                    setFormData({ ...formData, price: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border
                             bg-white dark:bg-gray-800
                             text-gray-800 dark:text-gray-200
                             border-gray-300 dark:border-gray-700
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter product price"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Stock Quantity
                </label>
                <input
                  type="number"
                  required
                  min="0"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border
                             bg-white dark:bg-gray-800
                             text-gray-800 dark:text-gray-200
                             border-gray-300 dark:border-gray-700
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter stock quantity"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 px-4 py-2 rounded-lg border
                             bg-gray-100 dark:bg-gray-800
                             text-gray-700 dark:text-gray-300
                             border-gray-300 dark:border-gray-700
                             hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 rounded-lg
                             bg-blue-600 text-white font-medium
                             hover:bg-blue-700 transition"
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Search */}
      <div>
        <input
          className="w-full sm:w-1/3 px-4 py-2 rounded-lg border
                     bg-white dark:bg-gray-900
                     text-gray-800 dark:text-gray-200
                     border-gray-300 dark:border-gray-700
                     focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search products..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="w-full bg-white dark:bg-gray-900">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Name
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Price
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Stock
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((p) => (
              <tr
                key={p.id}
                className="border-t border-gray-200 dark:border-gray-800
                           hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-5 py-3 text-sm text-gray-800 dark:text-gray-200">
                  {p.name}
                </td>
                <td className="px-5 py-3 text-sm font-medium text-gray-700 dark:text-gray-300">
                  ₹{p.price}
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                      ${
                        p.stock > 0
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                      }`}
                  >
                    {p.stock > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="px-5 py-3 space-x-3">
                  <button className="text-blue-600 hover:underline text-sm">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(p.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-2">
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded-lg text-sm border transition
              ${
                page === i + 1
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
