import type { FC, FormEvent } from 'react'
import './ContactUs.css'

const ContactUs: FC = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-overlay" />
        <div className="contact-hero-inner">
          <p className="contact-hero-kicker">We would love to hear from you</p>
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-subtitle">
            Partner with IndustryIceberg to unlock compliant, AI-powered transformation across
            life sciences. Our global team supports enterprises from strategy through scaled
            deployment.
          </p>
        </div>
      </section>

      {/* Contact Options Grid */}
      <section className="contact-section contact-options">
        <div className="contact-section-header">
          <h2>Connect with the right team</h2>
          <p>
            Whether you&apos;re exploring AI for regulatory, quality, or operations, we will
            connect you with the right experts to move your initiatives forward.
          </p>
        </div>
        <div className="contact-options-grid">
          <article className="contact-card">
            <div className="contact-card-icon contact-card-icon--sales">
              <div className="contact-card-icon-circle">
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <rect
                    x="8"
                    y="6"
                    width="14"
                    height="12"
                    rx="3"
                    ry="3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M10 20.5c1.4 2.8 3.7 4.9 6.3 6l2.4-2.4a1.1 1.1 0 0 1 1.1-.27A10.9 10.9 0 0 0 23 24c.5 0 .9.4.9.9V27c0 .6-.5 1-1.1 1A16.9 16.9 0 0 1 7 11.1c0-.6.4-1.1 1-1.1h2.2c.5 0 .9.4 1 .9.1.7.3 1.4.5 2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <h3>Talk to Sales</h3>
            <p>
              Discuss enterprise licensing, platform capabilities, and tailored AI roadmaps
              for your organization.
            </p>
            <button type="button" className="contact-card-cta contact-card-cta--outline">
              Speak with Sales
            </button>
          </article>

          <article className="contact-card">
            <div className="contact-card-icon contact-card-icon--support">
              <div className="contact-card-icon-circle">
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <path
                    d="M10 23.5v1.3A2.2 2.2 0 0 0 12.2 27H18a4 4 0 0 0 4-4v-1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <rect
                    x="6"
                    y="9"
                    width="20"
                    height="12"
                    rx="6"
                    ry="6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M9 15v2.5M23 15v2.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <h3>Customer Support</h3>
            <p>
              Already a customer? Our support team is here to help with onboarding, adoption,
              and day-to-day questions.
            </p>
            <button type="button" className="contact-card-cta contact-card-cta--outline">
              Contact Support
            </button>
          </article>

          <article className="contact-card">
            <div className="contact-card-icon contact-card-icon--partners">
              <div className="contact-card-icon-circle">
                <svg viewBox="0 0 32 32" aria-hidden="true">
                  <path
                    d="M8.5 18.5 12 22a2.7 2.7 0 0 0 3.8 0l2.2-2.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 14.5h3l2-2.5 2.5 3h3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="11"
                    cy="9"
                    r="2.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="21"
                    cy="11"
                    r="2.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </div>
            </div>
            <h3>Partnerships &amp; Alliances</h3>
            <p>
              Explore ecosystem collaborations, implementation partnerships, and co-innovation
              opportunities.
            </p>
            <button type="button" className="contact-card-cta contact-card-cta--outline">
              Explore Partnerships
            </button>
          </article>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section contact-form-section" id="contact-form">
        <div className="contact-form-layout">
          <div className="contact-form-copy">
            <h2>Tell us how we can help</h2>
            <p>
              Share a few details about your organization and objectives. Our team will respond
              within one to two business days with the next best step.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="fullName" type="text" required />
              </div>
              <div className="contact-field">
                <label htmlFor="companyName">Company Name</label>
                <input id="companyName" name="companyName" type="text" required />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="businessEmail">Business Email</label>
                <input id="businessEmail" name="businessEmail" type="email" required />
              </div>
              <div className="contact-field">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input id="phoneNumber" name="phoneNumber" type="tel" />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="country">Country / Region</label>
                <select id="country" name="country" defaultValue="">
                  <option value="" disabled>
                    Select a country or region
                  </option>
                  <option value="india">India</option>
                  <option value="us">United States</option>
                  <option value="australia">Australia</option>
                  <option value="spain">Spain</option>
                  <option value="ireland">Ireland</option>
                  <option value="jordan">Jordan</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="contact-field">
                <label htmlFor="inquiryType">Inquiry Type</label>
                <select id="inquiryType" name="inquiryType" defaultValue="">
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="sales">Sales</option>
                  <option value="support">Customer Support</option>
                  <option value="partnerships">Partnerships &amp; Alliances</option>
                  <option value="regulatory">Regulatory &amp; Compliance</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Share a brief overview of your goals, timelines, and any specific use cases."
              />
            </div>

            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="contact-section contact-global">
        <div className="contact-section-header">
          <h2>Global presence</h2>
          <p>
            IndustryIceberg supports life sciences organizations across regions with local context
            and global best practices.
          </p>
        </div>

        <div className="contact-global-layout">
          <div className="contact-global-summary">
            <p className="contact-global-kicker">Global presence</p>
            <h3>Serving regulated enterprises across key regions</h3>
            <p className="contact-global-copy">
              IndustryIceberg partners with life sciences organizations across mature and emerging
              markets, combining local regulatory context with global best practices.
            </p>
            <div className="contact-global-chips">
              <span className="contact-global-chip">India</span>
              <span className="contact-global-chip">United States</span>
              <span className="contact-global-chip">Australia</span>
              <span className="contact-global-chip">Spain</span>
              <span className="contact-global-chip">Ireland</span>
              <span className="contact-global-chip">Jordan</span>
            </div>
          </div>

          <div className="contact-global-regions">
            <div className="contact-region-card">
              <h3>India</h3>
              <p>Hyderabad &amp; key hubs supporting global delivery and regulatory operations.</p>
            </div>
            <div className="contact-region-card">
              <h3>United States</h3>
              <p>Strategic clients across pharma, biotech, and medtech innovation clusters.</p>
            </div>
            <div className="contact-region-card">
              <h3>Australia</h3>
              <p>Regional support for emerging biotech and clinical research ecosystems.</p>
            </div>
            <div className="contact-region-card">
              <h3>Spain</h3>
              <p>European engagement with R&amp;D and commercial life sciences teams.</p>
            </div>
            <div className="contact-region-card">
              <h3>Ireland</h3>
              <p>Quality, manufacturing, and regulatory operations for global pharma leaders.</p>
            </div>
            <div className="contact-region-card">
              <h3>Jordan</h3>
              <p>Growing presence across the Middle East for regional healthcare initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Compliance Section */}
      <section className="contact-section contact-trust">
        <div className="contact-section-header contact-section-header--compact">
          <h2>Built for regulated enterprises</h2>
          <p>
            Our platform is designed to align with global quality, security, and data privacy
            expectations for life sciences.
          </p>
        </div>

        <div className="contact-trust-row">
          <div className="contact-trust-item">
            <span className="contact-trust-label">GxP-ready</span>
            <p>Processes designed around GxP expectations for R&amp;D, manufacturing, and quality.</p>
          </div>
          <div className="contact-trust-item">
            <span className="contact-trust-label">Security</span>
            <p>Enterprise security controls and modern cloud architecture best practices.</p>
          </div>
          <div className="contact-trust-item">
            <span className="contact-trust-label">Data Privacy</span>
            <p>Controls to support stringent data privacy and governance requirements.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactUs

