import { forwardRef } from 'react';

export const Page = forwardRef(function Page(
  { children, folio, className = '' },
  ref,
) {
  return (
    <div className={`leaf leaf--paper ${className}`} ref={ref}>
      <div className="leaf__inner">
        <div className="leaf__content">{children}</div>
        {folio && <div className="leaf__folio">{folio}</div>}
      </div>
    </div>
  );
});
