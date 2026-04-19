import { forwardRef } from 'react';

export const WorksGallery = forwardRef(function WorksGallery(
  { chapter, folio, lang, t },
  ref,
) {
  return (
    <div className="leaf leaf--paper leaf--gallery" ref={ref}>
      <div className="leaf__inner">
        <div className="gallery">
          <header className="gallery__head">
            <p className="gallery__eyebrow">
              Chapter {chapter.number} &middot; {chapter.title[lang] ?? chapter.title.en}
            </p>
            <h3 className="gallery__title">{t.gallery_shelf}</h3>
          </header>

          <ul className="gallery__grid">
            {chapter.works.map((w) => (
              <li key={w.title} className="work-card">
                <a
                  className="work-card__cover work-card__cover--link"
                  href={w.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${lang === 'el' ? 'Αγορά' : 'Buy'} ${w.title}`}
                >
                  <img
                    className="work-card__img"
                    src={w.coverImg}
                    alt={w.title}
                  />
                  <span className="work-card__buy">{t.gallery_buy}</span>
                </a>
                <p className="work-card__meta">
                  <span className="work-card__dot" />
                  {w.note[lang] ?? w.note.en} &middot; {w.year}
                </p>
                <p className="work-card__title-below">{w.title}</p>
              </li>
            ))}
          </ul>
        </div>
        {folio && <div className="leaf__folio">{folio}</div>}
      </div>
    </div>
  );
});
