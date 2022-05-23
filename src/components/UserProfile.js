import classes from "./UserProfile.module.css";

const UserProfile = () => {
  return (
    <div className={classes.profile}>
      <div className="row">
        <div className="col-6">
          <form>
            <div className="mb-3">
              <h4>
                <strong>FROM</strong>
              </h4>
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name and Last Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Country</label>
              <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text"  className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="number"  className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">VAT/Tax id</label>
              <input type="text" placeholder="Enter IOSS in Customs Declaration Section" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" placeholder="example@gamil.com" className="form-control" />
            </div>

           
          </form>
        </div>
        <div className="col-6">
          <form>
            <div className="mb-3">
              <h4>
                <strong>TO</strong>
              </h4>
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="First Name and Last Name"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Country</label>
              <input type="text" className="form-control" />
            </div>
          
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="number"  className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label">EORI Number</label>
              <input type="number" placeholder="Enter IOSS in Customs Declaration Section" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input type="email" placeholder="example@gamil.com" className="form-control" />
            </div>

            <button type="submit" className="btn btn-primary" style={{marginTop:"80px", marginLeft:"90px"}}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UserProfile;
