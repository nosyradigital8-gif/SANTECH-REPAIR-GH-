'use client'

import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDollarSign,
  Cpu,
  Laptop2,
  Menu,
  MessageCircle,
  MonitorSmartphone,
  Package,
  Phone,
  ShieldCheck,
  Smartphone,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

const whatsapp = 'https://wa.me/233244078370'

const services = [
  { icon: Smartphone, title: 'iPhone Repair', copy: 'Professional repair support for screens, batteries, charging issues and everyday iPhone faults.', image: '/images/phone-repair.jpg', tone: 'orange' },
  { icon: Laptop2, title: 'Laptop Repair', copy: 'Practical support for laptop hardware, performance issues, power faults and more.', image: '/images/laptop-repair.jpg', tone: 'dark' },
  { icon: MonitorSmartphone, title: 'MacBook Repair', copy: 'Careful MacBook troubleshooting for display, battery, board and system-related issues.', image: '/images/macbook-board.jpg', tone: 'yellow' },
  { icon: Cpu, title: 'Motherboard Repair', copy: 'Board-level diagnosis and repair for complex electronics problems.', image: '/images/motherboard.jpg', tone: 'orange' },
  { icon: Smartphone, title: 'Smartphone Repair', copy: 'Reliable help for Android phones and other mobile devices.', image: '/images/devices-desk.jpg', tone: 'dark' },
  { icon: Wrench, title: 'Software & Hardware', copy: 'One place for troubleshooting, setup, upgrades and device support.', image: '/images/tech-desk.jpg', tone: 'yellow' },
]

const products = [
  { label: 'Phones', title: 'Refurbished iPhones', copy: 'Quality-checked iPhones for work, study and everyday life. Ask about available models.', image: '/images/phone-repair.jpg' },
  { label: 'Phones', title: 'Android smartphones', copy: 'Reliable Android options across popular brands, with guidance from a Ghana-based technician.', image: '/images/devices-desk.jpg' },
  { label: 'Computing', title: 'Business laptops', copy: 'Practical laptops for productivity, school and business. Stock and condition confirmed on enquiry.', image: '/images/laptop-repair.jpg' },
  { label: 'Computing', title: 'MacBooks', copy: 'Selected MacBooks with support for setup, checks, upgrades and after-sales questions.', image: '/images/macbook-board.jpg' },
  { label: 'Accessories', title: 'Chargers & accessories', copy: 'Useful accessories for charging, protection and keeping your devices ready.', image: '/images/tech-desk.jpg' },
]

const reasons = ['Experienced Ghana-based technicians', 'Professional board-level repairs', 'Quality replacement components', 'Clear local customer support', 'Repair and device solutions in one place']

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={light ? 'section-label section-label-light' : 'section-label'}><span className="label-dot" />{children}</div>
}

function TawkChat() {
  const [chatOpen, setChatOpen] = useState(false)

  useEffect(() => {
    const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID
    const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID || 'default'
    if (!propertyId || document.querySelector('script[data-santech-tawk]')) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
    script.setAttribute('data-santech-tawk', 'true')
    document.body.appendChild(script)
  }, [])

  const tawkConfigured = Boolean(process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID)

  return (
    <div className="chat-demo-wrap">
      {chatOpen && <aside className="chat-demo-panel" aria-label="SANTECH chat demo">
        <div className="chat-demo-header"><span className="chat-status-dot" /><div><strong>SANTECH live chat</strong><small>{tawkConfigured ? 'Tawk.to is connected' : 'Tawk.to demo mode'}</small></div><button type="button" onClick={() => setChatOpen(false)} aria-label="Close chat"><X size={16} /></button></div>
        <div className="chat-demo-body"><MessageCircle size={22} /><p>{tawkConfigured ? 'A SANTECH technician is ready to help.' : 'Connect your Tawk.to property ID to make this chat live. For now, send the repair desk a WhatsApp message.'}</p></div>
        <a className="button button-orange chat-demo-action" href={whatsapp}><MessageCircle size={16} /> Chat on WhatsApp</a>
        {!tawkConfigured && <a className="tawk-link" href="https://www.tawk.to/" target="_blank" rel="noreferrer">Set up Tawk.to <ArrowRight size={14} /></a>}
      </aside>}
      <button className="chat-demo-button" type="button" onClick={() => setChatOpen(!chatOpen)} aria-expanded={chatOpen}><MessageCircle size={20} /><span>Chat with SANTECH</span></button>
    </div>
  )
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <div className="utility-bar"><span>Ghana&apos;s phone &amp; electronics repair desk</span><a href={whatsapp}>WhatsApp us <ArrowRight size={13} /></a></div>
      <header className="site-header">
        <a href="#top" className="brand" aria-label="SANTECH REPAIR GH home" onClick={closeMenu}><img src="/images/santech-logo.png" alt="SANTECH REPAIR GH logo" /></a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}<span className="sr-only">Toggle navigation</span></button>
        <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          <a href="#top" onClick={closeMenu}>Home</a><a href="#about" onClick={closeMenu}>About</a><a href="#services" onClick={closeMenu}>Services</a><a href="#shop" onClick={closeMenu}>Shop</a><a href="#contact" onClick={closeMenu}>Contact</a>
          <a className="button button-orange nav-button" href={whatsapp} onClick={closeMenu}><MessageCircle size={17} /> Book a Repair</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy">
            <SectionLabel>Repairs that keep you moving</SectionLabel>
            <h1>Expert Repairs.<br /><span>Genuine Solutions.</span><br />Reliable Technology.</h1>
            <p>From iPhones and MacBooks to laptops and other gadgets, SANTECH delivers professional repairs and quality devices you can trust in Ghana.</p>
            <div className="hero-actions"><a className="button button-orange" href={whatsapp}><MessageCircle size={18} /> Book a Repair</a><a className="button button-outline" href="#shop">Explore Our Products <ArrowRight size={17} /></a></div>
            <div className="hero-trust"><span><ShieldCheck size={18} /> Clear, practical support</span><span><Zap size={18} /> Built for your device</span></div>
          </div>
          <div className="hero-media"><div className="hero-photo"><img src="/images/phone-repair.jpg" alt="Ghana-based technician repairing a smartphone at a workbench" /><div className="hero-photo-overlay" /></div><div className="hero-card"><span className="hero-card-icon"><Wrench size={18} /></span><div><strong>Ghana repair desk</strong><small>Phones · laptops · boards</small></div><ArrowRight size={17} /></div><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /></div>
        </section>

        <section className="brand-strip"><div><span>01</span><strong>Diagnose</strong><small>Understand the issue</small></div><div><span>02</span><strong>Repair</strong><small>Work with precision</small></div><div><span>03</span><strong>Restore</strong><small>Get back to what matters</small></div><div className="brand-strip-mark">SANTECH <em>REPAIR GH</em></div></section>

        <section className="intro section-wrap" id="about"><div className="intro-visual"><img src="/images/laptop-repair.jpg" alt="Ghana-based technician working at a laptop repair bench" /><span className="intro-corner">S / 01</span></div><div className="intro-copy"><SectionLabel>Why SANTECH</SectionLabel><h2>Technology should feel <span>reliable.</span></h2><p className="lead">When something you rely on stops working, you need a clear next step — not more confusion.</p><p>Our Ghana-based technicians bring together phone repair, laptop repair, board-level work, software support and device sales in one focused place. We make it easier to ask questions, understand your options and choose the right next step.</p><div className="reason-list">{reasons.map((reason) => <div key={reason}><Check size={15} /><span>{reason}</span></div>)}</div><a className="text-link" href={whatsapp}>Talk to the repair desk <ArrowRight size={16} /></a></div></section>

        <section className="services-section section-wrap" id="services"><div className="section-heading"><div><SectionLabel>What we repair</SectionLabel><h2>One desk.<br /><span>Many solutions.</span></h2></div><div className="heading-aside"><p>Professional support from Ghana-based technicians for the devices that keep your work, conversations and ideas moving.</p><a href={whatsapp} className="text-link">Ask about your device <ArrowRight size={16} /></a></div></div><div className="service-grid">{services.map((service, index) => { const Icon = service.icon; return <article key={service.title} className={`service-card ${service.tone}`}><div className="service-image"><img src={service.image} alt={`${service.title} service`} /><span>0{index + 1}</span></div><div className="service-content"><Icon size={22} /><h3>{service.title}</h3><p>{service.copy}</p><a href={whatsapp}>Learn more <ChevronRight size={16} /></a></div></article> })}</div></section>

        <section className="products-section section-wrap" id="shop"><div className="section-heading"><div><SectionLabel>Our products</SectionLabel><h2>Good devices.<br /><span>Better decisions.</span></h2></div><div className="heading-aside"><p>Browse real product categories with local support. Ask the SANTECH repair desk about current models, condition and availability.</p><span className="placeholder-note">Stock and prices confirmed on enquiry</span></div></div><div className="product-grid">{products.map((product) => <article className="product-card" key={product.title}><div className="product-image"><img src={product.image} alt={`${product.title} at SANTECH`} /><span className="product-badge">{product.label}</span></div><div className="product-content"><div><h3>{product.title}</h3><p>{product.copy}</p></div><a className="round-arrow" href={whatsapp} aria-label={`Enquire about ${product.title}`}><ArrowRight size={18} /></a></div><div className="product-placeholder"><CircleDollarSign size={13} /> Price and availability on enquiry</div></article>)}</div></section>

        <section className="process-section"><div className="section-wrap"><div className="section-heading process-heading"><div><SectionLabel light>How it works</SectionLabel><h2>Simple from<br /><span>start to finish.</span></h2></div><p>Bring your device to a repair experience designed around clarity and practical support from a Ghana-based technician.</p></div><div className="process-grid"><div><span>01</span><MessageCircle size={23} /><h3>Contact Us</h3><p>Tell us what is happening with your device.</p></div><div><span>02</span><Package size={23} /><h3>Bring Your Device</h3><p>Bring the device in for a hands-on look.</p></div><div><span>03</span><Wrench size={23} /><h3>Diagnosis &amp; Repair</h3><p>Understand the issue and the repair path.</p></div><div><span>04</span><Check size={23} /><h3>Collect Your Device</h3><p>Get back to work with a clear handover.</p></div></div></div></section>

        <section className="contact-cta section-wrap" id="contact"><div className="cta-orange"><div><SectionLabel light>Need a hand?</SectionLabel><h2>Having Device Problems?<br /><span>Let Our Experts Help.</span></h2><p>Send a WhatsApp enquiry and tell us what your device is doing. Our Ghana repair desk will help you find the next step.</p></div><a className="button button-dark" href={whatsapp}><MessageCircle size={19} /> WhatsApp SANTECH <ArrowRight size={17} /></a></div></section>
      </main>

      <footer className="site-footer"><div className="footer-top"><div className="footer-brand"><a href="#top" className="brand"><img src="/images/santech-logo.png" alt="SANTECH REPAIR GH logo" /></a><p>Expert Repairs. Genuine Solutions. Reliable Technology in Ghana.</p><a className="whatsapp-line" href={whatsapp}><Phone size={16} /> +233 24 407 8370</a></div><div className="footer-col"><h3>Navigate</h3><a href="#about">About</a><a href="#services">Services</a><a href="#shop">Shop</a><a href="#contact">Contact</a></div><div className="footer-col"><h3>Services</h3><a href="#services">iPhone repairs</a><a href="#services">Laptop repairs</a><a href="#services">MacBook repairs</a><a href="#services">Board-level repairs</a></div><div className="footer-col"><h3>Stay connected</h3><a href={whatsapp}>WhatsApp enquiry</a><a href="#chat-demo">Tawk.to chat demo</a><span className="placeholder-note">[Address to be confirmed]</span></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SANTECH REPAIR GH</span><span>Professional electronics repair and sales in Ghana</span><a href="#top">Back to top ↑</a></div></footer>
      <div id="chat-demo"><TawkChat /></div>
    </div>
  )
}
