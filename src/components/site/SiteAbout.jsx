import { useLanguage } from '../../i18n/LanguageContext';
import { translations } from '../../i18n/translations';

export function SiteAbout() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="about" className="site-about">
      <div className="site-about__inner">
        <p className="site-about__eyebrow">{t.about_eyebrow}</p>
        <h2 className="site-about__heading">{t.about_heading}</h2>

        <div className="site-about__grid">
          <div className="site-about__col">
            <p className="site-about__lede">{t.about_lede}</p>
            <p>{t.about_p2}</p>
            <p>{t.about_p3}</p>
            <a href="#book" className="site-about__link">
              {t.about_link} <span>&rarr;</span>
            </a>
          </div>

          <aside className="site-about__facts">
            <dl>
              <div>
                <dt>{t.fact_born}</dt>
                <dd>{t.fact_born_val}</dd>
              </div>
              <div>
                <dt>{t.fact_origin}</dt>
                <dd>{t.fact_origin_val}</dd>
              </div>
              <div>
                <dt>{t.fact_lives}</dt>
                <dd>{t.fact_lives_val}</dd>
              </div>
              <div>
                <dt>{t.fact_pub}</dt>
                <dd><em>{t.fact_pub_val}</em></dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
