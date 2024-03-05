'use client'

import { DrawerPlacements, useDrawer } from '@/app/shared/drawer-views/use-drawer'
import { ActionIcon } from 'rizzui'
import { HiMenuAlt2 } from 'react-icons/hi'
import cn from '@/utils/class-names'

interface Props {
  view: JSX.Element
  placement?: DrawerPlacements
  customSize?: string
  className?: string
}

export default function HamburgerButton({ view, placement = 'left', customSize = '320px', className }: Props) {
  const { openDrawer } = useDrawer()
  return (
    <ActionIcon
      aria-label='Open Sidebar Menu'
      variant='text'
      className={cn('me-3 h-auto w-auto p-0 sm:me-4 xl:hidden', className)}
      onClick={() =>
        openDrawer({
          view,
          placement,
          customSize
        })
      }
    >
      <HiMenuAlt2 className='w-6 h-6' />
    </ActionIcon>
  )
}
