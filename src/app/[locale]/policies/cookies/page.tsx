import { PolicyLayout, ContactBlock } from "@/components/layout/PolicyLayout/PolicyLayout";
import type { ReactNode } from "react";

type Locale = "ro" | "hu" | "bg" | "en";

const metaTitles: Record<Locale, string> = {
  ro: "Politica de cookie-uri — MisaElectro",
  hu: "Cookie-szabályzat — MisaElectro",
  bg: "Политика за бисквитки — MisaElectro",
  en: "Cookie Policy — MisaElectro",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return { title: metaTitles[(locale as Locale)] ?? metaTitles.en };
}

const content: Record<Locale, ReactNode> = {
  ro: (
    <PolicyLayout title="Politica de cookie-uri" lastUpdated="29 mai 2026">
      <p>
        Această Politică de cookie-uri explică modul în care MISARELIANA S.R.L., care își desfășoară
        activitatea sub denumirea comercială MisaElectro, utilizează cookie-uri și tehnologii similare pe
        www.misaelectro.ro.
      </p>
      <p>Site-ul web este operat de:</p>
      <ContactBlock />
      <p>
        În această Politică de cookie-uri, &bdquo;MisaElectro&rdquo;, &bdquo;noi&rdquo; sau
        &bdquo;al nostru&rdquo; înseamnă MISARELIANA S.R.L.. &bdquo;Dumneavoastră&rdquo; sau
        &bdquo;al dumneavoastră&rdquo; înseamnă orice vizitator, client, titular de cont, client de afaceri
        sau utilizator al Site-ului web.
      </p>
      <p>
        Această Politică de cookie-uri trebuie citită împreună cu Politica noastră de confidențialitate, care
        explică modul în care colectăm, utilizăm, stocăm și protejăm datele cu caracter personal.
      </p>

      <h2>1. Domeniul de aplicare al acestei Politici de cookie-uri</h2>
      <p>1.1 Această Politică de cookie-uri explică:</p>
      <ul>
        <li>ce sunt cookie-urile și tehnologiile similare;</li>
        <li>ce categorii de cookie-uri utilizăm;</li>
        <li>de ce le utilizăm;</li>
        <li>când este necesar consimțământul dumneavoastră;</li>
        <li>cum vă puteți gestiona sau retrage preferințele privind cookie-urile.</li>
      </ul>
      <p>
        1.2 Această Politică se aplică cookie-urilor și tehnologiilor similare utilizate pe Site-ul web,
        inclusiv tehnologiilor utilizate pentru funcționalitatea coșului de cumpărături, finalizarea comenzii,
        accesul la cont, securitatea plăților, preferințele de monedă, analiză, măsurarea performanței și
        marketing, acolo unde este aplicabil.
      </p>
      <p>
        1.3 Putem utiliza cookie-uri, pixeli, etichete, scripturi, stocare locală, stocare de sesiune, kituri
        de dezvoltare software și tehnologii similare. Pentru simplitate, această Politică se referă la aceste
        tehnologii în mod colectiv drept &bdquo;cookie-uri&rdquo;.
      </p>

      <h2>2. Ce sunt cookie-urile?</h2>
      <p>2.1 Cookie-urile sunt fișiere text de mici dimensiuni plasate pe dispozitivul dumneavoastră atunci când vizitați un site web.</p>
      <p>
        2.2 Cookie-urile permit unui site web să recunoască browserul sau dispozitivul dumneavoastră și să
        rețină anumite informații, cum ar fi conținutul coșului dumneavoastră, moneda selectată, sesiunea de
        cont, preferința de limbă sau setările privind cookie-urile.
      </p>
      <p>2.3 Cookie-urile pot fi:</p>
      <ul>
        <li>cookie-uri proprii (first-party), setate direct de MisaElectro; sau</li>
        <li>cookie-uri terțe (third-party), setate de furnizori externi ale căror servicii le utilizăm, cum ar fi furnizori de analiză, plăți, securitate, publicitate sau servicii încorporate.</li>
      </ul>
      <p>2.4 Cookie-urile pot fi, de asemenea:</p>
      <ul>
        <li>cookie-uri de sesiune, care expiră atunci când închideți browserul; sau</li>
        <li>cookie-uri persistente, care rămân pe dispozitivul dumneavoastră pentru o perioadă definită, cu excepția cazului în care le ștergeți mai devreme.</li>
      </ul>

      <h2>3. Tehnologii similare</h2>
      <p>3.1 Pe lângă cookie-uri, putem utiliza tehnologii similare, inclusiv:</p>
      <ul>
        <li>stocarea locală, care stochează informații în browserul dumneavoastră;</li>
        <li>stocarea de sesiune, care stochează informații pe durata unei sesiuni de browser;</li>
        <li>pixeli și etichete, care ajută la măsurarea activității sau susțin marketingul acolo unde sunt utilizate;</li>
        <li>scripturi, care susțin funcționalitatea Site-ului web, analiza, securitatea sau integrările.</li>
      </ul>
      <p>
        3.2 Aceste tehnologii pot fi utilizate în scopuri similare cu cookie-urile și sunt acoperite de
        această Politică atunci când stochează sau accesează informații pe dispozitivul dumneavoastră.
      </p>

      <h2>4. Categoriile de cookie-uri pe care le utilizăm</h2>
      <p>Utilizăm următoarele categorii de cookie-uri.</p>

      <h2>5. Cookie-uri strict necesare</h2>
      <p>5.1 Cookie-urile strict necesare sunt necesare pentru ca Site-ul web să funcționeze corect.</p>
      <p>5.2 Aceste cookie-uri activează funcții de bază, cum ar fi:</p>
      <ul>
        <li>navigarea în pagini;</li>
        <li>funcționalitatea coșului de cumpărături;</li>
        <li>finalizarea comenzii;</li>
        <li>securitatea plăților;</li>
        <li>autentificarea în cont;</li>
        <li>prevenirea fraudei;</li>
        <li>procesarea comenzilor;</li>
        <li>afișarea monedei;</li>
        <li>stocarea preferințelor privind cookie-urile;</li>
        <li>securitatea Site-ului web;</li>
        <li>echilibrarea încărcării și stabilitatea tehnică.</li>
      </ul>
      <p>
        5.3 Aceste cookie-uri nu necesită consimțământul dumneavoastră, deoarece sunt necesare pentru a
        furniza serviciul pe care îl solicitați.
      </p>
      <p>
        5.4 Dacă dezactivați cookie-urile strict necesare prin setările browserului, este posibil ca unele
        părți ale Site-ului web să nu funcționeze corect. Este posibil să nu puteți adăuga produse în coș, să
        finalizați comanda, să vă autentificați sau să utilizați funcțiile esențiale ale magazinului.
      </p>
      <p><strong>Exemple de cookie-uri strict necesare</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / tehnologie</th>
            <th>Scop</th>
            <th>Durată tipică</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Cookie de coș sau stocare locală</td><td>Reține produsele adăugate în coșul dumneavoastră de cumpărături</td><td>Sesiune sau perioadă persistentă limitată</td></tr>
          <tr><td>Cookie de sesiune la finalizarea comenzii</td><td>Susține finalizarea securizată a comenzii și încheierea comenzii</td><td>Sesiune</td></tr>
          <tr><td>Cookie de sesiune de cont</td><td>Vă menține autentificat pe durata vizitei</td><td>Sesiune sau perioadă persistentă limitată</td></tr>
          <tr><td>Cookie de preferință de monedă</td><td>Reține moneda de afișare selectată, cum ar fi EUR, RON sau HUF</td><td>Perioadă persistentă limitată</td></tr>
          <tr><td>Preferință de consimțământ pentru cookie-uri</td><td>Stochează opțiunile dumneavoastră privind cookie-urile pentru a le putea respecta la vizitele viitoare</td><td>Perioadă persistentă limitată</td></tr>
          <tr><td>Cookie de securitate</td><td>Ajută la protejarea Site-ului web împotriva fraudei, abuzurilor, boților sau activității neautorizate</td><td>Sesiune sau perioadă persistentă limitată</td></tr>
        </tbody>
      </table>

      <h2>6. Cookie-uri funcționale</h2>
      <p>6.1 Cookie-urile funcționale ajută la furnizarea unor funcții îmbunătățite ale Site-ului web și la personalizare.</p>
      <p>6.2 Aceste cookie-uri pot reține alegerile pe care le faceți, cum ar fi:</p>
      <ul>
        <li>moneda preferată;</li>
        <li>setările de limbă sau regiune;</li>
        <li>produsele vizualizate recent;</li>
        <li>preferințele de cont;</li>
        <li>setările de afișare salvate;</li>
        <li>preferințele de chat de asistență, acolo unde este aplicabil.</li>
      </ul>
      <p>
        6.3 Unele cookie-uri funcționale pot fi importante pentru o experiență de cumpărături fluidă, dar nu
        toate sunt strict necesare.
      </p>
      <p>
        6.4 Acolo unde legea impune acest lucru, vom utiliza cookie-uri funcționale neesențiale numai cu
        consimțământul dumneavoastră.
      </p>
      <p><strong>Exemple de cookie-uri funcționale</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / tehnologie</th>
            <th>Scop</th>
            <th>Durată tipică</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Produse vizualizate recent</td><td>Ajută la afișarea produselor pe care le-ați vizualizat recent</td><td>Perioadă persistentă limitată</td></tr>
          <tr><td>Stocarea preferințelor</td><td>Reține preferințele opționale de afișare sau navigare</td><td>Perioadă persistentă limitată</td></tr>
          <tr><td>Cookie de instrument de asistență</td><td>Ajută la menținerea unei sesiuni de chat sau de asistență, acolo unde este disponibilă</td><td>Sesiune sau perioadă persistentă limitată</td></tr>
        </tbody>
      </table>

      <h2>7. Cookie-uri de analiză și performanță</h2>
      <p>7.1 Cookie-urile de analiză și performanță ne ajută să înțelegem modul în care vizitatorii utilizează Site-ul web.</p>
      <p>7.2 Aceste cookie-uri ne pot ajuta să măsurăm:</p>
      <ul>
        <li>ce pagini sunt vizitate;</li>
        <li>cum se deplasează vizitatorii prin Site-ul web;</li>
        <li>ce produse sau categorii sunt vizualizate;</li>
        <li>cum interacționează clienții cu finalizarea comenzii;</li>
        <li>viteza și performanța Site-ului web;</li>
        <li>erori, pagini defecte sau probleme tehnice;</li>
        <li>eficacitatea îmbunătățirilor Site-ului web.</li>
      </ul>
      <p>
        7.3 Datele de analiză ne ajută să îmbunătățim funcționalitatea Site-ului web, experiența
        utilizatorului, prezentarea produselor, navigarea și performanța magazinului.
      </p>
      <p>
        7.4 Cookie-urile de analiză nu sunt esențiale pentru finalizarea unei achiziții. Acolo unde legea
        impune acest lucru, vom utiliza cookie-uri de analiză numai cu consimțământul dumneavoastră.
      </p>
      <p>
        7.5 Informațiile de analiză pot fi agregate sau pseudonimizate, dar pot implica în continuare date cu
        caracter personal, cum ar fi adresa IP, identificatorii dispozitivului sau identificatorii online, în
        funcție de instrumentul utilizat.
      </p>
      <p><strong>Exemple de cookie-uri de analiză și performanță</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / tehnologie</th>
            <th>Scop</th>
            <th>Durată tipică</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Cookie de analiză a Site-ului web</td><td>Măsoară vizitele, vizualizările de pagini și parcursurile utilizatorilor</td><td>De obicei 12&ndash;26 de luni</td></tr>
          <tr><td>Cookie de monitorizare a performanței</td><td>Ajută la identificarea problemelor tehnice și a problemelor de performanță ale Site-ului web</td><td>Sesiune sau perioadă persistentă limitată</td></tr>
          <tr><td>Cookie de măsurare a conversiilor</td><td>Ajută la înțelegerea faptului dacă îmbunătățirile Site-ului web sau campaniile conduc la achiziții</td><td>Perioadă persistentă limitată</td></tr>
        </tbody>
      </table>

      <h2>8. Cookie-uri de marketing și direcționare</h2>
      <p>
        8.1 Cookie-urile de marketing și direcționare pot fi utilizate pentru a livra publicitate relevantă, a
        măsura performanța publicității, a limita reclamele repetate, a construi segmente de public sau a
        înțelege modul în care utilizatorii interacționează cu campaniile de marketing.
      </p>
      <p>
        8.2 Aceste cookie-uri pot fi setate de MisaElectro sau de parteneri terți de publicitate și marketing.
      </p>
      <p>
        8.3 Cookie-urile de marketing pot urmări activitatea dumneavoastră de navigare pe diferite site-uri web
        și pot fi utilizate pentru a crea un profil al intereselor dumneavoastră.
      </p>
      <p>
        8.4 Vom utiliza cookie-uri de marketing sau de direcționare numai acolo unde acestea sunt activate pe
        Site-ul web și unde ați acordat consimțământul, atunci când legea impune acest lucru.
      </p>
      <p>
        8.5 Dacă respingeți cookie-urile de marketing, este posibil să vedeți în continuare reclame, dar
        acestea pot fi mai puțin relevante sau mai puțin personalizate.
      </p>
      <p><strong>Exemple de cookie-uri de marketing și direcționare</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / tehnologie</th>
            <th>Scop</th>
            <th>Durată tipică</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Pixel de publicitate</td><td>Măsoară performanța publicității și interacțiunile utilizatorilor</td><td>Perioadă persistentă limitată</td></tr>
          <tr><td>Cookie de retargetare</td><td>Ajută la afișarea de reclame relevante după ce părăsiți Site-ul web</td><td>Perioadă persistentă limitată</td></tr>
          <tr><td>Cookie de urmărire a campaniilor</td><td>Ajută la măsurarea eficacității campaniilor și a promoțiilor</td><td>Perioadă persistentă limitată</td></tr>
        </tbody>
      </table>

      <h2>9. Tehnologii de plată, finalizare a comenzii și securitate</h2>
      <p>
        9.1 În timpul finalizării comenzii, cookie-urile și tehnologiile similare pot fi utilizate de
        procesatorii de plăți, furnizorii de prevenire a fraudei, sistemele de plată cu cardul și
        instrumentele de securitate.
      </p>
      <p>9.2 Aceste tehnologii pot fi necesare pentru a:</p>
      <ul>
        <li>procesa plățile Visa și Mastercard;</li>
        <li>proteja împotriva tranzacțiilor frauduloase;</li>
        <li>verifica sesiunile de finalizare a comenzii;</li>
        <li>preveni activitatea neautorizată;</li>
        <li>susține autentificarea securizată a plăților;</li>
        <li>detecta comportamentul suspect;</li>
        <li>respecta cerințele de securitate a plăților.</li>
      </ul>
      <p>
        9.3 Unele cookie-uri de plată și securitate sunt strict necesare pentru finalizarea comenzii și
        prevenirea fraudei. Altele pot fi controlate de furnizorul terț relevant.
      </p>
      <p>9.4 MisaElectro nu stochează numărul complet al cardului dumneavoastră sau codul de securitate complet al cardului.</p>

      <h2>10. Cookie-uri terțe</h2>
      <p>10.1 Unele cookie-uri pot fi setate de furnizori terți care susțin Site-ul nostru web.</p>
      <p>10.2 Furnizorii terți pot include:</p>
      <ul>
        <li>procesatori de plăți;</li>
        <li>furnizori de prevenire a fraudei;</li>
        <li>furnizori de analiză;</li>
        <li>furnizori de publicitate și marketing;</li>
        <li>furnizori de găzduire, performanță și securitate;</li>
        <li>instrumente de asistență pentru clienți sau de comunicare;</li>
        <li>furnizori de conținut încorporat;</li>
        <li>platforme de social media, acolo unde este aplicabil.</li>
      </ul>
      <p>
        10.3 Cookie-urile terțe sunt controlate de terțul relevant. Utilizarea lor este supusă propriilor
        politici de confidențialitate și de cookie-uri ale acelui terț.
      </p>
      <p>
        10.4 Nu controlăm toate cookie-urile terțe după ce sunt setate, dar ne propunem să colaborăm cu
        furnizori de renume și să configurăm cookie-urile într-un mod conștient de confidențialitate, acolo
        unde este posibil.
      </p>
      <p>
        10.5 Acolo unde cookie-urile terțe nu sunt strict necesare, acestea ar trebui utilizate numai atunci
        când a fost obținut consimțământul adecvat.
      </p>

      <h2>11. Consimțământul privind cookie-urile</h2>
      <p>11.1 Când vizitați Site-ul web pentru prima dată, este posibil să vi se afișeze un banner sau un instrument de consimțământ pentru cookie-uri.</p>
      <p>11.2 Bannerul de cookie-uri vă poate permite să:</p>
      <ul>
        <li>acceptați toate cookie-urile;</li>
        <li>respingeți cookie-urile neesențiale;</li>
        <li>personalizați preferințele privind cookie-urile;</li>
        <li>aflați mai multe despre categoriile de cookie-uri utilizate.</li>
      </ul>
      <p>
        11.3 Cookie-urile strict necesare pot fi utilizate fără consimțământ, deoarece sunt necesare pentru ca
        Site-ul web să funcționeze și pentru a furniza serviciile pe care le solicitați.
      </p>
      <p>
        11.4 Cookie-urile neesențiale, cum ar fi cele de analiză, marketing, direcționare și anumite
        cookie-uri funcționale, vor fi utilizate numai acolo unde legea permite și unde a fost obținut orice
        consimțământ necesar.
      </p>
      <p>
        11.5 Nu tratăm tăcerea, inactivitatea, casetele bifate în prealabil sau simpla continuare a navigării
        ca fiind consimțământ pentru cookie-urile neesențiale.
      </p>
      <p>
        11.6 Alegerea dumneavoastră privind cookie-urile poate fi stocată în browserul dumneavoastră folosind
        un cookie, stocarea locală sau o tehnologie similară, astfel încât să putem reține preferința
        dumneavoastră la vizitele viitoare.
      </p>
      <p>
        11.7 Vă puteți modifica sau retrage consimțământul în orice moment folosind instrumentul de setări
        pentru cookie-uri, acolo unde este disponibil, ștergând cookie-urile/stocarea locală din browser sau
        modificând setările browserului.
      </p>

      <h2>12. Gestionarea cookie-urilor prin browserul dumneavoastră</h2>
      <p>12.1 Majoritatea browserelor vă permit să gestionați cookie-urile prin setările browserului.</p>
      <p>12.2 În funcție de browserul dumneavoastră, este posibil să puteți:</p>
      <ul>
        <li>vizualiza cookie-urile stocate pe dispozitivul dumneavoastră;</li>
        <li>șterge cookie-urile;</li>
        <li>bloca toate cookie-urile;</li>
        <li>bloca cookie-urile terțe;</li>
        <li>seta preferințele privind cookie-urile pentru anumite site-uri web;</li>
        <li>primi alerte înainte ca cookie-urile să fie stocate.</li>
      </ul>
      <p>12.3 Blocarea sau ștergerea cookie-urilor poate afecta funcționalitatea Site-ului web.</p>
      <p>
        12.4 Dacă blocați cookie-urile strict necesare, este posibil să nu puteți utiliza funcțiile esențiale
        ale magazinului, cum ar fi coșul, finalizarea comenzii, autentificarea în cont, procesarea plăților
        sau funcțiile de securitate.
      </p>
      <p>
        12.5 Controalele browserului variază în funcție de furnizor. Ar trebui să consultați documentația de
        ajutor a browserului dumneavoastră pentru instrucțiuni privind gestionarea cookie-urilor.
      </p>

      <h2>13. Retragerea sau modificarea consimțământului</h2>
      <p>13.1 Vă puteți retrage sau modifica consimțământul pentru cookie-urile neesențiale în orice moment.</p>
      <p>13.2 Puteți face acest lucru prin:</p>
      <ul>
        <li>utilizarea instrumentului de setări sau preferințe pentru cookie-uri de pe Site-ul web, acolo unde este disponibil;</li>
        <li>ștergerea cookie-urilor și a stocării locale din browserul dumneavoastră;</li>
        <li>modificarea setărilor browserului;</li>
        <li>blocarea cookie-urilor terțe prin browserul dumneavoastră.</li>
      </ul>
      <p>
        13.3 Retragerea consimțământului nu afectează legalitatea utilizării cookie-urilor bazate pe
        consimțământ înainte de retragerea acestuia.
      </p>
      <p>
        13.4 După ce vă retrageți consimțământul, unele cookie-uri existente pot rămâne pe dispozitivul
        dumneavoastră până când le ștergeți sau până când expiră.
      </p>
      <p>
        13.5 Acolo unde este posibil din punct de vedere tehnic, vom înceta să setăm cookie-uri neesențiale
        după retragerea consimțământului.
      </p>

      <h2>14. Cookie-urile și datele cu caracter personal</h2>
      <p>
        14.1 Unele cookie-uri pot colecta informații care sunt date cu caracter personal sau care pot fi
        legate de date cu caracter personal, cum ar fi adresa IP, identificatorii dispozitivului, datele de
        sesiune de cont, comportamentul de navigare sau identificatorii online.
      </p>
      <p>
        14.2 Acolo unde cookie-urile implică date cu caracter personal, prelucrăm aceste date în conformitate
        cu Politica noastră de confidențialitate.
      </p>
      <p>
        14.3 Temeiul juridic pentru prelucrarea datelor cu caracter personal colectate prin cookie-uri depinde
        de categoria și scopul cookie-ului. Acesta poate include consimțământul, interesele legitime,
        necesitatea contractuală sau obligația legală.
      </p>
      <p>
        14.4 Mai multe informații despre modul în care prelucrăm datele cu caracter personal sunt disponibile
        în Politica noastră de confidențialitate.
      </p>

      <h2>15. Actualizări ale acestei Politici de cookie-uri</h2>
      <p>15.1 Putem actualiza această Politică de cookie-uri din când în când pentru a reflecta modificări în:</p>
      <ul>
        <li>cookie-urile pe care le utilizăm;</li>
        <li>funcționalitatea Site-ului web;</li>
        <li>instrumentele de finalizare a comenzii, plată, securitate sau analiză;</li>
        <li>tehnologiile de marketing;</li>
        <li>furnizorii terți;</li>
        <li>cerințele legale sau de reglementare;</li>
        <li>operațiunile noastre de afaceri.</li>
      </ul>
      <p>
        15.2 Când actualizăm această Politică de cookie-uri, vom revizui data &bdquo;Ultima actualizare&rdquo;
        din partea de sus a acestei pagini.
      </p>
      <p>
        15.3 Versiunea actualizată se va aplica de la data la care este publicată pe Site-ul web, cu excepția
        cazului în care se specifică altfel.
      </p>

      <h2>16. Informații de contact</h2>
      <p>
        Dacă aveți întrebări cu privire la această Politică de cookie-uri sau la utilizarea de către noi a
        cookie-urilor și a tehnologiilor similare, vă rugăm să ne contactați:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  hu: (
    <PolicyLayout title="Cookie-szabályzat" lastUpdated="2026. május 29.">
      <p>
        Ez a Cookie-szabályzat ismerteti, hogyan használ a MISARELIANA S.R.L., amely MisaElectro
        kereskedelmi néven működik, cookie-kat és hasonló technológiákat a www.misaelectro.ro oldalon.
      </p>
      <p>A weboldalt a következő üzemelteti:</p>
      <ContactBlock />
      <p>
        Ebben a Cookie-szabályzatban a &bdquo;MisaElectro&rdquo;, &bdquo;mi&rdquo; vagy &bdquo;miénk&rdquo; a
        MISARELIANA S.R.L. társaságot jelenti. Az &bdquo;Ön&rdquo; vagy &bdquo;Öné&rdquo; a weboldal bármely
        látogatóját, ügyfelét, fióktulajdonosát, üzleti ügyfelét vagy felhasználóját jelenti.
      </p>
      <p>
        Ezt a Cookie-szabályzatot az Adatvédelmi szabályzatunkkal együtt kell értelmezni, amely ismerteti,
        hogyan gyűjtjük, használjuk, tároljuk és védjük a személyes adatokat.
      </p>

      <h2>1. E Cookie-szabályzat hatálya</h2>
      <p>1.1 Ez a Cookie-szabályzat ismerteti:</p>
      <ul>
        <li>mik a cookie-k és a hasonló technológiák;</li>
        <li>milyen cookie-kategóriákat használunk;</li>
        <li>miért használjuk őket;</li>
        <li>mikor szükséges az Ön hozzájárulása;</li>
        <li>hogyan kezelheti vagy vonhatja vissza a cookie-beállításait.</li>
      </ul>
      <p>
        1.2 Ez a szabályzat a weboldalon használt cookie-kra és hasonló technológiákra vonatkozik, beleértve a
        bevásárlókosár funkcióhoz, a pénztárhoz, a fiókhozzáféréshez, a fizetés biztonságához, a
        pénznembeállításokhoz, az elemzéshez, a teljesítménymérshez és a marketinghez használt technológiákat,
        ahol ez alkalmazható.
      </p>
      <p>
        1.3 Használhatunk cookie-kat, pixeleket, címkéket, szkripteket, helyi tárolót, munkamenet-tárolót,
        szoftverfejlesztő készleteket és hasonló technológiákat. Az egyszerűség kedvéért ez a szabályzat ezeket
        a technológiákat együttesen &bdquo;cookie-knak&rdquo; nevezi.
      </p>

      <h2>2. Mik azok a cookie-k?</h2>
      <p>2.1 A cookie-k kis méretű szövegfájlok, amelyeket a webhely látogatásakor helyeznek el az eszközén.</p>
      <p>
        2.2 A cookie-k lehetővé teszik, hogy egy webhely felismerje az Ön böngészőjét vagy eszközét, és
        bizonyos információkat megjegyezzen, például a kosár tartalmát, a kiválasztott pénznemet, a
        fiók-munkamenetet, a nyelvi beállítást vagy a cookie-beállításokat.
      </p>
      <p>2.3 A cookie-k lehetnek:</p>
      <ul>
        <li>saját (first-party) cookie-k, amelyeket közvetlenül a MisaElectro állít be; vagy</li>
        <li>harmadik féltől származó (third-party) cookie-k, amelyeket olyan külső szolgáltatók állítanak be, akiknek a szolgáltatásait használjuk, például elemzési, fizetési, biztonsági, hirdetési vagy beágyazott szolgáltatók.</li>
      </ul>
      <p>2.4 A cookie-k továbbá lehetnek:</p>
      <ul>
        <li>munkamenet-cookie-k, amelyek a böngésző bezárásakor lejárnak; vagy</li>
        <li>állandó cookie-k, amelyek egy meghatározott ideig az eszközén maradnak, kivéve, ha korábban törli őket.</li>
      </ul>

      <h2>3. Hasonló technológiák</h2>
      <p>3.1 A cookie-kon kívül hasonló technológiákat is használhatunk, beleértve:</p>
      <ul>
        <li>helyi tárolót, amely információkat tárol az Ön böngészőjében;</li>
        <li>munkamenet-tárolót, amely egy böngésző-munkamenet során tárol információkat;</li>
        <li>pixeleket és címkéket, amelyek segítenek mérni a tevékenységet vagy támogatják a marketinget, ahol ezeket használják;</li>
        <li>szkripteket, amelyek támogatják a weboldal funkcióit, az elemzést, a biztonságot vagy az integrációkat.</li>
      </ul>
      <p>
        3.2 Ezek a technológiák a cookie-khoz hasonló célokra használhatók, és e szabályzat hatálya alá
        tartoznak, amennyiben információkat tárolnak vagy azokhoz hozzáférnek az Ön eszközén.
      </p>

      <h2>4. Az általunk használt cookie-kategóriák</h2>
      <p>A következő cookie-kategóriákat használjuk.</p>

      <h2>5. Feltétlenül szükséges cookie-k</h2>
      <p>5.1 A feltétlenül szükséges cookie-k szükségesek ahhoz, hogy a weboldal megfelelően működjön.</p>
      <p>5.2 Ezek a cookie-k olyan alapvető funkciókat tesznek lehetővé, mint például:</p>
      <ul>
        <li>oldalnavigáció;</li>
        <li>bevásárlókosár funkció;</li>
        <li>pénztár;</li>
        <li>fizetési biztonság;</li>
        <li>fiókba való bejelentkezés;</li>
        <li>csalásmegelőzés;</li>
        <li>rendelésfeldolgozás;</li>
        <li>pénznem megjelenítése;</li>
        <li>cookie-beállítások tárolása;</li>
        <li>weboldal biztonsága;</li>
        <li>terheléselosztás és technikai stabilitás.</li>
      </ul>
      <p>
        5.3 Ezek a cookie-k nem igénylik az Ön hozzájárulását, mivel az Ön által kért szolgáltatás nyújtásához
        szükségesek.
      </p>
      <p>
        5.4 Ha a böngésző beállításain keresztül letiltja a feltétlenül szükséges cookie-kat, előfordulhat,
        hogy a weboldal egyes részei nem működnek megfelelően. Előfordulhat, hogy nem tud terméket a kosárba
        helyezni, befejezni a pénztárt, bejelentkezni vagy használni az alapvető áruházi funkciókat.
      </p>
      <p><strong>Példák a feltétlenül szükséges cookie-kra</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / technológia</th>
            <th>Cél</th>
            <th>Jellemző időtartam</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Kosár-cookie vagy helyi tároló</td><td>Megjegyzi a bevásárlókosárba helyezett termékeket</td><td>Munkamenet vagy korlátozott állandó időszak</td></tr>
          <tr><td>Pénztár-munkamenet cookie</td><td>Támogatja a biztonságos pénztárt és a rendelés befejezését</td><td>Munkamenet</td></tr>
          <tr><td>Fiók-munkamenet cookie</td><td>Bejelentkezve tartja Önt a látogatás során</td><td>Munkamenet vagy korlátozott állandó időszak</td></tr>
          <tr><td>Pénznem-beállítás cookie</td><td>Megjegyzi a kiválasztott megjelenítési pénznemet, például EUR, RON vagy HUF</td><td>Korlátozott állandó időszak</td></tr>
          <tr><td>Cookie-hozzájárulási beállítás</td><td>Tárolja a cookie-választásait, hogy a jövőbeni látogatások során tiszteletben tarthassuk azokat</td><td>Korlátozott állandó időszak</td></tr>
          <tr><td>Biztonsági cookie</td><td>Segít megvédeni a weboldalt a csalástól, visszaéléstől, botoktól vagy jogosulatlan tevékenységtől</td><td>Munkamenet vagy korlátozott állandó időszak</td></tr>
        </tbody>
      </table>

      <h2>6. Funkcionális cookie-k</h2>
      <p>6.1 A funkcionális cookie-k segítenek a weboldal továbbfejlesztett funkcióinak és a személyre szabásnak a biztosításában.</p>
      <p>6.2 Ezek a cookie-k megjegyezhetik az Ön döntéseit, például:</p>
      <ul>
        <li>preferált pénznem;</li>
        <li>nyelvi vagy régióbeállítások;</li>
        <li>nemrég megtekintett termékek;</li>
        <li>fiókbeállítások;</li>
        <li>mentett megjelenítési beállítások;</li>
        <li>támogatási csevegési beállítások, ahol ez alkalmazható.</li>
      </ul>
      <p>
        6.3 Egyes funkcionális cookie-k fontosak lehetnek a zökkenőmentes vásárlási élményhez, de nem
        mindegyik feltétlenül szükséges.
      </p>
      <p>
        6.4 Ahol a jogszabály előírja, a nem alapvető funkcionális cookie-kat csak az Ön hozzájárulásával
        használjuk.
      </p>
      <p><strong>Példák a funkcionális cookie-kra</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / technológia</th>
            <th>Cél</th>
            <th>Jellemző időtartam</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Nemrég megtekintett termékek</td><td>Segít megjeleníteni a nemrég megtekintett termékeket</td><td>Korlátozott állandó időszak</td></tr>
          <tr><td>Beállítások tárolása</td><td>Megjegyzi az opcionális megjelenítési vagy böngészési beállításokat</td><td>Korlátozott állandó időszak</td></tr>
          <tr><td>Támogatási eszköz cookie</td><td>Segít fenntartani egy támogatási csevegést vagy segítségnyújtási munkamenetet, ahol elérhető</td><td>Munkamenet vagy korlátozott állandó időszak</td></tr>
        </tbody>
      </table>

      <h2>7. Elemzési és teljesítmény-cookie-k</h2>
      <p>7.1 Az elemzési és teljesítmény-cookie-k segítenek megérteni, hogyan használják a látogatók a weboldalt.</p>
      <p>7.2 Ezek a cookie-k segíthetnek mérni:</p>
      <ul>
        <li>mely oldalakat látogatják;</li>
        <li>hogyan mozognak a látogatók a weboldalon;</li>
        <li>mely termékeket vagy kategóriákat tekintik meg;</li>
        <li>hogyan lépnek kapcsolatba az ügyfelek a pénztárral;</li>
        <li>a weboldal sebességét és teljesítményét;</li>
        <li>hibákat, hibás oldalakat vagy technikai problémákat;</li>
        <li>a weboldal fejlesztéseinek hatékonyságát.</li>
      </ul>
      <p>
        7.3 Az elemzési adatok segítenek javítani a weboldal működését, a felhasználói élményt, a
        termékbemutatást, a navigációt és az áruház teljesítményét.
      </p>
      <p>
        7.4 Az elemzési cookie-k nem elengedhetetlenek a vásárlás befejezéséhez. Ahol a jogszabály előírja, az
        elemzési cookie-kat csak az Ön hozzájárulásával használjuk.
      </p>
      <p>
        7.5 Az elemzési információk összesíthetők vagy álnevesíthetők, de a használt eszköztől függően továbbra
        is érinthetnek személyes adatokat, például IP-címet, eszközazonosítókat vagy online azonosítókat.
      </p>
      <p><strong>Példák az elemzési és teljesítmény-cookie-kra</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / technológia</th>
            <th>Cél</th>
            <th>Jellemző időtartam</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Weboldal-elemzési cookie</td><td>Méri a látogatásokat, oldalmegtekintéseket és a felhasználói útvonalakat</td><td>Általában 12&ndash;26 hónap</td></tr>
          <tr><td>Teljesítményfigyelő cookie</td><td>Segít azonosítani a technikai problémákat és a weboldal teljesítményével kapcsolatos problémákat</td><td>Munkamenet vagy korlátozott állandó időszak</td></tr>
          <tr><td>Konverziómérő cookie</td><td>Segít megérteni, hogy a weboldal fejlesztései vagy a kampányok vásárláshoz vezetnek-e</td><td>Korlátozott állandó időszak</td></tr>
        </tbody>
      </table>

      <h2>8. Marketing- és célzási cookie-k</h2>
      <p>
        8.1 A marketing- és célzási cookie-k releváns hirdetések megjelenítésére, a hirdetési teljesítmény
        mérésére, az ismétlődő hirdetések korlátozására, közönségszegmensek kialakítására vagy annak
        megértésére használhatók, hogy a felhasználók hogyan lépnek kapcsolatba a marketingkampányokkal.
      </p>
      <p>
        8.2 Ezeket a cookie-kat a MisaElectro vagy harmadik féltől származó hirdetési és marketingpartnerek
        állíthatják be.
      </p>
      <p>
        8.3 A marketing-cookie-k nyomon követhetik az Ön böngészési tevékenységét a webhelyeken keresztül, és
        felhasználhatók az Ön érdeklődési köréről szóló profil létrehozására.
      </p>
      <p>
        8.4 Marketing- vagy célzási cookie-kat csak ott használunk, ahol azok a weboldalon engedélyezve
        vannak, és ahol Ön hozzájárulást adott, amennyiben a jogszabály ezt előírja.
      </p>
      <p>
        8.5 Ha elutasítja a marketing-cookie-kat, előfordulhat, hogy továbbra is lát hirdetéseket, de azok
        kevésbé relevánsak vagy kevésbé személyre szabottak lehetnek.
      </p>
      <p><strong>Példák a marketing- és célzási cookie-kra</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / technológia</th>
            <th>Cél</th>
            <th>Jellemző időtartam</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Hirdetési pixel</td><td>Méri a hirdetési teljesítményt és a felhasználói interakciókat</td><td>Korlátozott állandó időszak</td></tr>
          <tr><td>Újracélzási cookie</td><td>Segít releváns hirdetéseket megjeleníteni, miután elhagyta a weboldalt</td><td>Korlátozott állandó időszak</td></tr>
          <tr><td>Kampánykövető cookie</td><td>Segít mérni a kampányok és promóciók hatékonyságát</td><td>Korlátozott állandó időszak</td></tr>
        </tbody>
      </table>

      <h2>9. Fizetési, pénztári és biztonsági technológiák</h2>
      <p>
        9.1 A pénztár során a cookie-kat és hasonló technológiákat a fizetésfeldolgozók, a csalásmegelőzési
        szolgáltatók, a kártyás fizetési rendszerek és a biztonsági eszközök használhatnak.
      </p>
      <p>9.2 Ezek a technológiák szükségesek lehetnek a következőkhöz:</p>
      <ul>
        <li>a Visa és Mastercard fizetések feldolgozása;</li>
        <li>a csalárd tranzakciók elleni védelem;</li>
        <li>a pénztár-munkamenetek ellenőrzése;</li>
        <li>a jogosulatlan tevékenység megakadályozása;</li>
        <li>a biztonságos fizetési hitelesítés támogatása;</li>
        <li>a gyanús viselkedés észlelése;</li>
        <li>a fizetésbiztonsági követelmények betartása.</li>
      </ul>
      <p>
        9.3 Egyes fizetési és biztonsági cookie-k feltétlenül szükségesek a pénztárhoz és a
        csalásmegelőzéshez. Másokat az érintett harmadik fél szolgáltató irányíthat.
      </p>
      <p>9.4 A MisaElectro nem tárolja az Ön teljes kártyaszámát vagy a kártya teljes biztonsági kódját.</p>

      <h2>10. Harmadik féltől származó cookie-k</h2>
      <p>10.1 Egyes cookie-kat harmadik féltől származó szolgáltatók állíthatnak be, amelyek támogatják a weboldalunkat.</p>
      <p>10.2 A harmadik féltől származó szolgáltatók a következők lehetnek:</p>
      <ul>
        <li>fizetésfeldolgozók;</li>
        <li>csalásmegelőzési szolgáltatók;</li>
        <li>elemzési szolgáltatók;</li>
        <li>hirdetési és marketingszolgáltatók;</li>
        <li>tárhely-, teljesítmény- és biztonsági szolgáltatók;</li>
        <li>ügyféltámogatási vagy kommunikációs eszközök;</li>
        <li>beágyazott tartalomszolgáltatók;</li>
        <li>közösségi média platformok, ahol ez alkalmazható.</li>
      </ul>
      <p>
        10.3 A harmadik féltől származó cookie-kat az érintett harmadik fél irányítja. Használatuk az adott
        harmadik fél saját adatvédelmi és cookie-szabályzatának hatálya alá tartozik.
      </p>
      <p>
        10.4 Nem irányítjuk az összes harmadik féltől származó cookie-t azok beállítása után, de arra
        törekszünk, hogy jó hírű szolgáltatókkal működjünk együtt, és ahol lehetséges, adatvédelmi
        szempontból tudatos módon konfiguráljuk a cookie-kat.
      </p>
      <p>
        10.5 Ahol a harmadik féltől származó cookie-k nem feltétlenül szükségesek, azokat csak akkor szabad
        használni, ha a megfelelő hozzájárulást megszerezték.
      </p>

      <h2>11. Cookie-hozzájárulás</h2>
      <p>11.1 Amikor először látogatja meg a weboldalt, előfordulhat, hogy egy cookie-sávot vagy hozzájárulási eszközt jelenítünk meg Önnek.</p>
      <p>11.2 A cookie-sáv lehetővé teheti Önnek, hogy:</p>
      <ul>
        <li>elfogadja az összes cookie-t;</li>
        <li>elutasítsa a nem alapvető cookie-kat;</li>
        <li>testre szabja a cookie-beállításait;</li>
        <li>többet megtudjon a használt cookie-kategóriákról.</li>
      </ul>
      <p>
        11.3 A feltétlenül szükséges cookie-k hozzájárulás nélkül is használhatók, mivel szükségesek ahhoz,
        hogy a weboldal működjön, és hogy biztosítsuk az Ön által kért szolgáltatásokat.
      </p>
      <p>
        11.4 A nem alapvető cookie-kat, például az elemzési, marketing-, célzási és bizonyos funkcionális
        cookie-kat csak ott használjuk, ahol a jogszabály megengedi, és ahol a szükséges hozzájárulást
        megszerezték.
      </p>
      <p>
        11.5 A hallgatást, az inaktivitást, az előre bejelölt jelölőnégyzeteket vagy a böngészés folytatását
        önmagában nem tekintjük a nem alapvető cookie-khoz való hozzájárulásnak.
      </p>
      <p>
        11.6 A cookie-kra vonatkozó választását a böngészőjében cookie, helyi tároló vagy hasonló technológia
        segítségével tárolhatjuk, hogy a jövőbeni látogatások során megjegyezhessük a beállítását.
      </p>
      <p>
        11.7 Bármikor módosíthatja vagy visszavonhatja hozzájárulását a cookie-beállítási eszköz
        segítségével, ahol elérhető, a böngésző cookie-jainak/helyi tárolójának törlésével vagy a böngésző
        beállításainak módosításával.
      </p>

      <h2>12. Cookie-k kezelése a böngészőn keresztül</h2>
      <p>12.1 A legtöbb böngésző lehetővé teszi a cookie-k kezelését a böngésző beállításain keresztül.</p>
      <p>12.2 A böngészőtől függően előfordulhat, hogy a következőket teheti:</p>
      <ul>
        <li>megtekintheti az eszközén tárolt cookie-kat;</li>
        <li>törölheti a cookie-kat;</li>
        <li>blokkolhatja az összes cookie-t;</li>
        <li>blokkolhatja a harmadik féltől származó cookie-kat;</li>
        <li>cookie-beállításokat állíthat be adott webhelyekhez;</li>
        <li>értesítéseket kaphat, mielőtt a cookie-kat tárolnák.</li>
      </ul>
      <p>12.3 A cookie-k blokkolása vagy törlése befolyásolhatja a weboldal működését.</p>
      <p>
        12.4 Ha blokkolja a feltétlenül szükséges cookie-kat, előfordulhat, hogy nem tudja használni az
        alapvető áruházi funkciókat, például a kosarat, a pénztárt, a fiókba való bejelentkezést, a
        fizetésfeldolgozást vagy a biztonsági funkciókat.
      </p>
      <p>
        12.5 A böngésző vezérlői szolgáltatónként eltérőek. A cookie-k kezelésével kapcsolatos utasításokért
        tekintse meg böngészője súgódokumentációját.
      </p>

      <h2>13. A hozzájárulás visszavonása vagy módosítása</h2>
      <p>13.1 Bármikor visszavonhatja vagy módosíthatja a nem alapvető cookie-khoz való hozzájárulását.</p>
      <p>13.2 Ezt a következőképpen teheti meg:</p>
      <ul>
        <li>a weboldalon található cookie-beállítási vagy preferenciaeszköz használatával, ahol elérhető;</li>
        <li>a cookie-k és a helyi tároló törlésével a böngészőjében;</li>
        <li>a böngésző beállításainak módosításával;</li>
        <li>a harmadik féltől származó cookie-k blokkolásával a böngészőjében.</li>
      </ul>
      <p>
        13.3 A hozzájárulás visszavonása nem érinti a hozzájáruláson alapuló cookie-használat jogszerűségét a
        visszavonás előtti időszakban.
      </p>
      <p>
        13.4 A hozzájárulás visszavonása után egyes meglévő cookie-k az eszközén maradhatnak, amíg nem törli
        őket, vagy amíg le nem járnak.
      </p>
      <p>
        13.5 Ahol technikailag lehetséges, a hozzájárulás visszavonása után megszüntetjük a nem alapvető
        cookie-k beállítását.
      </p>

      <h2>14. Cookie-k és személyes adatok</h2>
      <p>
        14.1 Egyes cookie-k olyan információkat gyűjthetnek, amelyek személyes adatok, vagy amelyek személyes
        adatokhoz köthetők, például IP-cím, eszközazonosítók, fiók-munkamenet adatok, böngészési viselkedés
        vagy online azonosítók.
      </p>
      <p>
        14.2 Ahol a cookie-k személyes adatokat érintenek, ezeket az adatokat az Adatvédelmi szabályzatunknak
        megfelelően kezeljük.
      </p>
      <p>
        14.3 A cookie-k révén gyűjtött személyes adatok kezelésének jogalapja a cookie kategóriájától és
        céljától függ. Ez magában foglalhatja a hozzájárulást, a jogos érdeket, a szerződéses szükségességet
        vagy a jogi kötelezettséget.
      </p>
      <p>
        14.4 A személyes adatok kezelésének módjáról további információ az Adatvédelmi szabályzatunkban
        található.
      </p>

      <h2>15. E Cookie-szabályzat frissítései</h2>
      <p>15.1 Ezt a Cookie-szabályzatot időről időre frissíthetjük, hogy tükrözze a következőkben bekövetkező változásokat:</p>
      <ul>
        <li>az általunk használt cookie-k;</li>
        <li>a weboldal működése;</li>
        <li>a pénztári, fizetési, biztonsági vagy elemzési eszközök;</li>
        <li>a marketingtechnológiák;</li>
        <li>a harmadik féltől származó szolgáltatók;</li>
        <li>a jogi vagy szabályozási követelmények;</li>
        <li>üzleti tevékenységünk.</li>
      </ul>
      <p>
        15.2 Amikor frissítjük ezt a Cookie-szabályzatot, felülvizsgáljuk az oldal tetején található
        &bdquo;Utolsó frissítés&rdquo; dátumot.
      </p>
      <p>
        15.3 A frissített változat a weboldalon való közzététel napjától érvényes, kivéve, ha másként
        rendelkeznek.
      </p>

      <h2>16. Kapcsolattartási adatok</h2>
      <p>
        Ha bármilyen kérdése van ezzel a Cookie-szabályzattal vagy a cookie-k és hasonló technológiák
        használatával kapcsolatban, kérjük, vegye fel velünk a kapcsolatot:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  bg: (
    <PolicyLayout title="Политика за бисквитки" lastUpdated="29 май 2026 г.">
      <p>
        Тази Политика за бисквитки обяснява как MISARELIANA S.R.L., извършваща дейност под търговското
        наименование MisaElectro, използва бисквитки и подобни технологии на www.misaelectro.ro.
      </p>
      <p>Уебсайтът се управлява от:</p>
      <ContactBlock />
      <p>
        В тази Политика за бисквитки &bdquo;MisaElectro&ldquo;, &bdquo;ние&ldquo;, &bdquo;нас&ldquo; или
        &bdquo;наш&ldquo; означава MISARELIANA S.R.L.. &bdquo;Вие&ldquo; или &bdquo;ваш&ldquo; означава всеки
        посетител, клиент, притежател на акаунт, бизнес клиент или потребител на Уебсайта.
      </p>
      <p>
        Тази Политика за бисквитки следва да се чете заедно с нашата Политика за поверителност, която обяснява
        как събираме, използваме, съхраняваме и защитаваме личните данни.
      </p>

      <h2>1. Обхват на тази Политика за бисквитки</h2>
      <p>1.1 Тази Политика за бисквитки обяснява:</p>
      <ul>
        <li>какво представляват бисквитките и подобните технологии;</li>
        <li>какви категории бисквитки използваме;</li>
        <li>защо ги използваме;</li>
        <li>кога е необходимо вашето съгласие;</li>
        <li>как можете да управлявате или оттеглите предпочитанията си за бисквитки.</li>
      </ul>
      <p>
        1.2 Тази Политика се прилага за бисквитки и подобни технологии, използвани на Уебсайта, включително
        технологии, използвани за функционалността на количката за пазаруване, плащането, достъпа до акаунт,
        сигурността на плащанията, предпочитанията за валута, анализа, измерването на производителността и
        маркетинга, когато е приложимо.
      </p>
      <p>
        1.3 Може да използваме бисквитки, пиксели, тагове, скриптове, локално хранилище, хранилище на сесията,
        комплекти за разработка на софтуер и подобни технологии. За опростяване тази Политика се позовава на
        тези технологии колективно като &bdquo;бисквитки&ldquo;.
      </p>

      <h2>2. Какво представляват бисквитките?</h2>
      <p>2.1 Бисквитките са малки текстови файлове, поставяни на вашето устройство, когато посещавате уебсайт.</p>
      <p>
        2.2 Бисквитките позволяват на уебсайта да разпознае вашия браузър или устройство и да запомни
        определена информация, като съдържанието на вашата количка, избраната валута, сесията на акаунта,
        предпочитанието за език или настройките за бисквитки.
      </p>
      <p>2.3 Бисквитките могат да бъдат:</p>
      <ul>
        <li>собствени (first-party) бисквитки, зададени директно от MisaElectro; или</li>
        <li>бисквитки на трети страни (third-party), зададени от външни доставчици, чиито услуги използваме, като доставчици на анализ, плащания, сигурност, реклама или вградени услуги.</li>
      </ul>
      <p>2.4 Бисквитките могат също да бъдат:</p>
      <ul>
        <li>сесийни бисквитки, които изтичат при затваряне на вашия браузър; или</li>
        <li>постоянни бисквитки, които остават на вашето устройство за определен период, освен ако не ги изтриете по-рано.</li>
      </ul>

      <h2>3. Подобни технологии</h2>
      <p>3.1 Освен бисквитки, може да използваме подобни технологии, включително:</p>
      <ul>
        <li>локално хранилище, което съхранява информация във вашия браузър;</li>
        <li>хранилище на сесията, което съхранява информация по време на сесия на браузъра;</li>
        <li>пиксели и тагове, които помагат за измерване на активността или подпомагат маркетинга, когато се използват;</li>
        <li>скриптове, които подпомагат функционалността на Уебсайта, анализа, сигурността или интеграциите.</li>
      </ul>
      <p>
        3.2 Тези технологии могат да се използват за цели, подобни на тези на бисквитките, и са обхванати от
        тази Политика, когато съхраняват или осъществяват достъп до информация на вашето устройство.
      </p>

      <h2>4. Категории бисквитки, които използваме</h2>
      <p>Използваме следните категории бисквитки.</p>

      <h2>5. Строго необходими бисквитки</h2>
      <p>5.1 Строго необходимите бисквитки са задължителни, за да работи Уебсайтът правилно.</p>
      <p>5.2 Тези бисквитки позволяват основни функции, като:</p>
      <ul>
        <li>навигация в страниците;</li>
        <li>функционалност на количката за пазаруване;</li>
        <li>плащане;</li>
        <li>сигурност на плащанията;</li>
        <li>вход в акаунт;</li>
        <li>предотвратяване на измами;</li>
        <li>обработка на поръчки;</li>
        <li>показване на валута;</li>
        <li>съхраняване на предпочитанията за бисквитки;</li>
        <li>сигурност на Уебсайта;</li>
        <li>балансиране на натоварването и техническа стабилност.</li>
      </ul>
      <p>
        5.3 Тези бисквитки не изискват вашето съгласие, тъй като са необходими за предоставянето на услугата,
        която заявявате.
      </p>
      <p>
        5.4 Ако деактивирате строго необходимите бисквитки чрез настройките на вашия браузър, части от
        Уебсайта може да не работят правилно. Може да не успеете да добавите продукти в количката си, да
        завършите плащането, да влезете или да използвате основните функции на магазина.
      </p>
      <p><strong>Примери за строго необходими бисквитки</strong></p>
      <table>
        <thead>
          <tr>
            <th>Бисквитка / технология</th>
            <th>Цел</th>
            <th>Обичайна продължителност</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Бисквитка за количка или локално хранилище</td><td>Запомня продуктите, добавени във вашата количка за пазаруване</td><td>Сесия или ограничен постоянен период</td></tr>
          <tr><td>Сесийна бисквитка за плащане</td><td>Подпомага сигурното плащане и завършването на поръчката</td><td>Сесия</td></tr>
          <tr><td>Сесийна бисквитка за акаунт</td><td>Поддържа ви в системата по време на вашето посещение</td><td>Сесия или ограничен постоянен период</td></tr>
          <tr><td>Бисквитка за предпочитание за валута</td><td>Запомня избраната от вас валута за показване, като EUR, RON или HUF</td><td>Ограничен постоянен период</td></tr>
          <tr><td>Предпочитание за съгласие за бисквитки</td><td>Съхранява вашия избор за бисквитки, за да можем да го спазваме при бъдещи посещения</td><td>Ограничен постоянен период</td></tr>
          <tr><td>Бисквитка за сигурност</td><td>Помага за защита на Уебсайта от измами, злоупотреби, ботове или неоторизирана дейност</td><td>Сесия или ограничен постоянен период</td></tr>
        </tbody>
      </table>

      <h2>6. Функционални бисквитки</h2>
      <p>6.1 Функционалните бисквитки помагат за предоставяне на подобрени функции на Уебсайта и персонализация.</p>
      <p>6.2 Тези бисквитки могат да запомнят избора, който правите, като:</p>
      <ul>
        <li>предпочитана валута;</li>
        <li>настройки за език или регион;</li>
        <li>наскоро разгледани продукти;</li>
        <li>предпочитания за акаунт;</li>
        <li>запазени настройки за показване;</li>
        <li>предпочитания за чат за поддръжка, когато е приложимо.</li>
      </ul>
      <p>
        6.3 Някои функционални бисквитки могат да бъдат важни за безпроблемно пазаруване, но не всички от тях
        са строго необходими.
      </p>
      <p>
        6.4 Когато законът изисква това, ще използваме несъществени функционални бисквитки само с вашето
        съгласие.
      </p>
      <p><strong>Примери за функционални бисквитки</strong></p>
      <table>
        <thead>
          <tr>
            <th>Бисквитка / технология</th>
            <th>Цел</th>
            <th>Обичайна продължителност</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Наскоро разгледани продукти</td><td>Помага за показване на продуктите, които сте разгледали наскоро</td><td>Ограничен постоянен период</td></tr>
          <tr><td>Съхраняване на предпочитания</td><td>Запомня незадължителни предпочитания за показване или разглеждане</td><td>Ограничен постоянен период</td></tr>
          <tr><td>Бисквитка за инструмент за поддръжка</td><td>Помага за поддържане на чат за поддръжка или сесия за помощ, когато е налична</td><td>Сесия или ограничен постоянен период</td></tr>
        </tbody>
      </table>

      <h2>7. Бисквитки за анализ и производителност</h2>
      <p>7.1 Бисквитките за анализ и производителност ни помагат да разберем как посетителите използват Уебсайта.</p>
      <p>7.2 Тези бисквитки могат да ни помогнат да измерим:</p>
      <ul>
        <li>кои страници се посещават;</li>
        <li>как посетителите се придвижват през Уебсайта;</li>
        <li>кои продукти или категории се разглеждат;</li>
        <li>как клиентите взаимодействат с плащането;</li>
        <li>скоростта и производителността на Уебсайта;</li>
        <li>грешки, повредени страници или технически проблеми;</li>
        <li>ефективността на подобренията на Уебсайта.</li>
      </ul>
      <p>
        7.3 Данните от анализа ни помагат да подобрим функционалността на Уебсайта, потребителското
        изживяване, представянето на продуктите, навигацията и производителността на магазина.
      </p>
      <p>
        7.4 Бисквитките за анализ не са от съществено значение за завършване на покупка. Когато законът изисква
        това, ще използваме бисквитки за анализ само с вашето съгласие.
      </p>
      <p>
        7.5 Информацията от анализа може да бъде обобщена или псевдонимизирана, но все пак може да включва
        лични данни, като IP адрес, идентификатори на устройства или онлайн идентификатори, в зависимост от
        използвания инструмент.
      </p>
      <p><strong>Примери за бисквитки за анализ и производителност</strong></p>
      <table>
        <thead>
          <tr>
            <th>Бисквитка / технология</th>
            <th>Цел</th>
            <th>Обичайна продължителност</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Бисквитка за анализ на Уебсайта</td><td>Измерва посещенията, прегледите на страници и потребителските пътувания</td><td>Обикновено 12&ndash;26 месеца</td></tr>
          <tr><td>Бисквитка за наблюдение на производителността</td><td>Помага за идентифициране на технически проблеми и проблеми с производителността на Уебсайта</td><td>Сесия или ограничен постоянен период</td></tr>
          <tr><td>Бисквитка за измерване на реализациите</td><td>Помага да се разбере дали подобренията на Уебсайта или кампаниите водят до покупки</td><td>Ограничен постоянен период</td></tr>
        </tbody>
      </table>

      <h2>8. Бисквитки за маркетинг и таргетиране</h2>
      <p>
        8.1 Бисквитките за маркетинг и таргетиране могат да се използват за предоставяне на релевантна реклама,
        измерване на рекламната ефективност, ограничаване на повтарящи се реклами, изграждане на сегменти от
        аудиторията или разбиране как потребителите взаимодействат с маркетинговите кампании.
      </p>
      <p>
        8.2 Тези бисквитки могат да бъдат зададени от MisaElectro или от рекламни и маркетингови партньори,
        трети страни.
      </p>
      <p>
        8.3 Маркетинговите бисквитки могат да проследяват вашата активност на сърфиране в различни уебсайтове и
        могат да се използват за създаване на профил на вашите интереси.
      </p>
      <p>
        8.4 Ще използваме маркетингови или таргетиращи бисквитки само там, където те са активирани на Уебсайта
        и където сте дали съгласие, когато законът изисква това.
      </p>
      <p>
        8.5 Ако отхвърлите маркетинговите бисквитки, все още може да виждате реклами, но те може да бъдат
        по-малко релевантни или по-малко персонализирани.
      </p>
      <p><strong>Примери за бисквитки за маркетинг и таргетиране</strong></p>
      <table>
        <thead>
          <tr>
            <th>Бисквитка / технология</th>
            <th>Цел</th>
            <th>Обичайна продължителност</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Рекламен пиксел</td><td>Измерва рекламната ефективност и потребителските взаимодействия</td><td>Ограничен постоянен период</td></tr>
          <tr><td>Бисквитка за ретаргетиране</td><td>Помага да се показват релевантни реклами, след като напуснете Уебсайта</td><td>Ограничен постоянен период</td></tr>
          <tr><td>Бисквитка за проследяване на кампании</td><td>Помага за измерване на ефективността на кампаниите и промоциите</td><td>Ограничен постоянен период</td></tr>
        </tbody>
      </table>

      <h2>9. Технологии за плащане, плащане на поръчка и сигурност</h2>
      <p>
        9.1 По време на плащането бисквитките и подобните технологии могат да се използват от обработващите
        плащания, доставчиците за предотвратяване на измами, системите за плащане с карти и инструментите за
        сигурност.
      </p>
      <p>9.2 Тези технологии могат да бъдат необходими за:</p>
      <ul>
        <li>обработка на плащания с Visa и Mastercard;</li>
        <li>защита срещу измамни транзакции;</li>
        <li>потвърждаване на сесиите за плащане;</li>
        <li>предотвратяване на неоторизирана дейност;</li>
        <li>подпомагане на сигурна автентикация на плащанията;</li>
        <li>откриване на подозрително поведение;</li>
        <li>спазване на изискванията за сигурност на плащанията.</li>
      </ul>
      <p>
        9.3 Някои бисквитки за плащане и сигурност са строго необходими за плащането и предотвратяването на
        измами. Други могат да се контролират от съответния доставчик, трета страна.
      </p>
      <p>9.4 MisaElectro не съхранява пълния номер на вашата карта или пълния код за сигурност на картата.</p>

      <h2>10. Бисквитки на трети страни</h2>
      <p>10.1 Някои бисквитки могат да бъдат зададени от доставчици, трети страни, които подпомагат нашия Уебсайт.</p>
      <p>10.2 Доставчиците, трети страни, могат да включват:</p>
      <ul>
        <li>обработващи плащания;</li>
        <li>доставчици за предотвратяване на измами;</li>
        <li>доставчици на анализ;</li>
        <li>доставчици на реклама и маркетинг;</li>
        <li>доставчици на хостинг, производителност и сигурност;</li>
        <li>инструменти за поддръжка на клиенти или комуникация;</li>
        <li>доставчици на вградено съдържание;</li>
        <li>платформи за социални медии, когато е приложимо.</li>
      </ul>
      <p>
        10.3 Бисквитките на трети страни се контролират от съответната трета страна. Тяхното използване е
        предмет на собствените политики за поверителност и бисквитки на тази трета страна.
      </p>
      <p>
        10.4 Ние не контролираме всички бисквитки на трети страни, след като бъдат зададени, но се стремим да
        работим с реномирани доставчици и да конфигурираме бисквитките по начин, съобразен с поверителността,
        където е възможно.
      </p>
      <p>
        10.5 Когато бисквитките на трети страни не са строго необходими, те трябва да се използват само когато
        е получено подходящо съгласие.
      </p>

      <h2>11. Съгласие за бисквитки</h2>
      <p>11.1 Когато посетите Уебсайта за първи път, може да ви бъде показан банер за бисквитки или инструмент за съгласие.</p>
      <p>11.2 Банерът за бисквитки може да ви позволи да:</p>
      <ul>
        <li>приемете всички бисквитки;</li>
        <li>отхвърлите несъществените бисквитки;</li>
        <li>персонализирате предпочитанията си за бисквитки;</li>
        <li>научите повече за категориите използвани бисквитки.</li>
      </ul>
      <p>
        11.3 Строго необходимите бисквитки могат да се използват без съгласие, тъй като са необходими, за да
        функционира Уебсайтът и за да предоставя услугите, които заявявате.
      </p>
      <p>
        11.4 Несъществените бисквитки, като бисквитки за анализ, маркетинг, таргетиране и определени
        функционални бисквитки, ще се използват само там, където законът позволява, и където е получено всяко
        необходимо съгласие.
      </p>
      <p>
        11.5 Ние не третираме мълчанието, бездействието, предварително отметнатите полета или самото
        продължаване на сърфирането като съгласие за несъществени бисквитки.
      </p>
      <p>
        11.6 Вашият избор за бисквитки може да бъде съхранен във вашия браузър чрез бисквитка, локално
        хранилище или подобна технология, за да можем да запомним вашето предпочитание при бъдещи посещения.
      </p>
      <p>
        11.7 Можете да промените или оттеглите съгласието си по всяко време, като използвате инструмента за
        настройки на бисквитки, където е наличен, като изчистите бисквитките/локалното хранилище на вашия
        браузър или като промените настройките на браузъра си.
      </p>

      <h2>12. Управление на бисквитките чрез вашия браузър</h2>
      <p>12.1 Повечето браузъри ви позволяват да управлявате бисквитките чрез настройките на браузъра.</p>
      <p>12.2 В зависимост от вашия браузър може да успеете да:</p>
      <ul>
        <li>прегледате бисквитките, съхранени на вашето устройство;</li>
        <li>изтриете бисквитки;</li>
        <li>блокирате всички бисквитки;</li>
        <li>блокирате бисквитки на трети страни;</li>
        <li>зададете предпочитания за бисквитки за конкретни уебсайтове;</li>
        <li>получавате известия, преди бисквитките да бъдат съхранени.</li>
      </ul>
      <p>12.3 Блокирането или изтриването на бисквитки може да засегне функционалността на Уебсайта.</p>
      <p>
        12.4 Ако блокирате строго необходимите бисквитки, може да не успеете да използвате основните функции на
        магазина, като количка, плащане, вход в акаунт, обработка на плащания или функции за сигурност.
      </p>
      <p>
        12.5 Контролите на браузъра варират в зависимост от доставчика. Трябва да се обърнете към помощната
        документация на вашия браузър за инструкции относно управлението на бисквитките.
      </p>

      <h2>13. Оттегляне или промяна на съгласието</h2>
      <p>13.1 Можете да оттеглите или промените съгласието си за несъществени бисквитки по всяко време.</p>
      <p>13.2 Можете да направите това чрез:</p>
      <ul>
        <li>използване на инструмента за настройки или предпочитания за бисквитки на Уебсайта, където е наличен;</li>
        <li>изчистване на бисквитките и локалното хранилище във вашия браузър;</li>
        <li>промяна на настройките на вашия браузър;</li>
        <li>блокиране на бисквитки на трети страни чрез вашия браузър.</li>
      </ul>
      <p>
        13.3 Оттеглянето на съгласието не засяга законосъобразността на използването на бисквитки, основано на
        съгласие преди неговото оттегляне.
      </p>
      <p>
        13.4 След като оттеглите съгласието си, някои съществуващи бисквитки може да останат на вашето
        устройство, докато не ги изтриете или докато не изтекат.
      </p>
      <p>
        13.5 Където е технически възможно, ще спрем да задаваме несъществени бисквитки след оттегляне на
        съгласието.
      </p>

      <h2>14. Бисквитки и лични данни</h2>
      <p>
        14.1 Някои бисквитки могат да събират информация, която е лични данни или може да бъде свързана с лични
        данни, като IP адрес, идентификатори на устройства, данни за сесия на акаунта, поведение при сърфиране
        или онлайн идентификатори.
      </p>
      <p>
        14.2 Когато бисквитките включват лични данни, обработваме тези данни в съответствие с нашата Политика
        за поверителност.
      </p>
      <p>
        14.3 Правното основание за обработване на лични данни, събрани чрез бисквитки, зависи от категорията и
        целта на бисквитката. Това може да включва съгласие, законни интереси, договорна необходимост или
        законово задължение.
      </p>
      <p>
        14.4 Повече информация за това как обработваме личните данни е налична в нашата Политика за
        поверителност.
      </p>

      <h2>15. Актуализации на тази Политика за бисквитки</h2>
      <p>15.1 Може да актуализираме тази Политика за бисквитки от време на време, за да отразим промени в:</p>
      <ul>
        <li>бисквитките, които използваме;</li>
        <li>функционалността на Уебсайта;</li>
        <li>инструментите за плащане, сигурност или анализ;</li>
        <li>маркетинговите технологии;</li>
        <li>доставчиците, трети страни;</li>
        <li>правните или регулаторните изисквания;</li>
        <li>нашите бизнес операции.</li>
      </ul>
      <p>
        15.2 Когато актуализираме тази Политика за бисквитки, ще преразгледаме датата &bdquo;Последна
        актуализация&ldquo; в горната част на тази страница.
      </p>
      <p>
        15.3 Актуализираната версия ще се прилага от датата на публикуването ѝ на Уебсайта, освен ако не е
        посочено друго.
      </p>

      <h2>16. Информация за контакт</h2>
      <p>
        Ако имате въпроси относно тази Политика за бисквитки или относно използването от наша страна на
        бисквитки и подобни технологии, моля, свържете се с нас:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  en: (
    <PolicyLayout title="Cookie Policy" lastUpdated="29 May 2026">
      <p>
        This Cookie Policy explains how MISARELIANA S.R.L., trading as MisaElectro, uses cookies and similar
        technologies on www.misaelectro.ro.
      </p>
      <p>The Website is operated by:</p>
      <ContactBlock />
      <p>
        In this Cookie Policy, &ldquo;MisaElectro&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
        &ldquo;our&rdquo; means MISARELIANA S.R.L.. &ldquo;You&rdquo; or &ldquo;your&rdquo; means any visitor,
        customer, account holder, business customer, or user of the Website.
      </p>
      <p>
        This Cookie Policy should be read together with our Privacy Policy, which explains how we collect,
        use, store, and protect personal data.
      </p>

      <h2>1. Scope of This Cookie Policy</h2>
      <p>1.1 This Cookie Policy explains:</p>
      <ul>
        <li>what cookies and similar technologies are;</li>
        <li>which categories of cookies we use;</li>
        <li>why we use them;</li>
        <li>when your consent is required;</li>
        <li>how you can manage or withdraw your cookie preferences.</li>
      </ul>
      <p>
        1.2 This Policy applies to cookies and similar technologies used on the Website, including
        technologies used for shopping cart functionality, checkout, account access, payment security,
        currency preferences, analytics, performance measurement, and marketing where applicable.
      </p>
      <p>
        1.3 We may use cookies, pixels, tags, scripts, local storage, session storage, software development
        kits, and similar technologies. For simplicity, this Policy refers to these technologies collectively
        as &ldquo;cookies&rdquo;.
      </p>

      <h2>2. What Are Cookies?</h2>
      <p>2.1 Cookies are small text files placed on your device when you visit a website.</p>
      <p>
        2.2 Cookies allow a website to recognise your browser or device and remember certain information,
        such as your cart contents, selected currency, account session, language preference, or cookie
        settings.
      </p>
      <p>2.3 Cookies may be:</p>
      <ul>
        <li>first-party cookies, set directly by MisaElectro; or</li>
        <li>third-party cookies, set by external providers whose services we use, such as analytics, payment, security, advertising, or embedded service providers.</li>
      </ul>
      <p>2.4 Cookies may also be:</p>
      <ul>
        <li>session cookies, which expire when you close your browser; or</li>
        <li>persistent cookies, which remain on your device for a defined period unless you delete them earlier.</li>
      </ul>

      <h2>3. Similar Technologies</h2>
      <p>3.1 In addition to cookies, we may use similar technologies, including:</p>
      <ul>
        <li>local storage, which stores information in your browser;</li>
        <li>session storage, which stores information during a browser session;</li>
        <li>pixels and tags, which help measure activity or support marketing where used;</li>
        <li>scripts, which support Website functionality, analytics, security, or integrations.</li>
      </ul>
      <p>
        3.2 These technologies may be used for similar purposes as cookies and are covered by this Policy
        where they store or access information on your device.
      </p>

      <h2>4. Cookie Categories We Use</h2>
      <p>We use the following categories of cookies.</p>

      <h2>5. Strictly Necessary Cookies</h2>
      <p>5.1 Strictly necessary cookies are required for the Website to work properly.</p>
      <p>5.2 These cookies enable core functions such as:</p>
      <ul>
        <li>page navigation;</li>
        <li>shopping cart functionality;</li>
        <li>checkout;</li>
        <li>payment security;</li>
        <li>account login;</li>
        <li>fraud prevention;</li>
        <li>order processing;</li>
        <li>currency display;</li>
        <li>cookie preference storage;</li>
        <li>Website security;</li>
        <li>load balancing and technical stability.</li>
      </ul>
      <p>
        5.3 These cookies do not require your consent because they are necessary to provide the service you
        request.
      </p>
      <p>
        5.4 If you disable strictly necessary cookies through your browser settings, parts of the Website
        may not work correctly. You may be unable to add products to your cart, complete checkout, log in, or
        use essential store features.
      </p>
      <p><strong>Examples of strictly necessary cookies</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / technology</th>
            <th>Purpose</th>
            <th>Typical duration</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Cart cookie or local storage</td><td>Remembers products added to your shopping cart</td><td>Session or limited persistent period</td></tr>
          <tr><td>Checkout session cookie</td><td>Supports secure checkout and order completion</td><td>Session</td></tr>
          <tr><td>Account session cookie</td><td>Keeps you logged in during your visit</td><td>Session or limited persistent period</td></tr>
          <tr><td>Currency preference cookie</td><td>Remembers your selected display currency, such as EUR, RON, or HUF</td><td>Limited persistent period</td></tr>
          <tr><td>Cookie consent preference</td><td>Stores your cookie choices so we can respect them on future visits</td><td>Limited persistent period</td></tr>
          <tr><td>Security cookie</td><td>Helps protect the Website from fraud, abuse, bots, or unauthorised activity</td><td>Session or limited persistent period</td></tr>
        </tbody>
      </table>

      <h2>6. Functional Cookies</h2>
      <p>6.1 Functional cookies help provide enhanced Website features and personalisation.</p>
      <p>6.2 These cookies may remember choices you make, such as:</p>
      <ul>
        <li>preferred currency;</li>
        <li>language or region settings;</li>
        <li>recently viewed products;</li>
        <li>account preferences;</li>
        <li>saved display settings;</li>
        <li>support chat preferences where applicable.</li>
      </ul>
      <p>
        6.3 Some functional cookies may be important for a smooth shopping experience, but not all of them
        are strictly necessary.
      </p>
      <p>
        6.4 Where required by law, we will only use non-essential functional cookies with your consent.
      </p>
      <p><strong>Examples of functional cookies</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / technology</th>
            <th>Purpose</th>
            <th>Typical duration</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Recently viewed products</td><td>Helps display products you recently viewed</td><td>Limited persistent period</td></tr>
          <tr><td>Preference storage</td><td>Remembers optional display or browsing preferences</td><td>Limited persistent period</td></tr>
          <tr><td>Support tool cookie</td><td>Helps maintain a support chat or help session where available</td><td>Session or limited persistent period</td></tr>
        </tbody>
      </table>

      <h2>7. Analytics and Performance Cookies</h2>
      <p>7.1 Analytics and performance cookies help us understand how visitors use the Website.</p>
      <p>7.2 These cookies may help us measure:</p>
      <ul>
        <li>which pages are visited;</li>
        <li>how visitors move through the Website;</li>
        <li>which products or categories are viewed;</li>
        <li>how customers interact with checkout;</li>
        <li>Website speed and performance;</li>
        <li>errors, broken pages, or technical issues;</li>
        <li>the effectiveness of Website improvements.</li>
      </ul>
      <p>
        7.3 Analytics data helps us improve Website functionality, user experience, product presentation,
        navigation, and store performance.
      </p>
      <p>
        7.4 Analytics cookies are not essential to complete a purchase. Where required by law, we will only
        use analytics cookies with your consent.
      </p>
      <p>
        7.5 Analytics information may be aggregated or pseudonymised, but it may still involve personal data
        such as IP address, device identifiers, or online identifiers depending on the tool used.
      </p>
      <p><strong>Examples of analytics and performance cookies</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / technology</th>
            <th>Purpose</th>
            <th>Typical duration</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Website analytics cookie</td><td>Measures visits, page views, and user journeys</td><td>Usually 12&ndash;26 months</td></tr>
          <tr><td>Performance monitoring cookie</td><td>Helps identify technical issues and Website performance problems</td><td>Session or limited persistent period</td></tr>
          <tr><td>Conversion measurement cookie</td><td>Helps understand whether Website improvements or campaigns lead to purchases</td><td>Limited persistent period</td></tr>
        </tbody>
      </table>

      <h2>8. Marketing and Targeting Cookies</h2>
      <p>
        8.1 Marketing and targeting cookies may be used to deliver relevant advertising, measure advertising
        performance, limit repeated ads, build audience segments, or understand how users interact with
        marketing campaigns.
      </p>
      <p>
        8.2 These cookies may be set by MisaElectro or by third-party advertising and marketing partners.
      </p>
      <p>
        8.3 Marketing cookies may track your browsing activity across websites and may be used to create a
        profile of your interests.
      </p>
      <p>
        8.4 We will only use marketing or targeting cookies where they are enabled on the Website and where
        you have given consent where required by law.
      </p>
      <p>
        8.5 If you reject marketing cookies, you may still see advertisements, but they may be less relevant
        or less personalised.
      </p>
      <p><strong>Examples of marketing and targeting cookies</strong></p>
      <table>
        <thead>
          <tr>
            <th>Cookie / technology</th>
            <th>Purpose</th>
            <th>Typical duration</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Advertising pixel</td><td>Measures advertising performance and user interactions</td><td>Limited persistent period</td></tr>
          <tr><td>Retargeting cookie</td><td>Helps show relevant ads after you leave the Website</td><td>Limited persistent period</td></tr>
          <tr><td>Campaign tracking cookie</td><td>Helps measure the effectiveness of campaigns and promotions</td><td>Limited persistent period</td></tr>
        </tbody>
      </table>

      <h2>9. Payment, Checkout, and Security Technologies</h2>
      <p>
        9.1 During checkout, cookies and similar technologies may be used by payment processors, fraud
        prevention providers, card payment systems, and security tools.
      </p>
      <p>9.2 These technologies may be required to:</p>
      <ul>
        <li>process Visa and Mastercard payments;</li>
        <li>protect against fraudulent transactions;</li>
        <li>verify checkout sessions;</li>
        <li>prevent unauthorised activity;</li>
        <li>support secure payment authentication;</li>
        <li>detect suspicious behaviour;</li>
        <li>comply with payment security requirements.</li>
      </ul>
      <p>
        9.3 Some payment and security cookies are strictly necessary for checkout and fraud prevention.
        Others may be controlled by the relevant third-party provider.
      </p>
      <p>9.4 MisaElectro does not store your full card number or full card security code.</p>

      <h2>10. Third-Party Cookies</h2>
      <p>10.1 Some cookies may be set by third-party providers that support our Website.</p>
      <p>10.2 Third-party providers may include:</p>
      <ul>
        <li>payment processors;</li>
        <li>fraud prevention providers;</li>
        <li>analytics providers;</li>
        <li>advertising and marketing providers;</li>
        <li>hosting, performance, and security providers;</li>
        <li>customer support or communication tools;</li>
        <li>embedded content providers;</li>
        <li>social media platforms where applicable.</li>
      </ul>
      <p>
        10.3 Third-party cookies are controlled by the relevant third party. Their use is subject to that
        third party&rsquo;s own privacy and cookie policies.
      </p>
      <p>
        10.4 We do not control all third-party cookies after they are set, but we aim to work with reputable
        providers and configure cookies in a privacy-conscious way where possible.
      </p>
      <p>
        10.5 Where third-party cookies are not strictly necessary, they should only be used where appropriate
        consent has been obtained.
      </p>

      <h2>11. Cookie Consent</h2>
      <p>11.1 When you first visit the Website, you may be shown a cookie banner or consent tool.</p>
      <p>11.2 The cookie banner may allow you to:</p>
      <ul>
        <li>accept all cookies;</li>
        <li>reject non-essential cookies;</li>
        <li>customise your cookie preferences;</li>
        <li>learn more about the categories of cookies used.</li>
      </ul>
      <p>
        11.3 Strictly necessary cookies may be used without consent because they are required for the Website
        to function and to provide the services you request.
      </p>
      <p>
        11.4 Non-essential cookies, such as analytics, marketing, targeting, and certain functional cookies,
        will only be used where permitted by law and where any required consent has been obtained.
      </p>
      <p>
        11.5 We do not treat silence, inactivity, pre-ticked boxes, or continued browsing alone as consent
        to non-essential cookies.
      </p>
      <p>
        11.6 Your cookie choice may be stored in your browser using a cookie, local storage, or similar
        technology so that we can remember your preference on future visits.
      </p>
      <p>
        11.7 You may change or withdraw your consent at any time using the cookie settings tool where
        available, by clearing your browser cookies/local storage, or by changing your browser settings.
      </p>

      <h2>12. Managing Cookies Through Your Browser</h2>
      <p>12.1 Most browsers allow you to manage cookies through browser settings.</p>
      <p>12.2 Depending on your browser, you may be able to:</p>
      <ul>
        <li>view cookies stored on your device;</li>
        <li>delete cookies;</li>
        <li>block all cookies;</li>
        <li>block third-party cookies;</li>
        <li>set cookie preferences for specific websites;</li>
        <li>receive alerts before cookies are stored.</li>
      </ul>
      <p>12.3 Blocking or deleting cookies may affect Website functionality.</p>
      <p>
        12.4 If you block strictly necessary cookies, you may not be able to use essential store functions
        such as cart, checkout, account login, payment processing, or security features.
      </p>
      <p>
        12.5 Browser controls vary by provider. You should refer to your browser&rsquo;s help documentation
        for instructions on managing cookies.
      </p>

      <h2>13. Withdrawing or Changing Consent</h2>
      <p>13.1 You may withdraw or change your consent to non-essential cookies at any time.</p>
      <p>13.2 You can do this by:</p>
      <ul>
        <li>using the cookie settings or preferences tool on the Website, where available;</li>
        <li>clearing cookies and local storage in your browser;</li>
        <li>changing your browser settings;</li>
        <li>blocking third-party cookies through your browser.</li>
      </ul>
      <p>
        13.3 Withdrawing consent does not affect the lawfulness of cookie use based on consent before it was
        withdrawn.
      </p>
      <p>
        13.4 After you withdraw consent, some existing cookies may remain on your device until you delete
        them or until they expire.
      </p>
      <p>
        13.5 Where technically possible, we will stop setting non-essential cookies after consent is
        withdrawn.
      </p>

      <h2>14. Cookies and Personal Data</h2>
      <p>
        14.1 Some cookies may collect information that is personal data or can be linked to personal data,
        such as IP address, device identifiers, account session data, browsing behaviour, or online
        identifiers.
      </p>
      <p>
        14.2 Where cookies involve personal data, we process that data in accordance with our Privacy Policy.
      </p>
      <p>
        14.3 The legal basis for processing personal data collected through cookies depends on the cookie
        category and purpose. This may include consent, legitimate interests, contractual necessity, or
        legal obligation.
      </p>
      <p>
        14.4 More information about how we process personal data is available in our Privacy Policy.
      </p>

      <h2>15. Updates to This Cookie Policy</h2>
      <p>15.1 We may update this Cookie Policy from time to time to reflect changes in:</p>
      <ul>
        <li>the cookies we use;</li>
        <li>Website functionality;</li>
        <li>checkout, payment, security, or analytics tools;</li>
        <li>marketing technologies;</li>
        <li>third-party providers;</li>
        <li>legal or regulatory requirements;</li>
        <li>our business operations.</li>
      </ul>
      <p>
        15.2 When we update this Cookie Policy, we will revise the &ldquo;Last updated&rdquo; date at the
        top of this page.
      </p>
      <p>
        15.3 The updated version will apply from the date it is published on the Website unless stated
        otherwise.
      </p>

      <h2>16. Contact Information</h2>
      <p>
        If you have any questions about this Cookie Policy or our use of cookies and similar technologies,
        please contact us:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
};

export default async function CookiePolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return content[(locale as Locale)] ?? content.en;
}
