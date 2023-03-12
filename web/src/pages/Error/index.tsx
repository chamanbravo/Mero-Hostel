import "./index.scss";

function ErrorPage() {
  const width: Boolean = window.innerWidth > 765;
  return (
    <div className="error-page">
      <div className="error-text">
        <h1 style={{ fontSize: "6rem" }}>Oops!</h1>
        <h3 style={{ fontSize: "2rem", fontWeight: "400", maxWidth: "25ch" }}>
          We can't seem to find the page you're looking for.
        </h3>
        <h2
          style={{ fontSize: "1.2rem", fontWeight: "500", marginTop: "1rem" }}
        >
          Error code: 404
        </h2>
      </div>
      {width && (
        <img
          src="https://a0.muscache.com/airbnb/static/error_pages/404-Airbnb_final-d652ff855b1335dd3eedc3baa8dc8b69.gif"
          alt="error"
        />
      )}
    </div>
  );
}

export default ErrorPage;
