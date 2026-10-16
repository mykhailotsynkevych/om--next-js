declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export type EcommerceEventName =
  | "view_item"
  | "add_to_cart"
  | "begin_checkout"
  | "purchase";

export type EcommerceItem = {
  item_id: string;
  item_name: string;
  price: number;
  quantity: number;
};

export type EcommerceEventPayload = {
  currency: string;
  value: number;
  items: EcommerceItem[];
  transaction_id?: string;
};

export function pushDemoFormCompleted(): void {
  window.dataLayer ??= [];

  window.dataLayer.push({
    event: "demo_form_completed",
    form_id: "contact_demo",
    form_mode: "simulation",
  });
}

export function pushEcommerceEvent(
  event: EcommerceEventName,
  ecommerce: EcommerceEventPayload,
): void {
  window.dataLayer ??= [];
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({ event, ecommerce });
}