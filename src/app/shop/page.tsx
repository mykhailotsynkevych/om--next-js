import type { Metadata } from "next";
import ShopSimulator from "./shop-simulator";

export const metadata: Metadata = { title: "Demo shop" };

export default function Shop() {
  return (
    <section className="panel">
      <p className="eyebrow">Ecommerce tracking practice</p>
      <h1>A fictional demo shop.</h1>
      <p>
        Walk through a sample product view, cart, checkout, and simulated
        purchase. No real order or payment is created. Demo ecommerce events
        are pushed to the browser data layer for tracking practice; they are not
        sent to an order backend.
      </p>
      <ShopSimulator />
    </section>
  );
}
