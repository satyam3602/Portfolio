import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Oasis Infobyte</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed web development internship at Oasis Infobyte, 
              gaining hands-on experience, enhancing UI/UX skills, 
              and improving problem-solving and collaboration in real-world projects.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Next24tech Technology & Services</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed an online voting system using Python, 
              collaborating with team members to ensure smooth functionality, 
              user-friendly interface, and optimized performance for a seamless voting experience.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE</h4>
                <h5>HCL Technology</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built a full-stack messaging app with Angular and MySQL at HCL,
               improving responsiveness and reliability while enhancing 
               CI/CD processes and collaborating in agile sprints.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
