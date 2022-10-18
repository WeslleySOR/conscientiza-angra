export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 bg-[#00152b] text-[#fff] p-4">
      <span className="font-medium">© 2022 Weslley SOR</span>
      <div className="flex gap-4">
        <a className="underline font-medium" href="https://www.linkedin.com/in/weslleysor/" target="__blank">
          Linkedin
        </a>
        <a className="underline font-medium" href="https://github.com/WeslleySOR" target="__blank">
          Github
        </a>
      </div>
    </footer>
  );
}
