import Image from 'next/image'
import PropTypes from 'prop-types'
import { withTranslation } from '../i18n'

const Nav = ({ t }) => {

  const navItems = [
    {
      label: t('home'),
      path: '/',
    },
    {
      label: t('lifestyle'),
      path: '/lifestyle',
    },
    {
      label: t('fashion'),
      path: '/fashion',
    },
    {
      label: t('music'),
      path: '/music',
    },
    {
      label: t('product'),
      path: '/product',
    },
    {
      label: t('contact'),
      path: '/contact',
    },
  ];


  return (
    <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 flex flex-row">
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={80}
          className="self-center"
        />
      </div>
      <div className="sm:mb-0 self-center">
        {navItems.map((item) => (
          <span
            className="hover:text-teal-600 text-md text-black hover:text-blue-dark ml-2 px-1 cursor-pointer"
            key={item.label}
          >
            {item.label}
          </span>
        ))}
      </div>
    </nav>
  )
}

Nav.propTypes = {
  t: PropTypes.func.isRequired,
}

Nav.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default withTranslation('common')(Nav)