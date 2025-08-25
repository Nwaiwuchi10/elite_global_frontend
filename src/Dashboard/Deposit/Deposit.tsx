// src/components/DepositForm.tsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserDashboardLayout from "../UserDashboard/DashboardLayout";
import { GetAllDepositApi, WalletListApi } from "../../Api/Api";
import { useNavigate } from "react-router-dom";
import { Copy } from "lucide-react"; // ✅ copy icon

interface AdminWallet {
  _id: string;
  walletName: string;
  walletAdress: string;
  walletQR?: string;
}

interface DepositPayload {
  adminWalletId: string;
  amount: number;
  clientId: string;
  havePaid: boolean;
}

const DepositForm: React.FC = () => {
  const navigate = useNavigate();
  const [wallets, setWallets] = useState<AdminWallet[]>([]);
  const [selectedWallet, setSelectedWallet] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(false);

  const clientId = `${localStorage.getItem("userId")}`;

  useEffect(() => {
    const fetchWallets = async () => {
      try {
        const res = await axios.get<AdminWallet[]>(WalletListApi);
        setWallets(res.data);
      } catch (error) {
        console.error("Error fetching wallets:", error);
      }
    };
    fetchWallets();
  }, []);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleDeposit = async (havePaid: boolean) => {
    if (!selectedWallet || amount <= 0) {
      setMessage("Please select a wallet and enter a valid amount.");
      return;
    }

    const payload: DepositPayload = {
      adminWalletId: selectedWallet,
      amount,
      clientId,
      havePaid,
    };

    try {
      setLoading(true);
      await axios.post(GetAllDepositApi, payload);
      setMessage(
        `Deposit ${
          havePaid ? "submitted with payment" : "saved for later"
        } successfully.`
      );
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Error creating deposit:", error);
      setMessage(error.response?.data?.message || "Deposit failed");
    } finally {
      setLoading(false);
    }
  };

  const handleNavigate = () => {
    navigate("/dashboard");
  };

  return (
    <UserDashboardLayout>
      <div className="p-6 max-w-lg mx-auto bg-white rounded-2xl shadow-lg">
        <h2 className="text-xl font-bold text-darkblue mb-4">
          Steps To Deposit
        </h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
          <li>Enter amount to deposit</li>
          <li>
            Pay into any of the wallets provided by scanning the QR Code or
            copying the wallet address
          </li>
          <li>
            After payment, click{" "}
            <span className="font-semibold">"I HAVE PAID"</span>
          </li>
        </ol>

        {/* Amount input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Amount
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full border-2 text-black border-blue-500 rounded-lg px-3 py-3 text-lg font-semibold focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter deposit amount"
          />
        </div>

        {/* Wallet selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Wallet
          </label>
          <select
            value={selectedWallet}
            onChange={(e) => setSelectedWallet(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 bg-blue-900"
          >
            <option value="" className="text-blue-900">
              -- Select Wallet --
            </option>
            {wallets.map((wallet) => (
              <option
                key={wallet._id}
                value={wallet._id}
                className="text-blue-900"
              >
                {wallet.walletName}
              </option>
            ))}
          </select>
        </div>

        {/* Display wallet details */}
        {selectedWallet && (
          <div className="p-4 border rounded-lg bg-gray-50 text-blue-900 mb-4">
            {wallets
              .filter((w) => w._id === selectedWallet)
              .map((wallet) => (
                <div key={wallet._id}>
                  <p className="mb-2 text-blue-900">
                    <span className="font-semibold text-blue-900">
                      Wallet Name:
                    </span>{" "}
                    {wallet.walletName}
                  </p>
                  <div className="flex items-center gap-2 mb-2 text-blue-900">
                    <p className="truncate">
                      <span className="font-semibold text-blue-900">
                        Address:
                      </span>{" "}
                      {wallet.walletAdress}
                    </p>
                    <button
                      onClick={() => handleCopy(wallet.walletAdress)}
                      className="p-1 bg-blue-100 rounded bg-blue-200 "
                    >
                      <Copy className="w-5 h-5 text-blue-700" />
                    </button>
                  </div>
                  {copied && (
                    <p className="text-green-600 text-sm font-medium">
                      Copied!
                    </p>
                  )}
                  {wallet.walletQR && (
                    <img
                      src={wallet.walletQR}
                      alt="Wallet QR"
                      className="w-32 h-32 mt-2 border rounded"
                    />
                  )}
                </div>
              ))}
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between gap-4">
          <button
            onClick={() => handleDeposit(true)}
            disabled={loading}
            style={{ cursor: "pointer" }}
            className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl shadow-md font-semibold transition"
          >
            I HAVE PAID
          </button>
          <button
            onClick={handleNavigate}
            disabled={loading}
            className="w-1/2 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-xl shadow-md font-semibold transition"
          >
            PAY LATER
          </button>
        </div>

        {message && (
          <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
        )}
      </div>
    </UserDashboardLayout>
  );
};

export default DepositForm;
