import React from 'react'
import cssStyle from "./about.module.css"

console.log(cssStyle,"CSS-Style")

const AboutPage = () => {
  return (
    <div>
        <h2 className={cssStyle.black}>This is our About Page</h2>
      <p className={cssStyle.blue}>We specialize in delivering innovative software solutions designed to meet your unique needs. With a focus on quality and client satisfaction, we are committed to creating lasting value and building trusted relationships.</p>
    </div>
  )
}

export default AboutPage
