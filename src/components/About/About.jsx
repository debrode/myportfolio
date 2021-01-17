import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I am a final year Undergraduate studying Computer Science Engineering from Government College of Engineering And Leather Technology with a Cumulative GPA of 8.92.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ' I love to solve Problems tweaking DS and Algorithms also very much interested in emerging Software Engineering solutions of real-world problems.I am quite proficient in Data Structures and Algorithms in C++ and solved over 500 problems on platforms like GFG, Leetcode, Hackerrank, Codechef and CodeForces. I am a 4* coder at Codechef (username: deb14).I am quite interested in Web Developement(MERN), ML algorithms and Deep Learning solutions (CNN) . '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree ||
                    'I am proficient in C++ and intermediate in Javascript, Python and C. I am interested in and familiar with Web Development Using HTML, CSS, JavaScript and worked using React framework.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
