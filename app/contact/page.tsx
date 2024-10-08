import React from 'react'
import cssStyle from "./contact.module.css"

console.log(cssStyle,"CSS-Style")

const ContactPage = () => {
  return (
    <div>
       <h2 className={cssStyle.yellow}>This is our Contact Page</h2>
       <p className={cssStyle.black}>Need assistance? Contact us at [shdueuwhue@gmail.com/0209209049304]. We are ready to assist you!</p>
    </div>
  )
}

export default ContactPage