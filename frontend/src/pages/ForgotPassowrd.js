import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import SummaryApi from '../common';
import loginIcons from '../assest/signin.gif';

const ForgotPassword = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const backendURL = SummaryApi.backendDomin + '/api';

    const sendOTP = async () => {
        try {
            const response = await fetch(SummaryApi.forgotPassword.url, {
                method: SummaryApi.forgotPassword.method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();

            if (data.message) {
                toast.success(data.message);
                setStep(2);
            } else {
                toast.error(data.message || "Error sending OTP");
            }
        } catch (err) {
            toast.error("Failed to send OTP");
        }
    };

    const verifyOTP = async () => {
        try {
            const response = await fetch(SummaryApi.verifyOtp.url, {
                method: SummaryApi.verifyOtp.method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp }),
            });
            const data = await response.json();

            if (data.message) {
                toast.success(data.message);
                setStep(3);
            } else {
                toast.error(data.message || "Invalid OTP");
            }
        } catch (err) {
            toast.error("OTP verification failed");
        }
    };

    const resetPassword = async () => {
        try {
            const response = await fetch(SummaryApi.resetPassword.url, {
                method: SummaryApi.resetPassword.method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp, newPassword }),
            });
            const data = await response.json();

            if (data.message) {
                toast.success(data.message);
                navigate('/login');
            } else {
                toast.error(data.message || "Failed to reset password");
            }
        } catch (err) {
            toast.error("Reset password error");
        }
    };

    return (
        <section id="forgot-password">
            <div className="mx-auto container p-4">
                <div className="bg-white p-5 w-full max-w-sm mx-auto">
                    <div className="w-20 h-20 mx-auto">
                        <img src={loginIcons} alt="forgot password icon" />
                    </div>

                    {step === 1 && (
                        <div className="pt-6">
                            <label>Email :</label>
                            <div className="bg-slate-100 p-2 mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent outline-none"
                                />
                            </div>
                            <button onClick={sendOTP} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block">
                                Send OTP
                            </button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="pt-6">
                            <label>Enter OTP :</label>
                            <div className="bg-slate-100 p-2 mb-4">
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="w-full bg-transparent outline-none"
                                />
                            </div>
                            <button onClick={verifyOTP} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block">
                                Verify OTP
                            </button>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="pt-6">
                            <label>New Password :</label>
                            <div className="bg-slate-100 p-2 mb-4 flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="w-full bg-transparent outline-none"
                                />
                                <div className="cursor-pointer text-xl ml-2" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </div>
                            </div>
                            <button onClick={resetPassword} className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block">
                                Reset Password
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ForgotPassword;
