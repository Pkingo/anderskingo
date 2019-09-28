import React from 'react';
import Kierkegaard from '../../assets/folkelige kierkegaard.jpg';

const FolkeligeForedrag = () => (
  <div className="foredrag-grid">
    <h1 className="foredrag-title">Den folkelige og enfoldige Kierkegaard</h1>
    <div className="foredrag-left-paragraf">
      <p>
        Mange har sikkert både forsøgt og opgivet at læse Søren Kierkegaard. Man
        har forsøgt, fordi man havde en fornemmelse af, at der i hans værker
        blev sagt noget uhyre væsentligt om det at være menneske. Og man har
        måske opgivet, fordi tænkemåde, sprog og stil forekom at være en
        uoverstigelig hindring for at komme ind i hans tankeverden.
      </p>
      <p>
        Kierkegaard er imidlertid langtfra umulig at forstå. Tværtimod! Selve
        hans grundan¬liggende er ikke - intellektuelt - vanskeligt at forstå,
        men det er en provokerende udfordring til enhver, som vil følge ham i
        hans analyser af skyldens, frihedens, ansvarets og tilgivelsens problem.
        Og hans forfatterskab er i sandhed opbyggeligt for enhver, der kan høre
        hans forkyndelses kald til dette at være menneske.
      </p>
      <p>
        Kierkegaard ville forkynde kristendom for sig selv og sine landsmænd.
        Derfor foretager han disse dybe analyser af, hvad det vil sige at være
        menneske, og derfor meddeler han sig i store dele af sit forfatterskab
        ikke til eksperter, men til alle, for hvem det at være menneske ikke er
        et ligegyldigt foretagende, men (som han siger) et saligt anliggende.
        Den eneste forudsætning for at forstå ham er, at man har gjort nogle
        erfaringer med sig selv. "Jeg kan egentlig ikke lære dig noget", siger
        han til sin læser, "men har livet lært dig lektien, kunne vi jo
        samtale".
      </p>
      <p>sognepræst, dr.theol.</p>
      <p>Anders Kingo</p>
    </div>
    <img
      className="foredrag-right-paragraf foredrag-image"
      src={Kierkegaard}
      alt="Kierkegaard"
    />
  </div>
);

export default FolkeligeForedrag;
