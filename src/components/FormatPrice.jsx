import React from "react";

export default function FormatPrice({ className,price }) {
  const nprice = new Intl.NumberFormat().format(price);
  return (
    <>
      <span className={className}>{nprice} د.ع</span>
    </>
  );
}
