import { v4 as uuid } from "uuid";

const generateVoucher = (percentage: number): string => {
  console.log("Generating a discount or voucher");
  const mockRandom = uuid() + percentage;

  return mockRandom;
};

const generateCoupon= (percentage: number): string => {
  console.log("Generating a discount or voucher");
  const mockRandom = uuid() + percentage;

  return mockRandom;
};

export { generateVoucher,generateCoupon };
