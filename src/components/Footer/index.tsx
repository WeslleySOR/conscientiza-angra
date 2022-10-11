import linkedinIcon from "/assets/icons8-linkedin.svg";
import githubIcon from "/assets/icons8-github.svg";

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 bg-[#7aaf60] p-4">
      <span className="text-[#000] font-medium">© 2022 Weslley SOR</span>
      <div className="flex gap-2">
        <a href="https://www.linkedin.com/in/weslleysor/" target="__blank">
          <img className="w-6 h-6" src={linkedinIcon} alt="" />
        </a>
        <a href="https://github.com/WeslleySOR" target="__blank">
          <img className="w-6 h-6" src={githubIcon} alt="" />
        </a>
      </div>
    </footer>
  );
}
