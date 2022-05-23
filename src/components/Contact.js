import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.contact}>
      <h1 style={{color:"darkslategray"}}>Get In Touch</h1>
      <p>Need any help just send a message via out email address</p>
      <div className="row mt-5 " style={{margin:"auto",  }}>
        <div className="col-7">
          <div>
            <input placeholder="Email.." className={classes.inp} />
            <input placeholder="Name.." className={classes.inp} />
          </div>
          <input placeholder="Subject.." className={classes.inp2} />
          <textarea className={classes.area} placeholder="Your Message Here.."></textarea>  <br/>

          <button className={classes.btn}> SEND</button>
        </div>
        <div className="col-5" >
        <img src="/assets/contact-right.png.webp" alt="contact" height="430px" className={classes.right} />
      
        </div>
      </div>
    </div>
  );
};
export default Contact;
