import { FaShoppingBag } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.about}>
      <h1 style={{ color: "darkslategray", textAlign: "center" }}>
        WELLCOME TO CARRIES !
      </h1>
      <div className={classes.aboutItem}>
        <hr />
      </div>
      <div className="row mt-4 ms-5" style={{ margin: "auto" }}>
        <div className="col-6">
          <img src="/assets/logistic.png" alt="logistic" height="350px" />
          <div className={classes.par}>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo vero in quidem dolores a odio iste numquam eius harum
              esse necessitatibus id ipsa voluptas rem earum veniam, at illum
              consequuntur. Ad, incidunt! Cumque repellat, non quas eligendi
              culpa magnam natus.
            </p>
          </div>
        </div>
        <div className="col-6">
          <h1
            className={classes.aboutTitle}
            style={{
              color: "darkslategray",
              textAlign: "left",
              fontSize: "40px",
            }}
          >
            WE HAVE 25 EXPERIENCE <br /> IN THIS PASSION
          </h1>
          <p style={{ textAlign: "left" }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,
          </p>

          <div
            className="row bg-light pt-3 me-5 rows"
            style={{ marginTop: "160px" }}
          >
            <div className="col-4">
              <div className="d-flex justify-content-center me-5">
                <FaShoppingBag className={classes.shoppingBag} />
                <p className={classes.paragraph}>120</p>
              </div>

              <p className={classes.pars}> Project Done</p>
            </div>

            <div className="col-4">
              <div className="d-flex justify-content-center me-5">
                <FaThumbsUp className={classes.like} />
                <p className={classes.paragraph}>100</p>
              </div>

              <p className={classes.pars}> Project Done</p>
            </div>

            <div className="col-4">
              <div className="d-flex justify-content-center me-5">
                <FaUsers className={classes.person} />
                <p className={classes.paragraph}>30</p>
              </div>

              <p className={classes.pars}> Project Done</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
