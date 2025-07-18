export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center min-vh-50">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Welcome to Our Platform</h1>
              <p className="lead mb-4">
                Discover amazing features and services that will transform your business
                experience with our cutting-edge solutions.
              </p>
              <button className="btn btn-light btn-lg me-3">Get Started</button>
              <button className="btn btn-outline-light btn-lg">Learn More</button>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded p-5 text-dark text-center">
                <h3>Hero Image Placeholder</h3>
                <p>800x600 Hero Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col">
              <h2 className="display-5 fw-bold">Our Features</h2>
              <p className="lead text-muted">Everything you need to succeed</p>
            </div>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="bg-primary text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-lightning-fill fs-4"></i>
                  </div>
                  <h5 className="card-title">Fast Performance</h5>
                  <p className="card-text">Lightning-fast loading times and optimal performance for the best user experience.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="bg-success text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-shield-check fs-4"></i>
                  </div>
                  <h5 className="card-title">Secure</h5>
                  <p className="card-text">Enterprise-grade security measures to protect your data and privacy.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="bg-info text-white rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px'}}>
                    <i className="bi bi-people-fill fs-4"></i>
                  </div>
                  <h5 className="card-title">24/7 Support</h5>
                  <p className="card-text">Round-the-clock customer support to help you whenever you need assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <h2 className="display-4 fw-bold text-primary">1000+</h2>
              <p className="lead">Happy Customers</p>
            </div>
            <div className="col-md-3 mb-4">
              <h2 className="display-4 fw-bold text-success">99.9%</h2>
              <p className="lead">Uptime</p>
            </div>
            <div className="col-md-3 mb-4">
              <h2 className="display-4 fw-bold text-info">24/7</h2>
              <p className="lead">Support</p>
            </div>
            <div className="col-md-3 mb-4">
              <h2 className="display-4 fw-bold text-warning">50+</h2>
              <p className="lead">Countries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}