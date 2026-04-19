import { forwardRef } from 'react';

export const EndPage = forwardRef(function EndPage(
  { folio, onRestart, t },
  ref,
) {
  return (
    <div className="leaf leaf--paper leaf--end" ref={ref}>
      <div className="leaf__inner">
        <div className="end">
          <div className="end__ornament">
            <span /> <span /> <span />
          </div>
          <p className="end__finis">{t.end_finis}</p>
          <div className="end__colophon">
            <p>{t.end_col1}</p>
            <p>{t.end_col2}</p>
            <p className="end__colophon-spacer">·</p>
            <p>{t.end_col3}</p>
          </div>
          {onRestart && (
            <button
              type="button"
              className="end__restart"
              onClick={onRestart}
            >
              {t.end_restart}
            </button>
          )}
        </div>
        {folio && <div className="leaf__folio">{folio}</div>}
      </div>
    </div>
  );
});
