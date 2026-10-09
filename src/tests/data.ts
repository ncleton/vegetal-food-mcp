import type { Captured } from "./fake-browser.js";

export const captured: Captured = {
  "query": "tofu",
  "productUrl": "https://www.vegetalfood.fr/escalope-vegetale/5084-crispy-panes-180-g-la-vie-3770018078847.html",
  "expected": {
    "productId": "5084:0",
    "name": "Crispy Panés 180 g - LA VIE",
    "price": 3.95
  },
  "searchRaw": [
    {
      "id_product": "5084",
      "id_product_attribute": "0",
      "name": "Crispy Panés 180 g - LA VIE",
      "url": "https://www.vegetalfood.fr/escalope-vegetale/5084-crispy-panes-180-g-la-vie-3770018078847.html",
      "price": "3,95 €",
      "regular_price": "4,45 €",
      "unit_price": null,
      "brand": null,
      "flags": [
        "discount -0,50 €"
      ],
      "button": "enabled",
      "availability": null
    },
    {
      "id_product": "5085",
      "id_product_attribute": "0",
      "name": "Crispy Tenders 192 g - LA VIE",
      "url": "https://www.vegetalfood.fr/nuggets/5085-crispy-tenders-192-g-la-vie-3770018078854.html",
      "price": "3,95 €",
      "regular_price": "4,45 €",
      "unit_price": null,
      "brand": null,
      "flags": [
        "discount -0,50 €"
      ],
      "button": "enabled",
      "availability": null
    },
    {
      "id_product": "3985",
      "id_product_attribute": "0",
      "name": "Ribs vegan 350 g - JUICY MARBLES",
      "url": "https://www.vegetalfood.fr/burgers/3985-ribs-vegan-350-g-juicy-marbles-3830074230693.html",
      "price": "9,95 €",
      "regular_price": "19,90 €",
      "unit_price": null,
      "brand": null,
      "flags": [
        "discount -50%"
      ],
      "button": "enabled",
      "availability": null
    }
  ],
  "productRaw": {
    "info": {
      "name": "Crispy Panés 180 g - LA VIE",
      "sku": "LV-010931",
      "gtin": "3770018078847",
      "brand": "La Vie",
      "description": "Des nuggets vegan à base de tofu fumé et panure aux cornflakes ultra croustillante I Vegan &amp; sans gluten I Livraison en France 24/48h",
      "price": "3.95",
      "availability": "https://schema.org/InStock"
    },
    "id_product": "5084",
    "id_product_attribute": "0",
    "data_quantity": null,
    "button": "enabled",
    "ingredients": "Protéines de SOJA réhydratées 63%, Farine de BLE 10%, eau, huile de tournesol, flocons de maïs, gluten de BLE, conservateur : acétates de potassium, arômes naturels, correcteur d'acidité : acide lactique vegan, sel, levure, poivre, amidon de tapioca, épices, extrait d'épices. Peut contenir des traces de LAIT, OEUFS, POISSON, CRUSTACES, MOUTARDE, CEREALES CONTENANT DU GLUTEN",
    "nutrition": [],
    "url": "https://www.vegetalfood.fr/escalope-vegetale/5084-crispy-panes-180-g-la-vie-3770018078847.html",
    "unit_price": "\n                    21,94 € / kg\n                "
  },
  "cartEmpty": {
    "total_text": "0,00 €",
    "products": []
  },
  "cartFilled": {
    "quantity": 2,
    "raw": {
      "total_text": "7,90 €",
      "products": [
        {
          "id_product": 5084,
          "id_product_attribute": 0,
          "name": "Crispy Panés 180 g - LA VIE",
          "quantity": 2,
          "unit_price": 3.95,
          "line_total": 7.899998,
          "available_quantity": null
        }
      ]
    }
  }
};
