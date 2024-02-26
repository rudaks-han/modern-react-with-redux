import React, { Fragment, useState } from "react";
import type { Place } from "../api/Place.ts";
import { search } from "../api/search.ts";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}
export default function LocationSearch({ onPlaceClick }) {
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // nominatim.org/release-docs/develop/api/Search/
    // console.log("Need to search api...", term);
    const results = await search(term);
    setPlaces(results);
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

      <h1 className="font-bold mt-6">Found Locations</h1>
      <div className="grid grid-cols-[1fr-40px] gap-3 mt-2 items-center">
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p className="text-sm">{place.name}</p>
              <button
                className="bg-blue-500 text-xs text-white font-bold py-1"
                onClick={() => onPlaceClick(place)}
              >
                Go
              </button>
              <div className="border-b w-full col-span-2" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
