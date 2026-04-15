import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone", // Necesario para Docker — genera un build auto-contenido
};

export default nextConfig;

