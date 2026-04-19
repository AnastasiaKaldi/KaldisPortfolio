import { forwardRef } from 'react';

export const TitlePage = forwardRef(function TitlePage(
  { title, subtitle, folio, t },
  ref,
) {
  return (
    <div className="leaf leaf--paper leaf--title" ref={ref}>
      <div className="leaf__inner">
        <div className="title-stack">
          <p className="title-eyebrow">{t.title_from}</p>
          <h2 className="title-name">{title}</h2>
          <div className="title-rule">
            <span /> <span /> <span />
          </div>
          <p className="title-sub">{subtitle}</p>
        </div>
        {folio && <div className="leaf__folio">{folio}</div>}
      </div>
    </div>
  );
});
