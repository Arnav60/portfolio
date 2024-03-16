import React from 'react';
import './skills.css';

const Dataeng = () => {
  return (
    <div className="skills__content">
    <h3 className="skills__title">Data Analysis</h3>

    <div className="skills__box">
        <div className="skills__group">
            <div className="skills__data">
            <i class='bx bx-bar-chart-square'></i>
            <div>
                <h3 className="skills__name">PowerBI</h3>
                <span className="skills__level">Advanced</span>
            </div>
            </div>

            
            <div className="skills__data">
            <i class='bx bxl-python'></i>
            <div>
                <h3 className="skills__name">Python for data science</h3>
                <span className="skills__level">Intermediate</span>
            </div>
            </div>

            <div className="skills__data">
            <i class='bx bx-badge-check'></i>
            <div>
                <h3 className="skills__name">DAX</h3>
                <span className="skills__level">Basic</span>
            </div>
            </div>
        </div>

        <div className="skills__group">
        <div className="skills__data">
        <i class='bx bxs-analyse' ></i>
            <div>
                <h3 className="skills__name">Exploratory Data Analysis</h3>
                <span className="skills__level">Advanced</span>
            </div>
            </div>
            
            <div className="skills__data">
            <i class='bx bxs-data' ></i>
            <div>
                <h3 className="skills__name">SQL</h3>
                <span className="skills__level">Advanced</span>
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Dataeng