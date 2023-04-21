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
                data-aos="zoom-in-right"
                data-aos-duration="1000"
                className="col-md-6 my-auto"
              >
                <h3 id={style.username}>Muhamad Iqbal Aprido</h3>
                <h2 className={index % 2 === 0 ? "slide-in" : "fade-out"}>
                  {words[index]}
                </h2>
                <p>
                  I design delightful product & code web. I can help everyone
                  build their business. It such a happiness for me. So, let me
                  to help you!
                </p>
                <a
                  href="https://wa.wizard.id/25f369"
                  className={`btn ${style.btnPrimary} btn-primary mt-3`}
                >
                  Contact Me
                </a>
              </div>
              <div
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                className="col-md-6"
              >
                <img
                  style={{ marginBottom: "55px", borderRadius: "25px" }}
                  src={require("../../assets/animation_500_lfjt95fy.gif")}
                  alt="hero"
                  className={style.imgFluid}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <div id="experience" className={style.experience}>
          <div className="container">
            <div
              data-aos="zoom-in-right"
              data-aos-duration="1000"
              className="row"
            >
              <div className="col-md-3">
                <div className={style.cardDark}>
                  <img
                    style={{ height: "45px" }}
                    src={require("../../assets/reactjs.png")}
                    alt="Icon Experience"
                  />
                  <div className={style.detail}>
                    <h3>ReactJS Developer</h3>
                    {/* <p>
                      <b>Pijar Camp</b>
                    </p>
                    <p>Des 2022 - Present</p> */}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className={style.cardDark}>
                  <img
                    style={{ width: "70px", height: "50px" }}
                    src={require("../../assets/node.png")}
                    alt="Icon Experience"
                  />
                  <div className={style.detail}>
                    <h3>Backend Developer</h3>
                    {/* <p>
                      <b>Pijar Camp</b>
                    </p>
                    <p>Des 2022 - Present</p> */}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className={style.cardDark}>
                  <img
                    style={{ width: "70px", height: "50px" }}
                    src={require("../../assets/native.png")}
                    alt="Icon Experience"
                  />
                  <div className={style.detail}>
                    <h3>React Native developer</h3>
                    {/* <p>
                      <b>Pijar Camp</b>
                    </p>
                    <p>Des 2022 - Present</p> */}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className={style.cardDark}>
                  <img src={figma} alt="Icon Experience" />
                  <div className={style.detail}>
                    <h3>UI Designer</h3>
                    {/* <p>
                      <b>Pijar Camp</b>
                    </p>
                    <p>Des 2022 - Present</p> */}
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
            <h2 className="mx-3">Code</h2>
            <p className="my-auto">
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
                        style={{ borderRadius: "15px" }}
                      />
                    </div>
                    <div className={style.detailBanner}>
                      <div className={style.cardUser}>
                        <Link to="https://github.com/preedok/FE-BALANJO">
                          <img
                            width="50px"
                            height="50px"
                            src={require("../../assets/github.png")}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className={style.detail}>
                        <h3>Balanjo App</h3>
                      </div>

                      <div className={style.cta}>
                        <a
                          href="https://balanjoyok.vercel.app/"
                          className={`btn btn-primary ${style.btnPrimary}`}
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
                        style={{ borderRadius: "15px" }}
                      />
                    </div>
                    <div className={style.detailBanner}>
                      <div className={style.cardUser}>
                        <Link to="https://github.com/preedok/FE-JOB">
                          <img
                            width="50px"
                            height="50px"
                            src={require("../../assets/github.png")}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className={style.detail}>
                        <h3>Hire Job App</h3>
                      </div>
                      <div className={style.cta}>
                        <a
                          href="https://portalkerja2023.vercel.app/"
                          className={`btn btn-primary ${style.btnPrimary}`}
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
                        className="img-fluid"
                      />
                    </div>
                    <div className={style.detailBanner}>
                      <div className={style.cardUser}>
                        <Link to="https://github.com/preedok/FE-WhatsApp">
                          <img
                            width="50px"
                            height="50px"
                            src={require("../../assets/github.png")}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className={style.detail}>
                        <h3>Sleep Call App</h3>
                      </div>
                      <div className={style.cta}>
                        <a
                          href="https://fe-sleepcall-app.vercel.app/login"
                          className={`btn btn-primary ${style.btnPrimary}`}
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
                        className="img-fluid"
                      />
                    </div>
                    <div className={style.detailBanner}>
                      <div className={style.cardUser}>
                        <Link to="https://github.com/preedok/FE-ANKASA">
                          <img
                            width="50px"
                            height="50px"
                            src={require("../../assets/github.png")}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className={style.detail}>
                        <h3>Ankasa App</h3>
                      </div>
                      <div className={style.cta}>
                        <a
                          href="https://ankasa2023.vercel.app/"
                          className={`btn btn-primary ${style.btnPrimary}`}
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
            <h2 className="mx-3">Project</h2>
            <p className="my-auto">
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
                    alt="Project"
                  />
                  <p className={style.highlight}>{count}+</p>
                  <p>ReactJS</p>
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
                    alt="Project"
                  />
                  <p className={style.highlight}>{count}+</p>
                  <p>ExpressJS</p>
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
                    alt="Project"
                  />
                  <p className={style.highlight}>{count}+</p>
                  <p>NextJS</p>
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
                    alt="Project"
                  />
                  <p className={style.highlight}>{count}+</p>
                  <p>Canva</p>
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
            <h2>Let’s Connect and Say Hi</h2>
          </div>
          <div className={style.content}>
            <div className="container">
              <div className={style.groupSocmed}>
                <div className={style.cardSocmed}>
                  <img
                    src={require("../../assets/LinkedIn.png")}
                    alt="Social Media"
                  />
                  <p>LinkedIn</p>
                  <a href="" className={`btn btn-primary ${style.btnPrimary}`}>
                    Follow Me
                  </a>
                </div>
                <div className={style.cardSocmed}>
                  <img
                    src={require("../../assets/gmails.png")}
                    alt="Social Media"
                    width={82}
                    height={82}
                  />
                  <p>Email</p>
                  <a
                    href="http://rebrand.ly/iqbalapredo"
                    className={`btn btn-primary ${style.btnPrimary}`}
                  >
                    Follow Me
                  </a>
                </div>
                <div className={style.cardSocmed}>
                  <img
                    src={require("../../assets/instagram.webp")}
                    width={82}
                    height={82}
                    alt="Social Media"
                  />
                  <p>Instagram</p>
                  <a href="" className={`btn btn-primary ${style.btnPrimary}`}>
                    Follow Me
                  </a>
                </div>
                <div className={style.cardSocmed}>
                  <img
                    src={require("../../assets/github.webp")}
                    alt="Social Media"
                    width={82}
                    height={82}
                  />
                  <p>Github</p>
                  <a
                    href="https://github.com/preedok?tab=repositories"
                    className={`btn btn-primary ${style.btnPrimary}`}
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
          <div className="form-switch fixed-bottom m-3">
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
