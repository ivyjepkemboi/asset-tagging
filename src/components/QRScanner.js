import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import AssetInfo from './AssetInfo';

const QRScanner = () => {
//   const [assetData, setAssetData] = useState(null);
const [assetData, setAssetData] = useState({
    company: "Milestone Geo Systems",
    office: "Reception Desk",
    model: "HP Laptop Core i7 7th Gen",
    assignee: "Khadijah"
  });

  const handleScan = (data) => {
    if (data) {
      const parsedData = JSON.parse(data); 
      setAssetData(parsedData);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="p-4">
      {!assetData ? (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
      ) : (
        <AssetInfo
          company={assetData.company}
          office={assetData.office}
          model={assetData.model}
          assignee={assetData.assignee}
        />
      )}
    </div>
  );
};

export default QRScanner;
