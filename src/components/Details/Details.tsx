import useGlobalContext from "../../hooks/useGlobalContext";
import "./style.css";
const Detalhes = () => {
  const { details } = useGlobalContext();
  return (
    <div className="container-details">
      <div className="ip-address">
        <p>IP Address</p>
        <b>{details.ip}</b>
      </div>
      <div className="location">
        <p>Location</p>
        <b>{details.location}</b>
      </div>
      <div className="timezone">
        <p>Time Zone</p>
        <b>{`UTC ${details.timezone}`}</b>
      </div>
      <div className="isp">
        <p>ISP</p>
        <b>{details.isp}</b>
      </div>
    </div>
  );
};

export default Detalhes;
