"use client";

import { useState, type SubmitEvent } from "react";

export default function DemoForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    event.currentTarget.reset();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} onChange={() => setSubmitted(false)}>
      <label htmlFor="demo-name">
        Fictional name
        <input id="demo-name" name="name" required maxLength={80} autoComplete="off" />
      </label>
      <label htmlFor="demo-email">
        Fictional email
        <input
          id="demo-email"
          name="email"
          type="email"
          required
          maxLength={254}
          autoComplete="off"
          placeholder="learner@example.com"
        />
      </label>
      <button type="submit" className="button">Simulate submission</button>
      <div role="status">
        {submitted && (
          <p className="status">
            Demo completed. No data was sent and no real lead was created.
          </p>
        )}
      </div>
    </form>
  );
}
