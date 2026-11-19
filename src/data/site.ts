import meetingsPhoto from '../assets/hero/pozadie-domovenky.webp';
import tripsPhoto from '../assets/activities/vypravy.webp';
import campsPhoto from '../assets/activities/tabory.webp';
import communityPhoto from '../assets/hero/spolocna-fotografia.webp';

export const site = {
  name: '4. zbor Dzive labute',
  shortName: 'Dzive labute',
  location: 'Košice – Nad jazerom',
  email: 'jazero.skauting@gmail.com',
  organization: 'Slovenský skauting o.z.',
  description: 'Skauting v Košiciach – Nad jazerom. Od roku 2020 spájame deti a mladých ľudí cez dobrodružstvá, priateľstvá a život v prírode.',
  navigation: [
    { label: 'O nás', href: '#o-nas' },
    { label: 'Naša činnosť', href: '#co-robime' },
    { label: 'Galéria', href: '#galeria' },
    { label: 'Kontakt', href: '#kontakt' },
  ],
  hero: {
    eyebrow: 'Slovenský skauting · Košice – Nad jazerom',
    title: 'Dobrodružstvo, učenie sa činnosťou, samostatnosť, priateľstvá.',
    text: 'Sme skautský zbor fungujúci primárne v mestských častiach: Nad jazerom, Vyšné opátske, Barca a Krásna.',
    action: 'Pridaj sa k nám',
    secondary: 'Spoznajte náš zbor',
  },
  about: {
    label: 'O našom zbore',
    title: 'Ponúkame kvalitný program a zábavu mimo virtuálny svet.',
    lead: 'Sme Dzive Labute, košický skautský zbor a naším poslaním je formovať zodpovedných mladých ľudí pre dnešný svet.',
    text: 'Cez hry, spoločné výzvy, priateľstvá a čas v prírode rozvíjame charakter, spoluprácu aj praktické zručnosti.',
    values: ['Príroda', 'Priateľstvo', 'Zodpovednosť'],
  },
  stats: [
    { value: '2020', label: 'vznik skautingu na jazere' },
    { value: '2024', label: 'rok založenia nášho zboru' },
    { value: '89', label: 'členov nášho zboru' },
    { value: '7–15', label: 'prijímame deti v tomto veku' },
  ],
  activities: {
    label: 'Čo robíme',
    title: 'Reálne zážitky, reálne priateľstvá.',
    intro: 'Od pravidelných stretnutí cez večery pri ohni po táborové noci pod hviezdami.',
    items: [
      { photo: meetingsPhoto, alt: 'Skauti v rovnošatách pri spoločnej aktivite v klubovni.', title: 'Družinovky', tag: 'Naša pravidelné stretnutia', text: 'Pravidelné týždenné stretnutia v malých skupinkách, oddelené podľa veku. Stretnutia trvajú hodinu a pol a cez hry a aktivity naši skauti stabilne napredujú.' },
      { photo: tripsPhoto, alt: 'Skauti s batohmi kráčajú po horskej lúke.', title: 'Výpravy', tag: 'Výlety, exkurzie, chaty', text: 'Vyrážame do prírody, objavujeme nové miesta a zažívame dobrodružstvá na výletoch aj víkendových akciách.' },
      { photo: campsPhoto, alt: 'Spoločná fotografia skautov pri táborovom stožiari.', title: 'Tábory', tag: 'Vrchol skautského roka', text: '100% život v prírode, 2 týždne bez elektroniky v lone prírody s najlepšími priateľmi zbehnú ako voda. Najdôležitejší skautský čas.' },
      { photo: communityPhoto, alt: 'Skauti a ich blízki na spoločnej fotografii pred dreveným prístreškom.', title: 'Komunita', tag: 'Sme súčasťou komunity', text: 'Cez dobrovoľníctvo a službu druhým sa sa snažíme aktívne zapájať do života komunity na sídlisku Nad jazerom aj v ďalších mestských častiach v ktorých pôsobíme.' },
    ],
  },
  gallery: {
    label: 'Zo života zboru', title: 'Fotogaléria',
    intro: 'Kúsok našich stretnutí, výprav a táborov.',
    emptyTitle: 'Naše zážitky čoskoro aj v obrazoch.',
    emptyText: 'Fotografie z našich aktivít sem ešte len pribudnú. Zatiaľ nás môžete spoznať cez to, čo robíme.',
    emptyTag: 'Priestor pre spoločné spomienky',
  },
  join: {
    label: 'Ako sa pridať', title: 'Skauting - liek na dnešnú dobu.',
    text: 'Hľadáte pre svoje dieťa čas v prírode a zmysluplné zážitky? Hľadáte priestor kde si Vaše dieťa môže vytvárať nové priateľstvá mimo virtuálny svet? Napíšte nám. Radi vám priblížime fungovanie zboru a aktuálne možnosti zapojenia.',
    note: 'Pre deti vo veku 7–15 rokov', action: 'Napíšte nám',
  },
  contact: { label: '', title: 'Kontakt', locationLabel: 'Kde nás nájdete', emailLabel: 'Napíšte nám', socialLabel: 'Sociálne siete', socialEmpty: 'Odkazy na sociálne siete doplníme čoskoro.' },
  visitingAddress: 'Zajačia 2306/30, 040 01 Košice',
  billing: {
    title: 'Fakturačné údaje',
    name: 'Slovenský skauting, 4. zbor Dzive labute, Košice - Nad Jazerom',
    street: 'Čingovská 1494/14',
    city: 'Košice - mestská časť Nad jazerom',
    postalCode: '040 12',
    ico: '005987218034',
  },
  footer: 'Slovenský skauting o.z.',
};

export interface GalleryPhoto {
  /** Path relative to public/, e.g. gallery/vyprava.webp. */
  src: string;
  alt: string;
  width: number;
  height: number;
}
export const galleryPhotos: GalleryPhoto[] = [
  {
    src: 'gallery/fotografia-1.webp',
    alt: 'Skauti sedia v kruhu na zelenej lúke.',
    width: 1200,
    height: 800,
  },
  {
    src: 'gallery/fotografia-2.webp',
    alt: 'Skupina stojí okolo horiacej vatry za súmraku.',
    width: 1200,
    height: 900,
  },
  {
    src: 'gallery/fotografia-3.webp',
    alt: 'Skupina sa zišla pri stole pod dreveným prístreškom.',
    width: 1200,
    height: 900,
  },
  {
    src: 'gallery/fotografia-4.webp',
    alt: 'Skupina oddychuje v tráve s výhľadom na hory.',
    width: 1200,
    height: 800,
  },
  {
    src: 'gallery/fotografia-5.webp',
    alt: 'Skupina s batohmi sa fotí pred horskou panorámou.',
    width: 1200,
    height: 900,
  },
  {
    src: 'gallery/fotografia-6.webp',
    alt: 'Skupina turistov na spoločnej fotke pri lese.',
    width: 1200,
    height: 900,
  },
];
export const socialLinks: { label: string; url: string }[] = [
  { label: 'Facebook', url: 'https://www.facebook.com/DziveLabute/' },
  { label: 'Instagram', url: 'https://www.instagram.com/dzive.labute/' },
];
export const assetUrl = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
