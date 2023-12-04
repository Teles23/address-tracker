import "./style.css";
const Details = () => {
  return (
    <div className="container-details">
      <div className="ip-address">
        <p>IP Address</p>
        <b>192.168.0.34</b>
      </div>
      <div className="location">
        <p>Location</p>
        <b>57.7517, -113.9351</b>
      </div>
      <div className="timezone">
        <p>Time Zone</p>
        <b>UTC-05:00</b>
      </div>
      <div className="isp">
        <p>ISP</p>
        <b>Bell Canada</b>
      </div>
    </div>
  );
};

export default Details;
