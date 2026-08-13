import { PolicyLayout, ContactBlock } from "@/components/layout/PolicyLayout/PolicyLayout";
import type { ReactNode } from "react";

type Locale = "ro" | "hu" | "bg" | "en";

const metaTitles: Record<Locale, string> = {
  ro: "Politica de plată — MisaElectro",
  hu: "Fizetési szabályzat — MisaElectro",
  bg: "Политика за плащане — MisaElectro",
  en: "Payment Policy — MisaElectro",
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return { title: metaTitles[(locale as Locale)] ?? metaTitles.en };
}

const content: Record<Locale, ReactNode> = {
  en: (
    <PolicyLayout title="Payment Policy" lastUpdated="29 May 2026">
      <p>
        This Payment Policy explains how payments are accepted, processed, verified, refunded, and handled
        for purchases made through www.misaelectro.ro.
      </p>
      <p>The Website is operated by:</p>
      <ContactBlock />
      <p>
        In this Policy, &ldquo;MisaElectro&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;
        means MISARELIANA S.R.L.. &ldquo;Customer&rdquo;, &ldquo;you&rdquo; or &ldquo;your&rdquo; means any
        person or business placing an order through the Website.
      </p>
      <p>
        This Payment Policy should be read together with our Terms and Conditions, Shipping Policy, Returns
        and Refunds Policy, Privacy Policy, Cookie Policy, and Warranty Policy.
      </p>

      <h2>1. Scope of This Policy</h2>
      <p>
        1.1 This Policy applies to all payments made through the Website for physical goods, delivery
        charges, additional warranty options, and any other paid services or charges displayed at checkout.
      </p>
      <p>
        1.2 MisaElectro sells electrical products, electrical materials, wiring accessories, lighting-related
        products, installation components, distribution and circuit protection products, sockets, switches,
        cables, mounting accessories, and related goods.
      </p>
      <p>
        1.3 By placing an order and submitting payment details, you agree to this Payment Policy.
      </p>

      <h2>2. Accepted Currencies</h2>
      <p>2.1 The Website may display and accept payments in the following currencies:</p>
      <ul>
        <li>EUR</li>
        <li>RON</li>
        <li>HUF</li>
      </ul>
      <p>
        2.2 The currency available to you may depend on your location, selected store settings, payment
        provider availability, checkout configuration, or Website functionality.
      </p>
      <p>
        2.3 The final currency and amount payable will be shown at checkout before you complete your order.
      </p>
      <p>
        2.4 If your card or bank account is held in a different currency from the checkout currency, your
        card issuer or bank may apply its own exchange rate, conversion fee, or foreign transaction fee.
      </p>
      <p>
        2.5 MisaElectro does not control exchange rates, bank conversion fees, card issuer charges, or foreign
        transaction fees.
      </p>

      <h2>3. Prices and VAT</h2>
      <p>
        3.1 Product prices displayed on the Website include VAT where applicable, unless clearly stated
        otherwise.
      </p>
      <p>3.2 The final order total shown at checkout may include:</p>
      <ul>
        <li>product price;</li>
        <li>VAT where applicable;</li>
        <li>delivery charges;</li>
        <li>paid Additional Warranty options where selected;</li>
        <li>discounts or promotional codes where valid;</li>
        <li>any other charges clearly displayed before payment.</li>
      </ul>
      <p>3.3 Prices may change at any time before an order is placed.</p>
      <p>
        3.4 Price changes will not affect orders already accepted by MisaElectro, except where there has been
        an obvious pricing, currency, tax, discount, or technical error.
      </p>
      <p>
        3.5 If a pricing or payment error is identified after you place an order, we may contact you to
        confirm whether you wish to proceed at the corrected price or cancel the affected order.
      </p>

      <h2>4. Accepted Payment Methods</h2>
      <p>4.1 MisaElectro accepts secure card payments using:</p>
      <ul>
        <li>Visa</li>
        <li>Mastercard</li>
      </ul>
      <p>
        4.2 Other payment methods are not accepted unless they are expressly displayed at checkout or agreed
        by MisaElectro in writing.
      </p>
      <p>
        4.3 We do not currently offer cash on delivery, payment on account, open credit terms, cheque
        payments, cryptocurrency payments, or instalment payments unless clearly stated on the Website or
        agreed separately in writing.
      </p>
      <p>4.4 Payment must be completed at checkout before the order is processed.</p>

      <h2>5. Payment Processing</h2>
      <p>5.1 Payments are processed by secure third-party payment providers.</p>
      <p>
        5.2 When you submit payment details, the payment provider may verify, authorise, authenticate,
        approve, decline, or review the transaction.
      </p>
      <p>
        5.3 MisaElectro does not guarantee that your payment will be accepted. Payment approval depends on
        your card issuer, bank, payment provider, fraud checks, authentication requirements, available
        funds, transaction limits, and other factors outside our control.
      </p>
      <p>
        5.4 Your order will not be processed for fulfilment until payment has been successfully authorised or
        received.
      </p>
      <p>
        5.5 Receiving an order confirmation or payment confirmation does not always mean that your order has
        been accepted. Order acceptance is governed by our Terms and Conditions.
      </p>

      <h2>6. Card Security and Payment Data</h2>
      <p>6.1 MisaElectro takes payment security seriously.</p>
      <p>
        6.2 Card payments are handled through secure third-party payment providers. MisaElectro does not store
        your full card number, full card security code, or complete card credentials on its own systems.
      </p>
      <p>6.3 We may receive limited payment-related information from payment providers, such as:</p>
      <ul>
        <li>payment status;</li>
        <li>transaction reference;</li>
        <li>payment provider ID;</li>
        <li>card brand;</li>
        <li>last four digits of the card where provided;</li>
        <li>refund status;</li>
        <li>chargeback or dispute information;</li>
        <li>fraud screening outcome.</li>
      </ul>
      <p>
        6.4 Payment providers may use secure authentication, encryption, fraud prevention, and payment
        security controls.
      </p>
      <p>
        6.5 You must not attempt to make a payment using a card, account, or payment method that you are not
        authorised to use.
      </p>

      <h2>7. Strong Customer Authentication and Verification</h2>
      <p>
        7.1 Some card payments may require additional authentication, such as 3D Secure, one-time passwords,
        banking app approval, or other verification steps required by your bank, card issuer, or payment
        provider.
      </p>
      <p>
        7.2 If authentication is not completed successfully, the payment may be declined or the order may
        not be processed.
      </p>
      <p>
        7.3 We may also request additional information where necessary to verify billing details, delivery
        details, business details, order legitimacy, fraud risk, or compliance requirements.
      </p>
      <p>7.4 Failure to provide requested verification information may result in order delay or cancellation.</p>

      <h2>8. Failed, Declined, or Pending Payments</h2>
      <p>
        8.1 If your payment is declined, fails, expires, is reversed, or remains pending, your order may not
        be processed.
      </p>
      <p>
        8.2 MisaElectro is not responsible for payment failures caused by your bank, card issuer, payment
        provider, insufficient funds, incorrect card details, authentication failure, transaction limits,
        network issues, or fraud controls.
      </p>
      <p>
        8.3 If payment fails, you may need to try again, use another accepted card, contact your bank, or
        contact us for support.
      </p>
      <p>
        8.4 We reserve the right to cancel unpaid, failed, pending, suspicious, or incomplete orders.
      </p>

      <h2>9. Fraud Prevention and Payment Reviews</h2>
      <p>
        9.1 To protect customers, MisaElectro, payment providers, and card networks, transactions may be
        screened for fraud, abuse, unauthorised activity, sanctions risk, and payment security concerns.
      </p>
      <p>
        9.2 We may delay, cancel, reject, or request additional verification for orders that appear
        suspicious or high-risk.
      </p>
      <p>9.3 Examples of risk indicators may include:</p>
      <ul>
        <li>mismatch between billing and delivery information;</li>
        <li>unusual order value or quantity;</li>
        <li>use of multiple failed payment attempts;</li>
        <li>suspected unauthorised card use;</li>
        <li>high-risk destination or forwarding address;</li>
        <li>restricted or sanctioned destination;</li>
        <li>unusual IP, location, or device data;</li>
        <li>previous chargeback or fraud history;</li>
        <li>inconsistent customer information.</li>
      </ul>
      <p>
        9.4 We are not required to fulfil any order that we reasonably believe may be fraudulent,
        unauthorised, unlawful, abusive, or non-compliant.
      </p>

      <h2>10. Billing Details and Invoices</h2>
      <p>10.1 You are responsible for providing accurate billing information at checkout.</p>
      <p>
        10.2 If you are purchasing as a business, you should provide accurate business name, billing
        address, VAT/tax details, and any other information required for invoicing.
      </p>
      <p>
        10.3 Where applicable, MisaElectro may issue order confirmations, payment confirmations, receipts, VAT
        invoices, or commercial invoices.
      </p>
      <p>
        10.4 We may be unable to amend invoice details after an order has been processed, especially where
        invoices have already been generated, submitted for accounting, or used for customs documentation.
      </p>
      <p>
        10.5 Business Customers are responsible for checking that billing details are correct before
        completing payment.
      </p>

      <h2>11. Delivery Charges and Free Delivery</h2>
      <p>11.1 Delivery charges, where applicable, are displayed at checkout before payment.</p>
      <p>
        11.2 Unless stated otherwise, eligible orders qualify for free delivery when the product subtotal
        exceeds:
      </p>
      <ul>
        <li>&euro;100 for EUR orders;</li>
        <li>RON 500 for RON orders;</li>
        <li>HUF 40,000 for HUF orders.</li>
      </ul>
      <p>
        11.3 The free delivery threshold is calculated after discounts and before any customs duties, import
        VAT, local taxes, brokerage fees, or other destination charges.
      </p>
      <p>
        11.4 Free delivery may not apply to all destinations, oversized goods, heavy goods, restricted
        goods, special order items, remote areas, or products requiring special handling.
      </p>

      <h2>12. International Payments, Customs, and Import Charges</h2>
      <p>12.1 MisaElectro dispatches orders from the United Kingdom.</p>
      <p>
        12.2 For orders delivered outside the United Kingdom, your order may be subject to customs clearance,
        import duties, import VAT, local taxes, brokerage fees, courier handling fees, customs clearance
        fees, or other local charges.
      </p>
      <p>
        12.3 Unless expressly stated otherwise at checkout, such customs and import charges are not included
        in the product price, delivery price, or payment collected by MisaElectro.
      </p>
      <p>
        12.4 You are responsible for paying any customs duties, import VAT, taxes, brokerage fees, handling
        charges, and local charges imposed in the destination country.
      </p>
      <p>
        12.5 MisaElectro does not control customs authorities, customs delays, import tax assessments, courier
        clearance fees, or local charges.
      </p>
      <p>
        12.6 Failure to pay customs or import charges may result in delivery delay, parcel return,
        abandonment, disposal, seizure, or additional costs.
      </p>

      <h2>13. Discounts, Promotional Codes, and Price Errors</h2>
      <p>
        13.1 Promotional codes, discounts, offers, and special prices may be subject to additional terms,
        expiry dates, eligibility rules, minimum order values, product exclusions, or destination
        restrictions.
      </p>
      <p>
        13.2 Promotional codes must be applied before payment is completed. We are not required to apply a
        promotional code retrospectively after an order has been placed.
      </p>
      <p>13.3 Discounts cannot be exchanged for cash.</p>
      <p>
        13.4 We may refuse, cancel, or reverse a discount where it has been used fraudulently, incorrectly,
        abusively, in breach of its terms, or due to technical error.
      </p>
      <p>
        13.5 If a product, delivery charge, warranty option, currency amount, discount, or order total is
        clearly incorrect due to a technical or administrative error, we may cancel the order or contact you
        to confirm whether you wish to proceed at the corrected price.
      </p>

      <h2>14. Additional Warranty Payments</h2>
      <p>14.1 Where available, paid Additional Warranty options may be selected at checkout.</p>
      <p>14.2 Unless otherwise stated, Additional Warranty pricing is calculated as follows:</p>
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
      <p>14.3 Additional Warranty charges are payable at checkout together with the product price.</p>
      <p>
        14.4 Additional Warranty charges are subject to the Warranty Policy and any product-specific warranty
        terms.
      </p>
      <p>
        14.5 If you validly cancel or return the product before the Additional Warranty begins and a refund
        is required by law or approved by MisaElectro, the related Additional Warranty charge may also be
        refunded.
      </p>

      <h2>15. Refunds</h2>
      <p>15.1 Refunds are handled in accordance with our Returns, Refunds and Cancellation Policy.</p>
      <p>
        15.2 Where a refund is approved, we will normally issue it to the original payment method used for
        the order.
      </p>
      <p>
        15.3 We cannot normally refund to a different card, account, person, or payment method.
      </p>
      <p>
        15.4 After we process a refund, your bank, card issuer, or payment provider may take additional time
        to make the funds available.
      </p>
      <p>
        15.5 Currency conversion differences, card issuer fees, foreign transaction fees, and bank charges
        are not controlled by MisaElectro and are not refundable by MisaElectro.
      </p>
      <p>
        15.6 Customs duties, import VAT, local taxes, brokerage fees, courier handling fees, customs
        clearance fees, and other local charges are not charged by MisaElectro and are not refundable by
        MisaElectro.
      </p>

      <h2>16. Chargebacks and Payment Disputes</h2>
      <p>
        16.1 If you have a problem with an order, payment, delivery, return, refund, or warranty claim, you
        should contact us first at info@misaelectro.ro so we can investigate and try to resolve the issue.
      </p>
      <p>
        16.2 If you open a chargeback, card dispute, or payment dispute, we may be required to provide
        information to our payment provider, bank, card network, fraud prevention provider, or dispute
        resolution provider.
      </p>
      <p>
        16.3 This information may include order details, payment records, tracking information, delivery
        confirmation, customer communications, refund records, return status, fraud screening information,
        and relevant evidence.
      </p>
      <p>
        16.4 We reserve the right to challenge chargebacks or payment disputes where we believe the order
        was correctly processed, fulfilled, delivered, refunded, or otherwise handled in accordance with our
        policies.
      </p>
      <p>
        16.5 Fraudulent, abusive, or repeated chargebacks may result in cancellation of future orders,
        restriction of account access, or further action where permitted by law.
      </p>

      <h2>17. Business Customer Payment Terms</h2>
      <p>
        17.1 Business Customers must pay in full at checkout unless we expressly agree otherwise in writing.
      </p>
      <p>
        17.2 MisaElectro does not offer credit terms, open account purchasing, or deferred payment to Business
        Customers unless separately approved in writing.
      </p>
      <p>
        17.3 Business Customers are responsible for ensuring that purchase orders, internal approvals,
        VAT/tax information, billing details, and delivery details are correct before payment is made.
      </p>
      <p>
        17.4 Any order placed by a Business Customer is treated as a business purchase unless we determine
        otherwise.
      </p>

      <h2>18. Sanctions, Restricted Payments, and Compliance</h2>
      <p>
        18.1 We may refuse, cancel, suspend, or block any payment or order where required or appropriate due
        to sanctions, export controls, financial crime controls, payment processor rules, card network rules,
        courier restrictions, customs restrictions, or legal obligations.
      </p>
      <p>
        18.2 You confirm that you are not subject to sanctions, not located in a restricted territory, and
        not using the Website to purchase goods in breach of applicable laws, sanctions, or export controls.
      </p>
      <p>
        18.3 We are not responsible for delays, blocked payments, cancelled orders, withheld transactions, or
        payment failures caused by sanctions, compliance checks, payment processor requirements, card
        network rules, or legal restrictions.
      </p>

      <h2>19. Changes to This Payment Policy</h2>
      <p>
        19.1 We may update this Payment Policy from time to time to reflect changes in payment methods,
        currencies, checkout processes, payment providers, fraud controls, legal requirements, tax rules, or
        business operations.
      </p>
      <p>
        19.2 The version of this Policy in force at the time you place your order will apply to that order,
        unless a change is required by law or relates to a correction that must be applied.
      </p>
      <p>
        19.3 When we update this Policy, we will revise the &ldquo;Last updated&rdquo; date at the top of
        the page.
      </p>

      <h2>20. Contact Information</h2>
      <p>
        If you have any questions about payments, billing, invoices, refunds, failed payments, or payment
        disputes, please contact us:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  ro: (
    <PolicyLayout title="Politica de plată" lastUpdated="29 mai 2026">
      <p>
        Această Politică de plată explică modul în care plățile sunt acceptate, procesate, verificate,
        rambursate și gestionate pentru achizițiile efectuate prin www.misaelectro.ro.
      </p>
      <p>Site-ul este operat de:</p>
      <ContactBlock />
      <p>
        În prezenta Politică, &bdquo;MisaElectro&rdquo;, &bdquo;noi&rdquo; sau &bdquo;al nostru&rdquo;
        înseamnă MISARELIANA S.R.L.. &bdquo;Clientul&rdquo;, &bdquo;dumneavoastră&rdquo; sau
        &bdquo;al dumneavoastră&rdquo; înseamnă orice persoană sau întreprindere care plasează o comandă
        prin intermediul Site-ului.
      </p>
      <p>
        Această Politică de plată trebuie citită împreună cu Termenii și condițiile noastre, Politica de
        livrare, Politica de returnare și rambursare, Politica de confidențialitate, Politica privind
        modulele cookie și Politica de garanție.
      </p>

      <h2>1. Domeniul de aplicare al prezentei Politici</h2>
      <p>
        1.1 Prezenta Politică se aplică tuturor plăților efectuate prin intermediul Site-ului pentru bunuri
        fizice, taxe de livrare, opțiuni de garanție suplimentară și orice alte servicii sau taxe cu plată
        afișate la finalizarea comenzii.
      </p>
      <p>
        1.2 MisaElectro comercializează produse electrice, materiale electrice, accesorii de cablaj,
        produse legate de iluminat, componente de instalare, produse de distribuție și protecție a
        circuitelor, prize, întrerupătoare, cabluri, accesorii de montaj și bunuri conexe.
      </p>
      <p>
        1.3 Prin plasarea unei comenzi și transmiterea detaliilor de plată, sunteți de acord cu această
        Politică de plată.
      </p>

      <h2>2. Monede acceptate</h2>
      <p>2.1 Site-ul poate afișa și accepta plăți în următoarele monede:</p>
      <ul>
        <li>EUR</li>
        <li>RON</li>
        <li>HUF</li>
      </ul>
      <p>
        2.2 Moneda disponibilă pentru dumneavoastră poate depinde de locația dumneavoastră, de setările
        magazinului selectate, de disponibilitatea furnizorului de plăți, de configurația de finalizare a
        comenzii sau de funcționalitatea Site-ului.
      </p>
      <p>
        2.3 Moneda finală și suma de plată vor fi afișate la finalizarea comenzii înainte de a vă finaliza
        comanda.
      </p>
      <p>
        2.4 Dacă cardul sau contul dumneavoastră bancar este deținut într-o monedă diferită de moneda de la
        finalizarea comenzii, emitentul cardului sau banca dumneavoastră poate aplica propriul curs de
        schimb, taxă de conversie sau taxă pentru tranzacții în valută.
      </p>
      <p>
        2.5 MisaElectro nu controlează cursurile de schimb, taxele de conversie bancare, taxele emitentului
        cardului sau taxele pentru tranzacții în valută.
      </p>

      <h2>3. Prețuri și TVA</h2>
      <p>
        3.1 Prețurile produselor afișate pe Site includ TVA, acolo unde este cazul, cu excepția situațiilor
        în care se precizează în mod clar altfel.
      </p>
      <p>3.2 Totalul final al comenzii afișat la finalizarea comenzii poate include:</p>
      <ul>
        <li>prețul produsului;</li>
        <li>TVA, acolo unde este cazul;</li>
        <li>taxe de livrare;</li>
        <li>opțiuni de Garanție suplimentară cu plată, atunci când sunt selectate;</li>
        <li>reduceri sau coduri promoționale, atunci când sunt valabile;</li>
        <li>orice alte taxe afișate clar înainte de plată.</li>
      </ul>
      <p>3.3 Prețurile se pot modifica în orice moment înainte de plasarea unei comenzi.</p>
      <p>
        3.4 Modificările de preț nu vor afecta comenzile deja acceptate de MisaElectro, cu excepția cazurilor
        în care a existat o eroare evidentă de preț, de monedă, de taxă, de reducere sau de natură tehnică.
      </p>
      <p>
        3.5 Dacă o eroare de preț sau de plată este identificată după ce ați plasat o comandă, este posibil
        să vă contactăm pentru a confirma dacă doriți să continuați la prețul corectat sau să anulați comanda
        afectată.
      </p>

      <h2>4. Metode de plată acceptate</h2>
      <p>4.1 MisaElectro acceptă plăți securizate cu cardul folosind:</p>
      <ul>
        <li>Visa</li>
        <li>Mastercard</li>
      </ul>
      <p>
        4.2 Alte metode de plată nu sunt acceptate decât dacă sunt afișate în mod expres la finalizarea
        comenzii sau agreate în scris de MisaElectro.
      </p>
      <p>
        4.3 În prezent nu oferim plata la livrare, plata în cont, condiții de credit deschis, plăți prin cec,
        plăți cu criptomonede sau plăți în rate, cu excepția cazului în care se precizează clar acest lucru
        pe Site sau se convine separat în scris.
      </p>
      <p>4.4 Plata trebuie finalizată la finalizarea comenzii înainte ca aceasta să fie procesată.</p>

      <h2>5. Procesarea plăților</h2>
      <p>5.1 Plățile sunt procesate de furnizori de plăți terți securizați.</p>
      <p>
        5.2 Atunci când transmiteți detaliile de plată, furnizorul de plăți poate verifica, autoriza,
        autentifica, aproba, respinge sau examina tranzacția.
      </p>
      <p>
        5.3 MisaElectro nu garantează că plata dumneavoastră va fi acceptată. Aprobarea plății depinde de
        emitentul cardului, de bancă, de furnizorul de plăți, de verificările antifraudă, de cerințele de
        autentificare, de fondurile disponibile, de limitele de tranzacție și de alți factori aflați în afara
        controlului nostru.
      </p>
      <p>
        5.4 Comanda dumneavoastră nu va fi procesată pentru onorare până când plata nu a fost autorizată sau
        primită cu succes.
      </p>
      <p>
        5.5 Primirea unei confirmări de comandă sau a unei confirmări de plată nu înseamnă întotdeauna că
        comanda dumneavoastră a fost acceptată. Acceptarea comenzii este reglementată de Termenii și
        condițiile noastre.
      </p>

      <h2>6. Securitatea cardului și datele de plată</h2>
      <p>6.1 MisaElectro tratează cu seriozitate securitatea plăților.</p>
      <p>
        6.2 Plățile cu cardul sunt gestionate prin furnizori de plăți terți securizați. MisaElectro nu
        stochează numărul complet al cardului, codul complet de securitate al cardului sau datele complete
        de acreditare ale cardului în propriile sisteme.
      </p>
      <p>6.3 Este posibil să primim informații limitate legate de plată de la furnizorii de plăți, cum ar fi:</p>
      <ul>
        <li>starea plății;</li>
        <li>referința tranzacției;</li>
        <li>ID-ul furnizorului de plăți;</li>
        <li>marca cardului;</li>
        <li>ultimele patru cifre ale cardului, atunci când sunt furnizate;</li>
        <li>starea rambursării;</li>
        <li>informații privind chargeback-ul sau litigiul;</li>
        <li>rezultatul verificării antifraudă.</li>
      </ul>
      <p>
        6.4 Furnizorii de plăți pot utiliza autentificare securizată, criptare, prevenirea fraudei și
        controale de securitate a plăților.
      </p>
      <p>
        6.5 Nu trebuie să încercați să efectuați o plată folosind un card, un cont sau o metodă de plată pe
        care nu sunteți autorizat să o utilizați.
      </p>

      <h2>7. Autentificarea puternică a clientului și verificarea</h2>
      <p>
        7.1 Unele plăți cu cardul pot necesita o autentificare suplimentară, cum ar fi 3D Secure, parole de
        unică folosință, aprobarea prin aplicația bancară sau alți pași de verificare solicitați de banca,
        emitentul cardului sau furnizorul de plăți al dumneavoastră.
      </p>
      <p>
        7.2 Dacă autentificarea nu este finalizată cu succes, plata poate fi respinsă sau comanda poate să nu
        fie procesată.
      </p>
      <p>
        7.3 De asemenea, este posibil să solicităm informații suplimentare atunci când este necesar pentru a
        verifica detaliile de facturare, detaliile de livrare, detaliile companiei, legitimitatea comenzii,
        riscul de fraudă sau cerințele de conformitate.
      </p>
      <p>
        7.4 Nefurnizarea informațiilor de verificare solicitate poate duce la întârzierea sau anularea
        comenzii.
      </p>

      <h2>8. Plăți eșuate, respinse sau în așteptare</h2>
      <p>
        8.1 Dacă plata dumneavoastră este respinsă, eșuează, expiră, este stornată sau rămâne în așteptare,
        comanda dumneavoastră poate să nu fie procesată.
      </p>
      <p>
        8.2 MisaElectro nu este responsabilă pentru eșecurile de plată cauzate de banca dumneavoastră, de
        emitentul cardului, de furnizorul de plăți, de fonduri insuficiente, de detalii incorecte ale
        cardului, de eșecul autentificării, de limitele de tranzacție, de probleme de rețea sau de
        controalele antifraudă.
      </p>
      <p>
        8.3 Dacă plata eșuează, este posibil să fie nevoie să încercați din nou, să utilizați un alt card
        acceptat, să contactați banca dumneavoastră sau să ne contactați pentru asistență.
      </p>
      <p>
        8.4 Ne rezervăm dreptul de a anula comenzile neplătite, eșuate, în așteptare, suspecte sau
        incomplete.
      </p>

      <h2>9. Prevenirea fraudei și verificările plăților</h2>
      <p>
        9.1 Pentru a proteja clienții, MisaElectro, furnizorii de plăți și rețelele de carduri, tranzacțiile
        pot fi verificate pentru fraudă, abuz, activitate neautorizată, risc de sancțiuni și probleme de
        securitate a plăților.
      </p>
      <p>
        9.2 Este posibil să întârziem, să anulăm, să respingem sau să solicităm verificări suplimentare
        pentru comenzile care par suspecte sau cu risc ridicat.
      </p>
      <p>9.3 Exemple de indicatori de risc pot include:</p>
      <ul>
        <li>neconcordanță între informațiile de facturare și cele de livrare;</li>
        <li>valoare sau cantitate neobișnuită a comenzii;</li>
        <li>utilizarea mai multor încercări de plată eșuate;</li>
        <li>utilizarea suspectată neautorizată a cardului;</li>
        <li>destinație sau adresă de expediere cu risc ridicat;</li>
        <li>destinație restricționată sau sancționată;</li>
        <li>date neobișnuite privind IP-ul, locația sau dispozitivul;</li>
        <li>istoric anterior de chargeback sau fraudă;</li>
        <li>informații inconsecvente despre client.</li>
      </ul>
      <p>
        9.4 Nu suntem obligați să onorăm nicio comandă despre care credem în mod rezonabil că poate fi
        frauduloasă, neautorizată, ilegală, abuzivă sau neconformă.
      </p>

      <h2>10. Detalii de facturare și facturi</h2>
      <p>10.1 Sunteți responsabil pentru furnizarea unor informații de facturare corecte la finalizarea comenzii.</p>
      <p>
        10.2 Dacă efectuați achiziția în calitate de întreprindere, trebuie să furnizați denumirea corectă a
        companiei, adresa de facturare, detaliile de TVA/fiscale și orice alte informații necesare pentru
        facturare.
      </p>
      <p>
        10.3 Acolo unde este cazul, MisaElectro poate emite confirmări de comandă, confirmări de plată,
        chitanțe, facturi cu TVA sau facturi comerciale.
      </p>
      <p>
        10.4 Este posibil să nu putem modifica detaliile facturii după ce o comandă a fost procesată, mai
        ales atunci când facturile au fost deja generate, transmise pentru contabilitate sau utilizate pentru
        documentația vamală.
      </p>
      <p>
        10.5 Clienții persoane juridice sunt responsabili pentru verificarea corectitudinii detaliilor de
        facturare înainte de finalizarea plății.
      </p>

      <h2>11. Taxe de livrare și livrare gratuită</h2>
      <p>11.1 Taxele de livrare, acolo unde este cazul, sunt afișate la finalizarea comenzii înainte de plată.</p>
      <p>
        11.2 Cu excepția situațiilor în care se precizează altfel, comenzile eligibile beneficiază de livrare
        gratuită atunci când subtotalul produselor depășește:
      </p>
      <ul>
        <li>&euro;100 pentru comenzile în EUR;</li>
        <li>RON 500 pentru comenzile în RON;</li>
        <li>HUF 40,000 pentru comenzile în HUF.</li>
      </ul>
      <p>
        11.3 Pragul de livrare gratuită este calculat după aplicarea reducerilor și înainte de orice taxe
        vamale, TVA la import, taxe locale, comisioane de brokeraj sau alte taxe la destinație.
      </p>
      <p>
        11.4 Livrarea gratuită poate să nu se aplice tuturor destinațiilor, bunurilor supradimensionate,
        bunurilor grele, bunurilor restricționate, articolelor la comandă specială, zonelor îndepărtate sau
        produselor care necesită manipulare specială.
      </p>

      <h2>12. Plăți internaționale, vamă și taxe de import</h2>
      <p>12.1 MisaElectro expediază comenzile din Regatul Unit.</p>
      <p>
        12.2 Pentru comenzile livrate în afara Regatului Unit, comanda dumneavoastră poate fi supusă vămuirii,
        taxelor de import, TVA-ului la import, taxelor locale, comisioanelor de brokeraj, taxelor de
        manipulare ale curierului, taxelor de vămuire sau altor taxe locale.
      </p>
      <p>
        12.3 Cu excepția situațiilor în care se precizează în mod expres altfel la finalizarea comenzii,
        astfel de taxe vamale și de import nu sunt incluse în prețul produsului, prețul de livrare sau plata
        colectată de MisaElectro.
      </p>
      <p>
        12.4 Sunteți responsabil pentru plata oricăror taxe vamale, TVA la import, impozite, comisioane de
        brokeraj, taxe de manipulare și taxe locale impuse în țara de destinație.
      </p>
      <p>
        12.5 MisaElectro nu controlează autoritățile vamale, întârzierile vamale, evaluările taxelor de
        import, taxele de vămuire ale curierului sau taxele locale.
      </p>
      <p>
        12.6 Neplata taxelor vamale sau de import poate duce la întârzierea livrării, returnarea coletului,
        abandonarea, eliminarea, confiscarea sau costuri suplimentare.
      </p>

      <h2>13. Reduceri, coduri promoționale și erori de preț</h2>
      <p>
        13.1 Codurile promoționale, reducerile, ofertele și prețurile speciale pot fi supuse unor termeni
        suplimentari, date de expirare, reguli de eligibilitate, valori minime ale comenzii, excluderi de
        produse sau restricții de destinație.
      </p>
      <p>
        13.2 Codurile promoționale trebuie aplicate înainte de finalizarea plății. Nu suntem obligați să
        aplicăm un cod promoțional retroactiv după ce o comandă a fost plasată.
      </p>
      <p>13.3 Reducerile nu pot fi schimbate în numerar.</p>
      <p>
        13.4 Putem refuza, anula sau storna o reducere atunci când aceasta a fost utilizată în mod fraudulos,
        incorect, abuziv, cu încălcarea termenilor săi sau din cauza unei erori tehnice.
      </p>
      <p>
        13.5 Dacă un produs, o taxă de livrare, o opțiune de garanție, o sumă în valută, o reducere sau
        totalul comenzii este în mod clar incorect din cauza unei erori tehnice sau administrative, putem
        anula comanda sau vă putem contacta pentru a confirma dacă doriți să continuați la prețul corectat.
      </p>

      <h2>14. Plăți pentru Garanție suplimentară</h2>
      <p>14.1 Acolo unde este disponibil, opțiunile de Garanție suplimentară cu plată pot fi selectate la finalizarea comenzii.</p>
      <p>14.2 Cu excepția situațiilor în care se precizează altfel, prețul Garanției suplimentare se calculează după cum urmează:</p>
      <table>
        <thead>
          <tr>
            <th>Opțiune de Garanție suplimentară</th>
            <th>Preț</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>+1 an Garanție suplimentară</td><td>10% din prețul produsului, minimum &euro;6.99 / &pound;6.99 / $6.99</td></tr>
          <tr><td>+2 ani Garanție suplimentară</td><td>16% din prețul produsului, minimum &euro;9.99 / &pound;9.99 / $9.99</td></tr>
          <tr><td>+3 ani Garanție suplimentară</td><td>22% din prețul produsului, minimum &euro;12.99 / &pound;12.99 / $12.99</td></tr>
        </tbody>
      </table>
      <p>14.3 Taxele pentru Garanția suplimentară sunt plătibile la finalizarea comenzii împreună cu prețul produsului.</p>
      <p>
        14.4 Taxele pentru Garanția suplimentară sunt supuse Politicii de garanție și oricăror termeni de
        garanție specifici produsului.
      </p>
      <p>
        14.5 Dacă anulați sau returnați în mod valabil produsul înainte ca Garanția suplimentară să înceapă
        și o rambursare este impusă de lege sau aprobată de MisaElectro, taxa aferentă Garanției suplimentare
        poate fi de asemenea rambursată.
      </p>

      <h2>15. Rambursări</h2>
      <p>15.1 Rambursările sunt gestionate în conformitate cu Politica noastră de returnare, rambursare și anulare.</p>
      <p>
        15.2 Acolo unde o rambursare este aprobată, în mod normal o vom emite către metoda de plată inițială
        utilizată pentru comandă.
      </p>
      <p>
        15.3 În mod normal, nu putem efectua rambursarea către un alt card, cont, persoană sau metodă de
        plată.
      </p>
      <p>
        15.4 După ce procesăm o rambursare, banca, emitentul cardului sau furnizorul de plăți al
        dumneavoastră poate avea nevoie de timp suplimentar pentru a pune fondurile la dispoziție.
      </p>
      <p>
        15.5 Diferențele de conversie valutară, taxele emitentului cardului, taxele pentru tranzacții în
        valută și comisioanele bancare nu sunt controlate de MisaElectro și nu sunt rambursabile de
        MisaElectro.
      </p>
      <p>
        15.6 Taxele vamale, TVA-ul la import, taxele locale, comisioanele de brokeraj, taxele de manipulare
        ale curierului, taxele de vămuire și alte taxe locale nu sunt percepute de MisaElectro și nu sunt
        rambursabile de MisaElectro.
      </p>

      <h2>16. Chargeback-uri și litigii de plată</h2>
      <p>
        16.1 Dacă aveți o problemă cu o comandă, plată, livrare, returnare, rambursare sau cerere de
        garanție, trebuie să ne contactați mai întâi la info@misaelectro.ro pentru a putea investiga și
        încerca să rezolvăm problema.
      </p>
      <p>
        16.2 Dacă deschideți un chargeback, un litigiu privind cardul sau un litigiu de plată, este posibil
        să fim obligați să furnizăm informații furnizorului nostru de plăți, băncii, rețelei de carduri,
        furnizorului de prevenire a fraudei sau furnizorului de soluționare a litigiilor.
      </p>
      <p>
        16.3 Aceste informații pot include detalii ale comenzii, evidențe de plată, informații de urmărire,
        confirmarea livrării, comunicările cu clientul, evidențele de rambursare, starea returnării,
        informații privind verificarea antifraudă și dovezi relevante.
      </p>
      <p>
        16.4 Ne rezervăm dreptul de a contesta chargeback-urile sau litigiile de plată atunci când
        considerăm că comanda a fost procesată, onorată, livrată, rambursată sau gestionată în mod corect
        în conformitate cu politicile noastre.
      </p>
      <p>
        16.5 Chargeback-urile frauduloase, abuzive sau repetate pot duce la anularea comenzilor viitoare, la
        restricționarea accesului la cont sau la măsuri suplimentare, acolo unde legea permite.
      </p>

      <h2>17. Condiții de plată pentru clienți persoane juridice</h2>
      <p>
        17.1 Clienții persoane juridice trebuie să plătească integral la finalizarea comenzii, cu excepția
        cazului în care convenim în mod expres altfel în scris.
      </p>
      <p>
        17.2 MisaElectro nu oferă condiții de credit, achiziții în cont deschis sau plată amânată clienților
        persoane juridice, cu excepția cazului în care este aprobat separat în scris.
      </p>
      <p>
        17.3 Clienții persoane juridice sunt responsabili pentru asigurarea faptului că ordinele de achiziție,
        aprobările interne, informațiile de TVA/fiscale, detaliile de facturare și detaliile de livrare sunt
        corecte înainte de efectuarea plății.
      </p>
      <p>
        17.4 Orice comandă plasată de un client persoană juridică este tratată ca o achiziție de tip business,
        cu excepția cazului în care stabilim altfel.
      </p>

      <h2>18. Sancțiuni, plăți restricționate și conformitate</h2>
      <p>
        18.1 Putem refuza, anula, suspenda sau bloca orice plată sau comandă atunci când este necesar sau
        oportun din cauza sancțiunilor, controalelor la export, controalelor privind criminalitatea
        financiară, regulilor procesatorului de plăți, regulilor rețelei de carduri, restricțiilor
        curierilor, restricțiilor vamale sau obligațiilor legale.
      </p>
      <p>
        18.2 Confirmați că nu faceți obiectul unor sancțiuni, că nu sunteți localizat într-un teritoriu
        restricționat și că nu utilizați Site-ul pentru a achiziționa bunuri cu încălcarea legilor,
        sancțiunilor sau controalelor la export aplicabile.
      </p>
      <p>
        18.3 Nu suntem responsabili pentru întârzieri, plăți blocate, comenzi anulate, tranzacții reținute
        sau eșecuri de plată cauzate de sancțiuni, verificări de conformitate, cerințele procesatorului de
        plăți, regulile rețelei de carduri sau restricții legale.
      </p>

      <h2>19. Modificări ale prezentei Politici de plată</h2>
      <p>
        19.1 Putem actualiza periodic această Politică de plată pentru a reflecta modificări ale metodelor de
        plată, monedelor, proceselor de finalizare a comenzii, furnizorilor de plăți, controalelor
        antifraudă, cerințelor legale, regulilor fiscale sau operațiunilor comerciale.
      </p>
      <p>
        19.2 Versiunea prezentei Politici în vigoare la momentul plasării comenzii dumneavoastră se va aplica
        acelei comenzi, cu excepția cazului în care o modificare este impusă de lege sau se referă la o
        corecție care trebuie aplicată.
      </p>
      <p>
        19.3 Atunci când actualizăm această Politică, vom revizui data &bdquo;Ultima actualizare&rdquo; din
        partea de sus a paginii.
      </p>

      <h2>20. Informații de contact</h2>
      <p>
        Dacă aveți întrebări despre plăți, facturare, facturi, rambursări, plăți eșuate sau litigii de plată,
        vă rugăm să ne contactați:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  hu: (
    <PolicyLayout title="Fizetési szabályzat" lastUpdated="2026. május 29.">
      <p>
        Ez a Fizetési szabályzat ismerteti, hogyan fogadjuk el, dolgozzuk fel, ellenőrizzük, térítjük vissza
        és kezeljük a www.misaelectro.ro oldalon keresztül végzett vásárlások fizetéseit.
      </p>
      <p>A Weboldalt az alábbi vállalkozás üzemelteti:</p>
      <ContactBlock />
      <p>
        A jelen Szabályzatban a &bdquo;MisaElectro&rdquo;, &bdquo;mi&rdquo; vagy &bdquo;a miénk&rdquo;
        kifejezés a MISARELIANA S.R.L. vállalkozást jelenti. Az &bdquo;Ügyfél&rdquo;, &bdquo;Ön&rdquo; vagy
        &bdquo;az Ön&rdquo; kifejezés bármely olyan személyt vagy vállalkozást jelent, aki a Weboldalon
        keresztül rendelést ad le.
      </p>
      <p>
        Ezt a Fizetési szabályzatot az Általános Szerződési Feltételeinkkel, a Szállítási szabályzattal, a
        Visszaküldési és visszatérítési szabályzattal, az Adatvédelmi szabályzattal, a Sütiszabályzattal és a
        Garanciális szabályzattal együtt kell értelmezni.
      </p>

      <h2>1. A jelen Szabályzat hatálya</h2>
      <p>
        1.1 A jelen Szabályzat a Weboldalon keresztül fizikai termékekért, szállítási díjakért, kiegészítő
        garanciás opciókért, valamint a pénztárnál megjelenített bármely egyéb fizetős szolgáltatásért vagy
        díjért teljesített összes fizetésre vonatkozik.
      </p>
      <p>
        1.2 A MisaElectro elektromos termékeket, elektromos anyagokat, vezetékezési tartozékokat,
        világítással kapcsolatos termékeket, szerelési alkatrészeket, elosztási és áramköri védelmi
        termékeket, aljzatokat, kapcsolókat, kábeleket, rögzítési tartozékokat és kapcsolódó árukat
        értékesít.
      </p>
      <p>
        1.3 A rendelés leadásával és a fizetési adatok megadásával Ön elfogadja a jelen Fizetési
        szabályzatot.
      </p>

      <h2>2. Elfogadott pénznemek</h2>
      <p>2.1 A Weboldal a következő pénznemekben jeleníthet meg és fogadhat el fizetéseket:</p>
      <ul>
        <li>EUR</li>
        <li>RON</li>
        <li>HUF</li>
      </ul>
      <p>
        2.2 Az Ön számára elérhető pénznem az Ön tartózkodási helyétől, a kiválasztott üzletbeállításoktól, a
        fizetési szolgáltató elérhetőségétől, a pénztár konfigurációjától vagy a Weboldal funkcióitól
        függhet.
      </p>
      <p>
        2.3 A végleges pénznem és a fizetendő összeg a pénztárnál, a rendelés véglegesítése előtt kerül
        megjelenítésre.
      </p>
      <p>
        2.4 Ha az Ön kártyáját vagy bankszámláját a pénztári pénznemtől eltérő pénznemben vezetik, a
        kártyakibocsátója vagy bankja saját átváltási árfolyamot, átváltási díjat vagy külföldi tranzakciós
        díjat alkalmazhat.
      </p>
      <p>
        2.5 A MisaElectro nem ellenőrzi az átváltási árfolyamokat, a banki átváltási díjakat, a
        kártyakibocsátói díjakat vagy a külföldi tranzakciós díjakat.
      </p>

      <h2>3. Árak és áfa</h2>
      <p>
        3.1 A Weboldalon megjelenített termékárak – ahol alkalmazandó – tartalmazzák az áfát, kivéve, ha
        egyértelműen másként van feltüntetve.
      </p>
      <p>3.2 A pénztárnál megjelenített végleges rendelési összeg a következőket tartalmazhatja:</p>
      <ul>
        <li>a termék ára;</li>
        <li>áfa, ahol alkalmazandó;</li>
        <li>szállítási díjak;</li>
        <li>fizetős Kiegészítő garanciás opciók, ha kiválasztották;</li>
        <li>kedvezmények vagy promóciós kódok, ha érvényesek;</li>
        <li>bármely egyéb, a fizetés előtt egyértelműen megjelenített díj.</li>
      </ul>
      <p>3.3 Az árak a rendelés leadása előtt bármikor megváltozhatnak.</p>
      <p>
        3.4 Az árváltozások nem érintik a MisaElectro által már elfogadott rendeléseket, kivéve, ha nyilvánvaló
        ár-, pénznem-, adó-, kedvezmény- vagy technikai hiba történt.
      </p>
      <p>
        3.5 Ha egy ár- vagy fizetési hibát azt követően azonosítunk, hogy Ön rendelést adott le,
        felvehetjük Önnel a kapcsolatot annak megerősítése érdekében, hogy a javított áron kíván-e
        továbbhaladni, vagy törölni kívánja az érintett rendelést.
      </p>

      <h2>4. Elfogadott fizetési módok</h2>
      <p>4.1 A MisaElectro biztonságos kártyás fizetéseket fogad el az alábbiakkal:</p>
      <ul>
        <li>Visa</li>
        <li>Mastercard</li>
      </ul>
      <p>
        4.2 Egyéb fizetési módokat nem fogadunk el, kivéve, ha azok a pénztárnál kifejezetten megjelennek,
        vagy a MisaElectro írásban jóváhagyta.
      </p>
      <p>
        4.3 Jelenleg nem kínálunk utánvétet, számlára történő fizetést, nyílt hitelfeltételeket, csekkes
        fizetést, kriptovalutás fizetést vagy részletfizetést, kivéve, ha ez a Weboldalon egyértelműen fel
        van tüntetve, vagy külön írásban megállapodtunk.
      </p>
      <p>4.4 A fizetést a pénztárnál kell teljesíteni, mielőtt a rendelés feldolgozásra kerül.</p>

      <h2>5. Fizetések feldolgozása</h2>
      <p>5.1 A fizetéseket biztonságos, harmadik fél fizetési szolgáltatók dolgozzák fel.</p>
      <p>
        5.2 Amikor Ön megadja a fizetési adatokat, a fizetési szolgáltató ellenőrizheti, engedélyezheti,
        hitelesítheti, jóváhagyhatja, elutasíthatja vagy felülvizsgálhatja a tranzakciót.
      </p>
      <p>
        5.3 A MisaElectro nem garantálja, hogy az Ön fizetését elfogadják. A fizetés jóváhagyása az Ön
        kártyakibocsátójától, bankjától, fizetési szolgáltatójától, a csalásellenőrzésektől, a hitelesítési
        követelményektől, a rendelkezésre álló fedezettől, a tranzakciós limitektől és egyéb, az
        ellenőrzésünkön kívül eső tényezőktől függ.
      </p>
      <p>
        5.4 Rendelése nem kerül teljesítésre való feldolgozásra mindaddig, amíg a fizetést sikeresen nem
        engedélyezték vagy nem kapták meg.
      </p>
      <p>
        5.5 A rendelés-visszaigazolás vagy a fizetési visszaigazolás kézhezvétele nem mindig jelenti azt, hogy
        rendelését elfogadták. A rendelés elfogadását az Általános Szerződési Feltételeink szabályozzák.
      </p>

      <h2>6. Kártyabiztonság és fizetési adatok</h2>
      <p>6.1 A MisaElectro komolyan veszi a fizetési biztonságot.</p>
      <p>
        6.2 A kártyás fizetéseket biztonságos, harmadik fél fizetési szolgáltatókon keresztül kezeljük. A
        MisaElectro nem tárolja a teljes kártyaszámát, a teljes kártyabiztonsági kódját vagy a teljes
        kártyaadatait a saját rendszerein.
      </p>
      <p>6.3 A fizetési szolgáltatóktól korlátozott fizetéssel kapcsolatos információkat kaphatunk, például:</p>
      <ul>
        <li>fizetés állapota;</li>
        <li>tranzakciós hivatkozás;</li>
        <li>fizetési szolgáltató azonosítója;</li>
        <li>kártya márkája;</li>
        <li>a kártya utolsó négy számjegye, ha megadják;</li>
        <li>visszatérítés állapota;</li>
        <li>chargeback vagy vitával kapcsolatos információ;</li>
        <li>csalásszűrés eredménye.</li>
      </ul>
      <p>
        6.4 A fizetési szolgáltatók biztonságos hitelesítést, titkosítást, csalásmegelőzést és fizetési
        biztonsági ellenőrzéseket alkalmazhatnak.
      </p>
      <p>
        6.5 Nem kísérelheti meg fizetés teljesítését olyan kártyával, számlával vagy fizetési móddal, amelynek
        használatára nincs jogosultsága.
      </p>

      <h2>7. Erős ügyfél-hitelesítés és ellenőrzés</h2>
      <p>
        7.1 Egyes kártyás fizetések további hitelesítést igényelhetnek, például 3D Secure, egyszer használatos
        jelszavak, banki alkalmazásban történő jóváhagyás vagy egyéb, a bankja, kártyakibocsátója vagy
        fizetési szolgáltatója által megkövetelt ellenőrzési lépések.
      </p>
      <p>
        7.2 Ha a hitelesítés nem fejeződik be sikeresen, a fizetés elutasításra kerülhet, vagy a rendelés nem
        kerül feldolgozásra.
      </p>
      <p>
        7.3 Szükség esetén további információkat is kérhetünk a számlázási adatok, a szállítási adatok, a
        vállalkozási adatok, a rendelés jogszerűségének, a csalási kockázatnak vagy a megfelelőségi
        követelményeknek az ellenőrzéséhez.
      </p>
      <p>
        7.4 A kért ellenőrzési információk megadásának elmulasztása a rendelés késedelmét vagy törlését
        eredményezheti.
      </p>

      <h2>8. Sikertelen, elutasított vagy függőben lévő fizetések</h2>
      <p>
        8.1 Ha fizetése elutasításra kerül, sikertelen, lejár, visszafordításra kerül vagy függőben marad,
        rendelése nem kerülhet feldolgozásra.
      </p>
      <p>
        8.2 A MisaElectro nem felelős az Ön bankja, kártyakibocsátója, fizetési szolgáltatója, a nem
        elegendő fedezet, a helytelen kártyaadatok, a hitelesítés sikertelensége, a tranzakciós limitek, a
        hálózati problémák vagy a csalásellenőrzések által okozott fizetési hibákért.
      </p>
      <p>
        8.3 Ha a fizetés sikertelen, előfordulhat, hogy újra kell próbálkoznia, másik elfogadott kártyát kell
        használnia, kapcsolatba kell lépnie a bankjával, vagy támogatásért hozzánk kell fordulnia.
      </p>
      <p>
        8.4 Fenntartjuk a jogot a ki nem fizetett, sikertelen, függőben lévő, gyanús vagy hiányos rendelések
        törlésére.
      </p>

      <h2>9. Csalásmegelőzés és fizetési felülvizsgálatok</h2>
      <p>
        9.1 Az ügyfelek, a MisaElectro, a fizetési szolgáltatók és a kártyahálózatok védelme érdekében a
        tranzakciók csalás, visszaélés, jogosulatlan tevékenység, szankciós kockázat és fizetési biztonsági
        aggályok szempontjából ellenőrzésre kerülhetnek.
      </p>
      <p>
        9.2 Késleltethetjük, törölhetjük, elutasíthatjuk a gyanúsnak vagy magas kockázatúnak tűnő
        rendeléseket, vagy azokhoz további ellenőrzést kérhetünk.
      </p>
      <p>9.3 A kockázati mutatók például a következők lehetnek:</p>
      <ul>
        <li>eltérés a számlázási és a szállítási információk között;</li>
        <li>szokatlan rendelési érték vagy mennyiség;</li>
        <li>több sikertelen fizetési kísérlet használata;</li>
        <li>feltételezett jogosulatlan kártyahasználat;</li>
        <li>magas kockázatú célállomás vagy átirányítási cím;</li>
        <li>korlátozott vagy szankcionált célállomás;</li>
        <li>szokatlan IP-, hely- vagy eszközadatok;</li>
        <li>korábbi chargeback vagy csalási előzmények;</li>
        <li>ellentmondásos ügyfélinformációk.</li>
      </ul>
      <p>
        9.4 Nem vagyunk kötelesek teljesíteni egyetlen olyan rendelést sem, amelyről ésszerűen feltételezzük,
        hogy csalárd, jogosulatlan, jogellenes, visszaélésszerű vagy nem megfelelő lehet.
      </p>

      <h2>10. Számlázási adatok és számlák</h2>
      <p>10.1 Ön felelős a pontos számlázási információk megadásáért a pénztárnál.</p>
      <p>
        10.2 Ha vállalkozásként vásárol, meg kell adnia a pontos cégnevet, számlázási címet, áfa-/adóadatokat
        és minden egyéb, a számlázáshoz szükséges információt.
      </p>
      <p>
        10.3 Ahol alkalmazandó, a MisaElectro rendelés-visszaigazolásokat, fizetési visszaigazolásokat,
        nyugtákat, áfás számlákat vagy kereskedelmi számlákat állíthat ki.
      </p>
      <p>
        10.4 Előfordulhat, hogy a rendelés feldolgozása után nem tudjuk módosítani a számla adatait, különösen
        akkor, ha a számlákat már kiállították, könyvelésre benyújtották, vagy vámdokumentációhoz használták
        fel.
      </p>
      <p>
        10.5 Az üzleti Ügyfelek felelősek annak ellenőrzéséért, hogy a számlázási adatok helyesek-e a fizetés
        teljesítése előtt.
      </p>

      <h2>11. Szállítási díjak és ingyenes szállítás</h2>
      <p>11.1 A szállítási díjakat – ahol alkalmazandó – a pénztárnál, a fizetés előtt jelenítjük meg.</p>
      <p>
        11.2 Eltérő rendelkezés hiányában a jogosult rendelések ingyenes szállításra jogosultak, ha a
        termékek részösszege meghaladja a következőt:
      </p>
      <ul>
        <li>&euro;100 az EUR rendelések esetén;</li>
        <li>RON 500 a RON rendelések esetén;</li>
        <li>HUF 40,000 a HUF rendelések esetén.</li>
      </ul>
      <p>
        11.3 Az ingyenes szállítási küszöböt a kedvezmények után és bármely vám, importáfa, helyi adók,
        közvetítői díjak vagy egyéb célállomási díjak előtt számítjuk ki.
      </p>
      <p>
        11.4 Az ingyenes szállítás nem feltétlenül vonatkozik minden célállomásra, túlméretes árukra, nehéz
        árukra, korlátozott árukra, egyedi rendelésű tételekre, távoli területekre vagy speciális kezelést
        igénylő termékekre.
      </p>

      <h2>12. Nemzetközi fizetések, vám és importdíjak</h2>
      <p>12.1 A MisaElectro a rendeléseket az Egyesült Királyságból küldi ki.</p>
      <p>
        12.2 Az Egyesült Királyságon kívülre szállított rendelések esetén rendelésére vámkezelés, importvámok,
        importáfa, helyi adók, közvetítői díjak, futárkezelési díjak, vámkezelési díjak vagy egyéb helyi díjak
        vonatkozhatnak.
      </p>
      <p>
        12.3 Eltérő kifejezett rendelkezés hiányában a pénztárnál az ilyen vám- és importdíjak nem tartoznak
        bele a termék árába, a szállítási árba vagy a MisaElectro által beszedett fizetésbe.
      </p>
      <p>
        12.4 Ön felelős a célországban kivetett bármely vám, importáfa, adók, közvetítői díjak, kezelési
        díjak és helyi díjak megfizetéséért.
      </p>
      <p>
        12.5 A MisaElectro nem ellenőrzi a vámhatóságokat, a vámkésedelmeket, az importadó-megállapításokat,
        a futár vámkezelési díjait vagy a helyi díjakat.
      </p>
      <p>
        12.6 A vám- vagy importdíjak megfizetésének elmulasztása szállítási késedelmet, a csomag
        visszaküldését, elhagyását, megsemmisítését, lefoglalását vagy további költségeket eredményezhet.
      </p>

      <h2>13. Kedvezmények, promóciós kódok és árhibák</h2>
      <p>
        13.1 A promóciós kódokra, kedvezményekre, ajánlatokra és különleges árakra további feltételek, lejárati
        dátumok, jogosultsági szabályok, minimális rendelési értékek, termékkizárások vagy célállomási
        korlátozások vonatkozhatnak.
      </p>
      <p>
        13.2 A promóciós kódokat a fizetés teljesítése előtt kell alkalmazni. Nem vagyunk kötelesek egy
        promóciós kódot visszamenőlegesen alkalmazni a rendelés leadása után.
      </p>
      <p>13.3 A kedvezmények készpénzre nem válthatók.</p>
      <p>
        13.4 Megtagadhatjuk, törölhetjük vagy visszafordíthatjuk a kedvezményt, ha azt csalárd módon,
        helytelenül, visszaélésszerűen, feltételeinek megsértésével vagy technikai hiba miatt használták fel.
      </p>
      <p>
        13.5 Ha egy termék, szállítási díj, garanciás opció, pénznemben kifejezett összeg, kedvezmény vagy a
        rendelés végösszege technikai vagy adminisztratív hiba miatt egyértelműen helytelen, törölhetjük a
        rendelést, vagy felvehetjük Önnel a kapcsolatot annak megerősítése érdekében, hogy a javított áron
        kíván-e továbbhaladni.
      </p>

      <h2>14. Kiegészítő garanciás fizetések</h2>
      <p>14.1 Ahol elérhető, a fizetős Kiegészítő garanciás opciók a pénztárnál választhatók ki.</p>
      <p>14.2 Eltérő rendelkezés hiányában a Kiegészítő garancia ára a következőképpen kerül kiszámításra:</p>
      <table>
        <thead>
          <tr>
            <th>Kiegészítő garanciás opció</th>
            <th>Ár</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>+1 év Kiegészítő garancia</td><td>a termék árának 10%-a, minimum &euro;6.99 / &pound;6.99 / $6.99</td></tr>
          <tr><td>+2 év Kiegészítő garancia</td><td>a termék árának 16%-a, minimum &euro;9.99 / &pound;9.99 / $9.99</td></tr>
          <tr><td>+3 év Kiegészítő garancia</td><td>a termék árának 22%-a, minimum &euro;12.99 / &pound;12.99 / $12.99</td></tr>
        </tbody>
      </table>
      <p>14.3 A Kiegészítő garanciás díjak a pénztárnál, a termék árával együtt fizetendők.</p>
      <p>
        14.4 A Kiegészítő garanciás díjakra a Garanciális szabályzat és bármely termékspecifikus garanciális
        feltétel vonatkozik.
      </p>
      <p>
        14.5 Ha Ön érvényesen lemondja vagy visszaküldi a terméket, mielőtt a Kiegészítő garancia megkezdődne,
        és a visszatérítést jogszabály írja elő vagy a MisaElectro jóváhagyja, a kapcsolódó Kiegészítő
        garanciás díj szintén visszatéríthető.
      </p>

      <h2>15. Visszatérítések</h2>
      <p>15.1 A visszatérítéseket a Visszaküldési, visszatérítési és lemondási szabályzatunknak megfelelően kezeljük.</p>
      <p>
        15.2 Ahol egy visszatérítést jóváhagynak, azt általában a rendeléshez használt eredeti fizetési módra
        utaljuk vissza.
      </p>
      <p>
        15.3 Általában nem tudunk visszatéríteni más kártyára, számlára, személynek vagy fizetési módra.
      </p>
      <p>
        15.4 A visszatérítés feldolgozását követően az Ön bankja, kártyakibocsátója vagy fizetési
        szolgáltatója további időt vehet igénybe, mire az összeg elérhetővé válik.
      </p>
      <p>
        15.5 A pénznemátváltási különbözeteket, a kártyakibocsátói díjakat, a külföldi tranzakciós díjakat és
        a banki díjakat a MisaElectro nem ellenőrzi, és azokat a MisaElectro nem téríti vissza.
      </p>
      <p>
        15.6 A vámokat, az importáfát, a helyi adókat, a közvetítői díjakat, a futárkezelési díjakat, a
        vámkezelési díjakat és egyéb helyi díjakat nem a MisaElectro számítja fel, és azokat a MisaElectro nem
        téríti vissza.
      </p>

      <h2>16. Chargebackek és fizetési viták</h2>
      <p>
        16.1 Ha problémája van egy rendeléssel, fizetéssel, szállítással, visszaküldéssel, visszatérítéssel
        vagy garanciális igénnyel, először vegye fel velünk a kapcsolatot az info@misaelectro.ro címen, hogy
        kivizsgálhassuk és megpróbálhassuk megoldani a problémát.
      </p>
      <p>
        16.2 Ha chargebacket, kártyavitát vagy fizetési vitát indít, előfordulhat, hogy kötelesek vagyunk
        információkat szolgáltatni fizetési szolgáltatónknak, bankunknak, a kártyahálózatnak, a
        csalásmegelőzési szolgáltatónak vagy a vitarendezési szolgáltatónak.
      </p>
      <p>
        16.3 Ezek az információk magukban foglalhatják a rendelés részleteit, a fizetési nyilvántartásokat, a
        nyomkövetési információkat, a kézbesítési visszaigazolást, az ügyfélkommunikációt, a visszatérítési
        nyilvántartásokat, a visszaküldés állapotát, a csalásszűrési információkat és a releváns bizonyítékokat.
      </p>
      <p>
        16.4 Fenntartjuk a jogot a chargebackek vagy fizetési viták megtámadására, ha úgy véljük, hogy a
        rendelést helyesen dolgoztuk fel, teljesítettük, szállítottuk, térítettük vissza, vagy egyébként
        szabályzatainknak megfelelően kezeltük.
      </p>
      <p>
        16.5 A csalárd, visszaélésszerű vagy ismételt chargebackek a jövőbeli rendelések törlését, a
        fiókhozzáférés korlátozását vagy – ahol a jog megengedi – további intézkedéseket eredményezhetnek.
      </p>

      <h2>17. Üzleti Ügyfelek fizetési feltételei</h2>
      <p>
        17.1 Az üzleti Ügyfeleknek a pénztárnál teljes összeget kell fizetniük, kivéve, ha kifejezetten
        írásban másként állapodunk meg.
      </p>
      <p>
        17.2 A MisaElectro nem kínál hitelfeltételeket, nyílt számlás vásárlást vagy halasztott fizetést az
        üzleti Ügyfeleknek, kivéve, ha ezt külön írásban jóváhagyta.
      </p>
      <p>
        17.3 Az üzleti Ügyfelek felelősek annak biztosításáért, hogy a megrendelések, a belső jóváhagyások, az
        áfa-/adóinformációk, a számlázási adatok és a szállítási adatok helyesek legyenek a fizetés
        teljesítése előtt.
      </p>
      <p>
        17.4 Az üzleti Ügyfél által leadott bármely rendelést üzleti vásárlásként kezelünk, kivéve, ha másként
        állapítjuk meg.
      </p>

      <h2>18. Szankciók, korlátozott fizetések és megfelelőség</h2>
      <p>
        18.1 Bármely fizetést vagy rendelést megtagadhatunk, törölhetünk, felfüggeszthetünk vagy blokkolhatunk,
        ha ez szankciók, exportellenőrzések, pénzügyi bűnözés elleni ellenőrzések, a fizetésfeldolgozó
        szabályai, a kártyahálózat szabályai, futárkorlátozások, vámkorlátozások vagy jogi kötelezettségek
        miatt szükséges vagy indokolt.
      </p>
      <p>
        18.2 Ön megerősíti, hogy nem áll szankciók hatálya alatt, nem tartózkodik korlátozott területen, és nem
        használja a Weboldalt olyan áruk vásárlására, amely az alkalmazandó jogszabályok, szankciók vagy
        exportellenőrzések megsértését jelentené.
      </p>
      <p>
        18.3 Nem vagyunk felelősek a szankciók, megfelelőségi ellenőrzések, a fizetésfeldolgozó
        követelményei, a kártyahálózat szabályai vagy jogi korlátozások által okozott késedelmekért, blokkolt
        fizetésekért, törölt rendelésekért, visszatartott tranzakciókért vagy fizetési hibákért.
      </p>

      <h2>19. A jelen Fizetési szabályzat módosításai</h2>
      <p>
        19.1 Időről időre frissíthetjük ezt a Fizetési szabályzatot a fizetési módok, pénznemek, pénztári
        folyamatok, fizetési szolgáltatók, csalásellenőrzések, jogi követelmények, adószabályok vagy üzleti
        műveletek változásainak tükrözése érdekében.
      </p>
      <p>
        19.2 A jelen Szabályzatnak a rendelése leadásának időpontjában hatályos változata vonatkozik az adott
        rendelésre, kivéve, ha egy módosítást jogszabály ír elő, vagy az egy alkalmazandó javításhoz
        kapcsolódik.
      </p>
      <p>
        19.3 Amikor frissítjük ezt a Szabályzatot, az oldal tetején frissítjük az &bdquo;Utolsó
        frissítés&rdquo; dátumát.
      </p>

      <h2>20. Kapcsolattartási információk</h2>
      <p>
        Ha bármilyen kérdése van a fizetésekkel, számlázással, számlákkal, visszatérítésekkel, sikertelen
        fizetésekkel vagy fizetési vitákkal kapcsolatban, kérjük, lépjen kapcsolatba velünk:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
  bg: (
    <PolicyLayout title="Политика за плащане" lastUpdated="29 май 2026 г.">
      <p>
        Тази Политика за плащане обяснява как плащанията се приемат, обработват, проверяват, възстановяват и
        обработват за покупки, извършени чрез www.misaelectro.ro.
      </p>
      <p>Уебсайтът се управлява от:</p>
      <ContactBlock />
      <p>
        В настоящата Политика &bdquo;MisaElectro&rdquo;, &bdquo;ние&rdquo;, &bdquo;нас&rdquo; или
        &bdquo;наш&rdquo; означава MISARELIANA S.R.L.. &bdquo;Клиент&rdquo;, &bdquo;Вие&rdquo; или
        &bdquo;Ваш&rdquo; означава всяко физическо лице или предприятие, което подава поръчка чрез Уебсайта.
      </p>
      <p>
        Тази Политика за плащане следва да се чете заедно с нашите Общи условия, Политиката за доставка,
        Политиката за връщане и възстановяване на средства, Политиката за поверителност, Политиката за
        бисквитки и Гаранционната политика.
      </p>

      <h2>1. Обхват на настоящата Политика</h2>
      <p>
        1.1 Настоящата Политика се прилага за всички плащания, извършени чрез Уебсайта за физически стоки,
        такси за доставка, опции за допълнителна гаранция и всякакви други платени услуги или такси,
        показани при плащане.
      </p>
      <p>
        1.2 MisaElectro продава електрически продукти, електрически материали, аксесоари за окабеляване,
        продукти, свързани с осветлението, монтажни компоненти, продукти за разпределение и защита на
        веригите, контакти, ключове, кабели, монтажни аксесоари и свързани стоки.
      </p>
      <p>
        1.3 С подаването на поръчка и предоставянето на данни за плащане Вие се съгласявате с настоящата
        Политика за плащане.
      </p>

      <h2>2. Приемани валути</h2>
      <p>2.1 Уебсайтът може да показва и приема плащания в следните валути:</p>
      <ul>
        <li>EUR</li>
        <li>RON</li>
        <li>HUF</li>
      </ul>
      <p>
        2.2 Валутата, достъпна за Вас, може да зависи от Вашето местоположение, избраните настройки на
        магазина, наличността на доставчика на плащания, конфигурацията на плащането или функционалността
        на Уебсайта.
      </p>
      <p>
        2.3 Крайната валута и дължимата сума ще бъдат показани при плащане, преди да завършите поръчката си.
      </p>
      <p>
        2.4 Ако Вашата карта или банкова сметка е в различна валута от валутата при плащане, издателят на
        картата или банката Ви може да приложи свой собствен обменен курс, такса за конвертиране или такса
        за чуждестранна транзакция.
      </p>
      <p>
        2.5 MisaElectro не контролира обменните курсове, банковите такси за конвертиране, таксите на издателя
        на картата или таксите за чуждестранни транзакции.
      </p>

      <h2>3. Цени и ДДС</h2>
      <p>
        3.1 Цените на продуктите, показани на Уебсайта, включват ДДС, когато е приложимо, освен ако ясно не е
        посочено друго.
      </p>
      <p>3.2 Крайната сума на поръчката, показана при плащане, може да включва:</p>
      <ul>
        <li>цена на продукта;</li>
        <li>ДДС, когато е приложимо;</li>
        <li>такси за доставка;</li>
        <li>платени опции за Допълнителна гаранция, когато са избрани;</li>
        <li>отстъпки или промоционални кодове, когато са валидни;</li>
        <li>всякакви други такси, ясно показани преди плащане.</li>
      </ul>
      <p>3.3 Цените могат да се променят по всяко време преди подаване на поръчка.</p>
      <p>
        3.4 Промените в цените няма да засегнат поръчки, които вече са приети от MisaElectro, освен когато е
        налице очевидна грешка в цената, валутата, данъка, отстъпката или техническа грешка.
      </p>
      <p>
        3.5 Ако грешка в цената или плащането бъде установена, след като сте подали поръчка, можем да се
        свържем с Вас, за да потвърдим дали желаете да продължите с коригираната цена, или да анулирате
        засегнатата поръчка.
      </p>

      <h2>4. Приемани методи на плащане</h2>
      <p>4.1 MisaElectro приема сигурни плащания с карта, използвайки:</p>
      <ul>
        <li>Visa</li>
        <li>Mastercard</li>
      </ul>
      <p>
        4.2 Други методи на плащане не се приемат, освен ако не са изрично показани при плащане или
        договорени писмено от MisaElectro.
      </p>
      <p>
        4.3 Понастоящем не предлагаме плащане при доставка, плащане по сметка, условия за отворен кредит,
        плащане с чек, плащане с криптовалута или плащане на вноски, освен ако това не е ясно посочено на
        Уебсайта или договорено отделно в писмена форма.
      </p>
      <p>4.4 Плащането трябва да бъде завършено при плащане, преди поръчката да бъде обработена.</p>

      <h2>5. Обработка на плащания</h2>
      <p>5.1 Плащанията се обработват от сигурни доставчици на плащания – трети страни.</p>
      <p>
        5.2 Когато предоставите данни за плащане, доставчикът на плащания може да провери, оторизира,
        удостовери, одобри, отхвърли или прегледа транзакцията.
      </p>
      <p>
        5.3 MisaElectro не гарантира, че Вашето плащане ще бъде прието. Одобрението на плащането зависи от
        издателя на картата Ви, банката, доставчика на плащания, проверките за измами, изискванията за
        удостоверяване, наличните средства, лимитите на транзакциите и други фактори извън нашия контрол.
      </p>
      <p>
        5.4 Вашата поръчка няма да бъде обработена за изпълнение, докато плащането не бъде успешно оторизирано
        или получено.
      </p>
      <p>
        5.5 Получаването на потвърждение на поръчка или потвърждение на плащане не винаги означава, че Вашата
        поръчка е приета. Приемането на поръчката се урежда от нашите Общи условия.
      </p>

      <h2>6. Сигурност на картата и данни за плащане</h2>
      <p>6.1 MisaElectro приема сигурността на плащанията сериозно.</p>
      <p>
        6.2 Плащанията с карта се обработват чрез сигурни доставчици на плащания – трети страни. MisaElectro
        не съхранява пълния номер на картата Ви, пълния защитен код на картата или пълните удостоверителни
        данни на картата в собствените си системи.
      </p>
      <p>6.3 Може да получим ограничена информация, свързана с плащането, от доставчиците на плащания, като например:</p>
      <ul>
        <li>статус на плащането;</li>
        <li>референтен номер на транзакцията;</li>
        <li>идентификатор на доставчика на плащания;</li>
        <li>марка на картата;</li>
        <li>последните четири цифри на картата, когато са предоставени;</li>
        <li>статус на възстановяването;</li>
        <li>информация за chargeback или спор;</li>
        <li>резултат от проверката за измами.</li>
      </ul>
      <p>
        6.4 Доставчиците на плащания могат да използват сигурно удостоверяване, криптиране, предотвратяване на
        измами и контроли за сигурност на плащанията.
      </p>
      <p>
        6.5 Не трябва да опитвате да извършвате плащане, използвайки карта, сметка или метод на плащане, който
        не сте упълномощени да използвате.
      </p>

      <h2>7. Силно удостоверяване на клиента и проверка</h2>
      <p>
        7.1 Някои плащания с карта може да изискват допълнително удостоверяване, като 3D Secure, еднократни
        пароли, одобрение чрез банково приложение или други стъпки за проверка, изисквани от Вашата банка,
        издател на картата или доставчик на плащания.
      </p>
      <p>
        7.2 Ако удостоверяването не бъде завършено успешно, плащането може да бъде отхвърлено или поръчката
        може да не бъде обработена.
      </p>
      <p>
        7.3 Може също да поискаме допълнителна информация, когато е необходимо, за да проверим данните за
        фактуриране, данните за доставка, данните за предприятието, легитимността на поръчката, риска от
        измама или изискванията за съответствие.
      </p>
      <p>
        7.4 Непредоставянето на исканата информация за проверка може да доведе до забавяне или анулиране на
        поръчката.
      </p>

      <h2>8. Неуспешни, отхвърлени или чакащи плащания</h2>
      <p>
        8.1 Ако Вашето плащане бъде отхвърлено, неуспешно, изтече, бъде сторнирано или остане в изчакване,
        Вашата поръчка може да не бъде обработена.
      </p>
      <p>
        8.2 MisaElectro не носи отговорност за неуспешни плащания, причинени от Вашата банка, издателя на
        картата, доставчика на плащания, недостатъчни средства, неправилни данни за картата, неуспешно
        удостоверяване, лимити на транзакциите, мрежови проблеми или контроли срещу измами.
      </p>
      <p>
        8.3 Ако плащането е неуспешно, може да се наложи да опитате отново, да използвате друга приета карта,
        да се свържете с банката си или да се свържете с нас за поддръжка.
      </p>
      <p>
        8.4 Запазваме си правото да анулираме неплатени, неуспешни, чакащи, съмнителни или непълни поръчки.
      </p>

      <h2>9. Предотвратяване на измами и прегледи на плащания</h2>
      <p>
        9.1 За да защитим клиентите, MisaElectro, доставчиците на плащания и картовите мрежи, транзакциите
        могат да бъдат проверявани за измами, злоупотреба, неоторизирана дейност, риск от санкции и опасения
        за сигурността на плащанията.
      </p>
      <p>
        9.2 Може да забавим, анулираме, отхвърлим или поискаме допълнителна проверка за поръчки, които
        изглеждат съмнителни или високорискови.
      </p>
      <p>9.3 Примери за индикатори за риск могат да включват:</p>
      <ul>
        <li>несъответствие между информацията за фактуриране и доставка;</li>
        <li>необичайна стойност или количество на поръчката;</li>
        <li>използване на множество неуспешни опити за плащане;</li>
        <li>предполагаемо неоторизирано използване на карта;</li>
        <li>високорискова дестинация или адрес за препращане;</li>
        <li>ограничена или санкционирана дестинация;</li>
        <li>необичайни данни за IP, местоположение или устройство;</li>
        <li>предишна история на chargeback или измами;</li>
        <li>непоследователна информация за клиента.</li>
      </ul>
      <p>
        9.4 Не сме длъжни да изпълняваме поръчка, за която основателно смятаме, че може да е измамна,
        неоторизирана, незаконна, злоупотребяваща или несъответстваща.
      </p>

      <h2>10. Данни за фактуриране и фактури</h2>
      <p>10.1 Вие носите отговорност за предоставянето на точна информация за фактуриране при плащане.</p>
      <p>
        10.2 Ако купувате като предприятие, следва да предоставите точно наименование на предприятието, адрес
        за фактуриране, данни за ДДС/данъци и всякаква друга информация, необходима за фактуриране.
      </p>
      <p>
        10.3 Когато е приложимо, MisaElectro може да издава потвърждения на поръчки, потвърждения на плащания,
        разписки, фактури с ДДС или търговски фактури.
      </p>
      <p>
        10.4 Може да не сме в състояние да променим данните на фактурата, след като поръчката е обработена,
        особено когато фактурите вече са генерирани, подадени за счетоводство или използвани за митническа
        документация.
      </p>
      <p>
        10.5 Бизнес клиентите носят отговорност да проверят дали данните за фактуриране са правилни, преди да
        завършат плащането.
      </p>

      <h2>11. Такси за доставка и безплатна доставка</h2>
      <p>11.1 Таксите за доставка, когато е приложимо, се показват при плащане преди плащането.</p>
      <p>
        11.2 Освен ако не е посочено друго, отговарящите на условията поръчки се ползват от безплатна доставка,
        когато междинната сума на продуктите надвишава:
      </p>
      <ul>
        <li>&euro;100 за поръчки в EUR;</li>
        <li>RON 500 за поръчки в RON;</li>
        <li>HUF 40,000 за поръчки в HUF.</li>
      </ul>
      <p>
        11.3 Прагът за безплатна доставка се изчислява след отстъпки и преди всякакви мита, ДДС при внос,
        местни данъци, брокерски такси или други такси на дестинацията.
      </p>
      <p>
        11.4 Безплатната доставка може да не се прилага за всички дестинации, извънгабаритни стоки, тежки
        стоки, ограничени стоки, артикули по специална поръчка, отдалечени райони или продукти, изискващи
        специална обработка.
      </p>

      <h2>12. Международни плащания, мита и вносни такси</h2>
      <p>12.1 MisaElectro изпраща поръчки от Обединеното кралство.</p>
      <p>
        12.2 За поръчки, доставяни извън Обединеното кралство, Вашата поръчка може да подлежи на митническо
        оформяне, вносни мита, ДДС при внос, местни данъци, брокерски такси, такси за обработка от куриера,
        такси за митническо оформяне или други местни такси.
      </p>
      <p>
        12.3 Освен ако изрично не е посочено друго при плащане, такива митнически и вносни такси не са
        включени в цената на продукта, цената на доставката или плащането, събрано от MisaElectro.
      </p>
      <p>
        12.4 Вие носите отговорност за заплащането на всякакви мита, ДДС при внос, данъци, брокерски такси,
        такси за обработка и местни такси, наложени в държавата на дестинация.
      </p>
      <p>
        12.5 MisaElectro не контролира митническите органи, митническите забавяния, начисляването на вносни
        данъци, таксите за оформяне от куриера или местните такси.
      </p>
      <p>
        12.6 Неплащането на митнически или вносни такси може да доведе до забавяне на доставката, връщане на
        пратката, изоставяне, унищожаване, изземване или допълнителни разходи.
      </p>

      <h2>13. Отстъпки, промоционални кодове и грешки в цените</h2>
      <p>
        13.1 Промоционалните кодове, отстъпките, офертите и специалните цени могат да подлежат на допълнителни
        условия, срокове на валидност, правила за допустимост, минимални стойности на поръчката, изключения
        на продукти или ограничения на дестинацията.
      </p>
      <p>
        13.2 Промоционалните кодове трябва да бъдат приложени преди завършване на плащането. Не сме длъжни да
        прилагаме промоционален код със задна дата, след като поръчката е подадена.
      </p>
      <p>13.3 Отстъпките не могат да бъдат заменяни срещу пари в брой.</p>
      <p>
        13.4 Може да откажем, анулираме или сторнираме отстъпка, когато тя е използвана измамно, неправилно,
        злоупотребяващо, в нарушение на нейните условия или поради техническа грешка.
      </p>
      <p>
        13.5 Ако продукт, такса за доставка, гаранционна опция, сума във валута, отстъпка или обща сума на
        поръчката е явно неправилна поради техническа или административна грешка, може да анулираме поръчката
        или да се свържем с Вас, за да потвърдим дали желаете да продължите с коригираната цена.
      </p>

      <h2>14. Плащания за Допълнителна гаранция</h2>
      <p>14.1 Когато са налични, платените опции за Допълнителна гаранция могат да бъдат избрани при плащане.</p>
      <p>14.2 Освен ако не е посочено друго, цената на Допълнителната гаранция се изчислява, както следва:</p>
      <table>
        <thead>
          <tr>
            <th>Опция за Допълнителна гаранция</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>+1 година Допълнителна гаранция</td><td>10% от цената на продукта, минимум &euro;6.99 / &pound;6.99 / $6.99</td></tr>
          <tr><td>+2 години Допълнителна гаранция</td><td>16% от цената на продукта, минимум &euro;9.99 / &pound;9.99 / $9.99</td></tr>
          <tr><td>+3 години Допълнителна гаранция</td><td>22% от цената на продукта, минимум &euro;12.99 / &pound;12.99 / $12.99</td></tr>
        </tbody>
      </table>
      <p>14.3 Таксите за Допълнителна гаранция са дължими при плащане заедно с цената на продукта.</p>
      <p>
        14.4 Таксите за Допълнителна гаранция подлежат на Гаранционната политика и на всякакви специфични за
        продукта гаранционни условия.
      </p>
      <p>
        14.5 Ако валидно анулирате или върнете продукта, преди Допълнителната гаранция да започне, и
        възстановяване на средства се изисква от закона или е одобрено от MisaElectro, свързаната такса за
        Допълнителна гаранция също може да бъде възстановена.
      </p>

      <h2>15. Възстановяване на средства</h2>
      <p>15.1 Възстановяванията на средства се обработват в съответствие с нашата Политика за връщане, възстановяване и анулиране.</p>
      <p>
        15.2 Когато възстановяване на средства е одобрено, обикновено ще го издаваме към първоначалния метод
        на плащане, използван за поръчката.
      </p>
      <p>
        15.3 Обикновено не можем да възстановяваме средства към различна карта, сметка, лице или метод на
        плащане.
      </p>
      <p>
        15.4 След като обработим възстановяване на средства, Вашата банка, издател на картата или доставчик на
        плащания може да се нуждае от допълнително време, за да предостави средствата.
      </p>
      <p>
        15.5 Разликите при конвертирането на валута, таксите на издателя на картата, таксите за чуждестранни
        транзакции и банковите такси не се контролират от MisaElectro и не подлежат на възстановяване от
        MisaElectro.
      </p>
      <p>
        15.6 Митата, ДДС при внос, местните данъци, брокерските такси, таксите за обработка от куриера,
        таксите за митническо оформяне и други местни такси не се начисляват от MisaElectro и не подлежат на
        възстановяване от MisaElectro.
      </p>

      <h2>16. Chargebackове и спорове за плащане</h2>
      <p>
        16.1 Ако имате проблем с поръчка, плащане, доставка, връщане, възстановяване на средства или
        гаранционна претенция, следва първо да се свържете с нас на info@misaelectro.ro, за да можем да
        разследваме и да се опитаме да разрешим проблема.
      </p>
      <p>
        16.2 Ако откриете chargeback, спор за карта или спор за плащане, може да бъдем задължени да
        предоставим информация на нашия доставчик на плащания, банка, картова мрежа, доставчик за
        предотвратяване на измами или доставчик за разрешаване на спорове.
      </p>
      <p>
        16.3 Тази информация може да включва данни за поръчката, записи за плащания, информация за
        проследяване, потвърждение на доставката, комуникации с клиента, записи за възстановяване на средства,
        статус на връщането, информация от проверката за измами и релевантни доказателства.
      </p>
      <p>
        16.4 Запазваме си правото да оспорим chargebackове или спорове за плащане, когато смятаме, че поръчката
        е била правилно обработена, изпълнена, доставена, възстановена или по друг начин обработена в
        съответствие с нашите политики.
      </p>
      <p>
        16.5 Измамни, злоупотребяващи или повтарящи се chargebackове могат да доведат до анулиране на бъдещи
        поръчки, ограничаване на достъпа до акаунта или до допълнителни действия, когато законът позволява.
      </p>

      <h2>17. Условия за плащане за Бизнес клиенти</h2>
      <p>
        17.1 Бизнес клиентите трябва да платят изцяло при плащане, освен ако изрично не се договорим за друго
        в писмена форма.
      </p>
      <p>
        17.2 MisaElectro не предлага кредитни условия, покупки по открита сметка или отложено плащане на Бизнес
        клиенти, освен ако това не е одобрено отделно в писмена форма.
      </p>
      <p>
        17.3 Бизнес клиентите носят отговорност да гарантират, че поръчките, вътрешните одобрения, информацията
        за ДДС/данъци, данните за фактуриране и данните за доставка са правилни, преди да бъде извършено
        плащането.
      </p>
      <p>
        17.4 Всяка поръчка, подадена от Бизнес клиент, се третира като бизнес покупка, освен ако не определим
        друго.
      </p>

      <h2>18. Санкции, ограничени плащания и съответствие</h2>
      <p>
        18.1 Може да откажем, анулираме, спрем или блокираме всяко плащане или поръчка, когато това е
        необходимо или уместно поради санкции, контрол на износа, контрол на финансовите престъпления,
        правила на обработващия плащания, правила на картовата мрежа, куриерски ограничения, митнически
        ограничения или законови задължения.
      </p>
      <p>
        18.2 Вие потвърждавате, че не сте обект на санкции, не се намирате в ограничена територия и не
        използвате Уебсайта за закупуване на стоки в нарушение на приложимите закони, санкции или контрол на
        износа.
      </p>
      <p>
        18.3 Ние не носим отговорност за забавяния, блокирани плащания, анулирани поръчки, задържани транзакции
        или неуспешни плащания, причинени от санкции, проверки за съответствие, изисквания на обработващия
        плащания, правила на картовата мрежа или законови ограничения.
      </p>

      <h2>19. Промени в настоящата Политика за плащане</h2>
      <p>
        19.1 Може периодично да актуализираме тази Политика за плащане, за да отразим промени в методите на
        плащане, валутите, процесите на плащане, доставчиците на плащания, контролите срещу измами, законовите
        изисквания, данъчните правила или бизнес операциите.
      </p>
      <p>
        19.2 Версията на настоящата Политика, действаща към момента на подаване на Вашата поръчка, ще се
        прилага за тази поръчка, освен ако промяна не се изисква от закона или не се отнася до корекция, която
        трябва да бъде приложена.
      </p>
      <p>
        19.3 Когато актуализираме тази Политика, ще преразгледаме датата &bdquo;Последна актуализация&rdquo; в
        горната част на страницата.
      </p>

      <h2>20. Информация за контакт</h2>
      <p>
        Ако имате въпроси относно плащания, фактуриране, фактури, възстановяване на средства, неуспешни
        плащания или спорове за плащане, моля, свържете се с нас:
      </p>
      <ContactBlock />
    </PolicyLayout>
  ),
};

export default async function PaymentPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return content[(locale as Locale)] ?? content.en;
}
