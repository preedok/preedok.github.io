import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import "./App.css";
import "./TextAnimation.css";
import figma from "../../assets/figma.svg";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count === 999) return;
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 50);
    return () => clearInterval(interval);
  }, [count]);

  const [words, setWords] = useState([
    "Frontend Developer",
    "Backend Developer",
    "Graphic Design",
  ]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [index, words.length]);

  const [isDarkMode, setIsDarkMode] = useState(false);
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <div
        className={`App ${style.cons} ${
          isDarkMode ? "dark-mode" : "light-mode"
        }`}
      >
        {/* Hero */}
        <Navbar />
        <section className={style.hero}>
          <div className="container mt-3">
            <div className="row">
              <div
               
                className="col-md-6 my-auto"
              >
                <h3 id={style.username}   data-aos="zoom-in-left"
                data-aos-duration="1000">Muhamad Iqbal Aprido</h3>
                <h2 className={index % 2 === 0 ? "slide-in" : "fade-out"}   data-aos="zoom-in-right"
                data-aos-duration="1000">
                  {words[index]}
                </h2>
                <p   data-aos="zoom-in-right"
                data-aos-duration="1000">
                  I design delightful product & code web. I can help everyone
                  build their business. It such a happiness for me. So, let me
                  to help you!
                </p>
                <a
                  href="https://wa.wizard.id/25f369"
                  className={`btn ${style.btnPrimary} btn-primary mt-3`}
                  data-aos="zoom-in-left"
                data-aos-duration="1000">
                  Contact Me
                </a>
              </div>
              <div
              
                className="col-md-6"
              >
                <img
                  style={{ marginBottom: "55px", borderRadius: "25px" }}
                  src={require("../../assets/animation_500_lfjt95fy.gif")}
                  alt="hero"
                  className={style.imgFluid}    data-aos="zoom-in-right"
                data-aos-duration="1000"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <div id="experience" className={style.experience}>
          <div className="container">
            <div
            
              className="row"
            >
              <div className="col-md-3">
                <div className={style.cardDark}>
                  <img
                    style={{ height: "45px" }}
                    src={require("../../assets/reactjs.png")}
                    alt="Icon Experience"   data-aos="zoom-in-left"
                data-aos-duration="1000"
                  />
                  <div className={style.detail}>
                    <h3   data-aos="zoom-in-right"
                data-aos-duration="1000">ReactJS Developer</h3>
                    <p>
                      <b>PT. Halotec Indonesia</b>
                    </p>
                    <p>April 2023 - Now</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className={style.cardDark}>
                  <img
                    style={{ width: "70px", height: "50px" }}
                    src={require("../../assets/node.png")}
                    alt="Icon Experience"   data-aos="zoom-in-left"
                data-aos-duration="1000"
                  />
                  <div className={style.detail}>
                    <h3   data-aos="zoom-in-right"
                data-aos-duration="1000">Backend Developer</h3>
                     <p>
                      <b   data-aos="zoom-in-right"
                data-aos-duration="1000">PT. Halotec Indonesia</b>
                    </p>
                    <p   data-aos="zoom-in-left"
                data-aos-duration="1000">April 2023 - Now</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className={style.cardDark}>
                  <img
                    style={{ width: "70px", height: "50px" }}
                    src={require("../../assets/native.png")}
                    alt="Icon Experience"   data-aos="zoom-in-right"
                data-aos-duration="1000"
                  />
                  <div className={style.detail}>
                    <h3   data-aos="zoom-in-left"
                data-aos-duration="1000">React Native developer</h3>
                    <p   data-aos="zoom-in-right"
                data-aos-duration="1000">
                      <b>PT. Halotec Indonesia</b>
                    </p>
                    <p   data-aos="zoom-in-left"
                data-aos-duration="1000">April 2023 - Now</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className={style.cardDark}>
                  <img src={figma} alt="Icon Experience"   data-aos="zoom-in-Right"
                data-aos-duration="1000" />
                  <div className={style.detail}   data-aos="zoom-in-left"
                data-aos-duration="1000">
                    <h3>UI Designer</h3>
                    <p   data-aos="zoom-in-right"
                data-aos-duration="1000">
                      <b   data-aos="zoom-in-left"
                data-aos-duration="1000">PT. Halotec Indonesia</b>
                    </p>
                    <p   data-aos="zoom-in-right"
                data-aos-duration="1000">April 2023 - Now</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Code */}
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          id="project"
          className={style.code}
        >
          <div className={`${style.title} d-flex`}>
            <h2 className="mx-3"   data-aos="zoom-in-left"
                data-aos-duration="1000">Code</h2>
            <p className="my-auto"   data-aos="zoom-in-right"
                data-aos-duration="1000">
              These are my projects created using ExpressJS, NextJS, ReactJS,
              Bootstrap, PostgreSql
            </p>
          </div>
          <div className={style.content}>
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <div className={style.card}>
                    <div className={style.cardBanner}>
                      <img
                        src={require("../../assets/balanjo.png")}
                        alt="Design 1"
                        className="img-fluid"
                        style={{ borderRadius: "15px" }}   data-aos="zoom-in-left"
                data-aos-duration="1000"
                      />
                    </div>
                    <div className={style.detailBanner}>
                      <div className={style.cardUser}>
                        <Link to="https://github.com/preedok/FE-BALANJO">
                          <img
                            width="50px"
                            height="50px"
                            src={require("../../assets/github.png")}
                            alt=""   data-aos="zoom-in-right"
                data-aos-duration="1000"
                          />
                        </Link>
                      </div>
                      <div className={style.detail}   data-aos="zoom-in-left"
                data-aos-duration="1000">
                        <h3>Balanjo App</h3>
                      </div>

                      <div className={style.cta}>
                        <a
                          href="https://balanjoyok.vercel.app/"
                          className={`btn btn-primary ${style.btnPrimary}`   data-aos="zoom-in-right"
                data-aos-duration="1000"}
                        >
                          See Detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={style.card}>
                    <div className={style.cardBanner}>
                      <img
                        src={require("../../assets/hire.jpg")}
                        alt="Design 1"
                        className="img-fluid"
                        style={{ borderRadius: "15px" }}   data-aos="zoom-in-left"
                data-aos-duration="1000"
                      />
                    </div>
                    <div className={style.detailBanner}>
                      <div className={style.cardUser}>
                        <Link to="https://github.com/preedok/FE-JOB">
                          <img
                            width="50px"
                            height="50px"
                            src={require("../../assets/github.png")}
                            alt=""   data-aos="zoom-in-right"
                data-aos-duration="1000"
                          />
                        </Link>
                      </div>
                      <div className={style.detail}>
                        <h3   data-aos="zoom-in-left"
                data-aos-duration="1000">Hire Job App</h3>
                      </div>
                      <div className={style.cta}>
                        <a
                          href="https://portalkerja2023.vercel.app/"
                          className={`btn btn-primary ${style.btnPrimary}`}   data-aos="zoom-in-right"
                data-aos-duration="1000"
                        >
                          See Detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={style.card}>
                    <div className={style.cardBanner}>
                      <img
                        style={{ borderRadius: "15px" }}
                        src={require("../../assets/wa.webp")}
                        alt="Design 1"
                        className="img-fluid"   data-aos="zoom-in-left"
                data-aos-duration="1000"
                      />
                    </div>
                    <div className={style.detailBanner}>
                      <div className={style.cardUser}>
                        <Link to="https://github.com/preedok/FE-WhatsApp">
                          <img
                            width="50px"
                            height="50px"
                            src={require("../../assets/github.png")}
                            alt=""   data-aos="zoom-in-right"
                data-aos-duration="1000"
                          />
                        </Link>
                      </div>
                      <div className={style.detail}>
                        <h3   data-aos="zoom-in-left"
                data-aos-duration="1000">Sleep Call App</h3>
                      </div>
                      <div className={style.cta}>
                        <a
                          href="https://fe-sleepcall-app.vercel.app/login"
                          className={`btn btn-primary ${style.btnPrimary}`}   data-aos="zoom-in-right"
                data-aos-duration="1000"
                        >
                          See Detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className={style.card}>
                    <div className={style.cardBanner}>
                      <img
                        style={{ borderRadius: "15px" }}
                        src={require("../../assets/pe.webp")}
                        alt="Design 1"
                        className="img-fluid"   data-aos="zoom-in-left"
                data-aos-duration="1000"
                      />
                    </div>
                    <div className={style.detailBanner}>
                      <div className={style.cardUser}>
                        <Link to="https://github.com/preedok/FE-ANKASA">
                          <img
                            width="50px"
                            height="50px"
                            src={require("../../assets/github.png")}
                            alt=""   data-aos="zoom-in-right"
                data-aos-duration="1000"
                          />
                        </Link>
                      </div>
                      <div className={style.detail}>
                        <h3   data-aos="zoom-in-left"
                data-aos-duration="1000">Ankasa App</h3>
                      </div>
                      <div className={style.cta}>
                        <a
                          href="https://ankasa2023.vercel.app/"
                          className={`btn btn-primary ${style.btnPrimary}`}   data-aos="zoom-in-right"
                data-aos-duration="1000"
                        >
                          See Detail
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project */}
        <div
          data-aos="zoom-in-right"
          data-aos-duration="1000"
          className={`${style.project} mt-5`}
        >
          <div className={`${style.title} d-flex`}>
            <h2 className="mx-3"   data-aos="zoom-in-right"
                data-aos-duration="1000">Project</h2>
            <p className="my-auto"   data-aos="zoom-in-left"
                data-aos-duration="1000">
              Practice makes it better, isn't it? I love to share anything
              related to techs such as programming, design, web styling, and
              data structure.
            </p>
          </div>
          <div className={style.content}>
            <div className="container">
              <div className={`row ${style.projectGrup}`}>
                <div className={`col-md-3 ${style.projectItem}`}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "rgba(165, 202, 255, 0.2)",
                      borderRadius: "50%",
                      padding: "10px", 
                    }}
                    src={require("../../assets/reactjs.png")}
                    alt="Project"   data-aos="zoom-in-left"
                data-aos-duration="1000"
                  />
                  <p className={style.highlight}   data-aos="zoom-in-right"
                data-aos-duration="1000">{count}+</p>
                  <p   data-aos="zoom-in-left"
                data-aos-duration="1000">ReactJS</p>
                </div>
                <div className={` col-md-3 ${style.projectItem}`}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "rgba(165, 202, 255, 0.2)",
                      borderRadius: "50%",
                      padding: "10px", 
                    }}
                    src={require("../../assets/Expressjs.png")}
                    alt="Project"   data-aos="zoom-in-right"
                data-aos-duration="1000"
                  />
                  <p className={style.highlight}   data-aos="zoom-in-left"
                data-aos-duration="1000">{count}+</p>
                  <p   data-aos="zoom-in-right"
                data-aos-duration="1000"   data-aos="zoom-in-left"
                data-aos-duration="1000">ExpressJS</p>
                </div>
                <div className={` col-md-3 ${style.projectItem}`}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "rgba(165, 202, 255, 0.2)",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                    src={require("../../assets/next.png")}
                    alt="Project"   data-aos="zoom-in-right"
                data-aos-duration="1000"
                  />
                  <p className={style.highlight}   data-aos="zoom-in-left"
                data-aos-duration="1000">{count}+</p>
                  <p   data-aos="zoom-in-right"
                data-aos-duration="1000">NextJS</p>
                </div>
                <div className={` col-md-3 ${style.projectItem}`}>
                  <img
                    style={{
                      width: "100px",
                      height: "100px",
                      backgroundColor: "rgba(165, 202, 255, 0.2)",
                      borderRadius: "50%",
                      padding: "10px",
                    }}
                    src={require("../../assets/canva.png")}
                    alt="Project"   data-aos="zoom-in-right"
                data-aos-duration="1000"
                  />
                  <p className={style.highlight}   data-aos="zoom-in-left"
                data-aos-duration="1000">{count}+</p>
                  <p   data-aos="zoom-in-right"
                data-aos-duration="1000">Canva</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Let Connect */}
        <div
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          id="connect"
          className={style.connect}
        >
          <div className={style.title}>
            <h2   data-aos="zoom-in-left"
                data-aos-duration="1000">Let’s Connect and Say Hi</h2>
          </div>
          <div className={style.content}>
            <div className="container">
              <div className={style.groupSocmed}>
                <div className={style.cardSocmed}>
                  <img
                    src={require("../../assets/LinkedIn.png")}
                    alt="Social Media"   data-aos="zoom-in-right"
                data-aos-duration="1000"
                  />
                  <p>LinkedIn</p>
                  <a href="" className={`btn btn-primary ${style.btnPrimary}`}   data-aos="zoom-in-left"
                data-aos-duration="1000">
                    Follow Me
                  </a>
                </div>
                <div className={style.cardSocmed}>
                  <img
                    src={require("../../assets/gmails.png")}
                    alt="Social Media"
                    width={82}
                    height={82}   data-aos="zoom-in-right"
                data-aos-duration="1000"
                  />
                  <p   data-aos="zoom-in-left"
                data-aos-duration="1000">Email</p>
                  <a
                    href="http://rebrand.ly/iqbalapredo"
                    className={`btn btn-primary ${style.btnPrimary}`}   data-aos="zoom-in-right"
                data-aos-duration="1000"
                  >
                    Follow Me
                  </a>
                </div>
                <div className={style.cardSocmed}>
                  <img
                    src={require("../../assets/instagram.webp")}
                    width={82}
                    height={82}
                    alt="Social Media"   data-aos="zoom-in-left"
                data-aos-duration="1000"
                  />
                  <p>Instagram</p>
                  <a href="" className={`btn btn-primary ${style.btnPrimary}`}   data-aos="zoom-in-right"
                data-aos-duration="1000">
                    Follow Me
                  </a>
                </div>
                <div className={style.cardSocmed}>
                  <img
                    src={require("../../assets/github.webp")}
                    alt="Social Media"
                    width={82}
                    height={82}   data-aos="zoom-in-left"
                data-aos-duration="1000"
                  />
                  <p   data-aos="zoom-in-right"
                data-aos-duration="1000">Github</p>
                  <a
                    href="https://github.com/preedok?tab=repositories"
                    className={`btn btn-primary ${style.btnPrimary}`}   data-aos="zoom-in-left"
                data-aos-duration="1000"
                  >
                    Follow Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* swith mode */}
        <div className={style.switch}>
          <div className="form-switch fixed-bottom m-3"   data-aos="zoom-in-right"
                data-aos-duration="1000">
            <input
              className="form-check-input toggle-button"
              style={{ width: "52px", height: "26px" }}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
