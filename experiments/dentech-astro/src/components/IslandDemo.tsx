import { useState } from 'react';

/** Tiny client island to prove React loads only when needed (check Network tab). */
export default function IslandDemo() {
  const [n, setN] = useState(0);
  return (
    <div className="island-demo">
      <p className="island-demo__label">React island (hydrated on this page)</p>
      <button type="button" className="island-demo__btn" onClick={() => setN((c) => c + 1)}>
        Clicks: {n}
      </button>
    </div>
  );
}
