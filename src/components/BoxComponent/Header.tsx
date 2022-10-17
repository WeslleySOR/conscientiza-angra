interface IBoxComponentHeader {
  title: string;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
}

export function BoxComponentHeader({title, attributes}: IBoxComponentHeader) {
  return (
    <header className="flex items-center justify-center p-6" {...attributes}>
      <h1 className="text-2xl md:text-3xl">{title}</h1>
    </header>
  )
}