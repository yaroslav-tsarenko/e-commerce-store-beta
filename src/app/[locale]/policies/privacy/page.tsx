import { PolicyLayout, ContactBlock } from "@/components/layout/PolicyLayout/PolicyLayout";
import type { ReactNode } from "react";

type Locale = "ro" | "hu" | "bg" | "en";

const metaTitles: Record<Locale, string> = {
  ro: "Politica de confidențialitate — MisaElectro",
  hu: "Adatvédelmi szabályzat — MisaElectro",
  bg: "Политика за поверителност — MisaElectro",
  en: "Privacy Policy — MisaElectro",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return { title: metaTitles[(locale as Locale)] ?? metaTitles.en };
}

const content: Record<Locale, ReactNode> = {
  ro: (
    <PolicyLayout title="Politica de confidențialitate" lastUpdated="29 mai 2026">
      <p>
        Această Politică de confidențialitate explică modul în care MISARELIANA S.R.L., care își desfășoară
        activitatea sub denumirea comercială MisaElectro, colectează, utilizează, stochează, partajează și
        protejează datele cu caracter personal atunci când vizitați www.misaelectro.ro, creați un cont,
        plasați o comandă, ne contactați, utilizați serviciile noastre sau interacționați în alt mod cu noi.
      </p>
      <p>Site-ul web este operat de:</p>
      <ContactBlock />
      <p>
        În această Politică de confidențialitate, &bdquo;MisaElectro&rdquo;, &bdquo;noi&rdquo; sau
        &bdquo;al nostru&rdquo; înseamnă MISARELIANA S.R.L.. &bdquo;Client&rdquo;, &bdquo;dumneavoastră&rdquo; sau
        &bdquo;al dumneavoastră&rdquo; înseamnă orice persoană care utilizează Site-ul web, plasează o comandă,
        creează un cont, ne contactează sau interacționează cu serviciile noastre.
      </p>
      <p>
        Ne angajăm să vă protejăm confidențialitatea și să prelucrăm datele dumneavoastră cu caracter personal
        în mod legal, corect și transparent.
      </p>

      <h2>1. Domeniul de aplicare al acestei Politici de confidențialitate</h2>
      <p>1.1 Această Politică de confidențialitate se aplică datelor cu caracter personal prelucrate în legătură cu:</p>
      <ul>
        <li>vizitarea sau navigarea pe Site-ul web;</li>
        <li>crearea sau utilizarea unui cont de client;</li>
        <li>plasarea, gestionarea sau primirea unei comenzi;</li>
        <li>achiziționarea de produse electrice, materiale electrice, accesorii pentru cablare, produse legate de iluminat, componente de instalare și produse conexe;</li>
        <li>solicitarea sau utilizarea accesului pentru clienți din comerț, de afaceri sau profesioniști;</li>
        <li>contactarea serviciului de asistență pentru clienți;</li>
        <li>solicitarea de actualizări privind livrarea, returnări, rambursări, asistență pentru garanție sau asistență pentru produse;</li>
        <li>abonarea la comunicări de marketing;</li>
        <li>interacțiunea cu cookie-uri, analize, publicitate sau tehnologii similare;</li>
        <li>comunicarea cu noi prin e-mail, telefon, formulare sau alte canale.</li>
      </ul>
      <p>1.2 Această Politică de confidențialitate se aplică atât Consumatorilor, cât și Clienților de afaceri.</p>
      <p>
        1.3 Această Politică de confidențialitate trebuie citită împreună cu Termenii și condițiile noastre,
        Politica de livrare, Politica de returnare și rambursare, Politica privind cookie-urile și orice altă
        politică sau notificare pusă la dispoziție pe Site-ul web.
      </p>

      <h2>2. Operatorul de date</h2>
      <p>
        2.1 În scopul legislației aplicabile privind protecția datelor, inclusiv Regulamentul general privind
        protecția datelor din Regatul Unit, Legea privind protecția datelor din 2018 și, acolo unde este cazul,
        Regulamentul general al UE privind protecția datelor, MISARELIANA S.R.L. este operatorul datelor
        dumneavoastră cu caracter personal.
      </p>
      <p>2.2 Aceasta înseamnă că noi stabilim de ce și cum sunt prelucrate datele dumneavoastră cu caracter personal.</p>
      <p>2.3 Ne puteți contacta cu privire la aspecte legate de confidențialitate utilizând următoarele date:</p>
      <ContactBlock />
      <p>
        2.4 Nu am desemnat un Responsabil cu protecția datelor deoarece în prezent nu suntem obligați să facem
        acest lucru. Cu toate acestea, întrebările legate de confidențialitate pot fi trimise la datele de
        contact de mai sus.
      </p>

      <h2>3. Datele cu caracter personal pe care le colectăm</h2>
      <p>3.1 Datele cu caracter personal pe care le colectăm depind de modul în care interacționați cu MisaElectro.</p>
      <p>3.2 Putem colecta și prelucra următoarele categorii de date cu caracter personal.</p>

      <h3>3.2.1 Date de identitate și de contact</h3>
      <p>Acestea pot include:</p>
      <ul>
        <li>numele complet;</li>
        <li>adresa de facturare;</li>
        <li>adresa de livrare;</li>
        <li>adresa de e-mail;</li>
        <li>numărul de telefon;</li>
        <li>denumirea companiei, acolo unde este cazul;</li>
        <li>numărul de TVA, codul fiscal sau detaliile de afaceri, acolo unde este cazul;</li>
        <li>numele de utilizator al contului sau referința clientului.</li>
      </ul>

      <h3>3.2.2 Date privind contul</h3>
      <p>Dacă creați un cont sau utilizați funcțiile contului de client, putem prelucra:</p>
      <ul>
        <li>datele de autentificare ale contului;</li>
        <li>preferințele contului;</li>
        <li>adresele salvate;</li>
        <li>istoricul comenzilor;</li>
        <li>lista de dorințe sau produsele salvate, acolo unde este disponibil;</li>
        <li>starea contului;</li>
        <li>preferințele de comunicare.</li>
      </ul>
      <p>
        Nu avem acces la parola dumneavoastră în format lizibil acolo unde sunt utilizate sisteme securizate de parole.
      </p>

      <h3>3.2.3 Date privind comenzile și tranzacțiile</h3>
      <p>Atunci când plasați o comandă, putem prelucra:</p>
      <ul>
        <li>produsele comandate;</li>
        <li>numărul comenzii;</li>
        <li>valoarea comenzii;</li>
        <li>moneda selectată;</li>
        <li>starea plății;</li>
        <li>metoda de livrare;</li>
        <li>informații privind expedierea și urmărirea;</li>
        <li>informații privind factura și chitanța;</li>
        <li>evidențe privind rambursările, returnările, anulările sau garanțiile;</li>
        <li>istoricul serviciului pentru clienți legat de comandă.</li>
      </ul>

      <h3>3.2.4 Date privind plata</h3>
      <p>Plățile sunt procesate de furnizori de plăți terți securizați.</p>
      <p>
        Nu stocăm numărul complet al cardului dumneavoastră, codul complet de securitate al cardului sau
        acreditările complete ale cardului.
      </p>
      <p>Putem primi și stoca informații limitate legate de plată, cum ar fi:</p>
      <ul>
        <li>confirmarea plății;</li>
        <li>ID-ul tranzacției;</li>
        <li>referința furnizorului de plăți;</li>
        <li>ultimele patru cifre ale unui card, atunci când sunt furnizate de furnizorul de plăți;</li>
        <li>marca cardului, cum ar fi Visa sau Mastercard;</li>
        <li>starea verificării antifraudă;</li>
        <li>informații privind rambursarea sau contestarea plății.</li>
      </ul>

      <h3>3.2.5 Date privind livrarea și vama</h3>
      <p>Pentru a onora comanda dumneavoastră, putem prelucra:</p>
      <ul>
        <li>adresa de livrare;</li>
        <li>numele destinatarului;</li>
        <li>numărul de telefon;</li>
        <li>adresa de e-mail;</li>
        <li>numărul de urmărire;</li>
        <li>evidențele curierului;</li>
        <li>dovada livrării;</li>
        <li>informații privind declarația vamală;</li>
        <li>informații privind factura comercială;</li>
        <li>informații de import/export necesare pentru expedierile internaționale.</li>
      </ul>
      <p>
        Pentru comenzile internaționale, anumite detalii privind comanda și livrarea pot fi furnizate
        curierilor, agenților vamali, autorităților vamale sau partenerilor locali de livrare.
      </p>

      <h3>3.2.6 Date privind clienții de afaceri și din comerț</h3>
      <p>
        Dacă achiziționați în calitate de Client de afaceri, solicitați acces pentru comerț sau interacționați
        cu noi în calitate profesională, putem prelucra:
      </p>
      <ul>
        <li>denumirea companiei;</li>
        <li>denumirea comercială;</li>
        <li>detaliile de înregistrare;</li>
        <li>detaliile privind TVA/impozitele;</li>
        <li>adresa de afaceri;</li>
        <li>persoana de contact de afaceri;</li>
        <li>rolul profesional;</li>
        <li>informații privind comerțul sau contractantul;</li>
        <li>istoricul comenzilor;</li>
        <li>evidențele de comunicare de afaceri.</li>
      </ul>

      <h3>3.2.7 Date privind asistența pentru clienți și comunicarea</h3>
      <p>Atunci când ne contactați, putem prelucra:</p>
      <ul>
        <li>corespondența prin e-mail;</li>
        <li>detaliile apelurilor telefonice;</li>
        <li>trimiterile din formularul de contact;</li>
        <li>detaliile solicitării de asistență;</li>
        <li>întrebările despre produse;</li>
        <li>detaliile reclamației;</li>
        <li>solicitările de returnare sau rambursare;</li>
        <li>informații privind cererea de garanție;</li>
        <li>fotografii, videoclipuri, documente sau alte fișiere pe care le furnizați pentru a dovedi probleme legate de produse, deteriorări la livrare, preocupări privind instalarea sau cereri de garanție.</li>
      </ul>

      <h3>3.2.8 Date tehnice și de utilizare</h3>
      <p>Atunci când utilizați Site-ul web, putem colecta automat:</p>
      <ul>
        <li>adresa IP;</li>
        <li>tipul și versiunea browserului;</li>
        <li>tipul dispozitivului;</li>
        <li>sistemul de operare;</li>
        <li>locația aproximativă pe baza adresei IP;</li>
        <li>paginile vizitate;</li>
        <li>site-ul web de referință;</li>
        <li>ora și data vizitelor;</li>
        <li>informații privind sesiunea;</li>
        <li>datele privind fluxul de clicuri;</li>
        <li>jurnalele de erori;</li>
        <li>jurnalele de securitate;</li>
        <li>datele privind performanța.</li>
      </ul>

      <h3>3.2.9 Date privind cookie-urile și urmărirea</h3>
      <p>
        Putem utiliza cookie-uri și tehnologii similare pentru a colecta informații despre activitatea
        dumneavoastră de navigare, preferințe, activitatea coșului, interacțiunile de analiză și, acolo unde
        vă exprimați consimțământul, interacțiunile de marketing sau publicitate.
      </p>
      <p>Mai multe detalii sunt furnizate în Politica noastră privind cookie-urile.</p>

      <h3>3.2.10 Date privind preferințele de marketing</h3>
      <p>Dacă vă abonați la marketing sau interacționați cu comunicări promoționale, putem prelucra:</p>
      <ul>
        <li>adresa de e-mail;</li>
        <li>starea abonamentului;</li>
        <li>consimțământul de marketing;</li>
        <li>evidențele de dezabonare;</li>
        <li>preferințele de comunicare;</li>
        <li>datele privind interacțiunea prin e-mail, cum ar fi deschiderile și clicurile, acolo unde sunt acceptate de instrumentele noastre de marketing.</li>
      </ul>

      <h3>3.2.11 Date privind prevenirea fraudei și conformitatea</h3>
      <p>
        Pentru a ne proteja afacerea, clienții, sistemele de plată și obligațiile legale, putem prelucra:
      </p>
      <ul>
        <li>indicatorii de risc ai comenzii;</li>
        <li>rezultatele verificării plății;</li>
        <li>neconcordanțele dintre facturare și livrare;</li>
        <li>indicatorii de adresă IP și de locație;</li>
        <li>verificările privind sancțiunile sau destinațiile restricționate;</li>
        <li>istoricul contestărilor de plată;</li>
        <li>evidențele de fraudă suspectată;</li>
        <li>notele de examinare a conformității.</li>
      </ul>

      <h2>4. Date cu caracter personal pe care nu intenționăm să le colectăm</h2>
      <p>
        4.1 Nu colectăm în mod intenționat categorii speciale de date cu caracter personal, cum ar fi
        informații despre sănătate, rasă, etnie, opinii politice, convingeri religioase, apartenența la
        sindicate, date biometrice sau orientare sexuală.
      </p>
      <p>
        4.2 Vă rugăm să nu ne trimiteți categorii speciale de date decât dacă este strict necesar pentru o
        chestiune specifică și le-am solicitat.
      </p>
      <p>4.3 Nu colectăm cu bună știință date cu caracter personal de la copii.</p>
      <p>
        4.4 Site-ul web este destinat utilizatorilor cu vârsta de 18 ani sau peste, deoarece produsele noastre
        includ produse și materiale electrice care pot necesita înțelegere tehnică și utilizare în siguranță.
      </p>

      <h2>5. Cum colectăm datele cu caracter personal</h2>
      <p>5.1 Putem colecta date cu caracter personal direct de la dumneavoastră atunci când:</p>
      <ul>
        <li>vizitați Site-ul web;</li>
        <li>creați un cont;</li>
        <li>plasați o comandă;</li>
        <li>introduceți detalii de facturare sau livrare;</li>
        <li>efectuați o plată;</li>
        <li>ne contactați;</li>
        <li>solicitați asistență;</li>
        <li>trimiteți o cerere de returnare, rambursare sau garanție;</li>
        <li>vă abonați la marketing;</li>
        <li>completați formulare sau furnizați informații prin intermediul Site-ului web.</li>
      </ul>
      <p>
        5.2 Putem colecta date cu caracter personal în mod automat atunci când utilizați Site-ul web, inclusiv
        prin cookie-uri, instrumente de analiză, jurnale, sisteme de securitate și tehnologii similare.
      </p>
      <p>5.3 Putem primi date cu caracter personal de la terți, inclusiv:</p>
      <ul>
        <li>procesatorii de plăți;</li>
        <li>rețelele de carduri și furnizorii de prevenire a fraudei;</li>
        <li>curierii și partenerii de livrare;</li>
        <li>agenții vamali și autoritățile vamale;</li>
        <li>furnizorii de platforme de comerț electronic;</li>
        <li>furnizorii de analize;</li>
        <li>furnizorii de servicii de marketing și comunicare;</li>
        <li>furnizorii de IT, găzduire, securitate și infrastructură;</li>
        <li>consilierii profesioniști;</li>
        <li>autoritățile publice, acolo unde este cerut de lege.</li>
      </ul>

      <h2>6. Cum utilizăm datele dumneavoastră cu caracter personal</h2>
      <p>6.1 Utilizăm datele dumneavoastră cu caracter personal în scopurile descrise mai jos.</p>

      <h3>6.1.1 Pentru a procesa și a onora comenzile</h3>
      <p>Utilizăm datele cu caracter personal pentru a:</p>
      <ul>
        <li>primi și procesa comenzile;</li>
        <li>confirma plata;</li>
        <li>emite confirmări, chitanțe și facturi;</li>
        <li>pregăti produsele pentru expediere;</li>
        <li>organiza livrarea;</li>
        <li>furniza detalii de urmărire;</li>
        <li>gestiona documentația vamală acolo unde este necesar;</li>
        <li>gestiona anulările, returnările, rambursările și cererile de garanție.</li>
      </ul>

      <h3>6.1.2 Pentru a oferi asistență pentru clienți</h3>
      <p>Utilizăm datele cu caracter personal pentru a:</p>
      <ul>
        <li>răspunde la întrebări;</li>
        <li>oferi asistență cu întrebări despre produse, comenzi sau livrare;</li>
        <li>investiga produsele deteriorate, defecte, incorecte sau lipsă;</li>
        <li>gestiona reclamațiile;</li>
        <li>procesa cererile de returnare și garanție;</li>
        <li>comunica despre comanda sau contul dumneavoastră.</li>
      </ul>

      <h3>6.1.3 Pentru a opera și a îmbunătăți Site-ul web</h3>
      <p>Utilizăm datele cu caracter personal pentru a:</p>
      <ul>
        <li>menține funcționalitatea Site-ului web;</li>
        <li>îmbunătăți navigarea și experiența utilizatorului;</li>
        <li>monitoriza performanța;</li>
        <li>remedia erorile;</li>
        <li>testa și îmbunătăți funcțiile Site-ului web;</li>
        <li>înțelege modul în care clienții utilizează Site-ul web.</li>
      </ul>

      <h3>6.1.4 Pentru a gestiona conturile și accesul în comerț</h3>
      <p>Utilizăm datele cu caracter personal pentru a:</p>
      <ul>
        <li>crea și gestiona conturile de client;</li>
        <li>verifica informațiile de afaceri sau din comerț acolo unde este cazul;</li>
        <li>furniza funcțiile contului;</li>
        <li>gestiona prețurile pentru comerț sau accesul de afaceri acolo unde este disponibil;</li>
        <li>menține securitatea contului.</li>
      </ul>

      <h3>6.1.5 Pentru a preveni frauda și a proteja securitatea</h3>
      <p>Utilizăm datele cu caracter personal pentru a:</p>
      <ul>
        <li>detecta și preveni frauda;</li>
        <li>monitoriza activitatea suspectă;</li>
        <li>proteja sistemele de plată;</li>
        <li>preveni utilizarea abuzivă a Site-ului web;</li>
        <li>securiza conturile și sistemele;</li>
        <li>investiga accesul neautorizat sau abuzul;</li>
        <li>gestiona contestările de plată și disputele de plată.</li>
      </ul>

      <h3>6.1.6 Pentru a respecta obligațiile legale și de reglementare</h3>
      <p>Utilizăm datele cu caracter personal pentru a:</p>
      <ul>
        <li>respecta obligațiile fiscale, contabile, ale companiei, de protecție a consumatorilor, vamale, privind sancțiunile, privind criminalitatea financiară și legale;</li>
        <li>păstra evidențele cerute de lege;</li>
        <li>răspunde la solicitările legale ale autorităților;</li>
        <li>gestiona disputele și cererile legale.</li>
      </ul>

      <h3>6.1.7 Pentru a trimite comunicări de marketing</h3>
      <p>
        Acolo unde este permis de lege, putem utiliza datele dumneavoastră de contact pentru a trimite
        comunicări de marketing despre produse, oferte, promoții, actualizări sau servicii care ar putea fi
        relevante pentru dumneavoastră.
      </p>
      <p>Vă puteți dezabona de la marketing în orice moment.</p>

      <h3>6.1.8 Pentru a utiliza cookie-uri și analize</h3>
      <p>Utilizăm cookie-uri și tehnologii similare pentru a:</p>
      <ul>
        <li>opera funcțiile esențiale ale Site-ului web;</li>
        <li>reține preferințele;</li>
        <li>menține funcționalitatea coșului;</li>
        <li>măsura traficul pe Site-ul web;</li>
        <li>analiza performanța;</li>
        <li>îmbunătăți Site-ul web;</li>
        <li>susține marketingul sau publicitatea acolo unde v-ați exprimat consimțământul, atunci când este necesar.</li>
      </ul>

      <h2>7. Temeiuri juridice pentru prelucrare</h2>
      <p>7.1 Prelucrăm datele cu caracter personal numai atunci când avem un temei juridic pentru a face acest lucru.</p>
      <table>
        <thead>
          <tr>
            <th>Scop</th>
            <th>Temei juridic</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Procesarea și onorarea comenzilor</td><td>Necesitate contractuală</td></tr>
          <tr><td>Încasarea plății și confirmarea tranzacțiilor</td><td>Necesitate contractuală</td></tr>
          <tr><td>Livrarea produselor</td><td>Necesitate contractuală</td></tr>
          <tr><td>Gestionarea returnărilor, rambursărilor și cererilor de garanție</td><td>Necesitate contractuală; obligație legală; interese legitime</td></tr>
          <tr><td>Asistență pentru clienți</td><td>Necesitate contractuală; interese legitime</td></tr>
          <tr><td>Crearea și gestionarea contului</td><td>Necesitate contractuală; interese legitime</td></tr>
          <tr><td>Verificarea contului de afaceri sau din comerț</td><td>Necesitate contractuală; interese legitime</td></tr>
          <tr><td>Prevenirea fraudei și securitatea Site-ului web</td><td>Interese legitime; obligație legală</td></tr>
          <tr><td>Evidențe vamale, fiscale, contabile și legale</td><td>Obligație legală</td></tr>
          <tr><td>Răspunsul la cereri legale sau dispute</td><td>Interese legitime; obligație legală</td></tr>
          <tr><td>Îmbunătățirea serviciilor și analiza Site-ului web</td><td>Interese legitime; consimțământ acolo unde este necesar</td></tr>
          <tr><td>Cookie-uri neesențiale și urmărire</td><td>Consimțământ acolo unde este necesar</td></tr>
          <tr><td>E-mailuri de marketing</td><td>Consimțământ sau interese legitime acolo unde este permis de lege</td></tr>
          <tr><td>Verificări privind sancțiunile și conformitatea</td><td>Obligație legală; interese legitime</td></tr>
        </tbody>
      </table>
      <p>
        7.2 Acolo unde ne bazăm pe interese legitime, facem acest lucru numai atunci când considerăm că
        interesele noastre nu sunt anulate de drepturile și libertățile dumneavoastră.
      </p>
      <p>
        7.3 Interesele noastre legitime pot include operarea unui magazin online, onorarea comenzilor clienților,
        îmbunătățirea Site-ului nostru web, prevenirea fraudei, protejarea sistemelor noastre, gestionarea
        relațiilor cu clienții, aplicarea Termenilor noștri și protejarea intereselor noastre legale și comerciale.
      </p>
      <p>
        7.4 Acolo unde ne bazăm pe consimțământ, vă puteți retrage consimțământul în orice moment. Retragerea
        consimțământului nu afectează prelucrarea efectuată înainte de retragerea consimțământului.
      </p>

      <h2>8. Comunicări de marketing</h2>
      <p>
        8.1 Vă putem trimite comunicări de marketing atunci când v-ați exprimat consimțământul sau acolo unde
        legislația aplicabilă ne permite să facem acest lucru.
      </p>
      <p>
        8.2 Comunicările de marketing pot include actualizări despre produse, oferte, promoții, notificări de
        disponibilitate, actualizări de servicii sau informații despre produse similare celor pe care le-ați
        achiziționat sau vizualizat.
      </p>
      <p>
        8.3 Vă puteți dezabona de la comunicările de marketing în orice moment utilizând linkul de dezabonare
        din e-mailul relevant sau contactându-ne la info@misaelectro.ro.
      </p>
      <p>
        8.4 Chiar dacă vă dezabonați de la marketing, este posibil să vă trimitem în continuare mesaje de
        serviciu, cum ar fi confirmări ale comenzii, actualizări privind livrarea, notificări de plată,
        actualizări privind rambursarea, comunicări privind garanția sau notificări importante privind contul
        și politica.
      </p>

      <h2>9. Cookie-uri și tehnologii similare</h2>
      <p>
        9.1 Site-ul web utilizează cookie-uri și tehnologii similare, cum ar fi pixeli, etichete, stocare
        locală și instrumente de analiză.
      </p>
      <p>
        9.2 Unele cookie-uri sunt esențiale pentru funcționarea Site-ului web, inclusiv cookie-urile utilizate
        pentru funcționalitatea coșului, finalizarea comenzii, securitate, prevenirea fraudei și accesul la cont.
      </p>
      <p>
        9.3 Cookie-urile neesențiale pot fi utilizate pentru analiză, măsurarea performanței, personalizare,
        publicitate sau marketing acolo unde este permis de lege și acolo unde este necesar consimțământul.
      </p>
      <p>
        9.4 Când vizitați pentru prima dată Site-ul web, este posibil să vi se prezinte un banner privind
        cookie-urile sau un instrument de consimțământ care vă permite să gestionați cookie-urile neesențiale.
      </p>
      <p>9.5 De asemenea, puteți gestiona cookie-urile prin setările browserului dumneavoastră.</p>
      <p>9.6 Pentru mai multe informații, vă rugăm să consultați Politica noastră privind cookie-urile.</p>

      <h2>10. Partajarea datelor dumneavoastră cu caracter personal</h2>
      <p>10.1 Nu vindem datele dumneavoastră cu caracter personal.</p>
      <p>
        10.2 Putem partaja datele dumneavoastră cu caracter personal cu terți de încredere acolo unde este
        necesar pentru a opera Site-ul web, a procesa comenzile, a livra produsele, a respecta legea sau a ne
        proteja afacerea.
      </p>
      <p>10.3 Putem partaja date cu caracter personal cu:</p>
      <ul>
        <li>procesatorii de plăți și furnizorii de plăți cu cardul;</li>
        <li>băncile, rețelele de carduri și furnizorii de prevenire a fraudei;</li>
        <li>furnizorii de platforme de comerț electronic;</li>
        <li>furnizorii de găzduire, IT, infrastructură și securitate;</li>
        <li>curierii, partenerii de livrare, operatorii poștali, agenții vamali și furnizorii de logistică;</li>
        <li>autoritățile vamale și alte autorități publice acolo unde este cerut;</li>
        <li>furnizorii de e-mail, comunicare și asistență pentru clienți;</li>
        <li>furnizorii de tehnologie de analiză și cookie-uri;</li>
        <li>furnizorii de servicii de marketing, acolo unde este cazul;</li>
        <li>consilierii profesioniști, inclusiv contabili, auditori, asigurători, avocați și consultanți;</li>
        <li>autoritățile de reglementare, instanțele, autoritățile de aplicare a legii, autoritățile fiscale sau organismele guvernamentale acolo unde este cerut de lege;</li>
        <li>partenerii de afaceri sau succesorii în cazul unei restructurări, fuziuni, vânzări, finanțări sau transfer al întregii afaceri sau al unei părți din aceasta.</li>
      </ul>
      <p>
        10.4 Solicităm furnizorilor de servicii să prelucreze datele cu caracter personal numai în scopuri
        autorizate și să aplice măsuri adecvate de securitate și confidențialitate.
      </p>

      <h2>11. Transferuri internaționale de date</h2>
      <p>
        11.1 Deoarece MisaElectro vinde la nivel internațional și utilizează furnizori de servicii terți,
        datele dumneavoastră cu caracter personal pot fi prelucrate în afara Regatului Unit, a Spațiului
        Economic European sau a țării dumneavoastră de reședință.
      </p>
      <p>
        11.2 Transferurile internaționale pot avea loc atunci când utilizăm furnizori de găzduire, comerț
        electronic, plăți, analiză, comunicare, livrare, vamă sau asistență situați în alte țări.
      </p>
      <p>
        11.3 Acolo unde este cerut de legislația privind protecția datelor, utilizăm garanții adecvate pentru
        transferurile internaționale. Acestea pot include:
      </p>
      <ul>
        <li>reglementări privind caracterul adecvat sau decizii privind caracterul adecvat;</li>
        <li>Acordul internațional de transfer de date din Regatul Unit;</li>
        <li>Anexa Regatului Unit la Clauzele contractuale standard ale UE;</li>
        <li>Clauzele contractuale standard ale UE;</li>
        <li>garanții contractuale și organizatorice;</li>
        <li>alte mecanisme legale de transfer permise de legislația aplicabilă.</li>
      </ul>
      <p>
        11.4 Luăm măsuri rezonabile pentru a ne asigura că datele cu caracter personal transferate la nivel
        internațional rămân protejate în conformitate cu cerințele aplicabile privind protecția datelor.
      </p>

      <h2>12. Păstrarea datelor</h2>
      <p>
        12.1 Păstrăm datele cu caracter personal numai atât timp cât este necesar în mod rezonabil pentru
        scopurile descrise în această Politică de confidențialitate, cu excepția cazului în care o perioadă
        mai lungă de păstrare este cerută sau permisă de lege.
      </p>
      <p>
        12.2 Perioadele noastre de păstrare pot varia în funcție de tipul de date, scopul prelucrării,
        cerințele legale, obligațiile contabile, regulile fiscale, perioadele de garanție, riscurile de
        dispută, nevoile de prevenire a fraudei și cerințele operaționale.
      </p>
      <p>12.3 Ca ghid general:</p>
      <table>
        <thead>
          <tr>
            <th>Categorie de date</th>
            <th>Perioadă tipică de păstrare</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Evidențe privind comenzile, tranzacțiile, facturile, contabilitatea și impozitele</td><td>Până la 7 ani</td></tr>
          <tr><td>Date privind contul clientului</td><td>Atât timp cât contul rămâne activ, apoi pentru o perioadă rezonabilă ulterioară</td></tr>
          <tr><td>Comunicări privind asistența pentru clienți</td><td>Până la 3 ani după închiderea chestiunii, cu excepția cazului în care este necesară o păstrare mai lungă</td></tr>
          <tr><td>Evidențe privind returnările, rambursările, reclamațiile și garanțiile</td><td>Pe perioada relevantă de garanție, de prescripție sau de dispută</td></tr>
          <tr><td>Evidențe privind consimțământul de marketing și dezabonarea</td><td>Până la retragere, apoi păstrate după necesitate pentru a respecta preferințele de suprimare</td></tr>
          <tr><td>Date de analiză și tehnice</td><td>De obicei 12&ndash;26 de luni, în funcție de instrumentul relevant</td></tr>
          <tr><td>Evidențe privind frauda, contestările de plată, sancțiunile sau conformitatea</td><td>Atât timp cât este necesar în mod rezonabil pentru prevenire, investigare și conformitate legală</td></tr>
        </tbody>
      </table>
      <p>
        12.4 Putem păstra datele pentru o perioadă mai lungă acolo unde este necesar pentru a stabili, exercita
        sau apăra cereri legale, a respecta obligațiile legale, a investiga frauda sau abuzul, a soluționa
        disputele sau a aplica Termenii și condițiile noastre.
      </p>
      <p>
        12.5 Atunci când datele cu caracter personal nu mai sunt necesare, le vom șterge, le vom anonimiza sau
        le vom arhiva în siguranță acolo unde este cazul.
      </p>

      <h2>13. Securitatea datelor cu caracter personal</h2>
      <p>
        13.1 Luăm măsuri tehnice și organizatorice rezonabile pentru a proteja datele cu caracter personal
        împotriva accesului neautorizat, pierderii, utilizării abuzive, alterării, divulgării sau distrugerii.
      </p>
      <p>
        13.2 Aceste măsuri pot include controale de acces, procesare securizată a plăților, criptare acolo unde
        este cazul, monitorizarea sistemului, măsuri de securitate a contului, verificarea prealabilă a
        furnizorilor și controale interne.
      </p>
      <p>
        13.3 Niciun site web, sistem de plată, metodă de transmitere sau sistem de stocare nu poate fi garantat
        ca fiind complet securizat.
      </p>
      <p>
        13.4 Sunteți responsabil pentru păstrarea confidențialității datelor de autentificare ale contului
        dumneavoastră și pentru a ne notifica prompt dacă credeți că s-a accesat contul dumneavoastră fără
        autorizare.
      </p>

      <h2>14. Drepturile dumneavoastră privind protecția datelor</h2>
      <p>
        14.1 În funcție de locația dumneavoastră și de legislația aplicabilă privind protecția datelor, este
        posibil să aveți următoarele drepturi în legătură cu datele dumneavoastră cu caracter personal:
      </p>
      <ul>
        <li>dreptul de a fi informat cu privire la modul în care sunt utilizate datele dumneavoastră cu caracter personal;</li>
        <li>dreptul de a accesa o copie a datelor dumneavoastră cu caracter personal;</li>
        <li>dreptul de a solicita corectarea datelor cu caracter personal inexacte sau incomplete;</li>
        <li>dreptul de a solicita ștergerea datelor dumneavoastră cu caracter personal în anumite circumstanțe;</li>
        <li>dreptul de a solicita restricționarea prelucrării în anumite circumstanțe;</li>
        <li>dreptul de a vă opune prelucrării bazate pe interese legitime;</li>
        <li>dreptul de a vă opune marketingului direct în orice moment;</li>
        <li>dreptul la portabilitatea datelor în anumite circumstanțe;</li>
        <li>dreptul de a vă retrage consimțământul acolo unde prelucrarea se bazează pe consimțământ;</li>
        <li>drepturi legate de luarea automată a deciziilor și crearea de profiluri acolo unde este cazul;</li>
        <li>dreptul de a depune o plângere la o autoritate de supraveghere.</li>
      </ul>
      <p>
        14.2 Aceste drepturi nu sunt absolute și pot fi supuse unor condiții legale, exceptări, verificări de
        identitate și obligațiilor noastre legale.
      </p>
      <p>14.3 Pentru a vă exercita drepturile, vă rugăm să ne contactați la info@misaelectro.ro.</p>
      <p>14.4 Este posibil să fie nevoie să vă verificăm identitatea înainte de a răspunde unei cereri.</p>
      <p>
        14.5 Ne propunem să răspundem la cererile valide privind protecția datelor în termenul cerut de
        legislația aplicabilă.
      </p>

      <h2>15. Reclamații</h2>
      <p>
        15.1 Dacă aveți preocupări cu privire la modul în care gestionăm datele dumneavoastră cu caracter
        personal, vă rugăm să ne contactați mai întâi la info@misaelectro.ro pentru a putea încerca să
        soluționăm chestiunea.
      </p>
      <p>
        15.2 Dacă vă aflați în Regatul Unit, aveți dreptul de a depune o plângere la Biroul Comisarului pentru
        Informații (Information Commissioner&rsquo;s Office).
      </p>
      <p>
        15.3 Dacă vă aflați în Uniunea Europeană sau în Spațiul Economic European, este posibil să aveți dreptul
        de a depune o plângere la autoritatea locală de supraveghere a protecției datelor.
      </p>

      <h2>16. Luarea automată a deciziilor și crearea de profiluri</h2>
      <p>
        16.1 În prezent, nu utilizăm datele cu caracter personal pentru a lua decizii care sunt exclusiv
        automate și care produc efecte juridice sau efecte similare semnificative asupra dumneavoastră.
      </p>
      <p>
        16.2 Putem utiliza instrumente automate pentru a susține prevenirea fraudei, securitatea plăților,
        securitatea Site-ului web, evaluarea riscurilor sau monitorizarea tranzacțiilor.
      </p>
      <p>
        16.3 Aceste instrumente ajută la identificarea activității potențial suspecte, dar în mod normal nu iau
        decizii finale care au efecte juridice sau efecte similare semnificative fără o examinare adecvată.
      </p>
      <p>
        16.4 Dacă introducem luarea automată a deciziilor care are efecte juridice sau efecte similare
        semnificative, vom actualiza această Politică de confidențialitate și vom furniza informațiile cerute
        de legislația aplicabilă.
      </p>

      <h2>17. Site-uri web și servicii ale terților</h2>
      <p>
        17.1 Site-ul web poate conține linkuri către site-uri web ale terților, site-uri web ale
        producătorilor, pagini de plată, pagini de urmărire a curierilor, pagini de rețele sociale sau alte
        servicii externe.
      </p>
      <p>
        17.2 Nu suntem responsabili pentru practicile de confidențialitate, securitatea, conținutul sau
        politicile site-urilor web sau serviciilor terților.
      </p>
      <p>
        17.3 Ar trebui să examinați politicile de confidențialitate ale oricărui site web sau serviciu al
        terților înainte de a le furniza date cu caracter personal.
      </p>

      <h2>18. Confidențialitatea copiilor</h2>
      <p>18.1 Site-ul web nu este destinat copiilor.</p>
      <p>18.2 Nu colectăm cu bună știință date cu caracter personal de la copii.</p>
      <p>
        18.3 Dacă credeți că un copil ne-a furnizat date cu caracter personal, vă rugăm să ne contactați la
        info@misaelectro.ro și vom lua măsurile adecvate pentru a examina și șterge informațiile acolo unde
        este necesar.
      </p>

      <h2>19. Modificări ale acestei Politici de confidențialitate</h2>
      <p>
        19.1 Putem actualiza această Politică de confidențialitate din când în când pentru a reflecta
        schimbări în afacerea noastră, funcționalitatea Site-ului web, furnizorii de servicii, practicile de
        prelucrare a datelor, cerințele legale sau orientările de reglementare.
      </p>
      <p>
        19.2 Când actualizăm această Politică de confidențialitate, vom revizui data &bdquo;Ultima
        actualizare&rdquo; din partea de sus a paginii.
      </p>
      <p>
        19.3 Versiunea actualizată se va aplica de la data la care este publicată pe Site-ul web, cu excepția
        cazului în care se prevede altfel.
      </p>
      <p>
        19.4 Vă recomandăm să examinați periodic această Politică de confidențialitate pentru a rămâne
        informat cu privire la modul în care gestionăm datele cu caracter personal.
      </p>

      <h2>20. Informații de contact</h2>
      <p>
        Dacă aveți întrebări, cereri sau preocupări cu privire la această Politică de confidențialitate sau la
        modul în care prelucrăm datele cu caracter personal, vă rugăm să ne contactați:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  hu: (
    <PolicyLayout title="Adatvédelmi szabályzat" lastUpdated="2026. május 29.">
      <p>
        Ez az Adatvédelmi szabályzat elmagyarázza, hogyan gyűjti, használja, tárolja, osztja meg és védi a
        MISARELIANA S.R.L., amely MisaElectro néven folytatja tevékenységét, a személyes adatokat, amikor
        felkeresi a www.misaelectro.ro oldalt, fiókot hoz létre, rendelést ad le, kapcsolatba lép velünk,
        igénybe veszi szolgáltatásainkat, vagy más módon lép kapcsolatba velünk.
      </p>
      <p>A Weboldalt a következő cég üzemelteti:</p>
      <ContactBlock />
      <p>
        Ebben az Adatvédelmi szabályzatban a &bdquo;MisaElectro&rdquo;, &bdquo;mi&rdquo; vagy
        &bdquo;miénk&rdquo; a MISARELIANA S.R.L.-t jelenti. Az &bdquo;Ügyfél&rdquo;, &bdquo;Ön&rdquo; vagy
        &bdquo;az Ön&rdquo; kifejezés bármely olyan személyt jelent, aki a Weboldalt használja, rendelést ad
        le, fiókot hoz létre, kapcsolatba lép velünk, vagy szolgáltatásainkkal érintkezik.
      </p>
      <p>
        Elkötelezettek vagyunk az Ön magánéletének védelme, valamint személyes adatainak jogszerű, tisztességes
        és átlátható kezelése iránt.
      </p>

      <h2>1. A jelen Adatvédelmi szabályzat hatálya</h2>
      <p>1.1 A jelen Adatvédelmi szabályzat a következőkkel összefüggésben kezelt személyes adatokra vonatkozik:</p>
      <ul>
        <li>a Weboldal felkeresése vagy böngészése;</li>
        <li>ügyfélfiók létrehozása vagy használata;</li>
        <li>rendelés leadása, kezelése vagy fogadása;</li>
        <li>elektromos áruk, elektromos anyagok, vezetékezési tartozékok, világítással kapcsolatos termékek, szerelési alkatrészek és kapcsolódó áruk vásárlása;</li>
        <li>kereskedelmi, üzleti vagy szakmai ügyfélhozzáférés igénylése vagy használata;</li>
        <li>az ügyfélszolgálat megkeresése;</li>
        <li>szállítási frissítések, visszaküldések, visszatérítések, jótállási támogatás vagy termékkel kapcsolatos segítség kérése;</li>
        <li>marketingkommunikációra való feliratkozás;</li>
        <li>sütikkel, analitikával, hirdetésekkel vagy hasonló technológiákkal való érintkezés;</li>
        <li>kommunikáció velünk e-mailben, telefonon, űrlapokon vagy más csatornákon keresztül.</li>
      </ul>
      <p>1.2 A jelen Adatvédelmi szabályzat mind a Fogyasztókra, mind az Üzleti ügyfelekre vonatkozik.</p>
      <p>
        1.3 A jelen Adatvédelmi szabályzatot az Általános szerződési feltételeinkkel, a Szállítási
        szabályzatunkkal, a Visszaküldési és visszatérítési szabályzatunkkal, a Süti szabályzatunkkal, valamint
        a Weboldalon elérhetővé tett bármely más szabályzattal vagy tájékoztatóval együtt kell értelmezni.
      </p>

      <h2>2. Adatkezelő</h2>
      <p>
        2.1 Az alkalmazandó adatvédelmi jogszabályok, köztük az Egyesült Királyság Általános adatvédelmi
        rendelete, a 2018. évi adatvédelmi törvény, valamint adott esetben az EU Általános adatvédelmi rendelete
        alkalmazásában a MISARELIANA S.R.L. az Ön személyes adatainak adatkezelője.
      </p>
      <p>2.2 Ez azt jelenti, hogy mi határozzuk meg, miért és hogyan kezeljük az Ön személyes adatait.</p>
      <p>2.3 Adatvédelmi kérdésekben az alábbi elérhetőségeken keresztül léphet kapcsolatba velünk:</p>
      <ContactBlock />
      <p>
        2.4 Nem neveztünk ki adatvédelmi tisztviselőt, mivel jelenleg erre nem vagyunk kötelesek. Az
        adatvédelemmel kapcsolatos megkeresések azonban a fenti elérhetőségekre küldhetők.
      </p>

      <h2>3. Az általunk gyűjtött személyes adatok</h2>
      <p>3.1 Az általunk gyűjtött személyes adatok attól függnek, hogyan lép kapcsolatba a MisaElectróval.</p>
      <p>3.2 A személyes adatok következő kategóriáit gyűjthetjük és kezelhetjük.</p>

      <h3>3.2.1 Azonosító és kapcsolattartási adatok</h3>
      <p>Ezek a következőket foglalhatják magukban:</p>
      <ul>
        <li>teljes név;</li>
        <li>számlázási cím;</li>
        <li>szállítási cím;</li>
        <li>e-mail-cím;</li>
        <li>telefonszám;</li>
        <li>cégnév, adott esetben;</li>
        <li>adószám, adóazonosító szám vagy üzleti adatok, adott esetben;</li>
        <li>fiók felhasználóneve vagy ügyfél-hivatkozási szám.</li>
      </ul>

      <h3>3.2.2 Fiókadatok</h3>
      <p>Ha fiókot hoz létre vagy ügyfélfiók funkciókat használ, a következőket kezelhetjük:</p>
      <ul>
        <li>fiók bejelentkezési adatai;</li>
        <li>fiókbeállítások;</li>
        <li>mentett címek;</li>
        <li>rendelési előzmények;</li>
        <li>kívánságlista vagy mentett termékek, ahol elérhető;</li>
        <li>fiók állapota;</li>
        <li>kommunikációs beállítások.</li>
      </ul>
      <p>
        Nem férünk hozzá az Ön jelszavához olvasható formában, ahol biztonságos jelszórendszereket alkalmazunk.
      </p>

      <h3>3.2.3 Rendelési és tranzakciós adatok</h3>
      <p>Amikor rendelést ad le, a következőket kezelhetjük:</p>
      <ul>
        <li>megrendelt termékek;</li>
        <li>rendelésszám;</li>
        <li>rendelés értéke;</li>
        <li>kiválasztott pénznem;</li>
        <li>fizetési állapot;</li>
        <li>szállítási mód;</li>
        <li>feladási és nyomon követési információk;</li>
        <li>számla- és nyugtainformációk;</li>
        <li>visszatérítési, visszaküldési, lemondási vagy jótállási nyilvántartások;</li>
        <li>a rendeléshez kapcsolódó ügyfélszolgálati előzmények.</li>
      </ul>

      <h3>3.2.4 Fizetési adatok</h3>
      <p>A fizetéseket biztonságos, harmadik fél fizetési szolgáltatók dolgozzák fel.</p>
      <p>
        Nem tároljuk az Ön teljes kártyaszámát, a kártya teljes biztonsági kódját vagy a teljes kártyaadatokat.
      </p>
      <p>Korlátozott, fizetéssel kapcsolatos információkat kaphatunk és tárolhatunk, például:</p>
      <ul>
        <li>fizetés visszaigazolása;</li>
        <li>tranzakcióazonosító;</li>
        <li>fizetési szolgáltató hivatkozási száma;</li>
        <li>a kártya utolsó négy számjegye, ha a fizetési szolgáltató megadja;</li>
        <li>kártyamárka, például Visa vagy Mastercard;</li>
        <li>csalásszűrési állapot;</li>
        <li>visszatérítési vagy visszaterhelési információk.</li>
      </ul>

      <h3>3.2.5 Szállítási és vámadatok</h3>
      <p>A rendelése teljesítéséhez a következőket kezelhetjük:</p>
      <ul>
        <li>szállítási cím;</li>
        <li>címzett neve;</li>
        <li>telefonszám;</li>
        <li>e-mail-cím;</li>
        <li>nyomon követési szám;</li>
        <li>futárszolgálati nyilvántartások;</li>
        <li>kézbesítési igazolás;</li>
        <li>vámáru-nyilatkozati információk;</li>
        <li>kereskedelmi számlainformációk;</li>
        <li>a nemzetközi szállításokhoz szükséges import/export információk.</li>
      </ul>
      <p>
        Nemzetközi rendelések esetén bizonyos rendelési és szállítási adatok átadhatók futárszolgálatoknak,
        vámügynököknek, vámhatóságoknak vagy helyi kézbesítési partnereknek.
      </p>

      <h3>3.2.6 Üzleti és kereskedelmi ügyfelek adatai</h3>
      <p>
        Ha Üzleti ügyfélként vásárol, kereskedelmi hozzáférést igényel, vagy szakmai minőségben lép kapcsolatba
        velünk, a következőket kezelhetjük:
      </p>
      <ul>
        <li>cégnév;</li>
        <li>kereskedelmi név;</li>
        <li>cégjegyzési adatok;</li>
        <li>ÁFA/adóadatok;</li>
        <li>üzleti cím;</li>
        <li>üzleti kapcsolattartó személy;</li>
        <li>szakmai szerepkör;</li>
        <li>kereskedelmi vagy vállalkozói információk;</li>
        <li>rendelési előzmények;</li>
        <li>üzleti kommunikációs nyilvántartások.</li>
      </ul>

      <h3>3.2.7 Ügyfélszolgálati és kommunikációs adatok</h3>
      <p>Amikor kapcsolatba lép velünk, a következőket kezelhetjük:</p>
      <ul>
        <li>e-mailes levelezés;</li>
        <li>telefonhívás részletei;</li>
        <li>kapcsolatfelvételi űrlap beküldései;</li>
        <li>támogatási kérelem részletei;</li>
        <li>termékkel kapcsolatos kérdések;</li>
        <li>panasz részletei;</li>
        <li>visszaküldési vagy visszatérítési kérelmek;</li>
        <li>jótállási igény információi;</li>
        <li>fényképek, videók, dokumentumok vagy más fájlok, amelyeket termékproblémák, szállítási sérülés, szerelési aggályok vagy jótállási igények igazolására ad meg.</li>
      </ul>

      <h3>3.2.8 Technikai és használati adatok</h3>
      <p>Amikor a Weboldalt használja, automatikusan gyűjthetjük a következőket:</p>
      <ul>
        <li>IP-cím;</li>
        <li>böngésző típusa és verziója;</li>
        <li>eszköz típusa;</li>
        <li>operációs rendszer;</li>
        <li>hozzávetőleges hely az IP-cím alapján;</li>
        <li>meglátogatott oldalak;</li>
        <li>hivatkozó webhely;</li>
        <li>a látogatások ideje és dátuma;</li>
        <li>munkamenet-információk;</li>
        <li>kattintási útvonal adatai;</li>
        <li>hibanaplók;</li>
        <li>biztonsági naplók;</li>
        <li>teljesítményadatok.</li>
      </ul>

      <h3>3.2.9 Süti- és nyomon követési adatok</h3>
      <p>
        Sütiket és hasonló technológiákat használhatunk arra, hogy információkat gyűjtsünk az Ön böngészési
        tevékenységéről, beállításairól, kosártevékenységéről, analitikai interakcióiról, valamint – ahol Ön
        hozzájárul – marketing- vagy hirdetési interakcióiról.
      </p>
      <p>További részletek a Süti szabályzatunkban találhatók.</p>

      <h3>3.2.10 Marketingbeállítási adatok</h3>
      <p>Ha feliratkozik a marketingre, vagy promóciós kommunikációval érintkezik, a következőket kezelhetjük:</p>
      <ul>
        <li>e-mail-cím;</li>
        <li>feliratkozási állapot;</li>
        <li>marketing-hozzájárulás;</li>
        <li>leiratkozási nyilvántartások;</li>
        <li>kommunikációs beállítások;</li>
        <li>e-mail-interakciós adatok, például megnyitások és kattintások, ahol ezt a marketingeszközeink támogatják.</li>
      </ul>

      <h3>3.2.11 Csalásmegelőzési és megfelelőségi adatok</h3>
      <p>
        Vállalkozásunk, ügyfeleink, fizetési rendszereink és jogi kötelezettségeink védelme érdekében a
        következőket kezelhetjük:
      </p>
      <ul>
        <li>rendelési kockázati mutatók;</li>
        <li>fizetésellenőrzési eredmények;</li>
        <li>számlázási és szállítási eltérések;</li>
        <li>IP-cím és helymeghatározási mutatók;</li>
        <li>szankciós vagy korlátozott célállomás-ellenőrzések;</li>
        <li>visszaterhelési előzmények;</li>
        <li>feltételezett csalás nyilvántartásai;</li>
        <li>megfelelőségi felülvizsgálati megjegyzések.</li>
      </ul>

      <h2>4. Személyes adatok, amelyeket nem áll szándékunkban gyűjteni</h2>
      <p>
        4.1 Nem gyűjtünk szándékosan különleges kategóriájú személyes adatokat, például az egészségre, fajra,
        etnikai hovatartozásra, politikai véleményre, vallási meggyőződésre, szakszervezeti tagságra,
        biometrikus adatokra vagy szexuális irányultságra vonatkozó információkat.
      </p>
      <p>
        4.2 Kérjük, ne küldjön nekünk különleges kategóriájú adatokat, kivéve, ha az egy konkrét ügyben
        feltétlenül szükséges, és mi kértük azt.
      </p>
      <p>4.3 Nem gyűjtünk tudatosan személyes adatokat gyermekektől.</p>
      <p>
        4.4 A Weboldal 18. életévüket betöltött vagy annál idősebb felhasználók számára készült, mivel áruink
        közé tartoznak olyan elektromos termékek és anyagok, amelyek műszaki ismereteket és biztonságos
        használatot igényelhetnek.
      </p>

      <h2>5. Hogyan gyűjtünk személyes adatokat</h2>
      <p>5.1 Személyes adatokat közvetlenül Öntől gyűjthetünk, amikor Ön:</p>
      <ul>
        <li>felkeresi a Weboldalt;</li>
        <li>fiókot hoz létre;</li>
        <li>rendelést ad le;</li>
        <li>számlázási vagy szállítási adatokat ad meg;</li>
        <li>fizetést hajt végre;</li>
        <li>kapcsolatba lép velünk;</li>
        <li>támogatást kér;</li>
        <li>visszaküldési, visszatérítési vagy jótállási kérelmet nyújt be;</li>
        <li>feliratkozik a marketingre;</li>
        <li>űrlapokat tölt ki, vagy információt ad meg a Weboldalon keresztül.</li>
      </ul>
      <p>
        5.2 Személyes adatokat automatikusan gyűjthetünk, amikor a Weboldalt használja, többek között sütik,
        analitikai eszközök, naplók, biztonsági rendszerek és hasonló technológiák révén.
      </p>
      <p>5.3 Személyes adatokat kaphatunk harmadik felektől, többek között:</p>
      <ul>
        <li>fizetésfeldolgozóktól;</li>
        <li>kártyahálózatoktól és csalásmegelőzési szolgáltatóktól;</li>
        <li>futárszolgálatoktól és kézbesítési partnerektől;</li>
        <li>vámügynököktől és vámhatóságoktól;</li>
        <li>e-kereskedelmi platformszolgáltatóktól;</li>
        <li>analitikai szolgáltatóktól;</li>
        <li>marketing- és kommunikációs szolgáltatóktól;</li>
        <li>IT-, tárhely-, biztonsági és infrastruktúra-szolgáltatóktól;</li>
        <li>szakmai tanácsadóktól;</li>
        <li>hatóságoktól, ahol azt jogszabály előírja.</li>
      </ul>

      <h2>6. Hogyan használjuk fel az Ön személyes adatait</h2>
      <p>6.1 Az Ön személyes adatait az alábbiakban leírt célokra használjuk fel.</p>

      <h3>6.1.1 Rendelések feldolgozása és teljesítése</h3>
      <p>A személyes adatokat a következőkre használjuk:</p>
      <ul>
        <li>rendelések fogadása és feldolgozása;</li>
        <li>fizetés visszaigazolása;</li>
        <li>visszaigazolások, nyugták és számlák kiállítása;</li>
        <li>áruk feladásra való előkészítése;</li>
        <li>kézbesítés megszervezése;</li>
        <li>nyomon követési adatok biztosítása;</li>
        <li>vámdokumentáció kezelése, ahol szükséges;</li>
        <li>lemondások, visszaküldések, visszatérítések és jótállási igények kezelése.</li>
      </ul>

      <h3>6.1.2 Ügyfélszolgálat biztosítása</h3>
      <p>A személyes adatokat a következőkre használjuk:</p>
      <ul>
        <li>megkeresésekre való válaszadás;</li>
        <li>termékkel, rendeléssel vagy szállítással kapcsolatos kérdésekben való segítségnyújtás;</li>
        <li>sérült, hibás, helytelen vagy hiányzó áruk kivizsgálása;</li>
        <li>panaszok kezelése;</li>
        <li>visszaküldési és jótállási kérelmek feldolgozása;</li>
        <li>kommunikáció az Ön rendeléséről vagy fiókjáról.</li>
      </ul>

      <h3>6.1.3 A Weboldal üzemeltetése és fejlesztése</h3>
      <p>A személyes adatokat a következőkre használjuk:</p>
      <ul>
        <li>a Weboldal működésének fenntartása;</li>
        <li>a navigáció és a felhasználói élmény javítása;</li>
        <li>a teljesítmény figyelése;</li>
        <li>hibák javítása;</li>
        <li>a Weboldal funkcióinak tesztelése és javítása;</li>
        <li>annak megértése, hogyan használják az ügyfelek a Weboldalt.</li>
      </ul>

      <h3>6.1.4 Fiókok és kereskedelmi hozzáférés kezelése</h3>
      <p>A személyes adatokat a következőkre használjuk:</p>
      <ul>
        <li>ügyfélfiókok létrehozása és kezelése;</li>
        <li>üzleti vagy kereskedelmi információk ellenőrzése, ahol alkalmazandó;</li>
        <li>fiókfunkciók biztosítása;</li>
        <li>kereskedelmi árazás vagy üzleti hozzáférés kezelése, ahol elérhető;</li>
        <li>a fiók biztonságának fenntartása.</li>
      </ul>

      <h3>6.1.5 Csalás megelőzése és a biztonság védelme</h3>
      <p>A személyes adatokat a következőkre használjuk:</p>
      <ul>
        <li>csalás felderítése és megelőzése;</li>
        <li>gyanús tevékenység figyelése;</li>
        <li>fizetési rendszerek védelme;</li>
        <li>a Weboldallal való visszaélés megelőzése;</li>
        <li>fiókok és rendszerek védelme;</li>
        <li>jogosulatlan hozzáférés vagy visszaélés kivizsgálása;</li>
        <li>visszaterhelések és fizetési viták kezelése.</li>
      </ul>

      <h3>6.1.6 Jogi és szabályozási kötelezettségek teljesítése</h3>
      <p>A személyes adatokat a következőkre használjuk:</p>
      <ul>
        <li>adózási, számviteli, társasági, fogyasztóvédelmi, vám-, szankciós, pénzügyi bűncselekményekkel kapcsolatos és jogi kötelezettségek teljesítése;</li>
        <li>jogszabály által előírt nyilvántartások vezetése;</li>
        <li>hatóságok jogszerű megkereséseire való válaszadás;</li>
        <li>viták és jogi igények kezelése.</li>
      </ul>

      <h3>6.1.7 Marketingkommunikáció küldése</h3>
      <p>
        Ahol azt a jog megengedi, felhasználhatjuk kapcsolattartási adatait, hogy marketingkommunikációt
        küldjünk olyan termékekről, ajánlatokról, promóciókról, frissítésekről vagy szolgáltatásokról, amelyek
        relevánsak lehetnek az Ön számára.
      </p>
      <p>A marketingről bármikor leiratkozhat.</p>

      <h3>6.1.8 Sütik és analitika használata</h3>
      <p>Sütiket és hasonló technológiákat használunk a következőkre:</p>
      <ul>
        <li>a Weboldal alapvető funkcióinak működtetése;</li>
        <li>beállítások megjegyzése;</li>
        <li>a kosár funkciójának fenntartása;</li>
        <li>a Weboldal forgalmának mérése;</li>
        <li>a teljesítmény elemzése;</li>
        <li>a Weboldal fejlesztése;</li>
        <li>marketing vagy hirdetés támogatása, ahol Ön hozzájárult, amennyiben szükséges.</li>
      </ul>

      <h2>7. Az adatkezelés jogalapjai</h2>
      <p>7.1 Személyes adatokat csak akkor kezelünk, ha erre jogalappal rendelkezünk.</p>
      <table>
        <thead>
          <tr>
            <th>Cél</th>
            <th>Jogalap</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Rendelések feldolgozása és teljesítése</td><td>Szerződéses szükségesség</td></tr>
          <tr><td>Fizetés beszedése és tranzakciók visszaigazolása</td><td>Szerződéses szükségesség</td></tr>
          <tr><td>Áruk kézbesítése</td><td>Szerződéses szükségesség</td></tr>
          <tr><td>Visszaküldések, visszatérítések és jótállási igények kezelése</td><td>Szerződéses szükségesség; jogi kötelezettség; jogos érdekek</td></tr>
          <tr><td>Ügyfélszolgálat</td><td>Szerződéses szükségesség; jogos érdekek</td></tr>
          <tr><td>Fiók létrehozása és fiókkezelés</td><td>Szerződéses szükségesség; jogos érdekek</td></tr>
          <tr><td>Üzleti vagy kereskedelmi fiók ellenőrzése</td><td>Szerződéses szükségesség; jogos érdekek</td></tr>
          <tr><td>Csalásmegelőzés és a Weboldal biztonsága</td><td>Jogos érdekek; jogi kötelezettség</td></tr>
          <tr><td>Vám-, adó-, számviteli és jogi nyilvántartások</td><td>Jogi kötelezettség</td></tr>
          <tr><td>Jogi igényekre vagy vitákra való válaszadás</td><td>Jogos érdekek; jogi kötelezettség</td></tr>
          <tr><td>Szolgáltatásfejlesztés és a Weboldal analitikája</td><td>Jogos érdekek; hozzájárulás, ahol szükséges</td></tr>
          <tr><td>Nem alapvető sütik és nyomon követés</td><td>Hozzájárulás, ahol szükséges</td></tr>
          <tr><td>Marketing e-mailek</td><td>Hozzájárulás vagy jogos érdekek, ahol a jog megengedi</td></tr>
          <tr><td>Szankciós és megfelelőségi ellenőrzések</td><td>Jogi kötelezettség; jogos érdekek</td></tr>
        </tbody>
      </table>
      <p>
        7.2 Ahol jogos érdekekre támaszkodunk, ezt csak akkor tesszük, ha úgy véljük, hogy érdekeinket nem
        írják felül az Ön jogai és szabadságai.
      </p>
      <p>
        7.3 Jogos érdekeink közé tartozhat egy online áruház üzemeltetése, az ügyfélrendelések teljesítése, a
        Weboldalunk fejlesztése, a csalás megelőzése, rendszereink védelme, az ügyfélkapcsolatok kezelése, a
        Feltételeink érvényesítése, valamint jogi és üzleti érdekeink védelme.
      </p>
      <p>
        7.4 Ahol hozzájárulásra támaszkodunk, hozzájárulását bármikor visszavonhatja. A hozzájárulás visszavonása
        nem érinti a visszavonás előtt végzett adatkezelést.
      </p>

      <h2>8. Marketingkommunikáció</h2>
      <p>
        8.1 Marketingkommunikációt akkor küldhetünk Önnek, ha ahhoz hozzájárult, vagy ahol az alkalmazandó jog
        ezt lehetővé teszi számunkra.
      </p>
      <p>
        8.2 A marketingkommunikáció tartalmazhat termékfrissítéseket, ajánlatokat, promóciókat, elérhetőségi
        értesítéseket, szolgáltatásfrissítéseket, vagy információkat olyan termékekről, amelyek hasonlóak az Ön
        által vásárolt vagy megtekintett termékekhez.
      </p>
      <p>
        8.3 A marketingkommunikációról bármikor leiratkozhat a vonatkozó e-mailben található leiratkozási link
        használatával, vagy az info@misaelectro.ro címen keresztül.
      </p>
      <p>
        8.4 Még ha le is iratkozik a marketingről, továbbra is küldhetünk Önnek szolgáltatási üzeneteket,
        például rendelés-visszaigazolásokat, szállítási frissítéseket, fizetési értesítéseket, visszatérítési
        frissítéseket, jótállási kommunikációt, vagy fontos fiók- és szabályzati értesítéseket.
      </p>

      <h2>9. Sütik és hasonló technológiák</h2>
      <p>
        9.1 A Weboldal sütiket és hasonló technológiákat használ, például pixeleket, címkéket, helyi tárolást és
        analitikai eszközöket.
      </p>
      <p>
        9.2 Egyes sütik elengedhetetlenek a Weboldal működéséhez, ideértve a kosárfunkcióhoz, a pénztárhoz, a
        biztonsághoz, a csalásmegelőzéshez és a fiókhozzáféréshez használt sütiket.
      </p>
      <p>
        9.3 A nem alapvető sütiket analitikára, teljesítménymérésre, személyre szabásra, hirdetésre vagy
        marketingre használhatjuk, ahol azt a jog megengedi, és ahol hozzájárulás szükséges.
      </p>
      <p>
        9.4 Amikor először keresi fel a Weboldalt, egy sütibanner vagy hozzájárulási eszköz jelenhet meg, amely
        lehetővé teszi a nem alapvető sütik kezelését.
      </p>
      <p>9.5 A sütiket a böngészője beállításain keresztül is kezelheti.</p>
      <p>9.6 További információért kérjük, tekintse meg a Süti szabályzatunkat.</p>

      <h2>10. Az Ön személyes adatainak megosztása</h2>
      <p>10.1 Nem értékesítjük az Ön személyes adatait.</p>
      <p>
        10.2 Az Ön személyes adatait megbízható harmadik felekkel oszthatjuk meg, ahol ez szükséges a Weboldal
        üzemeltetéséhez, a rendelések feldolgozásához, az áruk kézbesítéséhez, a jogszabályoknak való
        megfeleléshez vagy vállalkozásunk védelméhez.
      </p>
      <p>10.3 Személyes adatokat a következőkkel oszthatunk meg:</p>
      <ul>
        <li>fizetésfeldolgozók és kártyás fizetési szolgáltatók;</li>
        <li>bankok, kártyahálózatok és csalásmegelőzési szolgáltatók;</li>
        <li>e-kereskedelmi platformszolgáltatók;</li>
        <li>tárhely-, IT-, infrastruktúra- és biztonsági szolgáltatók;</li>
        <li>futárszolgálatok, kézbesítési partnerek, postai szolgáltatók, vámügynökök és logisztikai szolgáltatók;</li>
        <li>vámhatóságok és más hatóságok, ahol szükséges;</li>
        <li>e-mail-, kommunikációs és ügyfélszolgálati szolgáltatók;</li>
        <li>analitikai és sütitechnológiai szolgáltatók;</li>
        <li>marketingszolgáltatók, adott esetben;</li>
        <li>szakmai tanácsadók, köztük könyvelők, könyvvizsgálók, biztosítók, ügyvédek és tanácsadók;</li>
        <li>szabályozó hatóságok, bíróságok, bűnüldöző szervek, adóhatóságok vagy állami szervek, ahol azt jogszabály előírja;</li>
        <li>üzleti partnerek vagy jogutódok átszervezés, egyesülés, értékesítés, finanszírozás, vagy vállalkozásunk egészének vagy egy részének átruházása esetén.</li>
      </ul>
      <p>
        10.4 Megköveteljük a szolgáltatóktól, hogy a személyes adatokat csak engedélyezett célokra kezeljék, és
        megfelelő biztonsági és titoktartási intézkedéseket alkalmazzanak.
      </p>

      <h2>11. Nemzetközi adattovábbítások</h2>
      <p>
        11.1 Mivel a MisaElectro nemzetközileg értékesít, és harmadik fél szolgáltatókat vesz igénybe, az Ön
        személyes adatai az Egyesült Királyságon, az Európai Gazdasági Térségen vagy az Ön lakóhely szerinti
        országon kívül is kezelhetők.
      </p>
      <p>
        11.2 Nemzetközi továbbításokra akkor kerülhet sor, amikor más országokban található tárhely-,
        e-kereskedelmi, fizetési, analitikai, kommunikációs, kézbesítési, vám- vagy támogatási szolgáltatókat
        veszünk igénybe.
      </p>
      <p>
        11.3 Ahol azt az adatvédelmi jog megköveteli, megfelelő garanciákat alkalmazunk a nemzetközi
        továbbításokhoz. Ezek a következőket foglalhatják magukban:
      </p>
      <ul>
        <li>megfelelőségi rendeletek vagy megfelelőségi határozatok;</li>
        <li>az Egyesült Királyság nemzetközi adattovábbítási megállapodása;</li>
        <li>az Egyesült Királyság kiegészítése az EU általános szerződési feltételeihez;</li>
        <li>az EU általános szerződési feltételei;</li>
        <li>szerződéses és szervezési garanciák;</li>
        <li>az alkalmazandó jog által megengedett egyéb jogszerű továbbítási mechanizmusok.</li>
      </ul>
      <p>
        11.4 Ésszerű lépéseket teszünk annak biztosítására, hogy a nemzetközileg továbbított személyes adatok
        védettek maradjanak az alkalmazandó adatvédelmi követelményeknek megfelelően.
      </p>

      <h2>12. Adatmegőrzés</h2>
      <p>
        12.1 A személyes adatokat csak addig őrizzük meg, ameddig az a jelen Adatvédelmi szabályzatban leírt
        célokhoz ésszerűen szükséges, kivéve, ha hosszabb megőrzési időszakot jogszabály ír elő vagy engedélyez.
      </p>
      <p>
        12.2 Megőrzési időszakaink változhatnak az adatok típusától, az adatkezelés céljától, a jogi
        követelményektől, a számviteli kötelezettségektől, az adószabályoktól, a jótállási időszakoktól, a viták
        kockázatától, a csalásmegelőzési igényektől és a működési követelményektől függően.
      </p>
      <p>12.3 Általános útmutatásként:</p>
      <table>
        <thead>
          <tr>
            <th>Adatkategória</th>
            <th>Szokásos megőrzési időszak</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Rendelési, tranzakciós, számla-, számviteli és adónyilvántartások</td><td>Legfeljebb 7 év</td></tr>
          <tr><td>Ügyfélfiók-adatok</td><td>Ameddig a fiók aktív marad, majd azt követően ésszerű ideig</td></tr>
          <tr><td>Ügyfélszolgálati kommunikáció</td><td>Az ügy lezárását követően legfeljebb 3 évig, kivéve, ha hosszabb megőrzés szükséges</td></tr>
          <tr><td>Visszaküldési, visszatérítési, panasz- és jótállási nyilvántartások</td><td>A vonatkozó jótállási, elévülési vagy vitás időszakra</td></tr>
          <tr><td>Marketing-hozzájárulási és leiratkozási nyilvántartások</td><td>Visszavonásig, majd a leiratkozási beállítások betartásához szükséges mértékben megőrizve</td></tr>
          <tr><td>Analitikai és technikai adatok</td><td>Általában 12&ndash;26 hónap, a vonatkozó eszköztől függően</td></tr>
          <tr><td>Csalási, visszaterhelési, szankciós vagy megfelelőségi nyilvántartások</td><td>Ameddig az a megelőzéshez, kivizsgáláshoz és jogi megfeleléshez ésszerűen szükséges</td></tr>
        </tbody>
      </table>
      <p>
        12.4 Az adatokat hosszabb ideig is megőrizhetjük, ahol ez szükséges jogi igények megállapításához,
        érvényesítéséhez vagy védelméhez, jogi kötelezettségek teljesítéséhez, csalás vagy visszaélés
        kivizsgálásához, viták rendezéséhez vagy Általános szerződési feltételeink érvényesítéséhez.
      </p>
      <p>
        12.5 Amikor a személyes adatokra már nincs szükség, azokat töröljük, anonimizáljuk, vagy adott esetben
        biztonságosan archiváljuk.
      </p>

      <h2>13. A személyes adatok biztonsága</h2>
      <p>
        13.1 Ésszerű technikai és szervezési intézkedéseket teszünk a személyes adatok jogosulatlan
        hozzáféréssel, elvesztéssel, visszaéléssel, módosítással, közzététellel vagy megsemmisítéssel szembeni
        védelme érdekében.
      </p>
      <p>
        13.2 Ezek az intézkedések magukban foglalhatnak hozzáférés-vezérlést, biztonságos fizetésfeldolgozást,
        adott esetben titkosítást, rendszerfigyelést, fiókbiztonsági intézkedéseket, szolgáltatói átvilágítást
        és belső kontrollokat.
      </p>
      <p>
        13.3 Egyetlen webhely, fizetési rendszer, továbbítási módszer vagy tárolórendszer sem garantálható
        teljesen biztonságosnak.
      </p>
      <p>
        13.4 Ön felelős a fiók bejelentkezési adatainak bizalmas kezeléséért, valamint azért, hogy haladéktalanul
        értesítsen minket, ha úgy véli, hogy fiókjához jogosulatlanul hozzáfértek.
      </p>

      <h2>14. Az Ön adatvédelmi jogai</h2>
      <p>
        14.1 Az Ön tartózkodási helyétől és az alkalmazandó adatvédelmi jogtól függően a következő jogokkal
        rendelkezhet személyes adataival kapcsolatban:
      </p>
      <ul>
        <li>a jog, hogy tájékoztatást kapjon személyes adatai felhasználásának módjáról;</li>
        <li>a jog, hogy hozzáférjen személyes adatai egy másolatához;</li>
        <li>a jog, hogy kérje a pontatlan vagy hiányos személyes adatok helyesbítését;</li>
        <li>a jog, hogy bizonyos körülmények között kérje személyes adatai törlését;</li>
        <li>a jog, hogy bizonyos körülmények között kérje az adatkezelés korlátozását;</li>
        <li>a jog, hogy tiltakozzon a jogos érdekeken alapuló adatkezelés ellen;</li>
        <li>a jog, hogy bármikor tiltakozzon a közvetlen üzletszerzés ellen;</li>
        <li>a jog az adathordozhatósághoz bizonyos körülmények között;</li>
        <li>a jog, hogy visszavonja hozzájárulását, ahol az adatkezelés hozzájáruláson alapul;</li>
        <li>az automatizált döntéshozatallal és profilalkotással kapcsolatos jogok, ahol alkalmazandó;</li>
        <li>a jog, hogy panaszt tegyen egy felügyeleti hatóságnál.</li>
      </ul>
      <p>
        14.2 Ezek a jogok nem abszolút jellegűek, és jogi feltételek, kivételek, személyazonosság-ellenőrzés és
        jogi kötelezettségeink hatálya alá tartozhatnak.
      </p>
      <p>14.3 Jogai gyakorlásához kérjük, lépjen kapcsolatba velünk az info@misaelectro.ro címen.</p>
      <p>14.4 Előfordulhat, hogy a kérésre való válaszadás előtt ellenőriznünk kell személyazonosságát.</p>
      <p>
        14.5 Célunk, hogy az érvényes adatvédelmi kérelmekre az alkalmazandó jog által előírt határidőn belül
        válaszoljunk.
      </p>

      <h2>15. Panaszok</h2>
      <p>
        15.1 Ha aggályai vannak azzal kapcsolatban, hogyan kezeljük személyes adatait, kérjük, először lépjen
        kapcsolatba velünk az info@misaelectro.ro címen, hogy megpróbálhassuk rendezni az ügyet.
      </p>
      <p>
        15.2 Ha Ön az Egyesült Királyságban tartózkodik, jogában áll panaszt tenni az Információs Biztos
        Hivatalánál (Information Commissioner&rsquo;s Office).
      </p>
      <p>
        15.3 Ha Ön az Európai Unióban vagy az Európai Gazdasági Térségben tartózkodik, jogában állhat panaszt
        tenni a helyi adatvédelmi felügyeleti hatóságnál.
      </p>

      <h2>16. Automatizált döntéshozatal és profilalkotás</h2>
      <p>
        16.1 Jelenleg nem használjuk fel a személyes adatokat olyan döntések meghozatalára, amelyek kizárólag
        automatizáltak, és amelyek Önre nézve jogi vagy hasonlóan jelentős hatással járnak.
      </p>
      <p>
        16.2 Automatizált eszközöket használhatunk a csalásmegelőzés, a fizetésbiztonság, a Weboldal
        biztonsága, a kockázatértékelés vagy a tranzakciófigyelés támogatására.
      </p>
      <p>
        16.3 Ezek az eszközök segítenek a potenciálisan gyanús tevékenység azonosításában, de általában nem
        hoznak olyan végleges döntéseket, amelyek jogi vagy hasonlóan jelentős hatással járnak, megfelelő
        felülvizsgálat nélkül.
      </p>
      <p>
        16.4 Ha olyan automatizált döntéshozatalt vezetünk be, amely jogi vagy hasonlóan jelentős hatással jár,
        frissíteni fogjuk ezt az Adatvédelmi szabályzatot, és megadjuk az alkalmazandó jog által előírt
        információkat.
      </p>

      <h2>17. Harmadik felek webhelyei és szolgáltatásai</h2>
      <p>
        17.1 A Weboldal tartalmazhat hivatkozásokat harmadik felek webhelyeire, gyártói webhelyekre, fizetési
        oldalakra, futárszolgálati nyomon követési oldalakra, közösségi média oldalakra vagy más külső
        szolgáltatásokra.
      </p>
      <p>
        17.2 Nem vagyunk felelősek harmadik felek webhelyeinek vagy szolgáltatásainak adatvédelmi gyakorlatáért,
        biztonságáért, tartalmáért vagy szabályzataiért.
      </p>
      <p>
        17.3 Mielőtt bármely harmadik fél webhelyének vagy szolgáltatásának személyes adatokat adna meg, tekintse
        át annak adatvédelmi szabályzatát.
      </p>

      <h2>18. Gyermekek adatvédelme</h2>
      <p>18.1 A Weboldal nem gyermekeknek szól.</p>
      <p>18.2 Nem gyűjtünk tudatosan személyes adatokat gyermekektől.</p>
      <p>
        18.3 Ha úgy véli, hogy egy gyermek személyes adatokat adott meg nekünk, kérjük, lépjen kapcsolatba
        velünk az info@misaelectro.ro címen, és megfelelő lépéseket teszünk az információk felülvizsgálata és
        szükség esetén törlése érdekében.
      </p>

      <h2>19. A jelen Adatvédelmi szabályzat módosításai</h2>
      <p>
        19.1 Időről időre frissíthetjük ezt az Adatvédelmi szabályzatot, hogy tükrözze a vállalkozásunkban, a
        Weboldal működésében, a szolgáltatóinkban, az adatkezelési gyakorlatunkban, a jogi követelményekben vagy
        a szabályozási iránymutatásokban bekövetkezett változásokat.
      </p>
      <p>
        19.2 Amikor frissítjük ezt az Adatvédelmi szabályzatot, felülvizsgáljuk az oldal tetején található
        &bdquo;Utolsó frissítés&rdquo; dátumát.
      </p>
      <p>
        19.3 A frissített változat a Weboldalon való közzététel napjától alkalmazandó, kivéve, ha másként
        rendelkezünk.
      </p>
      <p>
        19.4 Javasoljuk, hogy időnként tekintse át ezt az Adatvédelmi szabályzatot, hogy tájékozott maradjon
        arról, hogyan kezeljük a személyes adatokat.
      </p>

      <h2>20. Kapcsolattartási információk</h2>
      <p>
        Ha bármilyen kérdése, kérése vagy aggálya van a jelen Adatvédelmi szabályzattal vagy azzal
        kapcsolatban, hogyan kezeljük a személyes adatokat, kérjük, lépjen kapcsolatba velünk:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  bg: (
    <PolicyLayout title="Политика за поверителност" lastUpdated="29 май 2026 г.">
      <p>
        Тази Политика за поверителност обяснява как MISARELIANA S.R.L., извършваща дейност под търговското
        наименование MisaElectro, събира, използва, съхранява, споделя и защитава лични данни, когато
        посещавате www.misaelectro.ro, създавате акаунт, правите поръчка, свързвате се с нас, използвате нашите
        услуги или взаимодействате с нас по друг начин.
      </p>
      <p>Уебсайтът се управлява от:</p>
      <ContactBlock />
      <p>
        В тази Политика за поверителност &bdquo;MisaElectro&rdquo;, &bdquo;ние&rdquo;, &bdquo;нас&rdquo; или
        &bdquo;наш&rdquo; означава MISARELIANA S.R.L.. &bdquo;Клиент&rdquo;, &bdquo;Вие&rdquo; или
        &bdquo;Ваш&rdquo; означава всяко лице, което използва Уебсайта, прави поръчка, създава акаунт, свързва
        се с нас или взаимодейства с нашите услуги.
      </p>
      <p>
        Ангажирани сме да защитаваме Вашата поверителност и да обработваме Вашите лични данни законосъобразно,
        добросъвестно и прозрачно.
      </p>

      <h2>1. Обхват на тази Политика за поверителност</h2>
      <p>1.1 Тази Политика за поверителност се прилага към лични данни, обработвани във връзка със:</p>
      <ul>
        <li>посещение или разглеждане на Уебсайта;</li>
        <li>създаване или използване на клиентски акаунт;</li>
        <li>правене, управление или получаване на поръчка;</li>
        <li>закупуване на електрически стоки, електрически материали, аксесоари за окабеляване, продукти, свързани с осветлението, монтажни компоненти и свързани стоки;</li>
        <li>кандидатстване за или използване на достъп за търговски, бизнес или професионални клиенти;</li>
        <li>свързване с отдела за обслужване на клиенти;</li>
        <li>заявяване на актуализации за доставка, връщания, възстановявания на суми, гаранционна поддръжка или съдействие относно продукти;</li>
        <li>абониране за маркетингови съобщения;</li>
        <li>взаимодействие с бисквитки, анализи, реклама или подобни технологии;</li>
        <li>комуникация с нас по имейл, телефон, формуляри или други канали.</li>
      </ul>
      <p>1.2 Тази Политика за поверителност се прилага както към Потребители, така и към Бизнес клиенти.</p>
      <p>
        1.3 Тази Политика за поверителност следва да се чете заедно с нашите Общи условия, Политика за доставка,
        Политика за връщане и възстановяване на суми, Политика за бисквитките и всяка друга политика или
        уведомление, предоставено на Уебсайта.
      </p>

      <h2>2. Администратор на данни</h2>
      <p>
        2.1 За целите на приложимите закони за защита на данните, включително Общия регламент относно защитата
        на данните на Обединеното кралство, Закона за защита на данните от 2018 г. и, където е приложимо, Общия
        регламент на ЕС относно защитата на данните, MISARELIANA S.R.L. е администраторът на Вашите лични данни.
      </p>
      <p>2.2 Това означава, че ние определяме защо и как се обработват Вашите лични данни.</p>
      <p>2.3 Можете да се свържете с нас по въпроси, свързани с поверителността, като използвате следните данни:</p>
      <ContactBlock />
      <p>
        2.4 Не сме назначили длъжностно лице по защита на данните, тъй като понастоящем не сме задължени да го
        правим. Въпреки това запитванията, свързани с поверителността, могат да бъдат изпращани на посочените
        по-горе данни за контакт.
      </p>

      <h2>3. Лични данни, които събираме</h2>
      <p>3.1 Личните данни, които събираме, зависят от начина, по който взаимодействате с MisaElectro.</p>
      <p>3.2 Можем да събираме и обработваме следните категории лични данни.</p>

      <h3>3.2.1 Данни за самоличност и контакт</h3>
      <p>Те могат да включват:</p>
      <ul>
        <li>пълно име;</li>
        <li>адрес за фактуриране;</li>
        <li>адрес за доставка;</li>
        <li>имейл адрес;</li>
        <li>телефонен номер;</li>
        <li>име на фирма, където е приложимо;</li>
        <li>номер по ДДС, данъчен номер или бизнес данни, където е приложимо;</li>
        <li>потребителско име на акаунта или клиентски референтен номер.</li>
      </ul>

      <h3>3.2.2 Данни за акаунта</h3>
      <p>Ако създадете акаунт или използвате функции на клиентски акаунт, можем да обработваме:</p>
      <ul>
        <li>данни за вход в акаунта;</li>
        <li>предпочитания за акаунта;</li>
        <li>запазени адреси;</li>
        <li>история на поръчките;</li>
        <li>списък с желания или запазени продукти, където е наличен;</li>
        <li>статус на акаунта;</li>
        <li>предпочитания за комуникация.</li>
      </ul>
      <p>
        Нямаме достъп до Вашата парола в четим вид, където се използват сигурни системи за пароли.
      </p>

      <h3>3.2.3 Данни за поръчки и транзакции</h3>
      <p>Когато правите поръчка, можем да обработваме:</p>
      <ul>
        <li>поръчани продукти;</li>
        <li>номер на поръчката;</li>
        <li>стойност на поръчката;</li>
        <li>избрана валута;</li>
        <li>статус на плащането;</li>
        <li>метод на доставка;</li>
        <li>информация за изпращане и проследяване;</li>
        <li>информация за фактура и разписка;</li>
        <li>записи за възстановяване на суми, връщане, отмяна или гаранция;</li>
        <li>история на обслужването на клиенти, свързана с поръчката.</li>
      </ul>

      <h3>3.2.4 Данни за плащане</h3>
      <p>Плащанията се обработват от сигурни трети страни доставчици на платежни услуги.</p>
      <p>
        Не съхраняваме пълния номер на Вашата карта, пълния код за сигурност на картата или пълните данни за
        картата.
      </p>
      <p>Можем да получаваме и съхраняваме ограничена информация, свързана с плащането, като например:</p>
      <ul>
        <li>потвърждение на плащането;</li>
        <li>идентификатор на транзакцията;</li>
        <li>референтен номер на доставчика на платежни услуги;</li>
        <li>последните четири цифри на карта, когато са предоставени от доставчика на платежни услуги;</li>
        <li>марка на картата, като Visa или Mastercard;</li>
        <li>статус на проверка за измами;</li>
        <li>информация за възстановяване на суми или възражения по плащания.</li>
      </ul>

      <h3>3.2.5 Данни за доставка и митници</h3>
      <p>За да изпълним Вашата поръчка, можем да обработваме:</p>
      <ul>
        <li>адрес за доставка;</li>
        <li>име на получателя;</li>
        <li>телефонен номер;</li>
        <li>имейл адрес;</li>
        <li>номер за проследяване;</li>
        <li>записи на куриера;</li>
        <li>доказателство за доставка;</li>
        <li>информация за митническа декларация;</li>
        <li>информация за търговска фактура;</li>
        <li>информация за внос/износ, необходима за международни пратки.</li>
      </ul>
      <p>
        За международни поръчки определени данни за поръчката и доставката могат да бъдат предоставяни на
        куриери, митнически агенти, митнически органи или местни партньори за доставка.
      </p>

      <h3>3.2.6 Данни за бизнес и търговски клиенти</h3>
      <p>
        Ако купувате като Бизнес клиент, кандидатствате за търговски достъп или взаимодействате с нас в
        професионално качество, можем да обработваме:
      </p>
      <ul>
        <li>име на фирма;</li>
        <li>търговско наименование;</li>
        <li>регистрационни данни;</li>
        <li>данни за ДДС/данъци;</li>
        <li>бизнес адрес;</li>
        <li>лице за бизнес контакт;</li>
        <li>професионална роля;</li>
        <li>информация за търговец или изпълнител;</li>
        <li>история на поръчките;</li>
        <li>записи за бизнес комуникация.</li>
      </ul>

      <h3>3.2.7 Данни за обслужване на клиенти и комуникация</h3>
      <p>Когато се свързвате с нас, можем да обработваме:</p>
      <ul>
        <li>имейл кореспонденция;</li>
        <li>данни за телефонни разговори;</li>
        <li>изпратени формуляри за контакт;</li>
        <li>данни за заявка за поддръжка;</li>
        <li>въпроси относно продукти;</li>
        <li>данни за оплаквания;</li>
        <li>заявки за връщане или възстановяване на суми;</li>
        <li>информация за гаранционни претенции;</li>
        <li>снимки, видеоклипове, документи или други файлове, които предоставяте като доказателство за проблеми с продукта, повреда при доставка, притеснения относно монтажа или гаранционни претенции.</li>
      </ul>

      <h3>3.2.8 Технически данни и данни за използване</h3>
      <p>Когато използвате Уебсайта, можем автоматично да събираме:</p>
      <ul>
        <li>IP адрес;</li>
        <li>тип и версия на браузъра;</li>
        <li>тип на устройството;</li>
        <li>операционна система;</li>
        <li>приблизително местоположение въз основа на IP адреса;</li>
        <li>посетени страници;</li>
        <li>уебсайт на препращане;</li>
        <li>час и дата на посещенията;</li>
        <li>информация за сесията;</li>
        <li>данни за последователността на кликвания;</li>
        <li>дневници на грешки;</li>
        <li>дневници за сигурност;</li>
        <li>данни за производителност.</li>
      </ul>

      <h3>3.2.9 Данни за бисквитки и проследяване</h3>
      <p>
        Можем да използваме бисквитки и подобни технологии, за да събираме информация за Вашата дейност при
        разглеждане, предпочитания, дейност в количката, взаимодействия с анализи и, където дадете съгласие,
        взаимодействия с маркетинг или реклама.
      </p>
      <p>Повече подробности са предоставени в нашата Политика за бисквитките.</p>

      <h3>3.2.10 Данни за маркетингови предпочитания</h3>
      <p>Ако се абонирате за маркетинг или взаимодействате с промоционални съобщения, можем да обработваме:</p>
      <ul>
        <li>имейл адрес;</li>
        <li>статус на абонамент;</li>
        <li>маркетингово съгласие;</li>
        <li>записи за отписване;</li>
        <li>предпочитания за комуникация;</li>
        <li>данни за ангажираност с имейли, като отваряния и кликвания, където се поддържат от нашите маркетингови инструменти.</li>
      </ul>

      <h3>3.2.11 Данни за предотвратяване на измами и съответствие</h3>
      <p>
        За да защитим нашия бизнес, клиенти, платежни системи и правни задължения, можем да обработваме:
      </p>
      <ul>
        <li>индикатори за риск на поръчката;</li>
        <li>резултати от проверка на плащането;</li>
        <li>несъответствия между фактуриране и доставка;</li>
        <li>индикатори за IP адрес и местоположение;</li>
        <li>проверки за санкции или ограничени дестинации;</li>
        <li>история на възраженията по плащания;</li>
        <li>записи за предполагаеми измами;</li>
        <li>бележки от преглед за съответствие.</li>
      </ul>

      <h2>4. Лични данни, които не възнамеряваме да събираме</h2>
      <p>
        4.1 Не събираме умишлено специални категории лични данни, като информация за здраве, раса, етническа
        принадлежност, политически възгледи, религиозни убеждения, членство в синдикати, биометрични данни или
        сексуална ориентация.
      </p>
      <p>
        4.2 Моля, не ни изпращайте специални категории данни, освен ако това не е строго необходимо за конкретен
        въпрос и ние сме ги поискали.
      </p>
      <p>4.3 Не събираме съзнателно лични данни от деца.</p>
      <p>
        4.4 Уебсайтът е предназначен за потребители на възраст 18 години или повече, тъй като нашите стоки
        включват електрически продукти и материали, които могат да изискват технически познания и безопасна
        употреба.
      </p>

      <h2>5. Как събираме лични данни</h2>
      <p>5.1 Можем да събираме лични данни директно от Вас, когато:</p>
      <ul>
        <li>посещавате Уебсайта;</li>
        <li>създавате акаунт;</li>
        <li>правите поръчка;</li>
        <li>въвеждате данни за фактуриране или доставка;</li>
        <li>извършвате плащане;</li>
        <li>свързвате се с нас;</li>
        <li>заявявате поддръжка;</li>
        <li>подавате заявка за връщане, възстановяване на суми или гаранция;</li>
        <li>абонирате се за маркетинг;</li>
        <li>попълвате формуляри или предоставяте информация чрез Уебсайта.</li>
      </ul>
      <p>
        5.2 Можем да събираме лични данни автоматично, когато използвате Уебсайта, включително чрез бисквитки,
        инструменти за анализ, дневници, системи за сигурност и подобни технологии.
      </p>
      <p>5.3 Можем да получаваме лични данни от трети страни, включително:</p>
      <ul>
        <li>обработващи плащания;</li>
        <li>картови мрежи и доставчици за предотвратяване на измами;</li>
        <li>куриери и партньори за доставка;</li>
        <li>митнически агенти и митнически органи;</li>
        <li>доставчици на платформи за електронна търговия;</li>
        <li>доставчици на анализи;</li>
        <li>доставчици на маркетингови и комуникационни услуги;</li>
        <li>доставчици на ИТ, хостинг, сигурност и инфраструктура;</li>
        <li>професионални консултанти;</li>
        <li>публични органи, когато това се изисква по закон.</li>
      </ul>

      <h2>6. Как използваме Вашите лични данни</h2>
      <p>6.1 Използваме Вашите лични данни за целите, описани по-долу.</p>

      <h3>6.1.1 За обработка и изпълнение на поръчки</h3>
      <p>Използваме лични данни, за да:</p>
      <ul>
        <li>получаваме и обработваме поръчки;</li>
        <li>потвърждаваме плащане;</li>
        <li>издаваме потвърждения, разписки и фактури;</li>
        <li>подготвяме стоки за изпращане;</li>
        <li>организираме доставка;</li>
        <li>предоставяме данни за проследяване;</li>
        <li>обработваме митническа документация, където се изисква;</li>
        <li>управляваме отмени, връщания, възстановявания на суми и гаранционни претенции.</li>
      </ul>

      <h3>6.1.2 За предоставяне на обслужване на клиенти</h3>
      <p>Използваме лични данни, за да:</p>
      <ul>
        <li>отговаряме на запитвания;</li>
        <li>съдействаме при въпроси относно продукти, поръчки или доставка;</li>
        <li>разследваме повредени, дефектни, неправилни или липсващи стоки;</li>
        <li>управляваме оплаквания;</li>
        <li>обработваме заявки за връщане и гаранция;</li>
        <li>комуникираме относно Вашата поръчка или акаунт.</li>
      </ul>

      <h3>6.1.3 За управление и подобряване на Уебсайта</h3>
      <p>Използваме лични данни, за да:</p>
      <ul>
        <li>поддържаме функционалността на Уебсайта;</li>
        <li>подобряваме навигацията и потребителското изживяване;</li>
        <li>наблюдаваме производителността;</li>
        <li>отстраняваме грешки;</li>
        <li>тестваме и подобряваме функциите на Уебсайта;</li>
        <li>разбираме как клиентите използват Уебсайта.</li>
      </ul>

      <h3>6.1.4 За управление на акаунти и търговски достъп</h3>
      <p>Използваме лични данни, за да:</p>
      <ul>
        <li>създаваме и управляваме клиентски акаунти;</li>
        <li>проверяваме бизнес или търговска информация, където е приложимо;</li>
        <li>предоставяме функции на акаунта;</li>
        <li>управляваме търговско ценообразуване или бизнес достъп, където е наличен;</li>
        <li>поддържаме сигурността на акаунта.</li>
      </ul>

      <h3>6.1.5 За предотвратяване на измами и защита на сигурността</h3>
      <p>Използваме лични данни, за да:</p>
      <ul>
        <li>откриваме и предотвратяваме измами;</li>
        <li>наблюдаваме подозрителна дейност;</li>
        <li>защитаваме платежните системи;</li>
        <li>предотвратяваме злоупотреба с Уебсайта;</li>
        <li>обезопасяваме акаунти и системи;</li>
        <li>разследваме неоторизиран достъп или злоупотреба;</li>
        <li>управляваме възражения по плащания и спорове за плащания.</li>
      </ul>

      <h3>6.1.6 За спазване на правни и регулаторни задължения</h3>
      <p>Използваме лични данни, за да:</p>
      <ul>
        <li>спазваме данъчни, счетоводни, дружествени, потребителски, митнически, санкционни, свързани с финансови престъпления и правни задължения;</li>
        <li>водим законово изисквани записи;</li>
        <li>отговаряме на законни искания от органи;</li>
        <li>управляваме спорове и правни претенции.</li>
      </ul>

      <h3>6.1.7 За изпращане на маркетингови съобщения</h3>
      <p>
        Където е разрешено от закона, можем да използваме Вашите данни за контакт, за да изпращаме маркетингови
        съобщения относно продукти, оферти, промоции, актуализации или услуги, които могат да бъдат от значение
        за Вас.
      </p>
      <p>Можете да се отпишете от маркетинг по всяко време.</p>

      <h3>6.1.8 За използване на бисквитки и анализи</h3>
      <p>Използваме бисквитки и подобни технологии, за да:</p>
      <ul>
        <li>управляваме основните функции на Уебсайта;</li>
        <li>запомняме предпочитания;</li>
        <li>поддържаме функционалността на количката;</li>
        <li>измерваме трафика на Уебсайта;</li>
        <li>анализираме производителността;</li>
        <li>подобряваме Уебсайта;</li>
        <li>подкрепяме маркетинг или реклама, където сте дали съгласие, когато се изисква.</li>
      </ul>

      <h2>7. Правни основания за обработване</h2>
      <p>7.1 Обработваме лични данни само когато имаме законно основание за това.</p>
      <table>
        <thead>
          <tr>
            <th>Цел</th>
            <th>Правно основание</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Обработка и изпълнение на поръчки</td><td>Договорна необходимост</td></tr>
          <tr><td>Приемане на плащане и потвърждаване на транзакции</td><td>Договорна необходимост</td></tr>
          <tr><td>Доставка на стоки</td><td>Договорна необходимост</td></tr>
          <tr><td>Обработка на връщания, възстановявания на суми и гаранционни претенции</td><td>Договорна необходимост; правно задължение; законни интереси</td></tr>
          <tr><td>Обслужване на клиенти</td><td>Договорна необходимост; законни интереси</td></tr>
          <tr><td>Създаване и управление на акаунт</td><td>Договорна необходимост; законни интереси</td></tr>
          <tr><td>Проверка на бизнес или търговски акаунт</td><td>Договорна необходимост; законни интереси</td></tr>
          <tr><td>Предотвратяване на измами и сигурност на Уебсайта</td><td>Законни интереси; правно задължение</td></tr>
          <tr><td>Митнически, данъчни, счетоводни и правни записи</td><td>Правно задължение</td></tr>
          <tr><td>Отговаряне на правни претенции или спорове</td><td>Законни интереси; правно задължение</td></tr>
          <tr><td>Подобряване на услугата и анализи на Уебсайта</td><td>Законни интереси; съгласие, където се изисква</td></tr>
          <tr><td>Неосновни бисквитки и проследяване</td><td>Съгласие, където се изисква</td></tr>
          <tr><td>Маркетингови имейли</td><td>Съгласие или законни интереси, където е разрешено от закона</td></tr>
          <tr><td>Проверки за санкции и съответствие</td><td>Правно задължение; законни интереси</td></tr>
        </tbody>
      </table>
      <p>
        7.2 Където разчитаме на законни интереси, правим това само когато считаме, че нашите интереси не се
        преодоляват от Вашите права и свободи.
      </p>
      <p>
        7.3 Нашите законни интереси могат да включват управлението на онлайн магазин, изпълнението на
        клиентски поръчки, подобряването на нашия Уебсайт, предотвратяването на измами, защитата на нашите
        системи, управлението на взаимоотношенията с клиенти, прилагането на нашите Условия и защитата на
        нашите правни и търговски интереси.
      </p>
      <p>
        7.4 Където разчитаме на съгласие, можете да оттеглите съгласието си по всяко време. Оттеглянето на
        съгласието не засяга обработването, извършено преди оттеглянето на съгласието.
      </p>

      <h2>8. Маркетингови съобщения</h2>
      <p>
        8.1 Можем да Ви изпращаме маркетингови съобщения, когато сте дали съгласие или когато приложимото право
        ни позволява да го правим.
      </p>
      <p>
        8.2 Маркетинговите съобщения могат да включват актуализации на продукти, оферти, промоции, известия за
        наличност, актуализации на услуги или информация за продукти, подобни на тези, които сте закупили или
        разгледали.
      </p>
      <p>
        8.3 Можете да се отпишете от маркетингови съобщения по всяко време, като използвате връзката за
        отписване в съответния имейл или като се свържете с нас на info@misaelectro.ro.
      </p>
      <p>
        8.4 Дори ако се отпишете от маркетинг, все пак можем да Ви изпращаме служебни съобщения, като
        потвърждения на поръчки, актуализации за доставка, известия за плащане, актуализации за възстановяване
        на суми, гаранционни съобщения или важни известия за акаунта и политиката.
      </p>

      <h2>9. Бисквитки и подобни технологии</h2>
      <p>
        9.1 Уебсайтът използва бисквитки и подобни технологии, като пиксели, тагове, локално съхранение и
        инструменти за анализ.
      </p>
      <p>
        9.2 Някои бисквитки са от съществено значение за функционирането на Уебсайта, включително бисквитки,
        използвани за функционалността на количката, плащането, сигурността, предотвратяването на измами и
        достъпа до акаунта.
      </p>
      <p>
        9.3 Неосновни бисквитки могат да се използват за анализи, измерване на производителност, персонализация,
        реклама или маркетинг, където е разрешено от закона и където се изисква съгласие.
      </p>
      <p>
        9.4 Когато посетите Уебсайта за първи път, може да Ви бъде представен банер за бисквитки или инструмент
        за съгласие, който Ви позволява да управлявате неосновните бисквитки.
      </p>
      <p>9.5 Можете също да управлявате бисквитките чрез настройките на Вашия браузър.</p>
      <p>9.6 За повече информация, моля, вижте нашата Политика за бисквитките.</p>

      <h2>10. Споделяне на Вашите лични данни</h2>
      <p>10.1 Не продаваме Вашите лични данни.</p>
      <p>
        10.2 Можем да споделяме Вашите лични данни с доверени трети страни, където е необходимо за управлението
        на Уебсайта, обработката на поръчки, доставката на стоки, спазването на закона или защитата на нашия
        бизнес.
      </p>
      <p>10.3 Можем да споделяме лични данни с:</p>
      <ul>
        <li>обработващи плащания и доставчици на картови плащания;</li>
        <li>банки, картови мрежи и доставчици за предотвратяване на измами;</li>
        <li>доставчици на платформи за електронна търговия;</li>
        <li>доставчици на хостинг, ИТ, инфраструктура и сигурност;</li>
        <li>куриери, партньори за доставка, пощенски оператори, митнически агенти и логистични доставчици;</li>
        <li>митнически органи и други публични органи, където се изисква;</li>
        <li>доставчици на имейл, комуникационни и клиентски услуги за поддръжка;</li>
        <li>доставчици на технологии за анализи и бисквитки;</li>
        <li>доставчици на маркетингови услуги, където е приложимо;</li>
        <li>професионални консултанти, включително счетоводители, одитори, застрахователи, адвокати и консултанти;</li>
        <li>регулатори, съдилища, правоприлагащи органи, данъчни органи или държавни органи, където се изисква по закон;</li>
        <li>бизнес партньори или правоприемници в случай на преструктуриране, сливане, продажба, финансиране или прехвърляне на целия или на част от нашия бизнес.</li>
      </ul>
      <p>
        10.4 Изискваме от доставчиците на услуги да обработват лични данни само за оторизирани цели и да
        прилагат подходящи мерки за сигурност и поверителност.
      </p>

      <h2>11. Международни трансфери на данни</h2>
      <p>
        11.1 Тъй като MisaElectro продава в международен план и използва трети страни доставчици на услуги,
        Вашите лични данни могат да бъдат обработвани извън Обединеното кралство, Европейското икономическо
        пространство или Вашата страна на пребиваване.
      </p>
      <p>
        11.2 Международни трансфери могат да настъпят, когато използваме доставчици на хостинг, електронна
        търговия, плащания, анализи, комуникации, доставка, митници или поддръжка, разположени в други държави.
      </p>
      <p>
        11.3 Където се изисква от закона за защита на данните, използваме подходящи гаранции за международните
        трансфери. Те могат да включват:
      </p>
      <ul>
        <li>регламенти за адекватност или решения за адекватност;</li>
        <li>Международното споразумение за трансфер на данни на Обединеното кралство;</li>
        <li>Приложението на Обединеното кралство към Стандартните договорни клаузи на ЕС;</li>
        <li>Стандартните договорни клаузи на ЕС;</li>
        <li>договорни и организационни гаранции;</li>
        <li>други законни механизми за трансфер, разрешени от приложимото право.</li>
      </ul>
      <p>
        11.4 Предприемаме разумни стъпки, за да гарантираме, че личните данни, прехвърляни в международен план,
        остават защитени в съответствие с приложимите изисквания за защита на данните.
      </p>

      <h2>12. Запазване на данни</h2>
      <p>
        12.1 Съхраняваме лични данни само толкова дълго, колкото е разумно необходимо за целите, описани в тази
        Политика за поверителност, освен ако по-дълъг период на запазване не се изисква или е разрешен от
        закона.
      </p>
      <p>
        12.2 Нашите периоди на запазване могат да варират в зависимост от вида на данните, целта на
        обработването, правните изисквания, счетоводните задължения, данъчните правила, гаранционните периоди,
        рисковете от спорове, нуждите от предотвратяване на измами и оперативните изисквания.
      </p>
      <p>12.3 Като общо ръководство:</p>
      <table>
        <thead>
          <tr>
            <th>Категория данни</th>
            <th>Обичаен период на запазване</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Записи за поръчки, транзакции, фактури, счетоводство и данъци</td><td>До 7 години</td></tr>
          <tr><td>Данни за клиентски акаунт</td><td>Докато акаунтът остава активен, след което за разумен период след това</td></tr>
          <tr><td>Комуникации за обслужване на клиенти</td><td>До 3 години след приключване на въпроса, освен ако не е необходимо по-дълго запазване</td></tr>
          <tr><td>Записи за връщания, възстановявания на суми, оплаквания и гаранции</td><td>За съответния гаранционен, давностен или спорен период</td></tr>
          <tr><td>Записи за маркетингово съгласие и отписване</td><td>До оттегляне, след което се запазват според необходимостта за спазване на предпочитанията за изключване</td></tr>
          <tr><td>Аналитични и технически данни</td><td>Обикновено 12&ndash;26 месеца, в зависимост от съответния инструмент</td></tr>
          <tr><td>Записи за измами, възражения по плащания, санкции или съответствие</td><td>Толкова дълго, колкото е разумно необходимо за предотвратяване, разследване и правно съответствие</td></tr>
        </tbody>
      </table>
      <p>
        12.4 Можем да запазим данни за по-дълъг период, където е необходимо за установяване, упражняване или
        защита на правни претенции, спазване на правни задължения, разследване на измами или злоупотреби,
        разрешаване на спорове или прилагане на нашите Общи условия.
      </p>
      <p>
        12.5 Когато личните данни вече не са необходими, ще ги изтрием, анонимизираме или сигурно архивираме,
        където е подходящо.
      </p>

      <h2>13. Сигурност на личните данни</h2>
      <p>
        13.1 Предприемаме разумни технически и организационни мерки за защита на личните данни срещу
        неоторизиран достъп, загуба, злоупотреба, промяна, разкриване или унищожаване.
      </p>
      <p>
        13.2 Тези мерки могат да включват контрол на достъпа, сигурна обработка на плащания, криптиране, където
        е подходящо, наблюдение на системата, мерки за сигурност на акаунта, надлежна проверка на доставчици и
        вътрешен контрол.
      </p>
      <p>
        13.3 Никой уебсайт, платежна система, метод на предаване или система за съхранение не може да бъде
        гарантиран като напълно сигурен.
      </p>
      <p>
        13.4 Вие носите отговорност за запазване на поверителността на данните за вход в акаунта Ви и за това да
        ни уведомите незабавно, ако смятате, че до Вашия акаунт е осъществен достъп без разрешение.
      </p>

      <h2>14. Вашите права за защита на данните</h2>
      <p>
        14.1 В зависимост от Вашето местоположение и приложимия закон за защита на данните, може да имате
        следните права във връзка с Вашите лични данни:
      </p>
      <ul>
        <li>правото да бъдете информирани за начина, по който се използват Вашите лични данни;</li>
        <li>правото на достъп до копие на Вашите лични данни;</li>
        <li>правото да поискате коригиране на неточни или непълни лични данни;</li>
        <li>правото да поискате изтриване на Вашите лични данни при определени обстоятелства;</li>
        <li>правото да поискате ограничаване на обработването при определени обстоятелства;</li>
        <li>правото да възразите срещу обработване, основано на законни интереси;</li>
        <li>правото да възразите срещу директен маркетинг по всяко време;</li>
        <li>правото на преносимост на данните при определени обстоятелства;</li>
        <li>правото да оттеглите съгласието си, където обработването се основава на съгласие;</li>
        <li>права, свързани с автоматизирано вземане на решения и профилиране, където е приложимо;</li>
        <li>правото да подадете жалба до надзорен орган.</li>
      </ul>
      <p>
        14.2 Тези права не са абсолютни и могат да подлежат на правни условия, изключения, проверка на
        самоличността и нашите правни задължения.
      </p>
      <p>14.3 За да упражните правата си, моля, свържете се с нас на info@misaelectro.ro.</p>
      <p>14.4 Може да се наложи да проверим Вашата самоличност, преди да отговорим на заявка.</p>
      <p>
        14.5 Стремим се да отговаряме на валидни заявки за защита на данните в срока, изискван от приложимото
        право.
      </p>

      <h2>15. Оплаквания</h2>
      <p>
        15.1 Ако имате притеснения относно начина, по който обработваме Вашите лични данни, моля, първо се
        свържете с нас на info@misaelectro.ro, за да можем да опитаме да разрешим въпроса.
      </p>
      <p>
        15.2 Ако се намирате в Обединеното кралство, имате право да подадете жалба до Службата на комисаря по
        информацията (Information Commissioner&rsquo;s Office).
      </p>
      <p>
        15.3 Ако се намирате в Европейския съюз или Европейското икономическо пространство, може да имате право
        да подадете жалба до местния надзорен орган за защита на данните.
      </p>

      <h2>16. Автоматизирано вземане на решения и профилиране</h2>
      <p>
        16.1 Понастоящем не използваме лични данни за вземане на решения, които са изцяло автоматизирани и които
        произвеждат правни или подобни значителни последици за Вас.
      </p>
      <p>
        16.2 Можем да използваме автоматизирани инструменти за подкрепа на предотвратяването на измами,
        сигурността на плащанията, сигурността на Уебсайта, оценката на риска или наблюдението на транзакциите.
      </p>
      <p>
        16.3 Тези инструменти помагат за идентифициране на потенциално подозрителна дейност, но обикновено не
        вземат окончателни решения, които имат правни или подобни значителни последици, без подходящ преглед.
      </p>
      <p>
        16.4 Ако въведем автоматизирано вземане на решения, което има правни или подобни значителни последици,
        ще актуализираме тази Политика за поверителност и ще предоставим информацията, изисквана от приложимото
        право.
      </p>

      <h2>17. Уебсайтове и услуги на трети страни</h2>
      <p>
        17.1 Уебсайтът може да съдържа връзки към уебсайтове на трети страни, уебсайтове на производители,
        страници за плащане, страници за проследяване на куриери, страници в социалните мрежи или други външни
        услуги.
      </p>
      <p>
        17.2 Не носим отговорност за практиките за поверителност, сигурността, съдържанието или политиките на
        уебсайтове или услуги на трети страни.
      </p>
      <p>
        17.3 Трябва да прегледате политиките за поверителност на всеки уебсайт или услуга на трета страна, преди
        да им предоставите лични данни.
      </p>

      <h2>18. Поверителност на децата</h2>
      <p>18.1 Уебсайтът не е насочен към деца.</p>
      <p>18.2 Не събираме съзнателно лични данни от деца.</p>
      <p>
        18.3 Ако смятате, че дете ни е предоставило лични данни, моля, свържете се с нас на info@misaelectro.ro
        и ще предприемем подходящи стъпки за преглед и изтриване на информацията, където се изисква.
      </p>

      <h2>19. Промени в тази Политика за поверителност</h2>
      <p>
        19.1 Можем да актуализираме тази Политика за поверителност от време на време, за да отразим промени в
        нашия бизнес, функционалността на Уебсайта, доставчиците на услуги, практиките за обработване на данни,
        правните изисквания или регулаторните насоки.
      </p>
      <p>
        19.2 Когато актуализираме тази Политика за поверителност, ще преразгледаме датата &bdquo;Последна
        актуализация&rdquo; в горната част на страницата.
      </p>
      <p>
        19.3 Актуализираната версия ще се прилага от датата на публикуването ѝ на Уебсайта, освен ако не е
        посочено друго.
      </p>
      <p>
        19.4 Препоръчваме Ви периодично да преглеждате тази Политика за поверителност, за да сте информирани за
        начина, по който обработваме личните данни.
      </p>

      <h2>20. Информация за контакт</h2>
      <p>
        Ако имате въпроси, заявки или притеснения относно тази Политика за поверителност или начина, по който
        обработваме лични данни, моля, свържете се с нас:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  en: (
    <PolicyLayout title="Privacy Policy" lastUpdated="29 May 2026">
      <p>
        This Privacy Policy explains how MISARELIANA S.R.L., trading as MisaElectro, collects, uses, stores, shares,
        and protects personal data when you visit www.misaelectro.ro, create an account, place an order,
        contact us, use our services, or otherwise interact with us.
      </p>
      <p>The Website is operated by:</p>
      <ContactBlock />
      <p>
        In this Privacy Policy, &ldquo;MisaElectro&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or
        &ldquo;our&rdquo; means MISARELIANA S.R.L.. &ldquo;Customer&rdquo;, &ldquo;you&rdquo; or
        &ldquo;your&rdquo; means any person using the Website, placing an order, creating an account,
        contacting us, or interacting with our services.
      </p>
      <p>
        We are committed to protecting your privacy and handling your personal data lawfully, fairly, and
        transparently.
      </p>

      <h2>1. Scope of This Privacy Policy</h2>
      <p>1.1 This Privacy Policy applies to personal data processed in connection with:</p>
      <ul>
        <li>visiting or browsing the Website;</li>
        <li>creating or using a customer account;</li>
        <li>placing, managing, or receiving an order;</li>
        <li>purchasing electrical goods, electrical materials, wiring accessories, lighting-related products, installation components, and related goods;</li>
        <li>applying for or using trade, business, or professional customer access;</li>
        <li>contacting customer support;</li>
        <li>requesting delivery updates, returns, refunds, warranty support, or product assistance;</li>
        <li>subscribing to marketing communications;</li>
        <li>interacting with cookies, analytics, advertising, or similar technologies;</li>
        <li>communicating with us by email, phone, forms, or other channels.</li>
      </ul>
      <p>1.2 This Privacy Policy applies to both Consumers and Business Customers.</p>
      <p>
        1.3 This Privacy Policy should be read together with our Terms and Conditions, Shipping Policy,
        Returns and Refunds Policy, Cookie Policy, and any other policy or notice made available on the
        Website.
      </p>

      <h2>2. Data Controller</h2>
      <p>
        2.1 For the purposes of applicable data protection laws, including the UK General Data Protection
        Regulation, the Data Protection Act 2018, and, where applicable, the EU General Data Protection
        Regulation, MISARELIANA S.R.L. is the data controller of your personal data.
      </p>
      <p>2.2 This means we determine why and how your personal data is processed.</p>
      <p>2.3 You can contact us about privacy matters using the following details:</p>
      <ContactBlock />
      <p>
        2.4 We have not appointed a Data Protection Officer because we are not currently required to do so.
        However, privacy-related enquiries may be sent to the contact details above.
      </p>

      <h2>3. Personal Data We Collect</h2>
      <p>3.1 The personal data we collect depends on how you interact with MisaElectro.</p>
      <p>3.2 We may collect and process the following categories of personal data.</p>

      <h3>3.2.1 Identity and Contact Data</h3>
      <p>This may include:</p>
      <ul>
        <li>full name;</li>
        <li>billing address;</li>
        <li>delivery address;</li>
        <li>email address;</li>
        <li>phone number;</li>
        <li>company name, where applicable;</li>
        <li>VAT number, tax number, or business details, where applicable;</li>
        <li>account username or customer reference.</li>
      </ul>

      <h3>3.2.2 Account Data</h3>
      <p>If you create an account or use customer account features, we may process:</p>
      <ul>
        <li>account login details;</li>
        <li>account preferences;</li>
        <li>saved addresses;</li>
        <li>order history;</li>
        <li>wishlist or saved products, where available;</li>
        <li>account status;</li>
        <li>communication preferences.</li>
      </ul>
      <p>
        We do not have access to your password in readable form where secure password systems are used.
      </p>

      <h3>3.2.3 Order and Transaction Data</h3>
      <p>When you place an order, we may process:</p>
      <ul>
        <li>products ordered;</li>
        <li>order number;</li>
        <li>order value;</li>
        <li>selected currency;</li>
        <li>payment status;</li>
        <li>delivery method;</li>
        <li>dispatch and tracking information;</li>
        <li>invoice and receipt information;</li>
        <li>refund, return, cancellation, or warranty records;</li>
        <li>customer service history related to the order.</li>
      </ul>

      <h3>3.2.4 Payment Data</h3>
      <p>Payments are processed by secure third-party payment providers.</p>
      <p>
        We do not store your full card number, full card security code, or complete card credentials.
      </p>
      <p>We may receive and store limited payment-related information, such as:</p>
      <ul>
        <li>payment confirmation;</li>
        <li>transaction ID;</li>
        <li>payment provider reference;</li>
        <li>last four digits of a card where provided by the payment provider;</li>
        <li>card brand, such as Visa or Mastercard;</li>
        <li>fraud screening status;</li>
        <li>refund or chargeback information.</li>
      </ul>

      <h3>3.2.5 Delivery and Customs Data</h3>
      <p>To fulfil your order, we may process:</p>
      <ul>
        <li>delivery address;</li>
        <li>recipient name;</li>
        <li>phone number;</li>
        <li>email address;</li>
        <li>tracking number;</li>
        <li>courier records;</li>
        <li>proof of delivery;</li>
        <li>customs declaration information;</li>
        <li>commercial invoice information;</li>
        <li>import/export information required for international shipments.</li>
      </ul>
      <p>
        For international orders, certain order and delivery details may be provided to couriers, customs
        brokers, customs authorities, or local delivery partners.
      </p>

      <h3>3.2.6 Business and Trade Customer Data</h3>
      <p>
        If you purchase as a Business Customer, apply for trade access, or interact with us in a
        professional capacity, we may process:
      </p>
      <ul>
        <li>company name;</li>
        <li>trading name;</li>
        <li>registration details;</li>
        <li>VAT/tax details;</li>
        <li>business address;</li>
        <li>business contact person;</li>
        <li>professional role;</li>
        <li>trade or contractor information;</li>
        <li>order history;</li>
        <li>business communication records.</li>
      </ul>

      <h3>3.2.7 Customer Support and Communication Data</h3>
      <p>When you contact us, we may process:</p>
      <ul>
        <li>email correspondence;</li>
        <li>phone call details;</li>
        <li>contact form submissions;</li>
        <li>support request details;</li>
        <li>product questions;</li>
        <li>complaint details;</li>
        <li>return or refund requests;</li>
        <li>warranty claim information;</li>
        <li>photos, videos, documents, or other files you provide to evidence product issues, delivery damage, installation concerns, or warranty claims.</li>
      </ul>

      <h3>3.2.8 Technical and Usage Data</h3>
      <p>When you use the Website, we may automatically collect:</p>
      <ul>
        <li>IP address;</li>
        <li>browser type and version;</li>
        <li>device type;</li>
        <li>operating system;</li>
        <li>approximate location based on IP address;</li>
        <li>pages visited;</li>
        <li>referring website;</li>
        <li>time and date of visits;</li>
        <li>session information;</li>
        <li>clickstream data;</li>
        <li>error logs;</li>
        <li>security logs;</li>
        <li>performance data.</li>
      </ul>

      <h3>3.2.9 Cookie and Tracking Data</h3>
      <p>
        We may use cookies and similar technologies to collect information about your browsing activity,
        preferences, cart activity, analytics interactions, and, where you consent, marketing or advertising
        interactions.
      </p>
      <p>More details are provided in our Cookie Policy.</p>

      <h3>3.2.10 Marketing Preference Data</h3>
      <p>If you subscribe to marketing or interact with promotional communications, we may process:</p>
      <ul>
        <li>email address;</li>
        <li>subscription status;</li>
        <li>marketing consent;</li>
        <li>unsubscribe records;</li>
        <li>communication preferences;</li>
        <li>email engagement data, such as opens and clicks, where supported by our marketing tools.</li>
      </ul>

      <h3>3.2.11 Fraud Prevention and Compliance Data</h3>
      <p>
        To protect our business, customers, payment systems, and legal obligations, we may process:
      </p>
      <ul>
        <li>order risk indicators;</li>
        <li>payment verification results;</li>
        <li>billing and delivery mismatches;</li>
        <li>IP address and location indicators;</li>
        <li>sanctions or restricted destination checks;</li>
        <li>chargeback history;</li>
        <li>suspected fraud records;</li>
        <li>compliance review notes.</li>
      </ul>

      <h2>4. Personal Data We Do Not Intend to Collect</h2>
      <p>
        4.1 We do not intentionally collect special category personal data, such as information about health,
        race, ethnicity, political opinions, religious beliefs, trade union membership, biometric data, or
        sexual orientation.
      </p>
      <p>
        4.2 Please do not send us special category data unless it is strictly necessary for a specific matter
        and we have requested it.
      </p>
      <p>4.3 We do not knowingly collect personal data from children.</p>
      <p>
        4.4 The Website is intended for users aged 18 or over because our goods include electrical products
        and materials that may require technical understanding and safe use.
      </p>

      <h2>5. How We Collect Personal Data</h2>
      <p>5.1 We may collect personal data directly from you when you:</p>
      <ul>
        <li>visit the Website;</li>
        <li>create an account;</li>
        <li>place an order;</li>
        <li>enter billing or delivery details;</li>
        <li>make a payment;</li>
        <li>contact us;</li>
        <li>request support;</li>
        <li>submit a return, refund, or warranty request;</li>
        <li>subscribe to marketing;</li>
        <li>complete forms or provide information through the Website.</li>
      </ul>
      <p>
        5.2 We may collect personal data automatically when you use the Website, including through cookies,
        analytics tools, logs, security systems, and similar technologies.
      </p>
      <p>5.3 We may receive personal data from third parties, including:</p>
      <ul>
        <li>payment processors;</li>
        <li>card networks and fraud prevention providers;</li>
        <li>couriers and delivery partners;</li>
        <li>customs brokers and customs authorities;</li>
        <li>e-commerce platform providers;</li>
        <li>analytics providers;</li>
        <li>marketing and communication service providers;</li>
        <li>IT, hosting, security, and infrastructure providers;</li>
        <li>professional advisers;</li>
        <li>public authorities where legally required.</li>
      </ul>

      <h2>6. How We Use Your Personal Data</h2>
      <p>6.1 We use your personal data for the purposes described below.</p>

      <h3>6.1.1 To Process and Fulfil Orders</h3>
      <p>We use personal data to:</p>
      <ul>
        <li>receive and process orders;</li>
        <li>confirm payment;</li>
        <li>issue confirmations, receipts, and invoices;</li>
        <li>prepare goods for dispatch;</li>
        <li>arrange delivery;</li>
        <li>provide tracking details;</li>
        <li>handle customs documentation where required;</li>
        <li>manage cancellations, returns, refunds, and warranty claims.</li>
      </ul>

      <h3>6.1.2 To Provide Customer Support</h3>
      <p>We use personal data to:</p>
      <ul>
        <li>respond to enquiries;</li>
        <li>assist with product, order, or delivery questions;</li>
        <li>investigate damaged, faulty, incorrect, or missing goods;</li>
        <li>manage complaints;</li>
        <li>process return and warranty requests;</li>
        <li>communicate about your order or account.</li>
      </ul>

      <h3>6.1.3 To Operate and Improve the Website</h3>
      <p>We use personal data to:</p>
      <ul>
        <li>maintain Website functionality;</li>
        <li>improve navigation and user experience;</li>
        <li>monitor performance;</li>
        <li>fix errors;</li>
        <li>test and improve Website features;</li>
        <li>understand how customers use the Website.</li>
      </ul>

      <h3>6.1.4 To Manage Accounts and Trade Access</h3>
      <p>We use personal data to:</p>
      <ul>
        <li>create and manage customer accounts;</li>
        <li>verify business or trade information where applicable;</li>
        <li>provide account features;</li>
        <li>manage trade pricing or business access where available;</li>
        <li>maintain account security.</li>
      </ul>

      <h3>6.1.5 To Prevent Fraud and Protect Security</h3>
      <p>We use personal data to:</p>
      <ul>
        <li>detect and prevent fraud;</li>
        <li>monitor suspicious activity;</li>
        <li>protect payment systems;</li>
        <li>prevent misuse of the Website;</li>
        <li>secure accounts and systems;</li>
        <li>investigate unauthorised access or abuse;</li>
        <li>manage chargebacks and payment disputes.</li>
      </ul>

      <h3>6.1.6 To Comply With Legal and Regulatory Obligations</h3>
      <p>We use personal data to:</p>
      <ul>
        <li>comply with tax, accounting, company, consumer protection, customs, sanctions, financial crime, and legal obligations;</li>
        <li>keep legally required records;</li>
        <li>respond to lawful requests from authorities;</li>
        <li>manage disputes and legal claims.</li>
      </ul>

      <h3>6.1.7 To Send Marketing Communications</h3>
      <p>
        Where permitted by law, we may use your contact details to send marketing communications about
        products, offers, promotions, updates, or services that may be relevant to you.
      </p>
      <p>You can unsubscribe from marketing at any time.</p>

      <h3>6.1.8 To Use Cookies and Analytics</h3>
      <p>We use cookies and similar technologies to:</p>
      <ul>
        <li>operate essential Website functions;</li>
        <li>remember preferences;</li>
        <li>maintain cart functionality;</li>
        <li>measure Website traffic;</li>
        <li>analyse performance;</li>
        <li>improve the Website;</li>
        <li>support marketing or advertising where you have given consent where required.</li>
      </ul>

      <h2>7. Legal Bases for Processing</h2>
      <p>7.1 We process personal data only where we have a lawful basis to do so.</p>
      <table>
        <thead>
          <tr>
            <th>Purpose</th>
            <th>Legal basis</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Processing and fulfilling orders</td><td>Contractual necessity</td></tr>
          <tr><td>Taking payment and confirming transactions</td><td>Contractual necessity</td></tr>
          <tr><td>Delivering goods</td><td>Contractual necessity</td></tr>
          <tr><td>Handling returns, refunds, and warranty claims</td><td>Contractual necessity; legal obligation; legitimate interests</td></tr>
          <tr><td>Customer support</td><td>Contractual necessity; legitimate interests</td></tr>
          <tr><td>Account creation and account management</td><td>Contractual necessity; legitimate interests</td></tr>
          <tr><td>Business or trade account verification</td><td>Contractual necessity; legitimate interests</td></tr>
          <tr><td>Fraud prevention and Website security</td><td>Legitimate interests; legal obligation</td></tr>
          <tr><td>Customs, tax, accounting, and legal records</td><td>Legal obligation</td></tr>
          <tr><td>Responding to legal claims or disputes</td><td>Legitimate interests; legal obligation</td></tr>
          <tr><td>Service improvement and Website analytics</td><td>Legitimate interests; consent where required</td></tr>
          <tr><td>Non-essential cookies and tracking</td><td>Consent where required</td></tr>
          <tr><td>Marketing emails</td><td>Consent or legitimate interests where permitted by law</td></tr>
          <tr><td>Sanctions and compliance checks</td><td>Legal obligation; legitimate interests</td></tr>
        </tbody>
      </table>
      <p>
        7.2 Where we rely on legitimate interests, we do so only where we believe our interests are not
        overridden by your rights and freedoms.
      </p>
      <p>
        7.3 Our legitimate interests may include operating an online store, fulfilling customer orders,
        improving our Website, preventing fraud, protecting our systems, managing customer relationships,
        enforcing our Terms, and protecting our legal and commercial interests.
      </p>
      <p>
        7.4 Where we rely on consent, you may withdraw your consent at any time. Withdrawal of consent does
        not affect processing carried out before consent was withdrawn.
      </p>

      <h2>8. Marketing Communications</h2>
      <p>
        8.1 We may send you marketing communications where you have consented or where applicable law allows
        us to do so.
      </p>
      <p>
        8.2 Marketing communications may include product updates, offers, promotions, availability notices,
        service updates, or information about products similar to those you have purchased or viewed.
      </p>
      <p>
        8.3 You can unsubscribe from marketing communications at any time by using the unsubscribe link in
        the relevant email or contacting us at info@misaelectro.ro.
      </p>
      <p>
        8.4 Even if you unsubscribe from marketing, we may still send you service messages, such as order
        confirmations, delivery updates, payment notices, refund updates, warranty communications, or
        important account and policy notices.
      </p>

      <h2>9. Cookies and Similar Technologies</h2>
      <p>
        9.1 The Website uses cookies and similar technologies, such as pixels, tags, local storage, and
        analytics tools.
      </p>
      <p>
        9.2 Some cookies are essential for the Website to function, including cookies used for cart
        functionality, checkout, security, fraud prevention, and account access.
      </p>
      <p>
        9.3 Non-essential cookies may be used for analytics, performance measurement, personalisation,
        advertising, or marketing where permitted by law and where consent is required.
      </p>
      <p>
        9.4 When you first visit the Website, you may be presented with a cookie banner or consent tool
        allowing you to manage non-essential cookies.
      </p>
      <p>9.5 You can also manage cookies through your browser settings.</p>
      <p>9.6 For more information, please see our Cookie Policy.</p>

      <h2>10. Sharing Your Personal Data</h2>
      <p>10.1 We do not sell your personal data.</p>
      <p>
        10.2 We may share your personal data with trusted third parties where necessary to operate the
        Website, process orders, deliver goods, comply with law, or protect our business.
      </p>
      <p>10.3 We may share personal data with:</p>
      <ul>
        <li>payment processors and card payment providers;</li>
        <li>banks, card networks, and fraud prevention providers;</li>
        <li>e-commerce platform providers;</li>
        <li>hosting, IT, infrastructure, and security providers;</li>
        <li>couriers, delivery partners, postal operators, customs brokers, and logistics providers;</li>
        <li>customs authorities and other public authorities where required;</li>
        <li>email, communication, and customer support providers;</li>
        <li>analytics and cookie technology providers;</li>
        <li>marketing service providers, where applicable;</li>
        <li>professional advisers, including accountants, auditors, insurers, lawyers, and consultants;</li>
        <li>regulators, courts, law enforcement, tax authorities, or government bodies where required by law;</li>
        <li>business partners or successors in the event of a restructuring, merger, sale, financing, or transfer of all or part of our business.</li>
      </ul>
      <p>
        10.4 We require service providers to process personal data only for authorised purposes and to apply
        appropriate security and confidentiality measures.
      </p>

      <h2>11. International Data Transfers</h2>
      <p>
        11.1 Because MisaElectro sells internationally and uses third-party service providers, your personal
        data may be processed outside the United Kingdom, the European Economic Area, or your country of
        residence.
      </p>
      <p>
        11.2 International transfers may occur where we use hosting, e-commerce, payment, analytics,
        communication, delivery, customs, or support providers located in other countries.
      </p>
      <p>
        11.3 Where required by data protection law, we use appropriate safeguards for international
        transfers. These may include:
      </p>
      <ul>
        <li>adequacy regulations or adequacy decisions;</li>
        <li>the UK International Data Transfer Agreement;</li>
        <li>the UK Addendum to the EU Standard Contractual Clauses;</li>
        <li>EU Standard Contractual Clauses;</li>
        <li>contractual and organisational safeguards;</li>
        <li>other lawful transfer mechanisms permitted by applicable law.</li>
      </ul>
      <p>
        11.4 We take reasonable steps to ensure that personal data transferred internationally remains
        protected in accordance with applicable data protection requirements.
      </p>

      <h2>12. Data Retention</h2>
      <p>
        12.1 We keep personal data only for as long as reasonably necessary for the purposes described in
        this Privacy Policy, unless a longer retention period is required or permitted by law.
      </p>
      <p>
        12.2 Our retention periods may vary depending on the type of data, purpose of processing, legal
        requirements, accounting obligations, tax rules, warranty periods, dispute risks, fraud prevention
        needs, and operational requirements.
      </p>
      <p>12.3 As a general guide:</p>
      <table>
        <thead>
          <tr>
            <th>Data category</th>
            <th>Typical retention period</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Order, transaction, invoice, accounting, and tax records</td><td>Up to 7 years</td></tr>
          <tr><td>Customer account data</td><td>For as long as the account remains active, then for a reasonable period afterwards</td></tr>
          <tr><td>Customer support communications</td><td>Up to 3 years after the matter is closed, unless longer retention is needed</td></tr>
          <tr><td>Return, refund, complaint, and warranty records</td><td>For the relevant warranty, limitation, or dispute period</td></tr>
          <tr><td>Marketing consent and unsubscribe records</td><td>Until withdrawn, then retained as needed to honour suppression preferences</td></tr>
          <tr><td>Analytics and technical data</td><td>Usually 12&ndash;26 months, depending on the relevant tool</td></tr>
          <tr><td>Fraud, chargeback, sanctions, or compliance records</td><td>As long as reasonably necessary for prevention, investigation, and legal compliance</td></tr>
        </tbody>
      </table>
      <p>
        12.4 We may retain data for longer where necessary to establish, exercise, or defend legal claims,
        comply with legal obligations, investigate fraud or abuse, resolve disputes, or enforce our Terms and
        Conditions.
      </p>
      <p>
        12.5 When personal data is no longer required, we will delete it, anonymise it, or securely archive
        it where appropriate.
      </p>

      <h2>13. Security of Personal Data</h2>
      <p>
        13.1 We take reasonable technical and organisational measures to protect personal data against
        unauthorised access, loss, misuse, alteration, disclosure, or destruction.
      </p>
      <p>
        13.2 These measures may include access controls, secure payment processing, encryption where
        appropriate, system monitoring, account security measures, provider due diligence, and internal
        controls.
      </p>
      <p>
        13.3 No website, payment system, transmission method, or storage system can be guaranteed to be
        completely secure.
      </p>
      <p>
        13.4 You are responsible for keeping your account login details confidential and for notifying us
        promptly if you believe your account has been accessed without authorisation.
      </p>

      <h2>14. Your Data Protection Rights</h2>
      <p>
        14.1 Depending on your location and applicable data protection law, you may have the following rights
        in relation to your personal data:
      </p>
      <ul>
        <li>the right to be informed about how your personal data is used;</li>
        <li>the right to access a copy of your personal data;</li>
        <li>the right to request correction of inaccurate or incomplete personal data;</li>
        <li>the right to request deletion of your personal data in certain circumstances;</li>
        <li>the right to request restriction of processing in certain circumstances;</li>
        <li>the right to object to processing based on legitimate interests;</li>
        <li>the right to object to direct marketing at any time;</li>
        <li>the right to data portability in certain circumstances;</li>
        <li>the right to withdraw consent where processing is based on consent;</li>
        <li>rights relating to automated decision-making and profiling where applicable;</li>
        <li>the right to lodge a complaint with a supervisory authority.</li>
      </ul>
      <p>
        14.2 These rights are not absolute and may be subject to legal conditions, exemptions, identity
        verification, and our legal obligations.
      </p>
      <p>14.3 To exercise your rights, please contact us at info@misaelectro.ro.</p>
      <p>14.4 We may need to verify your identity before responding to a request.</p>
      <p>
        14.5 We aim to respond to valid data protection requests within the timeframe required by applicable
        law.
      </p>

      <h2>15. Complaints</h2>
      <p>
        15.1 If you have concerns about how we handle your personal data, please contact us first at
        info@misaelectro.ro so we can try to resolve the matter.
      </p>
      <p>
        15.2 If you are in the United Kingdom, you have the right to lodge a complaint with the Information
        Commissioner&rsquo;s Office.
      </p>
      <p>
        15.3 If you are in the European Union or European Economic Area, you may have the right to lodge a
        complaint with your local data protection supervisory authority.
      </p>

      <h2>16. Automated Decision-Making and Profiling</h2>
      <p>
        16.1 We do not currently use personal data to make decisions that are solely automated and that
        produce legal or similarly significant effects on you.
      </p>
      <p>
        16.2 We may use automated tools to support fraud prevention, payment security, Website security,
        risk scoring, or transaction monitoring.
      </p>
      <p>
        16.3 These tools help identify potentially suspicious activity but do not normally make final
        decisions that have legal or similarly significant effects without appropriate review.
      </p>
      <p>
        16.4 If we introduce automated decision-making that has legal or similarly significant effects, we
        will update this Privacy Policy and provide the information required by applicable law.
      </p>

      <h2>17. Third-Party Websites and Services</h2>
      <p>
        17.1 The Website may contain links to third-party websites, manufacturer websites, payment pages,
        courier tracking pages, social media pages, or other external services.
      </p>
      <p>
        17.2 We are not responsible for the privacy practices, security, content, or policies of third-party
        websites or services.
      </p>
      <p>
        17.3 You should review the privacy policies of any third-party website or service before providing
        personal data to them.
      </p>

      <h2>18. Children&rsquo;s Privacy</h2>
      <p>18.1 The Website is not directed at children.</p>
      <p>18.2 We do not knowingly collect personal data from children.</p>
      <p>
        18.3 If you believe that a child has provided personal data to us, please contact us at
        info@misaelectro.ro and we will take appropriate steps to review and delete the information where
        required.
      </p>

      <h2>19. Changes to This Privacy Policy</h2>
      <p>
        19.1 We may update this Privacy Policy from time to time to reflect changes in our business, Website
        functionality, service providers, data processing practices, legal requirements, or regulatory
        guidance.
      </p>
      <p>
        19.2 When we update this Privacy Policy, we will revise the &ldquo;Last updated&rdquo; date at the
        top of the page.
      </p>
      <p>
        19.3 The updated version will apply from the date it is published on the Website, unless stated
        otherwise.
      </p>
      <p>
        19.4 We recommend that you review this Privacy Policy periodically to stay informed about how we
        handle personal data.
      </p>

      <h2>20. Contact Information</h2>
      <p>
        If you have any questions, requests, or concerns about this Privacy Policy or how we process
        personal data, please contact us:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
};

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return content[(locale as Locale)] ?? content.en;
}
