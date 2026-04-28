import { useState } from 'react'
import './App.css'

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const stats = [
    { number: "5,000+", label: "Clients Funded", icon: "👥" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "5 Days", label: "Avg Timeline", icon: "⏱️" },
    { number: "4%", label: "Performance Fee", icon: "💰" }
  ]

  const services = [
    {
      title: "Expert Credit Evaluation",
      description: "Analyze credit profiles and identify the best financing options from a vetted network of 5-6 online lenders"
    },
    {
      title: "Seamless Sales Integration",
      description: "Hot transfers from your sales team via Slack. I take the conversation from there and provide daily updates"
    },
    {
      title: "End-to-End Support",
      description: "Daily follow-up with prospects until funded. I can even assist with product purchases once funding is received"
    },
    {
      title: "Flexible Availability",
      description: "3.5-hour daily shift during your peak sales hours, plus Calendly scheduling for off-shift consultations"
    }
  ]

  const specializations = [
    {
      category: "Funding Products",
      items: ["Personal Loans ($1K-$60K)", "0% Credit Cards (6-12 months)", "Creative solutions for all credit profiles"]
    },
    {
      category: "Target Industries",
      items: ["High-ticket coaching programs", "E-commerce education", "Digital marketing courses", "Personal development programs"]
    },
    {
      category: "Lender Network",
      items: ["5-6 vetted online lenders", "No exclusive affiliations", "Objective recommendations based on credit profile"]
    }
  ]

  const processSteps = [
    {
      number: "1",
      title: "Hot Transfer",
      description: "Sales rep hands off prospect via Slack with contact information"
    },
    {
      number: "2",
      title: "Initial Consultation",
      description: "20-30 minute call to understand financial situation and funding needs"
    },
    {
      number: "3",
      title: "Lender Matching",
      description: "Match prospect with best lender based on credit profile and needs"
    },
    {
      number: "4",
      title: "Application Support",
      description: "Guide prospect through complete application process"
    },
    {
      number: "5",
      title: "Daily Follow-Up",
      description: "Stay in touch with prospect and provide Slack updates to your team"
    },
    {
      number: "6",
      title: "Funding & Beyond",
      description: "Confirm funding received and assist with product purchase if needed"
    }
  ]

  const benefits = [
    {
      title: "Increased Conversions",
      description: "Remove the price barrier for qualified prospects who would otherwise walk away"
    },
    {
      title: "Zero Risk",
      description: "Performance-based pricing: pay only 4% of completed product purchase when prospect gets funded"
    },
    {
      title: "No Overhead",
      description: "Independent contractor model with no employee costs, benefits, or long-term contracts"
    },
    {
      title: "Proven Track Record",
      description: "5+ years of experience successfully funding 5,000+ clients across multiple programs"
    },
    {
      title: "Seamless Integration",
      description: "Works directly into your sales process with minimal training or onboarding"
    },
    {
      title: "Scalability",
      description: "Handle high lead volume (20-30+ prospects/week) without additional hiring"
    }
  ]

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>Funding Specialist</h1>
            <p className="tagline">Independent B2B Funding Contractor</p>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#benefits">Benefits</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Convert More Prospects With Expert Funding Support</h2>
          <p>Remove the price barrier for qualified prospects through accessible personal loans and credit card financing</p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <button className="cta-button">Start Partnership</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2>The Problem & The Solution</h2>
          <div className="problem-solution">
            <div className="problem-box">
              <h3>The Problem</h3>
              <p>High-ticket programs lose qualified prospects at the final stage because of one barrier: <strong>upfront cost</strong>. Prospects love your program, believe in the value, and are ready to commit—but they don't have the cash available right now.</p>
            </div>
            <div className="arrow">→</div>
            <div className="solution-box">
              <h3>The Solution</h3>
              <p>An independent funding specialist who integrates directly into your sales process, providing expert guidance to help prospects access personal loans and credit cards. Convert qualified buyers who would otherwise walk away.</p>
            </div>
          </div>

          <div className="about-content">
            <h3>Who I Am</h3>
            <p>I'm an independent funding specialist contractor with 5+ years of proven success helping high-ticket coaching, e-commerce education, and digital marketing companies remove financial barriers for their clients. I've successfully funded over 5,000 clients by matching them with the right lenders and guiding them through the entire funding process.</p>
            
            <h3>How I Work</h3>
            <p>I work as a performance-based contractor, meaning I only get paid when your prospects get funded. I integrate directly into your sales process through "hot transfers" via Slack, handle all the funding details, provide daily updates to your team, and stay with each client until they receive their funds. I work a focused 3.5-hour daily shift during your peak sales hours, plus I'm available via Calendly for off-shift consultations.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2>What I Provide</h2>
          <p className="section-subtitle">Expert funding support designed to integrate seamlessly into your sales process</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-number">{index + 1}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="section specializations-section">
        <div className="container">
          <h2>Specializations</h2>
          <div className="specializations-grid">
            {specializations.map((spec, index) => (
              <div key={index} className="spec-card">
                <h3>{spec.category}</h3>
                <ul>
                  {spec.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section process-section">
        <div className="container">
          <h2>How It Works</h2>
          <p className="section-subtitle">A seamless 6-step process from hot transfer to funded client</p>
          
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < processSteps.length - 1 && <div className="process-arrow">→</div>}
              </div>
            ))}
          </div>

          <div className="key-metrics">
            <h3>Key Metrics</h3>
            <div className="metrics-grid">
              <div className="metric">
                <div className="metric-label">Average Funding Time</div>
                <div className="metric-value">5 Days</div>
                <div className="metric-note">Personal loans (without complications)</div>
              </div>
              <div className="metric">
                <div className="metric-label">Initial Consultation</div>
                <div className="metric-value">20-30 Min</div>
                <div className="metric-note">Efficient and focused</div>
              </div>
              <div className="metric">
                <div className="metric-label">Funding Range</div>
                <div className="metric-value">$1K - $60K</div>
                <div className="metric-note">Average $10K per client</div>
              </div>
              <div className="metric">
                <div className="metric-label">Capacity</div>
                <div className="metric-value">20-30+ Clients/Week</div>
                <div className="metric-note">Can handle high volume</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compensation Section */}
      <section className="section compensation-section">
        <div className="container">
          <h2>Compensation Model</h2>
          <p className="section-subtitle">Performance-based pricing aligned with your success</p>
          
          <div className="compensation-box">
            <div className="comp-highlight">
              <h3>4% of Completed Product Purchase</h3>
              <p className="comp-description">I only get paid when your prospect gets funded and completes the purchase</p>
            </div>
            
            <div className="comp-details">
              <div className="comp-item">
                <h4>✓ No Upfront Fees</h4>
                <p>Zero cost to start the partnership</p>
              </div>
              <div className="comp-item">
                <h4>✓ Performance-Based</h4>
                <p>I succeed when your prospects succeed</p>
              </div>
              <div className="comp-item">
                <h4>✓ Calculated on Purchase Amount</h4>
                <p>If prospect funds $15K but uses $10K for program, I get 4% of $10K</p>
              </div>
              <div className="comp-item">
                <h4>✓ No Payment if Not Funded</h4>
                <p>Zero risk to your company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section benefits-section">
        <div className="container">
          <h2>Partnership Benefits</h2>
          <p className="section-subtitle">Why companies choose to work with an independent funding specialist</p>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">✓</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="section requirements-section">
        <div className="container">
          <h2>Partnership Requirements</h2>
          <div className="requirements-grid">
            <div className="req-card">
              <h3>Lead Volume</h3>
              <p><strong>Minimum:</strong> 2-5 prospects/week</p>
              <p><strong>Optimal:</strong> 10-20+ prospects/week</p>
              <p><strong>Capacity:</strong> 20-30+ prospects/week</p>
            </div>
            <div className="req-card">
              <h3>Communication</h3>
              <p><strong>Hot Transfers:</strong> Slack</p>
              <p><strong>Updates:</strong> Daily Slack messages</p>
              <p><strong>Scheduling:</strong> Calendly calendar</p>
            </div>
            <div className="req-card">
              <h3>Availability</h3>
              <p><strong>Primary Shift:</strong> 3.5 hours daily</p>
              <p><strong>Off-Shift:</strong> Calendly scheduling</p>
              <p><strong>Flexibility:</strong> Multiple companies simultaneously</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h4>How much does this cost?</h4>
              <p>Nothing upfront. I only get paid 4% of the completed product purchase when a prospect successfully gets funded. If they don't get funded, you don't pay anything.</p>
            </div>
            <div className="faq-item">
              <h4>What if a prospect doesn't qualify?</h4>
              <p>I work with all credit profiles, including bad credit, to find creative solutions. If a prospect truly doesn't qualify, I'll let you know immediately so you can discuss alternatives.</p>
            </div>
            <div className="faq-item">
              <h4>How long does funding take?</h4>
              <p>Average 5 days for personal loans. Credit cards take 7+ days minimum. Timeline depends on lender requirements and credit profile complexity.</p>
            </div>
            <div className="faq-item">
              <h4>Do you work exclusively with one company?</h4>
              <p>No, I work with multiple companies simultaneously, depending on lead flow. This maintains consistent availability and volume.</p>
            </div>
            <div className="faq-item">
              <h4>What if a prospect wants to fund more than the program cost?</h4>
              <p>That's common. Prospects often want extra for advertising or resources. My commission is based on the amount actually used for the program purchase.</p>
            </div>
            <div className="faq-item">
              <h4>Are you compliant?</h4>
              <p>Yes. I don't record calls, have no lender affiliations, and follow all applicable lending regulations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2>Ready to Increase Conversions?</h2>
          <p className="section-subtitle">Let's discuss how we can work together to convert more qualified prospects</p>
          
          <div className="contact-form">
            <form onSubmit={handleFormSubmit}>
              {formSubmitted && (
                <div className="success-message">
                  ✓ Thank you! I'll be in touch within 24 hours to discuss partnership opportunities.
                </div>
              )}
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Company Name" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Program Type (e.g., Coaching, E-commerce, Digital Marketing)" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Estimated Prospects/Week" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Tell me about your program and partnership goals..." rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <p>Or reach out directly to discuss partnership opportunities</p>
            <p className="email">contact@fundingspecialist.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Independent Funding Specialist. All rights reserved.</p>
          <p>Helping high-ticket programs increase conversions through accessible financing solutions.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
