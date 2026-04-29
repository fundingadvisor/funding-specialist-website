import { useState, useRef, useEffect } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import './App.css'
import lynneHeadshot from './assets/lynne-headshot.png'

function App() {
  const [state, handleSubmit] = useForm('xaqarjrd')
  const [showSuccess, setShowSuccess] = useState(false)
  const formRef = useRef(null)

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true)
      if (formRef.current) {
        formRef.current.reset()
      }
      const timer = setTimeout(() => {
        setShowSuccess(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [state.succeeded])

  const stats = [
    { number: "5,000+", label: "Clients Funded", icon: "👥" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "5 Days", label: "Avg Timeline", icon: "⏱️" },
    { number: "4%", label: "Performance Fee", icon: "💰" }
  ]

  const services = [
    {
      title: "Expert Credit Evaluation",
      description: "Evaluate each prospect's credit profile and match them with the best lender options (5-6 vetted online lenders + 0% credit cards) to maximize approval odds"
    },
    {
      title: "Seamless Sales Integration",
      description: "Prospect transfers from your sales team via Slack (or whatever communication process your company currently uses). I take the conversation from there"
    },
    {
      title: "End-to-End Support",
      description: "Daily follow-up with prospects until funded, with daily updates on progress back to the sales rep. I can even assist with product purchases once funding is received"
    },
    {
      title: "Flexible Availability",
      description: "3.5-hour daily shift during your peak sales hours, plus Calendly scheduling for off-shift consultations"
    }
  ]

  const specializations = [
    {
      category: "Funding Products",
      items: ["Personal Loans ($1K-$60K)", "0% Credit Cards (15-21 months if qualified)", "Creative solutions for all credit profiles"]
    },
    {
      category: "Target Industries",
      items: ["High-ticket coaching programs", "E-commerce education", "Digital marketing courses", "Personal development programs", "Affiliate Marketing programs"]
    },
    {
      category: "Lender Network",
      items: ["5-6 vetted online lenders", "No exclusive affiliations"]
    }
  ]

  const processSteps = [
    {
      number: "1",
      title: "Prospect Transfer",
      description: "Sales rep transfers prospect via your preferred platform, providing Contact Information, Credit Score, Personal Yearly Income, and Desired Package Amount"
    },
    {
      number: "2",
      title: "Initial Consultation",
      description: "20-30 min to establish credit profile and begin the funding process if qualified"
    },
    {
      number: "3",
      title: "Lender Matching",
      description: "Match prospect with best lender based on credit profile and income level"
    },
    {
      number: "4",
      title: "Application Support",
      description: "Guide prospect through complete application process"
    },
    {
      number: "5",
      title: "Daily Follow-Up",
      description: "Stay in touch with prospect and provide funding progress updates to your team"
    },
    {
      number: "6",
      title: "Funding & Beyond",
      description: "Confirm funding received and assist with product purchase if needed"
    }
  ]

  const clients = [
    {
      name: "Sophie Howard",
      description: "Amazon FBA and e-commerce education programs helping clients build and scale private label online businesses."
    },
    {
      name: "Douglas James",
      description: "Digital marketing and agency coaching programs focused on building and scaling online service-based businesses."
    },
    {
      name: "Peter Sage",
      description: "Personal development and transformation programs including high-ticket coaching, events, and mindset training."
    },
    {
      name: "Adam Cherrington",
      description: "Online business and affiliate marketing education programs teaching digital income and business creation strategies."
    },
    {
      name: "Robby Blanchard",
      description: "Affiliate marketing training programs focused on paid advertising, funnels, and online sales systems (Commission Hero)."
    },
    {
      name: "Rick Melero",
      description: "Financial education programs focused on wealth-building strategies and alternative financing methods (Micro Banking Method / HIS Capital)."
    },
    {
      name: "Cheryl Hunter",
      description: "Personal development, media training, and coaching programs focused on confidence, communication, and transformation."
    },
    {
      name: "Brendan Kane",
      description: "Digital marketing and social media growth programs focused on audience building, viral content, and brand scaling."
    },
    {
      name: "Forex for Women",
      description: "Forex trading education and mentorship programs led by Amanda Custer, Jemma Wilson, and Jenn Eusterwiemann, focused on teaching currency trading strategies."
    },
    {
      name: "Teo Vanyo – Stealth Agents",
      description: "Virtual assistant staffing company providing outsourced administrative, marketing, and operational support to help businesses scale efficiently."
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

  const handleStartPartnership = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <h1>Funding Specialist</h1>
            <p className="tagline">Expert Funding Support for High-Ticket Programs</p>
          </div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#clients">Experience</a></li>
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
          <button className="cta-button" onClick={handleStartPartnership}>Start Partnership</button>
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
            <div className="about-header">
              <div className="about-photo">
                <img src={lynneHeadshot} alt="Lynne Faulkner" />
              </div>
              <div className="about-text">
                <h3>Who I Am</h3>
                <p><strong>Lynne Faulkner</strong></p>
                <p>I'm an independent funding specialist contractor with 5+ years of proven success helping high-ticket coaching, e-commerce education, and digital marketing companies remove financial barriers for their clients. I've successfully funded over 5,000 clients by matching them with the right lenders and guiding them through the entire funding process.</p>
              </div>
            </div>
            
            <h3>How I Work</h3>
            <p>I work as a performance-based contractor, earning compensation only when your prospects successfully get funded. I integrate directly into your sales process with prospect transfers through your preferred communication platform, handling all funding details and providing daily updates to your team. I maintain a focused 3.5-hour daily shift during your peak sales hours and offer Calendly scheduling for off-shift consultations, ensuring convenience for your prospects throughout the funding process.</p>
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
              <div key={index} className="specialization-card">
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
          <p className="section-subtitle">A seamless 6-step process from prospect transfer to funded client</p>
          
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>

          <div className="key-metrics">
            <h3>Key Metrics</h3>
            <div className="metrics-grid">
              <div className="metric">
                <h4>Average Funding Time</h4>
                <p className="metric-value">Personal Loans: 5-7 Days</p>
                <p className="metric-desc">0% Credit Cards: 7 Days</p>
              </div>

              <div className="metric">
                <h4>Funding Range</h4>
                <p className="metric-value">$1K - $60K</p>
                <p className="metric-desc">Average $10K per client</p>
              </div>
              <div className="metric">
                <h4>Capacity</h4>
                <p className="metric-value">20-30+ Clients/Week</p>
                <p className="metric-desc">Can handle high volume</p>
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
          
          <div className="compensation-card">
            <h3>4% Commission on Completed Product Purchase</h3>
            <p>Earned upon successful prospect funding and purchase completion</p>
            
            <div className="compensation-features">
              <div className="feature">
                <span className="checkmark">✓</span>
                <div>
                  <h4>No Upfront Fees</h4>
                  <p>Zero cost to start the partnership</p>
                </div>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <div>
                  <h4>Performance-Based</h4>
                  <p>I succeed when your prospects succeed</p>
                </div>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <div>
                  <h4>Calculated on Purchase Amount</h4>
                  <p>Calculated based on actual program purchase amount. Example: $15K funded, $10K used = 4% of $10K.</p>
                </div>
              </div>
              <div className="feature">
                <span className="checkmark">✓</span>
                <div>
                  <h4>No Payment if Not Funded</h4>
                  <p>Zero risk to your company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Experience Section */}
      <section id="clients" className="section clients-section">
        <div className="container">
          <h2>Companies I've Worked With</h2>
          <p className="section-subtitle">High-Ticket Education, Coaching & Business Services</p>
          
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-card">
                <h3>{client.name}</h3>
                <p>{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
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

      {/* Partnership Requirements Section */}
      <section className="section requirements-section">
        <div className="container">
          <h2>Partnership Requirements</h2>
          <div className="requirements-grid">
            <div className="requirement-card">
              <h3>Lead Volume</h3>
              <p><strong>Minimum:</strong> 2-5 prospects/week</p>
              <p><strong>Optimal:</strong> 10-20+ prospects/week</p>
              <p><strong>Capacity:</strong> 20-30+ prospects/week</p>
            </div>
            <div className="requirement-card">
              <h3>Communication</h3>
              <p><strong>Prospect Transfers:</strong> Via your preferred communication platform</p>
              <p><strong>Updates:</strong> Daily progress messages</p>
              <p><strong>Scheduling:</strong> Calendly calendar</p>
            </div>
            <div className="requirement-card">
              <h3>Availability</h3>
              <p><strong>Primary Shift:</strong> 3.5 hours daily</p>
              <p><strong>Off-Shift:</strong> Calendly scheduling</p>
              <p><strong>Flexibility:</strong> Willing to work out schedules most convenient for the team</p>
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
              <p>Nothing upfront. Compensation is 4% of the completed product purchase after funding. If a prospect doesn't get funded, you don't pay anything.</p>
            </div>
            <div className="faq-item">
              <h4>What if a prospect doesn't qualify?</h4>
              <p>I work with all credit profiles, including challenging credit situations, to identify creative solutions. If a prospect doesn't qualify, I'll communicate immediately so you can discuss alternatives.</p>
            </div>
            <div className="faq-item">
              <h4>How long does funding take?</h4>
              <p>Average 5 days for personal loans. Credit cards take 7+ days minimum. Timeline depends on lender requirements and credit profile complexity.</p>
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
            <form ref={formRef} onSubmit={handleSubmit}>
              {showSuccess && (
                <div className="success-message">
                  ✓ Thank you! I'll be in touch within 24 hours to discuss partnership opportunities.
                </div>
              )}
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" required />
                <ValidationError field="name" errors={state.errors} />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" required />
                <ValidationError field="email" errors={state.errors} />
              </div>
              <div className="form-group">
                <input type="text" name="company" placeholder="Company Name" required />
                <ValidationError field="company" errors={state.errors} />
              </div>
              <div className="form-group">
                <input type="text" name="programType" placeholder="Program Type (e.g., Coaching, E-commerce, Digital Marketing)" required />
                <ValidationError field="programType" errors={state.errors} />
              </div>
              <div className="form-group">
                <input type="text" name="prospectsPerWeek" placeholder="Estimated Prospects/Week" required />
                <ValidationError field="prospectsPerWeek" errors={state.errors} />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Tell me about your program and partnership goals..." rows="5" required></textarea>
                <ValidationError field="message" errors={state.errors} />
              </div>
              <button type="submit" disabled={state.submitting} className="submit-button">
                {state.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="contact-info">
            <p>Or reach out directly to discuss partnership opportunities</p>
            <p className="email"><a href="mailto:fundingwithlynne@gmail.com">fundingwithlynne@gmail.com</a></p>
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
// Force rebuild Wed Apr 29 14:31:37 EDT 2026
