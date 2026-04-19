import { useLanguage } from '../../i18n/LanguageContext';
import { translations } from '../../i18n/translations';

export function SiteHero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="top" className="site-hero">
      <div className="site-hero__glow" aria-hidden="true" />

      <div className="site-hero__inner">
        <p className="site-hero__eyebrow">
          <span className="site-hero__pip" />
          {t.hero_eyebrow}
          <span className="site-hero__pip" />
        </p>

        <h1 className="site-hero__name">
          <span>{t.author_first}</span>
          <span className="site-hero__name-italic">&amp;</span>
          <span>{t.author_last}</span>
        </h1>

        <div className="site-hero__rule">
          <span /> <span /> <span />
        </div>

        <p className="site-hero__tagline">{t.hero_tagline}</p>

        <div className="site-hero__row">
          <a href="#book" className="site-hero__cta">
            <span>{t.hero_cta}</span>
            <span className="site-hero__arrow">&darr;</span>
          </a>
          <a href="#about" className="site-hero__ghost">
            {t.hero_about}
          </a>
        </div>
      </div>

      <div className="site-hero__scroll" aria-hidden="true">
        <span className="site-hero__scroll-label">{t.hero_scroll}</span>
        <span className="site-hero__scroll-line" />
      </div>
    </section>
  );
}
