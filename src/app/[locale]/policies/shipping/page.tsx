import { PolicyLayout, ContactBlock } from "@/components/layout/PolicyLayout/PolicyLayout";
import type { ReactNode } from "react";

type Locale = "ro" | "hu" | "bg" | "en";

const metaTitles: Record<Locale, string> = {
  ro: "Politica de livrare — MisaElectro",
  hu: "Szállítási szabályzat — MisaElectro",
  bg: "Политика за доставка — MisaElectro",
  en: "Shipping Policy — MisaElectro",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return { title: metaTitles[(locale as Locale)] ?? metaTitles.en };
}

const en: ReactNode = (
  <PolicyLayout title="Shipping Policy" lastUpdated="29 May 2026">
    <p>
      This Shipping Policy explains how orders placed through www.misaelectro.ro are processed,
      dispatched, delivered, and handled in the event of delivery issues.
    </p>
    <p>The Website is operated by:</p>
    <ContactBlock />
    <p>
      In this Policy, &ldquo;MisaElectro&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;
      means MISARELIANA S.R.L.. &ldquo;Customer&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo; means the
      person or business placing an order through the Website.
    </p>
    <p>
      This Shipping Policy should be read together with our Terms and Conditions, Returns and Refunds
      Policy, Privacy Policy, and any additional information displayed at checkout.
    </p>

    <h2>1. Scope of This Policy</h2>
    <p>1.1 This Policy applies to the delivery of physical goods purchased through MisaElectro.</p>
    <p>
      1.2 MisaElectro supplies electrical products, electrical materials, wiring accessories,
      lighting-related products, installation components, distribution and circuit protection products,
      sockets, switches, cables, mounting accessories, and other related goods.
    </p>
    <p>
      1.3 Delivery options, shipping rates, estimated delivery times, and supported destinations may vary
      depending on the destination country, product type, order value, product size, weight, courier
      availability, customs requirements, and other operational factors.
    </p>
    <p>
      1.4 Delivery estimates are not guaranteed delivery dates unless expressly stated otherwise in writing
      by MisaElectro.
    </p>

    <h2>2. Order Processing Time</h2>
    <p>
      2.1 Orders are typically processed within 1&ndash;2 business days after successful payment
      confirmation.
    </p>
    <p>
      2.2 Processing time means the time required to review the order, confirm payment, prepare the goods,
      complete fulfilment checks, and hand the parcel to the carrier.
    </p>
    <p>
      2.3 Processing times may be longer during peak seasons, promotional periods, public holidays,
      high-volume periods, supplier delays, stock checks, payment reviews, fraud prevention reviews, or
      where additional order verification is required.
    </p>
    <p>
      2.4 Orders containing multiple products may be dispatched together or in separate parcels depending
      on stock availability, product type, packaging requirements, and logistics efficiency.
    </p>
    <p>
      2.5 If an item is unavailable, delayed, discontinued, incorrectly listed, or cannot be supplied, we
      may contact you to offer an alternative, delay the order, partially fulfil the order, or cancel and
      refund the unavailable item.
    </p>

    <h2>3. Dispatch Location</h2>
    <p>3.1 MisaElectro dispatches orders from the United Kingdom.</p>
    <p>
      3.2 Delivery times shown in this Policy are calculated from the date of dispatch, not from the date
      the order is placed.
    </p>
    <p>
      3.3 Once your order has been dispatched, you may receive a shipping confirmation email or tracking
      information where available.
    </p>
    <p>
      3.4 Tracking availability depends on the courier, destination, delivery method, and service used.
    </p>

    <h2>4. Delivery Methods and Carriers</h2>
    <p>4.1 We use trusted courier and postal partners to deliver orders.</p>
    <p>
      4.2 Domestic UK orders may be delivered by Royal Mail, DHL, or another suitable domestic carrier
      depending on the parcel size, destination, product type, and operational requirements.
    </p>
    <p>
      4.3 International orders are generally delivered using DHL international services, partner carriers,
      local couriers, or other logistics providers suitable for the destination.
    </p>
    <p>
      4.4 The specific carrier may be selected automatically based on the delivery address, parcel
      characteristics, service availability, and shipping efficiency.
    </p>
    <p>
      4.5 We reserve the right to change the carrier or delivery method where necessary to complete
      delivery safely and efficiently.
    </p>

    <h2>5. Estimated Delivery Times</h2>
    <p>5.1 Once dispatched, estimated delivery times are generally as follows:</p>
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
      5.2 These delivery times are estimates only and may vary depending on courier capacity, customs
      processing, destination country, local courier handling, remote or rural delivery areas, public
      holidays, weather conditions, transport disruption, security checks, import controls, and other
      circumstances outside our control.
    </p>
    <p>
      5.3 Deliveries to remote islands, rural addresses, military addresses, industrial sites,
      construction sites, freight forwarding addresses, or locations with limited courier access may take
      longer.
    </p>
    <p>
      5.4 MisaElectro is not responsible for delays caused by customs authorities, local postal operators,
      courier networks, incorrect delivery information, failed delivery attempts, unpaid import charges,
      or events outside our reasonable control.
    </p>

    <h2>6. Shipping Rates and Free Delivery</h2>
    <p>
      6.1 Shipping costs are calculated and displayed at checkout before you complete your order.
    </p>
    <p>
      6.2 Unless stated otherwise, eligible orders qualify for free delivery when the product subtotal
      exceeds:
    </p>
    <ul>
      <li>&euro;100 for EUR orders;</li>
      <li>RON 500 for RON orders;</li>
      <li>HUF 40,000 for HUF orders.</li>
    </ul>
    <p>
      6.3 The free delivery threshold is calculated based on the product subtotal after discounts and
      before any customs duties, import VAT, taxes, brokerage fees, courier surcharges, special handling
      fees, or other local charges.
    </p>
    <p>
      6.4 Free delivery may not apply to all destinations, oversized goods, heavy goods, restricted goods,
      special order items, split shipments, remote delivery areas, or products requiring special handling.
    </p>
    <p>
      6.5 Shipping rates may change from time to time due to carrier pricing, fuel surcharges, destination
      restrictions, logistics costs, customs requirements, or operational changes.
    </p>
    <p>
      6.6 If a shipping rate has been incorrectly displayed due to a technical error, we may contact you
      before dispatch to correct the shipping charge or offer cancellation of the order.
    </p>

    <h2>7. Delivery Address and Customer Details</h2>
    <p>
      7.1 You are responsible for providing a complete, accurate, and deliverable shipping address at
      checkout.
    </p>
    <p>
      7.2 The delivery address should include all relevant details, including the recipient name, company
      name where applicable, street address, building number, apartment or unit number, postcode, city,
      country, phone number, and any access instructions required for delivery.
    </p>
    <p>
      7.3 MisaElectro is not responsible for delays, failed deliveries, lost parcels, return charges, or
      additional costs caused by incorrect, incomplete, outdated, or improperly formatted address
      information provided by you.
    </p>
    <p>7.4 Once an order has been dispatched, we may be unable to change the delivery address.</p>
    <p>
      7.5 If a parcel is returned to us because the address was incorrect, incomplete, inaccessible,
      refused, or not collected, we may deduct the original shipping cost, return shipping cost, courier
      charges, customs charges, and other reasonable costs from any refund, unless prohibited by law.
    </p>

    <h2>8. International Shipping</h2>
    <p>
      8.1 MisaElectro may accept international orders to supported delivery destinations shown on the
      Website or at checkout.
    </p>
    <p>
      8.2 International delivery availability may depend on destination country, courier service
      availability, product restrictions, customs requirements, sanctions, export controls, payment
      processing rules, and operational limitations.
    </p>
    <p>
      8.3 We do not guarantee delivery to every country, region, island, territory, remote location, or
      restricted destination.
    </p>
    <p>
      8.4 If delivery to your destination is unavailable after your order has been placed, we may cancel
      the order and refund the amount paid for the unavailable delivery, unless the transaction is subject
      to legal, fraud, sanctions, or compliance review.
    </p>
    <p>
      8.5 International shipments may require customs declarations, commercial invoices, product
      classification details, and other export or import information.
    </p>

    <h2>9. Customs, Import Duties, and Local Taxes</h2>
    <p>
      9.1 Orders delivered outside the United Kingdom may be subject to customs clearance, import duties,
      import VAT, taxes, brokerage fees, handling charges, disbursement fees, customs clearance fees, or
      other local charges.
    </p>
    <p>
      9.2 Unless expressly stated otherwise at checkout, these charges are the responsibility of the
      customer.
    </p>
    <p>
      9.3 MisaElectro does not control customs authorities, import tax assessments, duty rates, customs
      inspections, courier customs procedures, or local government charges.
    </p>
    <p>
      9.4 Customs charges and import taxes are not included in the product price or shipping price unless
      expressly stated otherwise at checkout.
    </p>
    <p>
      9.5 The courier or customs authority may contact you directly to collect payment of duties, taxes, or
      clearance charges before delivery can be completed.
    </p>
    <p>
      9.6 Failure to pay customs charges, import taxes, courier fees, or required local charges may result
      in delivery delay, return of the parcel, abandonment, seizure, or disposal of the goods.
    </p>
    <p>
      9.7 If a parcel is returned to us because you did not pay customs charges, did not complete customs
      requirements, refused delivery, or failed to cooperate with the courier or customs authority, we may
      deduct shipping costs, return costs, customs charges, courier fees, and other reasonable costs from
      any refund, unless prohibited by law.
    </p>
    <p>
      9.8 You are responsible for checking whether the goods you order can lawfully be imported into and
      used in your destination country.
    </p>

    <h2>10. Product Restrictions and Electrical Goods</h2>
    <p>
      10.1 Some electrical goods may be subject to destination-specific import, safety, certification,
      voltage, plug, labelling, or installation requirements.
    </p>
    <p>
      10.2 You are responsible for ensuring that any product ordered is suitable for import, installation,
      use, resale, or professional application in your country or region.
    </p>
    <p>
      10.3 Before placing an order, you should check all product specifications, including voltage,
      current, wattage, IP rating, dimensions, cable type, connector type, product code, installation
      environment, and compliance requirements.
    </p>
    <p>
      10.4 We are not responsible for delays, customs refusal, failed installation, non-compliance, or
      rejection caused by destination-specific rules or incorrect product selection.
    </p>
    <p>
      10.5 Products requiring installation, wiring, connection, testing, commissioning, or integration
      into an electrical system should be installed only by a qualified electrician or competent
      professional where required or appropriate.
    </p>

    <h2>11. Split Shipments</h2>
    <p>
      11.1 We may dispatch an order in multiple parcels or separate shipments where this is more efficient
      or necessary due to product availability, size, weight, packaging requirements, warehouse handling,
      or carrier restrictions.
    </p>
    <p>
      11.2 If your order is split into multiple shipments, you may receive separate tracking numbers and
      different delivery dates.
    </p>
    <p>
      11.3 Split shipments do not normally increase the shipping charge payable by you unless clearly
      stated before you complete the order.
    </p>

    <h2>12. Delivery Attempts and Missed Deliveries</h2>
    <p>
      12.1 The courier may attempt delivery at the address provided or may redirect the parcel to a
      collection point, parcel shop, depot, locker, or local delivery partner depending on the destination
      and courier rules.
    </p>
    <p>
      12.2 You are responsible for monitoring tracking updates and responding to courier notifications
      where required.
    </p>
    <p>
      12.3 If delivery is missed, refused, or unsuccessful, you must follow the courier&rsquo;s
      instructions to rearrange delivery or collect the parcel within the stated timeframe.
    </p>
    <p>
      12.4 MisaElectro is not responsible for failed delivery where you do not respond to courier notices, do
      not collect the parcel, refuse the parcel, provide an inaccessible address, or fail to pay customs
      or local charges.
    </p>
    <p>
      12.5 Additional redelivery, storage, return, or handling fees may be deducted from any refund or
      charged separately where permitted by law.
    </p>

    <h2>13. Damaged Parcels and Delivery Issues</h2>
    <p>13.1 You should inspect the parcel upon delivery where possible.</p>
    <p>
      13.2 If the parcel appears visibly damaged, opened, wet, crushed, tampered with, or incomplete, you
      should take photos before opening it and keep all packaging materials.
    </p>
    <p>
      13.3 If goods arrive damaged, missing, incomplete, or incorrect, please contact us as soon as
      possible at info@misaelectro.ro.
    </p>
    <p>
      13.4 Please include your order number, a description of the issue, and clear photos or videos of the
      product, packaging, shipping label, and any visible damage.
    </p>
    <p>
      13.5 For visible delivery damage, please notify us within 48 hours of delivery where possible. This
      helps us investigate courier claims quickly, but it does not remove any mandatory legal rights you
      may have.
    </p>
    <p>
      13.6 You must keep the goods, packaging, labels, accessories, manuals, and delivery materials until
      we have reviewed the issue.
    </p>
    <p>
      13.7 We may require the damaged or incorrect goods to be returned or inspected before approving a
      replacement, refund, or other remedy.
    </p>

    <h2>14. Lost or Delayed Parcels</h2>
    <p>
      14.1 If your parcel has not arrived within the estimated delivery timeframe, please first check the
      tracking information and any courier notifications.
    </p>
    <p>
      14.2 If tracking shows an unusual delay, failed delivery, customs hold, or no movement for an
      extended period, please contact us at info@misaelectro.ro.
    </p>
    <p>
      14.3 We may need to open an investigation with the courier before confirming that a parcel is lost.
    </p>
    <p>
      14.4 Courier investigations may take time, especially for international shipments, customs delays,
      remote destinations, or parcels handled by multiple delivery partners.
    </p>
    <p>
      14.5 We will take reasonable steps to assist you, but we are not responsible for delays caused by
      customs processing, courier investigations, local delivery partners, incorrect address details,
      unpaid import charges, or events outside our control.
    </p>
    <p>
      14.6 If a parcel is confirmed as lost by the courier and the loss is not caused by customer error, we
      may offer a replacement, refund, or other appropriate remedy.
    </p>

    <h2>15. Refused Deliveries</h2>
    <p>
      15.1 If you refuse delivery without a valid reason, fail to accept the parcel, or fail to collect the
      parcel from the courier, the parcel may be returned to us.
    </p>
    <p>
      15.2 If the parcel is returned to us, we may deduct the original shipping cost, return shipping
      cost, courier fees, customs charges, storage fees, handling charges, and any other reasonable costs
      from your refund, unless prohibited by law.
    </p>
    <p>
      15.3 If you are a Consumer and you refuse delivery as part of exercising your legal cancellation
      rights, your refund will be handled in accordance with our Returns and Refunds Policy and applicable
      law.
    </p>
    <p>
      15.4 Refusing delivery does not automatically cancel customs charges, courier charges, or local fees
      that may have already been assessed.
    </p>

    <h2>16. Orders Delivered to Third Parties or Forwarding Addresses</h2>
    <p>
      16.1 If you choose to have an order delivered to a freight forwarder, parcel forwarding service,
      hotel, workplace, construction site, third-party address, or collection point, delivery is considered
      completed when the carrier delivers the parcel to that address or authorised recipient.
    </p>
    <p>
      16.2 MisaElectro is not responsible for loss, damage, delay, customs issues, onward shipping problems,
      or failed delivery after the parcel has been delivered to a third party, forwarding service,
      collection point, or authorised recipient chosen by you.
    </p>
    <p>
      16.3 You are responsible for ensuring that the third party is authorised to receive the parcel and
      can handle it safely.
    </p>

    <h2>17. Business and Trade Orders</h2>
    <p>
      17.1 Business Customers, trade customers, contractors, installers, and professional buyers are
      responsible for ensuring that delivery dates, product availability, import requirements, and
      installation schedules are suitable for their projects.
    </p>
    <p>17.2 Delivery estimates should not be treated as guaranteed project deadlines.</p>
    <p>
      17.3 MisaElectro is not responsible for labour costs, electrician costs, contractor costs, installation
      costs, project delay, missed appointments, downtime, loss of profit, loss of contract, or other
      indirect losses caused by delivery delay, customs delay, courier issue, or product unavailability,
      except where liability cannot lawfully be excluded.
    </p>
    <p>
      17.4 Business Customers should not schedule installation, labour, site work, or project deadlines
      until the goods have been received, inspected, and confirmed as correct and suitable.
    </p>

    <h2>18. Restricted Destinations and Compliance</h2>
    <p>
      18.1 We may refuse, cancel, suspend, or block any order where delivery would breach or may breach
      sanctions, export controls, customs restrictions, payment processor rules, courier restrictions,
      legal requirements, or internal compliance controls.
    </p>
    <p>
      18.2 We may screen orders, billing details, delivery addresses, customers, countries, regions, and
      payment information against applicable sanctions, restricted party, fraud prevention, and compliance
      requirements.
    </p>
    <p>
      18.3 We do not ship to destinations where delivery is prohibited by applicable law, sanctions,
      carrier restrictions, payment processor restrictions, or our compliance requirements.
    </p>
    <p>
      18.4 Attempting to bypass restricted destination controls by using a freight forwarder, third-party
      address, false address, altered billing information, or misleading order details may result in
      cancellation of the order and restriction of access to the Website.
    </p>
    <p>
      18.5 We are not responsible for loss, delay, cancellation, blocked delivery, customs seizure, or
      additional costs caused by sanctions, export controls, customs restrictions, courier restrictions, or
      legal compliance requirements.
    </p>

    <h2>19. Events Outside Our Control</h2>
    <p>
      19.1 We are not responsible for failure or delay in delivery caused by events outside our reasonable
      control.
    </p>
    <p>
      19.2 Such events may include severe weather, natural disasters, transport disruption, carrier
      failure, customs delay, strikes, labour disputes, public holidays, government action, regulatory
      changes, sanctions, war, civil unrest, epidemic, pandemic, power failure, technical failure, security
      checks, supply chain disruption, or other force majeure events.
    </p>
    <p>
      19.3 If such an event affects your order, we will take reasonable steps to minimise disruption and
      provide updates where appropriate.
    </p>

    <h2>20. Changes to This Shipping Policy</h2>
    <p>
      20.1 We may update this Shipping Policy from time to time to reflect changes in our delivery
      methods, courier partners, delivery regions, shipping rates, customs processes, operational
      practices, or legal requirements.
    </p>
    <p>
      20.2 The version of the Shipping Policy in force at the time you place your order will apply to that
      order, unless a change is required by law or relates to a correction that must be applied.
    </p>

    <h2>21. Contact Information</h2>
    <p>
      If you have any questions about shipping, delivery status, customs, damaged parcels, missed
      delivery, or any delivery-related issue, please contact us:
    </p>
    <ContactBlock />
  </PolicyLayout>
);

const ro: ReactNode = (
  <PolicyLayout title="Politica de livrare" lastUpdated="29 mai 2026">
    <p>
      Această Politică de livrare explică modul în care comenzile plasate prin www.misaelectro.ro sunt
      procesate, expediate, livrate și gestionate în cazul apariției unor probleme de livrare.
    </p>
    <p>Site-ul web este operat de:</p>
    <ContactBlock />
    <p>
      În prezenta Politică, &bdquo;MisaElectro&rdquo;, &bdquo;noi&rdquo; sau &bdquo;al nostru&rdquo;
      înseamnă MISARELIANA S.R.L.. &bdquo;Client&rdquo;, &bdquo;dumneavoastră&rdquo; sau &bdquo;al
      dumneavoastră&rdquo; înseamnă persoana fizică sau juridică ce plasează o comandă prin intermediul
      Site-ului web.
    </p>
    <p>
      Această Politică de livrare trebuie citită împreună cu Termenii și condițiile noastre, Politica
      privind returnările și rambursările, Politica de confidențialitate și orice informații suplimentare
      afișate la finalizarea comenzii.
    </p>

    <h2>1. Domeniul de aplicare al prezentei Politici</h2>
    <p>
      1.1 Prezenta Politică se aplică livrării de bunuri fizice achiziționate prin intermediul MisaElectro.
    </p>
    <p>
      1.2 MisaElectro furnizează produse electrice, materiale electrice, accesorii de cablaj, produse
      pentru iluminat, componente de instalare, produse de distribuție și de protecție a circuitelor,
      prize, întrerupătoare, cabluri, accesorii de montaj și alte bunuri conexe.
    </p>
    <p>
      1.3 Opțiunile de livrare, tarifele de expediere, timpii de livrare estimați și destinațiile
      acceptate pot varia în funcție de țara de destinație, tipul produsului, valoarea comenzii,
      dimensiunea produsului, greutate, disponibilitatea curierului, cerințele vamale și alți factori
      operaționali.
    </p>
    <p>
      1.4 Estimările de livrare nu reprezintă date de livrare garantate, cu excepția cazului în care se
      prevede în mod expres altfel, în scris, de către MisaElectro.
    </p>

    <h2>2. Timpul de procesare a comenzii</h2>
    <p>
      2.1 Comenzile sunt de regulă procesate în termen de 1&ndash;2 zile lucrătoare de la confirmarea cu
      succes a plății.
    </p>
    <p>
      2.2 Timpul de procesare înseamnă intervalul necesar pentru a verifica comanda, a confirma plata, a
      pregăti bunurile, a efectua verificările de onorare și a preda coletul curierului.
    </p>
    <p>
      2.3 Timpii de procesare pot fi mai lungi în perioadele de vârf, perioadele promoționale,
      sărbătorile legale, perioadele cu volum ridicat, în caz de întârzieri ale furnizorilor, verificări
      de stoc, verificări ale plăților, verificări de prevenire a fraudei sau atunci când este necesară o
      verificare suplimentară a comenzii.
    </p>
    <p>
      2.4 Comenzile care conțin mai multe produse pot fi expediate împreună sau în colete separate, în
      funcție de disponibilitatea stocului, tipul produsului, cerințele de ambalare și eficiența
      logistică.
    </p>
    <p>
      2.5 Dacă un articol este indisponibil, întârziat, scos din producție, listat incorect sau nu poate
      fi furnizat, vă putem contacta pentru a vă oferi o alternativă, a amâna comanda, a onora parțial
      comanda sau a anula și rambursa articolul indisponibil.
    </p>

    <h2>3. Locul de expediere</h2>
    <p>3.1 MisaElectro expediază comenzile din Regatul Unit.</p>
    <p>
      3.2 Timpii de livrare indicați în prezenta Politică sunt calculați de la data expedierii, nu de la
      data plasării comenzii.
    </p>
    <p>
      3.3 După ce comanda dumneavoastră a fost expediată, este posibil să primiți un e-mail de confirmare
      a expedierii sau informații de urmărire, acolo unde sunt disponibile.
    </p>
    <p>
      3.4 Disponibilitatea urmăririi depinde de curier, destinație, metoda de livrare și serviciul
      utilizat.
    </p>

    <h2>4. Metode de livrare și transportatori</h2>
    <p>4.1 Utilizăm parteneri de curierat și poștali de încredere pentru livrarea comenzilor.</p>
    <p>
      4.2 Comenzile interne din Regatul Unit pot fi livrate prin Royal Mail, DHL sau alt transportator
      intern adecvat, în funcție de dimensiunea coletului, destinație, tipul produsului și cerințele
      operaționale.
    </p>
    <p>
      4.3 Comenzile internaționale sunt livrate în general prin serviciile internaționale DHL,
      transportatori parteneri, curieri locali sau alți furnizori de servicii logistice adecvați pentru
      destinație.
    </p>
    <p>
      4.4 Transportatorul specific poate fi selectat automat pe baza adresei de livrare, a
      caracteristicilor coletului, a disponibilității serviciului și a eficienței de expediere.
    </p>
    <p>
      4.5 Ne rezervăm dreptul de a schimba transportatorul sau metoda de livrare atunci când este necesar
      pentru a finaliza livrarea în siguranță și în mod eficient.
    </p>

    <h2>5. Timpi de livrare estimați</h2>
    <p>5.1 După expediere, timpii de livrare estimați sunt în general următorii:</p>
    <table>
      <thead>
        <tr>
          <th>Destinație</th>
          <th>Timp de livrare estimat de la expediere</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Regatul Unit</td><td>1&ndash;3 zile lucrătoare</td></tr>
        <tr><td>Europa</td><td>3&ndash;7 zile lucrătoare</td></tr>
        <tr><td>America de Nord</td><td>5&ndash;10 zile lucrătoare</td></tr>
        <tr><td>Asia &amp; Oceania</td><td>7&ndash;14 zile lucrătoare</td></tr>
        <tr><td>Africa &amp; America de Sud</td><td>8&ndash;15 zile lucrătoare</td></tr>
      </tbody>
    </table>
    <p>
      5.2 Acești timpi de livrare sunt doar estimativi și pot varia în funcție de capacitatea curierului,
      procesarea vamală, țara de destinație, manipularea de către curierul local, zonele de livrare
      îndepărtate sau rurale, sărbătorile legale, condițiile meteorologice, perturbările de transport,
      controalele de securitate, controalele la import și alte circumstanțe aflate în afara controlului
      nostru.
    </p>
    <p>
      5.3 Livrările către insule îndepărtate, adrese rurale, adrese militare, situri industriale,
      șantiere de construcții, adrese de expediere de marfă (freight forwarding) sau locații cu acces
      limitat al curierului pot dura mai mult.
    </p>
    <p>
      5.4 MisaElectro nu este responsabilă pentru întârzierile cauzate de autoritățile vamale, operatorii
      poștali locali, rețelele de curierat, informațiile de livrare incorecte, încercările de livrare
      eșuate, taxele de import neachitate sau evenimentele aflate în afara controlului nostru rezonabil.
    </p>

    <h2>6. Tarife de expediere și livrare gratuită</h2>
    <p>
      6.1 Costurile de expediere sunt calculate și afișate la finalizarea comenzii, înainte de a vă
      finaliza comanda.
    </p>
    <p>
      6.2 Cu excepția cazului în care se prevede altfel, comenzile eligibile beneficiază de livrare
      gratuită atunci când subtotalul produselor depășește:
    </p>
    <ul>
      <li>&euro;100 pentru comenzile în EUR;</li>
      <li>RON 500 pentru comenzile în RON;</li>
      <li>HUF 40.000 pentru comenzile în HUF.</li>
    </ul>
    <p>
      6.3 Pragul de livrare gratuită este calculat pe baza subtotalului produselor după aplicarea
      reducerilor și înainte de orice taxe vamale, TVA la import, impozite, comisioane de brokeraj,
      suprataxe ale curierului, taxe speciale de manipulare sau alte taxe locale.
    </p>
    <p>
      6.4 Livrarea gratuită poate să nu se aplice tuturor destinațiilor, bunurilor supradimensionate,
      bunurilor grele, bunurilor restricționate, articolelor comandate special, expedierilor divizate,
      zonelor de livrare îndepărtate sau produselor care necesită o manipulare specială.
    </p>
    <p>
      6.5 Tarifele de expediere se pot modifica din când în când din cauza prețurilor practicate de
      transportatori, a suprataxelor de combustibil, a restricțiilor de destinație, a costurilor
      logistice, a cerințelor vamale sau a modificărilor operaționale.
    </p>
    <p>
      6.6 Dacă un tarif de expediere a fost afișat incorect din cauza unei erori tehnice, vă putem
      contacta înainte de expediere pentru a corecta taxa de expediere sau pentru a vă oferi anularea
      comenzii.
    </p>

    <h2>7. Adresa de livrare și datele clientului</h2>
    <p>
      7.1 Sunteți responsabil pentru furnizarea unei adrese de livrare complete, corecte și la care se
      poate livra, la finalizarea comenzii.
    </p>
    <p>
      7.2 Adresa de livrare trebuie să includă toate detaliile relevante, inclusiv numele destinatarului,
      denumirea firmei, dacă este cazul, adresa stradală, numărul clădirii, numărul apartamentului sau al
      unității, codul poștal, orașul, țara, numărul de telefon și orice instrucțiuni de acces necesare
      pentru livrare.
    </p>
    <p>
      7.3 MisaElectro nu este responsabilă pentru întârzieri, livrări eșuate, colete pierdute, taxe de
      returnare sau costuri suplimentare cauzate de informații de adresă incorecte, incomplete, expirate
      sau formatate necorespunzător, furnizate de dumneavoastră.
    </p>
    <p>
      7.4 După ce o comandă a fost expediată, este posibil să nu putem modifica adresa de livrare.
    </p>
    <p>
      7.5 Dacă un colet ne este returnat deoarece adresa a fost incorectă, incompletă, inaccesibilă,
      refuzată sau necolectată, putem deduce din orice rambursare costul inițial de expediere, costul de
      returnare, taxele de curierat, taxele vamale și alte costuri rezonabile, cu excepția cazului în
      care legea interzice acest lucru.
    </p>

    <h2>8. Expediere internațională</h2>
    <p>
      8.1 MisaElectro poate accepta comenzi internaționale către destinațiile de livrare acceptate,
      afișate pe Site-ul web sau la finalizarea comenzii.
    </p>
    <p>
      8.2 Disponibilitatea livrării internaționale poate depinde de țara de destinație, disponibilitatea
      serviciului de curierat, restricțiile de produs, cerințele vamale, sancțiunile, controalele la
      export, regulile de procesare a plăților și limitările operaționale.
    </p>
    <p>
      8.3 Nu garantăm livrarea în fiecare țară, regiune, insulă, teritoriu, locație îndepărtată sau
      destinație restricționată.
    </p>
    <p>
      8.4 Dacă livrarea către destinația dumneavoastră devine indisponibilă după plasarea comenzii, putem
      anula comanda și rambursa suma plătită pentru livrarea indisponibilă, cu excepția cazului în care
      tranzacția face obiectul unei verificări legale, de fraudă, de sancțiuni sau de conformitate.
    </p>
    <p>
      8.5 Expedierile internaționale pot necesita declarații vamale, facturi comerciale, detalii de
      clasificare a produselor și alte informații de export sau import.
    </p>

    <h2>9. Vama, taxele de import și impozitele locale</h2>
    <p>
      9.1 Comenzile livrate în afara Regatului Unit pot fi supuse vămuirii, taxelor de import, TVA-ului
      la import, impozitelor, comisioanelor de brokeraj, taxelor de manipulare, comisioanelor de
      debursare, taxelor de vămuire sau altor taxe locale.
    </p>
    <p>
      9.2 Cu excepția cazului în care se prevede în mod expres altfel la finalizarea comenzii, aceste taxe
      sunt în responsabilitatea clientului.
    </p>
    <p>
      9.3 MisaElectro nu controlează autoritățile vamale, evaluările taxelor de import, cotele taxelor
      vamale, inspecțiile vamale, procedurile vamale ale curierului sau taxele autorităților locale.
    </p>
    <p>
      9.4 Taxele vamale și impozitele de import nu sunt incluse în prețul produsului sau în prețul de
      expediere, cu excepția cazului în care se prevede în mod expres altfel la finalizarea comenzii.
    </p>
    <p>
      9.5 Curierul sau autoritatea vamală vă poate contacta direct pentru a colecta plata taxelor vamale,
      a impozitelor sau a taxelor de vămuire, înainte ca livrarea să poată fi finalizată.
    </p>
    <p>
      9.6 Neplata taxelor vamale, a impozitelor de import, a comisioanelor de curierat sau a taxelor
      locale necesare poate duce la întârzierea livrării, returnarea coletului, abandonarea, confiscarea
      sau eliminarea bunurilor.
    </p>
    <p>
      9.7 Dacă un colet ne este returnat deoarece nu ați plătit taxele vamale, nu ați îndeplinit
      cerințele vamale, ați refuzat livrarea sau nu ați cooperat cu curierul sau cu autoritatea vamală,
      putem deduce din orice rambursare costurile de expediere, costurile de returnare, taxele vamale,
      comisioanele de curierat și alte costuri rezonabile, cu excepția cazului în care legea interzice
      acest lucru.
    </p>
    <p>
      9.8 Sunteți responsabil să verificați dacă bunurile pe care le comandați pot fi importate și
      utilizate în mod legal în țara dumneavoastră de destinație.
    </p>

    <h2>10. Restricții de produs și bunuri electrice</h2>
    <p>
      10.1 Unele bunuri electrice pot fi supuse unor cerințe specifice destinației privind importul,
      siguranța, certificarea, tensiunea, ștecărul, etichetarea sau instalarea.
    </p>
    <p>
      10.2 Sunteți responsabil să vă asigurați că orice produs comandat este adecvat pentru import,
      instalare, utilizare, revânzare sau aplicare profesională în țara sau regiunea dumneavoastră.
    </p>
    <p>
      10.3 Înainte de a plasa o comandă, trebuie să verificați toate specificațiile produsului, inclusiv
      tensiunea, curentul, puterea în wați, gradul de protecție IP, dimensiunile, tipul cablului, tipul
      conectorului, codul produsului, mediul de instalare și cerințele de conformitate.
    </p>
    <p>
      10.4 Nu suntem responsabili pentru întârzieri, refuz vamal, instalare eșuată, neconformitate sau
      respingere cauzate de reguli specifice destinației sau de selectarea incorectă a produsului.
    </p>
    <p>
      10.5 Produsele care necesită instalare, cablare, conectare, testare, punere în funcțiune sau
      integrare într-un sistem electric trebuie instalate numai de către un electrician calificat sau un
      profesionist competent, acolo unde acest lucru este necesar sau adecvat.
    </p>

    <h2>11. Expedieri divizate</h2>
    <p>
      11.1 Putem expedia o comandă în mai multe colete sau expedieri separate atunci când acest lucru
      este mai eficient sau necesar din cauza disponibilității produsului, a dimensiunii, a greutății, a
      cerințelor de ambalare, a manipulării în depozit sau a restricțiilor transportatorului.
    </p>
    <p>
      11.2 Dacă comanda dumneavoastră este împărțită în mai multe expedieri, este posibil să primiți
      numere de urmărire separate și date de livrare diferite.
    </p>
    <p>
      11.3 Expedierile divizate nu cresc în mod normal taxa de expediere pe care o datorați, cu excepția
      cazului în care acest lucru este indicat clar înainte de a vă finaliza comanda.
    </p>

    <h2>12. Încercări de livrare și livrări ratate</h2>
    <p>
      12.1 Curierul poate încerca livrarea la adresa furnizată sau poate redirecționa coletul către un
      punct de ridicare, un magazin de colete, un depozit, un dulap de colete (locker) sau un partener
      local de livrare, în funcție de destinație și de regulile curierului.
    </p>
    <p>
      12.2 Sunteți responsabil pentru monitorizarea actualizărilor de urmărire și pentru a răspunde la
      notificările curierului, acolo unde este necesar.
    </p>
    <p>
      12.3 Dacă livrarea este ratată, refuzată sau nereușită, trebuie să urmați instrucțiunile
      curierului pentru a reprograma livrarea sau a ridica coletul în intervalul de timp indicat.
    </p>
    <p>
      12.4 MisaElectro nu este responsabilă pentru livrarea eșuată atunci când nu răspundeți la
      notificările curierului, nu ridicați coletul, refuzați coletul, furnizați o adresă inaccesibilă
      sau nu plătiți taxele vamale ori locale.
    </p>
    <p>
      12.5 Taxe suplimentare de relivrare, depozitare, returnare sau manipulare pot fi deduse din orice
      rambursare sau facturate separat, acolo unde legea permite.
    </p>

    <h2>13. Colete deteriorate și probleme de livrare</h2>
    <p>13.1 Ar trebui să inspectați coletul la livrare, acolo unde este posibil.</p>
    <p>
      13.2 Dacă coletul pare deteriorat vizibil, deschis, ud, strivit, umblat sau incomplet, ar trebui să
      faceți fotografii înainte de a-l deschide și să păstrați toate materialele de ambalare.
    </p>
    <p>
      13.3 Dacă bunurile sosesc deteriorate, lipsă, incomplete sau incorecte, vă rugăm să ne contactați
      cât mai curând posibil la info@misaelectro.ro.
    </p>
    <p>
      13.4 Vă rugăm să includeți numărul comenzii, o descriere a problemei și fotografii sau înregistrări
      video clare ale produsului, ambalajului, etichetei de expediere și oricăror deteriorări vizibile.
    </p>
    <p>
      13.5 Pentru deteriorările de livrare vizibile, vă rugăm să ne notificați în termen de 48 de ore de
      la livrare, acolo unde este posibil. Acest lucru ne ajută să investigăm rapid reclamațiile către
      curier, dar nu vă afectează niciun drept legal obligatoriu pe care îl puteți avea.
    </p>
    <p>
      13.6 Trebuie să păstrați bunurile, ambalajul, etichetele, accesoriile, manualele și materialele de
      livrare până când vom fi analizat problema.
    </p>
    <p>
      13.7 Este posibil să solicităm ca bunurile deteriorate sau incorecte să fie returnate sau
      inspectate înainte de a aproba o înlocuire, o rambursare sau o altă soluție.
    </p>

    <h2>14. Colete pierdute sau întârziate</h2>
    <p>
      14.1 Dacă coletul dumneavoastră nu a sosit în intervalul de livrare estimat, vă rugăm să verificați
      mai întâi informațiile de urmărire și orice notificări ale curierului.
    </p>
    <p>
      14.2 Dacă urmărirea indică o întârziere neobișnuită, o livrare eșuată, o reținere vamală sau nicio
      mișcare pentru o perioadă extinsă, vă rugăm să ne contactați la info@misaelectro.ro.
    </p>
    <p>
      14.3 Este posibil să fie necesar să deschidem o investigație împreună cu curierul înainte de a
      confirma că un colet este pierdut.
    </p>
    <p>
      14.4 Investigațiile curierului pot dura, în special pentru expedierile internaționale, întârzierile
      vamale, destinațiile îndepărtate sau coletele manipulate de mai mulți parteneri de livrare.
    </p>
    <p>
      14.5 Vom lua măsuri rezonabile pentru a vă ajuta, dar nu suntem responsabili pentru întârzierile
      cauzate de procesarea vamală, investigațiile curierului, partenerii locali de livrare, detaliile de
      adresă incorecte, taxele de import neachitate sau evenimentele aflate în afara controlului nostru.
    </p>
    <p>
      14.6 Dacă un colet este confirmat ca pierdut de către curier, iar pierderea nu este cauzată de o
      eroare a clientului, putem oferi o înlocuire, o rambursare sau o altă soluție adecvată.
    </p>

    <h2>15. Livrări refuzate</h2>
    <p>
      15.1 Dacă refuzați livrarea fără un motiv întemeiat, nu acceptați coletul sau nu ridicați coletul
      de la curier, coletul ne poate fi returnat.
    </p>
    <p>
      15.2 Dacă coletul ne este returnat, putem deduce din rambursarea dumneavoastră costul inițial de
      expediere, costul de returnare, comisioanele de curierat, taxele vamale, taxele de depozitare,
      taxele de manipulare și orice alte costuri rezonabile, cu excepția cazului în care legea interzice
      acest lucru.
    </p>
    <p>
      15.3 Dacă sunteți Consumator și refuzați livrarea în cadrul exercitării drepturilor dumneavoastră
      legale de anulare, rambursarea dumneavoastră va fi gestionată în conformitate cu Politica noastră
      privind returnările și rambursările și cu legislația aplicabilă.
    </p>
    <p>
      15.4 Refuzul livrării nu anulează automat taxele vamale, taxele de curierat sau taxele locale care
      pot fi fost deja evaluate.
    </p>

    <h2>16. Comenzi livrate către terți sau adrese de redirecționare</h2>
    <p>
      16.1 Dacă alegeți să vi se livreze o comandă către un expeditor de marfă, un serviciu de
      redirecționare a coletelor, un hotel, un loc de muncă, un șantier de construcții, o adresă a unui
      terț sau un punct de ridicare, livrarea este considerată finalizată în momentul în care
      transportatorul livrează coletul la acea adresă sau destinatarului autorizat.
    </p>
    <p>
      16.2 MisaElectro nu este responsabilă pentru pierdere, deteriorare, întârziere, probleme vamale,
      probleme de expediere ulterioară sau livrare eșuată după ce coletul a fost livrat unui terț, unui
      serviciu de redirecționare, unui punct de ridicare sau unui destinatar autorizat ales de
      dumneavoastră.
    </p>
    <p>
      16.3 Sunteți responsabil să vă asigurați că terțul este autorizat să primească coletul și îl poate
      manipula în siguranță.
    </p>

    <h2>17. Comenzi pentru afaceri și comercianți</h2>
    <p>
      17.1 Clienții de afaceri, clienții comercianți, contractorii, instalatorii și cumpărătorii
      profesioniști sunt responsabili să se asigure că datele de livrare, disponibilitatea produselor,
      cerințele de import și programele de instalare sunt adecvate pentru proiectele lor.
    </p>
    <p>
      17.2 Estimările de livrare nu trebuie tratate ca termene-limită garantate ale proiectului.
    </p>
    <p>
      17.3 MisaElectro nu este responsabilă pentru costurile cu forța de muncă, costurile cu electricianul,
      costurile cu contractorul, costurile de instalare, întârzierea proiectului, întâlnirile ratate,
      timpul de nefuncționare, pierderea de profit, pierderea de contract sau alte pierderi indirecte
      cauzate de întârzierea livrării, întârzierea vamală, problemele de curierat sau indisponibilitatea
      produsului, cu excepția cazurilor în care răspunderea nu poate fi exclusă în mod legal.
    </p>
    <p>
      17.4 Clienții de afaceri nu ar trebui să programeze instalarea, forța de muncă, lucrările pe șantier
      sau termenele-limită ale proiectului până când bunurile nu au fost primite, inspectate și
      confirmate ca fiind corecte și adecvate.
    </p>

    <h2>18. Destinații restricționate și conformitate</h2>
    <p>
      18.1 Putem refuza, anula, suspenda sau bloca orice comandă atunci când livrarea ar încălca sau ar
      putea încălca sancțiuni, controale la export, restricții vamale, regulile procesatorului de plăți,
      restricțiile curierului, cerințele legale sau controalele interne de conformitate.
    </p>
    <p>
      18.2 Putem verifica comenzile, detaliile de facturare, adresele de livrare, clienții, țările,
      regiunile și informațiile de plată în raport cu sancțiunile aplicabile, cerințele privind părțile
      restricționate, prevenirea fraudei și conformitatea.
    </p>
    <p>
      18.3 Nu expediem către destinații în care livrarea este interzisă de legislația aplicabilă,
      sancțiuni, restricțiile transportatorului, restricțiile procesatorului de plăți sau cerințele
      noastre de conformitate.
    </p>
    <p>
      18.4 Încercarea de a eluda controalele privind destinațiile restricționate prin utilizarea unui
      expeditor de marfă, a unei adrese a unui terț, a unei adrese false, a unor informații de facturare
      modificate sau a unor detalii de comandă înșelătoare poate duce la anularea comenzii și la
      restricționarea accesului la Site-ul web.
    </p>
    <p>
      18.5 Nu suntem responsabili pentru pierdere, întârziere, anulare, livrare blocată, confiscare
      vamală sau costuri suplimentare cauzate de sancțiuni, controale la export, restricții vamale,
      restricțiile curierului sau cerințele legale de conformitate.
    </p>

    <h2>19. Evenimente aflate în afara controlului nostru</h2>
    <p>
      19.1 Nu suntem responsabili pentru neexecutarea sau întârzierea livrării cauzată de evenimente
      aflate în afara controlului nostru rezonabil.
    </p>
    <p>
      19.2 Astfel de evenimente pot include condiții meteorologice severe, dezastre naturale, perturbări
      de transport, defecțiuni ale transportatorului, întârzieri vamale, greve, conflicte de muncă,
      sărbători legale, acțiuni guvernamentale, modificări de reglementare, sancțiuni, război, tulburări
      civile, epidemii, pandemii, pene de curent, defecțiuni tehnice, controale de securitate, perturbări
      ale lanțului de aprovizionare sau alte evenimente de forță majoră.
    </p>
    <p>
      19.3 Dacă un astfel de eveniment afectează comanda dumneavoastră, vom lua măsuri rezonabile pentru a
      reduce la minimum perturbările și pentru a furniza actualizări, acolo unde este cazul.
    </p>

    <h2>20. Modificări ale prezentei Politici de livrare</h2>
    <p>
      20.1 Putem actualiza prezenta Politică de livrare din când în când pentru a reflecta modificări ale
      metodelor noastre de livrare, ale partenerilor de curierat, ale regiunilor de livrare, ale
      tarifelor de expediere, ale proceselor vamale, ale practicilor operaționale sau ale cerințelor
      legale.
    </p>
    <p>
      20.2 Versiunea Politicii de livrare în vigoare la momentul plasării comenzii dumneavoastră se va
      aplica acelei comenzi, cu excepția cazului în care o modificare este impusă de lege sau se referă
      la o corectură ce trebuie aplicată.
    </p>

    <h2>21. Informații de contact</h2>
    <p>
      Dacă aveți întrebări cu privire la expediere, statusul livrării, vamă, colete deteriorate, livrări
      ratate sau orice problemă legată de livrare, vă rugăm să ne contactați:
    </p>
    <ContactBlock />
  </PolicyLayout>
);

const hu: ReactNode = (
  <PolicyLayout title="Szállítási szabályzat" lastUpdated="2026. május 29.">
    <p>
      Ez a Szállítási szabályzat ismerteti, hogy a www.misaelectro.ro oldalon leadott rendeléseket
      hogyan dolgozzuk fel, adjuk fel, kézbesítjük, valamint hogyan kezeljük a szállítási problémák
      esetén.
    </p>
    <p>A Weboldalt a következő cég üzemelteti:</p>
    <ContactBlock />
    <p>
      A jelen Szabályzatban a &bdquo;MisaElectro&rdquo;, &bdquo;mi&rdquo;, &bdquo;minket&rdquo; vagy
      &bdquo;a mi&rdquo; kifejezés a MISARELIANA S.R.L. társaságot jelenti. A &bdquo;Vásárló&rdquo;,
      &bdquo;Ön&rdquo; vagy &bdquo;az Ön&rdquo; kifejezés azt a személyt vagy vállalkozást jelenti, aki a
      Weboldalon keresztül rendelést ad le.
    </p>
    <p>
      A jelen Szállítási szabályzatot az Általános szerződési feltételeinkkel, a Visszaküldési és
      visszatérítési szabályzatunkkal, az Adatvédelmi szabályzatunkkal, valamint a pénztárnál megjelenített
      minden további tájékoztatással együtt kell értelmezni.
    </p>

    <h2>1. A jelen Szabályzat hatálya</h2>
    <p>
      1.1 A jelen Szabályzat a MisaElectro oldalon keresztül vásárolt fizikai áruk kézbesítésére
      vonatkozik.
    </p>
    <p>
      1.2 A MisaElectro elektromos termékeket, elektromos anyagokat, vezetékezési tartozékokat,
      világítással kapcsolatos termékeket, szerelési alkatrészeket, elosztási és áramkörvédelmi
      termékeket, dugaljakat, kapcsolókat, kábeleket, rögzítési tartozékokat és egyéb kapcsolódó árukat
      forgalmaz.
    </p>
    <p>
      1.3 A szállítási lehetőségek, a szállítási díjak, a becsült szállítási idők és a támogatott
      célállomások a célországtól, a terméktípustól, a rendelés értékétől, a termék méretétől, súlyától, a
      futárszolgálat elérhetőségétől, a vámkövetelményektől és egyéb működési tényezőktől függően
      változhatnak.
    </p>
    <p>
      1.4 A szállítási becslések nem minősülnek garantált kézbesítési időpontnak, kivéve, ha a MisaElectro
      írásban kifejezetten másként rendelkezik.
    </p>

    <h2>2. A rendelés feldolgozási ideje</h2>
    <p>
      2.1 A rendeléseket jellemzően a sikeres fizetési visszaigazolást követő 1&ndash;2 munkanapon belül
      dolgozzuk fel.
    </p>
    <p>
      2.2 A feldolgozási idő a rendelés ellenőrzéséhez, a fizetés visszaigazolásához, az áruk
      előkészítéséhez, a teljesítési ellenőrzések elvégzéséhez és a csomag futárnak történő átadásához
      szükséges időt jelenti.
    </p>
    <p>
      2.3 A feldolgozási idő hosszabb lehet a csúcsidőszakokban, az akciós időszakokban, munkaszüneti
      napokon, nagy forgalmú időszakokban, beszállítói késedelmek, készletellenőrzések, fizetési
      ellenőrzések, csalásmegelőzési ellenőrzések esetén, vagy amikor a rendelés további ellenőrzése
      szükséges.
    </p>
    <p>
      2.4 A több terméket tartalmazó rendelések a készlet rendelkezésre állásától, a terméktípustól, a
      csomagolási követelményektől és a logisztikai hatékonyságtól függően együtt vagy külön csomagokban
      is feladhatók.
    </p>
    <p>
      2.5 Ha egy tétel nem elérhető, késedelmes, kifutott, hibásan van feltüntetve, vagy nem szállítható,
      felvehetjük Önnel a kapcsolatot, hogy alternatívát ajánljunk, késleltessük a rendelést, részben
      teljesítsük a rendelést, vagy töröljük és visszatérítsük a nem elérhető tételt.
    </p>

    <h2>3. A feladás helye</h2>
    <p>3.1 A MisaElectro az Egyesült Királyságból adja fel a rendeléseket.</p>
    <p>
      3.2 A jelen Szabályzatban feltüntetett szállítási idők a feladás dátumától számítandók, nem a
      rendelés leadásának dátumától.
    </p>
    <p>
      3.3 Miután a rendelését feladtuk, szállítási visszaigazoló e-mailt vagy nyomkövetési információkat
      kaphat, ahol ezek elérhetők.
    </p>
    <p>
      3.4 A nyomkövetés elérhetősége a futárszolgálattól, a célállomástól, a szállítási módtól és az
      igénybe vett szolgáltatástól függ.
    </p>

    <h2>4. Szállítási módok és fuvarozók</h2>
    <p>4.1 A rendelések kézbesítéséhez megbízható futár- és postai partnereket veszünk igénybe.</p>
    <p>
      4.2 Az Egyesült Királyságon belüli rendeléseket a csomag méretétől, a célállomástól, a
      terméktípustól és a működési követelményektől függően a Royal Mail, a DHL vagy más megfelelő belföldi
      fuvarozó kézbesítheti.
    </p>
    <p>
      4.3 A nemzetközi rendeléseket általában a DHL nemzetközi szolgáltatásaival, partnerfuvarozókkal,
      helyi futárokkal vagy a célállomáshoz megfelelő egyéb logisztikai szolgáltatókkal kézbesítjük.
    </p>
    <p>
      4.4 A konkrét fuvarozó automatikusan kiválasztható a szállítási cím, a csomag jellemzői, a
      szolgáltatás elérhetősége és a szállítási hatékonyság alapján.
    </p>
    <p>
      4.5 Fenntartjuk a jogot a fuvarozó vagy a szállítási mód megváltoztatására, amennyiben az a
      kézbesítés biztonságos és hatékony teljesítéséhez szükséges.
    </p>

    <h2>5. Becsült szállítási idők</h2>
    <p>5.1 A feladást követően a becsült szállítási idők általában a következők:</p>
    <table>
      <thead>
        <tr>
          <th>Célállomás</th>
          <th>Becsült szállítási idő a feladástól</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Egyesült Királyság</td><td>1&ndash;3 munkanap</td></tr>
        <tr><td>Európa</td><td>3&ndash;7 munkanap</td></tr>
        <tr><td>Észak-Amerika</td><td>5&ndash;10 munkanap</td></tr>
        <tr><td>Ázsia &amp; Óceánia</td><td>7&ndash;14 munkanap</td></tr>
        <tr><td>Afrika &amp; Dél-Amerika</td><td>8&ndash;15 munkanap</td></tr>
      </tbody>
    </table>
    <p>
      5.2 Ezek a szállítási idők csak becslések, és változhatnak a futárszolgálat kapacitásától, a
      vámkezeléstől, a célországtól, a helyi futár általi kezeléstől, a távoli vagy vidéki kézbesítési
      területektől, a munkaszüneti napoktól, az időjárási körülményektől, a szállítási fennakadásoktól, a
      biztonsági ellenőrzésektől, az importellenőrzésektől és a rajtunk kívül álló egyéb körülményektől
      függően.
    </p>
    <p>
      5.3 A távoli szigetekre, vidéki címekre, katonai címekre, ipari telephelyekre, építkezésekre,
      árutovábbítási (freight forwarding) címekre vagy korlátozott futárelérésű helyekre történő
      kézbesítés hosszabb ideig tarthat.
    </p>
    <p>
      5.4 A MisaElectro nem felelős a vámhatóságok, a helyi postai szolgáltatók, a futárhálózatok, a hibás
      kézbesítési információk, a sikertelen kézbesítési kísérletek, a ki nem fizetett importköltségek vagy
      az ésszerű befolyásunkon kívül eső események által okozott késedelmekért.
    </p>

    <h2>6. Szállítási díjak és ingyenes kézbesítés</h2>
    <p>
      6.1 A szállítási költségeket a pénztárnál számítjuk ki és jelenítjük meg, mielőtt Ön véglegesíti a
      rendelését.
    </p>
    <p>
      6.2 Eltérő rendelkezés hiányában a jogosult rendelések ingyenes kézbesítésre jogosultak, ha a
      termékek részösszege meghaladja a következőt:
    </p>
    <ul>
      <li>&euro;100 az EUR rendelések esetén;</li>
      <li>RON 500 a RON rendelések esetén;</li>
      <li>HUF 40 000 a HUF rendelések esetén.</li>
    </ul>
    <p>
      6.3 Az ingyenes kézbesítés küszöbértékét a termékek részösszege alapján számítjuk, a kedvezmények
      levonása után és bármely vám, import áfa, adók, ügynöki díjak, futárpótdíjak, speciális kezelési
      díjak vagy egyéb helyi költségek előtt.
    </p>
    <p>
      6.4 Az ingyenes kézbesítés nem feltétlenül vonatkozik minden célállomásra, túlméretes árukra, nehéz
      árukra, korlátozott árukra, egyedi rendelésű tételekre, megosztott szállítmányokra, távoli
      kézbesítési területekre vagy speciális kezelést igénylő termékekre.
    </p>
    <p>
      6.5 A szállítási díjak időről időre változhatnak a fuvarozói árazás, az üzemanyag-pótdíjak, a
      célállomás-korlátozások, a logisztikai költségek, a vámkövetelmények vagy a működési változások
      miatt.
    </p>
    <p>
      6.6 Ha egy szállítási díj technikai hiba miatt hibásan jelent meg, a feladás előtt felvehetjük Önnel
      a kapcsolatot a szállítási díj kijavítása érdekében, vagy felajánlhatjuk a rendelés törlését.
    </p>

    <h2>7. Szállítási cím és vásárlói adatok</h2>
    <p>
      7.1 Ön felelős azért, hogy a pénztárnál teljes, pontos és kézbesíthető szállítási címet adjon meg.
    </p>
    <p>
      7.2 A szállítási címnek tartalmaznia kell minden lényeges adatot, beleértve a címzett nevét, adott
      esetben a cég nevét, az utcanevet, az épület számát, a lakás vagy egység számát, az irányítószámot,
      a várost, az országot, a telefonszámot, valamint a kézbesítéshez szükséges minden bejutási
      utasítást.
    </p>
    <p>
      7.3 A MisaElectro nem felelős az Ön által megadott hibás, hiányos, elavult vagy nem megfelelően
      formázott címadatok által okozott késedelmekért, sikertelen kézbesítésekért, elveszett csomagokért,
      visszaküldési díjakért vagy többletköltségekért.
    </p>
    <p>
      7.4 Miután egy rendelést feladtunk, előfordulhat, hogy nem tudjuk módosítani a szállítási címet.
    </p>
    <p>
      7.5 Ha egy csomagot azért küldenek vissza hozzánk, mert a cím hibás, hiányos, hozzáférhetetlen volt,
      elutasították vagy nem vették át, bármely visszatérítésből levonhatjuk az eredeti szállítási
      költséget, a visszaküldési szállítási költséget, a futárdíjakat, a vámdíjakat és egyéb ésszerű
      költségeket, kivéve, ha ezt a jogszabály tiltja.
    </p>

    <h2>8. Nemzetközi szállítás</h2>
    <p>
      8.1 A MisaElectro elfogadhat nemzetközi rendeléseket a Weboldalon vagy a pénztárnál feltüntetett
      támogatott kézbesítési célállomásokra.
    </p>
    <p>
      8.2 A nemzetközi kézbesítés elérhetősége függhet a célországtól, a futárszolgáltatás
      elérhetőségétől, a termékkorlátozásoktól, a vámkövetelményektől, a szankcióktól, az
      exportellenőrzésektől, a fizetésfeldolgozási szabályoktól és a működési korlátoktól.
    </p>
    <p>
      8.3 Nem garantáljuk a kézbesítést minden országba, régióba, szigetre, területre, távoli helyre vagy
      korlátozott célállomásra.
    </p>
    <p>
      8.4 Ha az Ön célállomására történő kézbesítés a rendelés leadását követően nem elérhető, törölhetjük
      a rendelést, és visszatéríthetjük a nem elérhető kézbesítésért fizetett összeget, kivéve, ha a
      tranzakció jogi, csalás elleni, szankciós vagy megfelelőségi felülvizsgálat tárgyát képezi.
    </p>
    <p>
      8.5 A nemzetközi szállítmányokhoz vámáru-nyilatkozatok, kereskedelmi számlák, termékbesorolási
      adatok és egyéb export- vagy importinformációk szükségesek lehetnek.
    </p>

    <h2>9. Vám, importvámok és helyi adók</h2>
    <p>
      9.1 Az Egyesült Királyságon kívülre kézbesített rendelések vámkezelés, importvámok, import áfa,
      adók, ügynöki díjak, kezelési díjak, kifizetési díjak, vámkezelési díjak vagy egyéb helyi költségek
      hatálya alá tartozhatnak.
    </p>
    <p>
      9.2 Eltérő kifejezett rendelkezés hiányában a pénztárnál ezek a költségek a vásárlót terhelik.
    </p>
    <p>
      9.3 A MisaElectro nem befolyásolja a vámhatóságokat, az importadó-megállapításokat, a vámtételeket, a
      vámvizsgálatokat, a futárszolgálat vámeljárásait vagy a helyi hatósági díjakat.
    </p>
    <p>
      9.4 A vámdíjak és importadók nem szerepelnek a termék árában vagy a szállítási árban, kivéve, ha a
      pénztárnál kifejezetten másként rendelkeznek.
    </p>
    <p>
      9.5 A futárszolgálat vagy a vámhatóság közvetlenül felveheti Önnel a kapcsolatot a vámok, adók vagy
      vámkezelési díjak befizetése érdekében, mielőtt a kézbesítés befejeződhet.
    </p>
    <p>
      9.6 A vámdíjak, importadók, futárdíjak vagy szükséges helyi költségek meg nem fizetése a kézbesítés
      késedelméhez, a csomag visszaküldéséhez, elhagyásához, lefoglalásához vagy megsemmisítéséhez
      vezethet.
    </p>
    <p>
      9.7 Ha egy csomagot azért küldenek vissza hozzánk, mert Ön nem fizette meg a vámdíjakat, nem
      teljesítette a vámkövetelményeket, elutasította a kézbesítést, vagy nem működött együtt a
      futárszolgálattal vagy a vámhatósággal, bármely visszatérítésből levonhatjuk a szállítási
      költségeket, a visszaküldési költségeket, a vámdíjakat, a futárdíjakat és egyéb ésszerű költségeket,
      kivéve, ha ezt a jogszabály tiltja.
    </p>
    <p>
      9.8 Ön felelős annak ellenőrzéséért, hogy az Ön által rendelt áruk jogszerűen importálhatók-e és
      használhatók-e az Ön célországában.
    </p>

    <h2>10. Termékkorlátozások és elektromos áruk</h2>
    <p>
      10.1 Egyes elektromos áruk a célállomásra jellemző import-, biztonsági, tanúsítási, feszültségi,
      dugós, címkézési vagy szerelési követelmények hatálya alá tartozhatnak.
    </p>
    <p>
      10.2 Ön felelős annak biztosításáért, hogy bármely megrendelt termék alkalmas legyen az Ön országában
      vagy régiójában történő importra, szerelésre, használatra, továbbértékesítésre vagy szakmai
      alkalmazásra.
    </p>
    <p>
      10.3 A rendelés leadása előtt ellenőriznie kell a termék összes műszaki jellemzőjét, beleértve a
      feszültséget, az áramerősséget, a wattteljesítményt, az IP-védettséget, a méreteket, a kábeltípust,
      a csatlakozótípust, a termékkódot, a szerelési környezetet és a megfelelőségi követelményeket.
    </p>
    <p>
      10.4 Nem vagyunk felelősek a célállomásra jellemző szabályok vagy a hibás termékválasztás által
      okozott késedelmekért, vámelutasításért, sikertelen szerelésért, meg nem felelésért vagy
      elutasításért.
    </p>
    <p>
      10.5 A szerelést, vezetékezést, csatlakoztatást, tesztelést, üzembe helyezést vagy elektromos
      rendszerbe történő integrálást igénylő termékeket csak képzett villanyszerelő vagy hozzáértő
      szakember szerelheti be, ahol ez szükséges vagy indokolt.
    </p>

    <h2>11. Megosztott szállítmányok</h2>
    <p>
      11.1 Egy rendelést több csomagban vagy külön szállítmányban is feladhatunk, ha ez hatékonyabb vagy
      szükséges a termék elérhetősége, mérete, súlya, csomagolási követelményei, raktári kezelése vagy a
      fuvarozói korlátozások miatt.
    </p>
    <p>
      11.2 Ha a rendelését több szállítmányra osztjuk, külön nyomkövetési számokat és eltérő kézbesítési
      időpontokat kaphat.
    </p>
    <p>
      11.3 A megosztott szállítmányok általában nem növelik az Ön által fizetendő szállítási díjat, kivéve,
      ha ezt a rendelés véglegesítése előtt egyértelműen feltüntetjük.
    </p>

    <h2>12. Kézbesítési kísérletek és elmulasztott kézbesítések</h2>
    <p>
      12.1 A futár megkísérelheti a kézbesítést a megadott címen, vagy a célállomástól és a futár
      szabályaitól függően átirányíthatja a csomagot egy átvételi pontra, csomagpontra, depóba,
      csomagautomatába vagy helyi kézbesítési partnerhez.
    </p>
    <p>
      12.2 Ön felelős a nyomkövetési frissítések figyeléséért és a futár értesítéseire való válaszadásért,
      ahol ez szükséges.
    </p>
    <p>
      12.3 Ha a kézbesítés elmarad, elutasításra kerül vagy sikertelen, a megadott határidőn belül követnie
      kell a futár utasításait a kézbesítés újraegyeztetéséhez vagy a csomag átvételéhez.
    </p>
    <p>
      12.4 A MisaElectro nem felelős a sikertelen kézbesítésért, ha Ön nem válaszol a futár értesítéseire,
      nem veszi át a csomagot, elutasítja a csomagot, hozzáférhetetlen címet ad meg, vagy nem fizeti meg a
      vám- vagy helyi költségeket.
    </p>
    <p>
      12.5 A további újrakézbesítési, tárolási, visszaküldési vagy kezelési díjak levonhatók bármely
      visszatérítésből, vagy külön felszámíthatók, ahol a jogszabály ezt megengedi.
    </p>

    <h2>13. Sérült csomagok és kézbesítési problémák</h2>
    <p>13.1 A kézbesítéskor lehetőség szerint ellenőriznie kell a csomagot.</p>
    <p>
      13.2 Ha a csomag láthatóan sérültnek, felnyitottnak, nedvesnek, összenyomottnak, megbontottnak vagy
      hiányosnak tűnik, kinyitása előtt fényképeket kell készítenie, és meg kell őriznie az összes
      csomagolóanyagot.
    </p>
    <p>
      13.3 Ha az áruk sérülten, hiányosan, hiánnyal vagy hibásan érkeznek, kérjük, mielőbb vegye fel velünk
      a kapcsolatot az info@misaelectro.ro címen.
    </p>
    <p>
      13.4 Kérjük, tüntesse fel a rendelésszámát, a probléma leírását, valamint a termékről, a
      csomagolásról, a szállítási címkéről és a látható sérülésekről készült tiszta fényképeket vagy
      videókat.
    </p>
    <p>
      13.5 Látható kézbesítési sérülés esetén kérjük, lehetőség szerint a kézbesítéstől számított 48 órán
      belül értesítsen minket. Ez segít nekünk gyorsan kivizsgálni a futár felé irányuló igényeket, de nem
      érinti az Önt esetlegesen megillető kötelező jogszabályi jogokat.
    </p>
    <p>
      13.6 Meg kell őriznie az árukat, a csomagolást, a címkéket, a tartozékokat, a kézikönyveket és a
      kézbesítési anyagokat, amíg meg nem vizsgáltuk a problémát.
    </p>
    <p>
      13.7 Előfordulhat, hogy a sérült vagy hibás áruk visszaküldését vagy megvizsgálását kérjük, mielőtt
      jóváhagynánk a cserét, a visszatérítést vagy más jogorvoslatot.
    </p>

    <h2>14. Elveszett vagy késedelmes csomagok</h2>
    <p>
      14.1 Ha a csomagja nem érkezett meg a becsült kézbesítési időn belül, kérjük, először ellenőrizze a
      nyomkövetési információkat és a futár esetleges értesítéseit.
    </p>
    <p>
      14.2 Ha a nyomkövetés szokatlan késedelmet, sikertelen kézbesítést, vámvisszatartást vagy hosszabb
      ideig tartó mozdulatlanságot mutat, kérjük, vegye fel velünk a kapcsolatot az info@misaelectro.ro
      címen.
    </p>
    <p>
      14.3 Előfordulhat, hogy vizsgálatot kell indítanunk a futárnál, mielőtt megerősítenénk, hogy egy
      csomag elveszett.
    </p>
    <p>
      14.4 A futárvizsgálatok időt vehetnek igénybe, különösen nemzetközi szállítmányok, vámkésedelmek,
      távoli célállomások vagy több kézbesítési partner által kezelt csomagok esetén.
    </p>
    <p>
      14.5 Ésszerű lépéseket teszünk az Ön megsegítése érdekében, de nem vagyunk felelősek a vámkezelés, a
      futárvizsgálatok, a helyi kézbesítési partnerek, a hibás címadatok, a ki nem fizetett
      importköltségek vagy a befolyásunkon kívül eső események által okozott késedelmekért.
    </p>
    <p>
      14.6 Ha a futár megerősíti, hogy egy csomag elveszett, és a veszteséget nem vásárlói hiba okozta,
      cserét, visszatérítést vagy más megfelelő jogorvoslatot ajánlhatunk fel.
    </p>

    <h2>15. Elutasított kézbesítések</h2>
    <p>
      15.1 Ha érvényes ok nélkül elutasítja a kézbesítést, nem veszi át a csomagot, vagy nem veszi át a
      csomagot a futártól, a csomagot visszaküldhetik hozzánk.
    </p>
    <p>
      15.2 Ha a csomagot visszaküldik hozzánk, a visszatérítéséből levonhatjuk az eredeti szállítási
      költséget, a visszaküldési szállítási költséget, a futárdíjakat, a vámdíjakat, a tárolási díjakat, a
      kezelési díjakat és bármely egyéb ésszerű költséget, kivéve, ha ezt a jogszabály tiltja.
    </p>
    <p>
      15.3 Ha Ön Fogyasztó, és a törvényes elállási jogának gyakorlása keretében utasítja el a kézbesítést,
      a visszatérítését a Visszaküldési és visszatérítési szabályzatunkkal és az alkalmazandó
      jogszabályokkal összhangban kezeljük.
    </p>
    <p>
      15.4 A kézbesítés elutasítása nem törli automatikusan az esetlegesen már megállapított vámdíjakat,
      futárdíjakat vagy helyi díjakat.
    </p>

    <h2>16. Harmadik feleknek vagy továbbítási címekre kézbesített rendelések</h2>
    <p>
      16.1 Ha úgy dönt, hogy egy rendelést árutovábbítónak, csomagtovábbítási szolgáltatásnak, szállodának,
      munkahelynek, építkezésnek, harmadik fél címére vagy átvételi pontra kézbesítenek, a kézbesítés
      akkor tekintendő befejezettnek, amikor a fuvarozó a csomagot arra a címre vagy a felhatalmazott
      címzettnek kézbesíti.
    </p>
    <p>
      16.2 A MisaElectro nem felelős a veszteségért, sérülésért, késedelemért, vámproblémákért, a további
      szállítási problémákért vagy a sikertelen kézbesítésért, miután a csomagot az Ön által választott
      harmadik félnek, továbbítási szolgáltatásnak, átvételi pontnak vagy felhatalmazott címzettnek
      kézbesítették.
    </p>
    <p>
      16.3 Ön felelős annak biztosításáért, hogy a harmadik fél jogosult legyen a csomag átvételére, és azt
      biztonságosan tudja kezelni.
    </p>

    <h2>17. Üzleti és kereskedelmi rendelések</h2>
    <p>
      17.1 Az üzleti vásárlók, a kereskedelmi vásárlók, a vállalkozók, a szerelők és a szakmai vásárlók
      felelősek annak biztosításáért, hogy a kézbesítési időpontok, a termékek elérhetősége, az
      importkövetelmények és a szerelési ütemtervek megfeleljenek a projektjeiknek.
    </p>
    <p>
      17.2 A szállítási becsléseket nem szabad garantált projekthatáridőként kezelni.
    </p>
    <p>
      17.3 A MisaElectro nem felelős a munkaerőköltségekért, a villanyszerelő költségeiért, a vállalkozói
      költségekért, a szerelési költségekért, a projektkésedelemért, az elmulasztott időpontokért, az
      állásidőért, az elmaradt haszonért, a szerződés elvesztéséért vagy a szállítási késedelem, a
      vámkésedelem, a futárprobléma vagy a termék elérhetetlensége által okozott egyéb közvetett
      veszteségekért, kivéve, ha a felelősség jogszerűen nem zárható ki.
    </p>
    <p>
      17.4 Az üzleti vásárlók nem ütemezhetik be a szerelést, a munkaerőt, a helyszíni munkálatokat vagy a
      projekthatáridőket addig, amíg az árukat át nem vették, meg nem vizsgálták, és helyesnek és
      megfelelőnek nem igazolták.
    </p>

    <h2>18. Korlátozott célállomások és megfelelőség</h2>
    <p>
      18.1 Bármely rendelést elutasíthatunk, törölhetünk, felfüggeszthetünk vagy letilthatunk, ha a
      kézbesítés szankciókat, exportellenőrzéseket, vámkorlátozásokat, a fizetésfeldolgozó szabályait,
      futárkorlátozásokat, jogszabályi követelményeket vagy belső megfelelőségi ellenőrzéseket sértene
      vagy sérthetne.
    </p>
    <p>
      18.2 A rendeléseket, a számlázási adatokat, a szállítási címeket, a vásárlókat, az országokat, a
      régiókat és a fizetési információkat ellenőrizhetjük az alkalmazandó szankciók, a korlátozott felek,
      a csalásmegelőzés és a megfelelőség követelményei alapján.
    </p>
    <p>
      18.3 Nem szállítunk olyan célállomásokra, ahol a kézbesítést az alkalmazandó jogszabály, szankciók, a
      fuvarozói korlátozások, a fizetésfeldolgozói korlátozások vagy a megfelelőségi követelményeink
      tiltják.
    </p>
    <p>
      18.4 A korlátozott célállomásokra vonatkozó ellenőrzések megkerülésének kísérlete árutovábbító,
      harmadik fél címe, hamis cím, módosított számlázási adatok vagy félrevezető rendelési adatok
      használatával a rendelés törlését és a Weboldalhoz való hozzáférés korlátozását vonhatja maga után.
    </p>
    <p>
      18.5 Nem vagyunk felelősek a szankciók, exportellenőrzések, vámkorlátozások, futárkorlátozások vagy
      jogszabályi megfelelőségi követelmények által okozott veszteségért, késedelemért, törlésért,
      letiltott kézbesítésért, vámlefoglalásért vagy többletköltségekért.
    </p>

    <h2>19. A befolyásunkon kívül eső események</h2>
    <p>
      19.1 Nem vagyunk felelősek a kézbesítés ésszerű befolyásunkon kívül eső események által okozott
      meghiúsulásáért vagy késedelméért.
    </p>
    <p>
      19.2 Ilyen események közé tartozhatnak a szélsőséges időjárás, a természeti katasztrófák, a
      szállítási fennakadások, a fuvarozói hibák, a vámkésedelmek, a sztrájkok, a munkaügyi viták, a
      munkaszüneti napok, a kormányzati intézkedések, a szabályozási változások, a szankciók, a háború, a
      polgári zavargások, a járvány, a világjárvány, az áramkimaradás, a műszaki hiba, a biztonsági
      ellenőrzések, az ellátási lánc fennakadása vagy egyéb vis maior események.
    </p>
    <p>
      19.3 Ha egy ilyen esemény érinti a rendelését, ésszerű lépéseket teszünk a fennakadás minimalizálása
      érdekében, és adott esetben tájékoztatást nyújtunk.
    </p>

    <h2>20. A jelen Szállítási szabályzat módosításai</h2>
    <p>
      20.1 A jelen Szállítási szabályzatot időről időre frissíthetjük, hogy tükrözze a kézbesítési
      módszereink, a futárpartnereink, a kézbesítési régióink, a szállítási díjaink, a vámeljárásaink, a
      működési gyakorlataink vagy a jogszabályi követelmények változásait.
    </p>
    <p>
      20.2 A rendelés leadásának időpontjában hatályos Szállítási szabályzat változata vonatkozik az adott
      rendelésre, kivéve, ha a módosítást jogszabály írja elő, vagy az egy alkalmazandó javításra
      vonatkozik.
    </p>

    <h2>21. Kapcsolattartási információk</h2>
    <p>
      Ha bármilyen kérdése van a szállítással, a kézbesítés állapotával, a vámmal, a sérült csomagokkal, az
      elmulasztott kézbesítéssel vagy bármely szállítással kapcsolatos kérdéssel, kérjük, vegye fel velünk
      a kapcsolatot:
    </p>
    <ContactBlock />
  </PolicyLayout>
);

const bg: ReactNode = (
  <PolicyLayout title="Политика за доставка" lastUpdated="29 май 2026 г.">
    <p>
      Тази Политика за доставка обяснява как поръчките, направени чрез www.misaelectro.ro, се обработват,
      изпращат, доставят и как се процедира в случай на проблеми с доставката.
    </p>
    <p>Уебсайтът се управлява от:</p>
    <ContactBlock />
    <p>
      В настоящата Политика „MisaElectro“, „ние“, „нас“ или „наш“ означава MISARELIANA S.R.L.. „Клиент“,
      „Вие“ или „Ваш“ означава лицето или предприятието, което прави поръчка чрез Уебсайта.
    </p>
    <p>
      Тази Политика за доставка следва да се разглежда заедно с нашите Общи условия, Политиката за
      връщане и възстановяване на суми, Политиката за поверителност и всяка допълнителна информация,
      показана при плащане.
    </p>

    <h2>1. Обхват на настоящата Политика</h2>
    <p>
      1.1 Настоящата Политика се прилага за доставката на физически стоки, закупени чрез MisaElectro.
    </p>
    <p>
      1.2 MisaElectro доставя електрически продукти, електрически материали, аксесоари за окабеляване,
      продукти, свързани с осветлението, монтажни компоненти, продукти за разпределение и защита на
      веригите, контакти, ключове, кабели, монтажни аксесоари и други свързани стоки.
    </p>
    <p>
      1.3 Опциите за доставка, тарифите за изпращане, прогнозните срокове за доставка и поддържаните
      дестинации могат да варират в зависимост от държавата на местоназначение, вида на продукта,
      стойността на поръчката, размера на продукта, теглото, наличността на куриера, митническите
      изисквания и други оперативни фактори.
    </p>
    <p>
      1.4 Прогнозите за доставка не са гарантирани дати на доставка, освен ако MisaElectro изрично не
      посочи друго в писмен вид.
    </p>

    <h2>2. Време за обработка на поръчката</h2>
    <p>
      2.1 Поръчките обикновено се обработват в рамките на 1&ndash;2 работни дни след успешно потвърждение
      на плащането.
    </p>
    <p>
      2.2 Времето за обработка означава времето, необходимо за преглед на поръчката, потвърждаване на
      плащането, подготовка на стоките, извършване на проверки по изпълнението и предаване на пратката на
      превозвача.
    </p>
    <p>
      2.3 Времето за обработка може да бъде по-дълго през пиковите сезони, промоционалните периоди,
      официалните празници, периодите с голям обем, при забавяния от доставчици, проверки на наличности,
      проверки на плащания, проверки за предотвратяване на измами или когато е необходима допълнителна
      проверка на поръчката.
    </p>
    <p>
      2.4 Поръчките, съдържащи няколко продукта, могат да бъдат изпратени заедно или в отделни пратки в
      зависимост от наличността на стоката, вида на продукта, изискванията за опаковане и логистичната
      ефективност.
    </p>
    <p>
      2.5 Ако даден артикул е наличен, забавен, спрян от производство, посочен неправилно или не може да
      бъде доставен, можем да се свържем с Вас, за да предложим алтернатива, да забавим поръчката, да
      изпълним частично поръчката или да анулираме и възстановим сумата за неналичния артикул.
    </p>

    <h2>3. Място на изпращане</h2>
    <p>3.1 MisaElectro изпраща поръчките от Обединеното кралство.</p>
    <p>
      3.2 Сроковете за доставка, посочени в настоящата Политика, се изчисляват от датата на изпращане, а
      не от датата на подаване на поръчката.
    </p>
    <p>
      3.3 След като поръчката Ви бъде изпратена, можете да получите имейл за потвърждение на изпращането
      или информация за проследяване, когато е налична.
    </p>
    <p>
      3.4 Наличието на проследяване зависи от куриера, дестинацията, метода на доставка и използваната
      услуга.
    </p>

    <h2>4. Методи за доставка и превозвачи</h2>
    <p>4.1 За доставка на поръчките използваме надеждни куриерски и пощенски партньори.</p>
    <p>
      4.2 Вътрешните поръчки в Обединеното кралство могат да бъдат доставяни от Royal Mail, DHL или друг
      подходящ вътрешен превозвач в зависимост от размера на пратката, дестинацията, вида на продукта и
      оперативните изисквания.
    </p>
    <p>
      4.3 Международните поръчки обикновено се доставят чрез международните услуги на DHL, партньорски
      превозвачи, местни куриери или други логистични доставчици, подходящи за дестинацията.
    </p>
    <p>
      4.4 Конкретният превозвач може да бъде избран автоматично въз основа на адреса за доставка,
      характеристиките на пратката, наличието на услугата и ефективността на изпращането.
    </p>
    <p>
      4.5 Запазваме си правото да променим превозвача или метода на доставка, когато е необходимо, за да
      завършим доставката безопасно и ефективно.
    </p>

    <h2>5. Прогнозни срокове за доставка</h2>
    <p>5.1 След изпращане прогнозните срокове за доставка обикновено са следните:</p>
    <table>
      <thead>
        <tr>
          <th>Дестинация</th>
          <th>Прогнозен срок за доставка от изпращането</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Обединено кралство</td><td>1&ndash;3 работни дни</td></tr>
        <tr><td>Европа</td><td>3&ndash;7 работни дни</td></tr>
        <tr><td>Северна Америка</td><td>5&ndash;10 работни дни</td></tr>
        <tr><td>Азия &amp; Океания</td><td>7&ndash;14 работни дни</td></tr>
        <tr><td>Африка &amp; Южна Америка</td><td>8&ndash;15 работни дни</td></tr>
      </tbody>
    </table>
    <p>
      5.2 Тези срокове за доставка са само прогнозни и могат да варират в зависимост от капацитета на
      куриера, митническата обработка, държавата на местоназначение, обработката от местния куриер,
      отдалечените или селските райони на доставка, официалните празници, метеорологичните условия,
      смущенията в транспорта, проверките за сигурност, контрола върху вноса и други обстоятелства извън
      нашия контрол.
    </p>
    <p>
      5.3 Доставките до отдалечени острови, селски адреси, военни адреси, промишлени обекти, строителни
      обекти, адреси за препращане на товари (freight forwarding) или местоположения с ограничен достъп
      на куриера могат да отнемат повече време.
    </p>
    <p>
      5.4 MisaElectro не носи отговорност за забавяния, причинени от митническите органи, местните пощенски
      оператори, куриерските мрежи, неправилна информация за доставка, неуспешни опити за доставка,
      неплатени вносни такси или събития извън нашия разумен контрол.
    </p>

    <h2>6. Тарифи за изпращане и безплатна доставка</h2>
    <p>
      6.1 Разходите за изпращане се изчисляват и показват при плащане, преди да завършите поръчката си.
    </p>
    <p>
      6.2 Освен ако не е посочено друго, отговарящите на условията поръчки получават безплатна доставка,
      когато междинната сума на продуктите надвишава:
    </p>
    <ul>
      <li>&euro;100 за поръчки в EUR;</li>
      <li>RON 500 за поръчки в RON;</li>
      <li>HUF 40 000 за поръчки в HUF.</li>
    </ul>
    <p>
      6.3 Прагът за безплатна доставка се изчислява въз основа на междинната сума на продуктите след
      отстъпки и преди всякакви мита, ДДС при внос, данъци, брокерски такси, куриерски надбавки, специални
      такси за обработка или други местни такси.
    </p>
    <p>
      6.4 Безплатната доставка може да не се прилага за всички дестинации, извънгабаритни стоки, тежки
      стоки, ограничени стоки, артикули по специална поръчка, разделени пратки, отдалечени райони на
      доставка или продукти, изискващи специална обработка.
    </p>
    <p>
      6.5 Тарифите за изпращане могат да се променят от време на време поради ценообразуването на
      превозвачите, надбавките за гориво, ограниченията за дестинация, логистичните разходи, митническите
      изисквания или оперативни промени.
    </p>
    <p>
      6.6 Ако тарифа за изпращане е показана неправилно поради техническа грешка, можем да се свържем с
      Вас преди изпращането, за да коригираме таксата за изпращане или да предложим анулиране на
      поръчката.
    </p>

    <h2>7. Адрес за доставка и данни на клиента</h2>
    <p>
      7.1 Вие носите отговорност за предоставянето на пълен, точен и годен за доставка адрес за доставка
      при плащане.
    </p>
    <p>
      7.2 Адресът за доставка следва да включва всички релевантни данни, включително името на получателя,
      името на дружеството, когато е приложимо, адреса на улицата, номера на сградата, номера на
      апартамента или обекта, пощенския код, града, държавата, телефонния номер и всякакви указания за
      достъп, необходими за доставката.
    </p>
    <p>
      7.3 MisaElectro не носи отговорност за забавяния, неуспешни доставки, изгубени пратки, такси за
      връщане или допълнителни разходи, причинени от неправилна, непълна, остаряла или неправилно
      форматирана адресна информация, предоставена от Вас.
    </p>
    <p>
      7.4 След като поръчката бъде изпратена, е възможно да не можем да променим адреса за доставка.
    </p>
    <p>
      7.5 Ако пратка бъде върната при нас, защото адресът е бил неправилен, непълен, недостъпен, отказан
      или невзет, можем да приспаднем от всяко възстановяване на сума първоначалната цена за изпращане,
      цената за връщане, куриерските такси, митническите такси и други разумни разходи, освен ако това не
      е забранено от закона.
    </p>

    <h2>8. Международна доставка</h2>
    <p>
      8.1 MisaElectro може да приема международни поръчки до поддържаните дестинации за доставка, показани на
      Уебсайта или при плащане.
    </p>
    <p>
      8.2 Наличието на международна доставка може да зависи от държавата на местоназначение, наличието на
      куриерска услуга, продуктовите ограничения, митническите изисквания, санкциите, контрола върху
      износа, правилата за обработка на плащания и оперативните ограничения.
    </p>
    <p>
      8.3 Ние не гарантираме доставка до всяка държава, регион, остров, територия, отдалечено
      местоположение или ограничена дестинация.
    </p>
    <p>
      8.4 Ако доставката до Вашата дестинация е недостъпна след подаване на поръчката, можем да анулираме
      поръчката и да възстановим платената сума за недостъпната доставка, освен ако транзакцията не
      подлежи на правна проверка, проверка за измами, санкции или проверка за съответствие.
    </p>
    <p>
      8.5 Международните пратки може да изискват митнически декларации, търговски фактури, данни за
      класификация на продуктите и друга информация за износ или внос.
    </p>

    <h2>9. Мита, вносни такси и местни данъци</h2>
    <p>
      9.1 Поръчките, доставяни извън Обединеното кралство, могат да подлежат на митническо оформяне,
      вносни мита, ДДС при внос, данъци, брокерски такси, такси за обработка, такси за плащане от името
      на клиента, такси за митническо оформяне или други местни такси.
    </p>
    <p>
      9.2 Освен ако изрично не е посочено друго при плащане, тези такси са отговорност на клиента.
    </p>
    <p>
      9.3 MisaElectro не контролира митническите органи, оценките на вносните данъци, ставките на митата,
      митническите проверки, митническите процедури на куриера или местните държавни такси.
    </p>
    <p>
      9.4 Митническите такси и вносните данъци не са включени в цената на продукта или в цената за
      изпращане, освен ако изрично не е посочено друго при плащане.
    </p>
    <p>
      9.5 Куриерът или митническият орган може да се свърже директно с Вас, за да събере плащане на мита,
      данъци или такси за оформяне, преди доставката да може да бъде завършена.
    </p>
    <p>
      9.6 Неплащането на митнически такси, вносни данъци, куриерски такси или изискуеми местни такси може
      да доведе до забавяне на доставката, връщане на пратката, изоставяне, изземване или унищожаване на
      стоките.
    </p>
    <p>
      9.7 Ако пратка бъде върната при нас, защото не сте платили митническите такси, не сте изпълнили
      митническите изисквания, сте отказали доставката или не сте оказали съдействие на куриера или
      митническия орган, можем да приспаднем от всяко възстановяване на сума разходите за изпращане,
      разходите за връщане, митническите такси, куриерските такси и други разумни разходи, освен ако това
      не е забранено от закона.
    </p>
    <p>
      9.8 Вие носите отговорност да проверите дали стоките, които поръчвате, могат законно да бъдат
      внесени и използвани във Вашата държава на местоназначение.
    </p>

    <h2>10. Продуктови ограничения и електрически стоки</h2>
    <p>
      10.1 Някои електрически стоки могат да подлежат на специфични за дестинацията изисквания за внос,
      безопасност, сертифициране, напрежение, щепсел, етикетиране или монтаж.
    </p>
    <p>
      10.2 Вие носите отговорност да гарантирате, че всеки поръчан продукт е подходящ за внос, монтаж,
      употреба, препродажба или професионално приложение във Вашата държава или регион.
    </p>
    <p>
      10.3 Преди да направите поръчка, следва да проверите всички спецификации на продукта, включително
      напрежение, ток, мощност във ватове, степен на защита IP, размери, вид на кабела, вид на конектора,
      код на продукта, среда на монтаж и изисквания за съответствие.
    </p>
    <p>
      10.4 Ние не носим отговорност за забавяния, митнически отказ, неуспешен монтаж, несъответствие или
      отхвърляне, причинени от специфични за дестинацията правила или неправилен избор на продукт.
    </p>
    <p>
      10.5 Продуктите, изискващи монтаж, окабеляване, свързване, изпитване, въвеждане в експлоатация или
      интегриране в електрическа система, следва да се монтират само от квалифициран електротехник или
      компетентен специалист, когато това се изисква или е целесъобразно.
    </p>

    <h2>11. Разделени пратки</h2>
    <p>
      11.1 Можем да изпратим поръчка в няколко пратки или отделни пратки, когато това е по-ефективно или
      необходимо поради наличността на продукта, размера, теглото, изискванията за опаковане, обработката
      в склада или ограниченията на превозвача.
    </p>
    <p>
      11.2 Ако поръчката Ви е разделена на няколко пратки, можете да получите отделни номера за
      проследяване и различни дати на доставка.
    </p>
    <p>
      11.3 Разделените пратки обикновено не увеличават таксата за изпращане, дължима от Вас, освен ако
      това не е ясно посочено, преди да завършите поръчката.
    </p>

    <h2>12. Опити за доставка и пропуснати доставки</h2>
    <p>
      12.1 Куриерът може да опита доставка на предоставения адрес или да пренасочи пратката към пункт за
      получаване, магазин за пратки, депо, автомат за пратки или местен партньор за доставка в зависимост
      от дестинацията и правилата на куриера.
    </p>
    <p>
      12.2 Вие носите отговорност за проследяване на актуализациите за проследяване и за отговор на
      известията на куриера, когато е необходимо.
    </p>
    <p>
      12.3 Ако доставката е пропусната, отказана или неуспешна, трябва да следвате указанията на куриера,
      за да пренасрочите доставката или да получите пратката в посочения срок.
    </p>
    <p>
      12.4 MisaElectro не носи отговорност за неуспешна доставка, когато не отговаряте на известията на
      куриера, не получите пратката, откажете пратката, предоставите недостъпен адрес или не заплатите
      митническите или местните такси.
    </p>
    <p>
      12.5 Допълнителни такси за повторна доставка, съхранение, връщане или обработка могат да бъдат
      приспаднати от всяко възстановяване на сума или начислени отделно, когато това е разрешено от
      закона.
    </p>

    <h2>13. Повредени пратки и проблеми с доставката</h2>
    <p>13.1 При доставка следва да прегледате пратката, когато това е възможно.</p>
    <p>
      13.2 Ако пратката изглежда видимо повредена, отворена, мокра, смачкана, подправена или непълна,
      следва да направите снимки, преди да я отворите, и да запазите всички опаковъчни материали.
    </p>
    <p>
      13.3 Ако стоките пристигнат повредени, липсващи, непълни или неправилни, моля, свържете се с нас
      възможно най-скоро на info@misaelectro.ro.
    </p>
    <p>
      13.4 Моля, посочете номера на поръчката си, описание на проблема и ясни снимки или видеоклипове на
      продукта, опаковката, транспортния етикет и всяка видима повреда.
    </p>
    <p>
      13.5 За видима повреда при доставка, моля, уведомете ни в рамките на 48 часа от доставката, когато
      това е възможно. Това ни помага бързо да проучим претенциите към куриера, но не отменя никакви
      задължителни законови права, които може да имате.
    </p>
    <p>
      13.6 Трябва да запазите стоките, опаковката, етикетите, аксесоарите, ръководствата и материалите за
      доставка, докато не прегледаме проблема.
    </p>
    <p>
      13.7 Може да изискаме повредените или неправилните стоки да бъдат върнати или проверени, преди да
      одобрим замяна, възстановяване на сума или друго обезщетение.
    </p>

    <h2>14. Изгубени или забавени пратки</h2>
    <p>
      14.1 Ако пратката Ви не е пристигнала в рамките на прогнозния срок за доставка, моля, първо
      проверете информацията за проследяване и всички известия на куриера.
    </p>
    <p>
      14.2 Ако проследяването показва необичайно забавяне, неуспешна доставка, задържане от митницата или
      липса на движение за продължителен период, моля, свържете се с нас на info@misaelectro.ro.
    </p>
    <p>
      14.3 Може да се наложи да започнем разследване с куриера, преди да потвърдим, че дадена пратка е
      изгубена.
    </p>
    <p>
      14.4 Разследванията на куриера могат да отнемат време, особено при международни пратки, митнически
      забавяния, отдалечени дестинации или пратки, обработвани от няколко партньора за доставка.
    </p>
    <p>
      14.5 Ще предприемем разумни стъпки, за да Ви помогнем, но не носим отговорност за забавяния,
      причинени от митническата обработка, разследванията на куриера, местните партньори за доставка,
      неправилни адресни данни, неплатени вносни такси или събития извън нашия контрол.
    </p>
    <p>
      14.6 Ако пратка бъде потвърдена като изгубена от куриера и загубата не е причинена от грешка на
      клиента, можем да предложим замяна, възстановяване на сума или друго подходящо обезщетение.
    </p>

    <h2>15. Отказани доставки</h2>
    <p>
      15.1 Ако откажете доставка без основателна причина, не приемете пратката или не получите пратката от
      куриера, пратката може да бъде върната при нас.
    </p>
    <p>
      15.2 Ако пратката бъде върната при нас, можем да приспаднем от Вашето възстановяване на сума
      първоначалната цена за изпращане, цената за връщане, куриерските такси, митническите такси, таксите
      за съхранение, таксите за обработка и всякакви други разумни разходи, освен ако това не е забранено
      от закона.
    </p>
    <p>
      15.3 Ако сте Потребител и откажете доставка като част от упражняването на законовите си права на
      отказ, Вашето възстановяване на сума ще бъде обработено в съответствие с нашата Политика за връщане
      и възстановяване на суми и приложимото право.
    </p>
    <p>
      15.4 Отказът на доставка не отменя автоматично митническите такси, куриерските такси или местните
      такси, които може вече да са били начислени.
    </p>

    <h2>16. Поръчки, доставяни до трети страни или адреси за препращане</h2>
    <p>
      16.1 Ако изберете поръчка да бъде доставена до спедитор, услуга за препращане на пратки, хотел,
      работно място, строителен обект, адрес на трета страна или пункт за получаване, доставката се счита
      за завършена, когато превозвачът достави пратката на този адрес или на упълномощения получател.
    </p>
    <p>
      16.2 MisaElectro не носи отговорност за загуба, повреда, забавяне, митнически проблеми, проблеми с
      последващото изпращане или неуспешна доставка, след като пратката е доставена на трета страна,
      услуга за препращане, пункт за получаване или упълномощен получател, избрани от Вас.
    </p>
    <p>
      16.3 Вие носите отговорност да гарантирате, че третата страна е упълномощена да получи пратката и
      може да я обработи безопасно.
    </p>

    <h2>17. Бизнес и търговски поръчки</h2>
    <p>
      17.1 Бизнес клиентите, търговските клиенти, изпълнителите, монтажниците и професионалните купувачи
      носят отговорност да гарантират, че датите на доставка, наличността на продуктите, изискванията за
      внос и графиците за монтаж са подходящи за техните проекти.
    </p>
    <p>
      17.2 Прогнозите за доставка не следва да се третират като гарантирани крайни срокове на проекта.
    </p>
    <p>
      17.3 MisaElectro не носи отговорност за разходи за труд, разходи за електротехник, разходи за
      изпълнител, разходи за монтаж, забавяне на проекта, пропуснати срещи, престой, пропуснати ползи,
      загуба на договор или други косвени загуби, причинени от забавяне на доставката, митническо
      забавяне, проблем с куриера или липса на наличност на продукта, освен когато отговорността не може
      законно да бъде изключена.
    </p>
    <p>
      17.4 Бизнес клиентите не следва да планират монтаж, труд, работа на обекта или крайни срокове на
      проекта, докато стоките не бъдат получени, прегледани и потвърдени като правилни и подходящи.
    </p>

    <h2>18. Ограничени дестинации и съответствие</h2>
    <p>
      18.1 Можем да откажем, анулираме, спрем или блокираме всяка поръчка, когато доставката би нарушила
      или би могла да наруши санкции, контрол върху износа, митнически ограничения, правилата на
      обработващия плащания, ограничения на куриера, законови изисквания или вътрешни контроли за
      съответствие.
    </p>
    <p>
      18.2 Можем да проверяваме поръчките, данните за фактуриране, адресите за доставка, клиентите,
      държавите, регионите и информацията за плащане спрямо приложимите санкции, ограничени лица,
      предотвратяване на измами и изисквания за съответствие.
    </p>
    <p>
      18.3 Ние не изпращаме до дестинации, където доставката е забранена от приложимото право, санкции,
      ограничения на превозвача, ограничения на обработващия плащания или нашите изисквания за
      съответствие.
    </p>
    <p>
      18.4 Опитът за заобикаляне на контролите за ограничени дестинации чрез използване на спедитор, адрес
      на трета страна, фалшив адрес, променена информация за фактуриране или подвеждащи данни за поръчката
      може да доведе до анулиране на поръчката и ограничаване на достъпа до Уебсайта.
    </p>
    <p>
      18.5 Ние не носим отговорност за загуба, забавяне, анулиране, блокирана доставка, митническо
      изземване или допълнителни разходи, причинени от санкции, контрол върху износа, митнически
      ограничения, ограничения на куриера или законови изисквания за съответствие.
    </p>

    <h2>19. Събития извън нашия контрол</h2>
    <p>
      19.1 Ние не носим отговорност за неизпълнение или забавяне на доставката, причинени от събития извън
      нашия разумен контрол.
    </p>
    <p>
      19.2 Такива събития могат да включват тежки метеорологични условия, природни бедствия, смущения в
      транспорта, повреда на превозвача, митническо забавяне, стачки, трудови спорове, официални
      празници, действия на правителството, регулаторни промени, санкции, война, граждански безредици,
      епидемия, пандемия, прекъсване на електрозахранването, техническа повреда, проверки за сигурност,
      смущения във веригата на доставки или други събития на непреодолима сила.
    </p>
    <p>
      19.3 Ако такова събитие засегне поръчката Ви, ще предприемем разумни стъпки, за да сведем до минимум
      смущенията и да предоставим актуализации, когато е целесъобразно.
    </p>

    <h2>20. Промени в настоящата Политика за доставка</h2>
    <p>
      20.1 Можем да актуализираме настоящата Политика за доставка от време на време, за да отразим промени
      в нашите методи за доставка, куриерски партньори, региони на доставка, тарифи за изпращане,
      митнически процеси, оперативни практики или законови изисквания.
    </p>
    <p>
      20.2 Версията на Политиката за доставка, действаща към момента на подаване на поръчката Ви, ще се
      прилага за тази поръчка, освен ако промяна не се изисква от закона или не се отнася до корекция,
      която трябва да бъде приложена.
    </p>

    <h2>21. Информация за контакт</h2>
    <p>
      Ако имате въпроси относно изпращането, статуса на доставката, митниците, повредените пратки,
      пропуснатата доставка или всякакъв друг въпрос, свързан с доставката, моля, свържете се с нас:
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

export default async function ShippingPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return content[(locale as Locale)] ?? content.en;
}
