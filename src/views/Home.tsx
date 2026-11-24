import { useState, type FormEvent } from 'react'
import {
  ArrowRight,
  Award,
  BookOpen,
  Check,
  ChevronDown,
  Heart,
  LockKeyhole,
  Menu,
  MessageCircle,
  Sparkles,
  Star,
  X,
} from 'lucide-react'

const photos = {
  hero: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1400&q=85',
  person: 'https://images.unsplash.com/photo-1584380931214-dbb5b72e7fd0?auto=format&fit=crop&w=1200&q=85',
  individual: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=85',
  couple: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=85',
  teen: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=800&q=85',
  workplace: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=85',
  therapist: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=85',
  office: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85',
}

const features = [
  {
    icon: MessageCircle,
    title: 'Talk',
    description: 'Connect with a therapist who understands you.',
    link: 'Find a therapist',
    tone: 'pink',
  },
  {
    icon: Heart,
    title: 'Reflect',
    description: 'Journal, take mental checks and explore guided exercises.',
    link: 'Start reflecting',
    tone: 'green',
  },
  {
    icon: MessageCircle,
    title: 'Connect',
    description: 'Join supportive communities and share experiences.',
    link: 'Join groups',
    tone: 'blue',
  },
  {
    icon: BookOpen,
    title: 'Learn',
    description: 'Read real articles, resources and mental health guides.',
    link: 'Explore resources',
    tone: 'yellow',
  },
]

const therapyOptions = [
  {
    title: 'Individual therapy',
    description: "Work through life's challenges with a professional.",
    image: photos.individual,
  },
  {
    title: 'Couples therapy',
    description: 'Strengthen communication and build healthier relationships.',
    image: photos.couple,
  },
  {
    title: 'Teen therapy',
    description: 'Support for young people as they navigate school, life and emotions.',
    image: photos.teen,
  },
  {
    title: 'Workplace therapy',
    description: 'Mental health support for your team and organization.',
    image: photos.workplace,
  },
]

const trustItems = [
  { icon: LockKeyhole, title: 'Private and confidential', detail: 'Your wellbeing comes first' },
  { icon: Award, title: 'Licensed therapists', detail: 'Care from trusted professionals' },
  { icon: MessageCircle, title: 'Care that fits you', detail: 'Support built around your needs' },
  { icon: Star, title: 'Accessible anywhere', detail: 'Support wherever you feel at home' },
]

function ArrowLink({ children, href = '#features' }: { children: string; href?: string }) {
  return (
    <a className="text-link" href={href}>
      {children} <ArrowRight size={15} aria-hidden="true" />
    </a>
  )
}

function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [newsletterMessage, setNewsletterMessage] = useState('')

  const closeMenu = () => setMenuOpen(false)
  const handleNewsletterSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setNewsletterMessage("Thanks for your interest! This preview isn't connected to a mailing list yet.")
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Breathe home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>breathe</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={`main-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#how-it-works" onClick={closeMenu}>How Breathe works</a>
          <a href="#professionals" onClick={closeMenu}>For professionals</a>
          <a href="#about" onClick={closeMenu}>About us</a>
          <a href="#community" onClick={closeMenu}>Our community</a>
          <a className="button button-small" href="#features" onClick={closeMenu}>
            Find your support <ArrowRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-inner content-width">
          <div className="hero-copy">
            <span className="eyebrow-pill">...this is your mental check-in</span>
            <h1>Your mind deserves to be <span className="accent-pink">heard</span> and <span className="accent-blue">cared</span> for.</h1>
            <p className="hero-description">
              Breathe makes mental healthcare easier to access, understand, and fit into everyday life—whether you need someone to talk to or simply a moment to breathe.
            </p>
            <div className="button-row">
              <a className="button" href="#therapy">Find your therapist <ArrowRight size={16} aria-hidden="true" /></a>
              <a className="button button-outline" href="#how-it-works">Explore mental wellness</a>
            </div>
            <div className="social-proof">
              <div className="avatar-stack" aria-hidden="true">
                <img src={photos.individual} alt="" />
                <img src={photos.therapist} alt="" />
                <img src={photos.person} alt="" />
              </div>
              <p>Join <strong>10,000+</strong> individuals healing with Breathe</p>
            </div>
          </div>
          <div className="hero-visual">
            <img className="hero-image" src={photos.hero} alt="People sharing a thoughtful conversation in a welcoming space" />
            <div className="check-in-card">
              <p className="check-in-title">How are you feeling today?</p>
              <div className="mood-list" aria-label="Mood check-in">
                <span><i>😊</i> Happy</span>
                <span><i>😔</i> Sad</span>
                <span><i>😌</i> Normal</span>
                <span><i>😟</i> Anxious</span>
                <span><i>✨</i> Excited</span>
              </div>
              <div className="progress-label"><span>Weekly progress</span><strong>83%</strong></div>
              <div className="progress-track"><span /></div>
              <p className="streak">🔥 12 day streak</p>
            </div>
            <div className="hero-sparkle" aria-hidden="true"><Sparkles size={20} /></div>
          </div>
        </div>
      </section>

      <section className="trust-bar" aria-label="Why choose Breathe">
        <div className="trust-grid content-width">
          {trustItems.map(({ icon: Icon, title, detail }) => (
            <div className="trust-item" key={title}>
              <span className="trust-icon"><Icon size={19} aria-hidden="true" /></span>
              <div><h2>{title}</h2><p>{detail}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="intro-section section-pad" id="about">
        <div className="intro-grid content-width">
          <div className="image-frame intro-image">
            <img src={photos.person} alt="A person using their phone to connect with support from home" loading="lazy" />
            <span className="image-note"><Heart size={15} fill="currentColor" /> A little support goes a long way</span>
          </div>
          <div className="section-copy">
            <span className="eyebrow">YOU'RE NOT ALONE</span>
            <h2>Some days, you just need someone to talk to.</h2>
            <p>Whatever you're carrying—stress, anxiety, burnout, relationships, or life's everyday challenges—Breathe is a place to put it down.</p>
            <a className="button" href="#therapy">Talk to a therapist <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="features-section section-pad" id="features">
        <div className="content-width">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HOW BREATHE HELPS</span>
              <h2>Mental healthcare, beyond<br className="desktop-break" /> the therapy room.</h2>
              <p>Breathe is more than therapy. It's a complete mental wellness platform designed to support you at every stage.</p>
            </div>
            <ArrowLink>Explore all features</ArrowLink>
          </div>
          <div className="feature-grid">
            {features.map(({ icon: Icon, title, description, link, tone }) => (
              <article className="feature-card" key={title}>
                <span className={`feature-icon ${tone}`}><Icon size={21} fill="currentColor" aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowLink>{link}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="therapy-section section-pad" id="therapy">
        <div className="content-width">
          <div className="section-heading therapy-heading">
            <div>
              <span className="eyebrow">THERAPY FOR EVERY STAGE</span>
              <h2>Find a therapist who<br className="desktop-break" /> understands you.</h2>
              <p>Choose from a range of specialised support, tailored to your needs and life stage.</p>
            </div>
            <ArrowLink>Explore all features</ArrowLink>
          </div>
          <div className="therapy-grid">
            {therapyOptions.map(({ title, description, image }) => (
              <article className="therapy-card" key={title}>
                <a className="therapy-photo" href="#community" aria-label={`Learn about ${title}`}>
                  <img src={image} alt="" loading="lazy" />
                  <span><ArrowRight size={18} /></span>
                </a>
                <h3>{title}</h3>
                <p>{description}</p>
                <ArrowLink>Explore</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="check-section section-pad" id="how-it-works">
        <div className="check-grid content-width">
          <div className="section-copy">
            <span className="eyebrow">MENTAL CHECK-IN</span>
            <h2>How are you, really?</h2>
            <p>Sometimes "I'm fine" doesn't tell the whole story. Take a quick mental check-in and get insights, resources, and support tailored to how you're feeling.</p>
            <a className="button" href="#features">Take a moment for you <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
          <div className="mood-panel">
            <div className="mood-panel-top"><span className="mood-orb">☀️</span><div><h3>Your weekly check-in</h3><p>A little time for yourself adds up.</p></div><ChevronDown size={18} /></div>
            <p className="check-in-title">How are you feeling today?</p>
            <div className="mood-list mood-list-large">
              <span><i>😊</i> Happy</span><span><i>😔</i> Sad</span><span><i>😌</i> Normal</span><span><i>😟</i> Anxious</span><span><i>✨</i> Excited</span><span><i>😕</i> Confused</span>
            </div>
            <div className="progress-label"><span>Weekly progress</span><strong>88%</strong></div>
            <div className="progress-track"><span /></div>
            <p className="streak">🔥 12 day streak</p>
          </div>
        </div>
      </section>

      <section className="toolkit-section section-pad">
        <div className="toolkit-grid content-width">
          <div className="phone-mockup" aria-label="A preview of the Breathe wellbeing toolkit">
            <div className="phone-header">
              <span className="phone-greeting">Good morning</span><strong>Akin</strong>
              <div className="affirmation-card"><span>DAILY AFFIRMATION</span><p>I am allowed to pause, breathe, and take life one step at a time. I am doing enough, and I am enough.</p></div>
            </div>
            <div className="journal-card"><span>JOURNAL</span><p>What made your day today?</p><small>Today, I choose to focus on what I can control, release what I cannot, and trust myself to handle whatever comes my way.</small></div>
            <a className="phone-cta" href="#features">Explore Breathe</a>
            <div className="phone-chips"><span>Journal</span><span>Articles</span><span>Support groups</span></div>
            <p className="phone-caption">Your daily tools are waiting for you</p>
          </div>
          <div className="section-copy">
            <span className="eyebrow">A LITTLE OF BREATHE WHENEVER YOU NEED IT</span>
            <h2>Tools for a calmer,<br className="desktop-break" /> brighter you.</h2>
            <p>From daily affirmations to journaling, support groups and relaxation exercises, Breathe gives you the tools to take care of your mental wellbeing, every day.</p>
            <div className="tool-list">
              <span><i className="tool-swatch lavender" />Daily affirmations</span>
              <span><i className="tool-swatch green" />Journals & notes</span>
              <span><i className="tool-swatch yellow" />Rant room</span>
              <span><i className="tool-swatch peach" />Guided exercises</span>
              <span><i className="tool-swatch pink" />Supportive groups</span>
              <span><i className="tool-swatch rose" />Articles & resources</span>
            </div>
          </div>
        </div>
      </section>

      <section className="giving-section section-pad">
        <div className="giving-grid content-width">
          <article className="giving-card">
            <span className="eyebrow">GIFT THERAPY</span>
            <h2>Give someone a therapy session.</h2>
            <p>Support a friend, loved one or someone in need with a therapy session. Because everyone deserves a safe space to be heard.</p>
            <a className="button" href="#community">Gift a session <ArrowRight size={16} aria-hidden="true" /></a>
          </article>
          <article className="giving-card">
            <span className="eyebrow">FUND THERAPY</span>
            <h2>Fund a therapy session.</h2>
            <p>Help increase access to mental healthcare by sponsoring therapy sessions for individuals who cannot afford it.</p>
            <a className="button" href="#community">Fund a session <ArrowRight size={16} aria-hidden="true" /></a>
          </article>
        </div>
      </section>

      <section className="organization-section section-pad">
        <div className="organization-grid content-width">
          <div className="image-frame organization-image">
            <img src={photos.office} alt="Colleagues working together in a bright, supportive workspace" loading="lazy" />
          </div>
          <div className="section-copy">
            <span className="eyebrow">FOR ORGANIZATIONS</span>
            <h2>Good mental health belongs at work too.</h2>
            <p>Give your people access to meaningful mental-health support without making them wait until they're struggling.</p>
            <a className="button" href="#community">Partner with us <ArrowRight size={16} aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="professional-section section-pad" id="professionals">
        <div className="professional-grid content-width">
          <div className="professional-copy">
            <span className="eyebrow-pill">FOR THERAPISTS</span>
            <h2>Join a movement to make a difference.</h2>
            <p>Grow your practice, reach more people and be part of a platform that's expanding access to mental healthcare.</p>
            <ul>
              <li><Check size={15} /> Reach a wider audience</li>
              <li><Check size={15} /> Flexible virtual sessions</li>
              <li><Check size={15} /> Secure and easy-to-use platform</li>
              <li><Check size={15} /> Be part of a meaningful mission</li>
            </ul>
            <a className="button button-white" href="#community">Join our network <ArrowRight size={16} aria-hidden="true" /></a>
            <div className="social-proof professional-proof">
              <div className="avatar-stack" aria-hidden="true"><img src={photos.therapist} alt="" /><img src={photos.individual} alt="" /><img src={photos.person} alt="" /></div>
              <p>Join <strong>50+</strong> therapists working with Breathe</p>
            </div>
          </div>
          <div className="image-frame professional-image">
            <img src={photos.therapist} alt="A therapist offering compassionate support in a welcoming room" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="community-section section-pad" id="community">
        <div className="content-width">
          <div className="community-heading">
            <span className="eyebrow">THE BREATHE COMMUNITY</span>
            <h2>You belong here.</h2>
            <p>A safe, moderated space where people share, support one another and grow together.<br className="desktop-break" /> Whatever you're going through, there's a group for that.</p>
          </div>
          <div className="feature-grid community-grid">
            {features.map(({ icon: Icon, title, description, link, tone }) => (
              <article className="feature-card" key={`community-${title}`}>
                <span className={`feature-icon ${tone}`}><Icon size={21} fill="currentColor" aria-hidden="true" /></span>
                <h3>{title === 'Talk' ? 'Anx' : title}</h3>
                <p>{description}</p>
                <ArrowLink>{link}</ArrowLink>
              </article>
            ))}
          </div>
          <div className="newsletter">
            <div className="newsletter-copy">
              <h3>Need a community that understands?</h3>
              <p>Join thousands of people on Breathe who are taking their mental health seriously, one conversation, one breath, one day at a time.</p>
            </div>
            <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
              <label className="visually-hidden" htmlFor="newsletter-email">Your email address</label>
              <input id="newsletter-email" name="email" type="email" placeholder="Enter your email address" required />
              <button className="button button-white" type="submit">Join for free <ArrowRight size={16} aria-hidden="true" /></button>
            </form>
            {newsletterMessage && <p className="newsletter-message" role="status">{newsletterMessage}</p>}
          </div>
        </div>
      </section>

      <section className="testimonial-section section-pad">
        <div className="content-width">
          <div className="community-heading">
            <span className="eyebrow">REAL PEOPLE, REAL PROGRESS</span>
            <h2>You are not the only one<br className="desktop-break" /> figuring life out.</h2>
            <p>Hear from the people who've made Breathe their safe space.</p>
          </div>
          <div className="testimonial-grid">
            <blockquote><div className="quote-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“Having a place to talk things through has made such a difference. I feel heard, and I finally have tools I can use every day.”</p><footer><span className="quote-avatar">A</span><span><strong>Amara</strong><small>Breathe community member</small></span></footer></blockquote>
            <blockquote><div className="quote-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“Finding the right therapist felt overwhelming before. Breathe made it easier to take that first step at my own pace.”</p><footer><span className="quote-avatar quote-avatar-green">J</span><span><strong>Jordan</strong><small>Breathe community member</small></span></footer></blockquote>
            <blockquote><div className="quote-stars" aria-label="5 out of 5 stars">★★★★★</div><p>“The small check-ins remind me to pause and be kind to myself. It feels good to know support is here when I need it.”</p><footer><span className="quote-avatar quote-avatar-yellow">T</span><span><strong>Tomi</strong><small>Breathe community member</small></span></footer></blockquote>
          </div>
        </div>
      </section>

      {/* <footer className="site-footer">
        <div className="footer-inner content-width">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
            <span>breathe</span>
          </a>
          <p>Take a breath. You don't have to figure it all out alone.</p>
          <a href="#home" className="back-top">Back to top <ArrowDown size={15} aria-hidden="true" /></a>
          <span className="footer-legal">© 2026 Breathe. Your wellbeing matters.</span>
          <span className="footer-security"><ShieldCheck size={14} /> Private and confidential</span>
        </div>
      </footer> */}
    </main>
  )
}

export default Home
