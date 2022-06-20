const calculateDiscount = (discount, price) => {
  const discountPercentage = discount / 100;
  const newPrice = Math.floor(price - discountPercentage * price);
  return newPrice;
};

export default calculateDiscount;
