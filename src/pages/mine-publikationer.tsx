import React from 'react';

type Publication = { titel: string; text: string };

const books: Publication[] = [
  {
    titel: '1987',
    text: `Den opbyggelige tal. En systematisk-teologisk studie over Søren Kierkegaards opbyggelige forfatterskab. <br /> Gads Forlag, København`
  },
  {
    titel: '1988',
    text: `Den pseudonyme tale. En studie over eksistensanalysens kategori i Søren Kierkegaards forfatterskab. <br /> Gads Forlag, København`
  },
  {
    titel: '1989',
    text: `Hosekræmmerens Søn. En enfoldig bog om Søren Kierkegaard eller en bog om den enfoldige Søren Kierkegaard. <br /> Sammen med Sten-O. B. Vedstesen Poul Kristensens. <br /> Forlag, Herning. 2.opl. Gyldendal, København`
  },
  {
    titel: '1995',
    text: `Analogiens teologi. En dogmatisk studie over dialektikken i Søren Kierkegaards opbyggelige og pseudonyme forfatterskab (disputats). <br /> Gads Forlag, København`
  },
  {
    titel: '1987',
    text: `Den opbyggelige tal. En systematisk-teologisk studie over Søren Kierkegaards opbyggelige forfatterskab. <br /> Gads Forlag, København`
  },
  {
    titel: '1999',
    text: `I ansvar og tro. <br /> Sammen med Sten Vedstesen og Leif Grane. Reitzels. <br /> Forlag, København`
  }
];

const articles: Publication[] = [
  {
    titel: '1985',
    text: `Den opbyggelige tale. Om Søren Kierkegaards ”Atten opbyggelige Taler” og deres status i forfatterskabet. <br />Dansk teologisk Tidsskrift`
  },
  {
    titel: '1986',
    text: `Sprogets mesterskab: Tænk på din Skaber i din ungdom. <br />Festskrift til Johannes Sløk`
  },
  {
    titel: '1995',
    text: `Mod Gud altid at have uret. <br />Fønix`
  },
  {
    titel: '1996',
    text: `Den søgende eremit. <br />Kritisk forum for praktisk teologi`
  },
  {
    titel: '1997',
    text: `Subjektets forhold er knuden. <br />Fønix<br /><br />Deus creat ex nihilo. Om filosofisk og teologisk eksistens<br />Menighedsfakultetets Studenterblad, Århus`
  },
  {
    titel: '1998',
    text: `Der Tod als heilbringend durch den Ernst des Glaubens<br />Martin-Luther-Verlag Erlangen<br /><br />Studier i stadier: Gives der er teleologisk suspension af alle stadier?<br />Reitzels Forlag, København`
  },
  {
    titel: '1999',
    text: `Etikerens brev. Ligevægten mellem det æstetiske og etiske i personlighedens udarbejdelse (forord). <br />DET lille FORLAG, Frederiksberg`
  },
  {
    titel: '2000',
    text: `Jeg tror at jeg tror (Gianni Vattimo). <br />Fønix`
  },
  {
    titel: '2001',
    text: `Kierkegaard og det opbyggelige. <br />Forlaget Philosophia`
  },
  {
    titel: '2004',
    text: `Det står skrevet: Er der en bibelsk kerne, der står fast? <br />Forlaget ANIS, København`
  },
  {
    titel: '2005',
    text: `P:S.: Åndsfrændskab. Om ligheder og forskelle i Martin A. Hansens og Søren Kierkegaards tænkning. <br/>Gyldendal, København<br/><br/>Indøvelse i Christendom<br/>Reitzels Forlag, København`
  },
  {
    titel: '2006',
    text: `Søren Kierkegaard et la modernité. Le statut de la vérité selon René Descartes et Søren Kierkegaard. <br />Nordique,  Paris`
  },
  {
    titel: '2009',
    text: `Med ryggen mod muren – i Leonard Cohens lønkammer. <br/>Forlaget Anis`
  },
  {
    titel: '2010',
    text: `Fanden være Gud på den måde<br/>Festskrift til Niels Henrik Arendt<br /> <br/>At vorde enfoldig – ”Før Cannae læst med kierkegaardske briller<br/>Forlaget Anis`
  },
  {
    titel: '2011',
    text: `At læne sig indover en kaffekop. <br/>Bidrag til Sønderborg – kulturby 2017`
  },
  {
    titel: '2012',
    text: `Hvem sætter scenen? Om Martin Luther og Søren Kierkegaard. <br/>I Hva´så, Luther? Haderslev Stift.`
  }
];

const MinePublikationer = () => (
  <div>
    <h1>Publikationer</h1>
    <p>af sognepræst, dr.theol. Anders Kingo</p>
    <h5>Bøger</h5>
    {books.map(publication)}
    <h5>Artikler</h5>
    {articles.map(publication)}
  </div>
);

const publication = ({ titel, text }: Publication) => (
  <div>
    <p style={{ marginBottom: 0 }}>
      <strong>{titel}</strong>
    </p>
    <p dangerouslySetInnerHTML={{ __html: text }} />
  </div>
);

export default MinePublikationer;
