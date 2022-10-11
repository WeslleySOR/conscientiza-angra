import { useContext } from "react";
import { MobileMenuContext } from "../../contexts/MobileMenuContext";

export function MobileMenuButton() {
  const { mobileMenu, updateMobileMenu } = useContext(MobileMenuContext);
  return (
    <button
      className="absolute top-8 left-2 flex flex-col gap-1 h-fit md:hidden"
      onClick={() => updateMobileMenu(!mobileMenu)}
    >
      <svg
        className={`transition-transform duration-300 ${mobileMenu ? "translate-y-[0.43rem] rotate-[50deg]" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="3"
        viewBox="0 0 24 3"
        fill="none"
      >
        <path
          d="M34.5458 0H1.4542C0.651094 0 0 0.619937 0 1.38462C0 2.14929 0.651094 2.76923 1.4542 2.76923H34.5458C35.349 2.76923 36 2.14929 36 1.38462C36 0.619937 35.349 0 34.5458 0Z"
          fill="white"
        />
      </svg>
      <svg
        className={`transition-transform duration-300 ${mobileMenu ? "rotate-[130deg]" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="3"
        viewBox="0 0 24 3"
        fill="none"
      >
        <path
          d="M34.5458 0H1.4542C0.651094 0 0 0.619937 0 1.38462C0 2.14929 0.651094 2.76923 1.4542 2.76923H34.5458C35.349 2.76923 36 2.14929 36 1.38462C36 0.619937 35.349 0 34.5458 0Z"
          fill="white"
        />
      </svg>
      <svg
        className={`transition-transform duration-300 ${mobileMenu ? "-translate-y-[0.43rem] rotate-[130deg]" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="3"
        viewBox="0 0 24 3"
        fill="none"
      >
        <path
          d="M34.5458 0H1.4542C0.651094 0 0 0.619937 0 1.38462C0 2.14929 0.651094 2.76923 1.4542 2.76923H34.5458C35.349 2.76923 36 2.14929 36 1.38462C36 0.619937 35.349 0 34.5458 0Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
