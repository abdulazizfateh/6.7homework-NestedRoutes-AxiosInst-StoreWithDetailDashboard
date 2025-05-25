import React from 'react';

const Payments = () => {
  const paymentsData = [
    { id: 101, payer: 'Aliyev Diyorbek', amount: 150, status: 'Completed' },
    { id: 102, payer: 'Nuriddinov Azim', amount: 200, status: 'Pending' },
    { id: 103, payer: 'Karimova Laylo', amount: 175, status: 'Failed' },
    { id: 104, payer: 'Tursunov Shohruh', amount: 220, status: 'Completed' },
  ];

  const statusStyles = {
    Completed: 'bg-green-100 text-green-700',
    Pending: 'bg-yellow-100 text-yellow-700',
    Failed: 'bg-red-100 text-red-700',
  };

  return (
    <section className="bg-primary-lighter-bg border border-border rounded-[12px] p-4 w-full">
      <h2 className="text-[18px] font-semibold text-primary-text mb-4">Payments</h2>
      <table className="w-full text-left text-sm">
        <thead className="text-secondary-text border-b border-border">
          <tr>
            <th className="py-2 w-[5%]">ID</th>
            <th className="py-2 w-[40%]">Payer</th>
            <th className="py-2 w-[25%]">Amount ($)</th>
            <th className="py-2 w-[30%]">Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentsData.map((payment, index) => (
            <tr
              key={payment.id}
              className={`border-b border-border hover:bg-secondary-darker-bg duration-150 ${
                index === paymentsData.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <td className="py-3 text-primary-text font-medium">{payment.id}</td>
              <td className="py-3 text-primary-text">{payment.payer}</td>
              <td className="py-3 text-primary-text font-semibold">{payment.amount}</td>
              <td className="py-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    statusStyles[payment.status] || 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {payment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Payments;
