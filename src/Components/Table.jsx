import React from 'react';

const Table = () => {
  const items = [
    { id: 1, name: 'Apple MacBook Pro 17"', color: 'Silver', category: 'Laptop', price: '$2999' },
    { id: 2, name: 'Microsoft Surface Pro', color: 'White', category: 'Laptop PC', price: '$1999' },
    { id: 3, name: 'Magic Mouse 2', color: 'Black', category: 'Accessories', price: '$99' },
    { id: 4, name: 'Apple Watch', color: 'Silver', category: 'Accessories', price: '$179' },
    { id: 5, name: 'iPad', color: 'Gold', category: 'Tablet', price: '$699' },
    { id: 6, name: 'Apple iMac 27"', color: 'Silver', category: 'PC Desktop', price: '$3999' },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md p-6 sm:rounded-lg">
      <div className="pb-4 bg-[#080c0e] mt-14">
        <label htmlFor="table-search" className="sr-only">Search</label>
        <div className="relative mt-1">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-[#a564af]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="block pt-2 pl-10 text-sm text-[#a564af] border border-[#68007a] rounded-lg w-80 bg-[#080c0e] active:border-[#68007a]"
            placeholder="Search"
          />
        </div>
      </div>
      <table className="w-full text-sm text-left text-[#a564af]">
        <thead className="text-xs text-[#a564af] uppercase bg-[#080c0e] border-b border-[#68007a]">
          <tr>
            <th scope="col" className="p-4"> </th>
            <th scope="col" className="px-6 py-3">Product name</th>
            <th scope="col" className="px-6 py-3">Color</th>
            <th scope="col" className="px-6 py-3">Category</th>
            <th scope="col" className="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr
              key={item.id}
              className="border-b bg-[#080c0e] border-[#68007a] hover:bg-[#551f5e]"
            >
              <td className="w-4 p-4">
                <div className="flex items-center"></div>
              </td>
              <th scope="row" className="px-6 py-4 font-medium text-[#a564af] whitespace-nowrap">
                {item.name}
              </th>
              <td className="px-6 py-4">{item.color}</td>
              <td className="px-6 py-4">{item.category}</td>
              <td className="px-6 py-4">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
