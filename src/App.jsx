import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X, 
  Globe, 
  ShieldCheck, 
  Zap, 
  Award, 
  FileText, 
  Package, 
  Activity, 
  ChevronDown, 
  HeartHandshake, 
  Sparkles,
  MessageSquare
} from 'lucide-react'
import logoImg from './assets/logo.jpg'
import packagingImg from './assets/packaging_process.png'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [faqActiveIndex, setFaqActiveIndex] = useState(null)
  
  // Quote Form State
  const [quoteName, setQuoteName] = useState('')
  const [quoteCountry, setQuoteCountry] = useState('')
  const [quoteType, setQuoteType] = useState('Parcel')
  const [quoteWeight, setQuoteWeight] = useState('')
  
  // Contact Form State
  const [contactName, setContactName] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [contactSubject, setContactSubject] = useState('')
  const [contactMessage, setContactMessage] = useState('')
  const [contactSubmitted, setContactSubmitted] = useState(false)

  const handleQuoteSubmit = (e) => {
    e.preventDefault()
    if (!quoteName || !quoteCountry || !quoteWeight) {
      alert('Please fill out all fields to get your quote.')
      return
    }

    const message = `*New Courier Quote Request (Sri Ram International Courier)*

👤 *Full Name:* ${quoteName}
🌍 *Destination Country:* ${quoteCountry}
📦 *Package Type:* ${quoteType}
⚖️ *Weight:* ${quoteWeight} KG

_Please send me the best price quote!_`

    const whatsappURL = `https://wa.me/917893923372?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
  }

  const handleContactSubmit = (e) => {
    e.preventDefault()
    if (!contactName || !contactEmail || !contactMessage) {
      alert('Please fill in all required fields.')
      return
    }
    
    const message = `*New Contact Message (Sri Ram International Courier)*

👤 *Name:* ${contactName}
📧 *Email:* ${contactEmail}
📝 *Subject:* ${contactSubject || 'General Inquiry'}
💬 *Message:* ${contactMessage}`

    const whatsappURL = `https://wa.me/917893923372?text=${encodeURIComponent(message)}`
    window.open(whatsappURL, '_blank')
    
    setContactSubmitted(true)
    setTimeout(() => {
      setContactSubmitted(false)
      setContactName('')
      setContactEmail('')
      setContactSubject('')
      setContactMessage('')
    }, 2000)
  }

  const toggleFaq = (index) => {
    setFaqActiveIndex(faqActiveIndex === index ? null : index)
  }

  const scrollToSection = (id) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Header height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // FAQs Data
  const faqs = [
    {
      q: "What types of items can I ship internationally?",
      a: "We ship a wide variety of items globally. This includes documents, university transcripts, parcels, clothes, textbooks, household goods, sweets, pickles, spices, dry fruits, and critical home-made food. We also offer specialized packaging and delivery for prescription medicines with complete documentation support."
    },
    {
      q: "Do you offer doorstep pickup in Hyderabad?",
      a: "Yes! We offer completely free doorstep pickup service across Begumpet and other major areas in Hyderabad. Simply call us or fill out the quote form, and our executive will schedule a pickup at your convenience."
    },
    {
      q: "How long does it take for a shipment to be delivered?",
      a: "Express shipments typically take 3 to 5 business days to reach major destinations like the USA, UK, Canada, Australia, and UAE. Economy shipping takes between 6 to 10 business days depending on customs clearances and exact destination zip codes."
    },
    {
      q: "Are my shipments safe? Do you provide packing materials?",
      a: "Absolutely. Safety is our top priority. We use industry-standard packaging materials including bubble wrap, corrugated sheets, vacuum sealing (especially for food items and pickles), and heavy-duty double-walled boxes to prevent any damage during transit."
    },
    {
      q: "Can I track my shipment online?",
      a: "Yes. Once your shipment is collected and dispatched through our logistics partners (DHL, FedEx, UPS networks), you will receive a tracking link and shipment reference number via email/SMS to track your package in real-time."
    },
    {
      q: "Are there any prohibited items that I cannot ship?",
      a: "Yes, standard aviation and customs safety guidelines prohibit shipping flammable items, liquids, aerosols, coins, currency notes, jewelry, precious metals, explosives, and illegal narcotics. For specific food items and medicines, please consult our team to ensure proper compliance and documentation."
    }
  ]

  // Reviews Data
  const reviews = [
    { name: "Srinivas Rao", text: "Sent home-made pickles and sweets to my son in Dallas, USA. Reached in 4 days, excellent vacuum packing and no leakages. Very polite staff.", stars: "★★★★★", initial: "S", colorClass: "c1" },
    { name: "Ananya Reddy", text: "Amazing student service! Sent my university transcripts to the UK. Very quick document delivery and they handled all paperwork. Recommended.", stars: "★★★★★", initial: "A", colorClass: "c2" },
    { name: "Kiran Kumar", text: "Highly professional service. They collected my heavy baggage directly from my flat in Begumpet and gave a very reasonable price. Safe delivery.", stars: "★★★★★", initial: "K", colorClass: "c3" },
    { name: "Mohammad Ali", text: "Sent urgent prescription medicines to my parents in Sydney, Australia. The team guided me with the prescription rules. Delivered safely on time.", stars: "★★★★★", initial: "M", colorClass: "c4" },
    { name: "Pritha Sen", text: "Excellent customer service. They kept me updated via WhatsApp throughout the shipping process. Prices are much cheaper than directly booking FedEx.", stars: "★★★★★", initial: "P", colorClass: "c5" },
    { name: "Venkat Ram", text: "Best international courier in Hyderabad! Safe packaging, timely delivery, and stress-free process. Have used them twice already.", stars: "★★★★★", initial: "V", colorClass: "c6" }
  ]

  return (
    <>
      {/* TOP UTILITY BAR */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-info">
            <span>
              <MapPin size={14} className="text-secondary" />
              1-8-510/5, L.B. Nagar, Patigadda, Begumpet, Hyderabad
            </span>
            <span>
              <Clock size={14} className="text-secondary" />
              Mon - Sat: 9:30 AM - 8:30 PM
            </span>
          </div>
          <div className="top-bar-socials">
            <span>
              <Phone size={14} className="text-secondary" />
              Call us: <a href="tel:+917893923372">+91 78939 23372</a> | <a href="tel:+918106223372">+91 81062 23372</a>
            </span>
          </div>
        </div>
      </div>

      {/* HEADER / NAVIGATION */}
      <header className="main-header">
        <div className="container">
          <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            <img src={logoImg} className="logo-img" alt="Sri Ram International Courier Logo" />
            <div className="brand-text">
              <span className="brand-name">Sri Ram</span>
              <span className="brand-sub">International Courier</span>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <ul className="nav-menu">
            <li><a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
            <li><a href="#about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About Us</a></li>
            <li><a href="#services" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a></li>
            <li><a href="#process" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('process') }}>How It Works</a></li>
            <li><a href="#reviews" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('reviews') }}>Reviews</a></li>
            <li><a href="#contact" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
          </ul>

          <div className="nav-cta">
            <button className="btn btn-primary" onClick={() => scrollToSection('quote-form-section')}>
              Get Free Quote
              <ArrowRight size={16} />
            </button>
          </div>

          <button className="hamburger-btn" onClick={() => setMobileMenuOpen(true)}>
            <Menu />
          </button>
        </div>
      </header>

      {/* MOBILE NAV OVERLAY */}
      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-header">
          <div className="logo-link">
            <img src={logoImg} className="logo-img" alt="Sri Ram Logo" />
            <div className="brand-text" style={{ color: '#fff' }}>
              <span className="brand-name" style={{ color: '#fff' }}>Sri Ram</span>
              <span className="brand-sub" style={{ color: '#ff5e14' }}>International Courier</span>
            </div>
          </div>
          <button className="mobile-nav-close" onClick={() => setMobileMenuOpen(false)}>
            <X />
          </button>
        </div>
        
        <ul className="mobile-nav-list">
          <li><a href="#home" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
          <li><a href="#about" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About Us</a></li>
          <li><a href="#services" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a></li>
          <li><a href="#process" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('process') }}>How It Works</a></li>
          <li><a href="#reviews" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('reviews') }}>Reviews</a></li>
          <li><a href="#contact" className="mobile-nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact Us</a></li>
        </ul>

        <div className="mobile-nav-footer">
          <p><strong>Office Address:</strong><br />1-8-510/5, L.B. Nagar, Patigadda, Begumpet, Hyderabad - 500016</p>
          <p>
            <strong>Call:</strong> <a href="tel:+917893923372" style={{ color: '#fff' }}>+91 78939 23372</a> | <a href="tel:+918106223372" style={{ color: '#fff' }}>+91 81062 23372</a>
          </p>
          <p><strong>Email:</strong> <a href="mailto:sriraminternationalcourier@gmail.com" style={{ color: '#ff5e14' }}>sriraminternationalcourier@gmail.com</a></p>
        </div>
      </div>

      {/* HERO SECTION */}
      <section id="home" className="hero-section">
        <div className="hero-bg-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <Sparkles size={14} />
              Hyderabad's Premier Courier Network
            </div>
            <h1 className="hero-title">
              Delivering Your Parcels Worldwide Safely & Fast
            </h1>
            <p className="hero-description">
              Send documents, prescription medicines, homemade foods, pickles, and excess baggage internationally from Hyderabad. We offer secure packaging, transparent documentation, and free doorstep pickup.
            </p>
            <div className="hero-features">
              <div className="hero-feat-item">
                <CheckCircle2 size={16} /> Free Door Pickup
              </div>
              <div className="hero-feat-item">
                <CheckCircle2 size={16} /> Vacuum Packaging
              </div>
              <div className="hero-feat-item">
                <CheckCircle2 size={16} /> 220+ Countries
              </div>
              <div className="hero-feat-item">
                <CheckCircle2 size={16} /> Real-Time Tracking
              </div>
            </div>
          </div>

          <div id="quote-form-section" className="hero-form">
            <div className="quote-card">
              <div className="quote-card-header">
                <h3>Get a Free Quote</h3>
                <p>Calculate shipping rates and book your doorstep pickup instantly.</p>
              </div>
              <form onSubmit={handleQuoteSubmit}>
                <div className="quote-form-grid">
                  <div className="form-group">
                    <label>Full Name</label>
                    <div className="input-icon-wrap">
                      <input 
                        type="text" 
                        placeholder="Your full name" 
                        className="form-input"
                        value={quoteName}
                        onChange={(e) => setQuoteName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Destination Country</label>
                    <div className="input-icon-wrap">
                      <input 
                        type="text" 
                        placeholder="e.g. USA, UK, Canada, Australia" 
                        className="form-input"
                        value={quoteCountry}
                        onChange={(e) => setQuoteCountry(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Package Type</label>
                    <select 
                      className="form-input" 
                      style={{ paddingLeft: '16px' }}
                      value={quoteType}
                      onChange={(e) => setQuoteType(e.target.value)}
                    >
                      <option value="Documents">Documents / Transcripts</option>
                      <option value="Parcel">Standard Parcel (Clothes, books)</option>
                      <option value="Medicines">Prescription Medicines</option>
                      <option value="Food Items">Food Items (Pickles, sweets)</option>
                      <option value="Excess Baggage">Excess Baggage</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Estimated Weight (KG)</label>
                    <div className="input-icon-wrap">
                      <input 
                        type="number" 
                        placeholder="e.g. 5, 10, 20" 
                        className="form-input"
                        value={quoteWeight}
                        onChange={(e) => setQuoteWeight(e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn-quote-submit">
                  Get Best Price on WhatsApp
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <Globe />
              </div>
              <div className="stat-info">
                <span className="stat-number">220+</span>
                <span className="stat-label">Countries Connected</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <ShieldCheck />
              </div>
              <div className="stat-info">
                <span className="stat-number">100%</span>
                <span className="stat-label">Safe & Insured Delivery</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Zap />
              </div>
              <div className="stat-info">
                <span className="stat-number">3-5</span>
                <span className="stat-label">Days Express Delivery</span>
              </div>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <Award />
              </div>
              <div className="stat-info">
                <span className="stat-number">5K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section id="about" className="about-section section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <span className="section-badge">About Our Company</span>
              <h2>Reliable International Shipping Partner in Hyderabad</h2>
              <p>
                At Sri Ram International Courier, we bridge the gap between families, business partners, and students across borders. Strategically headquartered in Begumpet, Hyderabad, we provide seamless door-to-door express parcel deliveries to over 220 countries.
              </p>
              <p>
                We understand that every shipment is precious. Whether you are sending crucial university transcripts, life-saving medicines, or homemade delicacies to your loved ones abroad, we provide professional packaging, clear custom clearance support, and premium courier integrations (DHL, FedEx, UPS) to guarantee safe transit.
              </p>

              <div className="about-features">
                <div className="about-feat-card">
                  <CheckCircle2 size={20} />
                  <div>
                    <h4>Premium Packaging</h4>
                    <p>Corrugated boxes, bubble wraps, and food vacuum packing.</p>
                  </div>
                </div>

                <div className="about-feat-card">
                  <CheckCircle2 size={20} />
                  <div>
                    <h4>Customs Assistance</h4>
                    <p>Guidance on clearance files, prescriptions, and invoice sheets.</p>
                  </div>
                </div>

                <div className="about-feat-card">
                  <CheckCircle2 size={20} />
                  <div>
                    <h4>Begumpet Pickup</h4>
                    <p>Fast doorstep packing and pickup within hours in Hyderabad.</p>
                  </div>
                </div>

                <div className="about-feat-card">
                  <CheckCircle2 size={20} />
                  <div>
                    <h4>Affordable Rates</h4>
                    <p>Discounts on bulk student shipments and household relocations.</p>
                  </div>
                </div>
              </div>

              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Visit Our Office
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="about-image-column">
              <div className="about-image-wrap">
                <img src={packagingImg} className="about-image" alt="Careful courier packing process" />
                <div className="about-image-badge">
                  <h3>100%</h3>
                  <span>
                    Secured<br />Packaging
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding">
        <div className="container">
          <div className="text-center">
            <span className="section-badge">Our Services</span>
            <h2 className="section-title">Specialized International Courier Services</h2>
            <p className="section-subtitle">
              We offer bespoke, secure solutions for custom packaging and delivery requirements.
            </p>
          </div>

          <div className="services-grid">
            {/* SERVICE 1 */}
            <div className="service-card">
              <div className="service-icon-box">
                <Package size={32} />
              </div>
              <h3>International Parcel Delivery</h3>
              <p>
                Seamless express shipping for standard parcels, clothes, books, and household goods from Hyderabad to any country. Delivered directly to their doorstep.
              </p>
              <a href="https://wa.me/917893923372?text=Hi%2C%20I%20want%20to%20send%20an%20International%20Parcel.%20Please%20provide%20rates." target="_blank" className="service-action-link">
                Inquire Rates
                <ArrowRight size={16} />
              </a>
            </div>

            {/* SERVICE 2 */}
            <div className="service-card">
              <div className="service-icon-box">
                <Activity size={32} />
              </div>
              <h3>Medicines Shipping</h3>
              <p>
                Fully compliant worldwide shipping for critical prescription drugs and medical files. We support you in prescription checks, customs files, and secure transit.
              </p>
              <a href="https://wa.me/917893923372?text=Hi%2C%20I%20want%20to%20send%20Medicines%20internationally.%20Please%20guide%20me." target="_blank" className="service-action-link">
                Inquire Rates
                <ArrowRight size={16} />
              </a>
            </div>

            {/* SERVICE 3 */}
            <div className="service-card">
              <div className="service-icon-box">
                <Sparkles size={32} />
              </div>
              <h3>Food Items & Pickles</h3>
              <p>
                Specialized vacuum packaging and box seals to ship traditional Indian pickles, sweets, spices, and homemade foods securely without damage or leakage.
              </p>
              <a href="https://wa.me/917893923372?text=Hi%2C%20I%20want%20to%20send%20Food%20Items/Pickles%20abroad.%20What%20are%20the%20charges%3F" target="_blank" className="service-action-link">
                Inquire Rates
                <ArrowRight size={16} />
              </a>
            </div>

            {/* SERVICE 4 */}
            <div className="service-card">
              <div className="service-icon-box">
                <FileText size={32} />
              </div>
              <h3>Documents & Transcripts</h3>
              <p>
                Fastest express network to dispatch crucial documents, transcripts, university applications, passports, and corporate agreements with priority delivery.
              </p>
              <a href="https://wa.me/917893923372?text=Hi%2C%20I%20want%20to%20send%20Documents%20internationally." target="_blank" className="service-action-link">
                Inquire Rates
                <ArrowRight size={16} />
              </a>
            </div>

            {/* SERVICE 5 */}
            <div className="service-card">
              <div className="service-icon-box">
                <Award size={32} />
              </div>
              <h3>Excess Baggage Shipping</h3>
              <p>
                Moving abroad for education or career? Ship your heavy baggage, textbooks, luggage, and household goods at highly economical and budget-friendly rates.
              </p>
              <a href="https://wa.me/917893923372?text=Hi%2C%20I%20want%20to%20send%20Excess%20Baggage%20abroad.%20Please%20provide%20rates." target="_blank" className="service-action-link">
                Inquire Rates
                <ArrowRight size={16} />
              </a>
            </div>

            {/* SERVICE 6 */}
            <div className="service-card">
              <div className="service-icon-box">
                <HeartHandshake size={32} />
              </div>
              <h3>Door-to-Door Cargo</h3>
              <p>
                Heavy-weight commercial shipments, logistics, and cargo deliveries. We manage end-to-end pickups, custom paperwork, ocean/air freights, and doorstep logistics.
              </p>
              <a href="https://wa.me/917893923372?text=Hi%2C%20I%20have%20a%20Heavy%20Cargo%20shipment%20inquiry." target="_blank" className="service-action-link">
                Inquire Rates
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS (PROCESS) */}
      <section id="process" className="process-section section-padding">
        <div className="process-bg-overlay"></div>
        <div className="container">
          <div className="text-center">
            <span className="section-badge" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#ff5e14' }}>Workflow</span>
            <h2 className="section-title">How Sri Ram Courier Works</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Simple 5-step stress-free process to ship your goods globally from Begumpet.
            </p>
          </div>

          <div className="process-grid">
            <div className="process-item">
              <div className="process-step-num">1</div>
              <h4>Book Shipment</h4>
              <p>Submit quote form on website or call us. Specify goods, weight and country.</p>
            </div>

            <div className="process-item">
              <div className="process-step-num">2</div>
              <h4>Doorstep Pickup</h4>
              <p>Our packaging assistant schedules a pickup from your Hyderabad address.</p>
            </div>

            <div className="process-item">
              <div className="process-step-num">3</div>
              <h4>Secure Packing</h4>
              <p>We perform vacuum sealing, bubble packing and place inside sturdy boxes.</p>
            </div>

            <div className="process-item">
              <div className="process-step-num">4</div>
              <h4>Global Transit</h4>
              <p>Package is routed through express networks (DHL/FedEx) to its destination.</p>
            </div>

            <div className="process-item">
              <div className="process-step-num">5</div>
              <h4>Doorstep Delivery</h4>
              <p>Item is delivered safely at receiver's doorstep with signature confirmation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="testimonials-section section-padding">
        <div className="container">
          <div className="text-center">
            <span className="section-badge">Client Testimonials</span>
            <h2 className="section-title">You Can Always Trust Us</h2>
            <p className="section-subtitle">
              Read verified feedback and Google reviews from our happy customers who ship regularly.
            </p>
          </div>
        </div>

        <div className="reviews-slider">
          <div className="reviews-track">
            {/* Render reviews twice for infinite loop */}
            {[...reviews, ...reviews].map((rev, index) => (
              <div className="review-card" key={index}>
                <div className="review-top">
                  <div className="reviewer-profile">
                    <div className={`reviewer-avatar ${rev.colorClass}`}>
                      {rev.initial}
                    </div>
                    <div className="reviewer-info">
                      <h4>{rev.name}</h4>
                      <span>Google Customer Review</span>
                    </div>
                  </div>
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                    className="google-logo" 
                    alt="Google G Logo" 
                  />
                </div>
                <div className="review-rating">
                  <span className="stars">{rev.stars}</span>
                  <span className="verified-badge">Verified</span>
                </div>
                <p className="review-text">"{rev.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="faq-section section-padding">
        <div className="container">
          <div className="text-center">
            <span className="section-badge">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to help you organize documents, medicines, and food shipments correctly.
            </p>
          </div>

          <div className="faq-max-width">
            {faqs.map((faq, idx) => (
              <div className={`faq-item ${faqActiveIndex === idx ? 'active' : ''}`} key={idx}>
                <button className="faq-question-btn" onClick={() => toggleFaq(idx)}>
                  <h4>{faq.q}</h4>
                  <span className="faq-icon-indicator">
                    <ChevronDown size={18} />
                  </span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & MAP */}
      <section id="contact" className="contact-section section-padding">
        <div className="container">
          <div className="contact-grid">
            
            <div className="contact-card-info">
              <h3>Contact Details</h3>
              <p>Drop by our office in Patigadda or contact us online via WhatsApp, email, or direct phone call.</p>
              
              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <MapPin />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Office Address</h5>
                    <p>1-8-510/5, L.B. Nagar, Patigadda, Begumpet, Hyderabad, Telangana - 500016</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Phone />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Call Support</h5>
                    <p>
                      <a href="tel:+917893923372">+91 78939 23372</a><br />
                      <a href="tel:+918106223372">+91 81062 23372</a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Mail />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Email Address</h5>
                    <p>
                      <a href="mailto:sriraminternationalcourier@gmail.com">sriraminternationalcourier@gmail.com</a>
                    </p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="contact-detail-icon">
                    <Clock />
                  </div>
                  <div className="contact-detail-text">
                    <h5>Working Hours</h5>
                    <p>Monday - Saturday: 9:30 AM - 8:30 PM<br />Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              <h3>Send a Message</h3>
              <p>Have specific requirements? Drop us your details, and we'll contact you within a couple of hours.</p>
              
              {contactSubmitted ? (
                <div style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', padding: '20px', borderRadius: '12px', border: '1px solid #10b981', fontWeight: 600, textAlign: 'center' }}>
                  Thank you! Your message was submitted successfully. Our team will get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="contact-form">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rahul Sharma" 
                      className="form-input" 
                      style={{ paddingLeft: '16px' }}
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="e.g. rahul@example.com" 
                      className="form-input" 
                      style={{ paddingLeft: '16px' }}
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      required 
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Subject</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Sending Medicines to USA" 
                      className="form-input" 
                      style={{ paddingLeft: '16px' }}
                      value={contactSubject}
                      onChange={(e) => setContactSubject(e.target.value)}
                    />
                  </div>

                  <div className="form-group full-width">
                    <label>Message *</label>
                    <textarea 
                      placeholder="How can we help you?" 
                      className="form-input"
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit">
                    Send Message
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="map-section">
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.280145266854!2d78.48316317584107!3d17.44627250106173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a0d8e82ef3b%3A0xe54fb7a224a1f9a1!2sPatigadda%2C%20Begumpet%2C%20Hyderabad%2C%20Telangana%20500016!5e0!3m2!1sen!2sin!4v1718978000000!5m2!1sen!2sin" 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Sri Ram International Courier Location Begumpet"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-wrap">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#" className="logo-link" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
                <img src={logoImg} className="logo-img" alt="Sri Ram Logo" />
                <div className="brand-text" style={{ color: '#fff' }}>
                  <span className="brand-name" style={{ color: '#fff' }}>Sri Ram</span>
                  <span className="brand-sub" style={{ color: '#ff5e14' }}>International Courier</span>
                </div>
              </a>
              <p>
                Providing premium, reliable, and secure worldwide doorstep packaging and courier shipping service from Begumpet, Hyderabad. Connecting you to over 220 countries.
              </p>
              <div className="footer-socials">
                <a href="https://wa.me/917893923372" target="_blank" className="social-circle-btn">
                  <MessageSquare size={16} />
                </a>
              </div>
            </div>

            <div className="footer-nav-col">
              <h4>Quick Links</h4>
              <ul className="footer-links-list">
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About Us</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a></li>
                <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process') }}>How It Works</a></li>
                <li><a href="#reviews" onClick={(e) => { e.preventDefault(); scrollToSection('reviews') }}>Reviews</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-contact-col">
              <h4>Contact Us</h4>
              <div className="footer-contact-info">
                <div className="footer-contact-item">
                  <MapPin size={16} />
                  <span>1-8-510/5, L.B. Nagar, Patigadda, Begumpet, Hyderabad, Telangana - 500016</span>
                </div>

                <div className="footer-contact-item">
                  <Phone size={16} />
                  <span>
                    <a href="tel:+917893923372">+91 78939 23372</a><br />
                    <a href="tel:+918106223372">+91 81062 23372</a>
                  </span>
                </div>

                <div className="footer-contact-item">
                  <Mail size={16} />
                  <span>
                    <a href="mailto:sriraminternationalcourier@gmail.com">sriraminternationalcourier@gmail.com</a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Sri Ram International Courier. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
              <a href="#" onClick={(e) => e.preventDefault()}>Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON */}
      <a 
        href="https://wa.me/917893923372?text=Hi%2C%20I%20have%20a%20courier%20requirement.%20Please%20connect%20me%20with%20a%20support%20agent." 
        className="floating-whatsapp" 
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={32} />
      </a>
    </>
  )
}

export default App
