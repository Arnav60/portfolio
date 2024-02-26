import React from 'react'

const info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <box-icon name='briefcase'></box-icon>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2 Years Working</span>
      </div>

      <div className="about__box">
        <box-icon name='globe-alt'></box-icon>
        <h3 className="about__title">Open for</h3>
        <span className="about__subtitle">New Challenges</span>
      </div>

      <div className="about__box">
        <box-icon name='headphone'></box-icon>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  )
}

export default info