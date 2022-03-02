import React, { useState } from "react";

export default function SearchBar() {
  const [term, setTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="Search mail"
        value={term}
        onChange={(e) => setTerm(e.currentTarget.value)}
      />
    </div>
  );
}
