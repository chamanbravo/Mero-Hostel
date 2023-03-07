import Button from "../Button";
import "./index.scss";

function Host() {
  return (
    <div className="host-section">
      <div className="host-text">
        <div className="htext">
          <h1>Host your Hostel.</h1>
          <p>
            Are you a hostel owner? Host your hostel and Provide a place for
            students.
          </p>
          <Button cName="btn-white" innerText="Learn More" link="/host" />
        </div>
      </div>
    </div>
  );
}

export default Host;
