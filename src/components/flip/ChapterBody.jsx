import { forwardRef } from 'react';

export const ChapterBody = forwardRef(function ChapterBody(
  { chapter, folio, lang },
  ref,
) {
  const title = chapter.title[lang] ?? chapter.title.en;
  const body = chapter.body ? (chapter.body[lang] ?? chapter.body.en) : null;
  const location = chapter.contact?.location
    ? (chapter.contact.location[lang] ?? chapter.contact.location.en)
    : null;

  return (
    <div className="leaf leaf--paper leaf--body" ref={ref}>
      <div className="leaf__inner">
        <div className="body">
          <header className="body__head">
            <span className="body__numeral">{chapter.number}</span>
            <span className="body__rule" />
            <span className="body__title">{title}</span>
          </header>

          {body && (
            <div className="body__prose">
              {body.map((p, i) => (
                <p key={i} className={i === 0 ? 'body__lede' : ''}>
                  {p}
                </p>
              ))}
            </div>
          )}

          {chapter.contact && (
            <div className="contact">
              <p>
                <span className="contact__label">
                  {lang === 'el' ? 'Επικοινωνία' : 'Letters'}
                </span>
                <a href={`mailto:${chapter.contact.email}`}>
                  {chapter.contact.email}
                </a>
              </p>
              <p>
                <span className="contact__label">
                  {lang === 'el' ? 'Τοποθεσία' : 'Whereabouts'}
                </span>
                {location}
              </p>
              <p>
                <span className="contact__label">
                  {lang === 'el' ? 'Αλλού' : 'Elsewhere'}
                </span>
                <span className="contact__social">
                  {chapter.contact.social.map((s, i) => (
                    <span key={s.label}>
                      <a href={s.href}>{s.label}</a>
                      {i < chapter.contact.social.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </span>
              </p>
            </div>
          )}
        </div>
        {folio && <div className="leaf__folio">{folio}</div>}
      </div>
    </div>
  );
});
