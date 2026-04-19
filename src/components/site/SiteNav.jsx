import { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { translations } from '../../i18n/translations';

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="site-nav__mark">
        <span className="site-nav__monogram">AK</span>
        <span className="site-nav__brand">
          <span className="site-nav__name">{t.author_name}</span>
          <span className="site-nav__role">{t.nav_role}</span>
        </span>
      </a>

      <nav className="site-nav__links" aria-label="Primary">
        <a href="#about">{t.nav_about}</a>
        <a href="#book">{t.nav_book}</a>
        <a href="#quote">{t.nav_voice}</a>
        <a href="#contact">{t.nav_contact}</a>
      </nav>

      <button
        className="site-nav__lang"
        onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
        aria-label="Switch language"
      >
        {lang === 'el' ? 'EN' : 'ΕΛ'}
      </button>
    </header>
  );
}
