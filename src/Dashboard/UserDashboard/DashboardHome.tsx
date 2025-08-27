import UserDashboardLayout from "./DashboardLayout";
import TradingViewChart from "../../components/TradingViewChart";
import TradingTicker from "../../components/TradingTicker";

const DashboardHome = () => {
  return (
    <UserDashboardLayout>
      <div className="flex flex-col md:flex-row gap-6 p-4">
        {/* Welcome & Summary Section */}
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-bold text-darkblue">Welcome!</h1>
          <h2 className="text-xl text-gray-700">New user</h2>
          <p className="text-lg text-gray-800 leading-relaxed">
            At a glance summary of your investment. Have a nice day!
          </p>
          <button
            className="px-6 py-2 bg-darkblue text-blue-900 rounded-2xl shadow-md 
             hover:bg-red-600 hover:shadow-lg transition duration-300 font-semibold"
          >
            My Plans
          </button>
        </div>

        {/* Trading View Chart */}
        <div className="w-full md:w-1/2 p-4">
          <TradingViewChart />
        </div>
      </div>
      <TradingTicker />
    </UserDashboardLayout>
  );
};

export default DashboardHome;
