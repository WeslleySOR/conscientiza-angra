interface IBoxComponentFooter {
  children: React.ReactNode;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
}

export function BoxComponentFooter({children, attributes}: IBoxComponentFooter) {
  return (
    <footer {...attributes}>
      {children}
    </footer>
  )
}