import React from "react";

const MyGroup = () => {
  const groups = [
    {
      name: "Frontend Ninjas",
      members: 12,
      created: "Apr 2025",
    },
    {
      name: "Bug Bashers",
      members: 8,
      created: "May 2025",
    },
  ];

  return (
    <div className="">
      <h2 className="text-2xl font-semibold text-primary-text mb-4">
        Groups
      </h2>
      <div className="overflow-x-auto border border-border rounded-[12px] bg-primary-lighter-bg">
        <table className="min-w-full text-sm text-left text-primary-text">
          <thead>
            <tr className="bg-secondary-darker-bg text-secondary-text text-sm uppercase">
              <th className="px-6 py-3 border-b border-border">
                Group Name
              </th>
              <th className="px-6 py-3 border-b border-border">
                Members
              </th>
              <th className="px-6 py-3 border-b border-border">
                Created
              </th>
              <th className="px-6 py-3 border-b border-border text-right">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group, index) => (
              <tr
                key={index}
                className={`hover:bg-secondary-darker-bg `}
              >
                <td className="px-6 py-3 font-medium text-primary-text">
                  {group.name}
                </td>
                <td className="px-6 py-3 text-secondary-text">
                  {group.members}
                </td>
                <td className="px-6 py-3 text-secondary-text">
                  {group.created}
                </td>
                <td className="px-6 py-3 text-right">
                  <button className="text-highlight-blue hover:underline cursor-pointer transition-colors duration-200">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyGroup;
