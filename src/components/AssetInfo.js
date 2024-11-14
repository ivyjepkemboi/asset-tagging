import React from 'react';

const AssetInfo = ({ company, office, model, assignee }) => {
  return (
    <div className="flex flex-col p-6 max-w-md mx-auto bg-gray-100 rounded-lg border border-gray-200 shadow-md space-y-4">
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-gray-500 mr-4">Company</span>
        <span className="text-base font-medium text-gray-800">{company}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-gray-500 mr-4">Office</span>
        <span className="text-base font-medium text-gray-800">{office}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-gray-500 mr-4">Make/Model</span>
        <span className="text-base font-medium text-gray-800">{model}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs font-semibold text-gray-500 mr-4">Assignee</span>
        <span className="text-base font-medium text-gray-800">{assignee}</span>
      </div>
    </div>
  );
};

export default AssetInfo;
