import type { Metadata } from "next";
import DemoForm from "./demo-form";

export const metadata: Metadata = { title: "Demo form" };

export default function Contact() {
  return (
    <section className="panel">
      <p className="eyebrow">Lead generation practice</p>
      <h1>A demo enquiry form.</h1>
      <p>
        Use fictional details only, such as learner@example.com. This form
        simulates submission in your browser: it does not send or store entries
        and does not create a real lead.
      </p>
      <DemoForm />
    </section>
  );
}
