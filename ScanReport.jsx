import React, { useState } from "react";

const ScanReport = () => {
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");

  const scanData = [
    {
      id: 1,
      employee: "EMP001",
      name: "Kumar",
      line: "Line 01",
      bundleNo: "B001",
      operation: "Collar Stitching",
      scanTime: "08:45 AM",
      quantity: 50,
      status: "Completed",
    },
    {
      id: 2,
      employee: "EMP002",
      name: "Ravi",
      line: "Line 02",
      bundleNo: "B002",
      operation: "Sleeve Stitching",
      scanTime: "09:10 AM",
      quantity: 40,
      status: "Completed",
    },
    {
      id: 3,
      employee: "EMP003",
      name: "Suresh",
      line: "Line 01",
      bundleNo: "B003",
      operation: "Side Seam",
      scanTime: "09:35 AM",
      quantity: 35,
      status: "Pending",
    },
    {
      id: 4,
      employee: "EMP004",
      name: "Mani",
      line: "Line 03",
      bundleNo: "B004",
      operation: "Bottom Hem",
      scanTime: "10:05 AM",
      quantity: 60,
      status: "Completed",
    },
  ];

  const filteredData = scanData.filter((item) =>
    Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalQty = filteredData.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const completed = filteredData.filter(
    (item) => item.status === "Completed"
  ).length;

  const pending = filteredData.filter(
    (item) => item.status === "Pending"
  ).length;

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Scan Report
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          View and monitor garment production scanning details
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-blue-500">
          <p className="text-sm text-gray-500">Total Scans</p>
          <h2 className="text-2xl font-bold text-gray-800 mt-1">
            {filteredData.length}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-green-500">
          <p className="text-sm text-gray-500">Completed</p>
          <h2 className="text-2xl font-bold text-green-600 mt-1">
            {completed}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-yellow-500">
          <p className="text-sm text-gray-500">Pending</p>
          <h2 className="text-2xl font-bold text-yellow-600 mt-1">
            {pending}
          </h2>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-5 border-l-4 border-purple-500">
          <p className="text-sm text-gray-500">Total Quantity</p>
          <h2 className="text-2xl font-bold text-purple-600 mt-1">
            {totalQty}
          </h2>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Search
            </label>

            <input
              type="text"
              placeholder="Search employee, bundle, operation..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Scan Date
            </label>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Scan Details
            </h2>
            <p className="text-sm text-gray-500">
              Production scanning records
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Print Report
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[1000px]">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  #
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Employee
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Line
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Bundle No
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Operation
                </th>

                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">
                  Scan Time
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                  Quantity
                </th>

                <th className="px-4 py-3 text-center text-sm font-semibold text-gray-600">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {index + 1}
                    </td>

                    <td className="px-4 py-3">
                      <div className="font-medium text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.employee}
                      </div>
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-600">
                      {item.line}
                    </td>

                    <td className="px-4 py-3 text-sm font-medium text-blue-600">
                      {item.bundleNo}
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-600">
                      {item.operation}
                    </td>

                    <td className="px-4 py-3 text-sm text-gray-600">
                      {item.scanTime}
                    </td>

                    <td className="px-4 py-3 text-center font-semibold text-gray-800">
                      {item.quantity}
                    </td>

                    <td className="px-4 py-3 text-center">
                      <span
                        className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === "Completed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="px-4 py-10 text-center text-gray-500"
                  >
                    No scan records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="px-4 py-3 border-t bg-gray-50 text-sm text-gray-500">
          Showing {filteredData.length} scan record
          {filteredData.length !== 1 ? "s" : ""}
        </div>
      </div>
    </div>
  );
};

export default ScanReport;
