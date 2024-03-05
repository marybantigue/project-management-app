import { usePathname } from 'next/navigation'
import HeaderMenuLeft from '../header-menu-left'
export function SidebarMenu() {
  const pathname = usePathname()

  return (
    <div className='mt-1 pb-3 3xl:mt-4 px-3'>
      <HeaderMenuLeft />
    </div>
  )
}
