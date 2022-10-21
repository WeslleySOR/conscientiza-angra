interface IBoxComponentWrapper {
  children: React.ReactNode;
  attributes?: React.HTMLAttributes<HTMLDivElement>;
}

export function BoxComponentWrapper({
  children,
  attributes,
}: IBoxComponentWrapper) {
  return (
    <div
      className="scroll-mt-[48px] mt-8 flex flex-col bg-[rgba(237,237,237,0.4)] text-[#000] md:scroll-mt-[112px] lg:scroll-mt-[132px] lg:px-12"
      {...attributes}
    >
      {children}
    </div>
  );
}
