import { colors } from "@/config/colors";

const validateColors = () => {
  Object.values(colors).forEach((color) => {
    if (
      !/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color) &&
      !/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(color) &&
      !/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d{1,3})\)$/.test(color)
    ) {
      throw new Error(`Invalid color: ${color}`);
    }
  });
};

const validateConfig = () => {
  validateColors();
};

export default validateConfig;
