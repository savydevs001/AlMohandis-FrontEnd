import React from 'react';

type SeasonPriceProps = {
  title: string; // The text for the <h1> element
  price: string; // The text for the <p> element
};

const SeasonPrice: React.FC<SeasonPriceProps> = ({ title, price }) => {
  return (
    <div className="px-2">
      <div className="flex items-center justify-between ">
        <div className="flex items-center gap-3">
          <input type="checkbox" className="rounded-full text-primary" />
          <h1 className="text-xl font-semibold">{title}</h1>
        </div>
        <p className="text-xl font-semibold text-primary">{price}</p>
      </div>
    </div>
  );
};

export default SeasonPrice;
