import "./Skills.css";
import web from "./web.jpg";

const Skills = () => {
  return (
    <div>
      <h1 className="heading">Skills & Experience</h1>
      <div className="columns">
        <div className="column">
          <img className="example" src={web} alt="Web Development" />
          <p className="title">
            <strong>Web Development</strong>
          </p>
          <p>
            As a web developer, I specialize in creating responsive and
            user-friendly websites. Proficient in front-end technologies such as
            HTML, CSS, and JavaScript, I design and implement intuitive
            interfaces. Additionally, I have experience with back-end
            development using frameworks like Node.js and databases such as
            MongoDB.
          </p>
        </div>
        <div className="column">
          <img className="example" src={web} alt="Android Development" />
          <p className="title">
            <strong>Android Development</strong>
          </p>
          <p>
            In the realm of Android development, I excel in crafting mobile
            applications that deliver a seamless user experience. Proficient in
            Java and Kotlin, I leverage the Android SDK to build feature-rich
            and visually appealing apps. I am adept at integrating third-party
            APIs, ensuring optimal performance and functionality on various
            Android devices.
          </p>
        </div>
        <div className="column">
          <img className="example" src={web} alt="Agile Development" />
          <p className="title">
            <strong>Agile Development</strong>
          </p>
          <p>
            With a strong foundation in Agile methodologies, I embrace
            collaborative and iterative development practices. I thrive in
            cross-functional teams, ensuring effective communication and
            adaptability throughout the project lifecycle. By prioritizing
            customer feedback and continuous improvement, I contribute to the
            timely delivery of high-quality software solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
