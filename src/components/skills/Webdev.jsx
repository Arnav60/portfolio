import React from 'react';
import './skills.css';

const Webdev = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Web Development</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                <i class='bx bxl-nodejs'></i>
                <div>
                    <h3 className="skills__name">Node.js with express</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
                
                <div className="skills__data">
                <i class='bx bxl-react'></i>
                <div>
                    <h3 className="skills__name">React</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">MongoDB</h3>
                    <span className="skills__level">Basic</span>
                </div>
                </div>
            </div>

            <div className="skills__group">
            <div className="skills__data">
                <i class='bx bx-git-branch'></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                    <span className="skills__level">Advanced</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills__name">Postman</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>

                <div className="skills__data">
                <i class='bx bxl-tailwind-css' style= {{color: '#000000'}} ></i>
                <div>
                    <h3 className="skills__name">Tailwind CSS</h3>
                    <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Webdev