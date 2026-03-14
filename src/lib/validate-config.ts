import { general } from "@/config/general";

const validateConfig = () => {
  if (!general.appName) {
    console.warn("[config] appName is empty in src/config/general.ts");
  }
  if (!general.domainName) {
    console.warn("[config] domainName is empty in src/config/general.ts");
  }
};

export default validateConfig;
