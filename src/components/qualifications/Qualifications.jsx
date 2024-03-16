import React, { useState } from "react";
import "./qualifications.css";

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">My personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i class="uil uil-graduation-cap qualification__icon"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i class="uil uil-briefcase"></i> Experience
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B.E Information Technology 7.53 CGPA
                </h3>
                <span className="qualification__subtitle">
                  Xavier Institute of Engineering
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2018-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">HSC (CBSE) 88%</h3>
                <span className="qualification__subtitle">
                  Kendriya Vidyalaya No. 2 Colaba
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2017-2018
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">SSC (CBSE) 93.4% </h3>
                <span className="qualification__subtitle">
                  Kendriya Vidyalaya No. 2 Colaba
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2015-2016
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <div className="qualification__line"></div> */}
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Graduate Engineer Trainee
                </h3>
                <span className="qualification__subtitle">
                  Jio Platforms Limited
                </span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2022-2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Data Engineer</h3>
                <span className="qualification__subtitle">LTIMindtree</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2022-2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Frontend Developer Intern(React)
                </h3>
                <span className="qualification__subtitle">Dew Solutions</span>
                <div className="qualification__calender">
                  <i class="uil uil-calendar-alt"></i>2022
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                {/* <div className="qualification__line"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
