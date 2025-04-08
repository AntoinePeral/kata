import { Product } from "./product";
import { addProduct, removeProduct, updateQuantity, getTotalValue } from "./manageProduct";

describe("Gestion de stock", () => {
  let products: Product[];

  beforeEach(() => {
    products = [
      { name: "Laptop", price: 1200, quantity: 5 },
      { name: "Mouse", price: 20, quantity: 50 },
      { name: "Keyboard", price: 50, quantity: 30 },
    ];
  });

  test("ajoute un nouveau produit", () => {
    const updated = addProduct(products, { name: "Car", price: 1000, quantity: 2 });
    expect(updated.find(p => p.name === "Car")).toBeDefined();
  });

  test("ajoute la quantité si le produit existe déjà", () => {
    const updated = addProduct(products, { name: "Mouse", price: 20, quantity: 10 });
    const mouse = updated.find(p => p.name === "Mouse");
    expect(mouse?.quantity).toBe(60);
  });

  test("supprime un produit existant", () => {
    const updated = removeProduct(products, "Mouse");
    expect(updated.find(p => p.name === "Mouse")).toBeUndefined();
  });

  test("ne fait rien si produit à supprimer non trouvé", () => {
    const updated = removeProduct(products, "Phone");
    expect(updated.length).toBe(3);
  });

  test("met à jour la quantité d’un produit", () => {
    const updated = updateQuantity(products, "Keyboard", 100);
    const keyboard = updated.find(p => p.name === "Keyboard");
    expect(keyboard?.quantity).toBe(100);
  });

  test("retourne la valeur totale du stock", () => {
    const value = getTotalValue(products);
    expect(value).toBe(1200*5 + 20*50 + 50*30); // 6000 + 1000 + 1500 = 8500
  });
});
