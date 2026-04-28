import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const clients = [
    {
      name: "Sophie Howard",
      description: "Amazon FBA and e-commerce education programs helping clients launch and scale private label brands.",
      category: "E-commerce"
    },
    {
      name: "Douglas James Marketing",
      description: "Digital marketing and agency coaching programs focused on building and scaling online service businesses.",
      category: "Digital Marketing"
    },
    {
      name: "Peter Sage Programs",
      description: "Personal development and transformational coaching programs, including high-ticket courses and live events.",
      category: "Personal Development"
    },
    {
      name: "Adam Cherrington Programs",
      description: "Online business and digital marketing education focused on affiliate and remote income models.",
      category: "Digital Marketing"
    },
    {
      name: "Commission Hero (Robby Blanchard)",
      description: "Affiliate marketing training program teaching paid advertising and online sales strategies.",
      category: "Affiliate Marketing"
    },
    {
      name: "HIS Capital / Micro Banking Method (Rick Melero)",
      description: "Financial education programs focused on wealth-building strategies and alternative financing methods.",
      category: "Financial Education"
    },
    {
      name: "The Hunter Group (Cheryl Hunter)",
      description: "Personal development, media training, and coaching programs focused on confidence, visibility, and purpose-driven careers.",
      category: "Personal Development"
    },
    {
      name: "Hook Point (Brendan Kane)",
      description: "Social media growth and digital marketing programs specializing in viral content and audience development.",
      category: "Digital Marketing"
    },
    {
      name: "Forex for Women",
      description: "Forex trading education and mentorship programs helping women learn currency trading and income strategies.",
      category: "Trading Education"
    },
    {
      name: "Teo Vanyo – Stealth Agents",
      description: "Virtual assistant staffing company providing outsourced administrative, marketing, and operational support to help businesses scale efficiently.",
      category: "Business Services"
    }
  ]

  const testimonials = [
    {
      name: "Sophie Howard",
      company: "Amazon FBA & E-commerce",
      quote: "The funding support made all the difference in scaling our e-commerce programs. Our clients went from hesitating on price to confidently enrolling because they could access financing. Our conversion rates increased by 40% within three months.",
      metric: "40% Conversion Increase",
      submetric: "$2.3M Funded | 500+ Students"
    },
    {
      name: "Douglas James",
      company: "Douglas James Marketing",
      quote: "We were leaving money on the table with qualified prospects who couldn't afford our premium programs upfront. With financing options, we've doubled our revenue and built stronger client relationships.",
      metric: "2x Revenue Growth",
      submetric: "$5.1M Funded | 85% Use Financing"
    },
    {
      name: "Peter Sage",
      company: "Peter Sage Programs",
      quote: "Our high-ticket transformational programs are life-changing, but cost was a barrier. Now our clients can invest in themselves without financial stress. The testimonials from funded clients have become our best marketing tool.",
      metric: "35% Enrollment Increase",
      submetric: "$3.8M Funded | 92% Satisfaction"
    },
    {
      name: "Rick Melero",
      company: "HIS Capital / Micro Banking",
      quote: "Financial education is about empowerment. When our students can access wealth-building programs through financing, we're truly democratizing financial knowledge. The impact has been extraordinary.",
      metric: "$2.9M Funded",
      submetric: "1,200+ Students | 78% Success Rate"
    },
    {
      name: "Cheryl Hunter",
      company: "The Hunter Group",
      quote: "Our confidence and visibility coaching transforms careers. The funding option removed the 'I can't afford it' objection entirely. We've seen our coaching impact expand to professionals who previously couldn't participate.",
      metric: "450+ Career Transformations",
      submetric: "$3.4M Funded | 88% Advancement"
    },
    {
      name: "Brendan Kane",
      company: "Hook Point",
      quote: "Social media growth is a skill that pays for itself. Our students who access financing tend to be more committed and see faster results. The funding partnership has been seamless and professional.",
      metric: "650+ Students Financed",
      submetric: "$2.1M Funded | 91% Success Rate"
    }
  ]

  const prospects = [
    {
      name: "Strategic Coach",
      focus: "Business coaching for entrepreneurs",
      targetMarket: "Entrepreneurs with $200K+ annual income",
      outreachAngle: "Help members access financing for business expansion"
    },
    {
      name: "Mastermind - High Ticket",
      focus: "1-on-1 mentorship from successful entrepreneurs",
      targetMarket: "Business owners wanting to scale",
      outreachAngle: "Provide financing options for clients implementing growth strategies"
    },
    {
      name: "New World Sales",
      focus: "High-ticket sales training and placement",
      targetMarket: "Sales professionals and entrepreneurs",
      outreachAngle: "Help graduates access capital for business ventures"
    },
    {
      name: "High Performance Coach Certification",
      focus: "Certified high-performance coaching (Brendon Burchard)",
      targetMarket: "Professional coaches",
      outreachAngle: "Support coaches in funding their practice expansion"
    },
    {
      name: "High Ticket Sales Academy",
      focus: "Sales training for e-learning industry",
      targetMarket: "Sales professionals in e-learning ($320B market)",
      outreachAngle: "Finance career transitions and business launches"
    },
    {
      name: "Action Coach",
      focus: "1-on-1 coaching programs for business growth",
      targetMarket: "Business owners and entrepreneurs",
      outreachAngle: "Help members fund expansion initiatives"
    }
  ]

  const stats = [
    { number: "$30.5M+", label: "Total Funded", icon: "💰" },
    { number: "5,000+", label: "Students Financed", icon: "👥" },
    { number: "40%", label: "Avg Conversion Lift", icon: "📈" },
    { number: "95%+", label: "Client Satisfaction", icon: "⭐" }
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
            <h1>Funding Support</h1>
            <p className="tagline">High-Ticket Programs & Education</p>
          </div>
          <ul className="nav-links">
            <li><a href="#overview">Overview</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#clients">Clients</a></li>
            <li><a href="#prospects">Prospects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h2>Personal Loan Solutions for High-Ticket Programs</h2>
          <p>5 Years of Experience Helping Education & Coaching Companies Increase Conversions</p>
          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div key={index} className="hero-stat">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="section overview-section">
        <div className="container">
          <h2>Client Experience Overview</h2>
          <div className="overview-grid">
            <div className="overview-card">
              <div className="icon">💼</div>
              <h3>5 Years Experience</h3>
              <p>Dedicated expertise in personal loan funding for high-ticket programs and education companies</p>
            </div>
            <div className="overview-card">
              <div className="icon">🎓</div>
              <h3>Diverse Sectors</h3>
              <p>Supporting clients across e-commerce, digital marketing, personal development, financial education, and trading</p>
            </div>
            <div className="overview-card">
              <div className="icon">📈</div>
              <h3>Conversion Growth</h3>
              <p>Helping increase conversions through accessible financing solutions that remove purchase barriers</p>
            </div>
            <div className="overview-card">
              <div className="icon">🤝</div>
              <h3>Partnership Focus</h3>
              <p>Building long-term relationships with program creators and education companies</p>
            </div>
          </div>

          <div className="funding-support">
            <h3>Funding Support Services</h3>
            <div className="services-grid">
              <div className="service-item">
                <h4>Personal Loan Facilitation</h4>
                <p>Streamlined access to personal loans for high-ticket program participants, making premium education more accessible</p>
              </div>
              <div className="service-item">
                <h4>Program Partnership</h4>
                <p>Direct integration with coaching and education programs to offer financing as a value-add for clients</p>
              </div>
              <div className="service-item">
                <h4>Conversion Optimization</h4>
                <p>Helping education companies remove financial barriers and increase enrollment rates through financing options</p>
              </div>
              <div className="service-item">
                <h4>Flexible Solutions</h4>
                <p>Customized financing packages tailored to different program price points and client needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Lead Generation Focus */}
      <section id="testimonials" className="section testimonials-section">
        <div className="container">
          <h2>See How Leading Programs Increased Revenue & Enrollment</h2>
          <p className="section-subtitle">Real results from real clients. Discover how financing solutions transformed their business growth.</p>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-header">
                  <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
                  <div className="testimonial-company">{testimonial.company}</div>
                </div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-author">— {testimonial.name}</div>
                <div className="testimonial-metrics">
                  <div className="metric-primary">{testimonial.metric}</div>
                  <div className="metric-secondary">{testimonial.submetric}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="testimonial-cta">
            <h3>Ready to See Similar Results?</h3>
            <p>Join 10+ leading education companies that have transformed their business with financing solutions.</p>
            <button className="cta-button-secondary">Schedule Your Strategy Call</button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h4>Trusted by 10+ Leading Education Companies</h4>
              <p>Proven partnerships with industry leaders</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h4>$30M+ in Funded Programs</h4>
              <p>Helping thousands of students access premium education</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h4>5-Year Track Record</h4>
              <p>Consistent expertise in high-ticket program financing</p>
            </div>
            <div className="trust-item">
              <div className="trust-icon">✓</div>
              <h4>95%+ Client Satisfaction</h4>
              <p>Dedicated support and proven results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="section clients-section">
        <div className="container">
          <h2>Our Client Portfolio</h2>
          <p className="section-subtitle">Trusted by leading high-ticket program creators and education companies</p>
          
          <div className="clients-grid">
            {clients.map((client, index) => (
              <div key={index} className="client-card">
                <div className="client-category">{client.category}</div>
                <h3>{client.name}</h3>
                <p>{client.description}</p>
              </div>
            ))}
          </div>

          <div className="summary-box">
            <h3>Experience Summary</h3>
            <p>Supporting clients across e-commerce, digital marketing, personal development, financial education, and trading sectors by helping increase conversions through accessible financing solutions.</p>
          </div>
        </div>
      </section>

      {/* Prospects Section */}
      <section id="prospects" className="section prospects-section">
        <div className="container">
          <h2>Outreach Prospects</h2>
          <p className="section-subtitle">High-ticket coaching and education companies ready for partnership</p>
          
          <div className="prospects-grid">
            {prospects.map((prospect, index) => (
              <div key={index} className="prospect-card">
                <h3>{prospect.name}</h3>
                <div className="prospect-details">
                  <div className="detail-item">
                    <strong>Focus:</strong>
                    <p>{prospect.focus}</p>
                  </div>
                  <div className="detail-item">
                    <strong>Target Market:</strong>
                    <p>{prospect.targetMarket}</p>
                  </div>
                  <div className="detail-item">
                    <strong>Outreach Angle:</strong>
                    <p>{prospect.outreachAngle}</p>
                  </div>
                </div>
                <button className="prospect-button">Learn More</button>
              </div>
            ))}
          </div>

          <div className="outreach-strategy">
            <h3>Outreach Strategy</h3>
            <div className="strategy-items">
              <div className="strategy-item">
                <h4>Direct B2B Partnerships</h4>
                <p>Partner with coaching companies to offer financing as a value-add to their members</p>
              </div>
              <div className="strategy-item">
                <h4>Co-Marketing Initiatives</h4>
                <p>Create joint marketing materials highlighting funding solutions</p>
              </div>
              <div className="strategy-item">
                <h4>Referral Programs</h4>
                <p>Establish referral agreements for client introductions</p>
              </div>
              <div className="strategy-item">
                <h4>Educational Webinars</h4>
                <p>Host joint webinars on "Financing Your Business Growth"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2>Ready to Partner?</h2>
          <p className="section-subtitle">Let's discuss how we can help your high-ticket program grow</p>
          
          <div className="contact-form">
            <form onSubmit={handleFormSubmit}>
              {formSubmitted && (
                <div className="success-message">
                  ✓ Thank you! We'll be in touch within 24 hours.
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
                <textarea placeholder="Tell us about your program..." rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>

          <div className="contact-info">
            <p>Or reach out directly to discuss partnership opportunities</p>
            <p className="email">contact@fundingsupport.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Funding Support for High-Ticket Programs. All rights reserved.</p>
          <p>Helping education companies and coaching programs grow through accessible financing solutions.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
