import React from "react";
import { useSearchParams } from "react-router-dom";
import { Utensils, Globe } from "lucide-react";

const QRLanding = () => {

    const [params] = useSearchParams();
    const table = params.get("table");

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-50 flex items-center justify-center px-4">

            {/* Card */}
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-6 text-center">

                {/* Logo / Heading */}
                <div className="mb-4">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
                        Welcome to Your Restaurant 🍽️
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">
                        Scan & Explore Our Restaurant
                    </p>
                </div>

                {/* Table Info */}
                {table && (
                    <div className="mb-4">
                        <span className="inline-block bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-medium">
                            Table No: {table}
                        </span>
                    </div>
                )}

                {/* Buttons */}
                <div className="space-y-4 mt-6">

                    {/* Menu Button */}
                    <a href="/menu">
                        <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 transition text-white py-3 rounded-xl text-lg font-semibold shadow-md">
                            <Utensils size={20} />
                            View Menu
                        </button>
                    </a>

                    {/* Website Button */}
                    <a
                        href="https://restrorent-frontend.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl text-lg font-semibold shadow-md mt-5">
                            <Globe size={20} />
                            Visit Website
                        </button>
                    </a>

                </div>

                {/* Footer */}
                <p className="text-xs text-gray-400 mt-6">
                    Powered by Your Restaurant

                </p>

            </div>

        </div>
    );
};

export default QRLanding;