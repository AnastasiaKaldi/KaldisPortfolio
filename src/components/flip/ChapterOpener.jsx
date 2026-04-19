import { forwardRef } from 'react';

export const ChapterOpener = forwardRef(function ChapterOpener(
  { chapter, folio, lang },
  ref,
) {
  return (
    <div className="leaf leaf--paper leaf--opener" ref={ref}>
      <div className="leaf__inner">
        <div className="opener">
          <p className="opener__eyebrow">Chapter {chapter.number}</p>
          <h2 className="opener__title">{chapter.title[lang] ?? chapter.title.en}</h2>
          <p className="opener__tagline">{chapter.tagline[lang] ?? chapter.tagline.en}</p>
          <div className="opener__rule">
            <span /> <span /> <span />
          </div>
        </div>
        {folio && <div className="leaf__folio">{folio}</div>}
      </div>
    </div>
  );
});
