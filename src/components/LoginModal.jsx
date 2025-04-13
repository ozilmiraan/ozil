import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [notifyMe, setNotifyMe] = useState(true);

  const handleSendOtp = () => {
    console.log("Sending OTP to:", mobileNumber);
    setIsOtpSent(true);
  };

  const handleVerifyOtp = () => {
    console.log("Verifying OTP:", otp);
    if (otp === "123456") {
      onLogin(mobileNumber);
      onClose();
    } else {
      alert("Invalid OTP");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white w-96 rounded-2xl shadow-lg p-6 relative"
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        {/* Logo */}
        <div className="text-center font-bold text-xl text-gray-700 mb-3">
          Ozil Makeup
        </div>

        {/* Green Banner */}
        <div className="bg-green-500 text-white  text-sm text-center py-2 rounded-lg font-medium mb-4">
          Login to Unlock Extra Discount
        </div>

        {/* Phone Input */}
        <div className="relative border-2 border-gray-300 rounded-2xl p-3 flex items-center space-x-2">
          <div className="flex items-center space-x-1 cursor-pointer">
            <span className="text-lg">🇮🇳</span>
            <span className="text-gray-700">+91</span>
            <IoIosArrowDown className="text-gray-500" />
          </div>
          <input
            type="tel"
            placeholder="Enter Mobile Number"
            className="outline-none flex-1 text-gray-700 text-sm"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            disabled={isOtpSent}
          />
        </div>

        {/* OTP Input */}
        {isOtpSent && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter OTP"
              className="border rounded-lg w-full py-2 px-3 text-gray-700 text-sm"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
        )}

        {/* Continue / Verify OTP Button */}
        <button
          className="w-full shadow-neumorphic bg-rose-600   text-white text-lg font-semibold py-3 rounded-2xl mt-4 hover:bg-secondary transition"
          onClick={isOtpSent ? handleVerifyOtp : handleSendOtp}
        >
          {isOtpSent ? "Verify OTP" : "Continue"}
        </button>

        {/* Notification Checkbox */}
        <div className="flex items-center space-x-2 mt-3 text-gray-600 text-sm">
          <input
            type="checkbox"
            id="notifyMe"
            checked={notifyMe}
            onChange={(e) => setNotifyMe(e.target.checked)}
          />
          <label htmlFor="notifyMe">
            Notify me for updates/offers using SMS & RCS
          </label>
        </div>

        {/* Terms & Conditions */}
        <p className="text-xs text-gray-500 text-center mt-4">
          By proceeding, I accept the {" "}
          <span className="text-rose-500 cursor-pointer">T&C</span> and {" "}
          <span className="text-rose-500 cursor-pointer">Privacy Policy</span>.
        </p>
      </motion.div>
    </div>
  );
};

export default LoginModal;
