export default function Portfolio() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Portfolio</h1>
        <p className="lead text-muted">Showcasing our best work and successful projects</p>
      </div>

      {/* Filter Buttons */}
      <div className="text-center mb-5">
        <div className="btn-group" role="group">
          <button type="button" className="btn btn-primary active">All</button>
          <button type="button" className="btn btn-outline-primary">Web Design</button>
          <button type="button" className="btn btn-outline-primary">Mobile Apps</button>
          <button type="button" className="btn btn-outline-primary">E-commerce</button>
          <button type="button" className="btn btn-outline-primary">Branding</button>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="row g-4 mb-5">
        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="bg-light p-5 text-center">
              <h5>Project Image</h5>
              <p>400x300</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">E-commerce Platform</h5>
              <p className="card-text">Modern online store with advanced features and seamless user experience.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Web Design</small>
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="bg-light p-5 text-center">
              <h5>Project Image</h5>
              <p>400x300</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Mobile Banking App</h5>
              <p className="card-text">Secure and intuitive mobile banking application with cutting-edge features.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Mobile Apps</small>
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="bg-light p-5 text-center">
              <h5>Project Image</h5>
              <p>400x300</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Corporate Website</h5>
              <p className="card-text">Professional corporate website with modern design and responsive layout.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Web Design</small>
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="bg-light p-5 text-center">
              <h5>Project Image</h5>
              <p>400x300</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Brand Identity Design</h5>
              <p className="card-text">Complete brand identity package including logo, colors, and style guide.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Branding</small>
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="bg-light p-5 text-center">
              <h5>Project Image</h5>
              <p>400x300</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Restaurant Ordering System</h5>
              <p className="card-text">Online food ordering platform with real-time tracking and payment integration.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">E-commerce</small>
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="bg-light p-5 text-center">
              <h5>Project Image</h5>
              <p>400x300</p>
            </div>
            <div className="card-body">
              <h5 className="card-title">Fitness Tracking App</h5>
              <p className="card-text">Comprehensive fitness application with workout plans and progress tracking.</p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">Mobile Apps</small>
                <button className="btn btn-primary btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-primary text-white rounded p-5 text-center">
        <h3 className="fw-bold mb-3">Ready to Start Your Project?</h3>
        <p className="lead mb-4">Let&apos;s bring your ideas to life with our expertise and creativity.</p>
        <button className="btn btn-light btn-lg me-3">Start Project</button>
        <button className="btn btn-outline-light btn-lg">View All Work</button>
      </div>
    </div>
  );
}