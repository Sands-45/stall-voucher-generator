import { v4 as uuid } from "uuid";

const generateVoucher = (percentage: number): string => {
  const mockRandom = uuid() + percentage;

  return mockRandom;
};

export { generateVoucher };
