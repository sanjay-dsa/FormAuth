import React from "react";

const Production = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Production
          </h1>
          <p className="text-gray-500">
            Manage and track production details
          </p>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          + Add Production
        </button>
      </div>

      {/* Production Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-bold mt-2">120</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">In Production</p>
          <h2 className="text-2xl font-bold mt-2 text-blue-600">45</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Completed</p>
          <h2 className="text-2xl font-bold mt-2 text-green-600">60</h2>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-2xl font-bold mt-2 text-orange-500">15</h2>
        </div>
      </div>

      {/* Production Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-5 border-b">
          <h2 className="text-lg font-semibold">
            Production Orders
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3">Order ID</th>
                <th className="px-5 py-3">Product</th>
                <th className="px-5 py-3">Quantity</th>
                <th className="px-5 py-3">Date</th>
                <th className="px-5 py-3">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-t">
                <td className="px-5 py-4">PR-001</td>
                <td className="px-5 py-4">Cotton Shirt</td>
                <td className="px-5 py-4">500</td>
                <td className="px-5 py-4">10/08/2026</td>
                <td className="px-5 py-4">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    In Production
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-5 py-4">PR-002</td>
                <td className="px-5 py-4">T-Shirt</td>
                <td className="px-5 py-4">300</td>
                <td className="px-5 py-4">09/08/2026</td>
                <td className="px-5 py-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Completed
                  </span>
                </td>
              </tr>

              <tr className="border-t">
                <td className="px-5 py-4">PR-003</td>
                <td className="px-5 py-4">Jeans</td>
                <td className="px-5 py-4">250</td>
                <td className="px-5 py-4">08/08/2026</td>
                <td className="px-5 py-4">
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Production;
