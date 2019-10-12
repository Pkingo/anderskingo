import React from 'react';
import Hellas from '../../assets/hellas5.jpg';

const Kulturrejser = () => (
  <div className="kulturrejser-container">
    <h1>Kulturrejse: Tilblivelsen af den europæiske kultur</h1>
    <div className="kulturrejse-left">
      <h6>HELLAS 2020</h6>
      <p>
        Fra lørdag den 6. juni til onsdag den 17. juni Tolv dage i vor kulturs
        vugge rejseleder og arrangør Anders Kingo i samarbejde med EUROLAND
        TRAVEL, Athen.
      </p>
      <p>
        Deltag i en uforglemmelig rejse til vores kulturs vugge, hvor vi følger
        og forfølger de to kulturer – den græske og den jødisk-kristne – der har
        skabt den europæiske kultur. Som optakt til turen afholder jeg en
        studiekreds, i Helsingør og i Jylland (hvis interesse derfor), hvor jeg
        gennemgår den græske mytologi og historie og nogle hovedretninger inden
        for kunst, litteratur og filosofi. Også Paulus’ rejser til Filippi,
        Thessaloniki, Veria (Berøa), Korinth og Athen skildres. Desuden
        foretager jeg en detaljeret gennemgang af turen.
      </p>
      <p>
        <strong>Pris:</strong> 15.500 kr. og inkluderer: <br />
        Fly Kastrup-Thessaloniki og Athen-Kastrup. Bus, guidning og rejseleder.
        Samtlige entréer. Overnatning på et 5-stjernet og seks 4-stjernede
        hoteller inkl. morgenmad og aftensmad. Der overnattes på
        dobbeltværelser. Tillæg for enkeltværelse 3.500 kr.
      </p>
      <p>
        <strong>Depositum:</strong> kr.5.000 ved tilmelding. Restbeløbet senest
        otte uger før afrejse.
        <br />
        <strong>Indbetaling:</strong> Nordea, reg.nr. 2720, konto 4255 616 949.
        <br />
        <strong>Prisen inkluderer ikke:</strong> Drikkevarer, rejseforsikring,
        afbestillingsforsikring.
        <br />
        <strong>Ekstra:</strong> mine græske venner og jeg arbejder ihærdigt på
        at få indlagt i programmet: et klassisk græsk drama i et antikt
        amfiteater og vinsmagning på en vingård (mod ekstrabetaling).
        <br />
        <strong>Tilmelding:</strong> Anders Kingo, Hollandskevej 1, 3000
        Helsingør, telefon 49 21 23 45, mail ank@km.dk Tilmeldingsblanket kan
        også hentes på min hjemmeside anderskingo.dk
      </p>
    </div>
    <img src={Hellas} alt="Hellas" className="kulturrejse-image" />
  </div>
);

export default Kulturrejser;
