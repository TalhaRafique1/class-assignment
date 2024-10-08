import React from 'react'
import cssStyle from "./service.module.css"

console.log(cssStyle,"CSS-Style")

const ServicePage = () => {
  return (
    <div>
      <h2 className={cssStyle.black}>This is our Service Page</h2>
      <p className={cssStyle.blue}>Our team specializes in creating visually stunning and highly functional user interfaces. We use the latest technologies like HTML5, CSS3, JavaScript, and modern frameworks (React, Vue, Angular) to deliver responsive and dynamic websites.</p>
      <ul className={cssStyle.green}>
        <li><b>Custom Web Design</b> - Tailored interfaces that match your brand and provide a seamless user experience.</li>
        <li><b>Responsive Layouts</b> - Ensuring your website looks great and functions perfectly across all devices.</li>
        <li><b>Performance Optimization</b> - Delivering fast-loading pages to enhance user engagement and SEO ranking</li>
        <li><b>Cross-Browser Compatibility</b> - We ensure your website performs consistently on all modern browsers.</li>
      </ul>
    </div>
  )
}

export default ServicePage