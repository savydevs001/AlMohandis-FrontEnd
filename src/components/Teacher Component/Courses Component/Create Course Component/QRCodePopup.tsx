import React, { useState } from 'react';
import QRCode from "react-qr-code";


interface QRCodePopupProps {
  closePopup: () => void;
}

const QRCodePopup: React.FC<QRCodePopupProps> = ({ closePopup }) => 
      {
            const [inputValue, setInputValue] = useState<string>("");

            const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                  setInputValue(e.target.value);
                };
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative p-6 text-center bg-white rounded-lg">
        

      <div  className='space-y-3' style={{ textAlign: "center" }}>
      <h2 className='font-semibold text-start'>Generate QR Code</h2>
      <input
       className='rounded-md'
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text or URL"
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      <br />
      {inputValue && (
        <QRCode value={inputValue} size={256} bgColor="#ffffff" fgColor="#000000" />
      )}
    </div>
        
        <button
          className="px-4 py-2 mt-6 font-semibold border text-md border-primary text-primary"
          onClick={closePopup}
        >
            Cancel
          {/* &times; */}
        </button>
      </div>
    </div>
  );
};

export default QRCodePopup;
