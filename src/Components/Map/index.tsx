import { Coordinates } from "../../Custom/CustomInterfaces";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "../../App.css";

interface Props {
  /**
   * The coordinates for the map center.
   */
  coords: Coordinates;
}

/**
 * Component that displays a map using the Google Maps API.
 */

const Map = ({ coords }: Props) => {
  const { lat, lon } = coords;

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyA0EmJYuRMk6s8UJt9kn4nhwgUOI50Zp8M",
  });

  if (!isLoaded) return <section>Loading Map</section>;

  return (
    <div>
      <GoogleMap
        zoom={10}
        center={{ lat: lat, lng: lon }}
        mapContainerClassName="googleMapContainer"
      >
        <Marker position={{ lat: lat, lng: lon }}></Marker>
      </GoogleMap>
    </div>
  );
};

export default Map;
