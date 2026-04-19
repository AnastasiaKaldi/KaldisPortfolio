import { Book } from './components/Book';
import { SiteNav } from './components/site/SiteNav';
import { SiteHero } from './components/site/SiteHero';
import { SiteAbout } from './components/site/SiteAbout';
import { SiteQuote } from './components/site/SiteQuote';
import { SiteFooter } from './components/site/SiteFooter';
import { LanguageProvider } from './i18n/LanguageContext';
import './components/Book.css';
import './components/site/Site.css';
import './App.css';

function App() {
  return (
    <LanguageProvider>
      <div className="site">
        <SiteNav />
        <SiteHero />
        <SiteAbout />
        <section id="book" className="site-book-section">
          <Book />
        </section>
        <SiteQuote />
        <SiteFooter />
      </div>
    </LanguageProvider>
  );
}

export default App;
