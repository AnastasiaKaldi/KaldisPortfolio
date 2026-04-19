import { useLanguage } from '../../i18n/LanguageContext';
import { translations } from '../../i18n/translations';

export function SiteQuote() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="quote" className="site-quote">
      <div className="site-quote__glyph" aria-hidden="true">
        &ldquo;
      </div>

      <blockquote className="site-quote__block">
        <p>{t.quote_text}</p>
        <footer>
          <cite>{t.quote_cite}</cite>
        </footer>
      </blockquote>

      <div className="site-quote__rule">
        <span /> <span /> <span />
      </div>
    </section>
  );
}
