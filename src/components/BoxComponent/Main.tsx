interface IBoxComponentMain {
  children: React.ReactNode;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
}

export function BoxComponentMain({ children, attributes }: IBoxComponentMain) {
  return (
    <main className="flex flex-col py-6 gap-8" {...attributes}>
      {children}
    </main>
  );
}
