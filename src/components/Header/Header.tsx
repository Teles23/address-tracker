import CustomInput from "../CustomInput/CustomInput";
import Details from "../Details/Details";
import "./style.css";

export default function Header() {
  return (
    <div className="container-header">
      <h1>IP Address Tracker</h1>
      <CustomInput />
      <Details />
    </div>
  );
}
