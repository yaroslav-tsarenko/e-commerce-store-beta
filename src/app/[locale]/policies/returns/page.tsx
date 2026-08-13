import { PolicyLayout, ContactBlock } from "@/components/layout/PolicyLayout/PolicyLayout";
import type { ReactNode } from "react";

type Locale = "ro" | "hu" | "bg" | "en";

const metaTitles: Record<Locale, string> = {
  ro: "Politica de returnare, rambursare și anulare — MisaElectro",
  hu: "Visszaküldési, visszatérítési és lemondási szabályzat — MisaElectro",
  bg: "Политика за връщане, възстановяване и анулиране — MisaElectro",
  en: "Returns, Refunds and Cancellation Policy — MisaElectro",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return { title: metaTitles[(locale as Locale)] ?? metaTitles.en };
}

const content: Record<Locale, ReactNode> = {
  ro: (
    <PolicyLayout title="Politica de returnare, rambursare și anulare" lastUpdated="29 mai 2026">
      <p>
        Această Politică de returnare, rambursare și anulare explică modul în care sunt gestionate
        anulările comenzilor, returnările consumatorilor, rambursările, bunurile deteriorate, bunurile
        defecte, bunurile incorecte și returnările restricționate pentru achizițiile efectuate prin
        www.misaelectro.ro.
      </p>
      <p>Site-ul web este operat de:</p>
      <ContactBlock />
      <p>
        În această Politică, &bdquo;MisaElectro&rdquo;, &bdquo;noi&rdquo; sau &bdquo;al nostru&rdquo;
        înseamnă MISARELIANA S.R.L.. &bdquo;Client&rdquo;, &bdquo;dumneavoastră&rdquo; sau
        &bdquo;al dumneavoastră&rdquo; înseamnă orice persoană sau întreprindere care plasează o comandă
        prin intermediul Site-ului web.
      </p>
      <p>
        Această Politică trebuie citită împreună cu Termenii și condițiile noastre, Politica de expediere,
        Politica de confidențialitate, Politica privind modulele cookie și orice termeni de garanție
        specifici produsului sau termeni de garanție suplimentară.
      </p>
      <p>
        Nimic din această Politică nu limitează drepturile legale obligatorii pe care le puteți avea în
        temeiul legislației aplicabile privind protecția consumatorilor.
      </p>

      <h2>1. Domeniul de aplicare al acestei Politici</h2>
      <p>1.1 Această Politică se aplică bunurilor fizice achiziționate prin MisaElectro.</p>
      <p>
        1.2 MisaElectro furnizează produse electrice, materiale electrice, accesorii de cablare, produse
        legate de iluminat, componente de instalare, produse de distribuție și de protecție a circuitelor,
        prize, întrerupătoare, cabluri, accesorii de montaj și bunuri conexe.
      </p>
      <p>
        1.3 Deoarece produsele electrice pot fi critice din punct de vedere al siguranței, eligibilitatea
        pentru returnare depinde de tipul produsului, starea, ambalajul, dacă produsul a fost instalat sau
        utilizat și dacă comanda a fost plasată de un Consumator sau de un Client comercial.
      </p>
      <p>
        1.4 Această Politică se aplică atât Consumatorilor, cât și Clienților comerciali, dar unele drepturi
        se aplică numai Consumatorilor.
      </p>

      <h2>2. Definițiile Consumatorului și ale Clientului comercial</h2>
      <p>
        2.1 Un &bdquo;Consumator&rdquo; înseamnă o persoană fizică care achiziționează bunuri în totalitate
        sau în principal pentru uz personal și nu în scopuri comerciale, de afaceri, meșteșugărești sau
        profesionale.
      </p>
      <p>
        2.2 Un &bdquo;Client comercial&rdquo; înseamnă orice companie, comerciant individual, antreprenor,
        electrician, instalator, revânzător, organizație, organism public sau cumpărător profesionist care
        achiziționează bunuri în scopuri comerciale, de afaceri, de instalare, de revânzare, profesionale sau
        de afaceri.
      </p>
      <p>2.3 Drepturile de anulare ale Consumatorului se aplică numai Consumatorilor.</p>
      <p>
        2.4 Clienții comerciali nu au un drept general de a returna bunuri care nu prezintă defecte din cauza
        răzgândirii, a comandării incorecte, a stocului excedentar, a modificărilor proiectului, a
        specificațiilor nepotrivite sau a unei erori din partea clientului, cu excepția cazului în care
        convenim altfel în scris.
      </p>

      <h2>3. Anularea unei comenzi înainte de expediere</h2>
      <p>3.1 Puteți solicita anularea unei comenzi înainte ca aceasta să fie expediată.</p>
      <p>
        3.2 Pentru a solicita anularea, contactați-ne cât mai curând posibil la info@misaelectro.ro și
        includeți numărul comenzii dumneavoastră.
      </p>
      <p>
        3.3 Vom depune eforturi rezonabile pentru a anula comanda înainte de expediere. Cu toate acestea,
        anularea nu este garantată dacă comanda a fost deja procesată, ambalată, predată transportatorului,
        comandată special, pregătită, tăiată, personalizată sau expediată.
      </p>
      <p>
        3.4 Dacă anularea este confirmată înainte de expediere, vom rambursa suma plătită pentru bunurile
        anulate și orice taxă de livrare aplicabilă plătită pentru acea comandă anulată.
      </p>
      <p>
        3.5 Dacă comanda a fost deja expediată, comanda nu mai poate fi anulată înainte de livrare.
        Returnările consumatorilor pot fi în continuare disponibile în conformitate cu această Politică.
      </p>

      <h2>4. Dreptul Consumatorului de a anula după livrare</h2>
      <p>
        4.1 Dacă sunteți un Consumator, este posibil să aveți dreptul legal de a anula o achiziție online
        eligibilă în termen de 14 zile de la primirea bunurilor, fără a oferi un motiv.
      </p>
      <p>
        4.2 Perioada de anulare expiră la 14 zile de la ziua în care dumneavoastră sau o persoană
        identificată de dumneavoastră primiți bunurile.
      </p>
      <p>
        4.3 Dacă comanda dumneavoastră este livrată în mai multe colete, perioada de anulare va expira de
        obicei la 14 zile de la ziua în care primiți ultimul colet.
      </p>
      <p>
        4.4 Pentru a vă exercita dreptul de anulare, trebuie să ne notificați clar prin e-mail la
        info@misaelectro.ro înainte de expirarea perioadei de anulare.
      </p>
      <p>4.5 E-mailul dumneavoastră trebuie să includă:</p>
      <ul>
        <li>numele dumneavoastră complet;</li>
        <li>numărul comenzii;</li>
        <li>adresa de livrare;</li>
        <li>numele produsului sau SKU;</li>
        <li>confirmarea că doriți să anulați sau să returnați articolul relevant.</li>
      </ul>
      <p>
        4.6 După ce ne notificați că doriți să anulați, trebuie să returnați bunurile fără întârzieri
        nejustificate și nu mai târziu de 14 zile de la data la care ne-ați notificat.
      </p>
      <p>
        4.7 Sunteți responsabil pentru costul returnării bunurilor, cu excepția cazului în care bunurile sunt
        defecte, deteriorate, incorecte sau am convenit altfel în scris.
      </p>

      <h2>5. Starea bunurilor returnate</h2>
      <p>5.1 Bunurile returnate trebuie manipulate cu o grijă rezonabilă.</p>
      <p>
        5.2 Cu excepția cazului în care bunurile sunt defecte, deteriorate sau incorecte, bunurile returnate
        trebuie să fie:
      </p>
      <ul>
        <li>neutilizate;</li>
        <li>neinstalate;</li>
        <li>necablate și neconectate;</li>
        <li>netestate, nepuse în funcțiune sau neintegrate în niciun sistem electric;</li>
        <li>complete cu toate piesele, accesoriile, manualele, etichetele, sigiliile și materialele de protecție;</li>
        <li>în ambalajul original acolo unde este posibil;</li>
        <li>în stare revânzabilă.</li>
      </ul>
      <p>
        5.3 Puteți inspecta bunurile așa cum vi s-ar permite în mod rezonabil să faceți într-un magazin, dar
        nu trebuie să instalați, să cablați, să conectați, să utilizați, să modificați, să deteriorați sau să
        manipulați bunurile dincolo de ceea ce este necesar pentru a inspecta natura, caracteristicile și
        funcționarea acestora.
      </p>
      <p>
        5.4 Putem reduce rambursarea dumneavoastră pentru a reflecta orice reducere a valorii cauzată de
        manipularea dincolo de ceea ce este necesar, inclusiv instalarea, utilizarea, ambalajul lipsă,
        accesoriile lipsă, deteriorarea, contaminarea sau valoarea de revânzare redusă.
      </p>

      <h2>6. Articole nereturnabile și articole cu returnare restricționată</h2>
      <p>
        6.1 Anumite bunuri nu pot fi returnate din cauza răzgândirii, cu excepția cazului în care sunt
        defecte, deteriorate, incorecte sau drepturile de returnare sunt impuse de lege.
      </p>
      <p>6.2 Articolele nereturnabile sau cu returnare restricționată pot include:</p>
      <ul>
        <li>bunuri fabricate la comandă;</li>
        <li>bunuri comandate special pentru dumneavoastră;</li>
        <li>bunuri tăiate la dimensiune, inclusiv cabluri sau materiale similare;</li>
        <li>bunuri personalizate, modificate, asamblate sau alterate;</li>
        <li>bunuri electrice instalate, cablate, conectate, testate, puse în funcțiune sau utilizate;</li>
        <li>bunuri deteriorate după livrare;</li>
        <li>bunuri cărora le lipsesc piese, accesorii, manuale, ambalaje, etichete, sigilii sau materiale de protecție;</li>
        <li>bunuri afectate de depozitare incorectă, umezeală, căldură, impact, contaminare, praf, substanțe chimice, coroziune, utilizare necorespunzătoare sau manipulare neautorizată;</li>
        <li>bunuri care nu mai sunt în stare revânzabilă;</li>
        <li>articole de lichidare, vânzare finală, discontinuate sau comandate special în cazul în care restricțiile de returnare sunt clar precizate și legale.</li>
      </ul>
      <p>
        6.3 Această secțiune nu limitează drepturile dumneavoastră legale în cazul în care bunurile sunt
        defecte, nu corespund descrierii, sunt nesigure sau nu respectă în alt mod legislația aplicabilă.
      </p>

      <h2>7. Bunuri defecte, deteriorate sau incorecte</h2>
      <p>
        7.1 Dacă bunurile ajung defecte, deteriorate, incomplete sau incorecte, vă rugăm să ne contactați cât
        mai curând posibil la info@misaelectro.ro.
      </p>
      <p>7.2 Vă rugăm să includeți:</p>
      <ul>
        <li>numărul comenzii dumneavoastră;</li>
        <li>o descriere clară a problemei;</li>
        <li>fotografii sau videoclipuri ale bunurilor;</li>
        <li>fotografii ale ambalajului și ale etichetei de expediere;</li>
        <li>orice etichete relevante ale produsului, numere de serie sau marcaje ale producătorului.</li>
      </ul>
      <p>
        7.3 Pentru deteriorările vizibile la livrare, vă rugăm să ne notificați în termen de 48 de ore de la
        livrare acolo unde este posibil. Acest lucru ne ajută să investigăm rapid reclamațiile către curier,
        dar nu elimină niciun drept legal obligatoriu pe care l-ați putea avea.
      </p>
      <p>
        7.4 Trebuie să păstrați produsul, ambalajul, etichetele, manualele, accesoriile și materialele de
        livrare până când am examinat problema.
      </p>
      <p>
        7.5 Este posibil să solicităm returnarea sau inspectarea bunurilor înainte de a aproba o rambursare,
        o înlocuire, o reparație sau o altă soluție.
      </p>
      <p>
        7.6 Dacă se confirmă că bunurile sunt defecte, deteriorate înainte de livrare, incorecte sau nu sunt
        conforme în alt mod cu contractul, putem oferi o reparație, o înlocuire, o rambursare, o rambursare
        parțială sau o altă soluție în conformitate cu legislația aplicabilă.
      </p>
      <p>
        7.7 Dacă se confirmă că bunurile sunt defecte, deteriorate sau incorecte, vom acoperi costurile
        rezonabile de returnare sau vom furniza instrucțiuni de returnare.
      </p>
      <p>
        7.8 Nu suntem responsabili pentru defecțiuni sau deteriorări cauzate de instalarea incorectă,
        selectarea nepotrivită a produsului, utilizarea necorespunzătoare, suprasarcina, modificarea
        neautorizată, deteriorarea externă, depozitarea incorectă, mediul nepotrivit, lucrările efectuate de
        terți, supratensiunile, uzura normală, nerespectarea instrucțiunilor producătorului sau utilizarea în
        afara scopului prevăzut al produsului.
      </p>

      <h2>8. Bunuri electrice și responsabilitatea instalării</h2>
      <p>
        8.1 Bunurile electrice pot fi nesigure dacă sunt selectate, instalate, cablate, conectate,
        modificate, suprasolicitate sau utilizate incorect.
      </p>
      <p>
        8.2 Înainte de achiziție, sunteți responsabil pentru verificarea faptului că produsul este potrivit
        pentru utilizarea dumneavoastră prevăzută, inclusiv tensiunea, curentul, sarcina, puterea, gradul de
        protecție IP, dimensiunile, tipul de cablu, compatibilitatea, mediul de instalare și cerințele de
        reglementare locale.
      </p>
      <p>
        8.3 Produsele care necesită instalare electrică, cablare, conectare, testare, punere în funcțiune sau
        integrare într-un sistem electric trebuie instalate numai de către un electrician calificat sau un
        profesionist competent, acolo unde este necesar sau adecvat.
      </p>
      <p>
        8.4 Bunurile care au fost instalate, cablate, conectate, modificate, puse în funcțiune sau utilizate
        pot să nu fie eligibile pentru returnare, cu excepția cazului în care sunt defecte, incorecte sau
        acoperite în alt mod de drepturi legale obligatorii.
      </p>
      <p>
        8.5 Putem refuza sau reduce o rambursare în cazul în care produsul a fost returnat într-o stare care
        împiedică revânzarea în siguranță sau inspecția corespunzătoare.
      </p>

      <h2>9. Costurile de returnare</h2>
      <p>
        9.1 Pentru returnările din cauza răzgândirii, clientul este responsabil pentru costurile de
        returnare, cu excepția cazului în care convenim altfel în scris.
      </p>
      <p>
        9.2 Pentru bunurile defecte, deteriorate sau incorecte, MisaElectro va acoperi costurile rezonabile
        de returnare în cazul în care problema este confirmată sau în cazul în care furnizăm instrucțiuni de
        returnare.
      </p>
      <p>9.3 Nu trebuie să returnați bunurile fără a ne contacta mai întâi.</p>
      <p>
        9.4 Este posibil să nu putem rambursa costurile de returnare dacă utilizați o metodă de returnare
        premium, expresă, supradimensionată, internațională sau neaprobată fără acordul nostru prealabil.
      </p>
      <p>
        9.5 Vă recomandăm să utilizați un serviciu de returnare cu urmărire și asigurare. Sunteți responsabil
        pentru bunurile returnate până când acestea sunt primite de noi sau de locația noastră de returnare
        desemnată.
      </p>

      <h2>10. Procedura de returnare</h2>
      <p>10.1 Pentru a iniția o returnare, contactați-ne la info@misaelectro.ro.</p>
      <p>10.2 Vă rugăm să includeți:</p>
      <ul>
        <li>numărul comenzii;</li>
        <li>numele produsului sau SKU;</li>
        <li>motivul returnării;</li>
        <li>fotografii sau videoclipuri în cazul în care articolul este deteriorat, defect, incorect sau incomplet;</li>
        <li>confirmarea dacă produsul a fost deschis, instalat, conectat, testat sau utilizat.</li>
      </ul>
      <p>
        10.3 Dacă returnarea este acceptată sau necesită inspecție, vom furniza instrucțiuni de returnare.
      </p>
      <p>
        10.4 Adresa de returnare sau metoda de returnare poate varia în funcție de produs, furnizor, curier,
        destinație sau natura problemei.
      </p>
      <p>
        10.5 Bunurile returnate fără contact prealabil, fără informațiile necesare sau la o adresă incorectă
        pot fi întârziate, respinse sau returnate dumneavoastră.
      </p>
      <p>10.6 Trebuie să ambalați bunurile returnate în siguranță pentru a preveni deteriorarea în timpul transportului.</p>
      <p>
        10.7 Dacă bunurile returnate sunt deteriorate în timpul transportului din cauza ambalării
        necorespunzătoare, putem reduce sau refuza rambursarea în cazul în care legea permite acest lucru.
      </p>

      <h2>11. Termenul de rambursare</h2>
      <p>
        11.1 După ce primim și inspectăm bunurile returnate, vă vom notifica dacă rambursarea a fost
        aprobată.
      </p>
      <p>
        11.2 În cazul în care o rambursare este aprobată, aceasta va fi procesată către metoda de plată
        originală acolo unde este posibil.
      </p>
      <p>
        11.3 Pentru returnările prin anulare ale Consumatorului, vom emite orice rambursare datorată în
        termenul impus de legislația aplicabilă.
      </p>
      <p>
        11.4 Putem reține rambursarea până când am primit bunurile înapoi sau până când furnizați dovada că
        ați returnat bunurile, oricare dintre acestea intervine mai întâi, acolo unde legea permite acest
        lucru.
      </p>
      <p>
        11.5 După ce procesăm o rambursare, banca dumneavoastră, emitentul cardului sau furnizorul de plăți
        pot avea nevoie de timp suplimentar pentru a vă pune fondurile la dispoziție.
      </p>
      <p>
        11.6 Rambursările nu pot fi emise în mod normal către un card, cont, persoană sau metodă de plată
        diferită.
      </p>

      <h2>12. Taxe de livrare și rambursări</h2>
      <p>
        12.1 În cazul în care un Consumator anulează în mod valabil o comandă eligibilă în temeiul
        drepturilor legale de anulare, vom rambursa prețul produsului și taxa de livrare standard de bază
        plătită pentru livrarea inițială, acolo unde legea impune acest lucru.
      </p>
      <p>
        12.2 Nu suntem obligați să rambursăm costuri de livrare suplimentare dacă ați selectat o metodă de
        livrare mai scumpă decât cea mai ieftină opțiune de livrare standard oferită.
      </p>
      <p>
        12.3 Taxele de livrare pot să nu fie rambursate pentru returnările Clienților comerciali, returnările
        discreționare, livrarea eșuată, livrarea refuzată, adresa incorectă, coletele neridicate sau
        returnările fără defecte, cu excepția cazului în care convenim altfel sau legislația aplicabilă
        impune acest lucru.
      </p>
      <p>
        12.4 Taxele vamale, TVA-ul la import, comisioanele de brokeraj, comisioanele de manipulare ale
        curierului, taxele locale, taxele de vămuire și alte taxe locale nu sunt percepute de MisaElectro și
        nu sunt rambursabile de către MisaElectro.
      </p>

      <h2>13. Returnări internaționale</h2>
      <p>
        13.1 Clienții internaționali sunt responsabili pentru a se asigura că bunurile returnate sunt
        ambalate, etichetate, declarate și expediate corect, în conformitate cu cerințele aplicabile ale
        curierului și ale vămii.
      </p>
      <p>13.2 Sunteți responsabil pentru orice declarații vamale necesare pentru returnarea bunurilor.</p>
      <p>
        13.3 Dacă o returnare este întârziată, respinsă, confiscată, abandonată sau returnată din cauza
        documentelor vamale incorecte, a taxelor neplătite, a bunurilor interzise sau a nerespectării
        instrucțiunilor de returnare, este posibil să nu putem procesa o rambursare.
      </p>
      <p>
        13.4 Pentru returnările internaționale din cauza răzgândirii, sunteți responsabil pentru costurile de
        returnare, taxele vamale, impozitele, comisioanele de brokeraj și costurile aferente, cu excepția
        cazului în care bunurile sunt defecte, deteriorate, incorecte sau convenim altfel în scris.
      </p>
      <p>
        13.5 Dacă MisaElectro suportă taxe vamale sau de curierat din cauza unei returnări internaționale,
        acestea pot fi deduse din orice rambursare acolo unde legea permite acest lucru.
      </p>

      <h2>14. Adresă incompletă sau incorectă</h2>
      <p>
        14.1 Sunteți responsabil pentru furnizarea de informații complete și exacte de facturare și livrare
        la finalizarea comenzii.
      </p>
      <p>
        14.2 MisaElectro nu este responsabil pentru întârzieri, livrări eșuate, colete pierdute, taxe de
        returnare sau costuri suplimentare cauzate de informații de adresă incorecte, incomplete, învechite
        sau formatate necorespunzător furnizate de dumneavoastră.
      </p>
      <p>
        14.3 Dacă o comandă ne este returnată deoarece adresa a fost incorectă, incompletă, inaccesibilă,
        refuzată sau neridicată, putem deduce costurile de expediere inițiale, costurile de returnare, taxele
        de curierat, taxele vamale, taxele de depozitare și alte costuri rezonabile din orice rambursare, cu
        excepția cazului în care legea interzice acest lucru.
      </p>
      <p>
        14.4 Dacă solicitați reexpedierea după o livrare eșuată cauzată de o eroare a clientului, se pot
        aplica taxe de expediere suplimentare.
      </p>

      <h2>15. Colete refuzate sau neridicate</h2>
      <p>
        15.1 Dacă refuzați livrarea, nu acceptați livrarea, nu plătiți taxele vamale sau de import sau nu
        ridicați coletul de la curier în termenul necesar, coletul poate fi returnat nouă, întârziat,
        abandonat sau eliminat de către curier.
      </p>
      <p>
        15.2 Dacă coletul ne este returnat, putem deduce costul de expediere inițial, costul de returnare,
        taxele de curierat, taxele vamale, taxele de depozitare, taxele de manipulare și orice alte costuri
        rezonabile din rambursarea dumneavoastră, cu excepția cazului în care legea interzice acest lucru.
      </p>
      <p>
        15.3 Refuzul livrării nu anulează automat taxele vamale, taxele de curierat sau taxele locale care ar
        fi putut fi deja evaluate.
      </p>
      <p>
        15.4 Dacă sunteți un Consumator și refuzați livrarea ca parte a exercitării drepturilor
        dumneavoastră legale de anulare, rambursarea dumneavoastră va fi gestionată în conformitate cu
        această Politică și cu legislația aplicabilă.
      </p>

      <h2>16. Returnări ale Clienților comerciali</h2>
      <p>
        16.1 Clienții comerciali nu au un drept general de a anula sau returna bunuri care nu prezintă
        defecte din cauza răzgândirii, a modificărilor proiectului clientului, a comandării incorecte, a
        stocului excedentar, a specificațiilor nepotrivite sau a faptului că nu mai au nevoie de bunuri.
      </p>
      <p>
        16.2 Orice returnare de bunuri care nu prezintă defecte, acceptată de la un Client comercial, este la
        discreția MisaElectro.
      </p>
      <p>16.3 Dacă suntem de acord cu o returnare a unui Client comercial, putem aplica condiții, inclusiv:</p>
      <ul>
        <li>aprobare prealabilă în scris;</li>
        <li>returnare într-o perioadă specificată;</li>
        <li>bunuri neutilizate, neinstalate, complete și revânzabile;</li>
        <li>ambalajul original și accesoriile incluse;</li>
        <li>plata de către client a costurilor de returnare;</li>
        <li>deducere pentru valoarea redusă;</li>
        <li>taxă de reaprovizionare sau de manipulare acolo unde este rezonabil și convenit sau permis.</li>
      </ul>
      <p>
        16.4 Clienții comerciali trebuie să inspecteze bunurile cu promptitudine la livrare și să ne notifice
        cu privire la deteriorările vizibile, lipsurile, bunurile incorecte sau problemele de livrare cât mai
        curând posibil în mod rezonabil.
      </p>
      <p>
        16.5 Rambursările Clienților comerciali, atunci când sunt aprobate, pot fi emise sub formă de
        rambursare, înlocuire, credit în cont sau altă soluție convenită de MisaElectro.
      </p>

      <h2>17. Schimburi și înlocuiri</h2>
      <p>
        17.1 Putem oferi înlocuiri sau schimburi în cazul în care bunurile sunt defecte, deteriorate,
        incorecte sau în cazul în care suntem de acord cu un schimb la discreția noastră.
      </p>
      <p>17.2 Schimburile sunt supuse disponibilității stocului.</p>
      <p>
        17.3 Dacă un produs de înlocuire nu este disponibil, putem oferi o rambursare, o rambursare parțială,
        o alternativă echivalentă sau o altă soluție adecvată.
      </p>
      <p>
        17.4 Pentru schimburile din cauza răzgândirii, este posibil să fiți responsabil pentru costurile de
        returnare și pentru orice costuri de livrare suplimentare.
      </p>

      <h2>18. Garanție suplimentară și reclamații de garanție</h2>
      <p>
        18.1 Această Politică se aplică returnărilor, rambursărilor și anulărilor. Reclamațiile de garanție
        pot fi, de asemenea, supuse termenilor noștri de garanție, termenilor specifici produsului,
        condițiilor de garanție ale producătorului și oricărei Garanții suplimentare plătite, achiziționate
        la finalizarea comenzii.
      </p>
      <p>18.2 Garanția suplimentară nu înlocuiește și nu reduce drepturile dumneavoastră legale.</p>
      <p>
        18.3 Reclamațiile de garanție pot necesita dovada achiziției, fotografii, videoclipuri, informații de
        diagnosticare, inspecție sau returnarea produsului.
      </p>
      <p>
        18.4 Acoperirea garanției nu include în mod normal instalarea incorectă, utilizarea
        necorespunzătoare, suprasarcina, modificarea neautorizată, supratensiunile, deteriorarea externă,
        mediul nepotrivit, uzura normală, piesele consumabile, costurile cu manopera, costurile
        electricianului, costurile de îndepărtare, costurile de reinstalare sau întârzierile proiectului, cu
        excepția cazului în care se prevede în mod expres altfel.
      </p>
      <p>
        18.5 În cazul în care o reclamație de garanție este aprobată, soluția poate include reparație,
        înlocuire, înlocuire echivalentă, rambursare parțială, rambursare sau o altă soluție rezonabilă în
        funcție de circumstanțe și de legislația aplicabilă.
      </p>

      <h2>19. Articole returnate fără autorizație</h2>
      <p>19.1 Trebuie să ne contactați înainte de a returna orice bunuri.</p>
      <p>
        19.2 Bunurile returnate fără contact prealabil sau fără a urma instrucțiunile noastre de returnare
        pot fi întârziate, respinse sau returnate dumneavoastră.
      </p>
      <p>
        19.3 Nu suntem responsabili pentru bunurile trimise la adresa greșită sau returnate fără urmărire,
        identificare sau informații suficiente despre comandă.
      </p>
      <p>
        19.4 Dacă nu putem identifica comanda sau clientul legat de un articol returnat, este posibil să nu
        putem procesa returnarea.
      </p>

      <h2>20. Contestații de plată și dispute de plată</h2>
      <p>
        20.1 Dacă aveți o problemă cu o comandă, o livrare, o returnare, o rambursare sau o reclamație de
        garanție, vă rugăm să ne contactați mai întâi pentru a putea investiga și încerca să rezolvăm
        problema.
      </p>
      <p>
        20.2 Dacă deschideți o contestație de plată sau o dispută de plată, este posibil să fim obligați să
        partajăm informații privind comanda, livrarea, comunicarea, returnarea, urmărirea, rambursarea și
        prevenirea fraudei cu furnizorul nostru de plăți, banca, rețeaua de carduri sau furnizorul de
        soluționare a disputelor.
      </p>
      <p>
        20.3 Ne rezervăm dreptul de a contesta contestațiile de plată sau disputele de plată în cazul în care
        considerăm că o comandă a fost onorată corect sau că o reclamație este inexactă, frauduloasă,
        abuzivă sau nesusținută.
      </p>

      <h2>21. Drepturile dumneavoastră legale</h2>
      <p>21.1 Nimic din această Politică nu limitează drepturile dumneavoastră legale obligatorii.</p>
      <p>
        21.2 Consumatorii pot avea drepturi legale în cazul în care bunurile sunt defecte, nu corespund
        descrierii, nu sunt adecvate scopului, sunt nesigure sau nu sunt conforme cu contractul.
      </p>
      <p>21.3 Consumatorii din UE pot avea drepturi de garanție legală în temeiul legislației aplicabile privind protecția consumatorilor.</p>
      <p>21.4 Consumatorii din Regatul Unit pot avea drepturi în temeiul legislației aplicabile din Regatul Unit privind protecția consumatorilor.</p>
      <p>
        21.5 Aceste drepturi sunt separate de orice garanție a producătorului, garanție comercială, garanție
        suplimentară sau politică de returnare voluntară.
      </p>

      <h2>22. Modificări ale acestei Politici</h2>
      <p>
        22.1 Putem actualiza această Politică de returnare, rambursare și anulare din când în când pentru a
        reflecta modificări în produsele, operațiunile, procesele de curierat, cerințele legale, cerințele
        furnizorului de plăți, procesele de garanție sau procedurile de asistență pentru clienți.
      </p>
      <p>
        22.2 Versiunea acestei Politici în vigoare la momentul plasării comenzii dumneavoastră se va aplica
        acelei comenzi, cu excepția cazului în care o modificare este impusă de lege sau se referă la o
        corectare care trebuie aplicată.
      </p>
      <p>
        22.3 Atunci când actualizăm această Politică, vom revizui data &bdquo;Ultima actualizare&rdquo; din
        partea de sus a paginii.
      </p>

      <h2>23. Informații de contact</h2>
      <p>
        Dacă aveți întrebări despre anulări, returnări, rambursări, bunuri deteriorate, bunuri defecte,
        articole incorecte sau reclamații de garanție, vă rugăm să ne contactați:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  hu: (
    <PolicyLayout title="Visszaküldési, visszatérítési és lemondási szabályzat" lastUpdated="2026. május 29.">
      <p>
        Ez a Visszaküldési, visszatérítési és lemondási szabályzat ismerteti, hogyan kezeljük a
        megrendelések lemondását, a fogyasztói visszaküldéseket, a visszatérítéseket, a sérült árukat, a
        hibás árukat, a hibás termékeket és a korlátozott visszaküldéseket a www.misaelectro.ro oldalon
        keresztül végzett vásárlások esetén.
      </p>
      <p>A weboldalt a következő üzemelteti:</p>
      <ContactBlock />
      <p>
        Ebben a Szabályzatban a &bdquo;MisaElectro&rdquo;, &bdquo;mi&rdquo; vagy &bdquo;miénk&rdquo; a
        MISARELIANA S.R.L. társaságot jelenti. A &bdquo;Vásárló&rdquo;, &bdquo;Ön&rdquo; vagy &bdquo;Öné&rdquo;
        bármely olyan személyt vagy vállalkozást jelent, aki a weboldalon keresztül rendelést ad le.
      </p>
      <p>
        Ezt a Szabályzatot az Általános szerződési feltételeinkkel, a Szállítási szabályzatunkkal, az
        Adatvédelmi szabályzatunkkal, a Cookie-szabályzatunkkal, valamint bármely termékspecifikus jótállási
        vagy kiegészítő jótállási feltétellel együtt kell értelmezni.
      </p>
      <p>
        E Szabályzat egyetlen rendelkezése sem korlátozza az alkalmazandó fogyasztóvédelmi jogszabályok
        alapján Önt esetlegesen megillető kötelező érvényű jogokat.
      </p>

      <h2>1. E Szabályzat hatálya</h2>
      <p>1.1 Ez a Szabályzat a MisaElectro oldalon keresztül vásárolt fizikai árukra vonatkozik.</p>
      <p>
        1.2 A MisaElectro elektromos termékeket, elektromos anyagokat, vezetékezési tartozékokat,
        világítással kapcsolatos termékeket, szerelési alkatrészeket, elosztási és áramkörvédelmi
        termékeket, aljzatokat, kapcsolókat, kábeleket, rögzítési tartozékokat és kapcsolódó árukat kínál.
      </p>
      <p>
        1.3 Mivel az elektromos termékek biztonsági szempontból kritikusak lehetnek, a visszaküldésre való
        jogosultság a termék típusától, állapotától, csomagolásától, attól, hogy a terméket telepítették-e
        vagy használták-e, valamint attól függ, hogy a rendelést Fogyasztó vagy Üzleti vásárló adta-e le.
      </p>
      <p>
        1.4 Ez a Szabályzat mind a Fogyasztókra, mind az Üzleti vásárlókra vonatkozik, de egyes jogok csak a
        Fogyasztókra vonatkoznak.
      </p>

      <h2>2. A Fogyasztó és az Üzleti vásárló meghatározása</h2>
      <p>
        2.1 A &bdquo;Fogyasztó&rdquo; olyan magánszemélyt jelent, aki teljes egészében vagy főként személyes
        használatra, és nem kereskedelmi, üzleti, kézműves vagy szakmai célból vásárol árut.
      </p>
      <p>
        2.2 Az &bdquo;Üzleti vásárló&rdquo; bármely olyan vállalatot, egyéni vállalkozót, vállalkozót,
        villanyszerelőt, telepítőt, viszonteladót, szervezetet, közintézményt vagy szakmai vásárlót jelent,
        aki kereskedelmi, üzleti, telepítési, viszonteladási, szakmai vagy üzleti célból vásárol árut.
      </p>
      <p>2.3 A Fogyasztói lemondási jogok csak a Fogyasztókra vonatkoznak.</p>
      <p>
        2.4 Az Üzleti vásárlóknak nincs általános joguk a nem hibás áruk visszaküldésére meggondolás,
        hibás rendelés, felesleges készlet, projektváltozások, nem megfelelő specifikáció vagy a vásárló
        oldalán elkövetett hiba miatt, kivéve, ha írásban másként állapodunk meg.
      </p>

      <h2>3. Megrendelés lemondása feladás előtt</h2>
      <p>3.1 Kérheti a megrendelés lemondását annak feladása előtt.</p>
      <p>
        3.2 A lemondás kéréséhez a lehető leghamarabb vegye fel velünk a kapcsolatot a info@misaelectro.ro
        címen, és adja meg a rendelési számát.
      </p>
      <p>
        3.3 Ésszerű erőfeszítéseket teszünk a megrendelés feladás előtti lemondása érdekében. A lemondás
        azonban nem garantált, ha a megrendelést már feldolgozták, becsomagolták, átadták a fuvarozónak,
        külön megrendelték, előkészítették, levágták, testreszabták vagy feladták.
      </p>
      <p>
        3.4 Ha a lemondást a feladás előtt megerősítjük, visszatérítjük a lemondott árukért fizetett összeget
        és az adott lemondott megrendelésért fizetett bármely vonatkozó szállítási díjat.
      </p>
      <p>
        3.5 Ha a megrendelést már feladták, a megrendelés a kézbesítés előtt már nem mondható le. A
        fogyasztói visszaküldések a jelen Szabályzatnak megfelelően továbbra is elérhetők lehetnek.
      </p>

      <h2>4. A Fogyasztó lemondási joga a kézbesítés után</h2>
      <p>
        4.1 Ha Ön Fogyasztó, jogosult lehet egy jogosult online vásárlás lemondására az áru átvételétől
        számított 14 napon belül, indokolás nélkül.
      </p>
      <p>
        4.2 A lemondási időszak azt a napot követő 14 nap elteltével jár le, amelyen Ön vagy egy Ön által
        megnevezett személy átveszi az árut.
      </p>
      <p>
        4.3 Ha a megrendelését több csomagban kézbesítik, a lemondási időszak általában az utolsó csomag
        átvételét követő 14 nap elteltével jár le.
      </p>
      <p>
        4.4 A lemondási jogának gyakorlásához a lemondási időszak lejárta előtt egyértelműen értesítenie kell
        minket e-mailben a info@misaelectro.ro címen.
      </p>
      <p>4.5 Az e-mailnek tartalmaznia kell:</p>
      <ul>
        <li>az Ön teljes nevét;</li>
        <li>a rendelési számot;</li>
        <li>a szállítási címet;</li>
        <li>a termék nevét vagy SKU-ját;</li>
        <li>annak megerősítését, hogy le kívánja mondani vagy vissza kívánja küldeni az adott terméket.</li>
      </ul>
      <p>
        4.6 Miután értesített minket arról, hogy le kívánja mondani, az árut indokolatlan késedelem nélkül,
        legkésőbb az értesítésünk időpontjától számított 14 napon belül vissza kell küldenie.
      </p>
      <p>
        4.7 Ön felelős az áru visszaküldésének költségeiért, kivéve, ha az áru hibás, sérült, helytelen, vagy
        ha írásban másként állapodtunk meg.
      </p>

      <h2>5. A visszaküldött áru állapota</h2>
      <p>5.1 A visszaküldött árukat ésszerű gondossággal kell kezelni.</p>
      <p>
        5.2 Kivéve, ha az áru hibás, sérült vagy helytelen, a visszaküldött árunak a következőnek kell
        lennie:
      </p>
      <ul>
        <li>használatlan;</li>
        <li>be nem szerelt;</li>
        <li>be nem vezetékezett és nem csatlakoztatott;</li>
        <li>nem tesztelt, nem üzembe helyezett és nem integrált semmilyen elektromos rendszerbe;</li>
        <li>hiánytalan, minden alkatrésszel, tartozékkal, kézikönyvvel, címkével, pecséttel és védőanyaggal együtt;</li>
        <li>lehetőség szerint eredeti csomagolásban;</li>
        <li>továbbértékesíthető állapotban.</li>
      </ul>
      <p>
        5.3 Az árut úgy vizsgálhatja meg, ahogyan azt egy üzletben ésszerűen megtehetné, de nem telepítheti,
        vezetékezheti, csatlakoztathatja, használhatja, módosíthatja, károsíthatja vagy kezelheti az árut
        azon túl, ami a jellegének, jellemzőinek és működésének megvizsgálásához szükséges.
      </p>
      <p>
        5.4 Csökkenthetjük a visszatérítését, hogy tükrözze a szükségesnél nagyobb mértékű kezelésből eredő
        értékcsökkenést, beleértve a telepítést, a használatot, a hiányzó csomagolást, a hiányzó
        tartozékokat, a sérülést, a szennyeződést vagy a csökkent továbbértékesítési értéket.
      </p>

      <h2>6. Vissza nem küldhető és korlátozottan visszaküldhető termékek</h2>
      <p>
        6.1 Bizonyos áruk meggondolás miatt nem küldhetők vissza, kivéve, ha hibásak, sérültek, helytelenek,
        vagy a visszaküldési jogokat jogszabály írja elő.
      </p>
      <p>6.2 A vissza nem küldhető vagy korlátozottan visszaküldhető termékek a következők lehetnek:</p>
      <ul>
        <li>rendelésre készített áruk;</li>
        <li>az Ön számára külön megrendelt áruk;</li>
        <li>méretre vágott áruk, beleértve a kábeleket vagy hasonló anyagokat;</li>
        <li>testreszabott, módosított, összeszerelt vagy átalakított áruk;</li>
        <li>telepített, vezetékezett, csatlakoztatott, tesztelt, üzembe helyezett vagy használt elektromos áruk;</li>
        <li>a kézbesítés után megsérült áruk;</li>
        <li>olyan áruk, amelyekből hiányoznak alkatrészek, tartozékok, kézikönyvek, csomagolás, címkék, pecsétek vagy védőanyagok;</li>
        <li>helytelen tárolás, nedvesség, hő, ütés, szennyeződés, por, vegyi anyagok, korrózió, nem rendeltetésszerű használat vagy jogosulatlan kezelés által érintett áruk;</li>
        <li>olyan áruk, amelyek már nem továbbértékesíthető állapotban vannak;</li>
        <li>kiárusítási, végső eladási, megszűnt vagy külön megrendelt termékek, ahol a visszaküldési korlátozásokat egyértelműen és jogszerűen feltüntették.</li>
      </ul>
      <p>
        6.3 Ez a szakasz nem korlátozza az Ön jogszabályi jogait, ha az áruk hibásak, nem a leírásnak
        megfelelőek, nem biztonságosak, vagy egyébként nem felelnek meg az alkalmazandó jognak.
      </p>

      <h2>7. Hibás, sérült vagy helytelen áruk</h2>
      <p>
        7.1 Ha az áru hibásan, sérülten, hiányosan vagy helytelenül érkezik meg, kérjük, a lehető leghamarabb
        vegye fel velünk a kapcsolatot a info@misaelectro.ro címen.
      </p>
      <p>7.2 Kérjük, tüntesse fel:</p>
      <ul>
        <li>a rendelési számát;</li>
        <li>a probléma egyértelmű leírását;</li>
        <li>fényképeket vagy videókat az árukról;</li>
        <li>fényképeket a csomagolásról és a szállítási címkéről;</li>
        <li>bármely vonatkozó termékcímkét, sorozatszámot vagy gyártói jelölést.</li>
      </ul>
      <p>
        7.3 Látható kézbesítési sérülés esetén kérjük, lehetőség szerint a kézbesítéstől számított 48 órán
        belül értesítsen minket. Ez segít nekünk a futárral szembeni igények gyors kivizsgálásában, de nem
        szünteti meg az Önt esetlegesen megillető kötelező érvényű jogokat.
      </p>
      <p>
        7.4 A terméket, a csomagolást, a címkéket, a kézikönyveket, a tartozékokat és a kézbesítési
        anyagokat mindaddig meg kell őriznie, amíg a problémát felül nem vizsgáltuk.
      </p>
      <p>
        7.5 A visszatérítés, csere, javítás vagy egyéb jogorvoslat jóváhagyása előtt megkövetelhetjük az áru
        visszaküldését vagy megvizsgálását.
      </p>
      <p>
        7.6 Ha megerősítést nyer, hogy az áru hibás, a kézbesítés előtt megsérült, helytelen, vagy egyébként
        nem felel meg a szerződésnek, az alkalmazandó jognak megfelelően javítást, cserét, visszatérítést,
        részleges visszatérítést vagy egyéb jogorvoslatot biztosíthatunk.
      </p>
      <p>
        7.7 Ha megerősítést nyer, hogy az áru hibás, sérült vagy helytelen, fedezzük az ésszerű
        visszaküldési szállítási költségeket, vagy visszaküldési utasításokat adunk.
      </p>
      <p>
        7.8 Nem vagyunk felelősek a helytelen telepítés, a nem megfelelő termékválasztás, a nem
        rendeltetésszerű használat, a túlterhelés, a jogosulatlan módosítás, a külső sérülés, a helytelen
        tárolás, a nem megfelelő környezet, a harmadik fél által végzett munka, a túlfeszültség, a
        természetes elhasználódás, a gyártói utasítások be nem tartása vagy a termék rendeltetésén kívüli
        használat által okozott hibákért vagy sérülésekért.
      </p>

      <h2>8. Elektromos áruk és telepítési felelősség</h2>
      <p>
        8.1 Az elektromos áruk nem biztonságosak lehetnek, ha helytelenül választják ki, telepítik,
        vezetékezik, csatlakoztatják, módosítják, túlterhelik vagy használják őket.
      </p>
      <p>
        8.2 A vásárlás előtt Ön felelős annak ellenőrzéséért, hogy a termék alkalmas-e az Ön által tervezett
        használatra, beleértve a feszültséget, az áramot, a terhelést, a teljesítményt, az IP-védettséget, a
        méreteket, a kábeltípust, a kompatibilitást, a telepítési környezetet és a helyi szabályozási
        követelményeket.
      </p>
      <p>
        8.3 Az elektromos telepítést, vezetékezést, csatlakoztatást, tesztelést, üzembe helyezést vagy
        elektromos rendszerbe való integrálást igénylő termékeket csak szakképzett villanyszerelő vagy
        hozzáértő szakember telepítheti, ahol ez szükséges vagy célszerű.
      </p>
      <p>
        8.4 A telepített, vezetékezett, csatlakoztatott, módosított, üzembe helyezett vagy használt áruk nem
        feltétlenül jogosultak visszaküldésre, kivéve, ha hibásak, helytelenek, vagy egyébként kötelező
        érvényű jogszabályi jogok fedezik őket.
      </p>
      <p>
        8.5 Megtagadhatjuk vagy csökkenthetjük a visszatérítést, ha a terméket olyan állapotban küldték
        vissza, amely megakadályozza a biztonságos továbbértékesítést vagy a megfelelő vizsgálatot.
      </p>

      <h2>9. Visszaküldési szállítási költségek</h2>
      <p>
        9.1 A meggondolás miatti visszaküldések esetén a vásárló felelős a visszaküldési szállítási
        költségekért, kivéve, ha írásban másként állapodunk meg.
      </p>
      <p>
        9.2 Hibás, sérült vagy helytelen áruk esetén a MisaElectro fedezi az ésszerű visszaküldési szállítási
        költségeket, ahol a problémát megerősítik, vagy ahol visszaküldési utasításokat adunk.
      </p>
      <p>9.3 Ne küldjön vissza árut anélkül, hogy először felvenné velünk a kapcsolatot.</p>
      <p>
        9.4 Előfordulhat, hogy nem tudjuk visszatéríteni a visszaküldési szállítási költségeket, ha prémium,
        expressz, túlméretes, nemzetközi vagy nem jóváhagyott visszaküldési módot használ előzetes
        beleegyezésünk nélkül.
      </p>
      <p>
        9.5 Javasoljuk, hogy nyomon követett és biztosított visszaküldési szolgáltatást használjon. Ön felel
        a visszaküldött árukért mindaddig, amíg azokat mi vagy az általunk kijelölt visszaküldési helyszín át
        nem veszi.
      </p>

      <h2>10. Visszaküldési eljárás</h2>
      <p>10.1 A visszaküldés megkezdéséhez vegye fel velünk a kapcsolatot a info@misaelectro.ro címen.</p>
      <p>10.2 Kérjük, tüntesse fel:</p>
      <ul>
        <li>a rendelési számot;</li>
        <li>a termék nevét vagy SKU-ját;</li>
        <li>a visszaküldés okát;</li>
        <li>fényképeket vagy videókat, ahol a termék sérült, hibás, helytelen vagy hiányos;</li>
        <li>annak megerősítését, hogy a terméket felnyitották, telepítették, csatlakoztatták, tesztelték vagy használták-e.</li>
      </ul>
      <p>
        10.3 Ha a visszaküldést elfogadjuk vagy vizsgálatot igényel, visszaküldési utasításokat adunk.
      </p>
      <p>
        10.4 A visszaküldési cím vagy a visszaküldési mód a terméktől, a szállítótól, a futártól, a
        rendeltetési helytől vagy a probléma jellegétől függően változhat.
      </p>
      <p>
        10.5 Az előzetes kapcsolatfelvétel nélkül, a szükséges információk nélkül vagy helytelen címre
        visszaküldött áruk késleltetve, elutasítva vagy Önnek visszaküldve lehetnek.
      </p>
      <p>10.6 A visszaküldött árukat biztonságosan kell csomagolnia, hogy elkerülje a szállítás közbeni sérülést.</p>
      <p>
        10.7 Ha a visszaküldött áruk a nem megfelelő csomagolás miatt szállítás közben megsérülnek,
        csökkenthetjük vagy megtagadhatjuk a visszatérítést, ahol a jog ezt megengedi.
      </p>

      <h2>11. A visszatérítés időzítése</h2>
      <p>
        11.1 Miután megkapjuk és megvizsgáljuk a visszaküldött árukat, értesítjük Önt arról, hogy a
        visszatérítést jóváhagyták-e.
      </p>
      <p>
        11.2 Ha a visszatérítést jóváhagyják, azt lehetőség szerint az eredeti fizetési módra dolgozzuk fel.
      </p>
      <p>
        11.3 A Fogyasztói lemondási visszaküldések esetén az esedékes visszatérítést az alkalmazandó jog
        által előírt határidőn belül teljesítjük.
      </p>
      <p>
        11.4 Visszatarthatjuk a visszatérítést mindaddig, amíg vissza nem kapjuk az árut, vagy amíg Ön nem
        szolgáltat bizonyítékot arról, hogy visszaküldte az árut, attól függően, hogy melyik következik be
        előbb, ahol a jog ezt megengedi.
      </p>
      <p>
        11.5 Miután feldolgozzuk a visszatérítést, az Ön bankja, kártyakibocsátója vagy fizetési
        szolgáltatója további időt vehet igénybe ahhoz, hogy a pénzeszközök az Ön rendelkezésére álljanak.
      </p>
      <p>
        11.6 A visszatérítések általában nem teljesíthetők másik kártyára, számlára, személynek vagy fizetési
        módra.
      </p>

      <h2>12. Szállítási díjak és visszatérítések</h2>
      <p>
        12.1 Ha egy Fogyasztó a törvényes lemondási jogok alapján érvényesen lemond egy jogosult
        megrendelést, visszatérítjük a termék árát és az eredeti kézbesítésért fizetett szabványos alap
        szállítási díjat, ahol azt a jog előírja.
      </p>
      <p>
        12.2 Nem vagyunk kötelesek további szállítási költségeket visszatéríteni, ha Ön a felkínált
        legolcsóbb szabványos szállítási lehetőségnél drágább szállítási módot választott.
      </p>
      <p>
        12.3 A szállítási díjak nem téríthetők vissza Üzleti vásárlói visszaküldések, mérlegelési alapú
        visszaküldések, sikertelen kézbesítés, elutasított kézbesítés, helytelen cím, át nem vett csomagok
        vagy nem hibás visszaküldések esetén, kivéve, ha másként állapodunk meg, vagy az alkalmazandó jog ezt
        előírja.
      </p>
      <p>
        12.4 A vámok, az importáfa, a brókeri díjak, a futár kezelési díjai, a helyi adók, a vámkezelési
        díjak és egyéb helyi díjak nem a MisaElectro által kerülnek felszámításra, és a MisaElectro nem
        téríti vissza őket.
      </p>

      <h2>13. Nemzetközi visszaküldések</h2>
      <p>
        13.1 A nemzetközi vásárlók felelősek annak biztosításáért, hogy a visszaküldött áruk megfelelően
        legyenek becsomagolva, felcímkézve, bejelentve és feladva az alkalmazandó futár- és
        vámkövetelményeknek megfelelően.
      </p>
      <p>13.2 Ön felelős az áru visszaküldéséhez szükséges vámáru-nyilatkozatokért.</p>
      <p>
        13.3 Ha egy visszaküldés helytelen vámokmányok, kifizetetlen díjak, tiltott áruk vagy a visszaküldési
        utasítások be nem tartása miatt késik, elutasításra, lefoglalásra, elhagyásra kerül vagy
        visszaküldik, előfordulhat, hogy nem tudjuk feldolgozni a visszatérítést.
      </p>
      <p>
        13.4 A meggondolás miatti nemzetközi visszaküldések esetén Ön felelős a visszaküldési szállítási
        költségekért, a vámdíjakért, az adókért, a brókeri díjakért és a kapcsolódó költségekért, kivéve, ha
        az áruk hibásak, sérültek, helytelenek, vagy ha írásban másként állapodunk meg.
      </p>
      <p>
        13.5 Ha a MisaElectrónál egy nemzetközi visszaküldés miatt vám- vagy futárdíjak merülnek fel, ezek
        levonhatók bármely visszatérítésből, ahol a jog ezt megengedi.
      </p>

      <h2>14. Hiányos vagy helytelen cím</h2>
      <p>
        14.1 Ön felelős a teljes és pontos számlázási és kézbesítési adatok megadásáért a pénztárnál.
      </p>
      <p>
        14.2 A MisaElectro nem felelős az Ön által megadott helytelen, hiányos, elavult vagy nem megfelelően
        formázott címadatok által okozott késésekért, sikertelen kézbesítésekért, elveszett csomagokért,
        visszaküldési díjakért vagy további költségekért.
      </p>
      <p>
        14.3 Ha egy megrendelést azért küldenek vissza nekünk, mert a cím helytelen, hiányos,
        hozzáférhetetlen, elutasított vagy át nem vett volt, levonhatjuk az eredeti szállítási költségeket, a
        visszaküldési szállítási költségeket, a futárdíjakat, a vámdíjakat, a tárolási díjakat és egyéb
        ésszerű költségeket bármely visszatérítésből, kivéve, ha ezt a jog tiltja.
      </p>
      <p>
        14.4 Ha a vásárlói hiba miatti sikertelen kézbesítés után újbóli kiszállítást kér, további szállítási
        díjak merülhetnek fel.
      </p>

      <h2>15. Elutasított vagy át nem vett csomagok</h2>
      <p>
        15.1 Ha elutasítja a kézbesítést, nem fogadja el a kézbesítést, nem fizeti meg a vám- vagy
        importdíjakat, vagy nem veszi át a csomagot a futártól a szükséges határidőn belül, a futár
        visszaküldheti nekünk a csomagot, késleltetheti, elhagyhatja vagy megsemmisítheti azt.
      </p>
      <p>
        15.2 Ha a csomagot visszaküldik nekünk, levonhatjuk az eredeti szállítási költséget, a visszaküldési
        szállítási költséget, a futárdíjakat, a vámdíjakat, a tárolási díjakat, a kezelési díjakat és bármely
        egyéb ésszerű költséget a visszatérítéséből, kivéve, ha ezt a jog tiltja.
      </p>
      <p>
        15.3 A kézbesítés elutasítása nem szünteti meg automatikusan a már esetlegesen kivetett vámdíjakat,
        futárdíjakat vagy helyi díjakat.
      </p>
      <p>
        15.4 Ha Ön Fogyasztó, és a törvényes lemondási jogainak gyakorlása részeként utasítja el a
        kézbesítést, a visszatérítését a jelen Szabályzatnak és az alkalmazandó jognak megfelelően kezeljük.
      </p>

      <h2>16. Üzleti vásárlói visszaküldések</h2>
      <p>
        16.1 Az Üzleti vásárlóknak nincs általános joguk a nem hibás áruk lemondására vagy visszaküldésére
        meggondolás, a vásárló projektváltozásai, hibás rendelés, felesleges készlet, nem megfelelő
        specifikáció miatt, vagy mert már nincs szükségük az árura.
      </p>
      <p>
        16.2 Bármely, Üzleti vásárlótól elfogadott, nem hibás áru visszaküldése a MisaElectro mérlegelésén
        múlik.
      </p>
      <p>16.3 Ha beleegyezünk egy Üzleti vásárlói visszaküldésbe, feltételeket alkalmazhatunk, beleértve:</p>
      <ul>
        <li>előzetes írásbeli jóváhagyást;</li>
        <li>visszaküldést egy meghatározott időszakon belül;</li>
        <li>használatlan, be nem szerelt, hiánytalan és továbbértékesíthető árukat;</li>
        <li>az eredeti csomagolást és tartozékokat mellékelve;</li>
        <li>a visszaküldési szállítási költség vásárló általi megfizetését;</li>
        <li>levonást a csökkent érték miatt;</li>
        <li>visszakészletezési vagy kezelési díjat, ahol ez ésszerű és megállapodott vagy megengedett.</li>
      </ul>
      <p>
        16.4 Az Üzleti vásárlóknak a kézbesítéskor haladéktalanul meg kell vizsgálniuk az árut, és a lehető
        leghamarabb, ésszerű időn belül értesíteniük kell minket a látható sérülésekről, hiányokról, helytelen
        árukról vagy kézbesítési problémákról.
      </p>
      <p>
        16.5 Az Üzleti vásárlói visszatérítések, ha jóváhagyják őket, visszatérítés, csere, számlajóváírás
        vagy a MisaElectro által megállapodott egyéb jogorvoslat formájában teljesíthetők.
      </p>

      <h2>17. Cserék és pótlások</h2>
      <p>
        17.1 Pótlást vagy cserét kínálhatunk, ha az áru hibás, sérült, helytelen, vagy ha saját belátásunk
        szerint beleegyezünk a cserébe.
      </p>
      <p>17.2 A cserék a készlet rendelkezésre állásától függenek.</p>
      <p>
        17.3 Ha egy pótlótermék nem áll rendelkezésre, visszatérítést, részleges visszatérítést, egyenértékű
        alternatívát vagy egyéb megfelelő jogorvoslatot kínálhatunk.
      </p>
      <p>
        17.4 A meggondolás miatti cserék esetén Ön felelős lehet a visszaküldési szállításért és bármely
        további kézbesítési költségért.
      </p>

      <h2>18. Kiegészítő jótállás és jótállási igények</h2>
      <p>
        18.1 Ez a Szabályzat a visszaküldésekre, visszatérítésekre és lemondásokra vonatkozik. A jótállási
        igényekre a jótállási feltételeink, a termékspecifikus feltételek, a gyártói jótállási feltételek és a
        pénztárnál vásárolt bármely fizetős Kiegészítő jótállás is vonatkozhatnak.
      </p>
      <p>18.2 A Kiegészítő jótállás nem helyettesíti és nem csökkenti az Ön jogszabályi jogait.</p>
      <p>
        18.3 A jótállási igények megkövetelhetik a vásárlás igazolását, fényképeket, videókat, diagnosztikai
        információkat, vizsgálatot vagy a termék visszaküldését.
      </p>
      <p>
        18.4 A jótállási fedezet általában nem terjed ki a helytelen telepítésre, a nem rendeltetésszerű
        használatra, a túlterhelésre, a jogosulatlan módosításra, a túlfeszültségre, a külső sérülésre, a nem
        megfelelő környezetre, a természetes elhasználódásra, a fogyóeszközökre, a munkadíjra, a
        villanyszerelői költségekre, az eltávolítási költségekre, az újratelepítési költségekre vagy a
        projektkésésekre, kivéve, ha kifejezetten másként rendelkezünk.
      </p>
      <p>
        18.5 Ha egy jótállási igényt jóváhagynak, a jogorvoslat magában foglalhatja a javítást, a cserét, az
        egyenértékű cserét, a részleges visszatérítést, a visszatérítést vagy a körülményektől és az
        alkalmazandó jogtól függő egyéb ésszerű jogorvoslatot.
      </p>

      <h2>19. Engedély nélkül visszaküldött termékek</h2>
      <p>19.1 Az áruk visszaküldése előtt fel kell vennie velünk a kapcsolatot.</p>
      <p>
        19.2 Az előzetes kapcsolatfelvétel nélkül vagy a visszaküldési utasításaink betartása nélkül
        visszaküldött áruk késleltetve, elutasítva vagy Önnek visszaküldve lehetnek.
      </p>
      <p>
        19.3 Nem vagyunk felelősek a rossz címre küldött vagy megfelelő nyomon követés, azonosítás vagy
        rendelési információk nélkül visszaküldött árukért.
      </p>
      <p>
        19.4 Ha nem tudjuk azonosítani a visszaküldött termékhez kapcsolódó megrendelést vagy vásárlót,
        előfordulhat, hogy nem tudjuk feldolgozni a visszaküldést.
      </p>

      <h2>20. Visszaterhelések és fizetési viták</h2>
      <p>
        20.1 Ha problémája van egy megrendeléssel, kézbesítéssel, visszaküldéssel, visszatérítéssel vagy
        jótállási igénnyel, kérjük, először vegye fel velünk a kapcsolatot, hogy kivizsgálhassuk és
        megpróbálhassuk megoldani az ügyet.
      </p>
      <p>
        20.2 Ha visszaterhelést vagy fizetési vitát nyit, előfordulhat, hogy meg kell osztanunk a rendelési,
        kézbesítési, kommunikációs, visszaküldési, nyomon követési, visszatérítési és csalásmegelőzési
        információkat a fizetési szolgáltatónkkal, a bankkal, a kártyahálózattal vagy a vitarendezési
        szolgáltatóval.
      </p>
      <p>
        20.3 Fenntartjuk a jogot, hogy vitassuk a visszaterheléseket vagy a fizetési vitákat, ha úgy véljük,
        hogy egy megrendelést helyesen teljesítettek, vagy egy igény pontatlan, csalárd, visszaélésszerű vagy
        alá nem támasztott.
      </p>

      <h2>21. Az Ön jogszabályi jogai</h2>
      <p>21.1 E Szabályzat egyetlen rendelkezése sem korlátozza az Ön kötelező érvényű jogszabályi jogait.</p>
      <p>
        21.2 A Fogyasztókat jogszabályi jogok illethetik meg, ha az áru hibás, nem a leírásnak megfelelő,
        nem alkalmas a célra, nem biztonságos, vagy nem felel meg a szerződésnek.
      </p>
      <p>21.3 Az uniós Fogyasztókat az alkalmazandó fogyasztóvédelmi jog alapján törvényes jótállási jogok illethetik meg.</p>
      <p>21.4 Az egyesült királyságbeli Fogyasztókat az alkalmazandó egyesült királyságbeli fogyasztóvédelmi jog alapján jogok illethetik meg.</p>
      <p>
        21.5 Ezek a jogok elkülönülnek bármely gyártói jótállástól, kereskedelmi jótállástól, kiegészítő
        jótállástól vagy önkéntes visszaküldési szabályzattól.
      </p>

      <h2>22. E Szabályzat módosításai</h2>
      <p>
        22.1 Időről időre frissíthetjük ezt a Visszaküldési, visszatérítési és lemondási szabályzatot, hogy
        tükrözze a termékeinkben, a működésünkben, a futárfolyamatainkban, a jogi követelményekben, a
        fizetési szolgáltatói követelményekben, a jótállási folyamatokban vagy az ügyfélszolgálati
        eljárásokban bekövetkező változásokat.
      </p>
      <p>
        22.2 A megrendelése leadásának időpontjában hatályos Szabályzat verziója vonatkozik az adott
        megrendelésre, kivéve, ha egy módosítást a jog ír elő, vagy egy alkalmazandó javításhoz kapcsolódik.
      </p>
      <p>
        22.3 Amikor frissítjük ezt a Szabályzatot, felülvizsgáljuk az oldal tetején található &bdquo;Utolsó
        frissítés&rdquo; dátumot.
      </p>

      <h2>23. Kapcsolattartási adatok</h2>
      <p>
        Ha bármilyen kérdése van a lemondásokkal, visszaküldésekkel, visszatérítésekkel, sérült árukkal,
        hibás árukkal, helytelen termékekkel vagy jótállási igényekkel kapcsolatban, kérjük, vegye fel velünk
        a kapcsolatot:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  bg: (
    <PolicyLayout title="Политика за връщане, възстановяване и анулиране" lastUpdated="29 май 2026 г.">
      <p>
        Настоящата Политика за връщане, възстановяване и анулиране обяснява как се обработват анулиранията на
        поръчки, потребителските връщания, възстановяванията, повредените стоки, дефектните стоки, неправилните
        стоки и ограничените връщания за покупки, направени чрез www.misaelectro.ro.
      </p>
      <p>Уебсайтът се управлява от:</p>
      <ContactBlock />
      <p>
        В настоящата Политика &bdquo;MisaElectro&rdquo;, &bdquo;ние&rdquo;, &bdquo;нас&rdquo; или
        &bdquo;наш&rdquo; означава MISARELIANA S.R.L.. &bdquo;Клиент&rdquo;, &bdquo;Вие&rdquo; или
        &bdquo;Ваш&rdquo; означава всяко физическо лице или предприятие, което прави поръчка чрез Уебсайта.
      </p>
      <p>
        Настоящата Политика следва да се чете заедно с нашите Общи условия, Политика за доставка, Политика за
        поверителност, Политика за бисквитките и всякакви специфични за продукта гаранционни условия или
        условия за допълнителна гаранция.
      </p>
      <p>
        Нищо в настоящата Политика не ограничава задължителните законови права, които може да имате съгласно
        приложимото законодателство за защита на потребителите.
      </p>

      <h2>1. Обхват на настоящата Политика</h2>
      <p>1.1 Настоящата Политика се прилага за физически стоки, закупени чрез MisaElectro.</p>
      <p>
        1.2 MisaElectro доставя електрически продукти, електрически материали, аксесоари за окабеляване,
        продукти, свързани с осветлението, монтажни компоненти, продукти за разпределение и защита на
        веригите, контакти, ключове, кабели, монтажни аксесоари и свързани стоки.
      </p>
      <p>
        1.3 Тъй като електрическите продукти могат да бъдат критични за безопасността, допустимостта за
        връщане зависи от вида на продукта, състоянието, опаковката, дали продуктът е бил монтиран или
        използван, и дали поръчката е направена от Потребител или Бизнес клиент.
      </p>
      <p>
        1.4 Настоящата Политика се прилага както за Потребители, така и за Бизнес клиенти, но някои права се
        прилагат само за Потребители.
      </p>

      <h2>2. Определения за Потребител и Бизнес клиент</h2>
      <p>
        2.1 &bdquo;Потребител&rdquo; означава физическо лице, което купува стоки изцяло или предимно за лична
        употреба, а не за търговски, стопански, занаятчийски или професионални цели.
      </p>
      <p>
        2.2 &bdquo;Бизнес клиент&rdquo; означава всяко дружество, едноличен търговец, изпълнител, електротехник,
        монтажник, препродавач, организация, публичен орган или професионален купувач, който купува стоки за
        търговски, стопански, монтажни, препродажбени, професионални или бизнес цели.
      </p>
      <p>2.3 Правата за анулиране на Потребителя се прилагат само за Потребители.</p>
      <p>
        2.4 Бизнес клиентите нямат общо право да връщат недефектни стоки поради промяна на решението,
        неправилно поръчване, излишни наличности, промени в проекта, неподходяща спецификация или грешка от
        страна на клиента, освен ако не се договорим писмено за друго.
      </p>

      <h2>3. Анулиране на поръчка преди изпращане</h2>
      <p>3.1 Можете да поискате анулиране на поръчка, преди тя да е изпратена.</p>
      <p>
        3.2 За да поискате анулиране, свържете се с нас възможно най-скоро на info@misaelectro.ro и посочете
        номера на Вашата поръчка.
      </p>
      <p>
        3.3 Ще положим разумни усилия да анулираме поръчката преди изпращане. Анулирането обаче не е
        гарантирано, ако поръчката вече е обработена, опакована, предадена на превозвача, специално поръчана,
        подготвена, нарязана, персонализирана или изпратена.
      </p>
      <p>
        3.4 Ако анулирането бъде потвърдено преди изпращане, ще възстановим сумата, платена за анулираните
        стоки, и всяка приложима такса за доставка, платена за тази анулирана поръчка.
      </p>
      <p>
        3.5 Ако поръчката вече е изпратена, поръчката вече не може да бъде анулирана преди доставката.
        Потребителските връщания все още могат да бъдат налични в съответствие с настоящата Политика.
      </p>

      <h2>4. Право на Потребителя да анулира след доставка</h2>
      <p>
        4.1 Ако сте Потребител, може да имате законовото право да анулирате допустима онлайн покупка в срок от
        14 дни от получаването на стоките, без да посочвате причина.
      </p>
      <p>
        4.2 Срокът за анулиране изтича 14 дни след деня, в който Вие или посочено от Вас лице получите стоките.
      </p>
      <p>
        4.3 Ако Вашата поръчка се доставя на няколко пратки, срокът за анулиране обикновено изтича 14 дни след
        деня, в който получите последната пратка.
      </p>
      <p>
        4.4 За да упражните правото си на анулиране, трябва ясно да ни уведомите по имейл на info@misaelectro.ro
        преди изтичането на срока за анулиране.
      </p>
      <p>4.5 Вашият имейл трябва да включва:</p>
      <ul>
        <li>Вашето пълно име;</li>
        <li>номер на поръчката;</li>
        <li>адрес за доставка;</li>
        <li>име на продукта или SKU;</li>
        <li>потвърждение, че желаете да анулирате или върнете съответния артикул.</li>
      </ul>
      <p>
        4.6 След като ни уведомите, че желаете да анулирате, трябва да върнете стоките без неоправдано забавяне
        и не по-късно от 14 дни от датата, на която сте ни уведомили.
      </p>
      <p>
        4.7 Вие носите отговорност за разходите за връщане на стоките, освен ако стоките са дефектни, повредени,
        неправилни или сме се договорили писмено за друго.
      </p>

      <h2>5. Състояние на върнатите стоки</h2>
      <p>5.1 Върнатите стоки трябва да се обработват с разумна грижа.</p>
      <p>5.2 Освен ако стоките са дефектни, повредени или неправилни, върнатите стоки трябва да бъдат:</p>
      <ul>
        <li>неизползвани;</li>
        <li>немонтирани;</li>
        <li>неокабелени и несвързани;</li>
        <li>нетествани, невъведени в експлоатация или неинтегрирани в никаква електрическа система;</li>
        <li>комплектни с всички части, аксесоари, ръководства, етикети, пломби и защитни материали;</li>
        <li>в оригиналната опаковка, където е възможно;</li>
        <li>в състояние, годно за препродажба.</li>
      </ul>
      <p>
        5.3 Можете да прегледате стоките, както бихте могли разумно да го направите в магазин, но не трябва да
        монтирате, окабелявате, свързвате, използвате, модифицирате, повреждате или обработвате стоките извън
        необходимото за проверка на тяхното естество, характеристики и функциониране.
      </p>
      <p>
        5.4 Можем да намалим Вашето възстановяване, за да отразим всяко намаляване на стойността, причинено от
        обработка извън необходимото, включително монтаж, употреба, липсваща опаковка, липсващи аксесоари,
        повреда, замърсяване или намалена стойност за препродажба.
      </p>

      <h2>6. Артикули, които не подлежат на връщане и с ограничено връщане</h2>
      <p>
        6.1 Определени стоки не могат да бъдат върнати поради промяна на решението, освен ако не са дефектни,
        повредени, неправилни или правата за връщане не се изискват по закон.
      </p>
      <p>6.2 Артикулите, които не подлежат на връщане или с ограничено връщане, могат да включват:</p>
      <ul>
        <li>стоки, изработени по поръчка;</li>
        <li>стоки, специално поръчани за Вас;</li>
        <li>стоки, нарязани по размер, включително кабели или подобни материали;</li>
        <li>персонализирани, модифицирани, сглобени или променени стоки;</li>
        <li>монтирани, окабелени, свързани, тествани, въведени в експлоатация или използвани електрически стоки;</li>
        <li>стоки, повредени след доставка;</li>
        <li>стоки, на които липсват части, аксесоари, ръководства, опаковка, етикети, пломби или защитни материали;</li>
        <li>стоки, засегнати от неправилно съхранение, влага, топлина, удар, замърсяване, прах, химикали, корозия, неправилна употреба или неоторизирано боравене;</li>
        <li>стоки, които вече не са в състояние, годно за препродажба;</li>
        <li>артикули за разпродажба, окончателна продажба, преустановени или специална поръчка, при които ограниченията за връщане са ясно посочени и законни.</li>
      </ul>
      <p>
        6.3 Този раздел не ограничава Вашите законови права, когато стоките са дефектни, не отговарят на
        описанието, са опасни или по друг начин не съответстват на приложимото законодателство.
      </p>

      <h2>7. Дефектни, повредени или неправилни стоки</h2>
      <p>
        7.1 Ако стоките пристигнат дефектни, повредени, непълни или неправилни, моля, свържете се с нас
        възможно най-скоро на info@misaelectro.ro.
      </p>
      <p>7.2 Моля, включете:</p>
      <ul>
        <li>номера на Вашата поръчка;</li>
        <li>ясно описание на проблема;</li>
        <li>снимки или видеоклипове на стоките;</li>
        <li>снимки на опаковката и транспортния етикет;</li>
        <li>всякакви съответни етикети на продукта, серийни номера или маркировки на производителя.</li>
      </ul>
      <p>
        7.3 За видими повреди при доставка, моля, уведомете ни в рамките на 48 часа от доставката, където е
        възможно. Това ни помага бързо да разследваме претенции към куриера, но не премахва задължителните
        законови права, които може да имате.
      </p>
      <p>
        7.4 Трябва да запазите продукта, опаковката, етикетите, ръководствата, аксесоарите и материалите за
        доставка, докато не прегледаме проблема.
      </p>
      <p>
        7.5 Можем да изискаме стоките да бъдат върнати или проверени, преди да одобрим възстановяване, замяна,
        ремонт или друго обезщетение.
      </p>
      <p>
        7.6 Ако се потвърди, че стоките са дефектни, повредени преди доставка, неправилни или по друг начин не
        съответстват на договора, можем да предоставим ремонт, замяна, възстановяване, частично възстановяване
        или друго обезщетение в съответствие с приложимото законодателство.
      </p>
      <p>
        7.7 Ако се потвърди, че стоките са дефектни, повредени или неправилни, ще покрием разумните разходи за
        връщане или ще предоставим инструкции за връщане.
      </p>
      <p>
        7.8 Ние не носим отговорност за дефекти или повреди, причинени от неправилен монтаж, неподходящ избор
        на продукт, неправилна употреба, претоварване, неоторизирана модификация, външна повреда, неправилно
        съхранение, неподходяща среда, работа на трети страни, пренапрежения, износване, неспазване на
        инструкциите на производителя или употреба извън предназначението на продукта.
      </p>

      <h2>8. Електрически стоки и отговорност за монтажа</h2>
      <p>
        8.1 Електрическите стоки могат да бъдат опасни, ако са неправилно избрани, монтирани, окабелени,
        свързани, модифицирани, претоварени или използвани.
      </p>
      <p>
        8.2 Преди покупка Вие носите отговорност да проверите, че продуктът е подходящ за Вашата предвидена
        употреба, включително напрежение, ток, натоварване, мощност, степен на защита IP, размери, тип кабел,
        съвместимост, среда на монтаж и местни регулаторни изисквания.
      </p>
      <p>
        8.3 Продукти, изискващи електрически монтаж, окабеляване, свързване, тестване, въвеждане в
        експлоатация или интегриране в електрическа система, трябва да се монтират само от квалифициран
        електротехник или компетентен специалист, където това се изисква или е целесъобразно.
      </p>
      <p>
        8.4 Стоки, които са били монтирани, окабелени, свързани, модифицирани, въведени в експлоатация или
        използвани, може да не отговарят на условията за връщане, освен ако не са дефектни, неправилни или по
        друг начин обхванати от задължителни законови права.
      </p>
      <p>
        8.5 Можем да откажем или намалим възстановяване, когато продуктът е върнат в състояние, което
        възпрепятства безопасната препродажба или правилната проверка.
      </p>

      <h2>9. Разходи за връщане</h2>
      <p>
        9.1 За връщания поради промяна на решението клиентът носи отговорност за разходите за връщане, освен
        ако не се договорим писмено за друго.
      </p>
      <p>
        9.2 За дефектни, повредени или неправилни стоки MisaElectro ще покрие разумните разходи за връщане,
        когато проблемът е потвърден или когато предоставим инструкции за връщане.
      </p>
      <p>9.3 Не трябва да връщате стоки, без първо да се свържете с нас.</p>
      <p>
        9.4 Може да не сме в състояние да възстановим разходите за връщане, ако използвате премиум, експресен,
        извънгабаритен, международен или неодобрен метод за връщане без нашето предварително съгласие.
      </p>
      <p>
        9.5 Препоръчваме да използвате проследяема и застрахована услуга за връщане. Вие носите отговорност за
        върнатите стоки, докато не бъдат получени от нас или от определеното от нас място за връщане.
      </p>

      <h2>10. Процедура за връщане</h2>
      <p>10.1 За да започнете връщане, свържете се с нас на info@misaelectro.ro.</p>
      <p>10.2 Моля, включете:</p>
      <ul>
        <li>номер на поръчката;</li>
        <li>име на продукта или SKU;</li>
        <li>причина за връщането;</li>
        <li>снимки или видеоклипове, когато артикулът е повреден, дефектен, неправилен или непълен;</li>
        <li>потвърждение дали продуктът е бил отварян, монтиран, свързван, тестван или използван.</li>
      </ul>
      <p>
        10.3 Ако връщането бъде прието или изисква проверка, ще предоставим инструкции за връщане.
      </p>
      <p>
        10.4 Адресът за връщане или методът за връщане може да варира в зависимост от продукта, доставчика,
        куриера, дестинацията или естеството на проблема.
      </p>
      <p>
        10.5 Стоки, върнати без предварителен контакт, без необходимата информация или на неправилен адрес,
        може да бъдат забавени, отхвърлени или върнати обратно на Вас.
      </p>
      <p>10.6 Трябва да опаковате върнатите стоки надеждно, за да предотвратите повреда по време на транспортиране.</p>
      <p>
        10.7 Ако върнатите стоки бъдат повредени при транспортиране поради лоша опаковка, можем да намалим или
        откажем възстановяването, където това е разрешено от закона.
      </p>

      <h2>11. Срок на възстановяване</h2>
      <p>
        11.1 След като получим и проверим върнатите стоки, ще Ви уведомим дали възстановяването е одобрено.
      </p>
      <p>
        11.2 Когато възстановяването е одобрено, то ще бъде обработено към първоначалния метод на плащане,
        където е възможно.
      </p>
      <p>
        11.3 За връщания поради потребителско анулиране ще издадем всяко дължимо възстановяване в срока,
        изискван от приложимото законодателство.
      </p>
      <p>
        11.4 Можем да задържим възстановяването, докато не получим стоките обратно или докато не предоставите
        доказателство, че сте върнали стоките, което от двете настъпи първо, където това е разрешено от закона.
      </p>
      <p>
        11.5 След като обработим възстановяване, Вашата банка, издател на карта или доставчик на платежни
        услуги може да отнеме допълнително време, за да Ви осигури достъп до средствата.
      </p>
      <p>
        11.6 Възстановяванията обикновено не могат да бъдат издавани към различна карта, сметка, лице или метод
        на плащане.
      </p>

      <h2>12. Такси за доставка и възстановявания</h2>
      <p>
        12.1 Когато Потребител валидно анулира допустима поръчка съгласно законовите права за анулиране, ще
        възстановим цената на продукта и стандартната базова такса за доставка, платена за първоначалната
        доставка, където това се изисква от закона.
      </p>
      <p>
        12.2 Не сме длъжни да възстановяваме допълнителни разходи за доставка, ако сте избрали по-скъп метод за
        доставка от най-евтината предлагана стандартна опция за доставка.
      </p>
      <p>
        12.3 Таксите за доставка може да не бъдат възстановени за връщания от Бизнес клиенти, дискреционни
        връщания, неуспешна доставка, отказана доставка, неправилен адрес, невзети пратки или недефектни
        връщания, освен ако не се договорим за друго или приложимото законодателство не го изисква.
      </p>
      <p>
        12.4 Митнически мита, ДДС при внос, брокерски такси, такси за обработка на куриера, местни данъци,
        такси за митническо оформяне и други местни такси не се начисляват от MisaElectro и не подлежат на
        възстановяване от MisaElectro.
      </p>

      <h2>13. Международни връщания</h2>
      <p>
        13.1 Международните клиенти носят отговорност да гарантират, че върнатите стоки са правилно опаковани,
        етикетирани, декларирани и изпратени в съответствие с приложимите изисквания на куриера и митниците.
      </p>
      <p>13.2 Вие носите отговорност за всякакви митнически декларации, необходими за връщане на стоки.</p>
      <p>
        13.3 Ако връщане бъде забавено, отхвърлено, задържано, изоставено или върнато поради неправилни
        митнически документи, неплатени такси, забранени стоки или неспазване на инструкциите за връщане, може
        да не сме в състояние да обработим възстановяване.
      </p>
      <p>
        13.4 За международни връщания поради промяна на решението Вие носите отговорност за разходите за
        връщане, митническите такси, данъците, брокерските такси и свързаните разходи, освен ако стоките са
        дефектни, повредени, неправилни или се договорим писмено за друго.
      </p>
      <p>
        13.5 Ако MisaElectro понесе митнически или куриерски такси поради международно връщане, те може да
        бъдат приспаднати от всяко възстановяване, където това е разрешено от закона.
      </p>

      <h2>14. Непълен или неправилен адрес</h2>
      <p>
        14.1 Вие носите отговорност за предоставянето на пълна и точна информация за фактуриране и доставка при
        плащане.
      </p>
      <p>
        14.2 MisaElectro не носи отговорност за забавяния, неуспешни доставки, изгубени пратки, такси за
        връщане или допълнителни разходи, причинени от неправилна, непълна, остаряла или неправилно
        форматирана адресна информация, предоставена от Вас.
      </p>
      <p>
        14.3 Ако поръчка ни бъде върната, защото адресът е бил неправилен, непълен, недостъпен, отказан или
        невзет, можем да приспаднем първоначалните разходи за доставка, разходите за връщане, куриерските
        такси, митническите такси, таксите за съхранение и други разумни разходи от всяко възстановяване,
        освен ако това не е забранено от закона.
      </p>
      <p>
        14.4 Ако поискате повторно изпращане след неуспешна доставка, причинена от грешка на клиента, може да
        се приложат допълнителни такси за доставка.
      </p>

      <h2>15. Отказани или невзети пратки</h2>
      <p>
        15.1 Ако откажете доставка, не приемете доставка, не платите митнически или вносни такси или не вземете
        пратката от куриера в изисквания срок, пратката може да бъде върната на нас, забавена, изоставена или
        унищожена от куриера.
      </p>
      <p>
        15.2 Ако пратката ни бъде върната, можем да приспаднем първоначалния разход за доставка, разхода за
        връщане, куриерските такси, митническите такси, таксите за съхранение, таксите за обработка и всякакви
        други разумни разходи от Вашето възстановяване, освен ако това не е забранено от закона.
      </p>
      <p>
        15.3 Отказът на доставка не анулира автоматично митническите такси, куриерските такси или местните
        такси, които може вече да са били начислени.
      </p>
      <p>
        15.4 Ако сте Потребител и откажете доставка като част от упражняването на Вашите законови права за
        анулиране, Вашето възстановяване ще бъде обработено в съответствие с настоящата Политика и приложимото
        законодателство.
      </p>

      <h2>16. Връщания от Бизнес клиенти</h2>
      <p>
        16.1 Бизнес клиентите нямат общо право да анулират или връщат недефектни стоки поради промяна на
        решението, промени в проекта на клиента, неправилно поръчване, излишни наличности, неподходяща
        спецификация или защото вече не се нуждаят от стоките.
      </p>
      <p>
        16.2 Всяко приемане на връщане на недефектни стоки от Бизнес клиент е по преценка на MisaElectro.
      </p>
      <p>16.3 Ако се съгласим на връщане от Бизнес клиент, можем да приложим условия, включително:</p>
      <ul>
        <li>предварително писмено одобрение;</li>
        <li>връщане в определен срок;</li>
        <li>неизползвани, немонтирани, комплектни и годни за препродажба стоки;</li>
        <li>включени оригинална опаковка и аксесоари;</li>
        <li>заплащане от клиента на разходите за връщане;</li>
        <li>приспадане за намалена стойност;</li>
        <li>такса за повторно заскладяване или обработка, където е разумно и договорено или разрешено.</li>
      </ul>
      <p>
        16.4 Бизнес клиентите трябва да проверят стоките незабавно при доставка и да ни уведомят за видими
        повреди, липси, неправилни стоки или проблеми с доставката възможно най-скоро в рамките на разумното.
      </p>
      <p>
        16.5 Възстановяванията за Бизнес клиенти, когато са одобрени, могат да бъдат издадени като
        възстановяване, замяна, кредит по сметка или друго обезщетение, договорено от MisaElectro.
      </p>

      <h2>17. Замени и заместващи продукти</h2>
      <p>
        17.1 Можем да предложим заместващи продукти или замени, когато стоките са дефектни, повредени,
        неправилни или когато се съгласим на замяна по наша преценка.
      </p>
      <p>17.2 Замените зависят от наличността на стоки.</p>
      <p>
        17.3 Ако заместващ продукт не е наличен, можем да предложим възстановяване, частично възстановяване,
        еквивалентна алтернатива или друго подходящо обезщетение.
      </p>
      <p>
        17.4 За замени поради промяна на решението може да носите отговорност за разходите за връщане и
        всякакви допълнителни разходи за доставка.
      </p>

      <h2>18. Допълнителна гаранция и гаранционни претенции</h2>
      <p>
        18.1 Настоящата Политика се прилага за връщания, възстановявания и анулирания. Гаранционните претенции
        може също да подлежат на нашите гаранционни условия, специфични за продукта условия, гаранционни
        условия на производителя и всяка платена Допълнителна гаранция, закупена при плащане.
      </p>
      <p>18.2 Допълнителната гаранция не заменя и не намалява Вашите законови права.</p>
      <p>
        18.3 Гаранционните претенции може да изискват доказателство за покупка, снимки, видеоклипове,
        диагностична информация, проверка или връщане на продукта.
      </p>
      <p>
        18.4 Гаранционното покритие обикновено не включва неправилен монтаж, неправилна употреба, претоварване,
        неоторизирана модификация, пренапрежения, външна повреда, неподходяща среда, износване, консумативи,
        разходи за труд, разходи за електротехник, разходи за демонтаж, разходи за повторен монтаж или
        забавяния на проекта, освен ако изрично не е посочено друго.
      </p>
      <p>
        18.5 Когато гаранционна претенция бъде одобрена, обезщетението може да включва ремонт, замяна,
        еквивалентна замяна, частично възстановяване, възстановяване или друго разумно обезщетение в
        зависимост от обстоятелствата и приложимото законодателство.
      </p>

      <h2>19. Артикули, върнати без разрешение</h2>
      <p>19.1 Трябва да се свържете с нас, преди да върнете каквито и да е стоки.</p>
      <p>
        19.2 Стоки, върнати без предварителен контакт или без спазване на нашите инструкции за връщане, може да
        бъдат забавени, отхвърлени или върнати обратно на Вас.
      </p>
      <p>
        19.3 Ние не носим отговорност за стоки, изпратени на грешен адрес или върнати без достатъчно
        проследяване, идентификация или информация за поръчката.
      </p>
      <p>
        19.4 Ако не можем да идентифицираме поръчката или клиента, свързан с върнат артикул, може да не сме в
        състояние да обработим връщането.
      </p>

      <h2>20. Възражения по плащания и спорове за плащания</h2>
      <p>
        20.1 Ако имате проблем с поръчка, доставка, връщане, възстановяване или гаранционна претенция, моля,
        свържете се първо с нас, за да можем да разследваме и да се опитаме да разрешим въпроса.
      </p>
      <p>
        20.2 Ако откриете възражение по плащане или спор за плащане, може да се наложи да споделим информация за
        поръчката, доставката, комуникацията, връщането, проследяването, възстановяването и предотвратяването
        на измами с нашия доставчик на платежни услуги, банка, картова мрежа или доставчик на услуги за
        разрешаване на спорове.
      </p>
      <p>
        20.3 Запазваме си правото да оспорваме възражения по плащания или спорове за плащания, когато считаме,
        че поръчка е била изпълнена правилно или че претенция е неточна, измамна, злоупотребяваща или
        неподкрепена.
      </p>

      <h2>21. Вашите законови права</h2>
      <p>21.1 Нищо в настоящата Политика не ограничава Вашите задължителни законови права.</p>
      <p>
        21.2 Потребителите може да имат законови права, когато стоките са дефектни, не отговарят на описанието,
        не са годни за целта, са опасни или не съответстват на договора.
      </p>
      <p>21.3 Потребителите от ЕС може да имат права на законова гаранция съгласно приложимото потребителско законодателство.</p>
      <p>21.4 Потребителите от Обединеното кралство може да имат права съгласно приложимото потребителско законодателство на Обединеното кралство.</p>
      <p>
        21.5 Тези права са отделни от всяка гаранция на производителя, търговска гаранция, допълнителна
        гаранция или доброволна политика за връщане.
      </p>

      <h2>22. Промени в настоящата Политика</h2>
      <p>
        22.1 Можем да актуализираме настоящата Политика за връщане, възстановяване и анулиране от време на
        време, за да отразим промени в нашите продукти, операции, куриерски процеси, законови изисквания,
        изисквания на доставчика на платежни услуги, гаранционни процеси или процедури за поддръжка на клиенти.
      </p>
      <p>
        22.2 Версията на настоящата Политика, действаща към момента на подаване на Вашата поръчка, ще се
        прилага за тази поръчка, освен ако промяна не се изисква от закона или не се отнася до корекция, която
        трябва да бъде приложена.
      </p>
      <p>
        22.3 Когато актуализираме настоящата Политика, ще преразгледаме датата &bdquo;Последна актуализация&rdquo;
        в горната част на страницата.
      </p>

      <h2>23. Информация за контакт</h2>
      <p>
        Ако имате въпроси относно анулирания, връщания, възстановявания, повредени стоки, дефектни стоки,
        неправилни артикули или гаранционни претенции, моля, свържете се с нас:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  en: (
    <PolicyLayout title="Returns, Refunds and Cancellation Policy" lastUpdated="29 May 2026">
      <p>
        This Returns, Refunds and Cancellation Policy explains how order cancellations, consumer returns,
        refunds, damaged goods, faulty goods, incorrect goods, and restricted returns are handled for
        purchases made through www.misaelectro.ro.
      </p>
      <p>The Website is operated by:</p>
      <ContactBlock />
      <p>
        In this Policy, &ldquo;MisaElectro&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;
        means MISARELIANA S.R.L.. &ldquo;Customer&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo; means any
        person or business placing an order through the Website.
      </p>
      <p>
        This Policy should be read together with our Terms and Conditions, Shipping Policy, Privacy Policy,
        Cookie Policy, and any product-specific warranty or additional warranty terms.
      </p>
      <p>
        Nothing in this Policy limits any mandatory legal rights you may have under applicable consumer
        protection law.
      </p>

      <h2>1. Scope of This Policy</h2>
      <p>1.1 This Policy applies to physical goods purchased through MisaElectro.</p>
      <p>
        1.2 MisaElectro supplies electrical products, electrical materials, wiring accessories,
        lighting-related products, installation components, distribution and circuit protection products,
        sockets, switches, cables, mounting accessories, and related goods.
      </p>
      <p>
        1.3 Because electrical products may be safety-critical, return eligibility depends on the product
        type, condition, packaging, whether the product has been installed or used, and whether the order
        was placed by a Consumer or Business Customer.
      </p>
      <p>
        1.4 This Policy applies to both Consumers and Business Customers, but some rights apply only to
        Consumers.
      </p>

      <h2>2. Consumer and Business Customer Definitions</h2>
      <p>
        2.1 A &ldquo;Consumer&rdquo; means an individual purchasing goods wholly or mainly for personal use
        and not for trade, business, craft, or professional purposes.
      </p>
      <p>
        2.2 A &ldquo;Business Customer&rdquo; means any company, sole trader, contractor, electrician,
        installer, reseller, organisation, public body, or professional buyer purchasing goods for trade,
        commercial, installation, resale, professional, or business purposes.
      </p>
      <p>2.3 Consumer cancellation rights apply only to Consumers.</p>
      <p>
        2.4 Business Customers do not have a general right to return non-faulty goods because of change of
        mind, incorrect ordering, surplus stock, project changes, unsuitable specification, or customer-side
        mistake unless we agree otherwise in writing.
      </p>

      <h2>3. Cancelling an Order Before Dispatch</h2>
      <p>3.1 You may request cancellation of an order before it has been dispatched.</p>
      <p>
        3.2 To request cancellation, contact us as soon as possible at info@misaelectro.ro and include your
        order number.
      </p>
      <p>
        3.3 We will make reasonable efforts to cancel the order before dispatch. However, cancellation is not
        guaranteed if the order has already been processed, packed, handed to the carrier, specially ordered,
        prepared, cut, customised, or dispatched.
      </p>
      <p>
        3.4 If cancellation is confirmed before dispatch, we will refund the amount paid for the cancelled
        goods and any applicable delivery charge paid for that cancelled order.
      </p>
      <p>
        3.5 If the order has already been dispatched, the order can no longer be cancelled before delivery.
        Consumer returns may still be available in accordance with this Policy.
      </p>

      <h2>4. Consumer Right to Cancel After Delivery</h2>
      <p>
        4.1 If you are a Consumer, you may have the legal right to cancel an eligible online purchase within
        14 days of receiving the goods, without giving a reason.
      </p>
      <p>
        4.2 The cancellation period expires 14 days after the day on which you, or a person identified by
        you, receive the goods.
      </p>
      <p>
        4.3 If your order is delivered in multiple parcels, the cancellation period will usually expire 14
        days after the day you receive the final parcel.
      </p>
      <p>
        4.4 To exercise your cancellation right, you must clearly notify us by email at info@misaelectro.ro
        before the cancellation period expires.
      </p>
      <p>4.5 Your email should include:</p>
      <ul>
        <li>your full name;</li>
        <li>order number;</li>
        <li>delivery address;</li>
        <li>product name or SKU;</li>
        <li>confirmation that you wish to cancel or return the relevant item.</li>
      </ul>
      <p>
        4.6 After you notify us that you wish to cancel, you must return the goods without undue delay and
        no later than 14 days from the date you notified us.
      </p>
      <p>
        4.7 You are responsible for the cost of returning goods unless the goods are faulty, damaged,
        incorrect, or we have agreed otherwise in writing.
      </p>

      <h2>5. Condition of Returned Goods</h2>
      <p>5.1 Returned goods must be handled with reasonable care.</p>
      <p>5.2 Unless the goods are faulty, damaged, or incorrect, returned goods must be:</p>
      <ul>
        <li>unused;</li>
        <li>uninstalled;</li>
        <li>unwired and unconnected;</li>
        <li>not tested, commissioned, or integrated into any electrical system;</li>
        <li>complete with all parts, accessories, manuals, labels, seals, and protective materials;</li>
        <li>in original packaging where possible;</li>
        <li>in resaleable condition.</li>
      </ul>
      <p>
        5.3 You may inspect the goods as you would reasonably be allowed to do in a shop, but you must not
        install, wire, connect, use, modify, damage, or handle the goods beyond what is necessary to inspect
        their nature, characteristics, and functioning.
      </p>
      <p>
        5.4 We may reduce your refund to reflect any reduction in value caused by handling beyond what is
        necessary, including installation, use, missing packaging, missing accessories, damage,
        contamination, or reduced resale value.
      </p>

      <h2>6. Non-Returnable and Restricted Return Items</h2>
      <p>
        6.1 Certain goods cannot be returned for change of mind unless they are faulty, damaged, incorrect,
        or return rights are required by law.
      </p>
      <p>6.2 Non-returnable or restricted return items may include:</p>
      <ul>
        <li>goods made to order;</li>
        <li>goods specially ordered for you;</li>
        <li>goods cut to size, including cables or similar materials;</li>
        <li>customised, modified, assembled, or altered goods;</li>
        <li>installed, wired, connected, tested, commissioned, or used electrical goods;</li>
        <li>goods damaged after delivery;</li>
        <li>goods missing parts, accessories, manuals, packaging, labels, seals, or protective materials;</li>
        <li>goods affected by incorrect storage, moisture, heat, impact, contamination, dust, chemicals, corrosion, misuse, or unauthorised handling;</li>
        <li>goods that are no longer in resaleable condition;</li>
        <li>clearance, final sale, discontinued, or special order items where return restrictions are clearly stated and lawful.</li>
      </ul>
      <p>
        6.3 This section does not limit your legal rights where goods are faulty, not as described, unsafe,
        or otherwise non-compliant with applicable law.
      </p>

      <h2>7. Faulty, Damaged, or Incorrect Goods</h2>
      <p>
        7.1 If goods arrive faulty, damaged, incomplete, or incorrect, please contact us as soon as possible
        at info@misaelectro.ro.
      </p>
      <p>7.2 Please include:</p>
      <ul>
        <li>your order number;</li>
        <li>a clear description of the issue;</li>
        <li>photos or videos of the goods;</li>
        <li>photos of the packaging and shipping label;</li>
        <li>any relevant product labels, serial numbers, or manufacturer markings.</li>
      </ul>
      <p>
        7.3 For visible delivery damage, please notify us within 48 hours of delivery where possible. This
        helps us investigate courier claims quickly, but it does not remove any mandatory legal rights you
        may have.
      </p>
      <p>
        7.4 You must keep the product, packaging, labels, manuals, accessories, and delivery materials until
        we have reviewed the issue.
      </p>
      <p>
        7.5 We may require the goods to be returned or inspected before approving a refund, replacement,
        repair, or other remedy.
      </p>
      <p>
        7.6 If the goods are confirmed to be faulty, damaged before delivery, incorrect, or otherwise not in
        conformity with the contract, we may provide a repair, replacement, refund, partial refund, or
        another remedy in accordance with applicable law.
      </p>
      <p>
        7.7 If the goods are confirmed to be faulty, damaged, or incorrect, we will cover reasonable return
        shipping costs or provide return instructions.
      </p>
      <p>
        7.8 We are not responsible for faults or damage caused by incorrect installation, unsuitable product
        selection, misuse, overloading, unauthorised modification, external damage, incorrect storage,
        unsuitable environment, third-party work, power surges, wear and tear, failure to follow
        manufacturer instructions, or use outside the product&rsquo;s intended purpose.
      </p>

      <h2>8. Electrical Goods and Installation Responsibility</h2>
      <p>
        8.1 Electrical goods can be unsafe if incorrectly selected, installed, wired, connected, modified,
        overloaded, or used.
      </p>
      <p>
        8.2 Before purchasing, you are responsible for checking that the product is suitable for your
        intended use, including voltage, current, load, wattage, IP rating, dimensions, cable type,
        compatibility, installation environment, and local regulatory requirements.
      </p>
      <p>
        8.3 Products requiring electrical installation, wiring, connection, testing, commissioning, or
        integration into an electrical system should be installed only by a qualified electrician or
        competent professional where required or appropriate.
      </p>
      <p>
        8.4 Goods that have been installed, wired, connected, modified, commissioned, or used may not be
        eligible for return unless they are faulty, incorrect, or otherwise covered by mandatory legal
        rights.
      </p>
      <p>
        8.5 We may refuse or reduce a refund where the product has been returned in a condition that
        prevents safe resale or proper inspection.
      </p>

      <h2>9. Return Shipping Costs</h2>
      <p>
        9.1 For change-of-mind returns, the customer is responsible for return shipping costs unless we
        agree otherwise in writing.
      </p>
      <p>
        9.2 For faulty, damaged, or incorrect goods, MisaElectro will cover reasonable return shipping costs
        where the issue is confirmed or where we provide return instructions.
      </p>
      <p>9.3 You should not return goods without contacting us first.</p>
      <p>
        9.4 We may be unable to refund return shipping costs if you use a premium, express, oversized,
        international, or non-approved return method without our prior agreement.
      </p>
      <p>
        9.5 We recommend using a tracked and insured return service. You are responsible for the returned
        goods until they are received by us or our nominated return location.
      </p>

      <h2>10. Return Procedure</h2>
      <p>10.1 To start a return, contact us at info@misaelectro.ro.</p>
      <p>10.2 Please include:</p>
      <ul>
        <li>order number;</li>
        <li>product name or SKU;</li>
        <li>reason for return;</li>
        <li>photos or videos where the item is damaged, faulty, incorrect, or incomplete;</li>
        <li>confirmation of whether the product has been opened, installed, connected, tested, or used.</li>
      </ul>
      <p>
        10.3 If the return is accepted or requires inspection, we will provide return instructions.
      </p>
      <p>
        10.4 The return address or return method may vary depending on the product, supplier, courier,
        destination, or nature of the issue.
      </p>
      <p>
        10.5 Goods returned without prior contact, without required information, or to an incorrect address
        may be delayed, rejected, or returned to you.
      </p>
      <p>10.6 You must package returned goods securely to prevent damage during transit.</p>
      <p>
        10.7 If returned goods are damaged in transit because of poor packaging, we may reduce or refuse the
        refund where permitted by law.
      </p>

      <h2>11. Refund Timing</h2>
      <p>
        11.1 Once we receive and inspect the returned goods, we will notify you whether the refund has been
        approved.
      </p>
      <p>
        11.2 Where a refund is approved, it will be processed to the original payment method where possible.
      </p>
      <p>
        11.3 For Consumer cancellation returns, we will issue any refund due within the timeframe required by
        applicable law.
      </p>
      <p>
        11.4 We may withhold the refund until we have received the goods back or until you provide evidence
        that you have returned the goods, whichever occurs first, where permitted by law.
      </p>
      <p>
        11.5 After we process a refund, your bank, card issuer, or payment provider may take additional time
        to make the funds available to you.
      </p>
      <p>
        11.6 Refunds cannot normally be issued to a different card, account, person, or payment method.
      </p>

      <h2>12. Delivery Charges and Refunds</h2>
      <p>
        12.1 Where a Consumer validly cancels an eligible order under statutory cancellation rights, we will
        refund the product price and the standard basic delivery charge paid for the original delivery where
        required by law.
      </p>
      <p>
        12.2 We are not required to refund additional delivery costs if you selected a more expensive
        delivery method than the least expensive standard delivery option offered.
      </p>
      <p>
        12.3 Delivery charges may not be refunded for Business Customer returns, discretionary returns,
        failed delivery, refused delivery, incorrect address, uncollected parcels, or non-faulty returns
        unless we agree otherwise or applicable law requires it.
      </p>
      <p>
        12.4 Customs duties, import VAT, brokerage fees, courier handling fees, local taxes, customs
        clearance fees, and other local charges are not charged by MisaElectro and are not refundable by
        MisaElectro.
      </p>

      <h2>13. International Returns</h2>
      <p>
        13.1 International customers are responsible for ensuring that returned goods are properly packaged,
        labelled, declared, and shipped in accordance with applicable courier and customs requirements.
      </p>
      <p>13.2 You are responsible for any customs declarations required for returning goods.</p>
      <p>
        13.3 If a return is delayed, rejected, seized, abandoned, or returned because of incorrect customs
        documents, unpaid charges, prohibited goods, or failure to follow return instructions, we may be
        unable to process a refund.
      </p>
      <p>
        13.4 For international change-of-mind returns, you are responsible for return shipping costs, customs
        charges, taxes, brokerage fees, and related costs unless the goods are faulty, damaged, incorrect, or
        we agree otherwise in writing.
      </p>
      <p>
        13.5 If customs or courier charges are incurred by MisaElectro because of an international return,
        these may be deducted from any refund where permitted by law.
      </p>

      <h2>14. Incomplete or Incorrect Address</h2>
      <p>
        14.1 You are responsible for providing complete and accurate billing and delivery information at
        checkout.
      </p>
      <p>
        14.2 MisaElectro is not responsible for delays, failed deliveries, lost parcels, return charges, or
        additional costs caused by incorrect, incomplete, outdated, or improperly formatted address
        information provided by you.
      </p>
      <p>
        14.3 If an order is returned to us because the address was incorrect, incomplete, inaccessible,
        refused, or not collected, we may deduct original shipping costs, return shipping costs, courier
        charges, customs charges, storage fees, and other reasonable costs from any refund, unless
        prohibited by law.
      </p>
      <p>
        14.4 If you request reshipment after a failed delivery caused by customer error, additional shipping
        charges may apply.
      </p>

      <h2>15. Refused or Uncollected Parcels</h2>
      <p>
        15.1 If you refuse delivery, fail to accept delivery, fail to pay customs or import charges, or fail
        to collect the parcel from the courier within the required timeframe, the parcel may be returned to
        us, delayed, abandoned, or disposed of by the courier.
      </p>
      <p>
        15.2 If the parcel is returned to us, we may deduct the original shipping cost, return shipping
        cost, courier charges, customs charges, storage fees, handling charges, and any other reasonable
        costs from your refund, unless prohibited by law.
      </p>
      <p>
        15.3 Refusing delivery does not automatically cancel customs charges, courier fees, or local charges
        that may have already been assessed.
      </p>
      <p>
        15.4 If you are a Consumer and refuse delivery as part of exercising your legal cancellation rights,
        your refund will be handled in accordance with this Policy and applicable law.
      </p>

      <h2>16. Business Customer Returns</h2>
      <p>
        16.1 Business Customers do not have a general right to cancel or return non-faulty goods because of
        change of mind, customer project changes, incorrect ordering, surplus stock, unsuitable
        specification, or no longer needing the goods.
      </p>
      <p>
        16.2 Any non-faulty return accepted from a Business Customer is at MisaElectro&rsquo;s discretion.
      </p>
      <p>16.3 If we agree to a Business Customer return, we may apply conditions, including:</p>
      <ul>
        <li>prior written approval;</li>
        <li>return within a specified period;</li>
        <li>goods unused, uninstalled, complete, and resaleable;</li>
        <li>original packaging and accessories included;</li>
        <li>customer payment of return shipping;</li>
        <li>deduction for reduced value;</li>
        <li>restocking or handling fee where reasonable and agreed or permitted.</li>
      </ul>
      <p>
        16.4 Business Customers must inspect goods promptly upon delivery and notify us of visible damage,
        shortages, incorrect goods, or delivery issues as soon as reasonably possible.
      </p>
      <p>
        16.5 Business Customer refunds, where approved, may be issued as a refund, replacement, account
        credit, or other remedy agreed by MisaElectro.
      </p>

      <h2>17. Exchanges and Replacements</h2>
      <p>
        17.1 We may offer replacements or exchanges where goods are faulty, damaged, incorrect, or where we
        agree to an exchange at our discretion.
      </p>
      <p>17.2 Exchanges are subject to stock availability.</p>
      <p>
        17.3 If a replacement product is unavailable, we may offer a refund, partial refund, equivalent
        alternative, or another appropriate remedy.
      </p>
      <p>
        17.4 For change-of-mind exchanges, you may be responsible for return shipping and any additional
        delivery costs.
      </p>

      <h2>18. Additional Warranty and Warranty Claims</h2>
      <p>
        18.1 This Policy applies to returns, refunds, and cancellations. Warranty claims may also be subject
        to our warranty terms, product-specific terms, manufacturer warranty conditions, and any paid
        Additional Warranty purchased at checkout.
      </p>
      <p>18.2 Additional Warranty does not replace or reduce your statutory rights.</p>
      <p>
        18.3 Warranty claims may require proof of purchase, photos, videos, diagnostic information,
        inspection, or return of the product.
      </p>
      <p>
        18.4 Warranty coverage does not normally include incorrect installation, misuse, overloading,
        unauthorised modification, power surges, external damage, unsuitable environment, wear and tear,
        consumable parts, labour costs, electrician costs, removal costs, reinstallation costs, or project
        delays unless expressly stated otherwise.
      </p>
      <p>
        18.5 Where a warranty claim is approved, the remedy may include repair, replacement, equivalent
        replacement, partial refund, refund, or another reasonable remedy depending on the circumstances and
        applicable law.
      </p>

      <h2>19. Items Returned Without Authorisation</h2>
      <p>19.1 You should contact us before returning any goods.</p>
      <p>
        19.2 Goods returned without prior contact or without following our return instructions may be
        delayed, rejected, or returned to you.
      </p>
      <p>
        19.3 We are not responsible for goods sent to the wrong address or returned without sufficient
        tracking, identification, or order information.
      </p>
      <p>
        19.4 If we cannot identify the order or customer connected to a returned item, we may be unable to
        process the return.
      </p>

      <h2>20. Chargebacks and Payment Disputes</h2>
      <p>
        20.1 If you have a problem with an order, delivery, return, refund, or warranty claim, please
        contact us first so we can investigate and try to resolve the matter.
      </p>
      <p>
        20.2 If you open a chargeback or payment dispute, we may be required to share order, delivery,
        communication, return, tracking, refund, and fraud-prevention information with our payment provider,
        bank, card network, or dispute resolution provider.
      </p>
      <p>
        20.3 We reserve the right to contest chargebacks or payment disputes where we believe an order was
        fulfilled correctly or a claim is inaccurate, fraudulent, abusive, or unsupported.
      </p>

      <h2>21. Your Legal Rights</h2>
      <p>21.1 Nothing in this Policy limits your mandatory legal rights.</p>
      <p>
        21.2 Consumers may have statutory rights where goods are faulty, not as described, not fit for
        purpose, unsafe, or not in conformity with the contract.
      </p>
      <p>21.3 EU Consumers may have legal guarantee rights under applicable consumer law.</p>
      <p>21.4 UK Consumers may have rights under applicable UK consumer law.</p>
      <p>
        21.5 These rights are separate from any manufacturer warranty, commercial warranty, additional
        warranty, or voluntary return policy.
      </p>

      <h2>22. Changes to This Policy</h2>
      <p>
        22.1 We may update this Returns, Refunds and Cancellation Policy from time to time to reflect
        changes in our products, operations, courier processes, legal requirements, payment provider
        requirements, warranty processes, or customer support procedures.
      </p>
      <p>
        22.2 The version of this Policy in force at the time you place your order will apply to that order,
        unless a change is required by law or relates to a correction that must be applied.
      </p>
      <p>
        22.3 When we update this Policy, we will revise the &ldquo;Last updated&rdquo; date at the top of
        the page.
      </p>

      <h2>23. Contact Information</h2>
      <p>
        If you have any questions about cancellations, returns, refunds, damaged goods, faulty goods,
        incorrect items, or warranty claims, please contact us:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
};

export default async function ReturnsPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return content[(locale as Locale)] ?? content.en;
}
