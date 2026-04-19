import { useLanguage } from '../../i18n/LanguageContext';
import { translations } from '../../i18n/translations';

const year = new Date().getFullYear();

export function SiteFooter() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__top">
        <p className="site-footer__eyebrow">
          <span /> · {t.footer_eyebrow} · <span />
        </p>
        <h3 className="site-footer__heading">{t.footer_heading}</h3>
        <a href="mailto:thkaldis@gmail.com" className="site-footer__email">
          thkaldis@gmail.com
        </a>
      </div>

      <div className="site-footer__grid">
        <div className="site-footer__col">
          <h4>{t.footer_elsewhere}</h4>
          <ul>
            <li><a href="https://www.instagram.com/thkaldis/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            <li><a href="https://www.facebook.com/kaldis.thanassis" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          </ul>
        </div>

        <div className="site-footer__col site-footer__col--center">
          <div className="site-footer__mark">
            <span>AK</span>
          </div>
          <p>{t.author_name}</p>
          <p className="site-footer__muted">{t.footer_portfolio}</p>
        </div>

        <div className="site-footer__col site-footer__col--right">
          <h4>{t.footer_published}</h4>
          <ul>
            <li><em>Εκδόσεις Φυλάτος</em></li>
            <li>{t.footer_ebook}</li>
            <li>{t.footer_press}</li>
          </ul>
        </div>
      </div>

      <div className="site-footer__base">
        <p>{t.footer_copyright(year)}</p>
        <p className="site-footer__colophon">{t.footer_colophon}</p>
      </div>
    </footer>
  );
}
