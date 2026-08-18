import React, { useState } from "react";

const Fingerprint = () => {
  const [scanning, setScanning] = useState(false);
  const [verified, setVerified] = useState(false);

  const startScan = () => {
    setScanning(true);
    setVerified(false);

    // Simulate fingerprint scanning
    setTimeout(() => {
      setScanning(false);
      setVerified(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Fingerprint Verification
        </h2>

        <p className="text-gray-500 mb-8">
          Place your finger on the fingerprint scanner
        </p>

        {/* Fingerprint Icon */}
        <div
          className={`mx-auto w-40 h-40 rounded-full flex items-center justify-center
          border-4 ${
            verified
              ? "border-green-500"
              : scanning
              ? "border-blue-500 animate-pulse"
              : "border-gray-300"
          }`}
        >
          <div className="text-7xl">
            {verified ? "✓" : "🖐️"}
          </div>
        </div>

        {/* Status */}
        <div className="mt-6">
          {scanning && (
            <p className="text-blue-600 font-semibold">
              Scanning fingerprint...
            </p>
          )}

          {verified && (
            <p className="text-green-600 font-semibold">
              Fingerprint verified successfully!
            </p>
          )}

          {!scanning && !verified && (
            <p className="text-gray-500">
              Ready to scan
            </p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={startScan}
          disabled={scanning}
          className={`mt-8 w-full py-3 rounded-lg text-white font-semibold
          transition ${
            scanning
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {scanning ? "Scanning..." : "Start Fingerprint Scan"}
        </button>
      </div>
    </div>
  );
};

export default Fingerprint;
