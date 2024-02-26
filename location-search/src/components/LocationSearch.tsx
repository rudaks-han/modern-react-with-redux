import React, { useState } from "react";
import type { Place } from "../api/Place.ts";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}
export default function LocationSearch({ onPlaceClick }) {
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // nominatim.org/release-docs/develop/api/Search/
    console.log("Need to search api...", term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </form>
    </div>
  );
}
