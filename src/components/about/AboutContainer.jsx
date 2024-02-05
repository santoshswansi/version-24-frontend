const AboutContainer = ({ divName, image, text, header }) => {
  const container =
    divName === "left-container" ? (
      <div className={`sub-container ${divName}`}>
        <div>
          <img src={image} />
        </div>
        <div className="sub-container-text">
          <h2>{header}</h2>
          <p>{text}</p>
        </div>
      </div>
    ) : (
      <div className={`sub-container ${divName}`}>
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
