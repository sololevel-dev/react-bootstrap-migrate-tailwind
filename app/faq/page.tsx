export default function FAQ() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold">Frequently Asked Questions</h1>
        <p className="lead text-muted">Find answers to common questions</p>
      </div>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          {/* Search Bar */}
          <div className="mb-5">
            <div className="input-group input-group-lg">
              <input type="text" className="form-control" placeholder="Search for answers..." />
              <button className="btn btn-primary" type="button">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="mb-5">
            <div className="d-flex flex-wrap gap-2 justify-content-center">
              <button className="btn btn-primary active">All</button>
              <button className="btn btn-outline-primary">General</button>
              <button className="btn btn-outline-primary">Billing</button>
              <button className="btn btn-outline-primary">Technical</button>
              <button className="btn btn-outline-primary">Account</button>
              <button className="btn btn-outline-primary">Support</button>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="accordion" id="faqAccordion">
            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                  <strong>What services do you offer?</strong>
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We offer a comprehensive range of services including web development, mobile app development, 
                  cloud solutions, security services, maintenance, and consulting. Our team specializes in 
                  modern technologies and follows industry best practices to deliver high-quality solutions.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                  <strong>How much do your services cost?</strong>
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Our pricing varies depending on the project scope, complexity, and timeline. We offer flexible 
                  pricing models including fixed-price projects, hourly rates, and monthly retainers. Contact us 
                  for a personalized quote based on your specific requirements.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                  <strong>How long does a typical project take?</strong>
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Project timelines vary based on complexity and scope. Simple websites typically take 2-4 weeks, 
                  while complex web applications or mobile apps can take 3-6 months or more. We provide detailed 
                  timelines during the planning phase and keep you updated throughout the development process.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                  <strong>Do you provide ongoing support and maintenance?</strong>
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, we offer comprehensive support and maintenance packages. This includes regular updates, 
                  security patches, bug fixes, performance optimization, and technical support. We have different 
                  support tiers to match your needs and budget.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                  <strong>What technologies do you work with?</strong>
                </button>
              </h2>
              <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We work with a wide range of modern technologies including React, Next.js, Node.js, Python, 
                  React Native, Flutter, AWS, Azure, Docker, and many more. Our team stays up-to-date with 
                  the latest technologies and chooses the best stack for each project.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
                  <strong>Can you help with existing projects?</strong>
                </button>
              </h2>
              <div id="faq6" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Absolutely! We can take over existing projects, provide code reviews, fix bugs, add new features, 
                  or completely redesign your application. We&apos;ll start with a thorough assessment of your current 
                  codebase and provide recommendations for improvement.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7">
                  <strong>Do you work with international clients?</strong>
                </button>
              </h2>
              <div id="faq7" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  Yes, we work with clients worldwide. We have experience with international projects and can 
                  accommodate different time zones. We use modern communication tools to ensure smooth collaboration 
                  regardless of location.
                </div>
              </div>
            </div>

            <div className="accordion-item mb-3 border-0 shadow-sm">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq8">
                  <strong>What is your development process?</strong>
                </button>
              </h2>
              <div id="faq8" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body">
                  We follow an agile development methodology with regular sprints and client feedback sessions. 
                  Our process includes discovery, planning, design, development, testing, deployment, and ongoing 
                  support. We maintain transparent communication throughout the entire process.
                </div>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-light rounded p-5 text-center mt-5">
            <h4 className="fw-bold mb-3">Still have questions?</h4>
            <p className="mb-4">Our support team is here to help you with any additional questions.</p>
            <button className="btn btn-primary btn-lg me-3">Contact Support</button>
            <button className="btn btn-outline-primary btn-lg">Schedule a Call</button>
          </div>
        </div>
      </div>
    </div>
  );
}