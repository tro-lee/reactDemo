import "./card.css";

function Card() {
  const img = "https://t.mwm.moe/pc/";
  const name = "Jonas Schemaenn";
  const intro = "hhihihihihihihasoiduoasudoausdouaosudohihihihihihihasoiduoasudoausdouaosudohihihihihihihasoiduoasudoausdouaosudohihihihihihihasoiduoasudoausdouaosudoihihihihihihasoiduoasudoausdouaosudo";
  const skills = ["HTML+CSS", "JavaScript", "1111111", "1111111", "hihihihihi"];

  return (
    <section className="card">
      <Cover img={img} />
      <Content name={name} intro={intro} />
      <Footer skills={skills} />
    </section>
  );
}

export default Card;

function Cover({ img }) {
  return <img alt="" src={img} />;
}

function Content({ name, intro }) {
  return (
    <>
      <h1>{name}</h1>
      <article>{intro}</article>
    </>
  );
}

function Footer({ skills }) {
  const tag = skills.map((skill, key) => <div key={key}>{skill}</div>);
  return <footer>{tag}</footer>;
}
