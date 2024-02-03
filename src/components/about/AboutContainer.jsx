const AboutContainer = ({ divName, image, text, header }) => {
  console.log(image, text, header);
  const container =
    divName === "left-container" ? (
      <div className="sub-container">
        <div>
          <img src={image} />
        </div>
        <div className="sub-container-text">
          <h2>{header}</h2>
          <p>{text}</p>
        </div>
      </div>
    ) : (
      <div className="sub-container">
        <div className="sub-container-text">
          <h2>{header}</h2>
          <p>{text}</p>
        </div>
        <div>
          <img src={image} />
        </div>
      </div>
    );

  return <>{container}</>;
};

export default AboutContainer;
