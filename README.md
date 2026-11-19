# 4. zbor Dzive Labute

Statický, responzívny web v slovenčine. Astro + TypeScript (strict) + Tailwind CSS 4. Bez backendu, databázy, sledovania návštevníkov alebo vzdialených fontov. Domovenka pochádza z dodaného podkladu; fotografie ani sociálne profily nie sú vymyslené.

## Lokálne spustenie

Použite Node.js 22.23.4+ (odporúčané Node 22 LTS) a npm.

```sh
npm ci
npm run dev
```

Otvorte adresu vypísanú terminálom, štandardne http://localhost:4321.

```sh
npm run check       # Astro a TypeScript
npm run build       # statický výstup v dist/
npm run preview     # náhľad produkčného výstupu
```

## Úpravy obsahu

- `src/data/site.ts`: texty, kontakty, štatistiky, navigácia, sociálne odkazy a galéria.
- `src/components/`: samostatné sekcie stránky.
- `src/styles/global.css`: farby, typografia, responzívne pravidlá a jemné animácie.
- `src/layouts/Layout.astro`: spoločné HTML a SEO metadáta.
- `src/assets/domovenka.svg`: vektorová domovenka z prvej strany dodaného PDF „4. zbor - nášivky.pdf“. Písmo je prevedené na krivky; SVG sa používa v hlavičke, úvode aj ako favicon.
- `src/assets/domovenka-social.png`: PNG odvodené z SVG pre zdieľanie na sociálnych sieťach.
- `public/favicon.png`: ikona prehliadača odvodená z domovenky.

Font Manrope sa načítava lokálne. Navigácia funguje aj bez JavaScriptu; malý skript len zatvára mobilné menu po výbere odkazu, kliknutí mimo alebo stlačení Escape. Stránka rešpektuje obmedzenie pohybu a obsahuje odkaz na preskočenie navigácie.

### Fotografie

Vložte optimalizované fotografie (ideálne WebP, približne 1200 px široké) do `public/gallery/`. Do `galleryPhotos` v `src/data/site.ts` pridajte záznamy:

```ts
{
  src: 'gallery/vyprava.webp',
  alt: 'Konkrétny opis toho, čo je na fotografii',
  width: 1200,
  height: 900,
}
```

Prázdny stav sa automaticky nahradí mriežkou fotografií. Rozmery musia zodpovedať súboru. Obrázky sa načítavajú lenivo. Zverejňujte fotografie, na ktorých publikovanie máte potrebné súhlasy.

Do `socialLinks` pridajte `{ label: 'Názov siete', url: 'https://…' }`; dovtedy je zobrazený iba nenápadný text.

## GitHub Pages

1. Nahrajte projekt vrátane `package-lock.json` do GitHub repozitára na vetvu `main`. Pri inom názve vetvy upravte `.github/workflows/deploy.yml`.
2. V **Settings → Pages → Build and deployment → Source** vyberte **GitHub Actions**.
3. Push do `main` spustí kontrolu typov, zostavenie a deployment. Workflow možno spustiť aj ručne cez Actions.
4. Výslednú adresu nájdete v úspešnom deploymente a v Settings → Pages.

Workflow používa `actions/configure-pages` na zistenie skutočnej domény aj podadresára. Funguje teda pre projektový web `/nazov-repozitara/`, koreňový `meno.github.io` aj vlastnú doménu. Názov repozitára ani doména nie sú napevno zapísané. GitHub Pages musí byť zapnuté pred prvým deploymentom.

### Vlastná doména

Doména zatiaľ nie je nastavená. Keď bude vybraná:

1. Nastavte ju v **Settings → Pages → Custom domain** a nakonfigurujte DNS podľa [návodu GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).
2. Zapnite **Enforce HTTPS**, keď bude certifikát dostupný.
3. Znovu spustite deployment. Workflow prevezme doménu aj koreňovú cestu z nastavenia Pages.

Pri tomto Actions deploymente je zdrojom domény nastavenie Pages; súbor CNAME nie je potrebný. Ak neskôr zmeníte spôsob publikovania na vetvu, postupujte podľa pravidiel daného spôsobu.

Na ručné zostavenie pre inú adresu nastavte premenné pred príkazom:

```sh
SITE_URL=https://meno.github.io BASE_PATH=/nazov-repozitara/ npm run build
```

Pre vlastnú doménu použite jej skutočné HTTPS URL a `BASE_PATH=/`. Lokálne sa bez `SITE_URL` nevytvára canonical ani absolútna adresa na zdieľanie, aby web neobsahoval vymyslenú produkčnú URL.

## Ďalší rozvoj

Nové podstránky patria do `src/pages/` a môžu použiť spoločný layout. Novinky možno neskôr doplniť pomocou Astro content collections; súčasná verzia ich nepotrebuje. Pri interných odkazoch na ďalšie stránky a verejné súbory používajte `assetUrl()` alebo `import.meta.env.BASE_URL`, aby fungovali aj v podadresári GitHub Pages.

Oficiálne návody: [Astro a GitHub Pages](https://docs.astro.build/en/guides/deploy/github/), [Tailwind v Astro](https://docs.astro.build/en/guides/styling/).

### Fotografie v úvode

`src/data/hero.ts` určuje poradie a alternatívne opisy piatich fotografií na šírku v `src/assets/hero/`. Sú optimalizované do WebP; Astro generuje menšie varianty. Zvislá fotografia nie je zaradená do prezentácie.

Hero je na počítači rozdelené na dve rovnaké polovice: text a fotografie, ktoré vypĺňajú celú pravú polovicu bez rámu, s jemne šikmým predelom. Fotografie používajú `object-fit: cover`, preto sa okraje podľa veľkosti obrazovky orežú. Na mobile sú fotografie pod textom.

Prezentácia začína vektorovou domovenkou na stmavenej fotografii, po 3 sekundách prechádza na ďalšiu snímku a po poslednej sa vracia na domovenku. Bodky umožňujú ručný výber a zastavia automatické striedanie. Počas prejdenia myšou alebo skrytia karty striedanie stojí; pri ovládaní klávesnicou sa zastaví. Pri nastavení obmedzeného pohybu sa nespustí automaticky. Bez JavaScriptu zostáva zobrazená domovenka.
