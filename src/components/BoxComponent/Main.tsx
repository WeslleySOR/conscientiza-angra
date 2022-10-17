interface IBoxComponentMain {
  children: React.ReactNode;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
}

export function BoxComponentMain({children, attributes}: IBoxComponentMain) {
  return (
    <main {...attributes}>
      {children}
    </main>
  )
}