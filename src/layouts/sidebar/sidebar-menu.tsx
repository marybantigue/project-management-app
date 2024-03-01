import { usePathname } from 'next/navigation'

export function SidebarMenu() {
  const pathname = usePathname()

  return <div className='mt-4 pb-3 3xl:mt-6'>Sidebar menu</div>
}
