import React from 'react'
import './Contact.css';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6d7bbc69-9ef1-481b-aacd-2e800b25dfde");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        alert("Message Sent Successfully ");
        event.target.reset(); 
      } else {
        alert("Something went wrong ");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error ");
    }
  };

  return (
    <div className='contact-me' id='Contact'>
      <h1>Contact Me</h1>
      <form onSubmit={onSubmit} className='contact-right'>
        <label>Your Name</label>
        <input type="text" placeholder='Enter your name' name='name' required />

        <label>Your Email</label>
        <input type='email' placeholder='Enter your email' name='email' required />

        <label>Write Your Message Here</label>
        <textarea name='message' rows="6" placeholder='Enter your message' required></textarea>

        <button type='submit' className='contact-submit'>Submit Now</button>
      </form>
      <br></br>
    </div>
    
  )
}

export default Contact
