import { render, screen, fireEvent } from '@testing-library/react';
import { LanguageProvider, useLanguage } from './LanguageContext';

function LangDisplay() {
  const { lang, setLang } = useLanguage();
  return (
    <div>
      <span data-testid="lang">{lang}</span>
      <button onClick={() => setLang('en')}>Switch to EN</button>
      <button onClick={() => setLang('el')}>Switch to EL</button>
    </div>
  );
}

describe('LanguageContext', () => {
  test('default language is Greek (el)', () => {
    render(
      <LanguageProvider>
        <LangDisplay />
      </LanguageProvider>
    );
    expect(screen.getByTestId('lang').textContent).toBe('el');
  });

  test('switching to English works', () => {
    render(
      <LanguageProvider>
        <LangDisplay />
      </LanguageProvider>
    );
    fireEvent.click(screen.getByText('Switch to EN'));
    expect(screen.getByTestId('lang').textContent).toBe('en');
  });

  test('switching back to Greek works', () => {
    render(
      <LanguageProvider>
        <LangDisplay />
      </LanguageProvider>
    );
    fireEvent.click(screen.getByText('Switch to EN'));
    fireEvent.click(screen.getByText('Switch to EL'));
    expect(screen.getByTestId('lang').textContent).toBe('el');
  });

  test('useLanguage throws without provider', () => {
    const original = console.error;
    console.error = () => {};
    expect(() => render(<LangDisplay />)).toThrow();
    console.error = original;
  });
});
