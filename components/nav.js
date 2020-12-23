import Image from 'next/image'

export default function Nav() {
  const navItems = [
    {
      label: 'home',
      path: '/',
    },
    {
      label: 'lifestyle',
      path: '/lifestyle',
    },
    {
      label: 'fashion',
      path: '/fashion',
    },
    {
      label: 'music',
      path: '/music',
    },
    {
      label: 'product',
      path: '/product',
    },
    {
      label: 'contact',
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