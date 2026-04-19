import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider } from '../../i18n/LanguageContext';
import { SiteNav } from './SiteNav';

function renderNav() {
  return render(
    <LanguageProvider>
      <SiteNav />
    </LanguageProvider>
  );
}

describe('SiteNav', () => {
  test('renders author name in Greek by default', () => {
    renderNav();
    expect(screen.getByText('Θάνος Καλδής')).toBeInTheDocument();
  });

  test('shows EN toggle button when in Greek mode', () => {
    renderNav();
    expect(screen.getByRole('button', { name: /switch language/i })).toHaveTextContent('EN');
  });

  test('clicking lang toggle switches to English', () => {
    renderNav();
    fireEvent.click(screen.getByRole('button', { name: /switch language/i }));
    expect(screen.getByText('Thanos Kaldis')).toBeInTheDocument();
  });

  test('lang button shows ΕΛ after switching to English', () => {
    renderNav();
    fireEvent.click(screen.getByRole('button', { name: /switch language/i }));
    expect(screen.getByRole('button', { name: /switch language/i })).toHaveTextContent('ΕΛ');
  });

  test('mobile menu is hidden by default', () => {
    renderNav();
    expect(screen.getByLabelText('Mobile menu')).toHaveAttribute('aria-hidden', 'true');
  });

  test('hamburger button opens mobile menu', () => {
    renderNav();
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    expect(screen.getByLabelText('Mobile menu')).toHaveAttribute('aria-hidden', 'false');
  });

  test('hamburger button closes menu on second click', () => {
    renderNav();
    const burger = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(burger);
    fireEvent.click(burger);
    expect(screen.getByLabelText('Mobile menu')).toHaveAttribute('aria-hidden', 'true');
  });

  test('nav links are present in Greek', () => {
    renderNav();
    expect(screen.getAllByText('Σχετικά').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Το Βιβλίο').length).toBeGreaterThan(0);
  });

  test('nav links switch to English', () => {
    renderNav();
    fireEvent.click(screen.getByRole('button', { name: /switch language/i }));
    expect(screen.getAllByText('About').length).toBeGreaterThan(0);
    expect(screen.getAllByText('The Book').length).toBeGreaterThan(0);
  });
});
