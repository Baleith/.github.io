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
    desc: 'En tjänst för att anmäla en misstänkt matförgiftning. Fyll i ett detaljerat formulär så hjälp vi dig att maila den ansvariga instansen i relevant kommun. Kodad i Laravel och Vue.js.',
    tags: ['Vue.js', 'PHP', 'Laravel', 'Scss'],
  },
  {
    id: 2,
    url: 'https://tillnyktrad.se/',
    git: 'https://bitbucket.org/Baleith/share-alkohol/src/master/',
    title: 'Tillnyktrad',
    img: tillnyktrad,
    desc: 'En alkoholförbrännings räknare byggd i Laravel och Vue.js. Med sökfunktion över hela systembolagets sortiment som hämtas över deras offentliga api.',
    tags: ['Vue.js', 'PHP', 'Laravel', 'Scss'],
  },
  {
    id: 3,
    url: 'https://www.bostader.se/',
    git: 'https://bitbucket.org/Baleith/share-styrbostad/src/master/',
    title: 'Styrbostad',
    img: styrbostad,
    desc: 'Samlingsida för hyreslägenheter. Lägenheterna samlas in med hjälp av en headless crawler i node.js, skrapar totalt ett 30tal bostadssidor. Utöver node.js så är backend byggd i Laravel och Vue.js för frontend.',
    tags: ['Vue.js', 'PHP', 'Laravel', 'Node', 'PhantomJS'],
  },
  {
    id: 4,
    url: null,
    git: 'https://bitbucket.org/Baleith/footboll-api/src/master/',
    title: 'Fotbolls vm',
    img: fotboll,
    desc: 'Ett api över fotbolls vm med inlogg över OAuth2. Endpoints för bl.a lägga till och uppdatera matchresultat/lag/spelare, hämta hem spelare/lag utefter t.ex grupper, mål, utvisningar.',
    tags: ['PHP', 'Laravel', 'REST', 'OAuth2'],
  },
  {
    id: 5,
    url: null,
    git: 'https://bitbucket.org/Baleith/share-hypedgamers/src/master/',
    title: 'Hypedgamers',
    img: hyped,
    desc: 'Social gaming community, ungerfär som youtube fast för gaming. Utvecklad i Laravel. Features som uppladdning av bilder/video, inloggning, filtrering, upvoting, kommentering.  ',
    tags: ['PHP', 'Laravel', 'JavaScript', 'JQuery', 'Scss'],
  },
];

export default sites;