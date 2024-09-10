import "./main.css";

const Main = ({ children, name, city, position, img }) => {
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <img
              src={img ? `${img}` : "img not found"}
              alt={name}
              className="w-100 img-fluid img-responsive"
            />
            <h5 className="mt-3 text-primary">
              {!name ? "name not found" : `${name}`}
            </h5>
            <div className="d-flex justify-content-between">
              <span>{city ? `${city}` : "not city found"}</span>
              <span>-</span>
              <span>{position ? `${city}` : "position not found"} </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
