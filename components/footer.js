/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { i18n } from "../i18n";

const languages = [
  {
    value: "en",
    label: "ENG",
  },
  {
    value: "sl",
    label: "SLO",
  },
  {
    value: "es",
    label: "ESP",
  },
];

export default function Footer() {
  return (
    <div className="container py-8 px-6">
      <div className="flex sm:flex">
        <div className="flex sm:w-1/3 sm:mt-0 xs:w-1 h-auto justify-start">
          <div>© 2020 VARJA JOVANOVIC</div>
        </div>
        <div className="flex sm:w-1/3 sm:mt-0 xs:w-1 h-auto justify-center">
          {languages.map((language) => (
            <div
              key={language.label}
              onClick={() => {
                localStorage.setItem("i18nextLng", language.value);
                i18n.changeLanguage(language.value);
              }}
              className="mr-3 underline hover:text-teal-600 cursor-pointer"
            >
              {language.label}
            </div>
          ))}
        </div>
        <div className="flex sm:w-1/3 sm:mt-0 xs:w-1 h-auto justify-end">
          <div>EMAIL | INSTAGRAM</div>
        </div>
      </div>
    </div>
  );
}
