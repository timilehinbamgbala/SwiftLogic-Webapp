import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div className="swx-page">
      <nav className="swx-nav">
        <div className="swx-nav-inner">
          <div className="swx-logo">
            swiftl
            <span className="swx-logo-dot" />
            gix
          </div>
          <ul className="swx-links">
            <li>
              <a href="#home" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="#track">Track shipment</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
          </ul>
          <div className="swx-nav-actions">
            <button className="swx-btn-primary">Ship now</button>
            <button className="swx-btn-outline">Contact sales</button>
          </div>
          <button
            className="swx-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>

        {menuOpen && (
          <div className="swx-mobile-menu">
            <ul className="swx-mobile-links">
              <li>
                <a
                  href="#home"
                  className="active"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#track" onClick={() => setMenuOpen(false)}>
                  Track shipment
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setMenuOpen(false)}>
                  About us
                </a>
              </li>
              <li>
                <a href="#blog" onClick={() => setMenuOpen(false)}>
                  Blog
                </a>
              </li>
            </ul>
            <div className="swx-mobile-actions">
              <button className="swx-btn-primary">Ship now</button>
              <button className="swx-btn-outline">Contact sales</button>
            </div>
          </div>
        )}
      </nav>

      <section className="swx-hero">
        <div className="swx-hero-visual">
          <div className="swx-hero-bg" />
          <img
            src="/Container.png"
            alt="Courier with delivery box, plane, ship, and truck in the background"
            className="swx-hero-img"
          />
        </div>

        <div className="swx-form-col">
          <div className="swx-form-header">
            <h1>Create your swiftlogix account</h1>
            <p className="swx-sub">
              Sign up to request shipments, get instant quotes, and track your
              deliveries seamlessly.
            </p>
          </div>

          <form className="swx-form" onSubmit={handleSubmit}>
            <div className="swx-field">
              <label htmlFor="fullName">Full name</label>
              <div className="swx-input-field">
                <input id="fullName" type="text" placeholder="Full name" />
              </div>
            </div>

            <div className="swx-field">
              <label htmlFor="email">Email</label>
              <div className="swx-input-field">
                <input id="email" type="email" placeholder="you@example.com" />
              </div>
            </div>

            <div className="swx-field">
              <label htmlFor="password">Password</label>
              <div className="swx-input-field">
                <svg
                  className="swx-field-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="5"
                    y="10"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="#292526"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 10V7a4 4 0 0 1 8 0v3"
                    stroke="#292526"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="swx-toggle-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"
                      stroke="#292526"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#292526"
                      strokeWidth="1.6"
                    />
                    {!showPassword && (
                      <line
                        x1="4"
                        y1="20"
                        x2="20"
                        y2="4"
                        stroke="#292526"
                        strokeWidth="1.6"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <div className="swx-field">
              <label htmlFor="confirmPassword">Confirm password</label>
              <div className="swx-input-field">
                <svg
                  className="swx-field-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <rect
                    x="5"
                    y="10"
                    width="14"
                    height="10"
                    rx="2"
                    stroke="#292526"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M8 10V7a4 4 0 0 1 8 0v3"
                    stroke="#292526"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  id="confirmPassword"
                  type={showConfirm ? "text" : "password"}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="swx-toggle-visibility"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"
                      stroke="#292526"
                      strokeWidth="1.6"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      stroke="#292526"
                      strokeWidth="1.6"
                    />
                    {!showConfirm && (
                      <line
                        x1="4"
                        y1="20"
                        x2="20"
                        y2="4"
                        stroke="#292526"
                        strokeWidth="1.6"
                      />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <label className="swx-checkbox-row">
              <input type="checkbox" />
              <span>
                I agree to the <a href="#terms">Terms</a> and{" "}
                <a href="#privacy">Privacy policy</a>
              </span>
            </label>

            <button type="submit" className="swx-signup-btn">
              Sign up
            </button>

            <div className="swx-social-header">
              <span className="swx-social-line" />
              <span className="swx-social-text">or sign in with</span>
              <span className="swx-social-line" />
            </div>

            <div className="swx-social-row">
              <button type="button" className="swx-social-btn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M22 12.2c0-.75-.07-1.47-.2-2.16H12v4.1h5.6a4.8 4.8 0 0 1-2.08 3.15v2.6h3.36c1.97-1.8 3.12-4.47 3.12-7.7Z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 22c2.7 0 4.96-.9 6.6-2.4l-3.36-2.6c-.93.63-2.13 1-3.24 1-2.5 0-4.6-1.68-5.36-3.95H3.18v2.48A10 10 0 0 0 12 22Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M6.64 14.05a5.99 5.99 0 0 1 0-3.85V7.72H3.18a10 10 0 0 0 0 8.81l3.46-2.48Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 6.2c1.47 0 2.79.5 3.83 1.5l2.87-2.87A9.6 9.6 0 0 0 12 2a10 10 0 0 0-8.82 5.72l3.46 2.48C7.4 7.9 9.5 6.2 12 6.2Z"
                  />
                </svg>
              </button>
              <button type="button" className="swx-social-btn">
                <svg viewBox="0 0 24 24" fill="#000000" aria-hidden="true">
                  <path d="M16.36 1.43c.1 1.02-.28 2.02-.94 2.75-.68.75-1.75 1.32-2.79 1.24-.13-1 .35-2.06 1-2.75.72-.77 1.94-1.32 2.73-1.24ZM19.9 17.2c-.36.83-.79 1.6-1.32 2.32-.72 1-1.46 2-2.64 2.02-1.16.02-1.54-.68-2.87-.68-1.33 0-1.76.66-2.86.7-1.14.04-2-1.08-2.74-2.06-1.48-2.02-2.62-5.7-1.1-8.18a3.9 3.9 0 0 1 3.28-1.99c1.1-.02 2.13.74 2.8.74.66 0 1.92-.92 3.24-.78.55.02 2.1.22 3.1 1.66-.08.05-1.85 1.08-1.83 3.22.02 2.56 2.24 3.42 2.26 3.43-.02.06-.35 1.22-1.17 2.6Z" />
                </svg>
              </button>
              <button type="button" className="swx-social-btn">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#1877F2"
                    d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z"
                  />
                </svg>
              </button>
            </div>

            <p className="swx-login-line">
              Already have an account? <a href="#login">Log in</a>
            </p>
          </form>
        </div>
      </section>

      <footer className="swx-footer">
        <div className="swx-footer-inner">
          <div className="swx-footer-links">
            <div className="swx-footer-brand">
              <div className="swx-footer-logo">
                swiftl
                <span className="swx-logo-dot" />
                gix
              </div>
              <p>Global logistics made simple and reliable.</p>
            </div>

            <div className="swx-footer-col">
              <h4>Contact</h4>
              <ul className="swx-footer-contact">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    <path
                      d="M4 7l8 6 8-6"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  support@swiftlogix.com
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M4 5c0-1.1.9-2 2-2h2l2 5-2 1.5a11 11 0 0 0 5.5 5.5L15 13l5 2v2c0 1.1-.9 2-2 2C10.5 19 4 12.5 4 5Z"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  +1 800 123 4567
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                    />
                    <path
                      d="M12 7v5l3.5 2"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Mon–Fri 09:00–18:00
                </li>
              </ul>
            </div>

            <div className="swx-footer-col">
              <h4>Tools</h4>
              <ul>
                <li>Track shipment</li>
                <li>Get a quote</li>
                <li>Ship now</li>
                <li>Simulate cost</li>
              </ul>
            </div>

            <div className="swx-footer-col">
              <h4>Services</h4>
              <ul>
                <li>Air freight</li>
                <li>Ocean freight</li>
                <li>Road freight</li>
                <li>Warehousing</li>
              </ul>
            </div>

            <div className="swx-footer-col">
              <h4>Support</h4>
              <ul>
                <li>Shipment guidelines</li>
                <li>Coverage areas</li>
                <li>FAQs</li>
                <li>Help center</li>
              </ul>
            </div>
          </div>

          <div className="swx-footer-bottom">
            <div className="swx-footer-divider" />
            <div className="swx-footer-bottom-row">
              <div className="swx-social-icons">
                <button aria-label="Facebook" className="swx-icon-btn">
                  <svg viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
                  </svg>
                </button>
                <button aria-label="YouTube" className="swx-icon-btn">
                  <svg viewBox="0 0 24 24" fill="#FFFFFF" aria-hidden="true">
                    <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 5 12 5 12 5s-6 0-7.7.3a2.7 2.7 0 0 0-1.9 1.9A28 28 0 0 0 2 12a28 28 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9C6 19 12 19 12 19s6 0 7.7-.3a2.7 2.7 0 0 0 1.9-1.9A28 28 0 0 0 22 12a28 28 0 0 0-.4-4.8ZM10 15V9l5.2 3-5.2 3Z" />
                  </svg>
                </button>
              </div>
              <div className="swx-footer-legal">
                Privacy policy | Terms &amp; conditions | Cookie settings
              </div>
              <div className="swx-footer-copyright">
                Swiftlogix 2026 &copy; All rights reserved
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
