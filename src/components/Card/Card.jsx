import "./Card.scss";
// import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

export const Card = (props) => {
  return (
    <div className="CardContainer">
     {/* <LeafletMap
        center={[50, 10]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[50, 10]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </LeafletMap> */}
    </div>
  );
};
