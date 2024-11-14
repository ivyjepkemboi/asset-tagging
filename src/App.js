import React from 'react';
import QRScanner from './components/QRScanner';

function App() {
  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-50">
      <div>
        <h1 className="text-center text-2xl font-bold mb-6">Asset Tagging System</h1>
        <QRScanner />
      </div>
    </div>
  );
}

export default App;
