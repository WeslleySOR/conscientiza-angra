import grupoDePessoas from '/assets/grupo-de-pessoas.png'

export function AboutUsCard() {
  return (
    <div className="flex flex-col gap-8 w-full">
      <img loading="lazy" src={grupoDePessoas} alt="Imagem aleatoria" />
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-center text-lg">Turma 3005 - Senac Angra dos Reis</h1>
        <p className="text-base text-center">
          Alunos: Ana Paula, Joao, Pedro, Lara, Miguel, Beatriz, Luiz.
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
