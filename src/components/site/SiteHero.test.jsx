import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLanguage } from '../../i18n/LanguageContext';
import { SiteHero } from './SiteHero';

function Wrapper({ children }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}

function renderHero() {
  return render(<SiteHero />, { wrapper: Wrapper });
}

describe('SiteHero', () => {
  test('renders author first name in Greek by default', () => {
    renderHero();
    expect(screen.getByText('Θάνος')).toBeInTheDocument();
    expect(screen.getByText('Καλδής')).toBeInTheDocument();
  });

  test('CTA link points to #book', () => {
    renderHero();
    const cta = screen.getByRole('link', { name: /open the book|Άνοιξε/i });
    expect(cta).toHaveAttribute('href', '#book');
  });

  test('about link points to #about', () => {
    renderHero();
    const link = screen.getByRole('link', { name: /about|Σχετικά/i });
    expect(link).toHaveAttribute('href', '#about');
  });

  test('scroll label is always "scroll"', () => {
    renderHero();
    expect(screen.getByText('scroll')).toBeInTheDocument();
  });

  test('eyebrow shows Portfolio in Greek', () => {
    renderHero();
    expect(screen.getByText(/Λογοτεχνικό Portfolio/i)).toBeInTheDocument();
  });
});
