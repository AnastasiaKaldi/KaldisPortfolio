import { forwardRef } from 'react';

export const Cover = forwardRef(function Cover(
  { title, subtitle, author, variant = 'front', t },
  ref,
) {
  return (
    <div
      className={`leaf leaf--cover leaf--cover-${variant}`}
      ref={ref}
      data-density="hard"
    >
      <div className="cover-plate">
        <div className="cover-plate__border" />
        <div className="cover-plate__border cover-plate__border--inner" />

        {variant === 'front' ? (
          <div className="cover-plate__stack">
            <p className="cover-plate__eyebrow">{author}</p>
            <div className="cover-plate__rule" />
            <h1 className="cover-plate__title">{title}</h1>
            <p className="cover-plate__subtitle">{subtitle}</p>
            <div className="cover-plate__ornament">
              <span /> <span /> <span />
            </div>
          </div>
        ) : (
          <div className="cover-plate__stack cover-plate__stack--back">
            <div className="cover-plate__ornament">
              <span /> <span /> <span />
            </div>
            <p className="cover-plate__eyebrow">{t?.cover_finis ?? 'finis'}</p>
            <p className="cover-plate__back-note">
              {t?.cover_printed ?? 'Printed & bound, pixel by pixel.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});
