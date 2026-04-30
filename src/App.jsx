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

  useEffect(() => {
    const handleAnchorClick = () => {
      const hash = window.location.hash
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(hash)
          if (element) {
            const navBar = document.querySelector('.navbar')
            const navHeight = navBar ? navBar.offsetHeight + 20 : 100
            const elementPosition = element.getBoundingClientRect().top + window.scrollY
            window.scrollTo({
              top: elementPosition - navHeight,
              behavior: 'smooth'
            })
          }
        }, 0)
      }
    }

    window.addEventListener('hashchange', handleAnchorClick)
    handleAnchorClick()

    return () => window.removeEventListener('hashchange', handleAnchorClick)
  }, [])

  const stats = [
    { number: "5,000+", label: "Clients Funded", icon: "👥" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "5 Days", label: "Avg Timeline", icon: "⏱️" },
    { number: "4%", label: "Performance Fee", icon: "💰" }
  ]

  const services = [
    {
      title: "Credit & Funding Matching",
      description: "I evaluate each prospect's profile and match them with vetted lending options, including online lenders and 0% credit card solutions where applicable."
    },
    {
      title: "Sales Process Integration",
      description: "I take over the funding conversation after handoff from your sales team through your existing communication channels."
    },
    {
      title: "End-to-End Support",
      description: "I guide prospects through the funding process, provide ongoing follow-up until completion, and keep your team updated on progress."
    }
  ]

  const specializations = [
    {
      category: "Funding Products",
      items: ["Personal Loans ($1K-$60K)", "0% Credit Cards (15-21 months if qualified)", "Creative solutions for all credit profiles", "5-6 vetted online lenders", "No exclusive affiliations"]
    },
    {
      category: "High Ticket Programs",
      items: ["Coaching & Mentorship Programs", "E-commerce Education & Training", "Digital Marketing Education", "Marketing & Lead Generation Agencies", "Personal Development & Business Training", "Affiliate Marketing Programs"]
    },

  ]

  const processSteps = [
    {
      number: "1",
      title: "You send me a qualified prospect",
      description: ""
    },
    {
      number: "2",
      title: "I handle funding conversations",
      description: ""
    },
    {
      number: "3",
      title: "Client gets matched with options",
      description: ""
    },
    {
      number: "4",
      title: "They complete the purchase",
      description: ""
    },
    {
      number: "5",
      title: "I earn 4% commission only on success",
      description: ""
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
      const navBar = document.querySelector('.navbar')
      const navHeight = navBar ? navBar.offsetHeight + 20 : 100
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      })
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
            <li><a href="#process">Process</a></li>
            <li><a href="#clients">Past Clients</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Helping High-Ticket Programs Close More Deals by Removing the Payment Barrier</h2>
          <p>I partner with coaching, education, and digital businesses to help qualified prospects secure funding so they can move forward without delay.</p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <button className="cta-button" onClick={handleStartPartnership}>Book a 15-minute partnership call</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section about-section">
        <div className="container">
          <h2>The Problem & The Solution</h2>
          <div className="problem-solution">
            <div className="problem-box">
              <h3>The Problem</h3>
              <p><strong>You're already generating qualified buyers…but many still drop off at the payment stage.</strong></p>              <p style={{marginTop: '1rem', textAlign: 'center'}}>"I need time"</p>
              <p style={{textAlign: 'center'}}>"I can't afford it right now"</p>
              <p style={{textAlign: 'center'}}>"Let me think about it"</p>
              <p style={{marginTop: '1rem'}}><strong>👉 These are NOT lost leads</strong></p>
              <p><strong>👉 They are lost revenue opportunities</strong></p>
            </div>
            <div className="arrow">→</div>
            <div className="solution-box" style={{marginBottom: '2rem'}}>
              <h3>The Solution</h3>
              <p>I step in at the final stage of your sales process and help those clients secure funding options so they can move forward immediately.</p>
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
                <p>I'm an independent funding specialist contractor with over 5 years of experience working with high-ticket coaching, e-commerce education, and digital marketing companies.</p>
                <p>I've supported thousands of clients across these industries and understand exactly how payment friction impacts conversion at the final stage of the sales process.</p>
              </div>
            </div>
            
            <h3>What I Do</h3>
            <p>I help high-ticket companies convert more qualified prospects at the point of sale.</p>
            <p>When a prospect is ready to move forward but hesitant due to upfront cost, I help them explore funding options so they can complete their purchase without delay.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section services-section">
        <div className="container">
          <h2>What I Provide</h2>
          <p className="section-subtitle">Expert funding support integrated directly into your sales process to help more qualified prospects complete their purchase.</p>
          
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



      {/* Process Section */}
      <section id="process" className="section process-section">
        <div className="container">
          <h2>How It Works</h2>
          <p className="section-subtitle">Simple 5-step process</p>
          
          <div className="process-text">
            <p><strong>1. You send me a qualified prospect</strong></p>
            <p><strong>2. I handle funding conversations</strong></p>
            <p><strong>3. Client gets matched with options</strong></p>
            <p><strong>4. They complete the purchase</strong></p>
            <p><strong>5. I earn 4% commission only on success</strong></p>
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



      {/* Client Experience Section */}
      <section id="clients" className="section clients-section">
        <div className="container">
          <h2>Companies I've Worked With</h2>
          
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
          <p>&copy; 2026 Independent Funding Specialist. All rights reserved.</p>
          <p>Helping high-ticket programs increase conversions through accessible financing solutions.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
// Force rebuild Wed Apr 29 14:31:37 EDT 2026
