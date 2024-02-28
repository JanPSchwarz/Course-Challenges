import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR, { mutate } from "swr";
// import { SWRConfig } from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error = new Error(`An error occurred while fetching data.`);
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export default function ISSTracker() {
  const { data, mutate, error, isLoading } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });
  const coords = data;

  // if (error) return <h1>There is an error...</h1>;
  if (isLoading) return <h1>Is Loading...</h1>;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => {
          mutate();
        }}
      />
    </main>
  );
}

// const coords = data;

// const [coords, setCoords] = useState({
//   longitude: 0,
//   latitude: 0,
// });

// async function getISSCoords() {
//   try {
//     const response = await fetch(URL);
//     if (response.ok) {
//       const data = await response.json();
//       setCoords({ longitude: data.longitude, latitude: data.latitude });
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// useEffect(() => {
//   const timer = setInterval(() => {
//     getISSCoords();
//   }, 5000);

//   return () => {
//     clearInterval(timer);
//   };
// }, []);
