const Analytics = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Analytics
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Performance insights and key metrics
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Monthly Revenue
          </p>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
            ₹1,20,000
          </h2>
          <p className="text-xs text-green-600 dark:text-green-400 mt-1">
            ▲ 8% from last month
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Active Users
          </p>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
            850
          </h2>
          <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
            +45 new users
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Conversion Rate
          </p>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">
            12%
          </h2>
          <p className="text-xs text-purple-600 dark:text-purple-400 mt-1">
            Stable performance
          </p>
        </div>
      </div>

      {/* Overview Section */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
          Overview
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          This section provides a high-level overview of business performance,
          including user engagement, revenue trends, and conversion metrics.
          Backend APIs and interactive charts can be integrated here in future
          iterations.
        </p>
      </div>
    </div>
  );
};

export default Analytics;
