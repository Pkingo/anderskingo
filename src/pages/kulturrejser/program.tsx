import React from 'react';
import Hellas2 from '../../assets/hellas2.jpg';
import Hellas3 from '../../assets/hellas3.jpg';
import Hellas4 from '../../assets/hellas4.jpg';
import { Link } from 'react-router-dom';

const Program = () => (
  <React.Fragment>
    <div className="kulturrejser-program">
      <h1>Program 2018</h1>
      <div className="kulturrejser-left-section">
        <h6>Første dag (29. august)</h6>
        <p>
          Kastrup (afgang 06.15) - Thessaloniki (ankomst 12.10) – Kavala
          Rejsedag, der slutter med indkvartering, afslapning og middag på Hotel
          Lucy Kavala.
        </p>
        <h6>Anden dag (30. august) </h6>
        <p>
          Filippi – Thessaloniki – Veria
          <br />
          Kavala hed i antikken Neapolis og var havneby til Filippi, der
          anlagdes af Alexander den Stores far, Filip II. Her døbte Paulus den
          første europæer med den kristne dåb. – Gennem en storslået natur kører
          vi tværs over Chalkidiki til Thessaloniki, der er Grækenlands
          næststørste by. Vi hører byens historie, besøger Demetrios Kirken og
          får måske tid til en slentretur ned ad byens berømte 10 km lange
          havnepromenade. Herefter kører vi videre til Veria (Berøa), hvor vi
          indkvarteres på Hotel Aiges Melathron.
        </p>
        <h6>Tredje dag (31. august)</h6>
        <p>
          Vergina – Kalambaka
          <br />I Vergina fandt en græsk arkæolog for ca. 50 år siden Filip II’s
          imponerende gravkammer. På stedet er der nu bygget et lige så
          imponerende museum. Efter at have set dette kører vi videre sydpå,
          passerer på afstand bjerget Olympos, gudernes hovedsæde, hvorefter vi
          kører stik vest ind i landet til byen Kalambaka og indkvarteres hos
          den kære Theodora på Hotel Kaiki. Får vi tid, besøger vi allerede ved
          ankomsten »de svævende klostre«, Meteora. Når vi det ikke denne
          fredag, begynder lørdagen med et besøg på et af disse ubeskriveligt
          smukke klostre.
        </p>
        <img src={Hellas2} alt="Hellas" className="kulturrejser-image" />
        <h6>Fjerde dag (1. september)</h6>
        <p>
          Delphi – Itea
          <br />
          På vej til orakelbyen Delphi gør vi holdt ved Thermopylæ, hvor
          spartanerkongen Leonidas i 480 f. Kr. sammen med sine 300 mænd modigt
          holdt stand nogle dage mod perserkongen Xerxes. Derefter kravler vores
          bus op af nordsiden af bjergmassivet Parnassos, på hvis sydside Delphi
          ligger. Efter frokost besøger vi tempelplads, orakel, stadion og
          museum i Delphi. Derefter kører vi de 16 km ned til havnebyen Itea ved
          den korintiske bugt. Her indkvarteres vi på Hotel Nafsika.
        </p>
        <img src={Hellas3} alt="Hellas" className="kulturrejser-image" />
        <h6>Femte dag (2. september)</h6>
        <p>
          Nafpaktos - Patras – Olympia
          <br />
          Efter morgenmaden kører vi vestpå langs den korintiske bugt gennem
          Nafpaktos (hvor den engelske digter Lord Byron boede), over den nye
          bro til Peloponnes til byen Patras, hvor vi besøger Andreas Kirken,
          bygget dér, hvor apostlen Andreas led martyrdøden. Denne dag er en
          søndag, og vi kan muligvis nå at deltage i sidste del dagens højmesse.
          Derefter kører vi de 135 km ned til Olympia, hvor en perle af et hotel
          venter os med spænding: Olympion Asty.
        </p>
      </div>
      <div className="kulturrejser-right-section">
        <h6>Sjette dag (3. september)</h6>
        <p>
          Vi besøger den olympiske tempelplads og det olympiske stadion med
          tilhørende museum - og får endnu en nat i skønhed og udsøgt pleje hos
          familien Spiliopoulos på Hotel Olympion Asty
        </p>
        <h6>Syvende dag (4. september)</h6>
        <p>
          Mystras – Tolo
          <br />
          Tidligt om morgenen fortsætter vi mod syd, passerer industribyen
          Kalamata (kendt for oliven og cigaretter) og kort før Sparta gør vi
          holdt i den uddøde spøgelsesby Mistras. I kølvandet på korstogene
          blomstrede den byzantinske kultur her og Mistras blev et magtfuldt
          hovedsæde med 40.000 indbyggere, et palads, et kloster og 23 kirker.
          Alt dette er usædvanligt velbevaret, men bebos i dag kun af 2 nonner
          og 3 katte. Efter frokost i Sparta kører vi ned mod den argoiske bugt,
          passerer Nafplion (det moderne Grækenlands første hovedstad) og
          ankommer til turistbyen Tolo, hvor den forførisk charmerende Demitris
          venter os på Hotel Tolo.
        </p>
        <h6>Ottende dag (5. september)</h6>
        <p>
          Epidauros – Nafplion
          <br />
          Først kører vi de 25 km til Epidauros, der i antikken var et
          helsecenter. Her ligger det mest velbevarede antikke amfiteater, der
          stadig er i brug. Et fint lille museum beretter om datidens lægekunst,
          og Hippokrates, lægekunstens fader, spiller naturligvis en afgørende
          rolle. Lige så naturligt er stedets tempel indviet til lægekunstens
          gud: Asklépios. Eftermiddagen tilbringes i den pittoreske by Nafplion,
          hvor vi blandt andet skal se byens stolthed: en veneziansk borg.
          Derefter venter os atter Demitris’ charme.
        </p>
        <h6>Niende dag (6. september)</h6>
        <p>
          Så går turen til Mykene, hvor vi skal se Agamemnons borg, og på vejen
          mod Athen gør vi holdt i det klassiske Korinth og ved den berømte
          korintiske kanal. I Athen indkvarteres vi i bymidten på Hotel
          Parthenon, lige neden for antikkens Parthenon.
        </p>
        <img src={Hellas4} alt="Parthenon" className="kulturrejser-image" />
        <h6>Tiende dag (7. september)</h6>
        <p>
          Athen
          <br />I juni 2009 indviedes et fabelagtigt smukt og pædagogisk
          informativt museum for Akropolis, lige ved siden af vores hotel. Her
          begynder vi dagen og vandrer derefter den bevægende tur op ad
          Akropolisklippen og ser – et underværk! På vejen ned fra Akropolis gør
          vi holdt ved Areopagos og hører den berømte tale, som Paulus holdt
          dér. Derefter passerer vi agoraen (det antikke bytorv) og ser
          Hefaistos Templet, som er Hellas’ bedst bevarede, ja, næsten intakte
          tempel. Vores hotel er beliggende tæt på alle disse herligheder, og
          Athens gamle bydel Plaka ligger kun få hundrede meter derfra.
        </p>
        <h6>Elvte dag (8. september)</h6>
        <p>
          Nationalmuseet står øverst på dagsordenen denne dag, men vi får også
          tid til at besøge det imponerende stadion, der blev genbygget, da De
          olympiske Lege genoptoges i 1896. Vi passerer kongeslottet, standser
          på Syntagma Pladsen og overværer det spektakulære vagtskifte foran
          parlamentsbygningen. Om aftenen mødes vi på en underskøn restaurant og
          runder turen af i selskab med de græske venner.
        </p>
        <h6>Tolvte dag (9. september) </h6>
        <p>Athen (13.40) – Kastrup (15.55). Hjemrejsedag</p>
        <h6>
          NB! Tilmelding påtilmeldingssiden
          <Link to="/kulturrejser/program"> her</Link>.
        </h6>
      </div>
    </div>
  </React.Fragment>
);

export default Program;
