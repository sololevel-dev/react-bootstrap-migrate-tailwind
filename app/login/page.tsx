'use client';

import { useState } from 'react';

export default function Login() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card border-0 shadow">
            <div className="card-header bg-primary text-white text-center py-4">
              <h3 className="fw-bold mb-0">{isSignUp ? 'Sign Up' : 'Sign In'}</h3>
              <p className="mb-0 opacity-75">
                {isSignUp ? 'Create your account' : 'Welcome back!'}
              </p>
            </div>
            <div className="card-body p-5">
              <form>
                {isSignUp && (
                  <div className="row g-3 mb-3">
                    <div className="col-6">
                      <label htmlFor="firstName" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="firstName" required />
                    </div>
                    <div className="col-6">
                      <label htmlFor="lastName" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="lastName" required />
                    </div>
                  </div>
                )}
                
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" className="form-control" id="email" required />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" required />
                </div>

                {isSignUp && (
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPassword" required />
                  </div>
                )}

                {!isSignUp && (
                  <div className="mb-3 d-flex justify-content-between align-items-center">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="rememberMe" />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="text-decoration-none">Forgot Password?</a>
                  </div>
                )}

                {isSignUp && (
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="terms" required />
                      <label className="form-check-label" htmlFor="terms">
                        I agree to the <a href="#" className="text-decoration-none">Terms of Service</a> and{' '}
                        <a href="#" className="text-decoration-none">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                )}

                <button type="submit" className="btn btn-primary w-100 btn-lg mb-3">
                  {isSignUp ? 'Create Account' : 'Sign In'}
                </button>

                <div className="text-center mb-3">
                  <span className="text-muted">or</span>
                </div>

                <div className="d-grid gap-2">
                  <button type="button" className="btn btn-outline-danger">
                    <i className="bi bi-google me-2"></i>
                    Continue with Google
                  </button>
                  <button type="button" className="btn btn-outline-primary">
                    <i className="bi bi-facebook me-2"></i>
                    Continue with Facebook
                  </button>
                </div>
              </form>
            </div>
            <div className="card-footer bg-light text-center py-3">
              <span className="text-muted">
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
              </span>{' '}
              <button 
                type="button" 
                className="btn btn-link p-0 text-decoration-none"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </div>

          {/* Features for new users */}
          {isSignUp && (
            <div className="mt-4">
              <div className="row g-3 text-center">
                <div className="col-4">
                  <div className="p-3">
                    <i className="bi bi-shield-check text-success fs-3"></i>
                    <p className="small mt-2 mb-0">Secure</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-3">
                    <i className="bi bi-lightning text-warning fs-3"></i>
                    <p className="small mt-2 mb-0">Fast</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="p-3">
                    <i className="bi bi-heart text-danger fs-3"></i>
                    <p className="small mt-2 mb-0">Reliable</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}