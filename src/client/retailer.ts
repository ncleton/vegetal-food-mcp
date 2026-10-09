// Fichier généré par generate.mjs à partir de retailers/vegetal-food/spec.json. Ne pas modifier ici.
export interface ScopeField { key: string; env: string; description: string; example: string; pattern?: string }
export const RETAILER: {
  id: string; slug: string; version: string; label: string; origin: string; entryUrl: string; loginUrl: string; signupUrl: string;
  platform: string; fulfillment: ReadonlyArray<"delivery" | "click_and_collect">; accountRequired: boolean;
  scopeFields: ReadonlyArray<ScopeField>;
} = {
  "id": "vegetal-food",
  "slug": "vegetal_food",
  "version": "0.1.1",
  "label": "Vegetal Food",
  "origin": "https://www.vegetalfood.fr",
  "entryUrl": "https://www.vegetalfood.fr/",
  "loginUrl": "https://www.vegetalfood.fr/connexion",
  "signupUrl": "https://www.vegetalfood.fr/connexion?create_account=1",
  "platform": "prestashop",
  "fulfillment": [
    "delivery",
    "click_and_collect"
  ],
  "accountRequired": false,
  "scopeFields": []
};
