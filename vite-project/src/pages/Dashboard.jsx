import DashboardCard from "../components/DashboardCard";
import DashboardCharts from "../components/DashboardCharts";

const Dashboard = () => {
  return (
    <div className="space-y-10">
      {/* 🔴 Tailwind Test (INSIDE component) */}
      {/* <div className="bg-red-500 text-white p-10 text-3xl rounded-lg">
        TAILWIND TEST
      </div> */}

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Dashboard Overview
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Quick summary of your application stats
          </p>
        </div>

        <button className="mt-4 md:mt-0 px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Download Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-black">
        <DashboardCard title="Total Users" value="500" />
        <DashboardCard title="Revenue" value="₹3,20,000" />
        <DashboardCard title="Orders" value="1200" />
        <DashboardCard title="Growth" value="18%" />
      </div>

      {/* Charts Section */}
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
          Analytics Overview
        </h2>
        <DashboardCharts />
      </div>
    </div>
  );
};

export default Dashboard;
