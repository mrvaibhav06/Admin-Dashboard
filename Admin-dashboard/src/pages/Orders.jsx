import { ordersData } from "../data/dummyData";

// Status badge styles
const statusBadge = (status) => {
  if (status === "Delivered")
    return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
  if (status === "Pending")
    return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
  return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
};

const Orders = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Orders
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Track customer orders and delivery status
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl shadow">
        <table className="w-full bg-white dark:bg-gray-900">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Order ID
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Customer
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Amount
              </th>
              <th className="px-5 py-3 text-left text-sm font-semibold text-gray-600 dark:text-gray-300">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {ordersData.map((o) => (
              <tr
                key={o.id}
                className="border-t border-gray-200 dark:border-gray-800
                           hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-5 py-3 text-sm font-medium text-gray-800 dark:text-gray-200">
                  #{o.id}
                </td>
                <td className="px-5 py-3 text-sm text-gray-700 dark:text-gray-300">
                  {o.customer}
                </td>
                <td className="px-5 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  ₹{o.amount}
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${statusBadge(
                      o.status
                    )}`}
                  >
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
