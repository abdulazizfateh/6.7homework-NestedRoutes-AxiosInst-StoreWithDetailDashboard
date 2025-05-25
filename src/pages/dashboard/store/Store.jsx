import React from 'react';

const Store = () => {
  const products = [
    { id: 1, name: 'Wireless Mouse', category: 'Electronics', price: 25, available: true },
    { id: 2, name: 'Bluetooth Headphones', category: 'Electronics', price: 60, available: false },
    { id: 3, name: 'Coffee Mug', category: 'Kitchen', price: 12, available: true },
    { id: 4, name: 'Notebook', category: 'Stationery', price: 5, available: true },
  ];

  return (
    <section className="bg-primary-lighter-bg border border-border rounded-[12px] p-4 w-full">
      <h2 className="text-[18px] font-semibold text-primary-text mb-4">Store Products</h2>
      <table className="w-full text-left text-sm">
        <thead className="text-secondary-text border-b border-border">
          <tr>
            <th className="py-2 w-[10%]">ID</th>
            <th className="py-2 w-[40%]">Product</th>
            <th className="py-2 w-[25%]">Category</th>
            <th className="py-2 w-[15%]">Price ($)</th>
            <th className="py-2 w-[10%]">Status</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              className={`border-b border-border hover:bg-secondary-darker-bg duration-150 ${
                index === products.length - 1 ? 'border-b-0' : ''
              }`}
            >
              <td className="py-3 text-primary-text font-medium">{product.id}</td>
              <td className="py-3 text-primary-text">{product.name}</td>
              <td className="py-3 text-secondary-text">{product.category}</td>
              <td className="py-3 text-primary-text font-semibold">{product.price}</td>
              <td className="py-3">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    product.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}
                >
                  {product.available ? 'In Stock' : 'Out of Stock'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Store;
