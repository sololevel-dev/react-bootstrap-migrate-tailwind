export default function Pricing() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Pricing Plans</h1>
        <p className="lead text-muted">Choose the perfect plan for your needs</p>
      </div>

      {/* Pricing Toggle */}
      <div className="text-center mb-5">
        <div className="d-inline-flex align-items-center">
          <span className="me-3">Monthly</span>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="pricingToggle" />
            <label className="form-check-label" htmlFor="pricingToggle"></label>
          </div>
          <span className="ms-3">
            Yearly <span className="badge bg-success">Save 20%</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="row g-4 mb-5">
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-light text-center py-4">
              <h4 className="fw-bold">Starter</h4>
              <p className="text-muted mb-0">Perfect for small projects</p>
            </div>
            <div className="card-body text-center">
              <div className="mb-4">
                <span className="display-4 fw-bold">$19</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Up to 5 Projects
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  10GB Storage
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Email Support
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Basic Analytics
                </li>
                <li className="mb-2 text-muted">
                  <i className="bi bi-x-circle me-2"></i>
                  Advanced Features
                </li>
              </ul>
              <button className="btn btn-outline-primary w-100">Choose Plan</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-primary shadow h-100 position-relative">
            <div className="position-absolute top-0 start-50 translate-middle">
              <span className="badge bg-primary px-3 py-2">Most Popular</span>
            </div>
            <div className="card-header bg-primary text-white text-center py-4">
              <h4 className="fw-bold">Professional</h4>
              <p className="mb-0 opacity-75">Best for growing businesses</p>
            </div>
            <div className="card-body text-center">
              <div className="mb-4">
                <span className="display-4 fw-bold">$49</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Unlimited Projects
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  100GB Storage
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Priority Support
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Advanced Analytics
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  API Access
                </li>
              </ul>
              <button className="btn btn-primary w-100">Choose Plan</button>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-dark text-white text-center py-4">
              <h4 className="fw-bold">Enterprise</h4>
              <p className="mb-0 opacity-75">For large organizations</p>
            </div>
            <div className="card-body text-center">
              <div className="mb-4">
                <span className="display-4 fw-bold">$99</span>
                <span className="text-muted">/month</span>
              </div>
              <ul className="list-unstyled mb-4">
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Unlimited Everything
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  1TB Storage
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  24/7 Phone Support
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Custom Integrations
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Dedicated Manager
                </li>
              </ul>
              <button className="btn btn-dark w-100">Choose Plan</button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Comparison */}
      <div className="card border-0 shadow-sm">
        <div className="card-header bg-light">
          <h4 className="fw-bold mb-0 text-center">Feature Comparison</h4>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col">Features</th>
                  <th scope="col" className="text-center">Starter</th>
                  <th scope="col" className="text-center">Professional</th>
                  <th scope="col" className="text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Projects</td>
                  <td className="text-center">5</td>
                  <td className="text-center">Unlimited</td>
                  <td className="text-center">Unlimited</td>
                </tr>
                <tr>
                  <td>Storage</td>
                  <td className="text-center">10GB</td>
                  <td className="text-center">100GB</td>
                  <td className="text-center">1TB</td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td className="text-center">Email</td>
                  <td className="text-center">Priority</td>
                  <td className="text-center">24/7 Phone</td>
                </tr>
                <tr>
                  <td>API Access</td>
                  <td className="text-center"><i className="bi bi-x-circle text-danger"></i></td>
                  <td className="text-center"><i className="bi bi-check-circle text-success"></i></td>
                  <td className="text-center"><i className="bi bi-check-circle text-success"></i></td>
                </tr>
                <tr>
                  <td>Custom Integrations</td>
                  <td className="text-center"><i className="bi bi-x-circle text-danger"></i></td>
                  <td className="text-center"><i className="bi bi-x-circle text-danger"></i></td>
                  <td className="text-center"><i className="bi bi-check-circle text-success"></i></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-5">
        <h3 className="text-center fw-bold mb-4">Frequently Asked Questions</h3>
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="accordion" id="pricingAccordion">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                    Can I change my plan anytime?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#pricingAccordion">
                  <div className="accordion-body">
                    Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                    Is there a free trial available?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#pricingAccordion">
                  <div className="accordion-body">
                    Yes, we offer a 14-day free trial for all plans. No credit card required to get started.
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