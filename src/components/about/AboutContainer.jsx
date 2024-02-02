const AboutContainer = ({ divName, image, text }) => {
  console.log(image, text);
  return (
    <div className={divName}>
      <img src={image} />
      <p>{text}</p>
    </div>
  );
};

export default AboutContainer;
