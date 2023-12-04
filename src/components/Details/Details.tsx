import useGlobalContext from "../../hooks/useGlobalContext";
import "./style.css";
const Detalhes = () => {
  const values = useGlobalContext();
  return (
    <div className="container-details">
      <div className="ip-address">
        <p>IP Address</p>
        <b>{values?.details.ip}</b>
      </div>
      <div className="location">
        <p>Location</p>
        <b>{values?.details.location}</b>
      </div>
      <div className="timezone">
        <p>Time Zone</p>
        <b>{values?.details.timezone}</b>
      </div>
      <div className="isp">
        <p>ISP</p>
        <b>{values?.details.isp}</b>
      </div>
    </div>
  );
};

export default Detalhes;
