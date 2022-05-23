import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaShip } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaDropbox } from "react-icons/fa";
import { FaBicycle } from "react-icons/fa";

import classes from "./Service.module.css";

const Service = () => {
  return (
    <div className={classes.service}>
      <h1 style={{ color: "darkslategray" }}> Our Service</h1>

      <div className="d-flex justify-content-center   ">
        <hr />
      </div>
      <div className={classes.serviceItem}>
        <p className={classes.par}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit totam
          nostrum delectus. Totam ullam nisi aut nostrum inventore ipsam
          ratione?
        </p>
      </div>
      <div className="row">
        <div className="col-5">
          <h1
            style={{
              textAlign: "left",
              color: "darkslategray",
              fontSize: "40px",
            }}
          >
            WE OFFER QUICK & <br />
            POWERFULL LOGISTICS SOLUTION <br></br>
          </h1>
          <hr className={classes.hrItem} />

          <p className={classes.servicePar}>
            {" "}
            I must explain to you how all this mistaken idea of denouncing
            pleasure and praising was born and I will give you
          </p>

          <button className={classes.serviceBtn}>Learn More</button>
        </div>
        <div className="col-7">
          <div className="d-flex justify-content-center">
            <div>
              <div className={classes.itemOne}>
                <FaTruck className={classes.truck} />
                <div className={classes.vertical}></div>
                <div style={{ marginLeft: "15px", marginRight: "10px" }}>
                  <h4 className={classes.title}>ROAD FREIGHT</h4>

                  <p className={classes.itemPar}>
                    {" "}
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
              <div className={classes.itemOne}>
                <FaShip className={classes.truck} />
                <div className={classes.vertical}></div>

                <div style={{ marginLeft: "15px", marginRight: "10px" }}>
                  <h4 className={classes.title}>SEA FREIGHT</h4>

                  <p className={classes.itemPar}>
                    {" "}
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
              <div className={classes.itemOne}>
                <FaCog className={classes.truck} />
                <div className={classes.vertical}></div>

                <div style={{ marginLeft: "15px", marginRight: "10px" }}>
                  <h4 className={classes.title}>CONSULTING</h4>

                  <p className={classes.itemPar}>
                    {" "}
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className={classes.itemOne}>
                <FaPlane className={classes.truck} />
                <div className={classes.vertical}></div>

                <div style={{ marginLeft: "15px", marginRight: "10px" }}>
                  <h4 className={classes.title}>AIR FREIGHT</h4>

                  <p className={classes.itemPar}>
                    {" "}
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
              <div className={classes.itemOne}>
                <FaDropbox className={classes.truck} />
                <div className={classes.vertical}></div>

                <div style={{ marginLeft: "15px", marginRight: "10px" }}>
                  <h4 className={classes.title}>WARE HOUSE</h4>

                  <p className={classes.itemPar}>
                    {" "}
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
              <div className={classes.itemOne}>
                <FaBicycle className={classes.truck} />
                <div className={classes.vertical}></div>

                <div style={{ marginLeft: "15px", marginRight: "10px" }}>
                  <h4 className={classes.title}>FAST DELIVERY</h4>

                  <p className={classes.itemPar}>
                    {" "}
                    Lorem Ipsum is simply dummy text
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
