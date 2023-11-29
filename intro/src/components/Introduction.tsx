import "./Introduction.css";
import myImage from "./myphoto.jpg";

const Introduction = () => {
  return (
    <div className="container">
      <div className="left">
        <h1 className="heading">About me</h1>
        <p className="intro">
          Hi, my name is Sung Min and I am an aspiring developer with a passion
          for problem-solving and a solid foundation in computer science. I am
          currently pursuing a Bachelor's degree in Computer and Information
          Sciences at Auckland University of Technology and I am dedicated to
          expanding my knowledge and honing my skills in the dynamic field of
          technology.
        </p>
      </div>
      <div className="right">
        <img className="myImage" src={myImage} alt="" />
      </div>
    </div>
  );
};

export default Introduction;
