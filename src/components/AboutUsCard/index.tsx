import randomPic from '/assets/random-pic.jpg'

export function AboutUsCard() {
  return (
    <div className="flex flex-col gap-8 w-96 bg-[#4b7139]">
      <img loading="lazy" src={randomPic} alt="Imagem aleatoria" />
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-lg">Trung Thanh Nguyen - CEO</h1>
        <p className="text-base">
          Trung is involved in all key decisions from product to marketing and
          leads the company in Vietnam.
        </p>
        <p className="text-base">
          At the age of 19, Trung co-founded and was CTO of Lozi.vn, an early
          Vietnamese e-commerce startup which has raised around 10 M in funding
          and is still in operations as of now. He left Lozi once it became a
          stable business and the team's focus shifted from building to
          business/operations. Trung also had stints at Trusting Social (25 M
          recent funding round led by Sequoia) and Anduin Transactions (a Joe
          Lonsdale company) before founding Axie Infinity
        </p>
        <p className="text-base">
          Trung represented Vietnam in the ACM-ICPC World Final 2014 held in
          Yekaterinburg, Russia.
        </p>
        <div className="flex justify-center items-center gap-4">
          <a className="underline text-base text-[#fff]" href="">Linkedin</a>
          <a className="underline text-base text-[#fff]" href="">Github</a>
          <a className="underline text-base text-[#fff]" href="">Twitter</a>
        </div>
      </div>
    </div>
  );
}
