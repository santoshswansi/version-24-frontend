/* eslint-disable react/no-unescaped-entities */
import "./Loader.css";

const Loader = () => {
  return (
    <div id="loader-container">
      <div id="loader-content">
        <div id="loader">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <h3>Version '24</h3>
        <p>An all India meet for MCA</p>
      </div>
    </div>
  );
};

export default Loader;
