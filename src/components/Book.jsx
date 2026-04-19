import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { book, chapters } from '../content/chapters';
import { Cover } from './flip/Cover';
import { TitlePage } from './flip/TitlePage';
import { TocPage } from './flip/TocPage';
import { ChapterOpener } from './flip/ChapterOpener';
import { ChapterBody } from './flip/ChapterBody';
import { WorksGallery } from './flip/WorksGallery';
import { EndPage } from './flip/EndPage';
import { Page } from './flip/Page';
import { useLanguage } from '../i18n/LanguageContext';
import { translations } from '../i18n/translations';

export function Book() {
  const flipRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const { lang } = useLanguage();
  const t = translations[lang];

  const chapterPageStart = useMemo(() => 4, []);

  const jumpToChapter = useCallback(
    (chapterIndex) => {
      const api = flipRef.current?.pageFlip?.();
      if (!api) return;
      const target = chapterPageStart + chapterIndex * 2;
      api.flip(target);
    },
    [chapterPageStart],
  );

  const next = useCallback(() => {
    flipRef.current?.pageFlip?.().flipNext();
  }, []);

  const prev = useCallback(() => {
    flipRef.current?.pageFlip?.().flipPrev();
  }, []);

  const restart = useCallback(() => {
    flipRef.current?.pageFlip?.().flip(0);
  }, []);

  const onFlip = useCallback((e) => {
    setCurrentPage(e.data);
  }, []);

  const onInit = useCallback(() => {
    const api = flipRef.current?.pageFlip?.();
    if (api) setTotalPages(api.getPageCount());
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') next();
      else if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  const runningChapter = useMemo(() => {
    if (currentPage < chapterPageStart) return '';
    const idx = Math.floor((currentPage - chapterPageStart) / 2);
    const ch = chapters[idx];
    return ch ? (ch.title[lang] ?? ch.title.en) : t.end_finis;
  }, [currentPage, chapterPageStart, lang, t]);

  return (
    <div className="stage">
      <div className="stage__ambient" aria-hidden="true" />

      <header className="stage__header">
        <span className="stage__marker">{book.title[lang]}</span>
        <span className="stage__pip" />
        <span className="stage__chapter">{runningChapter || book.subtitle[lang]}</span>
      </header>

      <div className="stage__book">
        <HTMLFlipBook
          ref={flipRef}
          width={460}
          height={640}
          minWidth={320}
          maxWidth={560}
          minHeight={460}
          maxHeight={820}
          size="stretch"
          maxShadowOpacity={0.55}
          drawShadow={true}
          showCover={true}
          usePortrait={true}
          mobileScrollSupport={true}
          flippingTime={900}
          startPage={0}
          onFlip={onFlip}
          onInit={onInit}
          className="flipbook"
          style={{}}
          showPageCorners={true}
          swipeDistance={30}
        >
          <Cover
            title={book.title[lang]}
            subtitle={book.subtitle[lang]}
            author={book.author[lang]}
            variant="front"
          />

          <Page folio="" className="leaf--endpaper">
            <div className="endpaper">
              <div className="endpaper__ornament" />
            </div>
          </Page>

          <TitlePage title={book.title[lang]} subtitle={book.subtitle[lang]} folio="i" t={t} />

          <TocPage chapters={chapters} onJump={jumpToChapter} folio="ii" lang={lang} t={t} />

          {chapters.flatMap((ch, i) => {
            const openerFolio = String(1 + i * 2);
            const bodyFolio = String(2 + i * 2);
            return [
              <ChapterOpener
                key={`op-${ch.number}`}
                chapter={ch}
                folio={openerFolio}
                lang={lang}
              />,
              ch.works ? (
                <WorksGallery
                  key={`gal-${ch.number}`}
                  chapter={ch}
                  folio={bodyFolio}
                  lang={lang}
                  t={t}
                />
              ) : (
                <ChapterBody
                  key={`bd-${ch.number}`}
                  chapter={ch}
                  folio={bodyFolio}
                  lang={lang}
                />
              ),
            ];
          })}

          <EndPage folio="" onRestart={restart} t={t} />

          <Cover title={book.title[lang]} author={book.author[lang]} variant="back" t={t} />
        </HTMLFlipBook>
      </div>

      <nav className="stage__nav" aria-label="Book navigation">
        <button
          type="button"
          className="stage__btn"
          onClick={prev}
          disabled={currentPage === 0}
          aria-label="Previous page"
        >
          {t.stage_prev}
        </button>
        <span className="stage__folio">
          {totalPages > 0
            ? `${Math.min(currentPage + 1, totalPages)} / ${totalPages}`
            : ''}
        </span>
        <button
          type="button"
          className="stage__btn"
          onClick={next}
          disabled={totalPages > 0 && currentPage >= totalPages - 1}
          aria-label="Next page"
        >
          {t.stage_next}
        </button>
      </nav>
    </div>
  );
}
