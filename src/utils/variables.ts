interface ILocalization {
  name: string;
  days: number | number[];
}
// Segunda = 0 - Terça = 1 - Quarta = 2 - Quinta = 3 - Sexta = 4 - Sabado = 5
export const localizations: ILocalization[] = [
  {
    name: "Monsuaba",
    days: 4,
  },
  {
    name: "Jacuecanga",
    days: 4,
  },
  {
    name: "Camorim",
    days: 4,
  },
  {
    name: "Praia do anil",
    days: 0,
  },
  {
    name: "Cais de pescadores",
    days: 0,
  },
  {
    name: "Balneário",
    days: 0,
  },
  {
    name: "Frade",
    days: 5,
  },
  {
    name: "Serra d'água",
    days: 5,
  },
  {
    name: "Vila histórica",
    days: 5,
  },
  {
    name: "Perequê",
    days: 5,
  },
  {
    name: "Abraão",
    days: 0,
  },
  {
    name: "Provetá",
    days: 0,
  },
];