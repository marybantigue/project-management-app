import StickyHeader from '@/layouts/sticky-header'
import Link from 'next/link'
import Logo from '@/components/logo'
import HamburgerButton from '@/layouts/hamburger-button'
import Sidebar from '@/layouts/sidebar/sidebar'
import HeaderMenuLeft from '@/layouts/header-menu-left'
import HeaderMenuRight from '@/layouts/header-menu-right'

export default function Header() {
  return (
    <StickyHeader className={'z-[990] justify-between 2xl:py-5 2xl:pl-6  3xl:px-8'}>
      <div className='hidden items-center gap-3 xl:flex'>
        <Link aria-label='Site Logo' href={'/'} className='me-4 hidden shrink-0 lg:me-5 xl:block'>
          <Logo />
        </Link>
        <HeaderMenuLeft />
      </div>
      <div className='flex w-full items-center gap-5 xl:w-auto 3xl:gap-6'>
        <div className='flex w-full max-w-2xl items-center xl:w-auto'>
          <HamburgerButton view={<Sidebar className='static w-full 2xl:w-full' />} />
          <Link aria-label='Site Logo' href={'/'} className='me-4 w-9 shrink-0 lg:me-5 xl:hidden'>
            <Logo iconOnly />
          </Link>
        </div>
        <HeaderMenuRight />
      </div>
    </StickyHeader>
  )
}
