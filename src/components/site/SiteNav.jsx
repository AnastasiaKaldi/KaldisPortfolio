import { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { translations } from '../../i18n/translations';

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="site-nav__row">
        <a href="#top" className="site-nav__mark" onClick={close}>
          <span className="site-nav__monogram">AK</span>
          <span className="site-nav__brand">
            <span className="site-nav__name">{t.author_name}</span>
            <span className="site-nav__role">{t.nav_role}</span>
          </span>
        </a>

        <nav className="site-nav__links" aria-label="Primary">
          <a href="#about" onClick={close}>{t.nav_about}</a>
          <a href="#book" onClick={close}>{t.nav_book}</a>
          <a href="#quote" onClick={close}>{t.nav_voice}</a>
          <a href="#contact" onClick={close}>{t.nav_contact}</a>
        </nav>

        <div className="site-nav__actions">
          <button
            className="site-nav__lang"
            onClick={() => setLang(lang === 'el' ? 'en' : 'el')}
            aria-label="Switch language"
          >
            {lang === 'el' ? 'EN' : 'ΕΛ'}
          </button>

          <button
            className="site-nav__burger"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <nav className={`site-nav__mobile ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile menu" aria-hidden={!menuOpen}>
        <a href="#about" onClick={close}>{t.nav_about}</a>
        <a href="#book" onClick={close}>{t.nav_book}</a>
        <a href="#quote" onClick={close}>{t.nav_voice}</a>
        <a href="#contact" onClick={close}>{t.nav_contact}</a>
      </nav>
    </header>
  );
}
