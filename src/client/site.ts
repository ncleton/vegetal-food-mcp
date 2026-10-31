import { createPrestashopAdapter } from "./platform.js";

export const adapter = createPrestashopAdapter({
  origin: "https://www.vegetalfood.fr",
  hosts: ["www.vegetalfood.fr", "vegetalfood.fr"],
  // /recherche renvoie vers l’accueil : la barre du site interroge ce module.
  ajaxSearchModule: "ttblocksearch",
});
