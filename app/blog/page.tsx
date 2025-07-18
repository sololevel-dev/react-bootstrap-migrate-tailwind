export default function Blog() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Our Blog</h1>
        <p className="lead text-muted">Latest insights and updates</p>
      </div>

      <div className="row g-4">
        {/* Featured Post */}
        <div className="col-12">
          <div className="card border-0 shadow-sm">
            <div className="row g-0">
              <div className="col-md-4">
                <div className="bg-primary text-white p-5 h-100 d-flex align-items-center justify-content-center">
                  <div className="text-center">
                    <h4>Featured Image</h4>
                    <p>600x400</p>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex mb-2">
                    <span className="badge bg-primary me-2">Technology</span>
                    <small className="text-muted">December 15, 2024</small>
                  </div>
                  <h3 className="card-title">The Future of Web Development</h3>
                  <p className="card-text">
                    Explore the latest trends and technologies shaping the future of web development. 
                    From AI integration to progressive web apps, discover what&apos;s coming next in the industry.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="bg-secondary rounded-circle me-2" style={{width: '32px', height: '32px'}}></div>
                      <small>By John Doe</small>
                    </div>
                    <button className="btn btn-primary">Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="bg-light p-4 text-center">
              <h6>Post Image</h6>
              <p>400x250</p>
            </div>
            <div className="card-body">
              <div className="d-flex mb-2">
                <span className="badge bg-success me-2">Design</span>
                <small className="text-muted">Dec 12, 2024</small>
              </div>
              <h5 className="card-title">UI/UX Design Principles</h5>
              <p className="card-text">Essential principles every designer should know for creating exceptional user experiences.</p>
            </div>
            <div className="card-footer bg-transparent">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">5 min read</small>
                <button className="btn btn-outline-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="bg-light p-4 text-center">
              <h6>Post Image</h6>
              <p>400x250</p>
            </div>
            <div className="card-body">
              <div className="d-flex mb-2">
                <span className="badge bg-info me-2">Mobile</span>
                <small className="text-muted">Dec 10, 2024</small>
              </div>
              <h5 className="card-title">Mobile App Development Trends</h5>
              <p className="card-text">Current trends in mobile app development that are shaping user experiences in 2024.</p>
            </div>
            <div className="card-footer bg-transparent">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">7 min read</small>
                <button className="btn btn-outline-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="bg-light p-4 text-center">
              <h6>Post Image</h6>
              <p>400x250</p>
            </div>
            <div className="card-body">
              <div className="d-flex mb-2">
                <span className="badge bg-warning me-2">Security</span>
                <small className="text-muted">Dec 8, 2024</small>
              </div>
              <h5 className="card-title">Cybersecurity Best Practices</h5>
              <p className="card-text">Essential security measures every business should implement to protect their digital assets.</p>
            </div>
            <div className="card-footer bg-transparent">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">6 min read</small>
                <button className="btn btn-outline-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="bg-light p-4 text-center">
              <h6>Post Image</h6>
              <p>400x250</p>
            </div>
            <div className="card-body">
              <div className="d-flex mb-2">
                <span className="badge bg-danger me-2">Business</span>
                <small className="text-muted">Dec 5, 2024</small>
              </div>
              <h5 className="card-title">Digital Transformation Guide</h5>
              <p className="card-text">A comprehensive guide to digital transformation for modern businesses.</p>
            </div>
            <div className="card-footer bg-transparent">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">8 min read</small>
                <button className="btn btn-outline-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="bg-light p-4 text-center">
              <h6>Post Image</h6>
              <p>400x250</p>
            </div>
            <div className="card-body">
              <div className="d-flex mb-2">
                <span className="badge bg-dark me-2">Tutorial</span>
                <small className="text-muted">Dec 3, 2024</small>
              </div>
              <h5 className="card-title">Getting Started with APIs</h5>
              <p className="card-text">Learn the basics of working with APIs in your web applications.</p>
            </div>
            <div className="card-footer bg-transparent">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">10 min read</small>
                <button className="btn btn-outline-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6">
          <div className="card border-0 shadow-sm h-100">
            <div className="bg-light p-4 text-center">
              <h6>Post Image</h6>
              <p>400x250</p>
            </div>
            <div className="card-body">
              <div className="d-flex mb-2">
                <span className="badge bg-secondary me-2">Industry</span>
                <small className="text-muted">Dec 1, 2024</small>
              </div>
              <h5 className="card-title">Cloud Computing Benefits</h5>
              <p className="card-text">Discover the advantages of cloud computing for businesses of all sizes.</p>
            </div>
            <div className="card-footer bg-transparent">
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">4 min read</small>
                <button className="btn btn-outline-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pagination */}
      <nav className="mt-5">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item active">
            <span className="page-link">1</span>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}