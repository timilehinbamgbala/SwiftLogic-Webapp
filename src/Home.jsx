import { useState } from "react";
import "./Home.css";

const testimonials = [
  {
    name: "Sarah L., Operations Manager, GlobalTech",
    quote:
      "SwiftLogix reduced our delivery delays by 30%. Their platform makes managing logistics effortless.",
    avatar: "/account.png",
  },
  {
    name: "Daniel K., Supply Chain Director, FreshMart",
    quote:
      "The real-time tracking gives us full visibility. We've never been more confident in our supply chain.",
    avatar: "/account.png",
  },
  {
    name: "Michael R., Logistics Lead, AeroParts",
    quote:
      "Reliable and transparent pricing. SwiftLogix is now our go-to for international shipping.",
    avatar: "/account.png",
  },
  {
    name: "Amara O., Founder, Craftline",
    quote:
      "Onboarding took a day and shipments have run smoothly since. Support actually responds fast.",
    avatar: "/account.png",
  },
  {
    name: "Tom H., Warehouse Manager, NorthBay Goods",
    quote:
      "Inventory visibility across our warehouses finally feels accurate and up to date.",
    avatar: "/account.png",
  },
];

const faqs = [
  {
    question: "Where can I find my tracking number?",
    answer:
      "Your tracking number is included in your booking confirmation email and on your shipping invoice.",
  },
  {
    question: "How often is tracking information updated?",
    answer:
      "Tracking updates typically refresh every few hours as your shipment moves through each stage of the delivery process.",
  },
  {
    question: "What should I do if my tracking number isn't working?",
    answer:
      "Double check the number for typos, then allow up to 24 hours after booking for it to activate. If it still doesn't work, contact support.",
  },
  {
    question: "Can I track multiple shipments at once?",
    answer:
      "Yes, you can enter multiple tracking numbers in your dashboard to monitor all your active shipments in one place.",
  },
  {
    question: "Why hasn't my tracking status changed?",
    answer:
      "Status updates depend on scan checkpoints along the route. Delays between checkpoints, especially over weekends or holidays, are normal.",
  },
];

const articles = [
  {
    title: "The Future of Sustainable Logistics",
    date: "6 March 2026",
    readTime: "3 min",
    excerpt:
      "From eco-friendly packaging to electric trucks — how logistics is going green. Trends in automation, inventory visibility, and flexible storage solutions.",
    image: "/articles/article-1.jpg",
  },
  {
    title: "What to Expect from Warehousing in 2025",
    date: "6 March 2026",
    readTime: "3 min",
    excerpt:
      "Trends in automation, inventory visibility, and flexible storage solutions. Trends in automation, inventory visibility, and flexible storage solutions.",
    image: "/articles/article-2.jpg",
  },
  {
    title: "Top Challenges in Cross-Border Trucking (and How to Overcome Them)",
    date: "6 March 2026",
    readTime: "3 min",
    excerpt:
      "From AI tracking to smart warehouses, see how innovation keeps businesses moving forward.",
    image: "/articles/article-3.jpg",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const loopTestimonials = [...testimonials, ...testimonials];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="hp-page">
      <nav className="hp-nav">
        <div className="hp-nav-inner">
          <div className="hp-logo">
            swiftl
            <span className="hp-logo-dot" />
            gix
          </div>
          <ul className="hp-links">
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
          <div className="hp-nav-actions">
            <button className="hp-btn-primary">Ship now</button>
            <button className="hp-btn-outline">Log in</button>
          </div>
          <button
            className="hp-menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "\u2715" : "\u2630"}
          </button>
        </div>

        {menuOpen && (
          <div className="hp-mobile-menu">
            <ul className="hp-mobile-links">
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
            <div className="hp-mobile-actions">
              <button className="hp-btn-primary">Ship now</button>
              <button className="hp-btn-outline">Log in</button>
            </div>
          </div>
        )}
      </nav>

      <section className="hp-hero">
        <div className="hp-hero-content">
          <div className="hp-hero-text">
            <div className="hp-hero-text-inner">
              <h1>Effortless Logistics, Every Step of the Way.</h1>
              <p className="hp-hero-sub">
                From local deliveries to global freight, we make shipping simple
                and stress-free.
              </p>
            </div>

            <div className="hp-hero-actions">
              <button className="hp-btn-primary">Ship now</button>
              <button className="hp-btn-outline hp-btn-wide">
                Contact sales
              </button>
            </div>
          </div>

          <div className="hp-hero-visual">
            <div className="hp-hero-bg" />
            <img
              src="/Container.png"
              alt="Courier with delivery box, plane, ship, and truck in the background"
              className="hp-hero-img"
            />
          </div>
        </div>
      </section>

      <section className="hp-services">
        <div className="hp-services-header">
          <h2 className="hp-services-title">
            Our Core <span className="hp-services-title-accent">Services</span>
          </h2>
          <p className="hp-services-desc">
            Choose the right solution for your shipping needs. Whether you
            require express delivery or full-scale supply chain support, we have
            you covered.
          </p>
        </div>

        <div className="hp-services-list">
          <div className="hp-service-card">
            <div className="hp-service-content">
              <h3 className="hp-service-name">Freight Services</h3>
              <p className="hp-service-desc">
                Move goods across the globe with speed, safety, and flexibility.
                Our freight services give you multiple transport options
                designed to match your delivery timeline and budget.
              </p>
              <button className="hp-btn-outline hp-btn-wide">
                Contact sales
              </button>
            </div>

            <div className="hp-service-image-wrapper">
              <img
                src="/Cargo Plane.png"
                alt="Cargo plane on tarmac"
                className="hp-service-img"
              />
              <div className="hp-service-info">
                <div className="hp-service-info-content"></div>
              </div>
            </div>
          </div>

          <div className="hp-service-card hp-service-card-reverse">
            <div className="hp-service-image-wrapper">
              <img
                src="/Warehouse.png"
                alt="Logistics warehouse interior"
                className="hp-service-img"
              />
            </div>

            <div className="hp-service-content">
              <h3 className="hp-service-name">
                Enterprise logistics solutions
              </h3>
              <p className="hp-service-desc">
                Scale your operations with intelligent supply chain solutions.
                Our enterprise services go beyond transportation, from advanced
                warehousing to end-to-end distribution and packaging support.
              </p>
              <button className="hp-btn-outline hp-btn-wide">
                Contact sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="hp-highlight">
        <div className="hp-highlight-content">
          <div className="hp-highlight-text">
            <h2 className="hp-highlight-title">
              Your Fleet&apos;s Safety, Our Top Priority
            </h2>
            <p className="hp-highlight-desc">
              Schedule regular safety checks and track maintenance in one
              platform, ensuring every vehicle stays compliant and road-ready.
            </p>
            <div className="hp-highlight-quote">&#8220;</div>
          </div>

          <div className="hp-highlight-image-wrapper">
            <img
              src="/Truck.png"
              alt="Delivery truck with cargo container"
              className="hp-highlight-img"
            />
          </div>
        </div>
      </section>

      <section className="hp-stats-section">
        <div className="hp-stats-card">
          <div className="hp-stat">
            <div className="hp-stat-value">10,000+</div>
            <div className="hp-stat-label">Deliveries Managed</div>
          </div>
          <div className="hp-stat">
            <div className="hp-stat-value">2,500+</div>
            <div className="hp-stat-label">Active Clients</div>
          </div>
          <div className="hp-stat">
            <div className="hp-stat-value">98%</div>
            <div className="hp-stat-label">On-Time Delivery Rate</div>
          </div>
          <div className="hp-stat">
            <div className="hp-stat-value">200+</div>
            <div className="hp-stat-label">Industry Awards</div>
          </div>
        </div>
      </section>

      <section className="hp-testimonials">
        <div className="hp-testimonials-header">
          <h2 className="hp-testimonials-title">
            <span className="hp-services-title-accent">Trusted</span> by Leading
            Businesses
          </h2>
          <p className="hp-testimonials-desc">
            See how companies rely on us to move goods efficiently and securely.
          </p>
        </div>

        <div className="hp-testimonials-viewport">
          <div className="hp-testimonials-track">
            {loopTestimonials.map((t, i) => (
              <div className="hp-testimonial" key={i}>
                <div className="hp-testimonial-quote-mark">&#8220;</div>
                <div className="hp-testimonial-card">
                  <div className="hp-testimonial-content">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="hp-testimonial-avatar"
                    />
                    <p className="hp-testimonial-text">{t.quote}</p>
                    <div className="hp-testimonial-author">{t.name}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-partners">
        <div className="hp-partners-row">
          <img
            src="/Logo-1.png"
            alt="Partner logo"
            className="hp-partner-logo"
          />
          <img
            src="/Logo-2.png"
            alt="Partner logo"
            className="hp-partner-logo"
          />
          <img
            src="/Logo-3.png"
            alt="Partner logo"
            className="hp-partner-logo"
          />
          <img
            src="/Logo-4.png"
            alt="Partner logo"
            className="hp-partner-logo"
          />
          <img
            src="/Logo-5.png"
            alt="Partner logo"
            className="hp-partner-logo"
          />
          <img src="/Logo.png" alt="Partner logo" className="hp-partner-logo" />
        </div>
      </section>

      <section className="hp-faq">
        <div className="hp-faq-header">
          <h2 className="hp-faq-title">
            Frequently Asked{" "}
            <span className="hp-services-title-accent">Questions</span>
          </h2>
          <p className="hp-faq-desc">
            Find quick answers to common questions about shipment tracking,
            delivery updates, and how to resolve issues.
          </p>
        </div>

        <div className="hp-faq-accordion">
          {faqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <div className="hp-faq-item" key={index}>
                <button
                  type="button"
                  className="hp-faq-trigger"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={isOpen}
                >
                  <span className="hp-faq-question">{item.question}</span>
                  <svg
                    className={
                      isOpen
                        ? "hp-faq-chevron hp-faq-chevron-open"
                        : "hp-faq-chevron"
                    }
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="#015F89"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isOpen && (
                  <div className="hp-faq-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="hp-articles">
        <h2 className="hp-articles-title">Latest Articles</h2>

        <div className="hp-articles-grid">
          <div
            className="hp-article-featured"
            style={{ backgroundImage: `url(${articles[0].image})` }}
          >
            <div className="hp-article-featured-overlay" />
            <div className="hp-article-featured-info">
              <h3 className="hp-article-featured-title">{articles[0].title}</h3>
              <p className="hp-article-featured-excerpt">
                {articles[0].excerpt}
              </p>
            </div>
          </div>

          <div className="hp-articles-list">
            {articles.map((article, index) => (
              <div className="hp-article-row" key={index}>
                <img
                  src={article.image}
                  alt={article.title}
                  className="hp-article-thumb"
                />
                <div className="hp-article-row-info">
                  <div className="hp-article-meta">
                    <svg
                      className="hp-article-meta-icon"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <rect
                        x="1.5"
                        y="2.5"
                        width="11"
                        height="10"
                        rx="1.5"
                        stroke="#C1B8BB"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M1.5 5.5h11"
                        stroke="#C1B8BB"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M4 1.5v2M10 1.5v2"
                        stroke="#C1B8BB"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="hp-article-date">{article.date}</span>
                    <span className="hp-article-dot">&#8226;</span>
                    <span className="hp-article-readtime">
                      {article.readTime}
                    </span>
                  </div>
                  <h4 className="hp-article-row-title">{article.title}</h4>
                  <p className="hp-article-row-excerpt">{article.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hp-cta-section">
        <div className="hp-cta-card">
          <div className="hp-cta-image-wrapper">
            <img
              src="/Container.png"
              alt="Plane, ship, and truck representing shipping services"
              className="hp-cta-img"
            />
          </div>

          <div className="hp-cta-content">
            <h2 className="hp-cta-title">
              Ready to Ship?{" "}
              <span className="hp-cta-title-accent">
                Let&apos;s Make It Happen
              </span>
            </h2>
            <p className="hp-cta-desc">
              Book your shipment in minutes and track every move with real-time
              visibility.
            </p>
            <button className="hp-btn-primary">Ship Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
