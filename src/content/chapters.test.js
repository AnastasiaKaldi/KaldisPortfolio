import { book, chapters } from './chapters';

describe('book metadata', () => {
  test('title is bilingual', () => {
    expect(book.title.el).toBe('Θάνος Καλδής');
    expect(book.title.en).toBe('Thanos Kaldis');
  });

  test('subtitle is bilingual', () => {
    expect(book.subtitle.el).toBeTruthy();
    expect(book.subtitle.en).toBeTruthy();
    expect(book.subtitle.el).not.toBe(book.subtitle.en);
  });
});

describe('chapters', () => {
  test('there are 5 chapters', () => {
    expect(chapters).toHaveLength(5);
  });

  test('every chapter has a bilingual title and tagline', () => {
    chapters.forEach((ch) => {
      expect(ch.title.el).toBeTruthy();
      expect(ch.title.en).toBeTruthy();
      expect(ch.tagline.el).toBeTruthy();
      expect(ch.tagline.en).toBeTruthy();
    });
  });

  test('chapters are numbered I through V', () => {
    const numbers = chapters.map((c) => c.number);
    expect(numbers).toEqual(['I', 'II', 'III', 'IV', 'V']);
  });

  test('body chapters have bilingual prose arrays', () => {
    const bodyChapters = chapters.filter((c) => c.body);
    expect(bodyChapters.length).toBeGreaterThan(0);
    bodyChapters.forEach((ch) => {
      expect(Array.isArray(ch.body.el)).toBe(true);
      expect(Array.isArray(ch.body.en)).toBe(true);
      expect(ch.body.el.length).toBeGreaterThan(0);
      expect(ch.body.en.length).toBeGreaterThan(0);
    });
  });

  describe('Selected Works chapter (II)', () => {
    const worksChapter = chapters.find((c) => c.number === 'II');

    test('exists and has works array', () => {
      expect(worksChapter).toBeDefined();
      expect(Array.isArray(worksChapter.works)).toBe(true);
    });

    test('has exactly 2 works', () => {
      expect(worksChapter.works).toHaveLength(2);
    });

    test('each work has a coverImg and purchse href', () => {
      worksChapter.works.forEach((w) => {
        expect(w.coverImg).toMatch(/^https?:\/\//);
        expect(w.href).toMatch(/^https?:\/\//);
      });
    });

    test('works link to fylatos.com', () => {
      worksChapter.works.forEach((w) => {
        expect(w.href).toContain('fylatos.com');
      });
    });

    test('works have bilingual note', () => {
      worksChapter.works.forEach((w) => {
        expect(w.note.el).toBeTruthy();
        expect(w.note.en).toBeTruthy();
      });
    });

    test('first work is the 2022 debut', () => {
      expect(worksChapter.works[0].title).toBe('Ταξιδεύεις και δεν το ξέρεις');
      expect(worksChapter.works[0].year).toBe('2022');
    });

    test('second work is the 2024 book', () => {
      expect(worksChapter.works[1].year).toBe('2024');
    });
  });

  describe('Correspondence chapter (V)', () => {
    const contactChapter = chapters.find((c) => c.number === 'V');

    test('exists and has contact info', () => {
      expect(contactChapter).toBeDefined();
      expect(contactChapter.contact).toBeDefined();
    });

    test('email is correct', () => {
      expect(contactChapter.contact.email).toBe('thkaldis@gmail.com');
    });

    test('has instagram and facebook links', () => {
      const labels = contactChapter.contact.social.map((s) => s.label);
      expect(labels).toContain('Instagram');
      expect(labels).toContain('Facebook');
    });

    test('social links point to real URLs', () => {
      contactChapter.contact.social.forEach((s) => {
        expect(s.href).toMatch(/^https?:\/\//);
      });
    });
  });
});
