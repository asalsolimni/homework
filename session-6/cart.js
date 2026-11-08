const MASTER_CATALOG = Object.freeze([
  { id: 101, title: "Studio Headphones", price: 250, inStock: true },
  { id: 102, title: "Mechanical Keyboard", price: 140, inStock: true },
  { id: 103, title: "USB-C Charging Hub", price: 50, inStock: true },
  { id: 104, title: "Wireless Gaming Mouse", price: 80, inStock: false },
]);

const cart = [];

cart.push({ ...MASTER_CATALOG[0], quantity: 2 }); 
cart.push({ ...MASTER_CATALOG[2], quantity: 1 });

let subtotal = 0;

for (const item of cart) {
  subtotal += item.price * item.quantity;
}

const couponCode = "SAVE10";
const isVipMember = true;

let discountAmount = 0;

if (couponCode === "SAVE10") {
  discountAmount = subtotal * 0.10;
} else if (couponCode === "VIP20" && isVipMember) {
  discountAmount = subtotal * 0.20;
} else {
  discountAmount = 0;
}

const shippingFee = isVipMember ? 0 : 15;

const finalTotal = (subtotal - discountAmount) + shippingFee;

console.log("=== CHECKOUT RECEIPT ===");
console.log("Subtotal: $${subtotal}");
console.log("Discount: -$${discountAmount}");
console.log("Shipping: $${shippingFee}");
console.log("Final Total: $${finalTotal}\n");

console.log("🧪 Running Verification Tests for cart.js...\n");

const originalPrice = MASTER_CATALOG[0].price;
if (cart.length > 0) {
  cart[0].price = 1;
}
const catalogUnmutated = MASTER_CATALOG[0].price === originalPrice;
console.log(catalogUnmutated
  ? "✅ Test 1 Passed: Master catalog memory isolated against mutations."
  : "❌ Test 1 FAILED: Master catalog was mutated in the Heap!");

console.log(subtotal === 550
  ? "✅ Test 2 Passed: Subtotal calculated accurately ($550)."
  : "❌ Test 2 FAILED: Expected 550, got ${subtotal}");

console.log(discountAmount === 55 && shippingFee === 0 && finalTotal === 495
  ? "✅ Test 3 Passed: Discounts and shipping calculated correctly."
  : "❌ Test 3 FAILED: Final total calculation incorrect.");

console.log("\n🎉 Verification complete!");