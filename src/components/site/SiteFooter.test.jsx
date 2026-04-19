import { render, screen } from '@testing-library/react';
import { LanguageProvider } from '../../i18n/LanguageContext';
import { SiteFooter } from './SiteFooter';

function renderFooter() {
  return render(
    <LanguageProvider>
      <SiteFooter />
    </LanguageProvider>
  );
}

describe('SiteFooter', () => {
  test('renders email link with correct address', () => {
    renderFooter();
    const link = screen.getByRole('link', { name: /thkaldis@gmail\.com/i });
    expect(link).toHaveAttribute('href', 'mailto:thkaldis@gmail.com');
  });

  test('renders Instagram link', () => {
    renderFooter();
    const link = screen.getByRole('link', { name: /instagram/i });
    expect(link).toHaveAttribute('href', 'https://www.instagram.com/thkaldis/');
  });

  test('renders Facebook link', () => {
    renderFooter();
    const link = screen.getByRole('link', { name: /facebook/i });
    expect(link).toHaveAttribute('href', 'https://www.facebook.com/kaldis.thanassis');
  });

  test('social links open in new tab', () => {
    renderFooter();
    const instagram = screen.getByRole('link', { name: /instagram/i });
    expect(instagram).toHaveAttribute('target', '_blank');
    expect(instagram).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('shows Greek footer text by default', () => {
    renderFooter();
    expect(screen.getByText(/Πείτε ένα γεια/i)).toBeInTheDocument();
  });

  test('shows author name in Greek by default', () => {
    renderFooter();
    expect(screen.getByText('Θάνος Καλδής')).toBeInTheDocument();
  });

  test('copyright contains current year', () => {
    renderFooter();
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });
});
