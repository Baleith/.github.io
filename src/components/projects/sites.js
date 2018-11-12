import styrbostad from '../../images/styrbostsad.jpg';
import tillnyktrad from '../../images/tillnyktrad.jpg';
import matforgiftad from '../../images/matforgiftad.jpg';
import hyped from '../../images/hyped.jpg';
import fotboll from '../../images/fotboll.jpg';
import portfolio from '../../images/portfolio.jpg';

const sites = [
  {
    id: 0,
    url: 'https://baleith.github.io/',
    git: 'https://github.com/Baleith/Portfolio/tree/master',
    title: 'Portfolio',
    img: portfolio,
    desc: 'Den här sidan är utvecklad i React(Gatsby). Css är strukturerad med css-modules.',
    tags: ['React', 'Gatsby', 'Css-modules', 'Scss'],
  },
  {
    id: 1,
    url: 'https://matforgiftad.se/',
    git: 'https://bitbucket.org/Baleith/public-matforgiftad/src/master/',
    title: 'Matförgiftad',
    img: matforgiftad,
    desc: 'En tjänst för att anmäla en misstänkt matförgiftning. Användaren väljer den kommunen där matförgiftningen skett och fyller sedan i ett detaljerat formulär så hjälper vi till att maila den ansvariga instansen i aktuell kommun. Kodad i Laravel och Vue.js.',
    tags: ['Vue.js', 'PHP', 'Laravel', 'Scss', 'MySql'],
  },
  {
    id: 2,
    url: 'https://tillnyktrad.se/',
    git: 'https://bitbucket.org/Baleith/share-alkohol/src/master/',
    title: 'Tillnyktrad',
    img: tillnyktrad,
    desc: 'En alkoholförbrännings räknare byggd i Laravel och Vue.js. Med sökfunktion över hela systembolagets sortiment som hämtas över deras offentliga api.',
    tags: ['Vue.js', 'PHP', 'Laravel', 'Scss', 'MySql'],
  },
  {
    id: 3,
    url: 'https://www.bostader.se/',
    git: 'https://bitbucket.org/Baleith/share-styrbostad/src/master/',
    title: 'Styrbostad',
    img: styrbostad,
    desc: 'Samlingsida för hyreslägenheter. Lägenheterna samlas in med hjälp av en headless crawler i node.js, skrapar totalt ett 30tal bostadssidor. Utöver node.js så är backend byggd i Laravel och Vue.js för frontend.',
    tags: ['Vue.js', 'PHP', 'Laravel', 'Node', 'PhantomJS', 'MySql'],
  },
  {
    id: 4,
    url: null,
    git: 'https://github.com/Baleith/Baleith.github.io/tree/dev',
    title: 'Fotbolls vm',
    img: fotboll,
    desc: 'Ett api över fotbolls vm med inlogg över OAuth2. Endpoints för bl.a lägga till och uppdatera matchresultat/lag/spelare, hämta hem spelare/lag utefter t.ex grupper, mål, utvisningar.',
    tags: ['PHP', 'Laravel', 'REST', 'OAuth2', 'MySql'],
  },
  {
    id: 5,
    url: null,
    git: 'https://bitbucket.org/Baleith/share-hypedgamers/src/master/',
    title: 'Hypedgamers',
    img: hyped,
    desc: 'Social gaming community, utvecklad i Laravel. Features som uppladdning av bilder/video, inloggning, filtrering, upvoting, kommentering och, följa andra användare ',
    tags: ['PHP', 'Laravel', 'JavaScript', 'JQuery', 'Scss', 'MySql'],
  },
];

export default sites;