import { PolicyLayout, ContactBlock } from "@/components/layout/PolicyLayout/PolicyLayout";
import type { ReactNode } from "react";

type Locale = "ro" | "hu" | "bg" | "en";

const metaTitles: Record<Locale, string> = {
  ro: "Termeni și condiții — MisaElectro",
  hu: "Általános szerződési feltételek — MisaElectro",
  bg: "Общи условия — MisaElectro",
  en: "Terms and Conditions — MisaElectro",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return { title: metaTitles[(locale as Locale)] ?? metaTitles.en };
}

const content: Record<Locale, ReactNode> = {
  ro: (
    <PolicyLayout title="Termeni și condiții" lastUpdated="29 mai 2026">
      <p>
        Acești Termeni și condiții (&bdquo;Termeni&rdquo;) reglementează accesul dumneavoastră la site-ul
        www.misaelectro.ro și utilizarea acestuia, precum și orice pagini, servicii, comenzi, achiziții,
        comunicări și tranzacții conexe operate sub marca MisaElectro.
      </p>
      <p>Site-ul este operat de:</p>
      <ContactBlock />
      <p>
        În acești Termeni, &bdquo;MisaElectro&rdquo;, &bdquo;noi&rdquo; sau &bdquo;al nostru&rdquo; înseamnă MISARELIANA S.R.L..
        &bdquo;Client&rdquo;, &bdquo;dumneavoastră&rdquo; sau &bdquo;al dumneavoastră&rdquo; înseamnă orice persoană sau întreprindere care accesează
        site-ul, plasează o comandă, achiziționează bunuri sau utilizează în alt mod serviciile noastre.
      </p>
      <p>
        Vă rugăm să citiți cu atenție acești Termeni înainte de a plasa o comandă. Prin accesarea site-ului, crearea
        unui cont, transmiterea unei comenzi sau achiziționarea de bunuri de la MisaElectro, sunteți de acord să
        respectați acești Termeni.
      </p>

      <h2>1. Domeniul de aplicare al acestor Termeni</h2>
      <p>1.1 Acești Termeni se aplică oricărei utilizări a site-ului și tuturor achizițiilor de bunuri efectuate prin intermediul MisaElectro.</p>
      <p>
        1.2 MisaElectro vinde produse electrice fizice, materiale electrice, accesorii de cablaj,
        produse legate de iluminat, componente de instalare, produse de distribuție și de protecție a circuitelor,
        prize, întrerupătoare, cabluri, accesorii de montare și alte bunuri conexe pentru uz casnic, comercial,
        de meserie și profesional.
      </p>
      <p>
        1.3 Acești Termeni se aplică împreună cu orice alte politici publicate pe site, inclusiv
        Politica de livrare, Politica de returnare și rambursare, Politica de confidențialitate, Politica privind cookie-urile și orice
        garanție specifică produsului sau termeni de garanție suplimentari.
      </p>
      <p>
        1.4 În cazul unui conflict între acești Termeni și un termen specific produsului menționat clar pe
        pagina de produs relevantă sau pe pagina de finalizare a comenzii, termenul specific produsului se va aplica numai acelui
        produs sau comenzi specifice.
      </p>
      <p>
        1.5 Nimic din acești Termeni nu afectează drepturile dumneavoastră legale obligatorii, atunci când astfel de drepturi nu pot fi
        excluse sau limitate în mod legal.
      </p>

      <h2>2. Eligibilitate și responsabilitatea clientului</h2>
      <p>2.1 Trebuie să aveți cel puțin 18 ani și capacitatea legală de a plasa o comandă pe site.</p>
      <p>
        2.2 Dacă plasați o comandă în numele unei întreprinderi, companii, parteneriat, organizații, client
        de meserie sau altei entități juridice, confirmați că sunteți autorizat să obligați acea entitate să respecte acești Termeni.
      </p>
      <p>
        2.3 Sunteți responsabil să vă asigurați că toate informațiile pe care ni le furnizați sunt exacte, complete și
        actualizate, inclusiv numele, datele de facturare, adresa de livrare, informațiile de contact, datele privind TVA-ul sau
        taxele și orice alte informații necesare pentru procesarea comenzii dumneavoastră.
      </p>
      <p>
        2.4 Nu trebuie să utilizați site-ul sau să achiziționați bunuri de la MisaElectro în niciun scop ilegal, nesigur,
        fraudulos sau neautorizat.
      </p>

      <h2>3. Clienți consumatori și clienți întreprinderi</h2>
      <p>3.1 MisaElectro vinde atât consumatorilor, cât și clienților întreprinderi.</p>
      <p>
        3.2 Un &bdquo;Consumator&rdquo; înseamnă o persoană fizică care acționează în întregime sau în principal în afara activității sale
        comerciale, de afaceri, meșteșugărești sau profesionale.
      </p>
      <p>
        3.3 Un &bdquo;Client întreprindere&rdquo; înseamnă orice persoană, companie, comerciant individual, contractor, instalator,
        revânzător, organizație, organism public sau profesionist care achiziționează bunuri în scopuri de afaceri, comerciale,
        de meserie, de revânzare, de instalare sau profesionale.
      </p>
      <p>
        3.4 Anumite drepturi descrise în acești Termeni, inclusiv drepturile legale de anulare ale consumatorilor, se aplică
        numai consumatorilor și nu se aplică clienților întreprinderi, cu excepția cazului în care legea prevede altfel.
      </p>
      <p>
        3.5 Se așteaptă ca clienții întreprinderi să dețină cunoștințele tehnice adecvate sau consiliere profesională
        înainte de a achiziționa bunuri electrice. Clienții întreprinderi sunt responsabili pentru verificarea tuturor
        specificațiilor, valorilor nominale, compatibilității, adecvării, cerințelor de conformitate și condițiilor de
        instalare înainte de a plasa o comandă.
      </p>

      <h2>4. Informații despre produse și disponibilitate</h2>
      <p>
        4.1 Ne propunem să ne asigurăm că descrierile produselor, imaginile, prețurile, detaliile tehnice, starea stocului și
        alte informații afișate pe site sunt exacte și actualizate.
      </p>
      <p>
        4.2 Imaginile produselor sunt furnizate numai în scop ilustrativ. Bunurile reale pot varia ușor față de
        imagini din cauza actualizărilor producătorului, modificărilor ambalajului, iluminării, setărilor ecranului, diferențelor
        de culoare, variațiilor de lot sau îmbunătățirilor tehnice.
      </p>
      <p>
        4.3 Specificațiile produselor se pot baza pe informații furnizate de producători, furnizori,
        distribuitori sau baze de date de produse. Deși luăm măsuri rezonabile, nu garantăm că toate
        datele despre produse sunt lipsite de erori, omisiuni sau actualizări.
      </p>
      <p>
        4.4 Înainte de a plasa o comandă, sunteți responsabil să verificați dacă produsul este adecvat pentru
        scopul dumneavoastră, inclusiv, dar fără a se limita la:
      </p>
      <ul>
        <li>tensiunea și valoarea nominală electrică;</li>
        <li>curentul, sarcina, wattajul și cerințele de putere;</li>
        <li>dimensiunile și spațiul de instalare;</li>
        <li>tipul cablului, dimensiunea cablului și cerințele de conectare;</li>
        <li>gradul de protecție IP și adecvarea la mediu;</li>
        <li>adecvarea pentru utilizare în interior sau exterior;</li>
        <li>compatibilitatea cu sistemele, corpurile, dispozitivele și instalațiile existente;</li>
        <li>cerințele de reglementare, de siguranță și de instalare din țara sau regiunea relevantă.</li>
      </ul>
      <p>
        4.5 Dacă nu sunteți sigur dacă un produs este adecvat pentru utilizarea dorită, ar trebui să ne contactați
        înainte de a comanda sau să solicitați sfaturi de la un electrician calificat sau un profesionist competent.
      </p>
      <p>
        4.6 Disponibilitatea produselor nu este garantată până când comanda dumneavoastră nu a fost acceptată și procesată.
        Putem anula sau întârzia o comandă atunci când un produs devine indisponibil, este întrerupt, este listat
        incorect sau nu poate fi furnizat din motive aflate în afara controlului nostru rezonabil.
      </p>

      <h2>5. Siguranță electrică, instalare și utilizare</h2>
      <p>
        5.1 Produsele electrice pot fi periculoase dacă sunt selectate, instalate, conectate, modificate,
        supraîncărcate sau utilizate incorect.
      </p>
      <p>
        5.2 Trebuie să utilizați toate produsele numai în scopul lor prevăzut și în conformitate cu toate instrucțiunile
        producătorului, avertismentele de siguranță, manualele de instalare, valorile nominale de tensiune, limitele de sarcină,
        specificațiile tehnice, legile aplicabile, reglementările în construcții, standardele electrice și cerințele locale.
      </p>
      <p>
        5.3 Produsele care necesită instalare electrică, cablare, conectare, testare, punere în funcțiune sau
        integrare într-un sistem electric ar trebui instalate numai de un electrician calificat sau un profesionist
        competent, atunci când este necesar sau adecvat.
      </p>
      <p>
        5.4 MisaElectro nu furnizează servicii de inginerie electrică, instalare, conformitate, inspecție,
        certificare sau aprobare de siguranță prin intermediul site-ului.
      </p>
      <p>
        5.5 Orice îndrumare, descriere de produs, notă de compatibilitate sau răspuns al asistenței pentru clienți furnizat de
        MisaElectro reprezintă doar informații cu caracter general și nu trebuie tratat ca un substitut pentru consilierea
        profesională, inspecția electrică sau evaluarea conformității.
      </p>
      <p>
        5.6 Nu suntem responsabili pentru daune, pierderi, vătămări, defecțiuni, neconformitate, instalare
        eșuată sau incidente de siguranță cauzate de instalarea incorectă, selecția incorectă a produsului,
        utilizarea greșită, supraîncărcarea, modificarea neautorizată, munca terților, nerespectarea instrucțiunilor sau
        utilizarea în afara scopului prevăzut al produsului.
      </p>

      <h2>6. Conturi, clienți de meserie și acces Pro</h2>
      <p>
        6.1 Este posibil să puteți crea un cont sau să solicitați acces de client de meserie, profesional sau
        de întreprindere pe site.
      </p>
      <p>
        6.2 Putem aproba, respinge, suspenda sau elimina orice cont, cont de meserie, acces la prețuri sau
        acces profesional, la discreția noastră.
      </p>
      <p>
        6.3 Putem solicita informații suplimentare pentru a vă verifica identitatea, statutul de afaceri, activitatea
        profesională, datele privind TVA-ul/taxele, adresa de livrare sau alte informații relevante.
      </p>
      <p>
        6.4 Sunteți responsabil pentru păstrarea în siguranță a datelor de conectare la cont. Trebuie să ne notificați imediat
        dacă credeți că s-a accesat contul dumneavoastră fără autorizare.
      </p>
      <p>
        6.5 Nu suntem responsabili pentru pierderile cauzate de nerespectarea de către dumneavoastră a securității datelor contului,
        cu excepția cazului în care legea prevede altfel.
      </p>

      <h2>7. Comenzi și formarea contractului</h2>
      <p>
        7.1 Prin plasarea unei comenzi, faceți o ofertă de achiziționare a bunurilor selectate în conformitate cu acești
        Termeni.
      </p>
      <p>
        7.2 După ce plasați o comandă, este posibil să primiți o confirmare a comenzii sau o confirmare a plății. Aceasta
        nu înseamnă automat că comanda dumneavoastră a fost acceptată.
      </p>
      <p>
        7.3 Un contract între dumneavoastră și MisaElectro se formează numai atunci când acceptăm comanda, o procesăm pentru
        onorare sau expediem bunurile, oricare dintre acestea survine mai întâi.
      </p>
      <p>7.4 Putem refuza, anula sau limita orice comandă înainte de acceptare atunci când:</p>
      <ul>
        <li>produsul este indisponibil;</li>
        <li>produsul, prețul, costul de livrare sau descrierea conține o eroare;</li>
        <li>plata nu este autorizată sau este stornată;</li>
        <li>se suspectează fraudă, abuz, activitate suspectă sau utilizare abuzivă;</li>
        <li>livrarea nu este disponibilă la destinația solicitată;</li>
        <li>se aplică restricții vamale, sancțiuni, de export, ale procesatorului de plăți, ale transportatorului sau legale;</li>
        <li>comanda pare a fi plasată pentru revânzare neautorizată sau în scopuri ilegale;</li>
        <li>nu putem verifica informațiile necesare privind clientul, facturarea sau livrarea.</li>
      </ul>
      <p>
        7.5 Dacă anulăm o comandă după ce plata a fost încasată, vom rambursa suma plătită pentru bunurile
        anulate, cu excepția cazului în care suntem obligați legal să reținem plata sau tranzacția face obiectul unei
        analize de fraudă, contestație de plată, sancțiuni sau conformitate.
      </p>

      <h2>8. Prețuri, TVA și valute</h2>
      <p>8.1 Site-ul poate afișa prețuri în EUR, RON și HUF.</p>
      <p>
        8.2 Prețurile afișate pe site includ TVA-ul, acolo unde este cazul, cu excepția cazului în care se menționează clar altfel.
      </p>
      <p>
        8.3 Prețul final de plată pentru comanda dumneavoastră va fi afișat la finalizarea comenzii înainte de a finaliza plata.
      </p>
      <p>
        8.4 Prețurile se pot modifica în orice moment fără notificare. Modificările nu vor afecta comenzile deja acceptate,
        cu excepția cazului în care a survenit o eroare clară de preț.
      </p>
      <p>
        8.5 Ne rezervăm dreptul de a corecta erorile evidente de preț, valută, taxe, reducere sau produs. Dacă
        o eroare afectează o comandă pe care ați plasat-o, vă putem contacta pentru a confirma dacă doriți să continuați
        la prețul corectat sau să anulați comanda.
      </p>
      <p>
        8.6 Conversia valutară, comisioanele bancare, comisioanele pentru tranzacții străine, comisioanele emitentului cardului sau
        diferențele de curs valutar sunt responsabilitatea clientului și nu sunt controlate de MisaElectro.
      </p>

      <h2>9. Condiții de plată</h2>
      <p>9.1 Plata trebuie efectuată la finalizarea comenzii.</p>
      <p>9.2 Acceptăm plăți securizate cu cardul, inclusiv Visa și Mastercard.</p>
      <p>
        9.3 Plățile sunt procesate de furnizori de plăți terți securizați. MisaElectro nu stochează numărul complet
        al cardului dumneavoastră sau datele complete de securitate ale cardului.
      </p>
      <p>
        9.4 Comanda dumneavoastră nu va fi procesată până când plata nu a fost autorizată sau primită cu succes.
      </p>
      <p>
        9.5 Dacă plata dumneavoastră este refuzată, stornată, contestată, retrocedată sau marcată ca suspectă, putem
        suspenda, anula sau întârzia comanda dumneavoastră.
      </p>
      <p>
        9.6 Nu trebuie să efectuați o plată frauduloasă, să utilizați o metodă de plată neautorizată sau să încercați să ocoliți
        măsurile de plată, securitate, verificare sau prevenire a fraudei.
      </p>
      <p>
        9.7 Pentru clienții întreprinderi, putem emite facturi cu TVA sau facturi comerciale, acolo unde este cazul și
        unde s-au furnizat informații de facturare suficiente.
      </p>

      <h2>10. Reduceri, promoții și livrare gratuită</h2>
      <p>
        10.1 Din când în când, MisaElectro poate oferi reduceri, coduri promoționale, prețuri speciale, praguri de
        livrare gratuită sau prețuri de meserie.
      </p>
      <p>
        10.2 Cu excepția cazului în care se menționează altfel, livrarea gratuită se aplică comenzilor eligibile de peste &euro;100 / &pound;100 / $100.
      </p>
      <p>
        10.3 Pragul de livrare gratuită se calculează pe baza subtotalului produselor după reduceri și
        înainte de orice taxe vamale, taxe de import, taxe locale suplimentare sau servicii speciale de livrare.
      </p>
      <p>
        10.4 Livrarea gratuită poate să nu se aplice anumitor destinații, bunurilor supradimensionate, bunurilor grele, bunurilor
        restricționate, bunurilor comandate special sau produselor care necesită manipulare specială.
      </p>
      <p>
        10.5 Codurile promoționale și reducerile pot fi retrase, modificate, refuzate sau anulate în orice moment
        atunci când se suspectează utilizare abuzivă, eroare, fraudă sau abuz tehnic.
      </p>
      <p>
        10.6 Promoțiile nu pot fi schimbate în numerar și nu pot fi combinate cu alte oferte, cu excepția cazului în care se menționează
        clar.
      </p>

      <h2>11. Livrare și expediere</h2>
      <p>11.1 MisaElectro expediază comenzile din Regatul Unit.</p>
      <p>
        11.2 Livrarea este disponibilă la destinațiile de livrare acceptate afișate pe site sau la finalizarea comenzii.
      </p>
      <p>
        11.3 În prezent oferim numai livrare standard. Livrarea expres nu este disponibilă, cu excepția cazului în care este
        afișată expres la finalizarea comenzii.
      </p>
      <p>
        11.4 Termenele de livrare sunt doar estimative și încep de la data expedierii, nu de la data la care comanda
        este plasată.
      </p>
      <p>11.5 Termenele estimate de livrare sunt în general următoarele:</p>
      <table>
        <thead>
          <tr>
            <th>Destinație</th>
            <th>Termen estimat de livrare de la expediere</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Regatul Unit</td><td>1&ndash;3 zile lucrătoare</td></tr>
          <tr><td>Europa</td><td>3&ndash;7 zile lucrătoare</td></tr>
          <tr><td>America de Nord</td><td>5&ndash;10 zile lucrătoare</td></tr>
          <tr><td>Asia și Oceania</td><td>7&ndash;14 zile lucrătoare</td></tr>
          <tr><td>Africa și America de Sud</td><td>8&ndash;15 zile lucrătoare</td></tr>
        </tbody>
      </table>
      <p>
        11.6 Livrările europene și internaționale pot fi gestionate de DHL, transportatori parteneri, curieri locali
        sau alți furnizori de logistică.
      </p>
      <p>
        11.7 Termenele de livrare pot fi afectate de factori aflați în afara controlului nostru, inclusiv procesarea vamală,
        manipularea de către curierul local, zonele de livrare îndepărtate sau rurale, informațiile de livrare incomplete, sărbătorile
        legale, condițiile meteorologice, întreruperile de transport, grevele, controalele de securitate, controalele de import sau
        întârzierile transportatorului.
      </p>
      <p>
        11.8 Sunteți responsabil pentru furnizarea unei adrese de livrare complete și exacte. Nu suntem
        responsabili pentru livrarea eșuată, întârziată sau greșit direcționată cauzată de informații incorecte sau incomplete
        furnizate de dumneavoastră.
      </p>
      <p>11.9 După expedierea unei comenzi, este posibil ca modificările adresei de livrare să nu fie posibile.</p>
      <p>
        11.10 Dacă un colet ne este returnat deoarece ați furnizat o adresă incorectă, nu l-ați ridicat,
        ați refuzat livrarea sau nu ați îndeplinit cerințele vamale sau ale curierului, putem deduce costurile de livrare,
        costurile de returnare, taxele vamale, comisioanele transportatorului și alte costuri rezonabile din orice rambursare,
        cu excepția cazului în care este interzis de lege.
      </p>

      <h2>12. Comenzi internaționale, vamă și taxe de import</h2>
      <p>
        12.1 Pentru livrările în afara Regatului Unit, comanda dumneavoastră poate face obiectul vămuirii,
        taxelor de import, TVA-ului de import, taxelor, comisioanelor de brokeraj, comisioanelor de manipulare, comisioanelor transportatorului sau altor
        taxe locale.
      </p>
      <p>
        12.2 Cu excepția cazului în care se menționează expres altfel la finalizarea comenzii, sunteți responsabil pentru toate taxele vamale,
        TVA-ul de import, taxele, comisioanele de brokeraj și taxele locale de plată în țara de destinație.
      </p>
      <p>
        12.3 MisaElectro nu are niciun control asupra timpilor de procesare vamală, deciziilor vamale, restricțiilor de import,
        evaluărilor fiscale locale sau taxelor impuse de autorități, curieri sau brokeri vamali.
      </p>
      <p>
        12.4 Sunteți responsabil să vă asigurați că bunurile pe care le comandați pot fi importate și utilizate în mod legal
        în țara sau regiunea dumneavoastră.
      </p>
      <p>
        12.5 Dacă o comandă este întârziată, returnată, confiscată, respinsă sau distrusă de vamă sau de autoritățile
        locale din cauza restricțiilor de import, a taxelor neplătite, a informațiilor incorecte furnizate de dumneavoastră sau a
        nerespectării cerințelor locale, MisaElectro nu va fi responsabil pentru pierderea, întârzierea sau costurile
        rezultate, cu excepția cazului în care legea prevede altfel.
      </p>

      <h2>13. Risc și proprietate</h2>
      <p>
        13.1 Proprietatea asupra bunurilor vă revine numai atunci când am primit plata integrală pentru bunuri și
        orice taxe de livrare aplicabile.
      </p>
      <p>
        13.2 Pentru comenzile consumatorilor, riscul asupra bunurilor vă revine atunci când bunurile vă sunt livrate dumneavoastră sau unei
        persoane identificate de dumneavoastră pentru a le primi.
      </p>
      <p>
        13.3 Pentru comenzile clienților întreprinderi, riscul vă revine atunci când bunurile sunt livrate la adresa de
        livrare, predate primului transportator pentru livrare sau puse în alt mod la dispoziție pentru ridicare,
        în funcție de metoda de livrare convenită sau utilizată.
      </p>
      <p>
        13.4 Sunteți responsabil pentru inspectarea bunurilor la livrare și pentru depozitarea acestora în siguranță și în mod adecvat.
      </p>

      <h2>14. Drepturile de anulare ale consumatorului</h2>
      <p>
        14.1 Dacă sunteți consumator, este posibil să aveți dreptul legal de a anula achizițiile online eligibile în termen de 14
        zile de la primirea bunurilor, fără a oferi un motiv.
      </p>
      <p>
        14.2 Perioada de anulare expiră la 14 zile după ziua în care dumneavoastră sau o persoană identificată
        de dumneavoastră primiți bunurile.
      </p>
      <p>
        14.3 Dacă comanda dumneavoastră este livrată în mai multe colete, perioada de anulare va expira de obicei la 14
        zile după ziua în care primiți ultimul colet.
      </p>
      <p>
        14.4 Pentru a vă exercita dreptul de anulare, trebuie să ne informați clar prin e-mail la info@misaelectro.ro
        înainte de expirarea perioadei de anulare.
      </p>
      <p>
        14.5 După ce ne notificați că doriți să anulați, trebuie să ne returnați bunurile fără întârziere nejustificată
        și nu mai târziu de 14 zile de la data la care ne-ați notificat anularea.
      </p>
      <p>
        14.6 Bunurile returnate trebuie să fie neutilizate, neinstalate, complete, în ambalajul lor original, acolo unde este
        posibil, cu toate accesoriile, manualele, etichetele, materialele de protecție și articolele incluse.
      </p>
      <p>
        14.7 Sunteți responsabil pentru costurile de returnare, cu excepția cazului în care bunurile sunt defecte, deteriorate, incorecte
        sau am convenit altfel în scris.
      </p>
      <p>
        14.8 Putem reduce rambursarea pentru a reflecta orice reducere a valorii bunurilor cauzată de manipularea
        care depășește ceea ce este necesar pentru a inspecta natura, caracteristicile și funcționarea bunurilor.
      </p>
      <p>
        14.9 Acolo unde legea o cere, vom rambursa costul de livrare standard de bază plătit pentru livrarea inițială.
        Costurile de livrare suplimentare, serviciile îmbunătățite, taxele internaționale, taxele vamale,
        taxele de import, comisioanele de brokeraj sau costurile de livrare specială pot să nu fie rambursabile, cu excepția cazului în care legea o
        cere.
      </p>
      <p>14.10 Rambursările se vor efectua către metoda de plată inițială, acolo unde este posibil.</p>

      <h2>15. Articole nereturnabile și cu returnare restricționată</h2>
      <p>
        15.1 Anumite bunuri nu pot fi returnate în cazul răzgândirii, cu excepția cazului în care sunt defecte, deteriorate,
        incorecte sau drepturile de returnare sunt impuse de lege.
      </p>
      <p>15.2 Articolele nereturnabile sau cu returnare restricționată pot include:</p>
      <ul>
        <li>bunuri fabricate la comandă;</li>
        <li>bunuri comandate special pentru dumneavoastră;</li>
        <li>bunuri tăiate la dimensiune, inclusiv cablu sau materiale similare;</li>
        <li>bunuri personalizate, modificate, asamblate sau alterate;</li>
        <li>bunuri electrice instalate, cablate, conectate, testate, puse în funcțiune sau utilizate;</li>
        <li>bunuri deteriorate după livrare;</li>
        <li>bunuri cărora le lipsesc piese, accesorii, ambalaj, manuale, etichete, sigilii sau materiale de protecție;</li>
        <li>bunuri care nu mai sunt în stare de revânzare;</li>
        <li>bunuri afectate de depozitare incorectă, umezeală, căldură, impact, contaminare, utilizare greșită sau manipulare neautorizată;</li>
        <li>articole de lichidare, vânzare finală sau întrerupte, atunci când restricțiile de returnare sunt clar menționate și legale.</li>
      </ul>
      <p>
        15.3 Această secțiune nu limitează drepturile dumneavoastră legale în cazul în care bunurile sunt defecte, nu corespund descrierii, sunt
        nesigure sau altfel neconforme cu legislația aplicabilă.
      </p>

      <h2>16. Bunuri defecte, deteriorate sau incorecte</h2>
      <p>
        16.1 Dacă bunurile sosesc deteriorate, defecte, incomplete sau incorecte, ar trebui să ne contactați cât mai
        curând posibil la info@misaelectro.ro.
      </p>
      <p>
        16.2 Vă rugăm să furnizați numărul comenzii, o descriere a problemei și fotografii sau videoclipuri clare
        care să arate bunurile, ambalajul, etichetele, deteriorarea sau defectul, acolo unde este posibil în mod rezonabil.
      </p>
      <p>
        16.3 Ar trebui să păstrați produsul, ambalajul, etichetele și materialele de livrare până când problema a fost
        analizată, deoarece acestea pot fi necesare pentru reclamațiile transportatorului, inspecția furnizorului sau evaluarea garanției.
      </p>
      <p>
        16.4 Pentru deteriorările vizibile la livrare, vă rugăm să ne notificați în termen de 48 de ore de la livrare, acolo unde este posibil. Aceasta
        ne ajută să investigăm rapid problemele curierului, dar nu elimină niciun drept legal obligatoriu pe care l-ați putea
        avea.
      </p>
      <p>
        16.5 Atunci când se confirmă că bunurile sunt defecte, deteriorate înainte de livrare, incorecte sau altfel neconforme
        cu contractul, putem oferi o reparație, înlocuire, rambursare, rambursare parțială sau alt
        remediu în conformitate cu legislația aplicabilă.
      </p>
      <p>
        16.6 Putem solicita returnarea bunurilor pentru inspecție înainte de a aproba o rambursare, o înlocuire
        sau un remediu de garanție.
      </p>
      <p>
        16.7 Dacă se confirmă că bunurile sunt defecte, deteriorate sau incorecte, vom acoperi costurile rezonabile de returnare
        sau vom furniza instrucțiuni de returnare.
      </p>
      <p>
        16.8 Nu suntem responsabili pentru defecte sau daune cauzate de instalarea incorectă, utilizarea greșită,
        supraîncărcare, modificare neautorizată, deteriorare externă, mediu neadecvat, depozitare incorectă,
        munca terților, nerespectarea instrucțiunilor, supratensiuni, uzura normală sau utilizarea în afara scopului
        prevăzut al produsului.
      </p>

      <h2>17. Garanția legală și drepturile statutare</h2>
      <p>
        17.1 Consumatorii pot avea drepturi statutare în temeiul legilor aplicabile privind protecția consumatorilor atunci când bunurile sunt
        defecte, nu corespund descrierii, nu sunt adecvate scopului, sunt nesigure sau nu sunt conforme cu contractul.
      </p>
      <p>
        17.2 Pentru consumatorii din UE, legislația aplicabilă privind consumatorii poate prevedea o garanție legală minimă de 2 ani de la
        data primirii bunurilor, acoperind defectele sau lipsa de conformitate care existau la momentul
        livrării și devin evidente în timpul perioadei de garanție legală.
      </p>
      <p>
        17.3 Pentru consumatorii din Regatul Unit, se aplică drepturile statutare în temeiul legislației aplicabile privind consumatorii din Regatul Unit. Aceste drepturi pot
        include remedii în cazul în care bunurile sunt defecte, nu corespund descrierii sau nu sunt adecvate scopului.
      </p>
      <p>
        17.4 Aceste drepturi statutare sunt separate de și nu sunt limitate de nicio garanție a producătorului,
        garanție comercială, garanție suplimentară sau politică de returnare oferită de MisaElectro.
      </p>
      <p>
        17.5 Clienții întreprinderi nu beneficiază de drepturile statutare de anulare ale consumatorilor și pot avea drepturi mai
        limitate decât consumatorii, cu excepția cazului în care legea obligatorie prevede altfel.
      </p>

      <h2>18. Garanție suplimentară</h2>
      <p>18.1 MisaElectro poate oferi opțiuni de garanție suplimentară plătită pentru produse selectate.</p>
      <p>18.2 Garanția suplimentară este opțională și poate fi achiziționată la finalizarea comenzii, acolo unde este disponibilă.</p>
      <p>
        18.3 Cu excepția cazului în care se menționează altfel pe pagina de produs sau la finalizarea comenzii, prețul garanției suplimentare este
        calculat după cum urmează:
      </p>
      <table>
        <thead>
          <tr>
            <th>Opțiune de garanție suplimentară</th>
            <th>Preț</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>+1 an de garanție suplimentară</td><td>10% din prețul produsului, minimum &euro;6.99 / &pound;6.99 / $6.99</td></tr>
          <tr><td>+2 ani de garanție suplimentară</td><td>16% din prețul produsului, minimum &euro;9.99 / &pound;9.99 / $9.99</td></tr>
          <tr><td>+3 ani de garanție suplimentară</td><td>22% din prețul produsului, minimum &euro;12.99 / &pound;12.99 / $12.99</td></tr>
        </tbody>
      </table>
      <p>
        18.4 Prețul garanției suplimentare se calculează pe baza prețului produsului înainte de taxele de livrare,
        taxele vamale, taxele de import, comisioanele de brokeraj sau alte taxe locale.
      </p>
      <p>
        18.5 Garanția suplimentară este o garanție comercială oferită în plus față de drepturile dumneavoastră statutare. Aceasta
        nu înlocuiește, reduce sau limitează niciun drept legal obligatoriu pe care l-ați putea avea.
      </p>
      <p>
        18.6 Cu excepția cazului în care se menționează altfel, acoperirea garanției suplimentare începe după expirarea garanției
        inițiale, a garanției legale, a garanției producătorului sau a perioadei de garanție standard aplicabile
        produsului relevant.
      </p>
      <p>
        18.7 Garanția suplimentară acoperă defectele de fabricație eligibile și defectele de material care apar în timpul
        utilizării normale a produsului în conformitate cu instrucțiunile producătorului și cerințele tehnice
        aplicabile.
      </p>
      <p>18.8 Garanția suplimentară nu acoperă:</p>
      <ul>
        <li>instalarea, cablarea, conectarea, testarea sau punerea în funcțiune incorectă;</li>
        <li>instalarea de către o persoană necalificată sau neautorizată atunci când instalarea profesională este necesară sau adecvată;</li>
        <li>utilizarea greșită, neglijența, abuzul, supraîncărcarea sau funcționarea în afara specificațiilor nominale;</li>
        <li>reparația, modificarea, deschiderea, dezasamblarea sau alterarea neautorizată;</li>
        <li>deteriorarea accidentală, deteriorarea prin impact, deteriorarea prin apă, deteriorarea prin umezeală, deteriorarea prin foc sau deteriorarea externă;</li>
        <li>daunele cauzate de supratensiuni, alimentare instabilă, tensiune incorectă, fulgere sau defecte electrice în instalația mai largă;</li>
        <li>uzura normală;</li>
        <li>deteriorarea cosmetică care nu afectează funcționalitatea;</li>
        <li>piese consumabile, baterii, becuri, siguranțe, garnituri, conectori, accesorii sau piese care se așteaptă să se uzeze, cu excepția cazului în care sunt acoperite expres;</li>
        <li>defecte cauzate de depozitare, transport, mediu, contaminare, coroziune, praf, umiditate, substanțe chimice sau condiții de temperatură neadecvate;</li>
        <li>produse utilizate în scopuri în afara utilizării prevăzute declarate de producător;</li>
        <li>pierderea profitului, costurile de manoperă, costurile electricianului, costurile de îndepărtare, costurile de reinstalare, timpul de nefuncționare sau pierderile indirecte.</li>
      </ul>
      <p>
        18.9 Pentru a face o reclamație de garanție suplimentară, trebuie să ne contactați la info@misaelectro.ro cu numărul comenzii,
        dovada achiziției, descrierea defectului și fotografii, videoclipuri sau informații de diagnosticare
        justificative, acolo unde este solicitat în mod rezonabil.
      </p>
      <p>
        18.10 Putem solicita returnarea produsului pentru inspecție înainte de a aproba orice remediu de garanție.
      </p>
      <p>
        18.11 Atunci când o reclamație de garanție suplimentară valabilă este aprobată, putem, în funcție de produs și
        de circumstanțe, oferi reparație, înlocuire, înlocuire echivalentă, rambursare parțială sau un alt
        remediu rezonabil.
      </p>
      <p>
        18.12 Garanția suplimentară este legată de produs și de comanda inițială. Este posibil să nu fie transferabilă,
        cu excepția cazului în care suntem de acord expres în scris.
      </p>
      <p>
        18.13 Dacă anulați sau returnați un produs în conformitate cu drepturile dumneavoastră legale înainte ca garanția
        suplimentară să înceapă, orice garanție suplimentară achiziționată pentru acel produs va fi de asemenea rambursată, acolo unde legea o
        cere.
      </p>

      <h2>19. Termeni pentru clienții întreprinderi</h2>
      <p>
        19.1 Clienții întreprinderi sunt responsabili pentru verificarea tuturor specificațiilor produsului, adecvării,
        compatibilității, cerințelor de conformitate, cerințelor de instalare și obligațiilor de reglementare locale
        înainte de a comanda.
      </p>
      <p>
        19.2 Clienții întreprinderi nu au un drept general de a anula sau returna bunuri din cauza răzgândirii,
        comenzii incorecte, stocului excedentar, specificației neadecvate, modificărilor proiectului clientului sau bunurilor
        nedefecte, cu excepția cazului în care convenim altfel în scris.
      </p>
      <p>
        19.3 Orice returnare acceptată de la un client întreprindere este la discreția noastră și poate face obiectul
        inspecției, taxelor de restocare, costurilor de returnare și deducerii pentru valoarea redusă de revânzare.
      </p>
      <p>
        19.4 Clienții întreprinderi trebuie să inspecteze bunurile prompt la livrare și să ne notifice despre deteriorările vizibile,
        lipsurile, bunurile incorecte sau problemele de livrare cât mai curând posibil în mod rezonabil.
      </p>
      <p>
        19.5 Acolo unde este permis de lege, răspunderea noastră totală față de un client întreprindere pentru orice comandă nu va depăși
        prețul plătit pentru bunurile care generează reclamația.
      </p>
      <p>
        19.6 Nu vom fi răspunzători față de clienții întreprinderi pentru pierderea profitului, pierderea veniturilor, pierderea
        contractului, pierderea oportunității de afaceri, pierderea reputației comerciale, pierderea datelor, costurile de manoperă, costurile de
        instalare, costurile de îndepărtare, costurile de reinstalare, timpul de nefuncționare, întârzierile proiectului sau pierderile indirecte sau
        subsecvente.
      </p>

      <h2>20. Conformitatea produselor și reglementările locale</h2>
      <p>
        20.1 Produsele vândute de MisaElectro pot fi concepute pentru piețe, standarde, sisteme de tensiune, corpuri
        sau medii de instalare specifice.
      </p>
      <p>
        20.2 Sunteți responsabil pentru verificarea faptului că un produs este adecvat și legal pentru instalare,
        revânzare, import sau utilizare în țara, regiunea, proprietatea, proiectul sau sistemul electric al dumneavoastră.
      </p>
      <p>
        20.3 Nu garantăm că produsele achiziționate de la MisaElectro vor îndeplini fiecare cod local de construcții,
        cod electric, cerință de certificare, cerință de asigurare, cerință la locul de muncă sau specificație
        de proiect, în afara informațiilor menționate expres pe pagina de produs.
      </p>
      <p>
        20.4 Clienții întreprinderi, instalatorii, contractorii, revânzătorii și cumpărătorii profesioniști sunt responsabili
        pentru obținerea tuturor permiselor, aprobărilor, inspecțiilor, certificărilor și avizelor profesionale
        necesare pentru utilizarea, instalarea, revânzarea sau proiectul lor.
      </p>

      <h2>21. Proprietate intelectuală</h2>
      <p>
        21.1 Tot conținutul de pe site, inclusiv textul, aspectul, brandingul, logourile, grafica, pictogramele, descrierile
        de produse, fotografiile, videoclipurile, elementele de design și alte materiale, aparțin MisaElectro,
        MISARELIANA S.R.L., furnizorilor, producătorilor, licențiatorilor sau altor titulari de drepturi.
      </p>
      <p>
        21.2 Puteți utiliza site-ul numai în scopuri personale, de afaceri sau de achiziție, în conformitate cu
        acești Termeni.
      </p>
      <p>
        21.3 Nu trebuie să copiați, reproduceți, extrageți, distribuiți, vindeți, modificați, publicați sau
        exploatați comercial niciun conținut al site-ului fără permisiunea noastră scrisă prealabilă.
      </p>
      <p>
        21.4 Achiziționarea unui produs nu transferă niciun drept de proprietate intelectuală asupra produsului, mărcii,
        designului, software-ului, documentației sau materialelor conexe, cu excepția dreptului de a utiliza produsul achiziționat
        în mod legal și conform destinației.
      </p>

      <h2>22. Utilizarea site-ului și conduita interzisă</h2>
      <p>22.1 Nu trebuie să utilizați greșit site-ul.</p>
      <p>22.2 Nu trebuie să:</p>
      <ul>
        <li>încercați să obțineți acces neautorizat la site, servere, sisteme, conturi sau date;</li>
        <li>interferați cu securitatea, funcționarea sau disponibilitatea site-ului;</li>
        <li>utilizați boți, scrapere, crawlere, instrumente automate sau metode de extragere a datelor fără permisiune;</li>
        <li>încărcați cod rău intenționat, viruși sau materiale dăunătoare;</li>
        <li>plasați comenzi frauduloase, false, abuzive sau speculative;</li>
        <li>vă dați drept altă persoană sau întreprindere;</li>
        <li>utilizați site-ul în scopuri ilegale, dăunătoare, înșelătoare sau interzise;</li>
        <li>încercați să ocoliți controalele geografice, de plată, de securitate, de prevenire a fraudei sau de sancțiuni.</li>
      </ul>
      <p>
        22.3 Putem restricționa, suspenda sau întrerupe accesul la site atunci când suspectăm utilizare abuzivă, fraudă,
        risc de securitate, încălcarea acestor Termeni sau activitate ilegală.
      </p>

      <h2>23. Sancțiuni, controale la export și destinații restricționate</h2>
      <p>
        23.1 Putem refuza, anula, suspenda sau bloca orice comandă atunci când este necesar sau adecvat din cauza
        sancțiunilor, controalelor la export, controalelor privind criminalitatea financiară, regulilor procesatorului de plăți, restricțiilor
        curierilor, restricțiilor vamale sau obligațiilor legale.
      </p>
      <p>
        23.2 Putem verifica comenzile, clienții, datele de facturare, adresele de livrare, informațiile de plată și
        destinațiile în raport cu cerințele aplicabile privind sancțiunile, părțile restricționate, prevenirea fraudei și
        conformitatea.
      </p>
      <p>
        23.3 Nu putem accepta comenzi atunci când acest lucru ar încălca legile aplicabile, sancțiunile, controalele la export,
        regulile transportatorului, cerințele procesatorului de plăți sau controalele interne de conformitate.
      </p>
      <p>
        23.4 Confirmați că nu faceți obiectul sancțiunilor, nu sunteți localizat într-un teritoriu restricționat și
        nu achiziționați bunuri pentru export, revânzare, transfer sau utilizare cu încălcarea sancțiunilor aplicabile, a controalelor la
        export sau a legilor.
      </p>
      <p>
        23.5 Nu suntem responsabili pentru pierderile, întârzierile, anulările sau tranzacțiile blocate cauzate de
        sancțiuni, controale la export, restricții vamale, reguli ale procesatorului de plăți sau cerințe de conformitate
        legală.
      </p>

      <h2>24. Confidențialitate și cookie-uri</h2>
      <p>24.1 Prelucrăm datele cu caracter personal în conformitate cu Politica noastră de confidențialitate.</p>
      <p>
        24.2 Site-ul utilizează cookie-uri și tehnologii similare în conformitate cu Politica noastră privind cookie-urile.
      </p>
      <p>
        24.3 Prin utilizarea site-ului, recunoașteți că datele dumneavoastră cu caracter personal pot fi prelucrate în scopuri
        care includ onorarea comenzii, procesarea plăților, livrarea, asistența pentru clienți, prevenirea fraudei, conformitatea
        legală, gestionarea contului, analiza și îmbunătățirea serviciilor.
      </p>

      <h2>25. Limitarea răspunderii</h2>
      <p>
        25.1 Nimic din acești Termeni nu exclude sau limitează răspunderea atunci când ar fi ilegal să se procedeze astfel,
        inclusiv răspunderea pentru deces sau vătămare corporală cauzată de neglijență, fraudă, declarație frauduloasă
        eronată sau orice răspundere care nu poate fi exclusă în temeiul legislației aplicabile.
      </p>
      <p>25.2 Nimic din acești Termeni nu limitează drepturile dumneavoastră statutare obligatorii în calitate de consumator.</p>
      <p>25.3 Sub rezerva secțiunilor 25.1 și 25.2, MisaElectro nu va fi răspunzător pentru:</p>
      <ul>
        <li>pierderi indirecte, incidentale, speciale, subsecvente sau punitive;</li>
        <li>pierderea profitului, veniturilor, afacerii, oportunității, contractului, reputației comerciale sau economiilor anticipate;</li>
        <li>pierderea datelor sau întreruperea sistemului;</li>
        <li>costurile de manoperă, instalare, îndepărtare, reinstalare, testare, inspecție, certificare sau ale contractorului;</li>
        <li>întârzierile proiectului, timpul de nefuncționare operațional sau întreruperea activității;</li>
        <li>pierderile cauzate de selecția incorectă a produsului, instalare, utilizare greșită, supraîncărcare, modificare neautorizată sau nerespectarea instrucțiunilor;</li>
        <li>pierderile cauzate de evenimente aflate în afara controlului nostru rezonabil.</li>
      </ul>
      <p>
        25.4 Produsele trebuie selectate, instalate și utilizate corect. Nu suntem responsabili pentru
        consecințele care decurg din instalarea incorectă, instalarea nesigură sau utilizarea contrară
        instrucțiunilor producătorului sau reglementărilor aplicabile.
      </p>
      <p>
        25.5 Atunci când sunteți client întreprindere și în cea mai mare măsură permisă de lege, răspunderea noastră
        totală în legătură cu orice comandă nu va depăși suma plătită pentru bunurile care generează
        reclamația.
      </p>

      <h2>26. Evenimente în afara controlului nostru</h2>
      <p>
        26.1 Nu vom fi responsabili pentru neîndeplinirea sau întârzierea îndeplinirii obligațiilor noastre atunci când sunt cauzate de
        evenimente aflate în afara controlului nostru rezonabil.
      </p>
      <p>
        26.2 Astfel de evenimente pot include perturbarea lanțului de aprovizionare, întârzierea producătorului, perturbarea transportului,
        eșecul curierului, întârzierea vamală, grevele, disputele de muncă, condițiile meteorologice extreme, dezastrele naturale, incendiul,
        inundația, războiul, terorismul, tulburările civile, epidemia, pandemia, acțiunea guvernamentală, modificarea reglementărilor,
        sancțiunile, pana de curent, pana de internet, defecțiunea tehnică sau alte circumstanțe aflate în afara controlului nostru
        rezonabil.
      </p>
      <p>
        26.3 Dacă un astfel de eveniment vă afectează comanda, vom lua măsuri rezonabile pentru a minimiza perturbarea și
        vă putem contacta cu informații actualizate, acolo unde este cazul.
      </p>

      <h2>27. Modificări ale site-ului, produselor și Termenilor</h2>
      <p>
        27.1 Putem actualiza site-ul, gama de produse, prețurile, opțiunile de livrare, politicile și acești Termeni
        din când în când.
      </p>
      <p>
        27.2 Versiunea Termenilor în vigoare în momentul în care plasați comanda se va aplica acelei comenzi,
        cu excepția cazului în care o modificare este impusă de lege sau se referă la o corecție care trebuie aplicată.
      </p>
      <p>
        27.3 Utilizarea în continuare a site-ului după publicarea Termenilor actualizați înseamnă că acceptați Termenii
        actualizați pentru utilizarea viitoare și comenzile viitoare.
      </p>

      <h2>28. Separabilitate</h2>
      <p>
        28.1 Dacă orice parte a acestor Termeni se constată a fi invalidă, ilegală sau inaplicabilă, acea parte va
        fi tratată ca eliminată sau modificată în măsura minimă necesară.
      </p>
      <p>28.2 Părțile rămase ale acestor Termeni vor continua să aibă efect deplin și valabil.</p>

      <h2>29. Transferul drepturilor</h2>
      <p>
        29.1 Putem transfera, cesiona, subcontracta sau gestiona în alt mod drepturile și obligațiile noastre în temeiul
        acestor Termeni atunci când acest lucru nu reduce în mod substanțial drepturile dumneavoastră în calitate de consumator.
      </p>
      <p>
        29.2 Nu puteți transfera drepturile sau obligațiile dumneavoastră în temeiul acestor Termeni fără consimțământul nostru scris
        prealabil, cu excepția cazului în care legea o cere.
      </p>

      <h2>30. Legea aplicabilă și jurisdicția</h2>
      <p>30.1 Acești Termeni sunt guvernați de legile Angliei și Țării Galilor.</p>
      <p>
        30.2 Dacă sunteți consumator, puteți beneficia de asemenea de orice drepturi obligatorii de protecție a consumatorilor
        disponibile în temeiul legilor țării dumneavoastră de reședință.
      </p>
      <p>
        30.3 Dacă sunteți consumator cu reședința în Regatul Unit, litigiile pot fi aduse în fața instanțelor
        din Anglia și Țara Galilor sau a oricărei alte instanțe din Regatul Unit care are jurisdicție în temeiul legislației aplicabile.
      </p>
      <p>
        30.4 Dacă sunteți consumator cu reședința în Uniunea Europeană sau într-o altă jurisdicție în care se aplică drepturile
        locale obligatorii ale consumatorilor, nimic din acești Termeni nu vă împiedică să vă bazați pe acele drepturi obligatorii.
      </p>
      <p>
        30.5 Dacă sunteți client întreprindere, instanțele din Anglia și Țara Galilor vor avea jurisdicție exclusivă
        asupra oricărui litigiu care decurge din sau în legătură cu acești Termeni, site-ul sau orice comandă.
      </p>

      <h2>31. Informații de contact</h2>
      <p>
        Dacă aveți întrebări despre acești Termeni, comanda dumneavoastră, livrare, returnări, garanție sau orice altă
        chestiune, vă rugăm să ne contactați:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  hu: (
    <PolicyLayout title="Általános szerződési feltételek" lastUpdated="2026. május 29.">
      <p>
        A jelen Általános szerződési feltételek (&bdquo;Feltételek&rdquo;) szabályozzák a www.misaelectro.ro
        webhelyhez való hozzáférését és annak használatát, valamint a MisaElectro márka alatt üzemeltetett
        bármely kapcsolódó oldalt, szolgáltatást, megrendelést, vásárlást, kommunikációt és tranzakciót.
      </p>
      <p>A webhelyet a következő üzemelteti:</p>
      <ContactBlock />
      <p>
        A jelen Feltételekben a &bdquo;MisaElectro&rdquo;, &bdquo;mi&rdquo; vagy &bdquo;miénk&rdquo; kifejezés a MISARELIANA S.R.L.-t jelenti.
        A &bdquo;Vásárló&rdquo; vagy &bdquo;Ön&rdquo; kifejezés bármely olyan személyt vagy vállalkozást jelent, aki hozzáfér
        a webhelyhez, megrendelést ad le, árut vásárol, vagy más módon igénybe veszi szolgáltatásainkat.
      </p>
      <p>
        Kérjük, megrendelés leadása előtt figyelmesen olvassa el a jelen Feltételeket. A webhely elérésével, fiók
        létrehozásával, megrendelés benyújtásával vagy a MisaElectrótól történő áruvásárlással Ön elfogadja, hogy a jelen
        Feltételek kötelezik.
      </p>

      <h2>1. A jelen Feltételek hatálya</h2>
      <p>1.1 A jelen Feltételek a webhely minden használatára és a MisaElectrón keresztül történő minden áruvásárlásra vonatkoznak.</p>
      <p>
        1.2 A MisaElectro fizikai elektromos termékeket, elektromos anyagokat, huzalozási tartozékokat,
        világítással kapcsolatos termékeket, szerelési alkatrészeket, elosztási és áramkörvédelmi termékeket,
        aljzatokat, kapcsolókat, kábeleket, rögzítési tartozékokat és más kapcsolódó árukat értékesít háztartási, kereskedelmi,
        szakipari és professzionális felhasználásra.
      </p>
      <p>
        1.3 A jelen Feltételek a webhelyen közzétett minden egyéb szabályzattal együtt alkalmazandók, beleértve a
        Szállítási szabályzatot, a Visszaküldési és visszatérítési szabályzatot, az Adatvédelmi szabályzatot, a Cookie-szabályzatot, valamint bármely
        termékspecifikus jótállási vagy kiegészítő jótállási feltételt.
      </p>
      <p>
        1.4 Amennyiben ellentmondás áll fenn a jelen Feltételek és a vonatkozó termékoldalon vagy a pénztár oldalon
        egyértelműen feltüntetett termékspecifikus feltétel között, a termékspecifikus feltétel csak az adott
        termékre vagy megrendelésre vonatkozik.
      </p>
      <p>
        1.5 A jelen Feltételekben semmi sem érinti az Ön kötelező érvényű törvényes jogait, amennyiben az ilyen jogok
        jogszerűen nem zárhatók ki vagy korlátozhatók.
      </p>

      <h2>2. Jogosultság és a vásárló felelőssége</h2>
      <p>2.1 Önnek legalább 18 évesnek kell lennie, és jogképességgel kell rendelkeznie a webhelyen történő megrendelés leadásához.</p>
      <p>
        2.2 Ha egy vállalkozás, cég, társulás, szervezet, szakipari
        vásárló vagy más jogi személy nevében ad le megrendelést, Ön megerősíti, hogy jogosult az adott entitást a jelen Feltételek betartására kötelezni.
      </p>
      <p>
        2.3 Ön felelős annak biztosításáért, hogy az Ön által számunkra megadott minden információ pontos, teljes és
        naprakész legyen, beleértve nevét, számlázási adatait, szállítási címét, elérhetőségeit, áfa- vagy adóadatait,
        valamint a megrendelés feldolgozásához szükséges bármely egyéb információt.
      </p>
      <p>
        2.4 Nem használhatja a webhelyet, és nem vásárolhat árut a MisaElectrótól semmilyen jogellenes, nem biztonságos,
        csalárd vagy jogosulatlan célból.
      </p>

      <h2>3. Fogyasztói és üzleti vásárlók</h2>
      <p>3.1 A MisaElectro fogyasztóknak és üzleti vásárlóknak egyaránt értékesít.</p>
      <p>
        3.2 A &bdquo;Fogyasztó&rdquo; olyan magánszemélyt jelent, aki teljes egészében vagy főként a szakmai, üzleti,
        kézműves vagy foglalkozási tevékenységén kívül jár el.
      </p>
      <p>
        3.3 Az &bdquo;Üzleti vásárló&rdquo; bármely olyan személyt, céget, egyéni vállalkozót, vállalkozót, szerelőt,
        viszonteladót, szervezetet, közintézményt vagy szakembert jelent, aki üzleti, kereskedelmi,
        szakipari, viszonteladási, szerelési vagy professzionális célból vásárol árut.
      </p>
      <p>
        3.4 A jelen Feltételekben leírt egyes jogok, beleértve a fogyasztók törvényes elállási jogát, csak a
        fogyasztókra vonatkoznak, és nem vonatkoznak az üzleti vásárlókra, kivéve, ha a jogszabály másként rendelkezik.
      </p>
      <p>
        3.5 Az üzleti vásárlóktól elvárható, hogy megfelelő műszaki ismeretekkel vagy szakmai tanácsadással rendelkezzenek
        az elektromos áruk vásárlása előtt. Az üzleti vásárlók felelősek minden
        műszaki jellemző, névleges érték, kompatibilitás, alkalmasság, megfelelőségi követelmény és szerelési
        feltétel ellenőrzéséért a megrendelés leadása előtt.
      </p>

      <h2>4. Termékinformációk és rendelkezésre állás</h2>
      <p>
        4.1 Törekszünk annak biztosítására, hogy a webhelyen megjelenített termékleírások, képek, árak, műszaki adatok, készletállapot és
        egyéb információk pontosak és naprakészek legyenek.
      </p>
      <p>
        4.2 A termékképek kizárólag illusztrációs célt szolgálnak. A tényleges áruk kismértékben eltérhetnek a
        képektől a gyártói frissítések, csomagolásmódosítások, megvilágítás, képernyőbeállítások, színbeli
        eltérések, gyártási tételek közötti eltérések vagy műszaki fejlesztések miatt.
      </p>
      <p>
        4.3 A termékek műszaki jellemzői a gyártók, beszállítók, forgalmazók
        vagy termékadatbázisok által szolgáltatott információkon alapulhatnak. Bár észszerű gondossággal járunk el, nem garantáljuk, hogy minden
        termékadat mentes a hibáktól, hiányosságoktól vagy frissítésektől.
      </p>
      <p>
        4.4 Megrendelés leadása előtt Ön felelős annak ellenőrzéséért, hogy a termék alkalmas-e a
        tervezett célra, beleértve, de nem kizárólagosan a következőket:
      </p>
      <ul>
        <li>feszültség és elektromos névleges érték;</li>
        <li>áram-, terhelés-, teljesítmény- és energiaigény;</li>
        <li>méretek és beépítési tér;</li>
        <li>kábeltípus, kábelméret és csatlakoztatási követelmények;</li>
        <li>IP-védettség és környezeti alkalmasság;</li>
        <li>beltéri vagy kültéri alkalmasság;</li>
        <li>kompatibilitás a meglévő rendszerekkel, szerelvényekkel, eszközökkel és berendezésekkel;</li>
        <li>szabályozási, biztonsági és szerelési követelmények az adott országban vagy régióban.</li>
      </ul>
      <p>
        4.5 Ha nem biztos abban, hogy egy termék alkalmas-e a tervezett felhasználásra, a megrendelés előtt vegye fel velünk a
        kapcsolatot, vagy kérjen tanácsot szakképzett villanyszerelőtől vagy hozzáértő szakembertől.
      </p>
      <p>
        4.6 A termékek rendelkezésre állása nem garantált mindaddig, amíg megrendelését el nem fogadtuk és fel nem dolgoztuk.
        Törölhetünk vagy késleltethetünk egy megrendelést, ha egy termék elérhetetlenné válik, kivezetésre kerül, hibásan
        van feltüntetve, vagy észszerű befolyásunkon kívül eső okokból nem szállítható.
      </p>

      <h2>5. Elektromos biztonság, szerelés és használat</h2>
      <p>
        5.1 Az elektromos termékek veszélyesek lehetnek, ha helytelenül választják ki, szerelik, csatlakoztatják, módosítják,
        túlterhelik vagy használják őket.
      </p>
      <p>
        5.2 Minden terméket kizárólag a rendeltetési céljának megfelelően, valamint a gyártó összes utasításának,
        biztonsági figyelmeztetésének, szerelési kézikönyvének, feszültségi névleges értékének, terhelési korlátjának, műszaki
        jellemzőjének, az alkalmazandó jogszabályoknak, építési előírásoknak, elektromos szabványoknak és helyi követelményeknek megfelelően kell használnia.
      </p>
      <p>
        5.3 Az elektromos szerelést, huzalozást, csatlakoztatást, tesztelést, üzembe helyezést vagy
        elektromos rendszerbe történő integrálást igénylő termékeket kizárólag szakképzett villanyszerelőnek vagy hozzáértő
        szakembernek kell beszerelnie, amennyiben ez szükséges vagy indokolt.
      </p>
      <p>
        5.4 A MisaElectro nem nyújt elektromos mérnöki, szerelési, megfelelőségi, ellenőrzési,
        tanúsítási vagy biztonsági jóváhagyási szolgáltatásokat a webhelyen keresztül.
      </p>
      <p>
        5.5 A MisaElectro által nyújtott bármely útmutatás, termékleírás, kompatibilitási megjegyzés vagy ügyfélszolgálati válasz
        kizárólag általános tájékoztatás, és nem tekinthető a szakmai
        tanácsadás, elektromos ellenőrzés vagy megfelelőségi értékelés helyettesítőjének.
      </p>
      <p>
        5.6 Nem vállalunk felelősséget a helytelen szerelés, helytelen termékkiválasztás,
        rendeltetésellenes használat, túlterhelés, jogosulatlan módosítás, harmadik fél által végzett munka, az utasítások be nem tartása vagy a termék
        rendeltetési célján kívüli használat által okozott károkért, veszteségekért, sérülésekért, meghibásodásokért, meg nem felelésért, sikertelen
        szerelésért vagy biztonsági eseményekért.
      </p>

      <h2>6. Fiókok, szakipari vásárlók és Pro hozzáférés</h2>
      <p>
        6.1 Lehetősége lehet fiók létrehozására, vagy szakipari, professzionális vagy üzleti vásárlói
        hozzáférés igénylésére a webhelyen.
      </p>
      <p>
        6.2 Saját belátásunk szerint jóváhagyhatunk, elutasíthatunk, felfüggeszthetünk vagy eltávolíthatunk bármely fiókot, szakipari fiókot, árazási hozzáférést vagy
        professzionális hozzáférést.
      </p>
      <p>
        6.3 További információkat kérhetünk személyazonossága, üzleti státusza, szakmai
        tevékenysége, áfa-/adóadatai, szállítási címe vagy egyéb releváns információk ellenőrzéséhez.
      </p>
      <p>
        6.4 Ön felelős fiókja bejelentkezési adatainak biztonságos megőrzéséért. Haladéktalanul értesítenie kell minket,
        ha úgy véli, hogy fiókjához jogosulatlanul hozzáfértek.
      </p>
      <p>
        6.5 Nem vállalunk felelősséget a fiókadatai biztonságos megőrzésének elmulasztásából eredő veszteségekért,
        kivéve, ha a jogszabály másként rendelkezik.
      </p>

      <h2>7. Megrendelések és a szerződés létrejötte</h2>
      <p>
        7.1 A megrendelés leadásával Ön ajánlatot tesz a kiválasztott áruk megvásárlására a jelen
        Feltételeknek megfelelően.
      </p>
      <p>
        7.2 A megrendelés leadását követően rendelésvisszaigazolást vagy fizetési visszaigazolást kaphat. Ez
        nem jelenti automatikusan azt, hogy megrendelését elfogadtuk.
      </p>
      <p>
        7.3 Az Ön és a MisaElectro közötti szerződés csak akkor jön létre, amikor elfogadjuk megrendelését, teljesítés céljából
        feldolgozzuk, vagy elküldjük az árut, attól függően, hogy melyik következik be előbb.
      </p>
      <p>7.4 Az elfogadás előtt bármely megrendelést elutasíthatunk, törölhetünk vagy korlátozhatunk, amennyiben:</p>
      <ul>
        <li>a termék nem elérhető;</li>
        <li>a termék, az ár, a szállítási költség vagy a leírás hibát tartalmaz;</li>
        <li>a fizetés nincs engedélyezve, vagy visszavonásra kerül;</li>
        <li>csalás, visszaélés, gyanús tevékenység vagy rendeltetésellenes használat gyanúja merül fel;</li>
        <li>a szállítás nem elérhető a kért rendeltetési helyre;</li>
        <li>vámügyi, szankciós, exportügyi, fizetésfeldolgozói, fuvarozói vagy jogi korlátozások érvényesek;</li>
        <li>a megrendelés jogosulatlan viszonteladási vagy jogellenes célból leadottnak tűnik;</li>
        <li>nem tudjuk ellenőrizni a szükséges vásárlói, számlázási vagy szállítási információkat.</li>
      </ul>
      <p>
        7.5 Ha a fizetés beszedése után törlünk egy megrendelést, visszatérítjük a törölt árukért fizetett
        összeget, kivéve, ha jogszabály kötelez a fizetés visszatartására, vagy a tranzakció
        csalás, visszaterhelés, szankciók vagy megfelelőségi felülvizsgálat tárgyát képezi.
      </p>

      <h2>8. Árak, áfa és pénznemek</h2>
      <p>8.1 A webhely az árakat EUR, RON és HUF pénznemben jelenítheti meg.</p>
      <p>
        8.2 A webhelyen megjelenített árak adott esetben tartalmazzák az áfát, kivéve, ha egyértelműen másként van feltüntetve.
      </p>
      <p>
        8.3 A megrendeléséért fizetendő végleges ár a pénztárnál, a fizetés véglegesítése előtt jelenik meg.
      </p>
      <p>
        8.4 Az árak bármikor, előzetes értesítés nélkül változhatnak. A változások nem érintik a már elfogadott megrendeléseket,
        kivéve, ha egyértelmű árhiba történt.
      </p>
      <p>
        8.5 Fenntartjuk a jogot a nyilvánvaló árazási, pénznem-, adó-, kedvezmény- vagy termékhibák kijavítására. Ha
        egy hiba érinti az Ön által leadott megrendelést, felvehetjük Önnel a kapcsolatot annak megerősítésére, hogy a javított
        áron kíván-e folytatni, vagy törli a megrendelést.
      </p>
      <p>
        8.6 A pénznemátváltás, a banki díjak, a külföldi tranzakciós díjak, a kártyakibocsátói díjak vagy az árfolyam-különbségek
        a vásárló felelősségi körébe tartoznak, és nem a MisaElectro befolyása alatt állnak.
      </p>

      <h2>9. Fizetési feltételek</h2>
      <p>9.1 A fizetést a pénztárnál kell teljesíteni.</p>
      <p>9.2 Biztonságos kártyás fizetéseket fogadunk el, beleértve a Visa és Mastercard kártyákat.</p>
      <p>
        9.3 A fizetéseket biztonságos, harmadik fél fizetési szolgáltatók dolgozzák fel. A MisaElectro nem tárolja az Ön teljes
        kártyaszámát vagy teljes kártyabiztonsági adatait.
      </p>
      <p>
        9.4 Megrendelését nem dolgozzuk fel mindaddig, amíg a fizetést sikeresen nem engedélyezték vagy nem kaptuk meg.
      </p>
      <p>
        9.5 Ha fizetését elutasítják, visszavonják, vitatják, visszaterhelik vagy gyanúsként jelölik meg, felfüggeszthetjük,
        törölhetjük vagy késleltethetjük megrendelését.
      </p>
      <p>
        9.6 Nem szabad csalárd fizetést teljesítenie, jogosulatlan fizetési módot használnia, vagy megkísérelnie a
        fizetési, biztonsági, ellenőrzési vagy csalásmegelőzési intézkedések megkerülését.
      </p>
      <p>
        9.7 Üzleti vásárlók számára adott esetben áfás számlát vagy kereskedelmi számlát bocsáthatunk ki, amennyiben
        elegendő számlázási információt bocsátottak rendelkezésünkre.
      </p>

      <h2>10. Kedvezmények, akciók és ingyenes szállítás</h2>
      <p>
        10.1 A MisaElectro időről időre kedvezményeket, promóciós kódokat, különleges árakat, ingyenes
        szállítási küszöbértékeket vagy szakipari árazást kínálhat.
      </p>
      <p>
        10.2 Eltérő rendelkezés hiányában az ingyenes szállítás a &euro;100 / &pound;100 / $100 feletti jogosult megrendelésekre vonatkozik.
      </p>
      <p>
        10.3 Az ingyenes szállítási küszöbérték a termékek kedvezmények utáni részösszege alapján kerül kiszámításra, a
        vámok, importadók, további helyi díjak vagy különleges szállítási szolgáltatások előtt.
      </p>
      <p>
        10.4 Az ingyenes szállítás nem vonatkozhat bizonyos rendeltetési helyekre, túlméretes árukra, nehéz árukra, korlátozott
        árukra, egyedi rendelésű árukra vagy különleges kezelést igénylő termékekre.
      </p>
      <p>
        10.5 A promóciós kódok és kedvezmények bármikor visszavonhatók, módosíthatók, elutasíthatók vagy törölhetők,
        amennyiben visszaélés, hiba, csalás vagy technikai visszaélés gyanúja merül fel.
      </p>
      <p>
        10.6 Az akciók készpénzre nem válthatók, és más ajánlatokkal nem vonhatók össze, kivéve, ha egyértelműen
        fel van tüntetve.
      </p>

      <h2>11. Szállítás és feladás</h2>
      <p>11.1 A MisaElectro a megrendeléseket az Egyesült Királyságból adja fel.</p>
      <p>
        11.2 A szállítás a webhelyen vagy a pénztárnál feltüntetett támogatott szállítási rendeltetési helyekre érhető el.
      </p>
      <p>
        11.3 Jelenleg csak normál szállítást kínálunk. Az expressz szállítás nem érhető el, kivéve, ha kifejezetten
        fel van tüntetve a pénztárnál.
      </p>
      <p>
        11.4 A szállítási idők csak becslések, és a feladás dátumától kezdődnek, nem pedig a megrendelés
        leadásának dátumától.
      </p>
      <p>11.5 A becsült szállítási idők általában a következők:</p>
      <table>
        <thead>
          <tr>
            <th>Rendeltetési hely</th>
            <th>Becsült szállítási idő a feladástól</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Egyesült Királyság</td><td>1&ndash;3 munkanap</td></tr>
          <tr><td>Európa</td><td>3&ndash;7 munkanap</td></tr>
          <tr><td>Észak-Amerika</td><td>5&ndash;10 munkanap</td></tr>
          <tr><td>Ázsia és Óceánia</td><td>7&ndash;14 munkanap</td></tr>
          <tr><td>Afrika és Dél-Amerika</td><td>8&ndash;15 munkanap</td></tr>
        </tbody>
      </table>
      <p>
        11.6 Az európai és nemzetközi szállításokat a DHL, partnerfuvarozók, helyi futárszolgálatok
        vagy más logisztikai szolgáltatók kezelhetik.
      </p>
      <p>
        11.7 A szállítási időket befolyásolhatják a befolyásunkon kívül eső tényezők, beleértve a vámkezelést,
        a helyi futárszolgálati kezelést, a távoli vagy vidéki szállítási területeket, a hiányos szállítási információkat, a
        munkaszüneti napokat, az időjárási körülményeket, a szállítási fennakadásokat, a sztrájkokat, a biztonsági ellenőrzéseket, az importellenőrzéseket vagy a
        fuvarozói késéseket.
      </p>
      <p>
        11.8 Ön felelős a teljes és pontos szállítási cím megadásáért. Nem vállalunk
        felelősséget az Ön által megadott helytelen vagy hiányos információk miatt sikertelen, késedelmes vagy rossz irányba
        küldött szállításért.
      </p>
      <p>11.9 A megrendelés feladását követően a szállítási cím módosítása esetleg nem lehetséges.</p>
      <p>
        11.10 Ha egy csomagot azért küldenek vissza hozzánk, mert Ön helytelen címet adott meg, nem vette át azt,
        megtagadta az átvételt, vagy nem teljesítette a vám- vagy futárszolgálati követelményeket, bármely visszatérítésből levonhatjuk a szállítási
        költségeket, a visszaküldési költségeket, a vámdíjakat, a fuvarozói díjakat és egyéb észszerű költségeket,
        kivéve, ha ezt jogszabály tiltja.
      </p>

      <h2>12. Nemzetközi megrendelések, vám és importdíjak</h2>
      <p>
        12.1 Az Egyesült Királyságon kívüli szállítások esetén megrendelése vámkezelés,
        importvámok, import-áfa, adók, ügynöki díjak, kezelési díjak, fuvarozói díjak vagy egyéb helyi
        díjak tárgyát képezheti.
      </p>
      <p>
        12.2 Kivéve, ha a pénztárnál kifejezetten másként van feltüntetve, Ön felelős a rendeltetési országban fizetendő valamennyi vámért,
        import-áfáért, adóért, ügynöki díjért és helyi díjért.
      </p>
      <p>
        12.3 A MisaElectrónak nincs befolyása a vámkezelési időkre, a vámhatósági döntésekre, az importkorlátozásokra,
        a helyi adómegállapításokra, illetve a hatóságok, futárszolgálatok vagy vámügynökök által kivetett díjakra.
      </p>
      <p>
        12.4 Ön felelős annak biztosításáért, hogy az Ön által megrendelt áruk jogszerűen importálhatók és felhasználhatók legyenek
        az Ön országában vagy régiójában.
      </p>
      <p>
        12.5 Ha egy megrendelést a vám vagy a helyi hatóságok késleltetnek, visszaküldenek, lefoglalnak, elutasítanak vagy megsemmisítenek
        importkorlátozások, kifizetetlen díjak, az Ön által megadott helytelen információk vagy a helyi
        követelmények be nem tartása miatt, a MisaElectro nem vállal felelősséget az ebből eredő veszteségért,
        késedelemért vagy költségekért, kivéve, ha jogszabály másként rendelkezik.
      </p>

      <h2>13. Kockázat és tulajdonjog</h2>
      <p>
        13.1 Az áruk tulajdonjoga csak akkor száll át Önre, amikor megkaptuk az árukért és bármely alkalmazandó szállítási díjért
        járó teljes fizetést.
      </p>
      <p>
        13.2 Fogyasztói megrendelések esetén az árukkal kapcsolatos kockázat akkor száll át Önre, amikor az árukat átadják Önnek vagy egy Ön által
        az átvételre kijelölt személynek.
      </p>
      <p>
        13.3 Üzleti vásárlói megrendelések esetén a kockázat akkor száll át Önre, amikor az árukat kiszállítják a szállítási
        címre, átadják az első fuvarozónak kiszállítás céljából, vagy más módon átvételre rendelkezésre bocsátják,
        az egyeztetett vagy alkalmazott szállítási módtól függően.
      </p>
      <p>
        13.4 Ön felelős az áruk átvételkori megvizsgálásáért, valamint biztonságos és megfelelő tárolásáért.
      </p>

      <h2>14. Fogyasztói elállási jog</h2>
      <p>
        14.1 Ha Ön fogyasztó, törvényes joga lehet a jogosult online vásárlásoktól való elállásra az áruk átvételét követő 14
        napon belül, indokolás nélkül.
      </p>
      <p>
        14.2 Az elállási időszak azon nap után 14 nappal jár le, amikor Ön vagy egy Ön által kijelölt
        személy átveszi az árut.
      </p>
      <p>
        14.3 Ha megrendelését több csomagban szállítják ki, az elállási időszak általában azon nap után 14
        nappal jár le, amikor Ön átveszi az utolsó csomagot.
      </p>
      <p>
        14.4 Elállási jogának gyakorlásához az elállási időszak lejárta előtt egyértelműen tájékoztatnia kell minket e-mailben az info@misaelectro.ro
        címen.
      </p>
      <p>
        14.5 Miután értesített minket arról, hogy el kíván állni, indokolatlan késedelem nélkül, de legkésőbb az elállásról szóló
        értesítés napjától számított 14 napon belül vissza kell küldenie nekünk az árut.
      </p>
      <p>
        14.6 A visszaküldött áruknak használatlannak, be nem szereltnek, hiánytalannak, lehetőség szerint eredeti csomagolásban,
        minden tartozékkal, kézikönyvvel, címkével, védőanyaggal és mellékelt tétellel együtt kell lenniük.
      </p>
      <p>
        14.7 Ön felelős a visszaküldés szállítási költségeiért, kivéve, ha az áru hibás, sérült, helytelen,
        vagy írásban másként állapodtunk meg.
      </p>
      <p>
        14.8 Csökkenthetjük a visszatérítést, hogy tükrözzük az áru értékének azon csökkenését, amelyet az áru jellegének,
        tulajdonságainak és működésének megállapításához szükségesen túlmenő kezelés okozott.
      </p>
      <p>
        14.9 A jogszabályban előírt esetekben visszatérítjük az eredeti szállításért fizetett alapszintű normál szállítási költséget.
        A további szállítási költségek, a felminősített szolgáltatások, a nemzetközi díjak, a vámdíjak,
        az importvámok, az ügynöki díjak vagy a különleges szállítási költségek nem feltétlenül téríthetők vissza, kivéve, ha jogszabály
        másként rendelkezik.
      </p>
      <p>14.10 A visszatérítéseket lehetőség szerint az eredeti fizetési módra teljesítjük.</p>

      <h2>15. Vissza nem küldhető és korlátozottan visszaküldhető tételek</h2>
      <p>
        15.1 Bizonyos áruk meggondolás esetén nem küldhetők vissza, kivéve, ha hibásak, sérültek,
        helytelenek, vagy a visszaküldési jogokat jogszabály írja elő.
      </p>
      <p>15.2 A vissza nem küldhető vagy korlátozottan visszaküldhető tételek közé tartozhatnak:</p>
      <ul>
        <li>rendelésre készített áruk;</li>
        <li>kifejezetten az Ön számára rendelt áruk;</li>
        <li>méretre vágott áruk, beleértve a kábelt vagy hasonló anyagokat;</li>
        <li>testreszabott, módosított, összeszerelt vagy megváltoztatott áruk;</li>
        <li>beszerelt, huzalozott, csatlakoztatott, tesztelt, üzembe helyezett vagy használt elektromos áruk;</li>
        <li>a kiszállítás után megsérült áruk;</li>
        <li>hiányzó alkatrészekkel, tartozékokkal, csomagolással, kézikönyvekkel, címkékkel, zárófóliákkal vagy védőanyagokkal rendelkező áruk;</li>
        <li>azok az áruk, amelyek már nem értékesíthető állapotban vannak;</li>
        <li>helytelen tárolás, nedvesség, hő, ütés, szennyeződés, rendeltetésellenes használat vagy jogosulatlan kezelés által érintett áruk;</li>
        <li>kifutó, végkiárusítású vagy kivezetett tételek, ahol a visszaküldési korlátozások egyértelműen fel vannak tüntetve és jogszerűek.</li>
      </ul>
      <p>
        15.3 Ez a szakasz nem korlátozza az Ön törvényes jogait, ha az áru hibás, nem a leírásnak megfelelő, nem biztonságos,
        vagy más módon nem felel meg az alkalmazandó jogszabályoknak.
      </p>

      <h2>16. Hibás, sérült vagy helytelen áruk</h2>
      <p>
        16.1 Ha az áru sérülten, hibásan, hiányosan vagy helytelenül érkezik, a lehető leghamarabb vegye fel velünk a
        kapcsolatot az info@misaelectro.ro címen.
      </p>
      <p>
        16.2 Kérjük, adja meg megrendelési számát, a probléma leírását, valamint lehetőség szerint egyértelmű fényképeket vagy videókat,
        amelyek bemutatják az árut, a csomagolást, a címkéket, a sérülést vagy a hibát.
      </p>
      <p>
        16.3 Kérjük, őrizze meg a terméket, a csomagolást, a címkéket és a szállítási anyagokat, amíg a problémát
        felül nem vizsgáltuk, mivel ezekre szükség lehet fuvarozói igényekhez, beszállítói vizsgálathoz vagy jótállási értékeléshez.
      </p>
      <p>
        16.4 Látható szállítási sérülés esetén kérjük, lehetőség szerint a kiszállítást követő 48 órán belül értesítsen minket. Ez
        segít nekünk a futárszolgálati problémák gyors kivizsgálásában, de nem szünteti meg az Önt esetlegesen megillető kötelező érvényű
        törvényes jogokat.
      </p>
      <p>
        16.5 Ha megerősítést nyer, hogy az áru hibás, a kiszállítás előtt megsérült, helytelen, vagy más módon nem felel meg
        a szerződésnek, az alkalmazandó jogszabályoknak megfelelően javítást, cserét, visszatérítést, részleges visszatérítést vagy más
        jogorvoslatot kínálhatunk.
      </p>
      <p>
        16.6 A visszatérítés, csere vagy jótállási jogorvoslat jóváhagyása előtt kérhetjük az áru
        visszaküldését vizsgálat céljából.
      </p>
      <p>
        16.7 Ha megerősítést nyer, hogy az áru hibás, sérült vagy helytelen, fedezzük az észszerű visszaküldési
        szállítási költségeket, vagy visszaküldési utasításokat adunk.
      </p>
      <p>
        16.8 Nem vállalunk felelősséget a helytelen szerelés, rendeltetésellenes használat,
        túlterhelés, jogosulatlan módosítás, külső sérülés, alkalmatlan környezet, helytelen tárolás,
        harmadik fél által végzett munka, az utasítások be nem tartása, feszültséglökések, kopás és elhasználódás vagy a termék
        rendeltetési célján kívüli használat által okozott hibákért vagy károkért.
      </p>

      <h2>17. Törvényes jótállás és törvényes jogok</h2>
      <p>
        17.1 A fogyasztókat az alkalmazandó fogyasztóvédelmi jogszabályok alapján törvényes jogok illethetik meg, ha az áru
        hibás, nem a leírásnak megfelelő, nem alkalmas a célra, nem biztonságos, vagy nem felel meg a szerződésnek.
      </p>
      <p>
        17.2 Az uniós fogyasztók esetében az alkalmazandó fogyasztói jog legalább 2 éves törvényes jótállást biztosíthat az áru átvételének
        napjától, amely fedezi a kiszállítás időpontjában fennálló, és a törvényes jótállási időszak
        alatt megjelenő hibákat vagy megfelelőségi hiányosságokat.
      </p>
      <p>
        17.3 Az Egyesült Királyságbeli fogyasztók esetében az alkalmazandó egyesült királyságbeli fogyasztói jog szerinti törvényes jogok érvényesek. Ezek a jogok
        magukban foglalhatnak jogorvoslatokat, ha az áru hibás, nem a leírásnak megfelelő, vagy nem alkalmas a célra.
      </p>
      <p>
        17.4 Ezek a törvényes jogok elkülönülnek a MisaElectro által kínált bármely gyártói jótállástól,
        kereskedelmi jótállástól, kiegészítő jótállástól vagy visszaküldési szabályzattól, és azok nem korlátozzák ezeket.
      </p>
      <p>
        17.5 Az üzleti vásárlók nem részesülnek a fogyasztók törvényes elállási jogában, és a fogyasztóknál
        korlátozottabb jogokkal rendelkezhetnek, kivéve, ha kötelező jogszabály másként rendelkezik.
      </p>

      <h2>18. Kiegészítő jótállás</h2>
      <p>18.1 A MisaElectro fizetős kiegészítő jótállási lehetőségeket kínálhat kiválasztott termékekre.</p>
      <p>18.2 A kiegészítő jótállás opcionális, és ahol elérhető, a pénztárnál megvásárolható.</p>
      <p>
        18.3 Kivéve, ha a termékoldalon vagy a pénztárnál másként van feltüntetve, a kiegészítő jótállás ára a
        következőképpen kerül kiszámításra:
      </p>
      <table>
        <thead>
          <tr>
            <th>Kiegészítő jótállási lehetőség</th>
            <th>Ár</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>+1 év kiegészítő jótállás</td><td>a termékár 10%-a, legalább &euro;6.99 / &pound;6.99 / $6.99</td></tr>
          <tr><td>+2 év kiegészítő jótállás</td><td>a termékár 16%-a, legalább &euro;9.99 / &pound;9.99 / $9.99</td></tr>
          <tr><td>+3 év kiegészítő jótállás</td><td>a termékár 22%-a, legalább &euro;12.99 / &pound;12.99 / $12.99</td></tr>
        </tbody>
      </table>
      <p>
        18.4 A kiegészítő jótállás ára a termékár alapján kerül kiszámításra, a szállítási díjak,
        vámok, importadók, ügynöki díjak vagy egyéb helyi díjak előtt.
      </p>
      <p>
        18.5 A kiegészítő jótállás az Ön törvényes jogain felül kínált kereskedelmi jótállás. Ez
        nem helyettesíti, csökkenti vagy korlátozza az Önt esetlegesen megillető kötelező érvényű törvényes jogokat.
      </p>
      <p>
        18.6 Eltérő rendelkezés hiányában a kiegészítő jótállás fedezete az adott termékre alkalmazandó eredeti
        jótállás, törvényes jótállás, gyártói jótállás vagy standard jótállási időszak lejárta után kezdődik.
      </p>
      <p>
        18.7 A kiegészítő jótállás fedezi a jogosult gyártási hibákat és anyaghibákat, amelyek a termék normál
        használata során merülnek fel a gyártó utasításainak és az alkalmazandó
        műszaki követelményeknek megfelelően.
      </p>
      <p>18.8 A kiegészítő jótállás nem fedezi:</p>
      <ul>
        <li>a helytelen szerelést, huzalozást, csatlakoztatást, tesztelést vagy üzembe helyezést;</li>
        <li>a szakszerűtlen vagy jogosulatlan személy általi szerelést, ahol professzionális szerelés szükséges vagy indokolt;</li>
        <li>a rendeltetésellenes használatot, gondatlanságot, visszaélést, túlterhelést vagy a névleges jellemzőkön kívüli működtetést;</li>
        <li>a jogosulatlan javítást, módosítást, felnyitást, szétszerelést vagy átalakítást;</li>
        <li>a véletlen sérülést, ütéskárt, vízkárt, nedvességkárt, tűzkárt vagy külső sérülést;</li>
        <li>a feszültséglökések, instabil tápellátás, helytelen feszültség, villámlás vagy a tágabb hálózatban lévő elektromos hibák által okozott károkat;</li>
        <li>a normál kopást és elhasználódást;</li>
        <li>a funkcionalitást nem befolyásoló esztétikai sérülést;</li>
        <li>a fogyóeszközöket, elemeket, izzókat, biztosítékokat, tömítéseket, csatlakozókat, tartozékokat vagy elhasználódásra számított alkatrészeket, kivéve, ha kifejezetten fedezettek;</li>
        <li>az alkalmatlan tárolás, szállítás, környezet, szennyeződés, korrózió, por, páratartalom, vegyi anyagok vagy hőmérsékleti körülmények által okozott hibákat;</li>
        <li>a gyártó által megadott rendeltetési használaton kívüli célra használt termékeket;</li>
        <li>az elmaradt hasznot, munkaköltségeket, villanyszerelői költségeket, eltávolítási költségeket, újratelepítési költségeket, állásidőt vagy közvetett veszteségeket.</li>
      </ul>
      <p>
        18.9 Kiegészítő jótállási igény benyújtásához vegye fel velünk a kapcsolatot az info@misaelectro.ro címen, megadva megrendelési
        számát, a vásárlás igazolását, a hiba leírását, valamint észszerű kérés esetén alátámasztó fényképeket, videókat vagy diagnosztikai
        információkat.
      </p>
      <p>
        18.10 Bármely jótállási jogorvoslat jóváhagyása előtt kérhetjük a termék visszaküldését vizsgálat céljából.
      </p>
      <p>
        18.11 Ha egy érvényes kiegészítő jótállási igényt jóváhagynak, a terméktől és a
        körülményektől függően javítást, cserét, egyenértékű cserét, részleges visszatérítést vagy más
        észszerű jogorvoslatot biztosíthatunk.
      </p>
      <p>
        18.12 A kiegészítő jótállás a termékhez és az eredeti megrendeléshez kötődik. Nem átruházható,
        kivéve, ha ehhez írásban kifejezetten hozzájárulunk.
      </p>
      <p>
        18.13 Ha törvényes jogainak megfelelően törli vagy visszaküldi a terméket, mielőtt a kiegészítő
        jótállás megkezdődne, az adott termékre vásárolt kiegészítő jótállás is visszatérítésre kerül, ahol azt jogszabály
        előírja.
      </p>

      <h2>19. Üzleti vásárlókra vonatkozó feltételek</h2>
      <p>
        19.1 Az üzleti vásárlók felelősek minden termékjellemző, alkalmasság,
        kompatibilitás, megfelelőségi követelmény, szerelési követelmény és helyi szabályozási kötelezettség ellenőrzéséért
        a megrendelés előtt.
      </p>
      <p>
        19.2 Az üzleti vásárlóknak nincs általános joguk az áruk törlésére vagy visszaküldésére meggondolás,
        helytelen rendelés, feleslegben lévő készlet, alkalmatlan műszaki jellemző, vásárlói projektmódosítások vagy nem hibás
        áruk miatt, kivéve, ha írásban másként állapodunk meg.
      </p>
      <p>
        19.3 Az üzleti vásárlótól elfogadott bármely visszaküldés a mi belátásunkon múlik, és vizsgálat,
        visszakészletezési díjak, visszaküldési szállítási költségek, valamint a csökkentett viszonteladási érték miatti levonás tárgyát képezheti.
      </p>
      <p>
        19.4 Az üzleti vásárlóknak az árut a kiszállításkor haladéktalanul meg kell vizsgálniuk, és a lehető leghamarabb értesíteniük kell minket a látható sérülésekről,
        hiányokról, helytelen árukról vagy szállítási problémákról.
      </p>
      <p>
        19.5 A jogszabály által megengedett esetben az üzleti vásárlóval szembeni teljes felelősségünk bármely megrendelés esetén nem haladhatja meg
        az igényt megalapozó árukért fizetett árat.
      </p>
      <p>
        19.6 Nem vállalunk felelősséget az üzleti vásárlókkal szemben az elmaradt haszonért, bevételkiesésért, a
        szerződés elvesztéséért, üzleti lehetőség elvesztéséért, jó hírnév elvesztéséért, adatvesztésért, munkaköltségekért, szerelési
        költségekért, eltávolítási költségekért, újratelepítési költségekért, állásidőért, projektkésésekért, illetve közvetett vagy következményes
        veszteségekért.
      </p>

      <h2>20. Termékmegfelelőség és helyi szabályozások</h2>
      <p>
        20.1 A MisaElectro által értékesített termékeket meghatározott piacokra, szabványokra, feszültségrendszerekre, szerelvényekre
        vagy szerelési környezetekre tervezhették.
      </p>
      <p>
        20.2 Ön felelős annak ellenőrzéséért, hogy egy termék alkalmas és jogszerű-e a szerelésre,
        viszonteladásra, importra vagy használatra az Ön országában, régiójában, ingatlanjában, projektjében vagy elektromos rendszerében.
      </p>
      <p>
        20.3 Nem garantáljuk, hogy a MisaElectrótól vásárolt termékek megfelelnek minden helyi építési előírásnak,
        elektromos előírásnak, tanúsítási követelménynek, biztosítási követelménynek, munkahelyi követelménynek vagy projektspecifikációnak
        a termékoldalon kifejezetten feltüntetett információkon túl.
      </p>
      <p>
        20.4 Az üzleti vásárlók, szerelők, vállalkozók, viszonteladók és professzionális vásárlók felelősek
        a felhasználásukhoz, szerelésükhöz, viszonteladásukhoz vagy projektjükhöz szükséges összes engedély, jóváhagyás, ellenőrzés, tanúsítvány és szakmai
        jóváhagyás beszerzéséért.
      </p>

      <h2>21. Szellemi tulajdon</h2>
      <p>
        21.1 A webhelyen található minden tartalom, beleértve a szöveget, az elrendezést, a márkajelzést, a logókat, a grafikákat, az ikonokat, a
        termékleírásokat, a fényképeket, a videókat, a designelemeket és egyéb anyagokat, a MisaElectro,
        a MISARELIANA S.R.L., a beszállítók, gyártók, licencadók vagy más jogtulajdonosok tulajdonát képezi.
      </p>
      <p>
        21.2 A webhelyet kizárólag személyes, üzleti vagy vásárlási célra használhatja a jelen
        Feltételeknek megfelelően.
      </p>
      <p>
        21.3 Nem másolhat, reprodukálhat, gyűjthet le, vonhat ki, terjeszthet, értékesíthet, módosíthat, tehet közzé, vagy
        aknázhat ki kereskedelmileg semmilyen webhelytartalmat előzetes írásbeli engedélyünk nélkül.
      </p>
      <p>
        21.4 Egy termék megvásárlása nem ruház át semmilyen szellemi tulajdonjogot a termékre, márkára,
        designra, szoftverre, dokumentációra vagy kapcsolódó anyagokra vonatkozóan, kivéve a megvásárolt termék jogszerű és
        rendeltetésszerű használatának jogát.
      </p>

      <h2>22. A webhely használata és tiltott magatartás</h2>
      <p>22.1 Nem használhatja vissza a webhelyet.</p>
      <p>22.2 Tilos:</p>
      <ul>
        <li>jogosulatlan hozzáférést kísérelni a webhelyhez, szerverekhez, rendszerekhez, fiókokhoz vagy adatokhoz;</li>
        <li>zavarni a webhely biztonságát, működését vagy elérhetőségét;</li>
        <li>botokat, adatgyűjtőket, keresőrobotokat, automatizált eszközöket vagy adatkinyerési módszereket használni engedély nélkül;</li>
        <li>rosszindulatú kódot, vírusokat vagy káros anyagokat feltölteni;</li>
        <li>csalárd, hamis, visszaélésszerű vagy spekulatív megrendeléseket leadni;</li>
        <li>más személynek vagy vállalkozásnak kiadni magát;</li>
        <li>a webhelyet jogellenes, káros, félrevezető vagy tiltott célokra használni;</li>
        <li>megkísérelni a földrajzi, fizetési, biztonsági, csalásmegelőzési vagy szankciós ellenőrzések megkerülését.</li>
      </ul>
      <p>
        22.3 Korlátozhatjuk, felfüggeszthetjük vagy megszüntethetjük a webhelyhez való hozzáférést, ha visszaélésre, csalásra,
        biztonsági kockázatra, a jelen Feltételek megszegésére vagy jogellenes tevékenységre gyanakszunk.
      </p>

      <h2>23. Szankciók, exportellenőrzések és korlátozott rendeltetési helyek</h2>
      <p>
        23.1 Bármely megrendelést elutasíthatunk, törölhetünk, felfüggeszthetünk vagy blokkolhatunk, ha ez szükséges vagy indokolt
        szankciók, exportellenőrzések, pénzügyi bűncselekmények elleni ellenőrzések, fizetésfeldolgozói szabályok, futárszolgálati korlátozások,
        vámkorlátozások vagy jogi kötelezettségek miatt.
      </p>
      <p>
        23.2 Ellenőrizhetjük a megrendeléseket, vásárlókat, számlázási adatokat, szállítási címeket, fizetési információkat és
        rendeltetési helyeket az alkalmazandó szankciós, korlátozott felekre vonatkozó, csalásmegelőzési és megfelelőségi
        követelmények alapján.
      </p>
      <p>
        23.3 Nem fogadhatunk el olyan megrendeléseket, amelyek teljesítése sértené az alkalmazandó jogszabályokat, szankciókat, exportellenőrzéseket,
        fuvarozói szabályokat, fizetésfeldolgozói követelményeket vagy belső megfelelőségi ellenőrzéseket.
      </p>
      <p>
        23.4 Ön megerősíti, hogy nem áll szankciók hatálya alatt, nem tartózkodik korlátozott területen, és
        nem vásárol árut az alkalmazandó szankciók, exportellenőrzések vagy jogszabályok megsértésével történő exportra, viszonteladásra, átadásra
        vagy felhasználásra.
      </p>
      <p>
        23.5 Nem vállalunk felelősséget a szankciók, exportellenőrzések, vámkorlátozások, fizetésfeldolgozói szabályok vagy jogi megfelelőségi
        követelmények által okozott veszteségekért, késésekért, törlésekért vagy blokkolt tranzakciókért.
      </p>

      <h2>24. Adatvédelem és cookie-k</h2>
      <p>24.1 A személyes adatokat az Adatvédelmi szabályzatunknak megfelelően kezeljük.</p>
      <p>
        24.2 A webhely a Cookie-szabályzatunknak megfelelően cookie-kat és hasonló technológiákat használ.
      </p>
      <p>
        24.3 A webhely használatával Ön tudomásul veszi, hogy személyes adatai kezelhetők olyan célokból,
        mint a megrendelés teljesítése, fizetésfeldolgozás, szállítás, ügyfélszolgálat, csalásmegelőzés, jogi
        megfelelőség, fiókkezelés, elemzés és szolgáltatásfejlesztés.
      </p>

      <h2>25. Felelősség korlátozása</h2>
      <p>
        25.1 A jelen Feltételekben semmi sem zárja ki vagy korlátozza a felelősséget, ha ez jogellenes lenne,
        beleértve a gondatlanság, csalás, csalárd megtévesztés által okozott halálért vagy személyi sérülésért való
        felelősséget, illetve bármely olyan felelősséget, amely az alkalmazandó jogszabályok szerint nem zárható ki.
      </p>
      <p>25.2 A jelen Feltételekben semmi sem korlátozza az Ön fogyasztóként fennálló kötelező érvényű törvényes jogait.</p>
      <p>25.3 A 25.1 és 25.2 szakasz függvényében a MisaElectro nem felelős a következőkért:</p>
      <ul>
        <li>közvetett, járulékos, különleges, következményes vagy büntető jellegű veszteségek;</li>
        <li>elmaradt haszon, bevétel, üzlet, lehetőség, szerződés, jó hírnév vagy várt megtakarítások elvesztése;</li>
        <li>adatvesztés vagy rendszerkimaradás;</li>
        <li>munka-, szerelési, eltávolítási, újratelepítési, tesztelési, ellenőrzési, tanúsítási vagy vállalkozói költségek;</li>
        <li>projektkésések, üzemi állásidő vagy üzletmenet megszakadása;</li>
        <li>a helytelen termékkiválasztás, szerelés, rendeltetésellenes használat, túlterhelés, jogosulatlan módosítás vagy az utasítások be nem tartása által okozott veszteségek;</li>
        <li>az észszerű befolyásunkon kívül eső események által okozott veszteségek.</li>
      </ul>
      <p>
        25.4 A termékeket helyesen kell kiválasztani, beszerelni és használni. Nem vállalunk felelősséget a
        helytelen szerelésből, nem biztonságos szerelésből, illetve a gyártó utasításaival vagy az alkalmazandó szabályozásokkal ellentétes
        használatból eredő következményekért.
      </p>
      <p>
        25.5 Ha Ön üzleti vásárló, a jogszabály által megengedett legteljesebb mértékig a bármely megrendeléssel kapcsolatos teljes
        felelősségünk nem haladja meg az igényt megalapozó árukért fizetett
        összeget.
      </p>

      <h2>26. Befolyásunkon kívül eső események</h2>
      <p>
        26.1 Nem vállalunk felelősséget kötelezettségeink teljesítésének elmulasztásáért vagy késedelméért, ha azt az
        észszerű befolyásunkon kívül eső események okozzák.
      </p>
      <p>
        26.2 Ilyen események közé tartozhat az ellátási lánc fennakadása, a gyártói késedelem, a szállítási fennakadás,
        a futárszolgálati hiba, a vámkésedelem, sztrájkok, munkaügyi viták, szélsőséges időjárás, természeti katasztrófák, tűz,
        árvíz, háború, terrorizmus, polgári zavargás, járvány, világjárvány, kormányzati intézkedés, szabályozási változás,
        szankciók, áramszünet, internetkimaradás, műszaki hiba vagy egyéb, az észszerű befolyásunkon kívül eső
        körülmények.
      </p>
      <p>
        26.3 Ha egy ilyen esemény érinti megrendelését, észszerű lépéseket teszünk a fennakadás minimalizálására, és adott
        esetben frissített információkkal vehetjük fel Önnel a kapcsolatot.
      </p>

      <h2>27. A webhely, termékek és Feltételek módosításai</h2>
      <p>
        27.1 Időről időre frissíthetjük a webhelyet, a termékkínálatot, az árazást, a szállítási lehetőségeket, a szabályzatokat és a jelen Feltételeket.
      </p>
      <p>
        27.2 A megrendelés leadásának időpontjában hatályos Feltételek verziója vonatkozik az adott megrendelésre,
        kivéve, ha egy változtatást jogszabály ír elő, vagy az egy alkalmazandó javítással kapcsolatos.
      </p>
      <p>
        27.3 A webhely további használata a frissített Feltételek közzététele után azt jelenti, hogy Ön elfogadja a frissített
        Feltételeket a jövőbeli használatra és a jövőbeli megrendelésekre.
      </p>

      <h2>28. Elválaszthatóság</h2>
      <p>
        28.1 Ha a jelen Feltételek bármely része érvénytelennek, jogellenesnek vagy végrehajthatatlannak bizonyul, azt a részt
        a szükséges minimális mértékben eltávolítottnak vagy módosítottnak kell tekinteni.
      </p>
      <p>28.2 A jelen Feltételek fennmaradó részei teljes egészében hatályban maradnak.</p>

      <h2>29. Jogok átruházása</h2>
      <p>
        29.1 A jelen Feltételek szerinti jogainkat és kötelezettségeinket átruházhatjuk, engedményezhetjük, alvállalkozásba adhatjuk vagy más módon
        kezelhetjük, amennyiben ez nem csökkenti lényegesen az Ön fogyasztóként fennálló jogait.
      </p>
      <p>
        29.2 Ön nem ruházhatja át a jelen Feltételek szerinti jogait vagy kötelezettségeit előzetes írásbeli hozzájárulásunk
        nélkül, kivéve, ha ezt jogszabály írja elő.
      </p>

      <h2>30. Irányadó jog és joghatóság</h2>
      <p>30.1 A jelen Feltételekre Anglia és Wales joga az irányadó.</p>
      <p>
        30.2 Ha Ön fogyasztó, élvezheti a lakóhelye szerinti ország jogszabályai alapján rendelkezésre álló bármely kötelező érvényű
        fogyasztóvédelmi jogot is.
      </p>
      <p>
        30.3 Ha Ön az Egyesült Királyságban élő fogyasztó, a jogvitákat Anglia és Wales bíróságai, vagy
        bármely más, az alkalmazandó jog szerint joghatósággal rendelkező egyesült királyságbeli bíróság elé lehet terjeszteni.
      </p>
      <p>
        30.4 Ha Ön az Európai Unióban vagy más olyan joghatóságban élő fogyasztó, ahol kötelező helyi
        fogyasztói jogok érvényesek, a jelen Feltételekben semmi sem akadályozza meg abban, hogy ezekre a kötelező jogokra hivatkozzon.
      </p>
      <p>
        30.5 Ha Ön üzleti vásárló, a jelen Feltételekből, a webhelyből vagy bármely megrendelésből eredő vagy azzal
        összefüggő bármely jogvitában Anglia és Wales bíróságai rendelkeznek kizárólagos joghatósággal.
      </p>

      <h2>31. Kapcsolattartási információk</h2>
      <p>
        Ha bármilyen kérdése van a jelen Feltételekkel, megrendelésével, szállítással, visszaküldésekkel, jótállással vagy bármely egyéb
        üggyel kapcsolatban, kérjük, vegye fel velünk a kapcsolatot:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  bg: (
    <PolicyLayout title="Общи условия" lastUpdated="29 май 2026 г.">
      <p>
        Настоящите Общи условия (&bdquo;Условия&rdquo;) уреждат достъпа Ви до и използването на уебсайта
        www.misaelectro.ro, както и всички свързани страници, услуги, поръчки, покупки, съобщения и
        транзакции, управлявани под марката MisaElectro.
      </p>
      <p>Уебсайтът се управлява от:</p>
      <ContactBlock />
      <p>
        В настоящите Условия &bdquo;MisaElectro&rdquo;, &bdquo;ние&rdquo;, &bdquo;нас&rdquo; или &bdquo;наш&rdquo; означава MISARELIANA S.R.L..
        &bdquo;Клиент&rdquo; или &bdquo;Вие&rdquo; означава всяко физическо лице или предприятие, което осъществява достъп до
        уебсайта, прави поръчка, купува стоки или по друг начин използва нашите услуги.
      </p>
      <p>
        Моля, прочетете внимателно настоящите Условия, преди да направите поръчка. С осъществяването на достъп до уебсайта, създаването на
        акаунт, изпращането на поръчка или закупуването на стоки от MisaElectro Вие се съгласявате да бъдете обвързани с настоящите
        Условия.
      </p>

      <h2>1. Обхват на настоящите Условия</h2>
      <p>1.1 Настоящите Условия се прилагат за всяко използване на уебсайта и всички покупки на стоки, направени чрез MisaElectro.</p>
      <p>
        1.2 MisaElectro продава физически електрически продукти, електрически материали, аксесоари за окабеляване,
        продукти, свързани с осветлението, монтажни компоненти, продукти за разпределение и защита на веригите,
        контакти, ключове, кабели, монтажни аксесоари и други свързани стоки за домашна, търговска,
        занаятчийска и професионална употреба.
      </p>
      <p>
        1.3 Настоящите Условия се прилагат заедно с всички други политики, публикувани на уебсайта, включително нашата
        Политика за доставка, Политика за връщане и възстановяване на суми, Политика за поверителност, Политика за бисквитки, както и всякакви специфични за продукта
        гаранционни или допълнителни гаранционни условия.
      </p>
      <p>
        1.4 При наличие на противоречие между настоящите Условия и специфично за продукта условие, ясно посочено на
        съответната продуктова страница или на страницата за плащане, специфичното за продукта условие се прилага само за този конкретен
        продукт или поръчка.
      </p>
      <p>
        1.5 Нищо в настоящите Условия не засяга Вашите задължителни законови права, когато такива права не могат законно да бъдат
        изключени или ограничени.
      </p>

      <h2>2. Допустимост и отговорност на клиента</h2>
      <p>2.1 Трябва да сте навършили поне 18 години и да имате правоспособност да направите поръчка на уебсайта.</p>
      <p>
        2.2 Ако правите поръчка от името на предприятие, дружество, съдружие, организация, занаятчийски
        клиент или друго юридическо лице, Вие потвърждавате, че сте упълномощени да обвържете това лице с настоящите Условия.
      </p>
      <p>
        2.3 Вие носите отговорност да гарантирате, че цялата информация, която ни предоставяте, е точна, пълна и
        актуална, включително Вашето име, данни за фактуриране, адрес за доставка, данни за контакт, данни за ДДС или данъци,
        както и всяка друга информация, необходима за обработката на Вашата поръчка.
      </p>
      <p>
        2.4 Не трябва да използвате уебсайта или да купувате стоки от MisaElectro за каквато и да е незаконна, опасна,
        измамна или неоторизирана цел.
      </p>

      <h2>3. Потребители и бизнес клиенти</h2>
      <p>3.1 MisaElectro продава както на потребители, така и на бизнес клиенти.</p>
      <p>
        3.2 &bdquo;Потребител&rdquo; означава физическо лице, което действа изцяло или предимно извън своята търговска, стопанска,
        занаятчийска или професионална дейност.
      </p>
      <p>
        3.3 &bdquo;Бизнес клиент&rdquo; означава всяко физическо лице, дружество, едноличен търговец, изпълнител, монтажник,
        прекупвач, организация, публичен орган или професионалист, който купува стоки за бизнес, търговски,
        занаятчийски, препродажбени, монтажни или професионални цели.
      </p>
      <p>
        3.4 Определени права, описани в настоящите Условия, включително законовите права на потребителя за отказ, се прилагат
        само за потребители и не се прилагат за бизнес клиенти, освен ако законът не изисква друго.
      </p>
      <p>
        3.5 Очаква се бизнес клиентите да разполагат с подходящи технически познания или професионален съвет
        преди закупуването на електрически стоки. Бизнес клиентите носят отговорност за проверката на всички
        спецификации, номинални стойности, съвместимост, пригодност, изисквания за съответствие и монтажни
        условия, преди да направят поръчка.
      </p>

      <h2>4. Информация за продуктите и наличност</h2>
      <p>
        4.1 Стремим се да гарантираме, че продуктовите описания, изображения, цени, технически данни, наличност и
        друга информация, показана на уебсайта, са точни и актуални.
      </p>
      <p>
        4.2 Продуктовите изображения се предоставят само с илюстративна цел. Действителните стоки може да се различават леко от
        изображенията поради актуализации на производителя, промени в опаковката, осветление, настройки на екрана, разлики
        в цветовете, разлики в партидите или технически подобрения.
      </p>
      <p>
        4.3 Продуктовите спецификации може да се основават на информация, предоставена от производители, доставчици,
        дистрибутори или продуктови бази данни. Въпреки че полагаме разумна грижа, ние не гарантираме, че всички
        продуктови данни са без грешки, пропуски или актуализации.
      </p>
      <p>
        4.4 Преди да направите поръчка, Вие носите отговорност да проверите дали продуктът е подходящ за Вашата
        предвидена цел, включително, но не само:
      </p>
      <ul>
        <li>напрежение и електрически номинал;</li>
        <li>ток, натоварване, мощност и изисквания за захранване;</li>
        <li>размери и монтажно пространство;</li>
        <li>тип кабел, сечение на кабела и изисквания за свързване;</li>
        <li>степен на защита IP и пригодност за околната среда;</li>
        <li>пригодност за вътрешна или външна употреба;</li>
        <li>съвместимост със съществуващи системи, арматура, устройства и инсталации;</li>
        <li>регулаторни изисквания, изисквания за безопасност и монтаж в съответната държава или регион.</li>
      </ul>
      <p>
        4.5 Ако не сте сигурни дали даден продукт е подходящ за Вашата предвидена употреба, следва да се свържете с нас
        преди поръчката или да потърсите съвет от квалифициран електротехник или компетентен специалист.
      </p>
      <p>
        4.6 Наличността на продуктите не е гарантирана, докато Вашата поръчка не бъде приета и обработена.
        Може да отменим или забавим поръчка, когато даден продукт стане неналичен, бъде спрян от производство, е обявен
        неправилно или не може да бъде доставен по причини извън нашия разумен контрол.
      </p>

      <h2>5. Електрическа безопасност, монтаж и употреба</h2>
      <p>
        5.1 Електрическите продукти могат да бъдат опасни, ако бъдат неправилно избрани, монтирани, свързани, модифицирани,
        претоварени или използвани.
      </p>
      <p>
        5.2 Трябва да използвате всички продукти само по предназначение и в съответствие с всички инструкции
        на производителя, предупреждения за безопасност, ръководства за монтаж, номинални напрежения, гранични натоварвания, технически
        спецификации, приложими закони, строителни разпоредби, електрически стандарти и местни изисквания.
      </p>
      <p>
        5.3 Продуктите, които изискват електрически монтаж, окабеляване, свързване, изпитване, въвеждане в експлоатация или
        интегриране в електрическа система, следва да се монтират само от квалифициран електротехник или компетентен
        специалист, когато това се изисква или е целесъобразно.
      </p>
      <p>
        5.4 MisaElectro не предоставя услуги по електроинженерство, монтаж, съответствие, инспекция,
        сертифициране или одобрение за безопасност чрез уебсайта.
      </p>
      <p>
        5.5 Всякакви насоки, продуктово описание, бележка за съвместимост или отговор на клиентската поддръжка, предоставени от
        MisaElectro, представляват само обща информация и не трябва да се третират като заместител на професионален
        съвет, електрическа инспекция или оценка на съответствието.
      </p>
      <p>
        5.6 Ние не носим отговорност за щети, загуби, наранявания, неизправности, несъответствие, неуспешен
        монтаж или инциденти с безопасността, причинени от неправилен монтаж, неправилен избор на продукт,
        неправилна употреба, претоварване, неоторизирана модификация, работа на трети лица, неспазване на инструкциите или
        употреба извън предназначението на продукта.
      </p>

      <h2>6. Акаунти, занаятчийски клиенти и Pro достъп</h2>
      <p>
        6.1 Може да имате възможност да създадете акаунт или да кандидатствате за занаятчийски, професионален или бизнес клиентски
        достъп на уебсайта.
      </p>
      <p>
        6.2 Може да одобрим, отхвърлим, спрем или премахнем всеки акаунт, занаятчийски акаунт, достъп до ценообразуване или
        професионален достъп по наша преценка.
      </p>
      <p>
        6.3 Може да поискаме допълнителна информация, за да проверим Вашата самоличност, бизнес статус, професионална
        дейност, данни за ДДС/данъци, адрес за доставка или друга релевантна информация.
      </p>
      <p>
        6.4 Вие носите отговорност за запазването на данните за вход в акаунта си в безопасност. Трябва да ни уведомите незабавно,
        ако смятате, че до Вашия акаунт е осъществен достъп без разрешение.
      </p>
      <p>
        6.5 Ние не носим отговорност за загуби, причинени от Вашето неспазване на сигурността на данните на акаунта,
        освен когато законът изисква друго.
      </p>

      <h2>7. Поръчки и сключване на договор</h2>
      <p>
        7.1 С правенето на поръчка Вие отправяте предложение за закупуване на избраните стоки в съответствие с настоящите
        Условия.
      </p>
      <p>
        7.2 След като направите поръчка, може да получите потвърждение на поръчката или потвърждение на плащането. Това
        не означава автоматично, че Вашата поръчка е приета.
      </p>
      <p>
        7.3 Договор между Вас и MisaElectro се сключва само когато приемем Вашата поръчка, обработим я за
        изпълнение или изпратим стоките, което от посочените настъпи първо.
      </p>
      <p>7.4 Може да откажем, отменим или ограничим всяка поръчка преди приемане, когато:</p>
      <ul>
        <li>продуктът е неналичен;</li>
        <li>продуктът, цената, разходите за доставка или описанието съдържат грешка;</li>
        <li>плащането не е оторизирано или е сторнирано;</li>
        <li>има съмнение за измама, злоупотреба, подозрителна дейност или неправомерна употреба;</li>
        <li>доставката не е налична до заявената дестинация;</li>
        <li>прилагат се митнически, санкционни, експортни, свързани с обработващия плащания, куриерски или законови ограничения;</li>
        <li>поръчката изглежда направена за неоторизирана препродажба или незаконни цели;</li>
        <li>не можем да проверим необходимата клиентска, фактурна или доставна информация.</li>
      </ul>
      <p>
        7.5 Ако отменим поръчка, след като плащането е било прието, ще възстановим сумата, платена за отменените
        стоки, освен ако не сме законово задължени да задържим плащането или транзакцията подлежи на
        проверка за измама, обратно плащане, санкции или съответствие.
      </p>

      <h2>8. Цени, ДДС и валути</h2>
      <p>8.1 Уебсайтът може да показва цени в EUR, RON и HUF.</p>
      <p>
        8.2 Цените, показани на уебсайта, включват ДДС, когато е приложимо, освен ако не е ясно посочено друго.
      </p>
      <p>
        8.3 Крайната дължима цена за Вашата поръчка ще бъде показана при плащане, преди да завършите плащането.
      </p>
      <p>
        8.4 Цените може да се променят по всяко време без предизвестие. Промените няма да засегнат вече приети поръчки,
        освен когато е възникнала явна грешка в цената.
      </p>
      <p>
        8.5 Запазваме си правото да коригираме очевидни грешки в цената, валутата, данъка, отстъпката или продукта. Ако
        грешка засяга поръчка, която сте направили, може да се свържем с Вас, за да потвърдите дали желаете да продължите
        на коригираната цена или да отмените поръчката.
      </p>
      <p>
        8.6 Валутното конвертиране, банковите такси, таксите за чуждестранни транзакции, таксите на издателя на картата или
        разликите в обменния курс са отговорност на клиента и не се контролират от MisaElectro.
      </p>

      <h2>9. Условия на плащане</h2>
      <p>9.1 Плащането трябва да бъде извършено при плащане.</p>
      <p>9.2 Приемаме сигурни плащания с карта, включително Visa и Mastercard.</p>
      <p>
        9.3 Плащанията се обработват от сигурни доставчици на платежни услуги — трети страни. MisaElectro не съхранява Вашия пълен
        номер на картата или пълните данни за сигурност на картата.
      </p>
      <p>
        9.4 Вашата поръчка няма да бъде обработена, докато плащането не бъде успешно оторизирано или получено.
      </p>
      <p>
        9.5 Ако Вашето плащане бъде отхвърлено, сторнирано, оспорено, върнато като обратно плащане или маркирано като подозрително, може да
        спрем, отменим или забавим Вашата поръчка.
      </p>
      <p>
        9.6 Не трябва да извършвате измамно плащане, да използвате неоторизиран метод на плащане или да се опитвате да заобиколите
        мерките за плащане, сигурност, проверка или предотвратяване на измами.
      </p>
      <p>
        9.7 За бизнес клиенти може да издаваме фактури с ДДС или търговски фактури, когато е приложимо и
        когато е предоставена достатъчна фактурна информация.
      </p>

      <h2>10. Отстъпки, промоции и безплатна доставка</h2>
      <p>
        10.1 От време на време MisaElectro може да предлага отстъпки, промоционални кодове, специални цени, прагове за
        безплатна доставка или занаятчийско ценообразуване.
      </p>
      <p>
        10.2 Освен ако не е посочено друго, безплатната доставка се прилага за отговарящи на условията поръчки над &euro;100 / &pound;100 / $100.
      </p>
      <p>
        10.3 Прагът за безплатна доставка се изчислява въз основа на междинната сума на продуктите след отстъпки и
        преди всякакви мита, вносни данъци, допълнителни местни такси или специални услуги за доставка.
      </p>
      <p>
        10.4 Безплатната доставка може да не се прилага за определени дестинации, извънгабаритни стоки, тежки стоки, ограничени
        стоки, стоки по специална поръчка или продукти, изискващи специална обработка.
      </p>
      <p>
        10.5 Промоционалните кодове и отстъпки може да бъдат оттеглени, променени, отказани или отменени по всяко време,
        когато има съмнение за злоупотреба, грешка, измама или техническа злоупотреба.
      </p>
      <p>
        10.6 Промоциите не могат да бъдат заменени за пари в брой и не могат да се комбинират с други оферти, освен ако не е ясно
        посочено.
      </p>

      <h2>11. Доставка и изпращане</h2>
      <p>11.1 MisaElectro изпраща поръчките от Обединеното кралство.</p>
      <p>
        11.2 Доставката е налична до поддържаните дестинации за доставка, показани на уебсайта или при плащане.
      </p>
      <p>
        11.3 Понастоящем предлагаме само стандартна доставка. Експресната доставка не е налична, освен ако не е изрично
        показана при плащане.
      </p>
      <p>
        11.4 Сроковете за доставка са само ориентировъчни и започват от датата на изпращане, а не от датата, на която е направена
        поръчката.
      </p>
      <p>11.5 Ориентировъчните срокове за доставка обикновено са следните:</p>
      <table>
        <thead>
          <tr>
            <th>Дестинация</th>
            <th>Ориентировъчен срок за доставка от изпращането</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Обединено кралство</td><td>1&ndash;3 работни дни</td></tr>
          <tr><td>Европа</td><td>3&ndash;7 работни дни</td></tr>
          <tr><td>Северна Америка</td><td>5&ndash;10 работни дни</td></tr>
          <tr><td>Азия и Океания</td><td>7&ndash;14 работни дни</td></tr>
          <tr><td>Африка и Южна Америка</td><td>8&ndash;15 работни дни</td></tr>
        </tbody>
      </table>
      <p>
        11.6 Европейските и международните доставки може да се обработват от DHL, партньорски превозвачи, местни куриери
        или други логистични доставчици.
      </p>
      <p>
        11.7 Сроковете за доставка може да бъдат повлияни от фактори извън нашия контрол, включително митническа обработка,
        обработка от местния куриер, отдалечени или селски райони за доставка, непълна информация за доставка, официални
        празници, метеорологични условия, транспортни смущения, стачки, проверки за сигурност, вносни контроли или
        забавяния на превозвача.
      </p>
      <p>
        11.8 Вие носите отговорност за предоставянето на пълен и точен адрес за доставка. Ние не носим
        отговорност за неуспешна, забавена или погрешно насочена доставка, причинена от неправилна или непълна
        информация, предоставена от Вас.
      </p>
      <p>11.9 След като поръчка бъде изпратена, промените в адреса за доставка може да не са възможни.</p>
      <p>
        11.10 Ако колет ни бъде върнат, защото сте предоставили неправилен адрес, не сте го получили,
        сте отказали доставката или не сте изпълнили митническите или куриерските изисквания, може да приспаднем разходите за доставка,
        разходите за връщане, митническите такси, таксите на превозвача и други разумни разходи от всяко възстановяване,
        освен ако това не е забранено от закона.
      </p>

      <h2>12. Международни поръчки, митници и вносни такси</h2>
      <p>
        12.1 За доставки извън Обединеното кралство Вашата поръчка може да подлежи на митническо освобождаване,
        вносни мита, ДДС при внос, данъци, брокерски такси, такси за обработка, такси на превозвача или други местни
        такси.
      </p>
      <p>
        12.2 Освен ако не е изрично посочено друго при плащане, Вие носите отговорност за всички мита,
        ДДС при внос, данъци, брокерски такси и местни такси, дължими в държавата на местоназначение.
      </p>
      <p>
        12.3 MisaElectro няма контрол върху сроковете за митническа обработка, митническите решения, вносните ограничения,
        местните данъчни оценки или таксите, наложени от органи, куриери или митнически брокери.
      </p>
      <p>
        12.4 Вие носите отговорност да гарантирате, че стоките, които поръчвате, могат законно да бъдат внесени и използвани
        във Вашата държава или регион.
      </p>
      <p>
        12.5 Ако поръчка бъде забавена, върната, задържана, отхвърлена или унищожена от митниците или местните
        органи поради вносни ограничения, неплатени такси, неправилна информация, предоставена от Вас, или
        неспазване на местните изисквания, MisaElectro няма да носи отговорност за произтичащата загуба,
        забавяне или разходи, освен когато законът изисква друго.
      </p>

      <h2>13. Риск и собственост</h2>
      <p>
        13.1 Собствеността върху стоките преминава върху Вас само когато сме получили пълното плащане за стоките и
        всички приложими такси за доставка.
      </p>
      <p>
        13.2 За потребителски поръчки рискът за стоките преминава върху Вас, когато стоките бъдат доставени на Вас или на
        лице, посочено от Вас за тяхното получаване.
      </p>
      <p>
        13.3 За поръчки на бизнес клиенти рискът преминава върху Вас, когато стоките бъдат доставени на адреса за
        доставка, предадени на първия превозвач за доставка или по друг начин предоставени за получаване,
        в зависимост от договорения или използвания метод за доставка.
      </p>
      <p>
        13.4 Вие носите отговорност за проверката на стоките при доставка и за тяхното безопасно и подходящо съхранение.
      </p>

      <h2>14. Права на потребителя за отказ</h2>
      <p>
        14.1 Ако сте потребител, може да имате законово право да се откажете от отговарящи на условията онлайн покупки в рамките на 14
        дни от получаването на стоките, без да посочвате причина.
      </p>
      <p>
        14.2 Срокът за отказ изтича 14 дни след деня, в който Вие или лице, посочено
        от Вас, получите стоките.
      </p>
      <p>
        14.3 Ако Вашата поръчка е доставена в няколко колета, срокът за отказ обикновено изтича 14
        дни след деня, в който получите последния колет.
      </p>
      <p>
        14.4 За да упражните правото си на отказ, трябва да ни уведомите ясно по имейл на info@misaelectro.ro
        преди изтичането на срока за отказ.
      </p>
      <p>
        14.5 След като ни уведомите, че желаете да се откажете, трябва да ни върнете стоките без неоправдано забавяне
        и не по-късно от 14 дни от датата, на която сте ни уведомили за отказа си.
      </p>
      <p>
        14.6 Върнатите стоки трябва да бъдат неизползвани, немонтирани, пълни, по възможност в оригиналната си опаковка,
        с всички аксесоари, ръководства, етикети, защитни материали и включени артикули.
      </p>
      <p>
        14.7 Вие носите отговорност за разходите за връщане, освен ако стоките са дефектни, повредени, неправилни,
        или сме се съгласили писмено на друго.
      </p>
      <p>
        14.8 Може да намалим възстановената сума, за да отразим всяко намаление на стойността на стоките, причинено от боравене,
        което надхвърля необходимото за проверка на естеството, характеристиките и функционирането на стоките.
      </p>
      <p>
        14.9 Когато законът изисква, ще възстановим основната стандартна цена за доставка, платена за първоначалната доставка.
        Допълнителните разходи за доставка, надградените услуги, международните такси, митническите такси,
        вносните мита, брокерските такси или специалните разходи за доставка може да не подлежат на възстановяване, освен ако законът не
        изисква друго.
      </p>
      <p>14.10 Възстановяванията ще се извършват по възможност към първоначалния метод на плащане.</p>

      <h2>15. Артикули, които не подлежат на връщане, и с ограничено връщане</h2>
      <p>
        15.1 Определени стоки не могат да бъдат върнати поради промяна на решението, освен ако не са дефектни, повредени,
        неправилни, или правата на връщане не се изискват от закона.
      </p>
      <p>15.2 Артикулите, които не подлежат на връщане или с ограничено връщане, може да включват:</p>
      <ul>
        <li>стоки, изработени по поръчка;</li>
        <li>стоки, поръчани специално за Вас;</li>
        <li>стоки, нарязани по размер, включително кабел или подобни материали;</li>
        <li>персонализирани, модифицирани, сглобени или изменени стоки;</li>
        <li>монтирани, окабелени, свързани, изпитани, въведени в експлоатация или използвани електрически стоки;</li>
        <li>стоки, повредени след доставка;</li>
        <li>стоки, на които липсват части, аксесоари, опаковка, ръководства, етикети, пломби или защитни материали;</li>
        <li>стоки, които вече не са в състояние, годно за препродажба;</li>
        <li>стоки, засегнати от неправилно съхранение, влага, топлина, удар, замърсяване, неправилна употреба или неоторизирано боравене;</li>
        <li>артикули от разпродажба, окончателна продажба или спрени от производство, когато ограниченията за връщане са ясно посочени и законни.</li>
      </ul>
      <p>
        15.3 Настоящият раздел не ограничава Вашите законови права, когато стоките са дефектни, не съответстват на описанието, са
        опасни или по друг начин несъответстващи на приложимото законодателство.
      </p>

      <h2>16. Дефектни, повредени или неправилни стоки</h2>
      <p>
        16.1 Ако стоките пристигнат повредени, дефектни, непълни или неправилни, следва да се свържете с нас възможно
        най-скоро на info@misaelectro.ro.
      </p>
      <p>
        16.2 Моля, предоставете номера на поръчката си, описание на проблема и ясни снимки или видеоклипове,
        показващи стоките, опаковката, етикетите, повредата или дефекта, когато това е разумно възможно.
      </p>
      <p>
        16.3 Следва да запазите продукта, опаковката, етикетите и материалите за доставка, докато проблемът бъде
        разгледан, тъй като те може да са необходими за претенции към превозвача, инспекция от доставчика или гаранционна оценка.
      </p>
      <p>
        16.4 За видима повреда при доставка, моля, уведомете ни в рамките на 48 часа от доставката, когато това е възможно. Това
        ни помага да разследваме бързо проблемите с куриера, но не премахва каквито и да е задължителни законови права, които може да
        имате.
      </p>
      <p>
        16.5 Когато се потвърди, че стоките са дефектни, повредени преди доставка, неправилни или по друг начин несъответстващи
        на договора, може да предложим ремонт, замяна, възстановяване на сумата, частично възстановяване или друго
        средство за защита в съответствие с приложимото законодателство.
      </p>
      <p>
        16.6 Може да изискаме стоките да бъдат върнати за проверка, преди да одобрим възстановяване, замяна
        или гаранционно средство за защита.
      </p>
      <p>
        16.7 Ако се потвърди, че стоките са дефектни, повредени или неправилни, ще покрием разумните разходи за връщане
        или ще предоставим инструкции за връщане.
      </p>
      <p>
        16.8 Ние не носим отговорност за дефекти или повреди, причинени от неправилен монтаж, неправилна употреба,
        претоварване, неоторизирана модификация, външни повреди, неподходяща среда, неправилно съхранение,
        работа на трети лица, неспазване на инструкциите, пренапрежения, износване или употреба извън
        предназначението на продукта.
      </p>

      <h2>17. Законова гаранция и законови права</h2>
      <p>
        17.1 Потребителите може да имат законови права съгласно приложимите закони за защита на потребителите, когато стоките са
        дефектни, не съответстват на описанието, не са годни за целта, са опасни или не съответстват на договора.
      </p>
      <p>
        17.2 За потребители в ЕС приложимото потребителско право може да предоставя минимум 2-годишна законова гаранция от
        датата на получаване на стоките, обхващаща дефекти или несъответствие, съществували към момента на
        доставката и проявили се през периода на законовата гаранция.
      </p>
      <p>
        17.3 За потребители в Обединеното кралство се прилагат законови права съгласно приложимото потребителско право на Обединеното кралство. Тези права може
        да включват средства за защита, когато стоките са дефектни, не съответстват на описанието или не са годни за целта.
      </p>
      <p>
        17.4 Тези законови права са отделни от и не се ограничават от каквато и да е гаранция на производителя,
        търговска гаранция, допълнителна гаранция или политика за връщане, предлагана от MisaElectro.
      </p>
      <p>
        17.5 Бизнес клиентите не получават потребителски законови права за отказ и може да имат по-ограничени
        права от потребителите, освен когато задължителен закон предвижда друго.
      </p>

      <h2>18. Допълнителна гаранция</h2>
      <p>18.1 MisaElectro може да предлага платени опции за допълнителна гаранция за избрани продукти.</p>
      <p>18.2 Допълнителната гаранция е по избор и може да бъде закупена при плащане, когато е налична.</p>
      <p>
        18.3 Освен ако не е посочено друго на продуктовата страница или при плащане, цената на допълнителната гаранция се
        изчислява, както следва:
      </p>
      <table>
        <thead>
          <tr>
            <th>Опция за допълнителна гаранция</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>+1 година допълнителна гаранция</td><td>10% от цената на продукта, минимум &euro;6.99 / &pound;6.99 / $6.99</td></tr>
          <tr><td>+2 години допълнителна гаранция</td><td>16% от цената на продукта, минимум &euro;9.99 / &pound;9.99 / $9.99</td></tr>
          <tr><td>+3 години допълнителна гаранция</td><td>22% от цената на продукта, минимум &euro;12.99 / &pound;12.99 / $12.99</td></tr>
        </tbody>
      </table>
      <p>
        18.4 Цената на допълнителната гаранция се изчислява въз основа на цената на продукта преди таксите за доставка,
        митата, вносните данъци, брокерските такси или други местни такси.
      </p>
      <p>
        18.5 Допълнителната гаранция е търговска гаранция, предлагана в допълнение към Вашите законови права. Тя
        не заменя, намалява или ограничава каквито и да е задължителни законови права, които може да имате.
      </p>
      <p>
        18.6 Освен ако не е посочено друго, покритието на допълнителната гаранция започва след изтичането на първоначалната
        гаранция, законовата гаранция, гаранцията на производителя или стандартния гаранционен период, приложим за
        съответния продукт.
      </p>
      <p>
        18.7 Допълнителната гаранция покрива отговарящи на условията производствени дефекти и дефекти в материалите, които възникват по време на
        нормална употреба на продукта в съответствие с инструкциите на производителя и приложимите
        технически изисквания.
      </p>
      <p>18.8 Допълнителната гаранция не покрива:</p>
      <ul>
        <li>неправилен монтаж, окабеляване, свързване, изпитване или въвеждане в експлоатация;</li>
        <li>монтаж от неквалифицирано или неоторизирано лице, когато се изисква или е целесъобразен професионален монтаж;</li>
        <li>неправилна употреба, небрежност, злоупотреба, претоварване или работа извън номиналните спецификации;</li>
        <li>неоторизиран ремонт, модификация, отваряне, разглобяване или изменение;</li>
        <li>случайни повреди, повреди от удар, повреди от вода, повреди от влага, повреди от пожар или външни повреди;</li>
        <li>повреди, причинени от пренапрежения, нестабилно захранване, неправилно напрежение, мълния или електрически неизправности в по-широката инсталация;</li>
        <li>нормално износване;</li>
        <li>козметични повреди, които не засягат функционалността;</li>
        <li>консумативи, батерии, крушки, предпазители, уплътнения, конектори, аксесоари или части, за които се очаква да се износят, освен ако не са изрично покрити;</li>
        <li>дефекти, причинени от неподходящо съхранение, транспорт, среда, замърсяване, корозия, прах, влажност, химикали или температурни условия;</li>
        <li>продукти, използвани за цели извън посоченото от производителя предназначение;</li>
        <li>пропуснати ползи, разходи за труд, разходи за електротехник, разходи за демонтаж, разходи за повторен монтаж, престой или косвени загуби.</li>
      </ul>
      <p>
        18.9 За да предявите претенция по допълнителна гаранция, трябва да се свържете с нас на info@misaelectro.ro с номера на поръчката си,
        доказателство за покупка, описание на дефекта и подкрепящи снимки, видеоклипове или диагностична
        информация, когато това е разумно поискано.
      </p>
      <p>
        18.10 Може да изискаме продуктът да бъде върнат за проверка, преди да одобрим каквото и да е гаранционно средство за защита.
      </p>
      <p>
        18.11 Когато валидна претенция по допълнителна гаранция бъде одобрена, може, в зависимост от продукта и
        обстоятелствата, да предоставим ремонт, замяна, равностойна замяна, частично възстановяване или друго
        разумно средство за защита.
      </p>
      <p>
        18.12 Допълнителната гаранция е свързана с продукта и първоначалната поръчка. Тя може да не подлежи на прехвърляне,
        освен ако не се съгласим изрично в писмена форма.
      </p>
      <p>
        18.13 Ако отмените или върнете продукт в съответствие с Вашите законови права, преди допълнителната
        гаранция да започне, всяка допълнителна гаранция, закупена за този продукт, също ще бъде възстановена, когато законът
        изисква.
      </p>

      <h2>19. Условия за бизнес клиенти</h2>
      <p>
        19.1 Бизнес клиентите носят отговорност за проверката на всички продуктови спецификации, пригодност,
        съвместимост, изисквания за съответствие, изисквания за монтаж и местни регулаторни задължения
        преди поръчката.
      </p>
      <p>
        19.2 Бизнес клиентите нямат общо право да отменят или връщат стоки поради промяна на решението,
        неправилна поръчка, излишни наличности, неподходяща спецификация, промени в проекта на клиента или недефектни
        стоки, освен ако не се съгласим писмено на друго.
      </p>
      <p>
        19.3 Всяко връщане, прието от бизнес клиент, е по наша преценка и може да подлежи на
        проверка, такси за повторно заскладяване, разходи за връщане и приспадане за намалена стойност при препродажба.
      </p>
      <p>
        19.4 Бизнес клиентите трябва да проверят стоките незабавно при доставка и да ни уведомят за видими повреди,
        липси, неправилни стоки или проблеми с доставката възможно най-скоро в разумни граници.
      </p>
      <p>
        19.5 Когато е разрешено от закона, нашата обща отговорност към бизнес клиент за всяка поръчка няма да надвишава
        цената, платена за стоките, породили претенцията.
      </p>
      <p>
        19.6 Ние няма да носим отговорност пред бизнес клиенти за пропуснати ползи, загуба на приходи, загуба на
        договор, загуба на бизнес възможност, загуба на репутация, загуба на данни, разходи за труд, разходи за
        монтаж, разходи за демонтаж, разходи за повторен монтаж, престой, забавяния на проекти или косвени или последващи
        загуби.
      </p>

      <h2>20. Съответствие на продуктите и местни разпоредби</h2>
      <p>
        20.1 Продуктите, продавани от MisaElectro, може да са проектирани за конкретни пазари, стандарти, системи на напрежение, арматура
        или монтажни среди.
      </p>
      <p>
        20.2 Вие носите отговорност да проверите дали даден продукт е подходящ и законен за монтаж,
        препродажба, внос или употреба във Вашата държава, регион, имот, проект или електрическа система.
      </p>
      <p>
        20.3 Ние не гарантираме, че продуктите, закупени от MisaElectro, ще отговарят на всеки местен строителен кодекс,
        електрически кодекс, изискване за сертифициране, застрахователно изискване, изискване на работното място или проектна спецификация
        извън информацията, изрично посочена на продуктовата страница.
      </p>
      <p>
        20.4 Бизнес клиентите, монтажниците, изпълнителите, прекупвачите и професионалните купувачи носят отговорност
        за получаването на всички разрешения, одобрения, инспекции, сертификати и професионални одобрения,
        необходими за тяхната употреба, монтаж, препродажба или проект.
      </p>

      <h2>21. Интелектуална собственост</h2>
      <p>
        21.1 Цялото съдържание на уебсайта, включително текст, оформление, брандиране, лога, графики, икони, продуктови
        описания, фотографии, видеоклипове, дизайнерски елементи и други материали, принадлежи на MisaElectro,
        MISARELIANA S.R.L., доставчици, производители, лицензодатели или други притежатели на права.
      </p>
      <p>
        21.2 Може да използвате уебсайта само за лични, бизнес или покупателни цели в съответствие с
        настоящите Условия.
      </p>
      <p>
        21.3 Не трябва да копирате, възпроизвеждате, събирате, извличате, разпространявате, продавате, модифицирате, публикувате или
        експлоатирате търговски каквото и да е съдържание на уебсайта без нашето предварително писмено разрешение.
      </p>
      <p>
        21.4 Закупуването на продукт не прехвърля каквито и да е права на интелектуална собственост върху продукта, марката,
        дизайна, софтуера, документацията или свързаните материали, с изключение на правото да използвате закупения продукт
        законно и по предназначение.
      </p>

      <h2>22. Използване на уебсайта и забранено поведение</h2>
      <p>22.1 Не трябва да злоупотребявате с уебсайта.</p>
      <p>22.2 Не трябва да:</p>
      <ul>
        <li>опитвате да получите неоторизиран достъп до уебсайта, сървърите, системите, акаунтите или данните;</li>
        <li>пречите на сигурността, работата или наличността на уебсайта;</li>
        <li>използвате ботове, скрепери, обхождащи програми, автоматизирани инструменти или методи за извличане на данни без разрешение;</li>
        <li>качвате зловреден код, вируси или вредни материали;</li>
        <li>правите измамни, неверни, злоупотребяващи или спекулативни поръчки;</li>
        <li>се представяте за друго лице или предприятие;</li>
        <li>използвате уебсайта за незаконни, вредни, заблуждаващи или забранени цели;</li>
        <li>опитвате да заобиколите географски, платежни, свързани със сигурността, предотвратяването на измами или санкционни контроли.</li>
      </ul>
      <p>
        22.3 Може да ограничим, спрем или прекратим достъпа до уебсайта, когато подозираме злоупотреба, измама,
        риск за сигурността, нарушение на настоящите Условия или незаконна дейност.
      </p>

      <h2>23. Санкции, експортен контрол и ограничени дестинации</h2>
      <p>
        23.1 Може да откажем, отменим, спрем или блокираме всяка поръчка, когато това се изисква или е целесъобразно поради
        санкции, експортен контрол, контрол на финансовата престъпност, правила на обработващия плащания, куриерски ограничения,
        митнически ограничения или законови задължения.
      </p>
      <p>
        23.2 Може да проверяваме поръчки, клиенти, данни за фактуриране, адреси за доставка, платежна информация и
        дестинации спрямо приложимите изисквания за санкции, ограничени страни, предотвратяване на измами и
        съответствие.
      </p>
      <p>
        23.3 Не можем да приемем поръчки, когато това би нарушило приложимите закони, санкции, експортен контрол,
        правила на превозвача, изисквания на обработващия плащания или вътрешни контроли за съответствие.
      </p>
      <p>
        23.4 Вие потвърждавате, че не сте обект на санкции, не се намирате в ограничена територия и
        не купувате стоки за износ, препродажба, прехвърляне или употреба в нарушение на приложимите санкции, експортен
        контрол или закони.
      </p>
      <p>
        23.5 Ние не носим отговорност за загуби, забавяния, отмени или блокирани транзакции, причинени от
        санкции, експортен контрол, митнически ограничения, правила на обработващия плащания или изисквания за законово
        съответствие.
      </p>

      <h2>24. Поверителност и бисквитки</h2>
      <p>24.1 Обработваме лични данни в съответствие с нашата Политика за поверителност.</p>
      <p>
        24.2 Уебсайтът използва бисквитки и подобни технологии в съответствие с нашата Политика за бисквитки.
      </p>
      <p>
        24.3 С използването на уебсайта Вие потвърждавате, че Вашите лични данни може да бъдат обработвани за цели,
        включващи изпълнение на поръчки, обработка на плащания, доставка, клиентска поддръжка, предотвратяване на измами, законово
        съответствие, управление на акаунти, анализ и подобряване на услугите.
      </p>

      <h2>25. Ограничаване на отговорността</h2>
      <p>
        25.1 Нищо в настоящите Условия не изключва или ограничава отговорността, когато би било незаконно да се направи това,
        включително отговорност за смърт или телесна повреда, причинена от небрежност, измама, измамно
        представяне, или каквато и да е отговорност, която не може да бъде изключена съгласно приложимото законодателство.
      </p>
      <p>25.2 Нищо в настоящите Условия не ограничава Вашите задължителни законови права като потребител.</p>
      <p>25.3 При спазване на раздели 25.1 и 25.2, MisaElectro няма да носи отговорност за:</p>
      <ul>
        <li>косвени, случайни, специални, последващи или наказателни загуби;</li>
        <li>пропуснати ползи, приходи, бизнес, възможности, договори, репутация или очаквани спестявания;</li>
        <li>загуба на данни или прекъсване на системата;</li>
        <li>разходи за труд, монтаж, демонтаж, повторен монтаж, изпитване, инспекция, сертифициране или изпълнители;</li>
        <li>забавяния на проекти, оперативен престой или прекъсване на дейността;</li>
        <li>загуби, причинени от неправилен избор на продукт, монтаж, неправилна употреба, претоварване, неоторизирана модификация или неспазване на инструкциите;</li>
        <li>загуби, причинени от събития извън нашия разумен контрол.</li>
      </ul>
      <p>
        25.4 Продуктите трябва да бъдат избирани, монтирани и използвани правилно. Ние не носим отговорност за
        последиците, произтичащи от неправилен монтаж, опасен монтаж или употреба в противоречие с
        инструкциите на производителя или приложимите разпоредби.
      </p>
      <p>
        25.5 Когато сте бизнес клиент и в най-пълната степен, разрешена от закона, нашата обща
        отговорност във връзка с всяка поръчка няма да надвишава сумата, платена за стоките, породили
        претенцията.
      </p>

      <h2>26. Събития извън нашия контрол</h2>
      <p>
        26.1 Ние няма да носим отговорност за неизпълнение или забавяне на изпълнението на нашите задължения, когато то е причинено от
        събития извън нашия разумен контрол.
      </p>
      <p>
        26.2 Такива събития може да включват смущения във веригата на доставки, забавяне от производителя, транспортни смущения,
        неуспех на куриера, митническо забавяне, стачки, трудови спорове, екстремни метеорологични условия, природни бедствия, пожар,
        наводнение, война, тероризъм, граждански безредици, епидемия, пандемия, правителствени действия, регулаторни промени,
        санкции, спиране на тока, прекъсване на интернет, техническа повреда или други обстоятелства извън нашия разумен
        контрол.
      </p>
      <p>
        26.3 Ако такова събитие засегне Вашата поръчка, ще предприемем разумни стъпки за минимизиране на смущенията и
        може да се свържем с Вас с актуализирана информация, когато това е целесъобразно.
      </p>

      <h2>27. Промени в уебсайта, продуктите и Условията</h2>
      <p>
        27.1 Може да актуализираме уебсайта, продуктовата гама, ценообразуването, опциите за доставка, политиките и настоящите Условия
        от време на време.
      </p>
      <p>
        27.2 Версията на Условията, действаща към момента, в който правите поръчката си, ще се прилага за тази поръчка,
        освен ако промяна не се изисква от закона или не се отнася до корекция, която трябва да бъде приложена.
      </p>
      <p>
        27.3 Продължаването на използването на уебсайта след публикуването на актуализираните Условия означава, че приемате актуализираните
        Условия за бъдеща употреба и бъдещи поръчки.
      </p>

      <h2>28. Отделимост</h2>
      <p>
        28.1 Ако която и да е част от настоящите Условия бъде счетена за невалидна, незаконна или неприложима, тази част ще
        се третира като премахната или изменена до минимално необходимата степен.
      </p>
      <p>28.2 Останалите части от настоящите Условия ще продължат да бъдат в пълна сила и действие.</p>

      <h2>29. Прехвърляне на права</h2>
      <p>
        29.1 Може да прехвърляме, преотстъпваме, възлагаме на подизпълнители или по друг начин да се разпореждаме с нашите права и задължения по
        настоящите Условия, когато това не намалява съществено Вашите права като потребител.
      </p>
      <p>
        29.2 Не можете да прехвърляте Вашите права или задължения по настоящите Условия без нашето предварително писмено
        съгласие, освен когато законът изисква.
      </p>

      <h2>30. Приложимо право и юрисдикция</h2>
      <p>30.1 Настоящите Условия се уреждат от законите на Англия и Уелс.</p>
      <p>
        30.2 Ако сте потребител, може също да се възползвате от всякакви задължителни права за защита на потребителите,
        налични съгласно законите на държавата, в която пребивавате.
      </p>
      <p>
        30.3 Ако сте потребител, живеещ в Обединеното кралство, споровете може да бъдат отнесени пред съдилищата
        на Англия и Уелс или пред всеки друг съд в Обединеното кралство, който има юрисдикция съгласно приложимото право.
      </p>
      <p>
        30.4 Ако сте потребител, живеещ в Европейския съюз или в друга юрисдикция, където се прилагат задължителни местни
        потребителски права, нищо в настоящите Условия не Ви пречи да разчитате на тези задължителни права.
      </p>
      <p>
        30.5 Ако сте бизнес клиент, съдилищата на Англия и Уелс ще имат изключителна юрисдикция
        по всеки спор, произтичащ от или във връзка с настоящите Условия, уебсайта или която и да е поръчка.
      </p>

      <h2>31. Информация за контакт</h2>
      <p>
        Ако имате въпроси относно настоящите Условия, Вашата поръчка, доставка, връщания, гаранция или друг
        въпрос, моля, свържете се с нас:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  en: (
    <PolicyLayout title="Terms and Conditions" lastUpdated="29 May 2026">
      <p>
        These Terms and Conditions (&ldquo;Terms&rdquo;) govern your access to and use of the website
        www.misaelectro.ro and any related pages, services, orders, purchases, communications, and
        transactions operated under the MisaElectro brand.
      </p>
      <p>The Website is operated by:</p>
      <ContactBlock />
      <p>
        In these Terms, &ldquo;MisaElectro&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo; means MISARELIANA S.R.L..
        &ldquo;Customer&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo; means any person or business accessing the
        Website, placing an order, purchasing goods, or otherwise using our services.
      </p>
      <p>
        Please read these Terms carefully before placing an order. By accessing the Website, creating an
        account, submitting an order, or purchasing goods from MisaElectro, you agree to be bound by these
        Terms.
      </p>

      <h2>1. Scope of These Terms</h2>
      <p>1.1 These Terms apply to all use of the Website and all purchases of goods made through MisaElectro.</p>
      <p>
        1.2 MisaElectro sells physical electrical products, electrical materials, wiring accessories,
        lighting-related products, installation components, distribution and circuit protection products,
        sockets, switches, cables, mounting accessories, and other related goods for domestic, commercial,
        trade, and professional use.
      </p>
      <p>
        1.3 These Terms apply together with any other policies published on the Website, including our
        Delivery Policy, Returns and Refunds Policy, Privacy Policy, Cookie Policy, and any product-specific
        warranty or additional warranty terms.
      </p>
      <p>
        1.4 If there is any conflict between these Terms and a product-specific term clearly stated on the
        relevant product page or checkout page, the product-specific term will apply only to that specific
        product or order.
      </p>
      <p>
        1.5 Nothing in these Terms affects your mandatory legal rights where such rights cannot lawfully be
        excluded or limited.
      </p>

      <h2>2. Eligibility and Customer Responsibility</h2>
      <p>2.1 You must be at least 18 years old and have legal capacity to place an order on the Website.</p>
      <p>
        2.2 If you place an order on behalf of a business, company, partnership, organisation, trade
        customer, or other legal entity, you confirm that you are authorised to bind that entity to these Terms.
      </p>
      <p>
        2.3 You are responsible for ensuring that all information you provide to us is accurate, complete, and
        up to date, including your name, billing details, delivery address, contact information, VAT or tax
        details, and any other information required to process your order.
      </p>
      <p>
        2.4 You must not use the Website or purchase goods from MisaElectro for any unlawful, unsafe,
        fraudulent, or unauthorised purpose.
      </p>

      <h2>3. Consumer and Business Customers</h2>
      <p>3.1 MisaElectro sells to both consumers and business customers.</p>
      <p>
        3.2 A &ldquo;Consumer&rdquo; means an individual acting wholly or mainly outside their trade, business,
        craft, or profession.
      </p>
      <p>
        3.3 A &ldquo;Business Customer&rdquo; means any person, company, sole trader, contractor, installer,
        reseller, organisation, public body, or professional purchasing goods for business, commercial,
        trade, resale, installation, or professional purposes.
      </p>
      <p>
        3.4 Certain rights described in these Terms, including statutory consumer cancellation rights, apply
        only to Consumers and do not apply to Business Customers unless required by law.
      </p>
      <p>
        3.5 Business Customers are expected to have appropriate technical knowledge or professional advice
        before purchasing electrical goods. Business Customers are responsible for checking all
        specifications, ratings, compatibility, suitability, compliance requirements, and installation
        conditions before placing an order.
      </p>

      <h2>4. Product Information and Availability</h2>
      <p>
        4.1 We aim to ensure that product descriptions, images, prices, technical details, stock status, and
        other information displayed on the Website are accurate and up to date.
      </p>
      <p>
        4.2 Product images are provided for illustration purposes only. Actual goods may vary slightly from
        images due to manufacturer updates, packaging changes, lighting, screen settings, colour
        differences, batch variations, or technical improvements.
      </p>
      <p>
        4.3 Product specifications may be based on information provided by manufacturers, suppliers,
        distributors, or product databases. While we take reasonable care, we do not guarantee that all
        product data is free from errors, omissions, or updates.
      </p>
      <p>
        4.4 Before placing an order, you are responsible for checking that the product is suitable for your
        intended purpose, including but not limited to:
      </p>
      <ul>
        <li>voltage and electrical rating;</li>
        <li>current, load, wattage, and power requirements;</li>
        <li>dimensions and installation space;</li>
        <li>cable type, cable size, and connection requirements;</li>
        <li>IP rating and environmental suitability;</li>
        <li>indoor or outdoor suitability;</li>
        <li>compatibility with existing systems, fittings, devices, and installations;</li>
        <li>regulatory, safety, and installation requirements in the relevant country or region.</li>
      </ul>
      <p>
        4.5 If you are unsure whether a product is suitable for your intended use, you should contact us
        before ordering or seek advice from a qualified electrician or competent professional.
      </p>
      <p>
        4.6 Availability of products is not guaranteed until your order has been accepted and processed. We
        may cancel or delay an order where a product becomes unavailable, is discontinued, is listed
        incorrectly, or cannot be supplied for reasons outside our reasonable control.
      </p>

      <h2>5. Electrical Safety, Installation, and Use</h2>
      <p>
        5.1 Electrical products can be dangerous if incorrectly selected, installed, connected, modified,
        overloaded, or used.
      </p>
      <p>
        5.2 You must use all products only for their intended purpose and in accordance with all manufacturer
        instructions, safety warnings, installation manuals, voltage ratings, load limits, technical
        specifications, applicable laws, building regulations, electrical standards, and local requirements.
      </p>
      <p>
        5.3 Products that require electrical installation, wiring, connection, testing, commissioning, or
        integration into an electrical system should be installed only by a qualified electrician or competent
        professional where required or appropriate.
      </p>
      <p>
        5.4 MisaElectro does not provide electrical engineering, installation, compliance, inspection,
        certification, or safety approval services through the Website.
      </p>
      <p>
        5.5 Any guidance, product description, compatibility note, or customer support response provided by
        MisaElectro is general information only and must not be treated as a substitute for professional
        advice, electrical inspection, or compliance assessment.
      </p>
      <p>
        5.6 We are not responsible for damage, loss, injury, malfunction, non-compliance, failed
        installation, or safety incidents caused by incorrect installation, incorrect product selection,
        misuse, overloading, unauthorised modification, third-party work, failure to follow instructions, or
        use outside the product&rsquo;s intended purpose.
      </p>

      <h2>6. Accounts, Trade Customers, and Pro Access</h2>
      <p>
        6.1 You may be able to create an account or apply for trade, professional, or business customer
        access on the Website.
      </p>
      <p>
        6.2 We may approve, reject, suspend, or remove any account, trade account, pricing access, or
        professional access at our discretion.
      </p>
      <p>
        6.3 We may request additional information to verify your identity, business status, professional
        activity, VAT/tax details, delivery address, or other relevant information.
      </p>
      <p>
        6.4 You are responsible for keeping your account login details secure. You must notify us immediately
        if you believe your account has been accessed without authorisation.
      </p>
      <p>
        6.5 We are not responsible for losses caused by your failure to keep your account details secure,
        except where required by law.
      </p>

      <h2>7. Orders and Contract Formation</h2>
      <p>
        7.1 By placing an order, you make an offer to purchase the selected goods in accordance with these
        Terms.
      </p>
      <p>
        7.2 After you place an order, you may receive an order confirmation or payment confirmation. This
        does not automatically mean that your order has been accepted.
      </p>
      <p>
        7.3 A contract between you and MisaElectro is formed only when we accept your order, process it for
        fulfilment, or dispatch the goods, whichever occurs first.
      </p>
      <p>7.4 We may refuse, cancel, or limit any order before acceptance where:</p>
      <ul>
        <li>the product is unavailable;</li>
        <li>the product, price, delivery cost, or description contains an error;</li>
        <li>payment is not authorised or is reversed;</li>
        <li>fraud, abuse, suspicious activity, or misuse is suspected;</li>
        <li>delivery is not available to the requested destination;</li>
        <li>customs, sanctions, export, payment processor, carrier, or legal restrictions apply;</li>
        <li>the order appears to be placed for unauthorised resale or unlawful purposes;</li>
        <li>we are unable to verify required customer, billing, or delivery information.</li>
      </ul>
      <p>
        7.5 If we cancel an order after payment has been taken, we will refund the amount paid for the
        cancelled goods, unless we are legally required to withhold payment or the transaction is subject to
        fraud, chargeback, sanctions, or compliance review.
      </p>

      <h2>8. Prices, VAT, and Currencies</h2>
      <p>8.1 The Website may display prices in EUR, RON, and HUF.</p>
      <p>
        8.2 Prices displayed on the Website include VAT where applicable, unless clearly stated otherwise.
      </p>
      <p>
        8.3 The final price payable for your order will be shown at checkout before you complete payment.
      </p>
      <p>
        8.4 Prices may change at any time without notice. Changes will not affect orders already accepted,
        except where a clear pricing error has occurred.
      </p>
      <p>
        8.5 We reserve the right to correct obvious pricing, currency, tax, discount, or product errors. If
        an error affects an order you have placed, we may contact you to confirm whether you wish to proceed
        at the corrected price or cancel the order.
      </p>
      <p>
        8.6 Currency conversion, bank fees, foreign transaction fees, card issuer fees, or exchange rate
        differences are the responsibility of the customer and are not controlled by MisaElectro.
      </p>

      <h2>9. Payment Terms</h2>
      <p>9.1 Payment must be made at checkout.</p>
      <p>9.2 We accept secure card payments, including Visa and Mastercard.</p>
      <p>
        9.3 Payments are processed by secure third-party payment providers. MisaElectro does not store your
        full card number or full card security details.
      </p>
      <p>
        9.4 Your order will not be processed until payment has been successfully authorised or received.
      </p>
      <p>
        9.5 If your payment is declined, reversed, disputed, charged back, or marked as suspicious, we may
        suspend, cancel, or delay your order.
      </p>
      <p>
        9.6 You must not make a fraudulent payment, use an unauthorised payment method, or attempt to bypass
        payment, security, verification, or fraud prevention measures.
      </p>
      <p>
        9.7 For Business Customers, we may issue VAT invoices or commercial invoices where applicable and
        where sufficient billing information has been provided.
      </p>

      <h2>10. Discounts, Promotions, and Free Delivery</h2>
      <p>
        10.1 From time to time, MisaElectro may offer discounts, promotional codes, special prices, free
        delivery thresholds, or trade pricing.
      </p>
      <p>
        10.2 Unless stated otherwise, free delivery applies to eligible orders over &euro;100 / &pound;100 / $100.
      </p>
      <p>
        10.3 The free delivery threshold is calculated based on the product subtotal after discounts and
        before any customs duties, import taxes, additional local charges, or special delivery services.
      </p>
      <p>
        10.4 Free delivery may not apply to certain destinations, oversized goods, heavy goods, restricted
        goods, special order goods, or products requiring special handling.
      </p>
      <p>
        10.5 Promotional codes and discounts may be withdrawn, changed, refused, or cancelled at any time
        where misuse, error, fraud, or technical abuse is suspected.
      </p>
      <p>
        10.6 Promotions cannot be exchanged for cash and may not be combined with other offers unless clearly
        stated.
      </p>

      <h2>11. Delivery and Dispatch</h2>
      <p>11.1 MisaElectro dispatches orders from the United Kingdom.</p>
      <p>
        11.2 Delivery is available to supported delivery destinations shown on the Website or at checkout.
      </p>
      <p>
        11.3 We currently offer standard delivery only. Express delivery is not available unless expressly
        shown at checkout.
      </p>
      <p>
        11.4 Delivery times are estimates only and begin from the dispatch date, not from the date the order
        is placed.
      </p>
      <p>11.5 Estimated delivery times are generally as follows:</p>
      <table>
        <thead>
          <tr>
            <th>Destination</th>
            <th>Estimated delivery time from dispatch</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>United Kingdom</td><td>1&ndash;3 business days</td></tr>
          <tr><td>Europe</td><td>3&ndash;7 business days</td></tr>
          <tr><td>North America</td><td>5&ndash;10 business days</td></tr>
          <tr><td>Asia &amp; Oceania</td><td>7&ndash;14 business days</td></tr>
          <tr><td>Africa &amp; South America</td><td>8&ndash;15 business days</td></tr>
        </tbody>
      </table>
      <p>
        11.6 European and international deliveries may be handled by DHL, partner carriers, local couriers,
        or other logistics providers.
      </p>
      <p>
        11.7 Delivery times may be affected by factors outside our control, including customs processing,
        local courier handling, remote or rural delivery areas, incomplete delivery information, public
        holidays, weather conditions, transport disruption, strikes, security checks, import controls, or
        carrier delays.
      </p>
      <p>
        11.8 You are responsible for providing a complete and accurate delivery address. We are not
        responsible for failed, delayed, or misdirected delivery caused by incorrect or incomplete
        information provided by you.
      </p>
      <p>11.9 Once an order has been dispatched, changes to the delivery address may not be possible.</p>
      <p>
        11.10 If a parcel is returned to us because you provided an incorrect address, failed to collect it,
        refused delivery, or failed to complete customs or courier requirements, we may deduct delivery
        costs, return costs, customs charges, carrier fees, and other reasonable costs from any refund,
        unless prohibited by law.
      </p>

      <h2>12. International Orders, Customs, and Import Charges</h2>
      <p>
        12.1 For deliveries outside the United Kingdom, your order may be subject to customs clearance,
        import duties, import VAT, taxes, brokerage fees, handling fees, carrier fees, or other local
        charges.
      </p>
      <p>
        12.2 Unless expressly stated otherwise at checkout, you are responsible for all customs duties,
        import VAT, taxes, brokerage fees, and local charges payable in the destination country.
      </p>
      <p>
        12.3 MisaElectro has no control over customs processing times, customs decisions, import restrictions,
        local tax assessments, or charges imposed by authorities, couriers, or customs brokers.
      </p>
      <p>
        12.4 You are responsible for ensuring that the goods you order can lawfully be imported into and used
        in your country or region.
      </p>
      <p>
        12.5 If an order is delayed, returned, seized, rejected, or destroyed by customs or local
        authorities due to import restrictions, unpaid charges, incorrect information provided by you, or
        failure to comply with local requirements, MisaElectro will not be responsible for the resulting loss,
        delay, or costs except where required by law.
      </p>

      <h2>13. Risk and Ownership</h2>
      <p>
        13.1 Ownership of the goods passes to you only when we have received full payment for the goods and
        any applicable delivery charges.
      </p>
      <p>
        13.2 For Consumer orders, risk in the goods passes to you when the goods are delivered to you or to a
        person identified by you to receive them.
      </p>
      <p>
        13.3 For Business Customer orders, risk passes to you when the goods are delivered to the delivery
        address, handed to the first carrier for delivery, or otherwise made available for collection,
        depending on the delivery method agreed or used.
      </p>
      <p>
        13.4 You are responsible for inspecting goods upon delivery and storing them safely and appropriately.
      </p>

      <h2>14. Consumer Cancellation Rights</h2>
      <p>
        14.1 If you are a Consumer, you may have a legal right to cancel eligible online purchases within 14
        days of receiving the goods, without giving a reason.
      </p>
      <p>
        14.2 The cancellation period will expire 14 days after the day on which you, or a person identified
        by you, receive the goods.
      </p>
      <p>
        14.3 If your order is delivered in multiple parcels, the cancellation period will usually expire 14
        days after the day on which you receive the last parcel.
      </p>
      <p>
        14.4 To exercise your cancellation right, you must inform us clearly by email at info@misaelectro.ro
        before the cancellation period expires.
      </p>
      <p>
        14.5 After notifying us that you wish to cancel, you must return the goods to us without undue delay
        and no later than 14 days from the date you notified us of your cancellation.
      </p>
      <p>
        14.6 Returned goods must be unused, uninstalled, complete, in their original packaging where
        possible, with all accessories, manuals, labels, protective materials, and included items.
      </p>
      <p>
        14.7 You are responsible for return shipping costs unless the goods are faulty, damaged, incorrect,
        or we have agreed otherwise in writing.
      </p>
      <p>
        14.8 We may reduce your refund to reflect any reduction in the value of the goods caused by handling
        beyond what is necessary to inspect the nature, characteristics, and functioning of the goods.
      </p>
      <p>
        14.9 Where required by law, we will refund the basic standard delivery cost paid for the original
        delivery. Additional delivery costs, upgraded services, international charges, customs charges,
        import duties, brokerage fees, or special delivery costs may not be refundable unless required by
        law.
      </p>
      <p>14.10 Refunds will be made to the original payment method where possible.</p>

      <h2>15. Non-Returnable and Restricted Return Items</h2>
      <p>
        15.1 Certain goods cannot be returned for a change of mind unless they are faulty, damaged,
        incorrect, or return rights are required by law.
      </p>
      <p>15.2 Non-returnable or restricted return items may include:</p>
      <ul>
        <li>goods made to order;</li>
        <li>goods specially ordered for you;</li>
        <li>goods cut to size, including cable or similar materials;</li>
        <li>customised, modified, assembled, or altered goods;</li>
        <li>installed, wired, connected, tested, commissioned, or used electrical goods;</li>
        <li>goods damaged after delivery;</li>
        <li>goods missing parts, accessories, packaging, manuals, labels, seals, or protective materials;</li>
        <li>goods that are no longer in resaleable condition;</li>
        <li>goods affected by incorrect storage, moisture, heat, impact, contamination, misuse, or unauthorised handling;</li>
        <li>clearance, final sale, or discontinued items where return restrictions are clearly stated and lawful.</li>
      </ul>
      <p>
        15.3 This section does not limit your legal rights where goods are faulty, not as described, unsafe,
        or otherwise non-compliant with applicable law.
      </p>

      <h2>16. Faulty, Damaged, or Incorrect Goods</h2>
      <p>
        16.1 If goods arrive damaged, faulty, incomplete, or incorrect, you should contact us as soon as
        possible at info@misaelectro.ro.
      </p>
      <p>
        16.2 Please provide your order number, a description of the issue, and clear photos or videos
        showing the goods, packaging, labels, damage, or defect where reasonably possible.
      </p>
      <p>
        16.3 You should keep the product, packaging, labels, and delivery materials until the issue has been
        reviewed, as they may be required for carrier claims, supplier inspection, or warranty assessment.
      </p>
      <p>
        16.4 For visible delivery damage, please notify us within 48 hours of delivery where possible. This
        helps us investigate courier issues quickly, but it does not remove any mandatory legal rights you
        may have.
      </p>
      <p>
        16.5 Where goods are confirmed to be faulty, damaged before delivery, incorrect, or otherwise not in
        conformity with the contract, we may offer a repair, replacement, refund, partial refund, or other
        remedy in accordance with applicable law.
      </p>
      <p>
        16.6 We may require the goods to be returned for inspection before approving a refund, replacement,
        or warranty remedy.
      </p>
      <p>
        16.7 If the goods are confirmed to be faulty, damaged, or incorrect, we will cover reasonable return
        shipping costs or provide return instructions.
      </p>
      <p>
        16.8 We are not responsible for faults or damage caused by incorrect installation, misuse,
        overloading, unauthorised modification, external damage, unsuitable environment, incorrect storage,
        third-party work, failure to follow instructions, power surges, wear and tear, or use outside the
        product&rsquo;s intended purpose.
      </p>

      <h2>17. Legal Guarantee and Statutory Rights</h2>
      <p>
        17.1 Consumers may have statutory rights under applicable consumer protection laws where goods are
        faulty, not as described, not fit for purpose, unsafe, or not in conformity with the contract.
      </p>
      <p>
        17.2 For EU Consumers, applicable consumer law may provide a minimum 2-year legal guarantee from the
        date the goods are received, covering defects or lack of conformity that existed at the time of
        delivery and become apparent during the legal guarantee period.
      </p>
      <p>
        17.3 For UK Consumers, statutory rights apply under applicable UK consumer law. These rights may
        include remedies where goods are faulty, not as described, or not fit for purpose.
      </p>
      <p>
        17.4 These statutory rights are separate from, and are not limited by, any manufacturer warranty,
        commercial warranty, additional warranty, or return policy offered by MisaElectro.
      </p>
      <p>
        17.5 Business Customers do not receive consumer statutory cancellation rights and may have more
        limited rights than Consumers, except where mandatory law provides otherwise.
      </p>

      <h2>18. Additional Warranty</h2>
      <p>18.1 MisaElectro may offer paid additional warranty options for selected products.</p>
      <p>18.2 Additional Warranty is optional and may be purchased at checkout where available.</p>
      <p>
        18.3 Unless otherwise stated on the product page or at checkout, Additional Warranty pricing is
        calculated as follows:
      </p>
      <table>
        <thead>
          <tr>
            <th>Additional Warranty option</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>+1 Year Additional Warranty</td><td>10% of the product price, minimum &euro;6.99 / &pound;6.99 / $6.99</td></tr>
          <tr><td>+2 Year Additional Warranty</td><td>16% of the product price, minimum &euro;9.99 / &pound;9.99 / $9.99</td></tr>
          <tr><td>+3 Year Additional Warranty</td><td>22% of the product price, minimum &euro;12.99 / &pound;12.99 / $12.99</td></tr>
        </tbody>
      </table>
      <p>
        18.4 The Additional Warranty price is calculated based on the product price before delivery charges,
        customs duties, import taxes, brokerage fees, or other local charges.
      </p>
      <p>
        18.5 Additional Warranty is a commercial warranty offered in addition to your statutory rights. It
        does not replace, reduce, or limit any mandatory legal rights you may have.
      </p>
      <p>
        18.6 Unless otherwise stated, Additional Warranty coverage begins after the expiry of the original
        warranty, legal guarantee, manufacturer warranty, or standard warranty period applicable to the
        relevant product.
      </p>
      <p>
        18.7 Additional Warranty covers eligible manufacturing defects and material defects that arise during
        normal use of the product in accordance with the manufacturer&rsquo;s instructions and applicable
        technical requirements.
      </p>
      <p>18.8 Additional Warranty does not cover:</p>
      <ul>
        <li>incorrect installation, wiring, connection, testing, or commissioning;</li>
        <li>installation by an unqualified or unauthorised person where professional installation is required or appropriate;</li>
        <li>misuse, negligence, abuse, overloading, or operation outside rated specifications;</li>
        <li>unauthorised repair, modification, opening, dismantling, or alteration;</li>
        <li>accidental damage, impact damage, water damage, moisture damage, fire damage, or external damage;</li>
        <li>damage caused by power surges, unstable power supply, incorrect voltage, lightning, or electrical faults in the wider installation;</li>
        <li>normal wear and tear;</li>
        <li>cosmetic damage that does not affect functionality;</li>
        <li>consumable parts, batteries, bulbs, fuses, seals, connectors, accessories, or parts expected to wear out unless expressly covered;</li>
        <li>defects caused by unsuitable storage, transport, environment, contamination, corrosion, dust, humidity, chemicals, or temperature conditions;</li>
        <li>products used for purposes outside the manufacturer&rsquo;s stated intended use;</li>
        <li>loss of profits, labour costs, electrician costs, removal costs, reinstallation costs, downtime, or indirect losses.</li>
      </ul>
      <p>
        18.9 To make an Additional Warranty claim, you must contact us at info@misaelectro.ro with your order
        number, proof of purchase, description of the defect, and supporting photos, videos, or diagnostic
        information where reasonably requested.
      </p>
      <p>
        18.10 We may require the product to be returned for inspection before approving any warranty remedy.
      </p>
      <p>
        18.11 Where a valid Additional Warranty claim is approved, we may, depending on the product and
        circumstances, provide repair, replacement, equivalent replacement, partial refund, or another
        reasonable remedy.
      </p>
      <p>
        18.12 Additional Warranty is linked to the product and original order. It may not be transferable
        unless we expressly agree in writing.
      </p>
      <p>
        18.13 If you cancel or return a product in accordance with your legal rights before the Additional
        Warranty begins, any Additional Warranty purchased for that product will also be refunded where
        required by law.
      </p>

      <h2>19. Business Customer Terms</h2>
      <p>
        19.1 Business Customers are responsible for checking all product specifications, suitability,
        compatibility, compliance requirements, installation requirements, and local regulatory obligations
        before ordering.
      </p>
      <p>
        19.2 Business Customers do not have a general right to cancel or return goods due to change of mind,
        incorrect ordering, surplus stock, unsuitable specification, customer project changes, or non-faulty
        goods unless we agree otherwise in writing.
      </p>
      <p>
        19.3 Any return accepted from a Business Customer is at our discretion and may be subject to
        inspection, restocking fees, return shipping costs, and deduction for reduced resale value.
      </p>
      <p>
        19.4 Business Customers must inspect goods promptly upon delivery and notify us of visible damage,
        shortages, incorrect goods, or delivery issues as soon as reasonably possible.
      </p>
      <p>
        19.5 Where permitted by law, our total liability to a Business Customer for any order will not exceed
        the price paid for the goods giving rise to the claim.
      </p>
      <p>
        19.6 We will not be liable to Business Customers for loss of profit, loss of revenue, loss of
        contract, loss of business opportunity, loss of goodwill, loss of data, labour costs, installation
        costs, removal costs, reinstallation costs, downtime, project delays, or indirect or consequential
        losses.
      </p>

      <h2>20. Product Compliance and Local Regulations</h2>
      <p>
        20.1 Products sold by MisaElectro may be designed for specific markets, standards, voltage systems,
        fittings, or installation environments.
      </p>
      <p>
        20.2 You are responsible for checking whether a product is suitable and lawful for installation,
        resale, import, or use in your country, region, property, project, or electrical system.
      </p>
      <p>
        20.3 We do not guarantee that products purchased from MisaElectro will meet every local building code,
        electrical code, certification requirement, insurance requirement, workplace requirement, or project
        specification outside the information expressly stated on the product page.
      </p>
      <p>
        20.4 Business Customers, installers, contractors, resellers, and professional buyers are responsible
        for obtaining all permits, approvals, inspections, certifications, and professional sign-offs
        required for their use, installation, resale, or project.
      </p>

      <h2>21. Intellectual Property</h2>
      <p>
        21.1 All content on the Website, including text, layout, branding, logos, graphics, icons, product
        descriptions, photographs, videos, design elements, and other materials, belongs to MisaElectro,
        MISARELIANA S.R.L., suppliers, manufacturers, licensors, or other rights holders.
      </p>
      <p>
        21.2 You may use the Website only for personal, business, or purchasing purposes in accordance with
        these Terms.
      </p>
      <p>
        21.3 You must not copy, reproduce, scrape, extract, distribute, sell, modify, publish, or
        commercially exploit any Website content without our prior written permission.
      </p>
      <p>
        21.4 Purchase of a product does not transfer any intellectual property rights in the product, brand,
        design, software, documentation, or related materials, except the right to use the purchased product
        lawfully and as intended.
      </p>

      <h2>22. Website Use and Prohibited Conduct</h2>
      <p>22.1 You must not misuse the Website.</p>
      <p>22.2 You must not:</p>
      <ul>
        <li>attempt to gain unauthorised access to the Website, servers, systems, accounts, or data;</li>
        <li>interfere with Website security, operation, or availability;</li>
        <li>use bots, scrapers, crawlers, automated tools, or data extraction methods without permission;</li>
        <li>upload malicious code, viruses, or harmful material;</li>
        <li>place fraudulent, false, abusive, or speculative orders;</li>
        <li>impersonate another person or business;</li>
        <li>use the Website for unlawful, harmful, misleading, or prohibited purposes;</li>
        <li>attempt to bypass geographic, payment, security, fraud prevention, or sanctions controls.</li>
      </ul>
      <p>
        22.3 We may restrict, suspend, or terminate access to the Website where we suspect misuse, fraud,
        security risk, breach of these Terms, or unlawful activity.
      </p>

      <h2>23. Sanctions, Export Controls, and Restricted Destinations</h2>
      <p>
        23.1 We may refuse, cancel, suspend, or block any order where required or appropriate due to
        sanctions, export controls, financial crime controls, payment processor rules, courier restrictions,
        customs restrictions, or legal obligations.
      </p>
      <p>
        23.2 We may screen orders, customers, billing details, delivery addresses, payment information, and
        destinations against applicable sanctions, restricted party, fraud prevention, and compliance
        requirements.
      </p>
      <p>
        23.3 We cannot accept orders where doing so would breach applicable laws, sanctions, export controls,
        carrier rules, payment processor requirements, or internal compliance controls.
      </p>
      <p>
        23.4 You confirm that you are not subject to sanctions, not located in a restricted territory, and
        not purchasing goods for export, resale, transfer, or use in breach of applicable sanctions, export
        controls, or laws.
      </p>
      <p>
        23.5 We are not responsible for losses, delays, cancellations, or blocked transactions caused by
        sanctions, export controls, customs restrictions, payment processor rules, or legal compliance
        requirements.
      </p>

      <h2>24. Privacy and Cookies</h2>
      <p>24.1 We process personal data in accordance with our Privacy Policy.</p>
      <p>
        24.2 The Website uses cookies and similar technologies in accordance with our Cookie Policy.
      </p>
      <p>
        24.3 By using the Website, you acknowledge that your personal data may be processed for purposes
        including order fulfilment, payment processing, delivery, customer support, fraud prevention, legal
        compliance, account management, analytics, and service improvement.
      </p>

      <h2>25. Limitation of Liability</h2>
      <p>
        25.1 Nothing in these Terms excludes or limits liability where it would be unlawful to do so,
        including liability for death or personal injury caused by negligence, fraud, fraudulent
        misrepresentation, or any liability that cannot be excluded under applicable law.
      </p>
      <p>25.2 Nothing in these Terms limits your mandatory statutory rights as a Consumer.</p>
      <p>25.3 Subject to sections 25.1 and 25.2, MisaElectro will not be liable for:</p>
      <ul>
        <li>indirect, incidental, special, consequential, or punitive losses;</li>
        <li>loss of profit, revenue, business, opportunity, contract, goodwill, or anticipated savings;</li>
        <li>loss of data or system interruption;</li>
        <li>labour, installation, removal, reinstallation, testing, inspection, certification, or contractor costs;</li>
        <li>project delays, operational downtime, or business interruption;</li>
        <li>losses caused by incorrect product selection, installation, misuse, overloading, unauthorised modification, or failure to follow instructions;</li>
        <li>losses caused by events outside our reasonable control.</li>
      </ul>
      <p>
        25.4 Products must be selected, installed, and used correctly. We are not responsible for
        consequences arising from incorrect installation, unsafe installation, or use contrary to
        manufacturer instructions or applicable regulations.
      </p>
      <p>
        25.5 Where you are a Business Customer, and to the fullest extent permitted by law, our total
        liability in connection with any order will not exceed the amount paid for the goods giving rise to
        the claim.
      </p>

      <h2>26. Events Outside Our Control</h2>
      <p>
        26.1 We will not be responsible for failure or delay in performing our obligations where caused by
        events outside our reasonable control.
      </p>
      <p>
        26.2 Such events may include supply chain disruption, manufacturer delay, transport disruption,
        courier failure, customs delay, strikes, labour disputes, extreme weather, natural disasters, fire,
        flood, war, terrorism, civil unrest, epidemic, pandemic, government action, regulatory change,
        sanctions, power failure, internet failure, technical failure, or other circumstances beyond our
        reasonable control.
      </p>
      <p>
        26.3 If such an event affects your order, we will take reasonable steps to minimise disruption and
        may contact you with updated information where appropriate.
      </p>

      <h2>27. Changes to the Website, Products, and Terms</h2>
      <p>
        27.1 We may update the Website, product range, pricing, delivery options, policies, and these Terms
        from time to time.
      </p>
      <p>
        27.2 The version of the Terms in force at the time you place your order will apply to that order,
        unless a change is required by law or relates to a correction that must be applied.
      </p>
      <p>
        27.3 Continued use of the Website after updated Terms are published means you accept the updated
        Terms for future use and future orders.
      </p>

      <h2>28. Severability</h2>
      <p>
        28.1 If any part of these Terms is found to be invalid, unlawful, or unenforceable, that part will
        be treated as removed or modified to the minimum extent necessary.
      </p>
      <p>28.2 The remaining parts of these Terms will continue in full force and effect.</p>

      <h2>29. Transfer of Rights</h2>
      <p>
        29.1 We may transfer, assign, subcontract, or otherwise deal with our rights and obligations under
        these Terms where this does not materially reduce your rights as a Consumer.
      </p>
      <p>
        29.2 You may not transfer your rights or obligations under these Terms without our prior written
        consent, except where required by law.
      </p>

      <h2>30. Governing Law and Jurisdiction</h2>
      <p>30.1 These Terms are governed by the laws of England and Wales.</p>
      <p>
        30.2 If you are a Consumer, you may also benefit from any mandatory consumer protection rights
        available under the laws of your country of residence.
      </p>
      <p>
        30.3 If you are a Consumer living in the United Kingdom, disputes may be brought before the courts
        of England and Wales, or any other UK court that has jurisdiction under applicable law.
      </p>
      <p>
        30.4 If you are a Consumer living in the European Union or another jurisdiction where mandatory local
        consumer rights apply, nothing in these Terms prevents you from relying on those mandatory rights.
      </p>
      <p>
        30.5 If you are a Business Customer, the courts of England and Wales will have exclusive jurisdiction
        over any dispute arising out of or in connection with these Terms, the Website, or any order.
      </p>

      <h2>31. Contact Information</h2>
      <p>
        If you have any questions about these Terms, your order, delivery, returns, warranty, or any other
        matter, please contact us:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
};

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return content[(locale as Locale)] ?? content.en;
}
