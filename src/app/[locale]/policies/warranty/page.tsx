import { PolicyLayout, ContactBlock } from "@/components/layout/PolicyLayout/PolicyLayout";
import type { ReactNode } from "react";

type Locale = "ro" | "hu" | "bg" | "en";

const metaTitles: Record<Locale, string> = {
  ro: "Politica de garanție — MisaElectro",
  hu: "Jótállási szabályzat — MisaElectro",
  bg: "Гаранционна политика — MisaElectro",
  en: "Warranty Policy — MisaElectro",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return { title: metaTitles[(locale as Locale)] ?? metaTitles.en };
}

const en: ReactNode = (
  <PolicyLayout title="Warranty Policy" lastUpdated="29 May 2026">
    <p>
      This Warranty Policy explains how statutory rights, legal guarantees, manufacturer warranties, and
      paid Additional Warranty options apply to products purchased through www.misaelectro.ro.
    </p>
    <p>The Website is operated by:</p>
    <ContactBlock />
    <p>
      In this Policy, &ldquo;MisaElectro&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;
      means MISARELIANA S.R.L.. &ldquo;Customer&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo; means any
      person or business purchasing goods through the Website.
    </p>
    <p>
      This Policy should be read together with our Terms and Conditions, Shipping Policy, Returns, Refunds
      and Cancellation Policy, Payment Policy, Privacy Policy, and any product-specific warranty
      information.
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
      1.3 Because electrical goods can be safety-critical, warranty eligibility may depend on correct
      product selection, correct installation, proper use, compliance with manufacturer instructions, and
      suitable operating conditions.
    </p>
    <p>
      1.4 This Policy applies to both Consumers and Business Customers, but some statutory rights apply
      only to Consumers.
    </p>

    <h2>2. Statutory Rights, Legal Guarantees, and Commercial Warranties</h2>
    <p>2.1 Your statutory rights are rights provided by applicable consumer law.</p>
    <p>
      2.2 Statutory rights may apply where goods are faulty, not as described, not fit for purpose, unsafe,
      or not in conformity with the contract.
    </p>
    <p>
      2.3 These statutory rights are separate from any manufacturer warranty, commercial warranty, paid
      Additional Warranty, or voluntary warranty service.
    </p>
    <p>
      2.4 Nothing in this Policy excludes, restricts, or reduces any mandatory statutory rights that apply
      to you.
    </p>
    <p>
      2.5 A manufacturer warranty or Additional Warranty may give you extra protection, but it does not
      replace your legal rights.
    </p>

    <h2>3. UK Consumer Rights</h2>
    <p>
      3.1 If you are a UK Consumer, you may have statutory rights under applicable UK consumer protection
      law where goods are faulty, not as described, not fit for purpose, or otherwise do not meet required
      standards.
    </p>
    <p>
      3.2 These rights may include remedies such as repair, replacement, refund, or price reduction
      depending on the circumstances, timing, product condition, and applicable law.
    </p>
    <p>3.3 This Policy does not limit any rights that cannot lawfully be excluded.</p>

    <h2>4. EU Consumer Legal Guarantee</h2>
    <p>
      4.1 If you are an EU Consumer, you may have a minimum 2-year legal guarantee under applicable EU
      consumer law.
    </p>
    <p>
      4.2 The legal guarantee may apply where goods are not in conformity with the contract, are
      defective, not as described, not fit for purpose, or otherwise fail to meet applicable conformity
      requirements.
    </p>
    <p>
      4.3 The legal guarantee is provided by law and is separate from any paid Additional Warranty,
      manufacturer warranty, or commercial warranty.
    </p>
    <p>
      4.4 The availability, procedure, burden of proof, remedies, and limitation periods may depend on the
      law of your country of residence and the circumstances of the claim.
    </p>

    <h2>5. Manufacturer Warranty</h2>
    <p>5.1 Some products may come with a manufacturer warranty.</p>
    <p>5.2 Manufacturer warranty terms are set by the manufacturer, not by MisaElectro.</p>
    <p>
      5.3 Manufacturer warranties may vary by product, brand, country, product type, installation
      requirements, and usage conditions.
    </p>
    <p>5.4 A manufacturer warranty may require:</p>
    <ul>
      <li>proof of purchase;</li>
      <li>product serial number;</li>
      <li>installation evidence;</li>
      <li>professional installation documentation;</li>
      <li>correct use;</li>
      <li>compliance with manufacturer instructions;</li>
      <li>registration with the manufacturer;</li>
      <li>return or inspection of the product.</li>
    </ul>
    <p>
      5.5 MisaElectro may assist with manufacturer warranty claims where reasonable, but we do not control
      manufacturer decisions, warranty processing times, inspection results, replacement availability, or
      repair procedures.
    </p>
    <p>
      5.6 If manufacturer warranty terms differ from this Policy, the manufacturer&rsquo;s warranty terms
      may apply to the manufacturer warranty claim.
    </p>

    <h2>6. Paid Additional Warranty</h2>
    <p>6.1 MisaElectro may offer paid Additional Warranty options for selected products.</p>
    <p>6.2 Additional Warranty is optional and may be selected at checkout where available.</p>
    <p>
      6.3 Additional Warranty provides commercial warranty protection in addition to your statutory rights.
    </p>
    <p>
      6.4 Additional Warranty does not replace, reduce, or limit your statutory rights or any legal
      guarantee that may apply.
    </p>
    <p>
      6.5 Unless otherwise stated on the product page or at checkout, Additional Warranty pricing is
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
      6.6 The Additional Warranty price is calculated based on the product price before delivery charges,
      customs duties, import VAT, brokerage fees, local taxes, or other destination charges.
    </p>
    <p>
      6.7 Additional Warranty availability may vary by product, category, destination, order type, or
      checkout configuration.
    </p>

    <h2>7. When Additional Warranty Starts</h2>
    <p>
      7.1 Unless otherwise stated at checkout or in product-specific warranty terms, paid Additional
      Warranty begins after the expiry of the standard warranty, manufacturer warranty, statutory warranty
      period, or legal guarantee period applicable to the relevant product.
    </p>
    <p>
      7.2 Where more than one warranty or legal guarantee may apply, the Additional Warranty is intended to
      provide extra protection after the original applicable warranty period ends, not to shorten or
      replace it.
    </p>
    <p>7.3 Additional Warranty applies only for the duration selected at checkout:</p>
    <ul>
      <li>+1 year;</li>
      <li>+2 years;</li>
      <li>+3 years.</li>
    </ul>
    <p>7.4 Additional Warranty is linked to the product and original order.</p>

    <h2>8. What Additional Warranty Covers</h2>
    <p>
      8.1 Subject to this Policy and any product-specific terms, Additional Warranty covers eligible
      manufacturing defects and material defects that arise during normal use.
    </p>
    <p>8.2 Coverage applies only where the product has been:</p>
    <ul>
      <li>correctly selected for its intended purpose;</li>
      <li>installed correctly where installation is required;</li>
      <li>used in accordance with manufacturer instructions;</li>
      <li>operated within rated specifications;</li>
      <li>stored in suitable conditions;</li>
      <li>maintained where required;</li>
      <li>not misused, overloaded, modified, or damaged.</li>
    </ul>
    <p>
      8.3 Where a valid Additional Warranty claim is approved, we may provide one or more of the following
      remedies:
    </p>
    <ul>
      <li>repair;</li>
      <li>replacement;</li>
      <li>equivalent replacement;</li>
      <li>partial refund;</li>
      <li>refund;</li>
      <li>store credit, where agreed;</li>
      <li>another reasonable remedy.</li>
    </ul>
    <p>
      8.4 The remedy will depend on the product type, defect, availability of replacement parts,
      manufacturer/supplier position, inspection results, age of the product, and applicable law.
    </p>

    <h2>9. What Warranty Does Not Cover</h2>
    <p>
      9.1 Unless expressly stated otherwise, statutory warranty support, manufacturer warranties, and paid
      Additional Warranty do not cover problems caused by customer-side factors, external events, misuse,
      or incorrect installation.
    </p>
    <p>9.2 Warranty coverage does not normally include:</p>
    <ul>
      <li>incorrect product selection;</li>
      <li>incompatibility with your installation, system, wiring, voltage, environment, or project requirements;</li>
      <li>incorrect installation, wiring, connection, testing, commissioning, or integration;</li>
      <li>installation by an unqualified or unauthorised person where professional installation is required or appropriate;</li>
      <li>failure to follow manufacturer instructions, installation manuals, safety warnings, or technical specifications;</li>
      <li>misuse, negligence, abuse, careless handling, or unsafe use;</li>
      <li>overloading, incorrect voltage, incorrect current, excessive load, unsuitable power supply, or operation outside rated specifications;</li>
      <li>unauthorised repair, modification, opening, dismantling, alteration, or tampering;</li>
      <li>accidental damage, impact damage, fire damage, water damage, moisture damage, chemical damage, corrosion, contamination, dust, or dirt ingress;</li>
      <li>damage caused by power surges, lightning, unstable power supply, electrical faults, or wider installation faults;</li>
      <li>normal wear and tear;</li>
      <li>cosmetic damage that does not affect product functionality;</li>
      <li>consumable parts, replaceable parts, batteries, bulbs, fuses, lamps, seals, connectors, accessories, filters, or items expected to wear out unless expressly covered;</li>
      <li>damage caused by unsuitable storage, transport, temperature, humidity, or environment;</li>
      <li>products used for purposes outside the manufacturer&rsquo;s intended use;</li>
      <li>products used in industrial, commercial, rental, or high-load environments where the product is not designed for such use;</li>
      <li>software, firmware, configuration, calibration, or compatibility issues unless expressly covered;</li>
      <li>labour costs, electrician costs, contractor costs, testing costs, inspection costs, removal costs, reinstallation costs, certification costs, project delays, downtime, loss of profit, or indirect losses.</li>
    </ul>
    <p>
      9.3 Warranty does not cover defects or damage caused after delivery by events outside
      MisaElectro&rsquo;s control.
    </p>

    <h2>10. Electrical Installation Responsibility</h2>
    <p>
      10.1 Electrical products can be dangerous if incorrectly selected, installed, connected, wired,
      modified, overloaded, or used.
    </p>
    <p>
      10.2 You are responsible for ensuring that the product is suitable for your intended use before
      purchase.
    </p>
    <p>10.3 You should check all relevant specifications, including:</p>
    <ul>
      <li>voltage;</li>
      <li>current;</li>
      <li>wattage;</li>
      <li>load rating;</li>
      <li>IP rating;</li>
      <li>dimensions;</li>
      <li>cable type;</li>
      <li>connector type;</li>
      <li>installation environment;</li>
      <li>compatibility;</li>
      <li>local electrical requirements;</li>
      <li>product code and technical documentation.</li>
    </ul>
    <p>
      10.4 Products requiring installation, wiring, connection, testing, commissioning, or integration
      into an electrical system should be installed only by a qualified electrician or competent
      professional where required or appropriate.
    </p>
    <p>
      10.5 Warranty may be refused or limited where a defect is caused by incorrect installation, unsafe
      installation, non-compliant installation, unsuitable use, or failure to follow instructions.
    </p>

    <h2>11. How to Make a Warranty Claim</h2>
    <p>11.1 To make a warranty claim, contact us at info@misaelectro.ro.</p>
    <p>11.2 Please provide:</p>
    <ul>
      <li>your full name;</li>
      <li>order number;</li>
      <li>product name or SKU;</li>
      <li>date of purchase;</li>
      <li>description of the issue;</li>
      <li>when the issue first appeared;</li>
      <li>photos or videos showing the product and defect;</li>
      <li>photos of product labels, serial numbers, model numbers, or manufacturer markings;</li>
      <li>installation details where relevant;</li>
      <li>proof of professional installation where reasonably required;</li>
      <li>any troubleshooting steps already taken.</li>
    </ul>
    <p>11.3 We may ask for additional information to assess the claim.</p>
    <p>
      11.4 You must stop using the product if continued use may be unsafe, may worsen the defect, or may
      cause damage.
    </p>
    <p>
      11.5 Do not attempt unauthorised repair, modification, dismantling, or testing where this may affect
      safety or warranty eligibility.
    </p>

    <h2>12. Inspection and Assessment</h2>
    <p>
      12.1 Warranty claims may require inspection by MisaElectro, the manufacturer, supplier, service
      provider, or another authorised party.
    </p>
    <p>12.2 We may require you to return the product for inspection before approving a remedy.</p>
    <p>12.3 Inspection may consider:</p>
    <ul>
      <li>product condition;</li>
      <li>installation evidence;</li>
      <li>signs of misuse or external damage;</li>
      <li>signs of overloading or incorrect voltage;</li>
      <li>environmental exposure;</li>
      <li>modification or tampering;</li>
      <li>manufacturer findings;</li>
      <li>compatibility with claimed fault;</li>
      <li>whether the defect is covered by law, manufacturer warranty, or Additional Warranty.</li>
    </ul>
    <p>
      12.4 If inspection confirms that the issue is covered, we will provide an appropriate remedy in
      accordance with this Policy and applicable law.
    </p>
    <p>
      12.5 If inspection finds that the issue is not covered, we may reject the claim and, where
      applicable, return the product to you at your cost or offer a paid repair or replacement where
      available.
    </p>

    <h2>13. Return Shipping for Warranty Claims</h2>
    <p>13.1 You should not return a product for warranty assessment without contacting us first.</p>
    <p>13.2 We will provide return instructions where a return is required.</p>
    <p>
      13.3 For valid warranty claims involving faulty, damaged, or non-conforming goods, return shipping
      may be covered by MisaElectro where required by law or approved by us.
    </p>
    <p>
      13.4 If a warranty claim is rejected because the defect is not covered, you may be responsible for
      return shipping, inspection costs, handling costs, or other reasonable costs where permitted by law
      and where clearly communicated.
    </p>
    <p>
      13.5 For international warranty claims, customs declarations, import/export documents, taxes, duties,
      brokerage fees, and courier charges may apply. These may be the customer&rsquo;s responsibility
      unless the claim is confirmed as valid and applicable law requires otherwise.
    </p>

    <h2>14. Replacement Products and Repaired Products</h2>
    <p>
      14.1 Replacement products may be new, equivalent, refurbished, reconditioned, repaired, or
      functionally equivalent where permitted by law and appropriate in the circumstances.
    </p>
    <p>
      14.2 If the original product is discontinued or unavailable, we may offer an equivalent or
      reasonably comparable product.
    </p>
    <p>
      14.3 A replacement or repair does not automatically restart the original warranty period unless
      required by law or expressly stated in writing.
    </p>
    <p>
      14.4 Any replacement, repaired product, or equivalent product will normally remain covered only for
      the remaining period of the original warranty or Additional Warranty, unless applicable law requires
      otherwise.
    </p>

    <h2>15. Refunds Under Warranty</h2>
    <p>
      15.1 Refunds under warranty may be offered where repair or replacement is not available, not
      practical, not proportionate, or required by law.
    </p>
    <p>
      15.2 Refund amounts may take into account the product age, use, condition, inspection results,
      applicable law, and the nature of the defect.
    </p>
    <p>15.3 Refunds will normally be made to the original payment method where possible.</p>
    <p>
      15.4 Delivery charges, customs duties, import VAT, brokerage fees, courier handling charges, local
      taxes, installation costs, labour costs, and other third-party costs are not normally refundable
      under warranty unless required by law.
    </p>

    <h2>16. Additional Warranty Cancellation and Refunds</h2>
    <p>
      16.1 If you validly cancel or return a product before the Additional Warranty begins and the product
      refund is approved, the related Additional Warranty charge may also be refunded where required by
      law or approved by MisaElectro.
    </p>
    <p>
      16.2 If the Additional Warranty has already begun or has already been used for a claim, it may not
      be refundable unless required by law.
    </p>
    <p>
      16.3 Additional Warranty is linked to the relevant product and order and cannot normally be
      transferred to another product, order, person, or customer.
    </p>

    <h2>17. Business Customer Warranty Terms</h2>
    <p>
      17.1 Business Customers are responsible for checking product suitability, specifications,
      compatibility, installation requirements, and regulatory requirements before purchase.
    </p>
    <p>
      17.2 Business Customers are expected to have appropriate technical knowledge or professional advice
      when purchasing electrical goods.
    </p>
    <p>
      17.3 Warranty remedies for Business Customers may be more limited than those available to Consumers,
      except where mandatory law provides otherwise.
    </p>
    <p>
      17.4 To the fullest extent permitted by law, MisaElectro will not be liable to Business Customers for
      labour costs, electrician costs, contractor costs, testing costs, removal costs, reinstallation
      costs, certification costs, project delays, downtime, loss of profit, loss of contract, loss of
      revenue, loss of business opportunity, or indirect or consequential losses arising from a warranty
      issue.
    </p>
    <p>
      17.5 Business Customers should not schedule installation, labour, project deadlines, or site work
      until goods have been received, inspected, and confirmed as correct and suitable.
    </p>

    <h2>18. Manufacturer Instructions and Documentation</h2>
    <p>
      18.1 You must keep and follow all manufacturer instructions, manuals, labels, safety warnings, and
      technical documentation supplied with the product or made available by the manufacturer.
    </p>
    <p>18.2 Failure to follow manufacturer instructions may affect warranty eligibility.</p>
    <p>
      18.3 If you are unsure how to install, connect, test, or use a product safely, you should seek
      advice from a qualified electrician or competent professional.
    </p>

    <h2>19. Relationship With Returns Policy</h2>
    <p>19.1 This Warranty Policy covers warranty and defect claims.</p>
    <p>
      19.2 Change-of-mind returns, consumer cancellation rights, refund timing, non-returnable items,
      damaged deliveries, incorrect goods, and return procedures are covered in our Returns, Refunds and
      Cancellation Policy.
    </p>
    <p>19.3 A warranty claim is not the same as a change-of-mind return.</p>
    <p>
      19.4 If a product is faulty, damaged, incorrect, or not as described, your claim may be handled
      under applicable consumer law, the Returns Policy, manufacturer warranty, this Warranty Policy, or a
      combination of these depending on the circumstances.
    </p>

    <h2>20. Changes to This Warranty Policy</h2>
    <p>
      20.1 We may update this Warranty Policy from time to time to reflect changes in warranty options,
      product categories, manufacturer terms, additional warranty pricing, legal requirements, supplier
      procedures, or business operations.
    </p>
    <p>
      20.2 The version of this Warranty Policy in force at the time you place your order will apply to
      that order, unless a change is required by law or relates to a correction that must be applied.
    </p>
    <p>
      20.3 When we update this Policy, we will revise the &ldquo;Last updated&rdquo; date at the top of
      the page.
    </p>

    <h2>21. Contact Information</h2>
    <p>
      If you have any questions about statutory rights, manufacturer warranty, Additional Warranty,
      warranty claims, product defects, or warranty exclusions, please contact us:
    </p>
    <ContactBlock />
  </PolicyLayout>
);

const ro: ReactNode = (
  <PolicyLayout title="Politica de garanție" lastUpdated="29 mai 2026">
    <p>
      Această Politică de garanție explică modul în care drepturile legale, garanțiile legale, garanțiile
      producătorului și opțiunile de Garanție suplimentară contra cost se aplică produselor achiziționate
      prin www.misaelectro.ro.
    </p>
    <p>Site-ul este operat de:</p>
    <ContactBlock />
    <p>
      În această Politică, &bdquo;MisaElectro&rdquo;, &bdquo;noi&rdquo; sau &bdquo;al nostru&rdquo;
      înseamnă MISARELIANA S.R.L.. &bdquo;Clientul&rdquo;, &bdquo;dumneavoastră&rdquo; sau
      &bdquo;al dumneavoastră&rdquo; înseamnă orice persoană sau întreprindere care achiziționează bunuri
      prin intermediul Site-ului.
    </p>
    <p>
      Această Politică trebuie citită împreună cu Termenii și condițiile noastre, Politica de livrare,
      Politica de returnare, rambursare și anulare, Politica de plată, Politica de confidențialitate și
      orice informații privind garanția specifice produsului.
    </p>
    <p>
      Nimic din această Politică nu limitează drepturile legale obligatorii pe care le puteți avea în temeiul
      legislației aplicabile privind protecția consumatorilor.
    </p>

    <h2>1. Domeniul de aplicare al acestei Politici</h2>
    <p>1.1 Această Politică se aplică bunurilor fizice achiziționate prin MisaElectro.</p>
    <p>
      1.2 MisaElectro furnizează produse electrice, materiale electrice, accesorii de cablaj, produse legate
      de iluminat, componente de instalare, produse de distribuție și de protecție a circuitelor, prize,
      întrerupătoare, cabluri, accesorii de montaj și bunuri conexe.
    </p>
    <p>
      1.3 Deoarece bunurile electrice pot fi critice din punct de vedere al siguranței, eligibilitatea pentru
      garanție poate depinde de selectarea corectă a produsului, instalarea corectă, utilizarea
      corespunzătoare, respectarea instrucțiunilor producătorului și condițiile de funcționare adecvate.
    </p>
    <p>
      1.4 Această Politică se aplică atât Consumatorilor, cât și Clienților persoane juridice, dar unele
      drepturi legale se aplică numai Consumatorilor.
    </p>

    <h2>2. Drepturi legale, garanții legale și garanții comerciale</h2>
    <p>2.1 Drepturile dumneavoastră legale sunt drepturi prevăzute de legislația aplicabilă privind consumatorii.</p>
    <p>
      2.2 Drepturile legale se pot aplica atunci când bunurile sunt defecte, nu corespund descrierii, nu sunt
      adecvate scopului, sunt nesigure sau nu sunt conforme cu contractul.
    </p>
    <p>
      2.3 Aceste drepturi legale sunt separate de orice garanție a producătorului, garanție comercială,
      Garanție suplimentară contra cost sau serviciu de garanție voluntar.
    </p>
    <p>
      2.4 Nimic din această Politică nu exclude, nu restricționează și nu reduce drepturile legale
      obligatorii care vi se aplică.
    </p>
    <p>
      2.5 O garanție a producătorului sau o Garanție suplimentară vă poate oferi protecție suplimentară, dar
      nu înlocuiește drepturile dumneavoastră legale.
    </p>

    <h2>3. Drepturile consumatorilor din Regatul Unit</h2>
    <p>
      3.1 Dacă sunteți Consumator din Regatul Unit, puteți avea drepturi legale în temeiul legislației
      aplicabile din Regatul Unit privind protecția consumatorilor atunci când bunurile sunt defecte, nu
      corespund descrierii, nu sunt adecvate scopului sau nu îndeplinesc în alt mod standardele impuse.
    </p>
    <p>
      3.2 Aceste drepturi pot include remedii precum repararea, înlocuirea, rambursarea sau reducerea
      prețului, în funcție de circumstanțe, de moment, de starea produsului și de legislația aplicabilă.
    </p>
    <p>3.3 Această Politică nu limitează niciun drept care nu poate fi exclus în mod legal.</p>

    <h2>4. Garanția legală pentru consumatorii din UE</h2>
    <p>
      4.1 Dacă sunteți Consumator din UE, puteți beneficia de o garanție legală de minimum 2 ani în temeiul
      legislației aplicabile a UE privind consumatorii.
    </p>
    <p>
      4.2 Garanția legală se poate aplica atunci când bunurile nu sunt conforme cu contractul, sunt defecte,
      nu corespund descrierii, nu sunt adecvate scopului sau nu îndeplinesc în alt mod cerințele de
      conformitate aplicabile.
    </p>
    <p>
      4.3 Garanția legală este prevăzută de lege și este separată de orice Garanție suplimentară contra cost,
      garanție a producătorului sau garanție comercială.
    </p>
    <p>
      4.4 Disponibilitatea, procedura, sarcina probei, remediile și termenele de prescripție pot depinde de
      legislația țării dumneavoastră de reședință și de circumstanțele reclamației.
    </p>

    <h2>5. Garanția producătorului</h2>
    <p>5.1 Unele produse pot fi însoțite de o garanție a producătorului.</p>
    <p>5.2 Condițiile garanției producătorului sunt stabilite de producător, nu de MisaElectro.</p>
    <p>
      5.3 Garanțiile producătorului pot varia în funcție de produs, marcă, țară, tip de produs, cerințe de
      instalare și condiții de utilizare.
    </p>
    <p>5.4 O garanție a producătorului poate necesita:</p>
    <ul>
      <li>dovada achiziției;</li>
      <li>numărul de serie al produsului;</li>
      <li>dovada instalării;</li>
      <li>documentația privind instalarea profesională;</li>
      <li>utilizarea corectă;</li>
      <li>respectarea instrucțiunilor producătorului;</li>
      <li>înregistrarea la producător;</li>
      <li>returnarea sau inspecția produsului.</li>
    </ul>
    <p>
      5.5 MisaElectro poate oferi asistență în cazul reclamațiilor privind garanția producătorului, atunci
      când este rezonabil, dar nu controlăm deciziile producătorului, timpii de procesare a garanției,
      rezultatele inspecției, disponibilitatea înlocuirii sau procedurile de reparație.
    </p>
    <p>
      5.6 Dacă condițiile garanției producătorului diferă de această Politică, condițiile de garanție ale
      producătorului se pot aplica reclamației privind garanția producătorului.
    </p>

    <h2>6. Garanția suplimentară contra cost</h2>
    <p>6.1 MisaElectro poate oferi opțiuni de Garanție suplimentară contra cost pentru anumite produse.</p>
    <p>6.2 Garanția suplimentară este opțională și poate fi selectată la finalizarea comenzii, unde este disponibilă.</p>
    <p>
      6.3 Garanția suplimentară oferă protecție prin garanție comercială în plus față de drepturile
      dumneavoastră legale.
    </p>
    <p>
      6.4 Garanția suplimentară nu înlocuiește, nu reduce și nu limitează drepturile dumneavoastră legale sau
      orice garanție legală care s-ar putea aplica.
    </p>
    <p>
      6.5 Cu excepția cazului în care se prevede altfel pe pagina produsului sau la finalizarea comenzii,
      prețul Garanției suplimentare se calculează după cum urmează:
    </p>
    <table>
      <thead>
        <tr>
          <th>Opțiune de Garanție suplimentară</th>
          <th>Preț</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Garanție suplimentară +1 an</td><td>10% din prețul produsului, minimum &euro;6.99 / &pound;6.99 / $6.99</td></tr>
        <tr><td>Garanție suplimentară +2 ani</td><td>16% din prețul produsului, minimum &euro;9.99 / &pound;9.99 / $9.99</td></tr>
        <tr><td>Garanție suplimentară +3 ani</td><td>22% din prețul produsului, minimum &euro;12.99 / &pound;12.99 / $12.99</td></tr>
      </tbody>
    </table>
    <p>
      6.6 Prețul Garanției suplimentare se calculează pe baza prețului produsului înainte de taxele de
      livrare, taxele vamale, TVA-ul la import, comisioanele de brokeraj, taxele locale sau alte taxe de
      destinație.
    </p>
    <p>
      6.7 Disponibilitatea Garanției suplimentare poate varia în funcție de produs, categorie, destinație,
      tip de comandă sau configurația la finalizarea comenzii.
    </p>

    <h2>7. Când începe Garanția suplimentară</h2>
    <p>
      7.1 Cu excepția cazului în care se prevede altfel la finalizarea comenzii sau în condițiile de garanție
      specifice produsului, Garanția suplimentară contra cost începe după expirarea garanției standard, a
      garanției producătorului, a perioadei de garanție legală sau a perioadei de garanție legală aplicabile
      produsului relevant.
    </p>
    <p>
      7.2 Atunci când se pot aplica mai multe garanții sau garanții legale, Garanția suplimentară este
      destinată să ofere protecție suplimentară după încheierea perioadei de garanție inițiale aplicabile, nu
      să o scurteze sau să o înlocuiască.
    </p>
    <p>7.3 Garanția suplimentară se aplică numai pe durata selectată la finalizarea comenzii:</p>
    <ul>
      <li>+1 an;</li>
      <li>+2 ani;</li>
      <li>+3 ani.</li>
    </ul>
    <p>7.4 Garanția suplimentară este asociată produsului și comenzii inițiale.</p>

    <h2>8. Ce acoperă Garanția suplimentară</h2>
    <p>
      8.1 Sub rezerva acestei Politici și a oricăror condiții specifice produsului, Garanția suplimentară
      acoperă defectele de fabricație eligibile și defectele de material care apar în timpul utilizării
      normale.
    </p>
    <p>8.2 Acoperirea se aplică numai atunci când produsul a fost:</p>
    <ul>
      <li>selectat corect pentru scopul propus;</li>
      <li>instalat corect atunci când este necesară instalarea;</li>
      <li>utilizat în conformitate cu instrucțiunile producătorului;</li>
      <li>utilizat în limitele specificațiilor nominale;</li>
      <li>depozitat în condiții adecvate;</li>
      <li>întreținut atunci când este necesar;</li>
      <li>neutilizat greșit, nesupraîncărcat, nemodificat sau nedeteriorat.</li>
    </ul>
    <p>
      8.3 Atunci când o reclamație validă privind Garanția suplimentară este aprobată, putem oferi unul sau
      mai multe dintre următoarele remedii:
    </p>
    <ul>
      <li>reparație;</li>
      <li>înlocuire;</li>
      <li>înlocuire echivalentă;</li>
      <li>rambursare parțială;</li>
      <li>rambursare;</li>
      <li>credit în magazin, dacă se convine;</li>
      <li>un alt remediu rezonabil.</li>
    </ul>
    <p>
      8.4 Remediul va depinde de tipul produsului, defect, disponibilitatea pieselor de schimb, poziția
      producătorului/furnizorului, rezultatele inspecției, vechimea produsului și legislația aplicabilă.
    </p>

    <h2>9. Ce nu acoperă garanția</h2>
    <p>
      9.1 Cu excepția cazului în care se prevede expres altfel, asistența pentru garanția legală, garanțiile
      producătorului și Garanția suplimentară contra cost nu acoperă problemele cauzate de factori care țin
      de client, evenimente externe, utilizare greșită sau instalare incorectă.
    </p>
    <p>9.2 Acoperirea garanției nu include în mod normal:</p>
    <ul>
      <li>selectarea incorectă a produsului;</li>
      <li>incompatibilitatea cu instalația, sistemul, cablajul, tensiunea, mediul sau cerințele proiectului dumneavoastră;</li>
      <li>instalarea, cablarea, conectarea, testarea, punerea în funcțiune sau integrarea incorectă;</li>
      <li>instalarea de către o persoană necalificată sau neautorizată atunci când instalarea profesională este necesară sau adecvată;</li>
      <li>nerespectarea instrucțiunilor producătorului, a manualelor de instalare, a avertismentelor de siguranță sau a specificațiilor tehnice;</li>
      <li>utilizarea greșită, neglijența, abuzul, manipularea neglijentă sau utilizarea nesigură;</li>
      <li>supraîncărcarea, tensiunea incorectă, curentul incorect, sarcina excesivă, alimentarea inadecvată cu energie sau funcționarea în afara specificațiilor nominale;</li>
      <li>reparația, modificarea, deschiderea, dezasamblarea, alterarea sau manipularea neautorizată;</li>
      <li>deteriorarea accidentală, deteriorarea prin impact, deteriorarea prin foc, deteriorarea prin apă, deteriorarea prin umezeală, deteriorarea chimică, coroziunea, contaminarea, pătrunderea prafului sau a murdăriei;</li>
      <li>deteriorarea cauzată de supratensiuni, fulgere, alimentare instabilă cu energie, defecțiuni electrice sau defecțiuni mai ample ale instalației;</li>
      <li>uzura normală;</li>
      <li>deteriorarea cosmetică ce nu afectează funcționalitatea produsului;</li>
      <li>piese consumabile, piese înlocuibile, baterii, becuri, siguranțe, lămpi, garnituri, conectori, accesorii, filtre sau articole care se așteaptă să se uzeze, cu excepția cazului în care sunt acoperite expres;</li>
      <li>deteriorarea cauzată de depozitare, transport, temperatură, umiditate sau mediu inadecvat;</li>
      <li>produse utilizate în scopuri în afara utilizării prevăzute de producător;</li>
      <li>produse utilizate în medii industriale, comerciale, de închiriere sau cu sarcină ridicată, atunci când produsul nu este proiectat pentru o astfel de utilizare;</li>
      <li>probleme de software, firmware, configurare, calibrare sau compatibilitate, cu excepția cazului în care sunt acoperite expres;</li>
      <li>costuri cu manopera, costuri cu electricianul, costuri cu antreprenorul, costuri de testare, costuri de inspecție, costuri de demontare, costuri de reinstalare, costuri de certificare, întârzieri ale proiectului, perioade de nefuncționare, pierderi de profit sau pierderi indirecte.</li>
    </ul>
    <p>
      9.3 Garanția nu acoperă defectele sau deteriorările cauzate după livrare de evenimente aflate în afara
      controlului MisaElectro.
    </p>

    <h2>10. Responsabilitatea privind instalarea electrică</h2>
    <p>
      10.1 Produsele electrice pot fi periculoase dacă sunt selectate, instalate, conectate, cablate,
      modificate, supraîncărcate sau utilizate incorect.
    </p>
    <p>
      10.2 Sunteți responsabil pentru a vă asigura că produsul este adecvat pentru utilizarea prevăzută
      înainte de achiziție.
    </p>
    <p>10.3 Trebuie să verificați toate specificațiile relevante, inclusiv:</p>
    <ul>
      <li>tensiunea;</li>
      <li>curentul;</li>
      <li>puterea (wați);</li>
      <li>sarcina nominală;</li>
      <li>gradul de protecție IP;</li>
      <li>dimensiunile;</li>
      <li>tipul de cablu;</li>
      <li>tipul de conector;</li>
      <li>mediul de instalare;</li>
      <li>compatibilitatea;</li>
      <li>cerințele electrice locale;</li>
      <li>codul produsului și documentația tehnică.</li>
    </ul>
    <p>
      10.4 Produsele care necesită instalare, cablare, conectare, testare, punere în funcțiune sau integrare
      într-un sistem electric trebuie instalate numai de un electrician calificat sau un profesionist
      competent, atunci când este necesar sau adecvat.
    </p>
    <p>
      10.5 Garanția poate fi refuzată sau limitată atunci când un defect este cauzat de instalarea
      incorectă, instalarea nesigură, instalarea neconformă, utilizarea inadecvată sau nerespectarea
      instrucțiunilor.
    </p>

    <h2>11. Cum să depuneți o reclamație de garanție</h2>
    <p>11.1 Pentru a depune o reclamație de garanție, contactați-ne la info@misaelectro.ro.</p>
    <p>11.2 Vă rugăm să furnizați:</p>
    <ul>
      <li>numele dumneavoastră complet;</li>
      <li>numărul comenzii;</li>
      <li>numele produsului sau SKU;</li>
      <li>data achiziției;</li>
      <li>descrierea problemei;</li>
      <li>momentul în care a apărut pentru prima dată problema;</li>
      <li>fotografii sau videoclipuri care arată produsul și defectul;</li>
      <li>fotografii ale etichetelor produsului, numerelor de serie, numerelor de model sau marcajelor producătorului;</li>
      <li>detalii privind instalarea, dacă este relevant;</li>
      <li>dovada instalării profesionale, dacă este necesar în mod rezonabil;</li>
      <li>orice pași de depanare deja efectuați.</li>
    </ul>
    <p>11.3 Este posibil să solicităm informații suplimentare pentru a evalua reclamația.</p>
    <p>
      11.4 Trebuie să încetați utilizarea produsului dacă utilizarea continuă poate fi nesigură, poate agrava
      defectul sau poate cauza deteriorări.
    </p>
    <p>
      11.5 Nu încercați reparații, modificări, demontări sau testări neautorizate atunci când acestea pot
      afecta siguranța sau eligibilitatea pentru garanție.
    </p>

    <h2>12. Inspecție și evaluare</h2>
    <p>
      12.1 Reclamațiile de garanție pot necesita o inspecție de către MisaElectro, producător, furnizor,
      prestator de servicii sau o altă parte autorizată.
    </p>
    <p>12.2 Vă putem solicita să returnați produsul pentru inspecție înainte de a aproba un remediu.</p>
    <p>12.3 Inspecția poate lua în considerare:</p>
    <ul>
      <li>starea produsului;</li>
      <li>dovada instalării;</li>
      <li>semne de utilizare greșită sau deteriorare externă;</li>
      <li>semne de supraîncărcare sau tensiune incorectă;</li>
      <li>expunerea la mediu;</li>
      <li>modificarea sau manipularea;</li>
      <li>constatările producătorului;</li>
      <li>compatibilitatea cu defectul reclamat;</li>
      <li>dacă defectul este acoperit de lege, de garanția producătorului sau de Garanția suplimentară.</li>
    </ul>
    <p>
      12.4 Dacă inspecția confirmă că problema este acoperită, vom oferi un remediu adecvat în conformitate
      cu această Politică și cu legislația aplicabilă.
    </p>
    <p>
      12.5 Dacă inspecția constată că problema nu este acoperită, putem respinge reclamația și, dacă este
      cazul, vă putem returna produsul pe cheltuiala dumneavoastră sau vă putem oferi o reparație sau o
      înlocuire contra cost, dacă este disponibilă.
    </p>

    <h2>13. Transportul de returnare pentru reclamațiile de garanție</h2>
    <p>13.1 Nu trebuie să returnați un produs pentru evaluarea garanției fără a ne contacta în prealabil.</p>
    <p>13.2 Vom furniza instrucțiuni de returnare atunci când este necesară o returnare.</p>
    <p>
      13.3 Pentru reclamațiile de garanție valide care implică bunuri defecte, deteriorate sau neconforme,
      transportul de returnare poate fi acoperit de MisaElectro atunci când este impus de lege sau aprobat de
      noi.
    </p>
    <p>
      13.4 Dacă o reclamație de garanție este respinsă deoarece defectul nu este acoperit, este posibil să
      fiți responsabil pentru transportul de returnare, costurile de inspecție, costurile de manipulare sau
      alte costuri rezonabile, atunci când legea permite acest lucru și când este comunicat clar.
    </p>
    <p>
      13.5 Pentru reclamațiile de garanție internaționale, se pot aplica declarații vamale, documente de
      import/export, taxe, taxe vamale, comisioane de brokeraj și taxe de curierat. Acestea pot fi
      responsabilitatea clientului, cu excepția cazului în care reclamația este confirmată ca fiind validă și
      legislația aplicabilă impune altfel.
    </p>

    <h2>14. Produse de înlocuire și produse reparate</h2>
    <p>
      14.1 Produsele de înlocuire pot fi noi, echivalente, recondiționate, refăcute, reparate sau echivalente
      din punct de vedere funcțional, atunci când legea permite acest lucru și este adecvat în circumstanțele
      date.
    </p>
    <p>
      14.2 Dacă produsul original este scos din producție sau indisponibil, putem oferi un produs echivalent
      sau rezonabil comparabil.
    </p>
    <p>
      14.3 O înlocuire sau o reparație nu reîncepe automat perioada de garanție inițială, cu excepția cazului
      în care este impusă de lege sau prevăzută expres în scris.
    </p>
    <p>
      14.4 Orice produs de înlocuire, produs reparat sau produs echivalent va rămâne în mod normal acoperit
      numai pentru perioada rămasă a garanției inițiale sau a Garanției suplimentare, cu excepția cazului în
      care legislația aplicabilă impune altfel.
    </p>

    <h2>15. Rambursări în cadrul garanției</h2>
    <p>
      15.1 Rambursările în cadrul garanției pot fi oferite atunci când repararea sau înlocuirea nu este
      disponibilă, practică, proporțională sau este impusă de lege.
    </p>
    <p>
      15.2 Sumele rambursate pot lua în considerare vechimea produsului, utilizarea, starea, rezultatele
      inspecției, legislația aplicabilă și natura defectului.
    </p>
    <p>15.3 Rambursările se vor face în mod normal către metoda de plată inițială, atunci când este posibil.</p>
    <p>
      15.4 Taxele de livrare, taxele vamale, TVA-ul la import, comisioanele de brokeraj, taxele de manipulare
      ale curierului, taxele locale, costurile de instalare, costurile cu manopera și alte costuri ale
      terților nu sunt în mod normal rambursabile în cadrul garanției, cu excepția cazului în care legea
      impune altfel.
    </p>

    <h2>16. Anularea și rambursarea Garanției suplimentare</h2>
    <p>
      16.1 Dacă anulați sau returnați în mod valid un produs înainte de începerea Garanției suplimentare și
      rambursarea produsului este aprobată, taxa aferentă Garanției suplimentare poate fi de asemenea
      rambursată atunci când este impusă de lege sau aprobată de MisaElectro.
    </p>
    <p>
      16.2 Dacă Garanția suplimentară a început deja sau a fost deja utilizată pentru o reclamație, este
      posibil să nu fie rambursabilă, cu excepția cazului în care legea impune altfel.
    </p>
    <p>
      16.3 Garanția suplimentară este asociată produsului și comenzii relevante și, în mod normal, nu poate fi
      transferată către un alt produs, comandă, persoană sau client.
    </p>

    <h2>17. Condiții de garanție pentru clienții persoane juridice</h2>
    <p>
      17.1 Clienții persoane juridice sunt responsabili pentru verificarea adecvării produsului,
      specificațiilor, compatibilității, cerințelor de instalare și cerințelor de reglementare înainte de
      achiziție.
    </p>
    <p>
      17.2 Se așteaptă ca clienții persoane juridice să dispună de cunoștințe tehnice adecvate sau de
      consultanță profesională la achiziționarea de bunuri electrice.
    </p>
    <p>
      17.3 Remediile de garanție pentru clienții persoane juridice pot fi mai limitate decât cele disponibile
      Consumatorilor, cu excepția cazului în care legislația obligatorie prevede altfel.
    </p>
    <p>
      17.4 În măsura maximă permisă de lege, MisaElectro nu va fi răspunzătoare față de clienții persoane
      juridice pentru costuri cu manopera, costuri cu electricianul, costuri cu antreprenorul, costuri de
      testare, costuri de demontare, costuri de reinstalare, costuri de certificare, întârzieri ale
      proiectului, perioade de nefuncționare, pierderi de profit, pierderea contractului, pierderea
      veniturilor, pierderea oportunităților de afaceri sau pierderi indirecte ori consecutive care decurg
      dintr-o problemă de garanție.
    </p>
    <p>
      17.5 Clienții persoane juridice nu ar trebui să programeze instalarea, manopera, termenele proiectului
      sau lucrările pe șantier până când bunurile nu au fost primite, inspectate și confirmate ca fiind
      corecte și adecvate.
    </p>

    <h2>18. Instrucțiunile și documentația producătorului</h2>
    <p>
      18.1 Trebuie să păstrați și să respectați toate instrucțiunile producătorului, manualele, etichetele,
      avertismentele de siguranță și documentația tehnică furnizate împreună cu produsul sau puse la
      dispoziție de producător.
    </p>
    <p>18.2 Nerespectarea instrucțiunilor producătorului poate afecta eligibilitatea pentru garanție.</p>
    <p>
      18.3 Dacă nu sunteți sigur cum să instalați, conectați, testați sau utilizați în siguranță un produs,
      trebuie să solicitați sfatul unui electrician calificat sau al unui profesionist competent.
    </p>

    <h2>19. Relația cu Politica de returnare</h2>
    <p>19.1 Această Politică de garanție acoperă reclamațiile de garanție și de defect.</p>
    <p>
      19.2 Returnările din motive de răzgândire, drepturile de anulare ale consumatorului, momentul
      rambursării, articolele nereturnabile, livrările deteriorate, bunurile incorecte și procedurile de
      returnare sunt acoperite în Politica noastră de returnare, rambursare și anulare.
    </p>
    <p>19.3 O reclamație de garanție nu este același lucru cu o returnare din motive de răzgândire.</p>
    <p>
      19.4 Dacă un produs este defect, deteriorat, incorect sau nu corespunde descrierii, reclamația
      dumneavoastră poate fi tratată în temeiul legislației aplicabile privind consumatorii, al Politicii de
      returnare, al garanției producătorului, al acestei Politici de garanție sau al unei combinații a
      acestora, în funcție de circumstanțe.
    </p>

    <h2>20. Modificări ale acestei Politici de garanție</h2>
    <p>
      20.1 Putem actualiza această Politică de garanție din când în când pentru a reflecta modificări ale
      opțiunilor de garanție, ale categoriilor de produse, ale condițiilor producătorului, ale prețurilor
      garanției suplimentare, ale cerințelor legale, ale procedurilor furnizorilor sau ale operațiunilor de
      afaceri.
    </p>
    <p>
      20.2 Versiunea acestei Politici de garanție în vigoare la momentul plasării comenzii dumneavoastră se
      va aplica comenzii respective, cu excepția cazului în care o modificare este impusă de lege sau se
      referă la o corectare care trebuie aplicată.
    </p>
    <p>
      20.3 Atunci când actualizăm această Politică, vom revizui data &bdquo;Ultima actualizare&rdquo; din
      partea de sus a paginii.
    </p>

    <h2>21. Informații de contact</h2>
    <p>
      Dacă aveți întrebări despre drepturile legale, garanția producătorului, Garanția suplimentară,
      reclamațiile de garanție, defectele produselor sau excluderile de garanție, vă rugăm să ne contactați:
    </p>
    <ContactBlock />
  </PolicyLayout>
);

const hu: ReactNode = (
  <PolicyLayout title="Jótállási szabályzat" lastUpdated="2026. május 29.">
    <p>
      Ez a Jótállási szabályzat elmagyarázza, hogyan alkalmazandók a törvényes jogok, a jogszabályi
      szavatosságok, a gyártói jótállások és a fizetős Kiegészítő jótállási lehetőségek a
      www.misaelectro.ro oldalon keresztül vásárolt termékekre.
    </p>
    <p>A Weboldalt a következő üzemelteti:</p>
    <ContactBlock />
    <p>
      A jelen Szabályzatban a &bdquo;MisaElectro&rdquo;, &bdquo;mi&rdquo; vagy &bdquo;miénk&rdquo; a
      MISARELIANA S.R.L. társaságot jelenti. Az &bdquo;Ügyfél&rdquo;, &bdquo;Ön&rdquo; vagy
      &bdquo;Öné&rdquo; bármely olyan személyt vagy vállalkozást jelent, amely a Weboldalon keresztül
      árukat vásárol.
    </p>
    <p>
      A jelen Szabályzatot az Általános szerződési feltételeinkkel, a Szállítási szabályzattal, a
      Visszaküldési, visszatérítési és lemondási szabályzattal, a Fizetési szabályzattal, az Adatvédelmi
      szabályzattal és bármely termékspecifikus jótállási információval együtt kell értelmezni.
    </p>
    <p>
      A jelen Szabályzat semmilyen módon nem korlátozza az alkalmazandó fogyasztóvédelmi jogszabályok
      alapján Önt megillető kötelező törvényes jogokat.
    </p>

    <h2>1. A Szabályzat hatálya</h2>
    <p>1.1 Ez a Szabályzat a MisaElectro-n keresztül vásárolt fizikai árukra vonatkozik.</p>
    <p>
      1.2 A MisaElectro elektromos termékeket, elektromos anyagokat, vezetékezési tartozékokat,
      világítással kapcsolatos termékeket, szerelési alkatrészeket, elosztási és áramkörvédelmi termékeket,
      aljzatokat, kapcsolókat, kábeleket, rögzítési tartozékokat és kapcsolódó árukat szállít.
    </p>
    <p>
      1.3 Mivel az elektromos áruk biztonsági szempontból kritikusak lehetnek, a jótállási jogosultság
      függhet a helyes termékkiválasztástól, a helyes szereléstől, a rendeltetésszerű használattól, a
      gyártói utasítások betartásától és a megfelelő üzemeltetési feltételektől.
    </p>
    <p>
      1.4 Ez a Szabályzat mind a Fogyasztókra, mind az Üzleti ügyfelekre vonatkozik, azonban egyes törvényes
      jogok csak a Fogyasztókat illetik meg.
    </p>

    <h2>2. Törvényes jogok, jogszabályi szavatosságok és kereskedelmi jótállások</h2>
    <p>2.1 Az Ön törvényes jogai az alkalmazandó fogyasztóvédelmi jog által biztosított jogok.</p>
    <p>
      2.2 A törvényes jogok akkor alkalmazhatók, ha az áruk hibásak, nem felelnek meg a leírásnak, nem
      alkalmasak a rendeltetési célra, nem biztonságosak, vagy nem felelnek meg a szerződésnek.
    </p>
    <p>
      2.3 Ezek a törvényes jogok elkülönülnek bármely gyártói jótállástól, kereskedelmi jótállástól, fizetős
      Kiegészítő jótállástól vagy önkéntes jótállási szolgáltatástól.
    </p>
    <p>
      2.4 A jelen Szabályzat semmilyen módon nem zárja ki, nem korlátozza és nem csökkenti az Önre vonatkozó
      kötelező törvényes jogokat.
    </p>
    <p>
      2.5 A gyártói jótállás vagy a Kiegészítő jótállás további védelmet nyújthat Önnek, de nem helyettesíti
      a törvényes jogait.
    </p>

    <h2>3. Az Egyesült Királyságbeli fogyasztók jogai</h2>
    <p>
      3.1 Ha Ön az Egyesült Királyságbeli Fogyasztó, az alkalmazandó egyesült királyságbeli
      fogyasztóvédelmi jog alapján törvényes jogai lehetnek, ha az áruk hibásak, nem felelnek meg a
      leírásnak, nem alkalmasak a rendeltetési célra, vagy más módon nem felelnek meg az előírt
      követelményeknek.
    </p>
    <p>
      3.2 Ezek a jogok olyan jogorvoslatokat foglalhatnak magukban, mint a javítás, csere, visszatérítés vagy
      árcsökkentés, a körülményektől, az időzítéstől, a termék állapotától és az alkalmazandó jogtól függően.
    </p>
    <p>3.3 A jelen Szabályzat nem korlátozza azokat a jogokat, amelyeket jogszerűen nem lehet kizárni.</p>

    <h2>4. Az EU-fogyasztók jogszabályi szavatossága</h2>
    <p>
      4.1 Ha Ön EU-fogyasztó, az alkalmazandó EU-fogyasztóvédelmi jog alapján legalább 2 éves jogszabályi
      szavatosság illetheti meg.
    </p>
    <p>
      4.2 A jogszabályi szavatosság akkor alkalmazható, ha az áruk nem felelnek meg a szerződésnek, hibásak,
      nem felelnek meg a leírásnak, nem alkalmasak a rendeltetési célra, vagy más módon nem felelnek meg az
      alkalmazandó megfelelőségi követelményeknek.
    </p>
    <p>
      4.3 A jogszabályi szavatosságot a jog biztosítja, és elkülönül bármely fizetős Kiegészítő jótállástól,
      gyártói jótállástól vagy kereskedelmi jótállástól.
    </p>
    <p>
      4.4 A rendelkezésre állás, az eljárás, a bizonyítási teher, a jogorvoslatok és az elévülési határidők
      függhetnek a lakóhelye szerinti ország jogától és az igény körülményeitől.
    </p>

    <h2>5. Gyártói jótállás</h2>
    <p>5.1 Egyes termékekhez gyártói jótállás járhat.</p>
    <p>5.2 A gyártói jótállás feltételeit a gyártó határozza meg, nem a MisaElectro.</p>
    <p>
      5.3 A gyártói jótállások termékenként, márkánként, országonként, terméktípusonként, szerelési
      követelményenként és használati feltételenként eltérhetnek.
    </p>
    <p>5.4 A gyártói jótállás megkövetelheti a következőket:</p>
    <ul>
      <li>a vásárlás igazolása;</li>
      <li>a termék sorozatszáma;</li>
      <li>a szerelés igazolása;</li>
      <li>a szakszerű szerelés dokumentációja;</li>
      <li>a helyes használat;</li>
      <li>a gyártói utasítások betartása;</li>
      <li>a gyártónál történő regisztráció;</li>
      <li>a termék visszaküldése vagy ellenőrzése.</li>
    </ul>
    <p>
      5.5 A MisaElectro észszerű mértékben segítséget nyújthat a gyártói jótállási igényekben, de nem
      ellenőrizzük a gyártói döntéseket, a jótállás feldolgozási idejét, az ellenőrzés eredményeit, a csere
      rendelkezésre állását vagy a javítási eljárásokat.
    </p>
    <p>
      5.6 Ha a gyártói jótállás feltételei eltérnek a jelen Szabályzattól, a gyártói jótállási igényre a
      gyártó jótállási feltételei alkalmazhatók.
    </p>

    <h2>6. Fizetős Kiegészítő jótállás</h2>
    <p>6.1 A MisaElectro kiválasztott termékekhez fizetős Kiegészítő jótállási lehetőségeket kínálhat.</p>
    <p>6.2 A Kiegészítő jótállás opcionális, és ahol elérhető, a fizetéskor választható.</p>
    <p>
      6.3 A Kiegészítő jótállás a törvényes jogain túl kereskedelmi jótállási védelmet nyújt.
    </p>
    <p>
      6.4 A Kiegészítő jótállás nem helyettesíti, nem csökkenti és nem korlátozza a törvényes jogait vagy
      bármely alkalmazható jogszabályi szavatosságot.
    </p>
    <p>
      6.5 Ha a termékoldalon vagy a fizetéskor másképp nem szerepel, a Kiegészítő jótállás árát a következők
      szerint számítjuk ki:
    </p>
    <table>
      <thead>
        <tr>
          <th>Kiegészítő jótállási lehetőség</th>
          <th>Ár</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>+1 év Kiegészítő jótállás</td><td>a termékár 10%-a, legalább &euro;6.99 / &pound;6.99 / $6.99</td></tr>
        <tr><td>+2 év Kiegészítő jótállás</td><td>a termékár 16%-a, legalább &euro;9.99 / &pound;9.99 / $9.99</td></tr>
        <tr><td>+3 év Kiegészítő jótállás</td><td>a termékár 22%-a, legalább &euro;12.99 / &pound;12.99 / $12.99</td></tr>
      </tbody>
    </table>
    <p>
      6.6 A Kiegészítő jótállás árát a termék árának alapján számítjuk ki, a szállítási díjak, vámok, import
      áfa, közvetítői díjak, helyi adók vagy egyéb rendeltetési helyi díjak levonása előtt.
    </p>
    <p>
      6.7 A Kiegészítő jótállás rendelkezésre állása termékenként, kategóriánként, rendeltetési helyenként,
      rendelési típusonként vagy a fizetési konfigurációtól függően eltérhet.
    </p>

    <h2>7. Mikor kezdődik a Kiegészítő jótállás</h2>
    <p>
      7.1 Ha a fizetéskor vagy a termékspecifikus jótállási feltételekben másképp nem szerepel, a fizetős
      Kiegészítő jótállás a szabványos jótállás, a gyártói jótállás, a törvényes jótállási időszak vagy az
      adott termékre alkalmazandó jogszabályi szavatossági időszak lejárta után kezdődik.
    </p>
    <p>
      7.2 Ha egynél több jótállás vagy jogszabályi szavatosság alkalmazható, a Kiegészítő jótállás célja, hogy
      az eredeti alkalmazandó jótállási időszak lejárta után további védelmet nyújtson, nem pedig hogy azt
      lerövidítse vagy helyettesítse.
    </p>
    <p>7.3 A Kiegészítő jótállás csak a fizetéskor kiválasztott időtartamra vonatkozik:</p>
    <ul>
      <li>+1 év;</li>
      <li>+2 év;</li>
      <li>+3 év.</li>
    </ul>
    <p>7.4 A Kiegészítő jótállás a termékhez és az eredeti rendeléshez kapcsolódik.</p>

    <h2>8. Mit fedez a Kiegészítő jótállás</h2>
    <p>
      8.1 A jelen Szabályzatra és bármely termékspecifikus feltételre is figyelemmel a Kiegészítő jótállás
      fedezi a jogosult gyártási hibákat és anyaghibákat, amelyek a rendes használat során merülnek fel.
    </p>
    <p>8.2 A fedezet csak akkor érvényes, ha a terméket:</p>
    <ul>
      <li>helyesen választották ki a rendeltetési céljára;</li>
      <li>helyesen szerelték be, ha szerelés szükséges;</li>
      <li>a gyártói utasításoknak megfelelően használták;</li>
      <li>a névleges specifikációkon belül üzemeltették;</li>
      <li>megfelelő körülmények között tárolták;</li>
      <li>szükség esetén karbantartották;</li>
      <li>nem használták helytelenül, nem terhelték túl, nem módosították és nem rongálták meg.</li>
    </ul>
    <p>
      8.3 Ha egy érvényes Kiegészítő jótállási igényt jóváhagynak, az alábbi jogorvoslatok közül egyet vagy
      többet nyújthatunk:
    </p>
    <ul>
      <li>javítás;</li>
      <li>csere;</li>
      <li>egyenértékű csere;</li>
      <li>részleges visszatérítés;</li>
      <li>visszatérítés;</li>
      <li>üzleti jóváírás, ha megállapodás születik erről;</li>
      <li>egyéb észszerű jogorvoslat.</li>
    </ul>
    <p>
      8.4 A jogorvoslat a termék típusától, a hibától, a cserealkatrészek rendelkezésre állásától, a
      gyártó/beszállító álláspontjától, az ellenőrzés eredményeitől, a termék korától és az alkalmazandó
      jogtól függ.
    </p>

    <h2>9. Mit nem fedez a jótállás</h2>
    <p>
      9.1 Ha kifejezetten másképp nem rendelkezünk, a törvényes jótállási támogatás, a gyártói jótállások és
      a fizetős Kiegészítő jótállás nem fedezi az ügyfél oldali tényezők, külső események, helytelen
      használat vagy helytelen szerelés által okozott problémákat.
    </p>
    <p>9.2 A jótállási fedezet rendes körülmények között nem terjed ki a következőkre:</p>
    <ul>
      <li>helytelen termékkiválasztás;</li>
      <li>összeférhetetlenség az Ön szerelésével, rendszerével, vezetékezésével, feszültségével, környezetével vagy projektkövetelményeivel;</li>
      <li>helytelen szerelés, vezetékezés, csatlakoztatás, tesztelés, üzembe helyezés vagy integráció;</li>
      <li>szakképzetlen vagy jogosulatlan személy általi szerelés, ha szakszerű szerelés szükséges vagy indokolt;</li>
      <li>a gyártói utasítások, szerelési kézikönyvek, biztonsági figyelmeztetések vagy műszaki specifikációk be nem tartása;</li>
      <li>helytelen használat, gondatlanság, visszaélés, hanyag kezelés vagy nem biztonságos használat;</li>
      <li>túlterhelés, helytelen feszültség, helytelen áram, túlzott terhelés, nem megfelelő tápellátás vagy a névleges specifikációkon kívüli üzemeltetés;</li>
      <li>jogosulatlan javítás, módosítás, felnyitás, szétszerelés, átalakítás vagy manipuláció;</li>
      <li>véletlen sérülés, ütés okozta sérülés, tűzkár, vízkár, nedvességkár, vegyi kár, korrózió, szennyeződés, por- vagy szennyeződésbehatolás;</li>
      <li>túlfeszültség, villámcsapás, instabil tápellátás, elektromos hibák vagy tágabb szerelési hibák által okozott károk;</li>
      <li>rendes elhasználódás és kopás;</li>
      <li>esztétikai sérülés, amely nem befolyásolja a termék működését;</li>
      <li>fogyóeszközök, cserélhető alkatrészek, elemek, izzók, biztosítékok, lámpák, tömítések, csatlakozók, tartozékok, szűrők vagy elhasználódásra váró tételek, kivéve, ha kifejezetten fedezve vannak;</li>
      <li>nem megfelelő tárolás, szállítás, hőmérséklet, páratartalom vagy környezet által okozott károk;</li>
      <li>a gyártó rendeltetési célján kívüli célra használt termékek;</li>
      <li>ipari, kereskedelmi, bérleti vagy nagy terhelésű környezetben használt termékek, ahol a termék nem ilyen használatra készült;</li>
      <li>szoftver-, firmware-, konfigurációs, kalibrálási vagy kompatibilitási problémák, kivéve, ha kifejezetten fedezve vannak;</li>
      <li>munkadíjak, villanyszerelői költségek, vállalkozói költségek, tesztelési költségek, ellenőrzési költségek, eltávolítási költségek, újratelepítési költségek, tanúsítási költségek, projektkésedelmek, állásidő, elmaradt haszon vagy közvetett veszteségek.</li>
    </ul>
    <p>
      9.3 A jótállás nem fedezi a szállítás után a MisaElectro ellenőrzési körén kívül eső események által
      okozott hibákat vagy károkat.
    </p>

    <h2>10. Elektromos szerelési felelősség</h2>
    <p>
      10.1 Az elektromos termékek veszélyesek lehetnek, ha helytelenül választják ki, szerelik be,
      csatlakoztatják, vezetékezik, módosítják, túlterhelik vagy használják őket.
    </p>
    <p>
      10.2 Ön felelős azért, hogy a vásárlás előtt meggyőződjön arról, hogy a termék megfelel a tervezett
      felhasználásának.
    </p>
    <p>10.3 Ellenőriznie kell minden vonatkozó specifikációt, beleértve a következőket:</p>
    <ul>
      <li>feszültség;</li>
      <li>áram;</li>
      <li>teljesítmény (watt);</li>
      <li>terhelhetőség;</li>
      <li>IP-védettség;</li>
      <li>méretek;</li>
      <li>kábeltípus;</li>
      <li>csatlakozótípus;</li>
      <li>szerelési környezet;</li>
      <li>kompatibilitás;</li>
      <li>helyi elektromos követelmények;</li>
      <li>termékkód és műszaki dokumentáció.</li>
    </ul>
    <p>
      10.4 Az olyan termékeket, amelyek szerelést, vezetékezést, csatlakoztatást, tesztelést, üzembe
      helyezést vagy elektromos rendszerbe történő integrálást igényelnek, csak szakképzett villanyszerelő
      vagy hozzáértő szakember szerelheti be, ahol ez szükséges vagy indokolt.
    </p>
    <p>
      10.5 A jótállás megtagadható vagy korlátozható, ha a hibát helytelen szerelés, nem biztonságos
      szerelés, nem megfelelő szerelés, nem megfelelő használat vagy az utasítások be nem tartása okozza.
    </p>

    <h2>11. Hogyan nyújtson be jótállási igényt</h2>
    <p>11.1 Jótállási igény benyújtásához vegye fel velünk a kapcsolatot az info@misaelectro.ro címen.</p>
    <p>11.2 Kérjük, adja meg a következőket:</p>
    <ul>
      <li>teljes neve;</li>
      <li>rendelési szám;</li>
      <li>terméknév vagy SKU;</li>
      <li>a vásárlás dátuma;</li>
      <li>a probléma leírása;</li>
      <li>mikor jelentkezett először a probléma;</li>
      <li>a terméket és a hibát bemutató fényképek vagy videók;</li>
      <li>a termékcímkékről, sorozatszámokról, modellszámokról vagy gyártói jelölésekről készült fényképek;</li>
      <li>szerelési adatok, ahol releváns;</li>
      <li>a szakszerű szerelés igazolása, ahol észszerűen szükséges;</li>
      <li>bármely már megtett hibaelhárítási lépés.</li>
    </ul>
    <p>11.3 Az igény elbírálásához további információkat kérhetünk.</p>
    <p>
      11.4 Abba kell hagynia a termék használatát, ha a további használat nem biztonságos lehet, súlyosbíthatja
      a hibát, vagy károkat okozhat.
    </p>
    <p>
      11.5 Ne kíséreljen meg jogosulatlan javítást, módosítást, szétszerelést vagy tesztelést, ha ez
      befolyásolhatja a biztonságot vagy a jótállási jogosultságot.
    </p>

    <h2>12. Ellenőrzés és értékelés</h2>
    <p>
      12.1 A jótállási igények a MisaElectro, a gyártó, a beszállító, a szolgáltató vagy más felhatalmazott
      fél általi ellenőrzést igényelhetnek.
    </p>
    <p>12.2 A jogorvoslat jóváhagyása előtt megkövetelhetjük, hogy a terméket ellenőrzésre visszaküldje.</p>
    <p>12.3 Az ellenőrzés a következőket veheti figyelembe:</p>
    <ul>
      <li>a termék állapota;</li>
      <li>a szerelés igazolása;</li>
      <li>helytelen használat vagy külső sérülés jelei;</li>
      <li>túlterhelés vagy helytelen feszültség jelei;</li>
      <li>környezeti kitettség;</li>
      <li>módosítás vagy manipuláció;</li>
      <li>a gyártó megállapításai;</li>
      <li>a bejelentett hibával való összeegyeztethetőség;</li>
      <li>hogy a hibát a jog, a gyártói jótállás vagy a Kiegészítő jótállás fedezi-e.</li>
    </ul>
    <p>
      12.4 Ha az ellenőrzés megerősíti, hogy a probléma fedezett, megfelelő jogorvoslatot nyújtunk a jelen
      Szabályzatnak és az alkalmazandó jognak megfelelően.
    </p>
    <p>
      12.5 Ha az ellenőrzés megállapítja, hogy a probléma nem fedezett, elutasíthatjuk az igényt, és adott
      esetben a terméket az Ön költségére visszaküldhetjük, vagy fizetős javítást vagy cserét kínálhatunk,
      ahol elérhető.
    </p>

    <h2>13. Visszaküldési szállítás a jótállási igényekhez</h2>
    <p>13.1 Ne küldjön vissza terméket jótállási értékelésre anélkül, hogy előbb kapcsolatba lépne velünk.</p>
    <p>13.2 Visszaküldési utasításokat adunk, ha visszaküldés szükséges.</p>
    <p>
      13.3 A hibás, sérült vagy nem megfelelő árukat érintő érvényes jótállási igények esetén a
      visszaküldési szállítást a MisaElectro fedezheti, ha ezt a jog megköveteli vagy mi jóváhagyjuk.
    </p>
    <p>
      13.4 Ha egy jótállási igényt azért utasítanak el, mert a hiba nem fedezett, Ön felelős lehet a
      visszaküldési szállításért, az ellenőrzési költségekért, a kezelési költségekért vagy egyéb észszerű
      költségekért, ahol a jog ezt megengedi, és ahol ez egyértelműen közölve van.
    </p>
    <p>
      13.5 A nemzetközi jótállási igények esetén vámáru-nyilatkozatok, import-/exportdokumentumok, adók,
      vámok, közvetítői díjak és futárdíjak merülhetnek fel. Ezek az ügyfél felelősségét képezhetik, kivéve,
      ha az igényt érvényesnek erősítik meg, és az alkalmazandó jog másképp rendelkezik.
    </p>

    <h2>14. Cseretermékek és javított termékek</h2>
    <p>
      14.1 A cseretermékek lehetnek újak, egyenértékűek, felújítottak, helyreállítottak, javítottak vagy
      funkcionálisan egyenértékűek, ahol ezt a jog megengedi és a körülmények között indokolt.
    </p>
    <p>
      14.2 Ha az eredeti termék gyártása megszűnt vagy nem elérhető, egyenértékű vagy észszerűen összemérhető
      terméket kínálhatunk.
    </p>
    <p>
      14.3 A csere vagy javítás nem indítja el automatikusan újra az eredeti jótállási időszakot, kivéve, ha
      ezt a jog megköveteli vagy írásban kifejezetten kikötik.
    </p>
    <p>
      14.4 Bármely cseretermék, javított termék vagy egyenértékű termék rendes körülmények között csak az
      eredeti jótállás vagy Kiegészítő jótállás hátralévő időszakára marad fedezve, kivéve, ha az
      alkalmazandó jog másképp rendelkezik.
    </p>

    <h2>15. Visszatérítések a jótállás keretében</h2>
    <p>
      15.1 A jótállás keretében visszatérítés kínálható, ha a javítás vagy csere nem érhető el, nem
      praktikus, nem arányos, vagy a jog megköveteli.
    </p>
    <p>
      15.2 A visszatérített összegek figyelembe vehetik a termék korát, használatát, állapotát, az ellenőrzés
      eredményeit, az alkalmazandó jogot és a hiba jellegét.
    </p>
    <p>15.3 A visszatérítéseket rendes körülmények között az eredeti fizetési módra teljesítjük, ahol lehetséges.</p>
    <p>
      15.4 A szállítási díjak, vámok, import áfa, közvetítői díjak, futár kezelési díjai, helyi adók,
      szerelési költségek, munkadíjak és egyéb harmadik fél költségei rendes körülmények között nem
      téríthetők vissza a jótállás keretében, kivéve, ha a jog megköveteli.
    </p>

    <h2>16. A Kiegészítő jótállás lemondása és visszatérítése</h2>
    <p>
      16.1 Ha érvényesen lemond vagy visszaküld egy terméket a Kiegészítő jótállás megkezdése előtt, és a
      termék visszatérítését jóváhagyják, a kapcsolódó Kiegészítő jótállási díj is visszatéríthető, ahol ezt
      a jog megköveteli vagy a MisaElectro jóváhagyja.
    </p>
    <p>
      16.2 Ha a Kiegészítő jótállás már megkezdődött, vagy már felhasználták egy igényhez, előfordulhat, hogy
      nem téríthető vissza, kivéve, ha a jog megköveteli.
    </p>
    <p>
      16.3 A Kiegészítő jótállás az adott termékhez és rendeléshez kapcsolódik, és rendes körülmények között
      nem ruházható át más termékre, rendelésre, személyre vagy ügyfélre.
    </p>

    <h2>17. Üzleti ügyfelek jótállási feltételei</h2>
    <p>
      17.1 Az Üzleti ügyfelek felelősek a termék alkalmasságának, specifikációinak, kompatibilitásának,
      szerelési követelményeinek és szabályozási követelményeinek ellenőrzéséért a vásárlás előtt.
    </p>
    <p>
      17.2 Az Üzleti ügyfelektől elvárt, hogy megfelelő műszaki ismeretekkel vagy szakmai tanácsadással
      rendelkezzenek elektromos áruk vásárlásakor.
    </p>
    <p>
      17.3 Az Üzleti ügyfelek jótállási jogorvoslatai korlátozottabbak lehetnek, mint a Fogyasztók számára
      elérhetők, kivéve, ha a kötelező jog másképp rendelkezik.
    </p>
    <p>
      17.4 A jog által megengedett legteljesebb mértékben a MisaElectro nem felel az Üzleti ügyfelek felé a
      munkadíjakért, villanyszerelői költségekért, vállalkozói költségekért, tesztelési költségekért,
      eltávolítási költségekért, újratelepítési költségekért, tanúsítási költségekért, projektkésedelmekért,
      állásidőért, elmaradt haszonért, szerződés elvesztéséért, bevételkiesésért, üzleti lehetőség
      elvesztéséért, illetve a jótállási problémából eredő közvetett vagy következményi veszteségekért.
    </p>
    <p>
      17.5 Az Üzleti ügyfelek ne ütemezzenek szerelést, munkát, projekthatáridőket vagy helyszíni munkát
      addig, amíg az árukat meg nem kapták, ellenőrizték, és nem igazolták, hogy azok megfelelőek és
      alkalmasak.
    </p>

    <h2>18. Gyártói utasítások és dokumentáció</h2>
    <p>
      18.1 Meg kell őriznie és be kell tartania a termékkel együtt szállított vagy a gyártó által elérhetővé
      tett valamennyi gyártói utasítást, kézikönyvet, címkét, biztonsági figyelmeztetést és műszaki
      dokumentációt.
    </p>
    <p>18.2 A gyártói utasítások be nem tartása befolyásolhatja a jótállási jogosultságot.</p>
    <p>
      18.3 Ha nem biztos abban, hogyan szereljen be, csatlakoztasson, teszteljen vagy használjon biztonságosan
      egy terméket, kérjen tanácsot szakképzett villanyszerelőtől vagy hozzáértő szakembertől.
    </p>

    <h2>19. Kapcsolat a Visszaküldési szabályzattal</h2>
    <p>19.1 Ez a Jótállási szabályzat a jótállási és hibaigényekre terjed ki.</p>
    <p>
      19.2 A meggondolásból történő visszaküldéseket, a fogyasztói elállási jogokat, a visszatérítés
      időzítését, a nem visszaküldhető tételeket, a sérült szállításokat, a helytelen árukat és a
      visszaküldési eljárásokat a Visszaküldési, visszatérítési és lemondási szabályzatunk tartalmazza.
    </p>
    <p>19.3 A jótállási igény nem azonos a meggondolásból történő visszaküldéssel.</p>
    <p>
      19.4 Ha egy termék hibás, sérült, helytelen vagy nem felel meg a leírásnak, igénye az alkalmazandó
      fogyasztóvédelmi jog, a Visszaküldési szabályzat, a gyártói jótállás, a jelen Jótállási szabályzat
      vagy ezek kombinációja alapján kezelhető, a körülményektől függően.
    </p>

    <h2>20. A jelen Jótállási szabályzat módosításai</h2>
    <p>
      20.1 Időről időre frissíthetjük a jelen Jótállási szabályzatot, hogy tükrözze a jótállási lehetőségek, a
      termékkategóriák, a gyártói feltételek, a kiegészítő jótállás árazása, a jogi követelmények, a
      beszállítói eljárások vagy az üzleti működés változásait.
    </p>
    <p>
      20.2 A jelen Jótállási szabályzat azon verziója, amely a megrendelés leadásának időpontjában hatályban
      van, arra a megrendelésre alkalmazandó, kivéve, ha egy módosítást a jog megkövetel, vagy az egy
      alkalmazandó javításhoz kapcsolódik.
    </p>
    <p>
      20.3 Amikor frissítjük a jelen Szabályzatot, módosítjuk a &bdquo;Utolsó frissítés&rdquo; dátumát az
      oldal tetején.
    </p>

    <h2>21. Kapcsolattartási információk</h2>
    <p>
      Ha bármilyen kérdése van a törvényes jogokkal, a gyártói jótállással, a Kiegészítő jótállással, a
      jótállási igényekkel, a termékhibákkal vagy a jótállási kizárásokkal kapcsolatban, kérjük, vegye fel
      velünk a kapcsolatot:
    </p>
    <ContactBlock />
  </PolicyLayout>
);

const bg: ReactNode = (
  <PolicyLayout title="Гаранционна политика" lastUpdated="29 май 2026 г.">
    <p>
      Тази Гаранционна политика обяснява как законовите права, законовите гаранции, гаранциите на
      производителя и платените опции за Допълнителна гаранция се прилагат към продукти, закупени чрез
      www.misaelectro.ro.
    </p>
    <p>Уебсайтът се управлява от:</p>
    <ContactBlock />
    <p>
      В тази Политика &bdquo;MisaElectro&rdquo;, &bdquo;ние&rdquo; или &bdquo;наш&rdquo; означава
      MISARELIANA S.R.L.. &bdquo;Клиент&rdquo;, &bdquo;Вие&rdquo; или &bdquo;Ваш&rdquo; означава всяко
      физическо лице или предприятие, което купува стоки чрез Уебсайта.
    </p>
    <p>
      Тази Политика следва да се чете заедно с нашите Общи условия, Политика за доставка, Политика за
      връщане, възстановяване на средства и анулиране, Политика за плащане, Политика за поверителност и
      всякаква специфична за продукта гаранционна информация.
    </p>
    <p>
      Нищо в тази Политика не ограничава задължителните законови права, които може да имате съгласно
      приложимото законодателство за защита на потребителите.
    </p>

    <h2>1. Обхват на тази Политика</h2>
    <p>1.1 Тази Политика се прилага към физически стоки, закупени чрез MisaElectro.</p>
    <p>
      1.2 MisaElectro доставя електрически продукти, електрически материали, аксесоари за окабеляване,
      продукти, свързани с осветление, монтажни компоненти, продукти за разпределение и защита на
      електрически вериги, контакти, ключове, кабели, монтажни аксесоари и свързани стоки.
    </p>
    <p>
      1.3 Тъй като електрическите стоки могат да бъдат критични от гледна точка на безопасността,
      допустимостта за гаранция може да зависи от правилния избор на продукта, правилния монтаж, правилната
      употреба, спазването на инструкциите на производителя и подходящите работни условия.
    </p>
    <p>
      1.4 Тази Политика се прилага както към Потребители, така и към Бизнес клиенти, но някои законови права
      се прилагат само към Потребители.
    </p>

    <h2>2. Законови права, законови гаранции и търговски гаранции</h2>
    <p>2.1 Вашите законови права са права, предоставени от приложимото потребителско законодателство.</p>
    <p>
      2.2 Законовите права може да се прилагат, когато стоките са дефектни, не съответстват на описанието,
      не са годни за предназначението си, са опасни или не са в съответствие с договора.
    </p>
    <p>
      2.3 Тези законови права са отделни от всяка гаранция на производителя, търговска гаранция, платена
      Допълнителна гаранция или доброволна гаранционна услуга.
    </p>
    <p>
      2.4 Нищо в тази Политика не изключва, не ограничава и не намалява задължителните законови права, които
      се прилагат към Вас.
    </p>
    <p>
      2.5 Гаранцията на производителя или Допълнителната гаранция може да Ви даде допълнителна защита, но не
      замества законовите Ви права.
    </p>

    <h2>3. Права на потребителите в Обединеното кралство</h2>
    <p>
      3.1 Ако сте Потребител в Обединеното кралство, може да имате законови права съгласно приложимото
      законодателство за защита на потребителите в Обединеното кралство, когато стоките са дефектни, не
      съответстват на описанието, не са годни за предназначението си или по друг начин не отговарят на
      изискваните стандарти.
    </p>
    <p>
      3.2 Тези права може да включват средства за защита като ремонт, замяна, възстановяване на средства или
      намаляване на цената в зависимост от обстоятелствата, времето, състоянието на продукта и приложимото
      право.
    </p>
    <p>3.3 Тази Политика не ограничава никакви права, които не могат да бъдат законно изключени.</p>

    <h2>4. Законова гаранция за потребителите в ЕС</h2>
    <p>
      4.1 Ако сте Потребител в ЕС, може да имате законова гаранция за минимум 2 години съгласно приложимото
      потребителско законодателство на ЕС.
    </p>
    <p>
      4.2 Законовата гаранция може да се прилага, когато стоките не са в съответствие с договора, са
      дефектни, не съответстват на описанието, не са годни за предназначението си или по друг начин не
      отговарят на приложимите изисквания за съответствие.
    </p>
    <p>
      4.3 Законовата гаранция е предвидена от закона и е отделна от всяка платена Допълнителна гаранция,
      гаранция на производителя или търговска гаранция.
    </p>
    <p>
      4.4 Наличността, процедурата, тежестта на доказване, средствата за защита и сроковете на давност може
      да зависят от правото на държавата Ви на пребиваване и обстоятелствата по претенцията.
    </p>

    <h2>5. Гаранция на производителя</h2>
    <p>5.1 Някои продукти може да се предлагат с гаранция на производителя.</p>
    <p>5.2 Условията на гаранцията на производителя се определят от производителя, а не от MisaElectro.</p>
    <p>
      5.3 Гаранциите на производителя може да варират в зависимост от продукта, марката, държавата, вида на
      продукта, изискванията за монтаж и условията на употреба.
    </p>
    <p>5.4 Гаранцията на производителя може да изисква:</p>
    <ul>
      <li>доказателство за покупка;</li>
      <li>сериен номер на продукта;</li>
      <li>доказателство за монтаж;</li>
      <li>документация за професионален монтаж;</li>
      <li>правилна употреба;</li>
      <li>спазване на инструкциите на производителя;</li>
      <li>регистрация при производителя;</li>
      <li>връщане или проверка на продукта.</li>
    </ul>
    <p>
      5.5 MisaElectro може да съдейства при претенции по гаранция на производителя, когато това е разумно, но
      ние не контролираме решенията на производителя, времето за обработка на гаранцията, резултатите от
      проверката, наличността на замяна или процедурите за ремонт.
    </p>
    <p>
      5.6 Ако условията на гаранцията на производителя се различават от тази Политика, условията на
      гаранцията на производителя може да се прилагат към претенцията по гаранция на производителя.
    </p>

    <h2>6. Платена Допълнителна гаранция</h2>
    <p>6.1 MisaElectro може да предлага платени опции за Допълнителна гаранция за избрани продукти.</p>
    <p>6.2 Допълнителната гаранция е по избор и може да бъде избрана при плащане, където е налична.</p>
    <p>
      6.3 Допълнителната гаранция осигурява защита чрез търговска гаранция в допълнение към законовите Ви
      права.
    </p>
    <p>
      6.4 Допълнителната гаранция не замества, не намалява и не ограничава законовите Ви права или каквато и
      да е приложима законова гаранция.
    </p>
    <p>
      6.5 Освен ако не е посочено друго на страницата на продукта или при плащане, цената на Допълнителната
      гаранция се изчислява, както следва:
    </p>
    <table>
      <thead>
        <tr>
          <th>Опция за Допълнителна гаранция</th>
          <th>Цена</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Допълнителна гаранция +1 година</td><td>10% от цената на продукта, минимум &euro;6.99 / &pound;6.99 / $6.99</td></tr>
        <tr><td>Допълнителна гаранция +2 години</td><td>16% от цената на продукта, минимум &euro;9.99 / &pound;9.99 / $9.99</td></tr>
        <tr><td>Допълнителна гаранция +3 години</td><td>22% от цената на продукта, минимум &euro;12.99 / &pound;12.99 / $12.99</td></tr>
      </tbody>
    </table>
    <p>
      6.6 Цената на Допълнителната гаранция се изчислява въз основа на цената на продукта преди таксите за
      доставка, митата, вносното ДДС, брокерските такси, местните данъци или други такси по местоназначение.
    </p>
    <p>
      6.7 Наличността на Допълнителната гаранция може да варира в зависимост от продукта, категорията,
      местоназначението, вида на поръчката или конфигурацията при плащане.
    </p>

    <h2>7. Кога започва Допълнителната гаранция</h2>
    <p>
      7.1 Освен ако не е посочено друго при плащане или в специфичните за продукта гаранционни условия,
      платената Допълнителна гаранция започва след изтичането на стандартната гаранция, гаранцията на
      производителя, законовия гаранционен срок или срока на законовата гаранция, приложими за съответния
      продукт.
    </p>
    <p>
      7.2 Когато може да се прилагат повече от една гаранция или законова гаранция, Допълнителната гаранция е
      предназначена да осигури допълнителна защита след края на първоначалния приложим гаранционен срок, а не
      да го съкрати или замести.
    </p>
    <p>7.3 Допълнителната гаранция се прилага само за срока, избран при плащане:</p>
    <ul>
      <li>+1 година;</li>
      <li>+2 години;</li>
      <li>+3 години.</li>
    </ul>
    <p>7.4 Допълнителната гаранция е свързана с продукта и първоначалната поръчка.</p>

    <h2>8. Какво покрива Допълнителната гаранция</h2>
    <p>
      8.1 При спазване на тази Политика и всякакви специфични за продукта условия, Допълнителната гаранция
      покрива допустими производствени дефекти и дефекти на материала, които възникват при нормална употреба.
    </p>
    <p>8.2 Покритието се прилага само когато продуктът е бил:</p>
    <ul>
      <li>правилно избран за предназначението си;</li>
      <li>правилно монтиран, когато се изисква монтаж;</li>
      <li>използван в съответствие с инструкциите на производителя;</li>
      <li>експлоатиран в рамките на номиналните спецификации;</li>
      <li>съхраняван при подходящи условия;</li>
      <li>поддържан, когато се изисква;</li>
      <li>не използван неправилно, не претоварен, не модифициран и не повреден.</li>
    </ul>
    <p>
      8.3 Когато е одобрена валидна претенция по Допълнителна гаранция, може да предоставим едно или повече от
      следните средства за защита:
    </p>
    <ul>
      <li>ремонт;</li>
      <li>замяна;</li>
      <li>равностойна замяна;</li>
      <li>частично възстановяване на средства;</li>
      <li>възстановяване на средства;</li>
      <li>кредит в магазина, ако е договорено;</li>
      <li>друго разумно средство за защита.</li>
    </ul>
    <p>
      8.4 Средството за защита ще зависи от вида на продукта, дефекта, наличността на резервни части,
      позицията на производителя/доставчика, резултатите от проверката, възрастта на продукта и приложимото
      право.
    </p>

    <h2>9. Какво не покрива гаранцията</h2>
    <p>
      9.1 Освен ако изрично не е посочено друго, законовата гаранционна поддръжка, гаранциите на
      производителя и платената Допълнителна гаранция не покриват проблеми, причинени от фактори от страна на
      клиента, външни събития, неправилна употреба или неправилен монтаж.
    </p>
    <p>9.2 Гаранционното покритие обикновено не включва:</p>
    <ul>
      <li>неправилен избор на продукт;</li>
      <li>несъвместимост с Вашия монтаж, система, окабеляване, напрежение, среда или изисквания по проекта;</li>
      <li>неправилен монтаж, окабеляване, свързване, изпитване, въвеждане в експлоатация или интеграция;</li>
      <li>монтаж от неквалифицирано или неоторизирано лице, когато се изисква или е подходящ професионален монтаж;</li>
      <li>неспазване на инструкциите на производителя, ръководствата за монтаж, предупрежденията за безопасност или техническите спецификации;</li>
      <li>неправилна употреба, небрежност, злоупотреба, невнимателно боравене или опасна употреба;</li>
      <li>претоварване, неправилно напрежение, неправилен ток, прекомерно натоварване, неподходящо електрозахранване или експлоатация извън номиналните спецификации;</li>
      <li>неоторизиран ремонт, модификация, отваряне, разглобяване, изменение или манипулиране;</li>
      <li>случайна повреда, повреда от удар, повреда от пожар, повреда от вода, повреда от влага, химическа повреда, корозия, замърсяване, проникване на прах или мръсотия;</li>
      <li>повреда, причинена от пренапрежение, мълния, нестабилно електрозахранване, електрически неизправности или по-широки неизправности на инсталацията;</li>
      <li>нормално износване;</li>
      <li>козметична повреда, която не засяга функционалността на продукта;</li>
      <li>консумативи, сменяеми части, батерии, крушки, предпазители, лампи, уплътнения, конектори, аксесоари, филтри или елементи, за които се очаква да се износят, освен ако изрично не са покрити;</li>
      <li>повреда, причинена от неподходящо съхранение, транспорт, температура, влажност или среда;</li>
      <li>продукти, използвани за цели извън предназначението, определено от производителя;</li>
      <li>продукти, използвани в промишлена, търговска, наемна или силно натоварена среда, където продуктът не е предназначен за такава употреба;</li>
      <li>проблеми със софтуер, фърмуер, конфигурация, калибриране или съвместимост, освен ако изрично не са покрити;</li>
      <li>разходи за труд, разходи за електротехник, разходи за изпълнител, разходи за изпитване, разходи за проверка, разходи за демонтаж, разходи за повторен монтаж, разходи за сертифициране, забавяния по проекта, престой, пропуснати ползи или косвени загуби.</li>
    </ul>
    <p>
      9.3 Гаранцията не покрива дефекти или повреди, причинени след доставката от събития извън контрола на
      MisaElectro.
    </p>

    <h2>10. Отговорност при електрически монтаж</h2>
    <p>
      10.1 Електрическите продукти могат да бъдат опасни, ако са неправилно избрани, монтирани, свързани,
      окабелени, модифицирани, претоварени или използвани.
    </p>
    <p>
      10.2 Вие носите отговорност да се уверите, че продуктът е подходящ за предназначението Ви преди
      покупката.
    </p>
    <p>10.3 Следва да проверите всички съответни спецификации, включително:</p>
    <ul>
      <li>напрежение;</li>
      <li>ток;</li>
      <li>мощност (ватове);</li>
      <li>номинално натоварване;</li>
      <li>степен на защита IP;</li>
      <li>размери;</li>
      <li>тип на кабела;</li>
      <li>тип на конектора;</li>
      <li>монтажна среда;</li>
      <li>съвместимост;</li>
      <li>местни електрически изисквания;</li>
      <li>код на продукта и техническа документация.</li>
    </ul>
    <p>
      10.4 Продукти, изискващи монтаж, окабеляване, свързване, изпитване, въвеждане в експлоатация или
      интеграция в електрическа система, следва да се монтират само от квалифициран електротехник или
      компетентен специалист, когато това се изисква или е подходящо.
    </p>
    <p>
      10.5 Гаранцията може да бъде отказана или ограничена, когато дефектът е причинен от неправилен монтаж,
      небезопасен монтаж, монтаж, който не отговаря на изискванията, неподходяща употреба или неспазване на
      инструкциите.
    </p>

    <h2>11. Как да предявите гаранционна претенция</h2>
    <p>11.1 За да предявите гаранционна претенция, свържете се с нас на info@misaelectro.ro.</p>
    <p>11.2 Моля, предоставете:</p>
    <ul>
      <li>пълното Ви име;</li>
      <li>номер на поръчката;</li>
      <li>име на продукта или SKU;</li>
      <li>дата на покупката;</li>
      <li>описание на проблема;</li>
      <li>кога проблемът се е появил за първи път;</li>
      <li>снимки или видеоклипове, показващи продукта и дефекта;</li>
      <li>снимки на етикетите на продукта, серийните номера, номерата на модела или маркировките на производителя;</li>
      <li>подробности за монтажа, когато е приложимо;</li>
      <li>доказателство за професионален монтаж, когато е разумно необходимо;</li>
      <li>всякакви вече предприети стъпки за отстраняване на неизправности.</li>
    </ul>
    <p>11.3 Може да поискаме допълнителна информация, за да оценим претенцията.</p>
    <p>
      11.4 Трябва да преустановите използването на продукта, ако продължаването на употребата може да бъде
      опасно, може да влоши дефекта или може да причини повреда.
    </p>
    <p>
      11.5 Не се опитвайте да извършвате неоторизиран ремонт, модификация, разглобяване или изпитване, когато
      това може да засегне безопасността или допустимостта за гаранция.
    </p>

    <h2>12. Проверка и оценка</h2>
    <p>
      12.1 Гаранционните претенции може да изискват проверка от MisaElectro, производителя, доставчика,
      доставчика на услуги или друга оторизирана страна.
    </p>
    <p>12.2 Може да изискаме да върнете продукта за проверка, преди да одобрим средство за защита.</p>
    <p>12.3 Проверката може да отчете:</p>
    <ul>
      <li>състоянието на продукта;</li>
      <li>доказателство за монтаж;</li>
      <li>признаци на неправилна употреба или външна повреда;</li>
      <li>признаци на претоварване или неправилно напрежение;</li>
      <li>излагане на околната среда;</li>
      <li>модификация или манипулиране;</li>
      <li>констатации на производителя;</li>
      <li>съвместимост с претендирания дефект;</li>
      <li>дали дефектът е покрит от закона, гаранцията на производителя или Допълнителната гаранция.</li>
    </ul>
    <p>
      12.4 Ако проверката потвърди, че проблемът е покрит, ще предоставим подходящо средство за защита в
      съответствие с тази Политика и приложимото право.
    </p>
    <p>
      12.5 Ако проверката установи, че проблемът не е покрит, може да отхвърлим претенцията и, когато е
      приложимо, да Ви върнем продукта за Ваша сметка или да предложим платен ремонт или замяна, когато е
      налична.
    </p>

    <h2>13. Транспорт за връщане при гаранционни претенции</h2>
    <p>13.1 Не следва да връщате продукт за гаранционна оценка, без първо да се свържете с нас.</p>
    <p>13.2 Ще предоставим инструкции за връщане, когато се изисква връщане.</p>
    <p>
      13.3 За валидни гаранционни претенции, включващи дефектни, повредени или несъответстващи стоки,
      транспортът за връщане може да бъде поет от MisaElectro, когато това се изисква от закона или е одобрено
      от нас.
    </p>
    <p>
      13.4 Ако гаранционна претенция бъде отхвърлена, защото дефектът не е покрит, може да носите отговорност
      за транспорта за връщане, разходите за проверка, разходите за обработка или други разумни разходи,
      когато това е разрешено от закона и е ясно съобщено.
    </p>
    <p>
      13.5 За международни гаранционни претенции може да се прилагат митнически декларации, документи за
      внос/износ, данъци, мита, брокерски такси и куриерски такси. Те може да бъдат отговорност на клиента,
      освен ако претенцията не бъде потвърдена като валидна и приложимото право не изисква друго.
    </p>

    <h2>14. Заместващи продукти и ремонтирани продукти</h2>
    <p>
      14.1 Заместващите продукти може да бъдат нови, равностойни, обновени, възстановени, ремонтирани или
      функционално равностойни, когато това е разрешено от закона и е подходящо при съответните обстоятелства.
    </p>
    <p>
      14.2 Ако оригиналният продукт е спрян от производство или не е наличен, може да предложим равностоен или
      разумно сравним продукт.
    </p>
    <p>
      14.3 Замяната или ремонтът не рестартира автоматично първоначалния гаранционен срок, освен ако това не
      се изисква от закона или не е изрично посочено в писмен вид.
    </p>
    <p>
      14.4 Всеки заместващ продукт, ремонтиран продукт или равностоен продукт обикновено остава покрит само за
      оставащия срок на първоначалната гаранция или Допълнителна гаранция, освен ако приложимото право не
      изисква друго.
    </p>

    <h2>15. Възстановяване на средства по гаранция</h2>
    <p>
      15.1 Възстановяване на средства по гаранция може да бъде предложено, когато ремонтът или замяната не са
      налични, не са практични, не са пропорционални или се изискват от закона.
    </p>
    <p>
      15.2 Възстановените суми може да отчитат възрастта на продукта, употребата, състоянието, резултатите от
      проверката, приложимото право и естеството на дефекта.
    </p>
    <p>15.3 Възстановяванията обикновено се извършват по първоначалния метод на плащане, когато е възможно.</p>
    <p>
      15.4 Таксите за доставка, митата, вносното ДДС, брокерските такси, куриерските такси за обработка,
      местните данъци, разходите за монтаж, разходите за труд и други разходи на трети страни обикновено не
      подлежат на възстановяване по гаранция, освен ако това не се изисква от закона.
    </p>

    <h2>16. Анулиране и възстановяване на Допълнителната гаранция</h2>
    <p>
      16.1 Ако валидно анулирате или върнете продукт преди началото на Допълнителната гаранция и
      възстановяването на средствата за продукта е одобрено, свързаната такса за Допълнителна гаранция също
      може да бъде възстановена, когато това се изисква от закона или е одобрено от MisaElectro.
    </p>
    <p>
      16.2 Ако Допълнителната гаранция вече е започнала или вече е използвана за претенция, тя може да не
      подлежи на възстановяване, освен ако това не се изисква от закона.
    </p>
    <p>
      16.3 Допълнителната гаранция е свързана със съответния продукт и поръчка и обикновено не може да бъде
      прехвърляна към друг продукт, поръчка, лице или клиент.
    </p>

    <h2>17. Гаранционни условия за Бизнес клиенти</h2>
    <p>
      17.1 Бизнес клиентите носят отговорност за проверка на пригодността на продукта, спецификациите,
      съвместимостта, изискванията за монтаж и регулаторните изисквания преди покупката.
    </p>
    <p>
      17.2 Очаква се Бизнес клиентите да разполагат с подходящи технически познания или професионална
      консултация при закупуване на електрически стоки.
    </p>
    <p>
      17.3 Гаранционните средства за защита за Бизнес клиенти може да бъдат по-ограничени от тези, достъпни за
      Потребители, освен когато задължителното право предвижда друго.
    </p>
    <p>
      17.4 В най-пълната степен, позволена от закона, MisaElectro няма да носи отговорност пред Бизнес клиенти
      за разходи за труд, разходи за електротехник, разходи за изпълнител, разходи за изпитване, разходи за
      демонтаж, разходи за повторен монтаж, разходи за сертифициране, забавяния по проекта, престой,
      пропуснати ползи, загуба на договор, загуба на приходи, загуба на бизнес възможност или косвени или
      последващи загуби, произтичащи от гаранционен проблем.
    </p>
    <p>
      17.5 Бизнес клиентите не следва да планират монтаж, труд, крайни срокове по проекта или работа на обекта,
      докато стоките не бъдат получени, проверени и потвърдени като правилни и подходящи.
    </p>

    <h2>18. Инструкции и документация на производителя</h2>
    <p>
      18.1 Трябва да запазите и да спазвате всички инструкции, ръководства, етикети, предупреждения за
      безопасност и техническа документация на производителя, предоставени с продукта или предоставени от
      производителя.
    </p>
    <p>18.2 Неспазването на инструкциите на производителя може да засегне допустимостта за гаранция.</p>
    <p>
      18.3 Ако не сте сигурни как да монтирате, свържете, изпитате или използвате безопасно продукт, следва да
      потърсите съвет от квалифициран електротехник или компетентен специалист.
    </p>

    <h2>19. Връзка с Политиката за връщане</h2>
    <p>19.1 Тази Гаранционна политика обхваща гаранционни претенции и претенции за дефекти.</p>
    <p>
      19.2 Връщанията поради промяна на решението, правата на потребителя за анулиране, времето за
      възстановяване на средства, невъзвръщаемите артикули, повредените доставки, неправилните стоки и
      процедурите за връщане са обхванати в нашата Политика за връщане, възстановяване на средства и анулиране.
    </p>
    <p>19.3 Гаранционната претенция не е същото като връщане поради промяна на решението.</p>
    <p>
      19.4 Ако продукт е дефектен, повреден, неправилен или не съответства на описанието, претенцията Ви може
      да бъде разгледана съгласно приложимото потребителско законодателство, Политиката за връщане, гаранцията
      на производителя, тази Гаранционна политика или комбинация от тях в зависимост от обстоятелствата.
    </p>

    <h2>20. Промени в тази Гаранционна политика</h2>
    <p>
      20.1 Може да актуализираме тази Гаранционна политика от време на време, за да отразим промени в
      гаранционните опции, продуктовите категории, условията на производителя, ценообразуването на
      допълнителната гаранция, законовите изисквания, процедурите на доставчиците или бизнес операциите.
    </p>
    <p>
      20.2 Версията на тази Гаранционна политика, действаща към момента на подаване на поръчката Ви, ще се
      прилага към тази поръчка, освен ако промяна не се изисква от закона или не се отнася до корекция, която
      трябва да бъде приложена.
    </p>
    <p>
      20.3 Когато актуализираме тази Политика, ще променим датата &bdquo;Последна актуализация&rdquo; в
      горната част на страницата.
    </p>

    <h2>21. Информация за контакт</h2>
    <p>
      Ако имате въпроси относно законовите права, гаранцията на производителя, Допълнителната гаранция,
      гаранционните претенции, дефектите на продуктите или гаранционните изключения, моля, свържете се с нас:
    </p>
    <ContactBlock />
  </PolicyLayout>
);

const content: Record<Locale, ReactNode> = {
  ro,
  hu,
  bg,
  en,
};

export default async function WarrantyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return content[(locale as Locale)] ?? content.en;
}
