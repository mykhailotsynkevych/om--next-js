declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function pushDemoFormCompleted(): void {
  window.dataLayer ??= [];

  window.dataLayer.push({
    event: "demo_form_completed",
    form_id: "contact_demo",
    form_mode: "simulation",
  });
}