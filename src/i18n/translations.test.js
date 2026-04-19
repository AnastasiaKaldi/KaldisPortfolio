import { translations } from './translations';

const EL = translations.el;
const EN = translations.en;

describe('translations', () => {
  test('both languages export an object', () => {
    expect(typeof EL).toBe('object');
    expect(typeof EN).toBe('object');
  });

  test('every key present in el also exists in en', () => {
    Object.keys(EL).forEach((key) => {
      expect(EN).toHaveProperty(key);
    });
  });

  test('every key present in en also exists in el', () => {
    Object.keys(EN).forEach((key) => {
      expect(EL).toHaveProperty(key);
    });
  });

  test('author names are correct', () => {
    expect(EL.author_name).toBe('Θάνος Καλδής');
    expect(EN.author_name).toBe('Thanos Kaldis');
    expect(EL.author_first).toBe('Θάνος');
    expect(EL.author_last).toBe('Καλδής');
    expect(EN.author_first).toBe('Thanos');
    expect(EN.author_last).toBe('Kaldis');
  });

  test('copyright is a function returning a string with the year', () => {
    expect(typeof EL.footer_copyright).toBe('function');
    expect(typeof EN.footer_copyright).toBe('function');
    expect(EL.footer_copyright(2025)).toContain('2025');
    expect(EN.footer_copyright(2025)).toContain('2025');
    expect(EL.footer_copyright(2025)).toContain('Θάνος Καλδής');
    expect(EN.footer_copyright(2025)).toContain('Athanasios Kaldis');
  });

  test('nav links are non-empty strings', () => {
    ['nav_about', 'nav_book', 'nav_voice', 'nav_contact'].forEach((key) => {
      expect(typeof EL[key]).toBe('string');
      expect(EL[key].length).toBeGreaterThan(0);
      expect(typeof EN[key]).toBe('string');
      expect(EN[key].length).toBeGreaterThan(0);
    });
  });

  test('greek and english nav labels differ', () => {
    expect(EL.nav_about).not.toBe(EN.nav_about);
    expect(EL.nav_book).not.toBe(EN.nav_book);
  });

  test('gallery buy text is present in both languages', () => {
    expect(EL.gallery_buy).toBeTruthy();
    expect(EN.gallery_buy).toBeTruthy();
  });

  test('no em dashes in any string values', () => {
    const checkLang = (lang) => {
      Object.values(lang).forEach((val) => {
        if (typeof val === 'string') {
          expect(val).not.toMatch(/—/);
        }
      });
    };
    checkLang(EL);
    checkLang(EN);
  });
});
