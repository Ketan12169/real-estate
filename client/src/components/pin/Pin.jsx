import { Marker, Popup } from "react-leaflet";
import "./pin.scss";
import { Link } from "react-router-dom";
import L from "leaflet";

const customIcon = new L.Icon({
  iconUrl: "/marker-icon-2x.png",
  iconSize: [25, 40],
});

function Pin({ item }) {
  return (
    <Marker position={[item.latitude, item.longitude]} icon={customIcon}>
      <Popup>
        <div className="popupContainer">
          <img src={item.images[0]} alt="" />
          <div className="textContainer">
            <Link to={`/${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
}

export default Pin;
