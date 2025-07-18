export default function About() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="display-4 fw-bold text-center mb-5">About Us</h1>
          
          <div className="row align-items-center mb-5">
            <div className="col-md-6">
              <div className="bg-light rounded p-4 text-center">
                <h4>Company Image</h4>
                <p>500x300 Image Placeholder</p>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="fw-bold mb-3">Our Story</h3>
              <p className="lead">
                We started with a simple mission: to make technology accessible and 
                meaningful for everyone. Since 2020, we&apos;ve been dedicated to creating 
                innovative solutions that empower businesses and individuals.
              </p>
              <p>
                Our team of passionate professionals works tirelessly to deliver 
                exceptional products and services that exceed expectations.
              </p>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-4 text-center mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                    <i className="bi bi-eye fs-3"></i>
                  </div>
                  <h5 className="card-title">Vision</h5>
                  <p className="card-text">To be the leading provider of innovative technology solutions worldwide.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 text-center mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="bg-success text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                    <i className="bi bi-bullseye fs-3"></i>
                  </div>
                  <h5 className="card-title">Mission</h5>
                  <p className="card-text">Empowering businesses through cutting-edge technology and exceptional service.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4 text-center mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="bg-info text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '70px', height: '70px'}}>
                    <i className="bi bi-heart fs-3"></i>
                  </div>
                  <h5 className="card-title">Values</h5>
                  <p className="card-text">Innovation, integrity, customer focus, and continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-white rounded p-5 text-center">
            <h3 className="fw-bold mb-3">Ready to Get Started?</h3>
            <p className="lead mb-4">Join thousands of satisfied customers who trust our platform.</p>
            <button className="btn btn-light btn-lg">Contact Us Today</button>
          </div>
        </div>
      </div>
    </div>
  );
}