import { createPrestashopAdapter } from "./platform.js";

export const adapter = createPrestashopAdapter({
  origin: "https://www.vegetalfood.fr",
  hosts: ["www.vegetalfood.fr", "vegetalfood.fr"],
});
