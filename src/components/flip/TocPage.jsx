import { forwardRef } from 'react';

export const TocPage = forwardRef(function TocPage(
  { chapters, onJump, folio, lang, t },
  ref,
) {
  return (
    <div className="leaf leaf--paper leaf--toc" ref={ref}>
      <div className="leaf__inner">
        <div className="toc">
          <p className="toc__eyebrow">{t.toc_eyebrow}</p>
          <h2 className="toc__title">{t.toc_title}</h2>
          <ol className="toc__list">
            {chapters.map((c, i) => (
              <li key={c.number}>
                <button
                  type="button"
                  className="toc__item"
                  onClick={() => onJump?.(i)}
                >
                  <span className="toc__numeral">{c.number}.</span>
                  <span className="toc__name">{c.title[lang] ?? c.title.en}</span>
                  <span className="toc__tagline">{c.tagline[lang] ?? c.tagline.en}</span>
                </button>
              </li>
            ))}
          </ol>
          <p className="toc__hint">{t.toc_hint}</p>
        </div>
        {folio && <div className="leaf__folio">{folio}</div>}
      </div>
    </div>
  );
});
