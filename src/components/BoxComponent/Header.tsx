interface IBoxComponentHeader {
  children: React.ReactNode;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
}

export function BoxComponentHeader({children, attributes}: IBoxComponentHeader) {
  return (
    <header {...attributes}>
      {children}
    </header>
  )
}