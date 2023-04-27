import mapboxgl from "mapbox-gl";
import { useEffect } from "react";

function Map({ latitude, longitude, id }) {
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1Ijoic2lhbmRhbmllbCIsImEiOiJjbGd6MWN6bmMwZjBrM2ttOTNhd2dvbzJ2In0.njwaj9ovYz4GKhSu056Itw";
    const map = new mapboxgl.Map({
      container: `map${id}`,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 12,
    });

    new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
  }, [longitude, latitude, id]);

  return (
    <div
      id={`map${id}`}
      className="map"
      style={{ width: "100%", height: "250px" }}
    ></div>
  );
}

export default Map;
