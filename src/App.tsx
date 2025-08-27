import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Home/Homepage";
import LanguageSelector from "./components/LanguageSelector";
import Register from "./Screens/Register/Register";
import Login from "./Screens/Login/Login";
import DashboardHome from "./Dashboard/UserDashboard/DashboardHome";
import AdminDashboardHome from "./AdminDashboard/Dashboard/AdminLayoutHome";
import Deposit from "./Dashboard/Deposit/Deposit";
import AdminAddWalletForm from "./AdminDashboard/Wallet/AddWallet";
import AdminWalletTable from "./AdminDashboard/Wallet/ViewWallet";
import AdminAddPlanForm from "./AdminDashboard/InvestMentPlan/AddPlan";
import InvestmentPlans from "./AdminDashboard/InvestMentPlan/ViewPlan";
import DepositForm from "./Dashboard/Deposit/Deposit";
import DepositTable from "./AdminDashboard/Deposit/DepositRequest";
import InvestmentPlansDisplay from "./Dashboard/Invest/InvestPlan";
import UserInvestPlan from "./Dashboard/Invest/UserInvestment";
import TradingAccountScreen from "./Dashboard/TradingAccount/TradingAccount";
import ReferralAccountScreen from "./Dashboard/ReferalAccount/ReferalAccount";
import WithdrawalForm from "./Dashboard/WithdrawalRequest/WithdrawalForm";
import WithdrawalTable from "./AdminDashboard/Withdrawals/WithdrawalReques";
// import Whatsapp from "./components/Whatsapp";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    if (userId) {
      // ✅ If logged in, go to dashboard
      navigate("/dashboard", { replace: true });
    } else {
      // ❌ If not logged in, go to home
      navigate("/", { replace: true });
    }
  }, []);
  return (
    <>
      <div className="bg-darkblue">
        <LanguageSelector />
        {/* <Whatsapp /> */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/deposit" element={<Deposit />} />
          <Route path="/adminPage" element={<AdminDashboardHome />} />
          <Route path="/add/wallet" element={<AdminAddWalletForm />} />
          <Route path="/add/plan" element={<AdminAddPlanForm />} />
          <Route path="/view/wallet" element={<AdminWalletTable />} />
          <Route path="/view/plan" element={<InvestmentPlans />} />
          <Route path="/dashboard/deposit" element={<DepositForm />} />
          <Route path="/view/deposit" element={<DepositTable />} />
          <Route
            path="/dashboard/invest"
            element={<InvestmentPlansDisplay />}
          />
          <Route path="/invest/:id" element={<UserInvestPlan />} />
          <Route path="/dashboard/acc" element={<TradingAccountScreen />} />
          <Route
            path="/dashboard/ref/acc"
            element={<ReferralAccountScreen />}
          />
          <Route path="/dashboard/withdrawal" element={<WithdrawalForm />} />
          <Route path="/view/withdrawals" element={<WithdrawalTable />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
