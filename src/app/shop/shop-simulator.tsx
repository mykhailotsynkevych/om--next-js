"use client";

import { useEffect, useRef, useState } from "react";
import {
  pushEcommerceEvent,
  type EcommerceEventName,
  type EcommerceEventPayload,
} from "@/lib/data-layer";

const product = {
  item_id: "OM-TRACKING-001",
  item_name: "Tracking Workshop (Demo)",
  price: 19.9,
};
const currency = "EUR";

type EventRecord = {
  event: EcommerceEventName;
  ecommerce: EcommerceEventPayload;
};

function formatPrice(value: number): string {
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency,
  }).format(value);
}

export default function ShopSimulator() {
  const [quantity, setQuantity] = useState(0);
  const [checkoutStarted, setCheckoutStarted] = useState(false);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [eventRecords, setEventRecords] = useState<EventRecord[]>([]);
  const viewedItem = useRef(false);
  const value = product.price * quantity;
  const items = [{ ...product, quantity }];

  useEffect(() => {
    if (viewedItem.current) return;
    viewedItem.current = true;

    const ecommerce = {
      currency,
      value: product.price,
      items: [{ ...product, quantity: 1 }],
    };
    pushEcommerceEvent("view_item", ecommerce);
    setEventRecords((records) => [...records, { event: "view_item", ecommerce }]);
  }, []);

  function emit(event: EcommerceEventName, ecommerce: EcommerceEventPayload) {
    pushEcommerceEvent(event, ecommerce);
    setEventRecords((records) => [...records, { event, ecommerce }]);
  }

  function handleAddToCart() {
    const nextQuantity = quantity + 1;
    setQuantity(nextQuantity);
    emit("add_to_cart", {
      currency,
      value: product.price,
      items: [{ ...product, quantity: 1 }],
    });
  }

  function handleBeginCheckout() {
    setCheckoutStarted(true);
    emit("begin_checkout", { currency, value, items });
  }

  function handlePurchase() {
    const id = `DEMO-${crypto.randomUUID()}`;
    setTransactionId(id);
    emit("purchase", {
      currency,
      value,
      items,
      transaction_id: id,
    });
  }

  function handleStartOver() {
    setQuantity(0);
    setCheckoutStarted(false);
    setTransactionId(null);
  }

  return (
    <div className="shop-layout">
      <article className="shop-card">
        <p className="eyebrow">Sample product</p>
        <h2>{product.item_name}</h2>
        <p>A fictional product for learning the GA4 ecommerce event flow.</p>
        <p className="shop-price">{formatPrice(product.price)}</p>
        <p className="note">
          Item ID: <code>{product.item_id}</code>
        </p>
        <button
          type="button"
          className="button"
          onClick={handleAddToCart}
          disabled={checkoutStarted || transactionId !== null}
        >
          Add to cart
        </button>
      </article>

      <section className="shop-card" aria-labelledby="cart-heading">
        <h2 id="cart-heading">Your cart</h2>
        {quantity === 0 ? (
          <p role="status">The cart is empty.</p>
        ) : (
          <>
            <p>{product.item_name} × {quantity}</p>
            <p className="shop-price">Total: {formatPrice(value)}</p>
          </>
        )}

        {quantity > 0 && !checkoutStarted && (
          <button
            type="button"
            className="button"
            onClick={handleBeginCheckout}
          >
            Begin checkout
          </button>
        )}

        {checkoutStarted && transactionId === null && (
          <div className="checkout-box">
            <p>
              Simulated checkout only. No payment details are requested.
            </p>
            <button
              type="button"
              className="button"
              onClick={handlePurchase}
            >
              Complete simulated purchase
            </button>
          </div>
        )}

        {transactionId !== null && (
          <div className="status" role="status">
            <p>Demo purchase complete. No order or payment was created.</p>
            <p>
              Transaction ID: <code>{transactionId}</code>
            </p>
            <button
              type="button"
              className="button button-secondary"
              onClick={handleStartOver}
            >
              Start a new simulation
            </button>
          </div>
        )}
      </section>

      <details className="event-log">
        <summary>Data layer event log ({eventRecords.length})</summary>
        {eventRecords.length === 0 ? (
          <p>Open this page to send the view_item event.</p>
        ) : (
          <ol>
            {eventRecords.map((record, index) => (
              <li key={`${record.event}-${index}`}>
                <strong>{record.event}</strong>
                <pre>{JSON.stringify(record.ecommerce, null, 2)}</pre>
              </li>
            ))}
          </ol>
        )}
      </details>
    </div>
  );
}
