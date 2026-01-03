import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

const DashboardCharts = () => {
  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue",
        data: [12000, 19000, 15000, 22000, 30000],
        borderColor: "black",
      },
    ],
  };

  const barData = {
    labels: ["Users", "Orders", "Products"],
    datasets: [
      {
        label: "Count",
        data: [500, 1200, 300],
        backgroundColor: ["#000", "#555", "#999"],
      },
    ],
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <div className="bg-white p-4 rounded shadow">
        <Line data={lineData} />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <Bar data={barData} />
      </div>
    </div>
  );
};

export default DashboardCharts;
