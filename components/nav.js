import { Image } from "cloudinary-react";
import Link from "next/link";
import PropTypes from "prop-types";
import { withTranslation } from "../i18n";

const Nav = ({ t }) => {
  const navItems = [
    {
      label: t("home"),
      path: "/",
    },
    {
      label: t("lifestyleFashion"),
      path: "/lifestyle-fashion",
    },
    {
      label: t("music"),
      path: "/music",
    },
    {
      label: t("product"),
      path: "/product",
    },
    {
      label: t("contact"),
      path: "/contact",
    },
  ];

  return (
    <nav className="font-inria-sans flex flex-col text-center content-center sm:flex-row sm:flex-wrap sm:text-left sm:justify-between py-2 px-6 bg-white sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 flex flex-row justify-center">
        <Link href="/">
          <Image
            cloudName="zanedev"
            publicId="logo"
            width={120}
            height={80}
            className="self-center cursor-pointer"
          />
        </Link>
      </div>
      <div className="sm:mb-0 self-center">
        {navItems.map((item) => (
          <Link href={item.path} key={item.path}>
            <span className="hover:text-purple-700 text-md text-black ml-2 px-1 cursor-pointer">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  t: PropTypes.func.isRequired,
};

Nav.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

export default withTranslation("common")(Nav);
