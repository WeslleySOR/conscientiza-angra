import * as SC from "./style";

import randomPic from '/assets/random-pic.jpg'

export function AboutUsCard() {
  return (
    <SC.Container>
      <img loading="lazy" src={randomPic} alt="Imagem aleatoria" />
      <SC.Content>
        <h1>Trung Thanh Nguyen - CEO</h1>
        <p>
          Trung is involved in all key decisions from product to marketing and
          leads the company in Vietnam.
        </p>
        <p>
          At the age of 19, Trung co-founded and was CTO of Lozi.vn, an early
          Vietnamese e-commerce startup which has raised around 10 M in funding
          and is still in operations as of now. He left Lozi once it became a
          stable business and the team's focus shifted from building to
          business/operations. Trung also had stints at Trusting Social (25 M
          recent funding round led by Sequoia) and Anduin Transactions (a Joe
          Lonsdale company) before founding Axie Infinity
        </p>
        <p>
          Trung represented Vietnam in the ACM-ICPC World Final 2014 held in
          Yekaterinburg, Russia.
        </p>
        <div>
          <a href="">Linkedin</a>
          <a href="">Github</a>
          <a href="">Twitter</a>
        </div>
      </SC.Content>
    </SC.Container>
  );
}
