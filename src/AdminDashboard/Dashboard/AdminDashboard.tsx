// src/layouts/UserDashboardLayout.tsx
import React, { useEffect, useState } from "react";
// import { Menu, X } from "lucide-react";
import { Menu as MenuIcon, X } from "lucide-react"; // Lucide icons
import { Menu } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/img/bitcon.png";
import axios from "axios";
import { Base_url } from "../../Api/BaseUrl";

interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
}
interface UserDashboardLayoutProps {
  children: React.ReactNode;
}

const AdminDashboardLayout: React.FC<UserDashboardLayoutProps> = ({
  children,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      if (userId) {
        const res = await axios.get<User>(`${Base_url}/users/${userId}`);
        setUser(res.data);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
    navigate("/", { replace: true });
  };
  return (
    <div className="flex h-screen bg-[] text-darkblue">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white text-blue-900 shadow-lg transition-transform duration-300 ease-in-out border-r border-gray-200
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-blue-700">Admin Dashboard</h2>
          <button className="lg:hidden" onClick={() => setSidebarOpen(false)}>
            <X className="w-6 h-6 text-blue-900" /> {/* Dark blue close icon */}
          </button>
        </div>
        <nav className="p-4 space-y-2">
          <a href="#" className="block px-3 py-2 rounded-lg text-blue-900">
            🏠 <Link to="/admin/dashboard">Home</Link>
          </a>
          <a href="#" className="block px-3 py-2 rounded-lg text-blue-900">
            📄 <Link to="/view/deposit"> Deposit Request</Link>
          </a>
          <a href="#" className="block px-3 py-2 rounded-lg text-blue-900">
            📄 <Link to="/view/withdrawals">Withdrawal Request</Link>
          </a>
          <a href="#" className="block px-3 py-2 rounded-lg text-blue-900">
            📄 <Link to="/view/wallet">View Admin Wallet</Link>
          </a>
          <a href="#" className="block px-3 py-2 rounded-lg text-blue-900">
            📄 <Link to="/add/wallet">Add Admin Wallet</Link>
          </a>

          <a href="#" className="block px-3 py-2 rounded-lg text-blue-900">
            📄 <Link to="/add/plan">Add Investment Plan</Link>
          </a>

          <a href="#" className="block px-3 py-2 rounded-lg text-blue-900">
            📄 <Link to="/view/plan">View Investment Plan</Link>
          </a>
          <a href="#" className="block px-3 py-2 rounded-lg text-blue-900">
            📄 <Link to="/admin/dashboard">Show All Users</Link>
          </a>
          <a
            href="https://mail.hostinger.com/"
            target="blank"
            className="block px-3 py-2 rounded-lg text-blue-900"
          >
            📄 Web Mail
          </a>
          <Link
            to="/change-password"
            className="block px-3 py-2 rounded-lg text-blue-900"
          >
            ⚙️ Settings
          </Link>
          <button
            style={{ cursor: "pointer" }}
            className="block px-3 py-2 rounded-lg text-blue-900"
            onClick={handleLogout}
          >
            🚪 Logout
          </button>
        </nav>
      </aside>

      {/* Content Wrapper */}
      <div className="flex flex-1 flex-col lg:ml-64">
        {/* Top Navbar */}
        <header className="flex items-center justify-between bg-white text-darkblue shadow px-4 py-3 border-b border-gray-200">
          <button className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <MenuIcon className="w-6 h-6 text-blue-900" />
            {/* <Menu className="w-6 h-6 text-blue-900" /> */}
            {/* Dark blue menu icon */}
          </button>
          <h1 className="text-lg font-semibold text-blue-900">
            <a href="#">
              <span className="flex justify-evenly items-center gap-6">
                <span style={{ width: "auto", height: "30px" }}>
                  {" "}
                  <img
                    src={Logo}
                    alt=""
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />{" "}
                </span>

                <span className="text-2xl font-extrabold">Wealth Globe</span>
              </span>
            </a>
            {/* Welcome Back 👋 */}
          </h1>
          <div className="flex items-center space-x-3">
            <div className="text-sm font-medium text-blue-900">
              {user?.firstName} {user?.lastName}
            </div>

            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3607/3607444.png"
                  alt="User"
                  className="w-10 h-10 rounded-full border border-gray-300 cursor-pointer"
                />
              </Menu.Button>
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-xl shadow-lg border border-gray-200 z-50">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => navigate("/profile")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          active ? "bg-blue-50 text-blue-700" : "text-gray-700"
                        }`}
                      >
                        View Profile
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => navigate("/change-password")}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          active ? "bg-blue-50 text-blue-700" : "text-gray-700"
                        }`}
                      >
                        Change Password
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-y-auto bg-white">{children}</main>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
