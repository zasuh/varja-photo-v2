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
    <div className="font-inria-sans container py-8 px-6">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-4">
        <div className="grid justify-center md:justify-start">
          <div>© 2020 VARJA JOVANOVIC</div>
        </div>
        <div className="flex flex-row justify-center sm:justify-center">
          {languages.map((language) => (
            <span
              key={language.label}
              onClick={() => {
                localStorage.setItem("i18nextLng", language.value);
                i18n.changeLanguage(language.value);
              }}
              className="mr-3 underline hover:text-purple-700 cursor-pointer"
            >
              {language.label}
            </span>
          ))}
        </div>
        <div className="grid justify-center md:justify-end">
          <div>
            EMAIL
            {' '}
            |
            {' '}
            <a className="hover:text-purple-700" href="https://www.instagram.com/varja_photo/">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </div>
  );
}
