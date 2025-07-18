export default function Contact() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Contact Us</h1>
        <p className="lead text-muted">Get in touch with our team</p>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="row g-4">
            {/* Contact Form */}
            <div className="col-md-8">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-primary text-white">
                  <h5 className="mb-0">Send us a Message</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="firstName" required />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="lastName" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" required />
                      </div>
                      <div className="col-12">
                        <label htmlFor="subject" className="form-label">Subject</label>
                        <select className="form-select" id="subject">
                          <option value="">Choose a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="support">Technical Support</option>
                          <option value="sales">Sales</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea className="form-control" id="message" rows={5} required></textarea>
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="newsletter" />
                          <label className="form-check-label" htmlFor="newsletter">
                            Subscribe to our newsletter
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type="submit" className="btn btn-primary btn-lg w-100">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="col-md-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-header bg-success text-white">
                  <h5 className="mb-0">Contact Information</h5>
                </div>
                <div className="card-body">
                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                      <strong>Address</strong>
                    </div>
                    <p className="ms-4 text-muted">
                      123 Business Street<br />
                      Suite 100<br />
                      City, State 12345
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-telephone-fill text-primary me-2"></i>
                      <strong>Phone</strong>
                    </div>
                    <p className="ms-4 text-muted">
                      +1 (555) 123-4567
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-envelope-fill text-primary me-2"></i>
                      <strong>Email</strong>
                    </div>
                    <p className="ms-4 text-muted">
                      info@example.com
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-clock-fill text-primary me-2"></i>
                      <strong>Business Hours</strong>
                    </div>
                    <p className="ms-4 text-muted">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM<br />
                      Sun: Closed
                    </p>
                  </div>

                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary btn-sm flex-fill">
                      <i className="bi bi-facebook"></i>
                    </button>
                    <button className="btn btn-outline-info btn-sm flex-fill">
                      <i className="bi bi-twitter"></i>
                    </button>
                    <button className="btn btn-outline-primary btn-sm flex-fill">
                      <i className="bi bi-linkedin"></i>
                    </button>
                    <button className="btn btn-outline-danger btn-sm flex-fill">
                      <i className="bi bi-instagram"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}