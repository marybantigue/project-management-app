'use client'
import { usePathname } from 'next/navigation'
import { menuItems } from '@/layouts/menu-items'
import { Button } from 'rizzui'
import Link from 'next/link'
import cn from '@/utils/class-names'
export default function HeaderMenuLeft() {
  const pathname = usePathname()
  return (
    <div className='flex flex-col xl:flex-row items-stretch xl:items-center gap-1'>
      <Link href={menuItems.dashboard.href ?? '/'} className='w-full'>
        <Button variant={pathname === menuItems.dashboard.href ? 'solid' : 'text'} className='w-full'>
          {menuItems.dashboard.name}
        </Button>
      </Link>
      <Link href={menuItems.projects.href ?? '/'} className='w-full'>
        <Button variant={pathname === menuItems.projects.href ? 'solid' : 'text'} className='w-full'>
          {menuItems.projects.name}
        </Button>
      </Link>
    </div>
  )
}
