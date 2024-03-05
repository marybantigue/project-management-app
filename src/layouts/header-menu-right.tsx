import { menuItems } from '@/layouts/menu-items'
import { ActionIcon, Avatar } from 'rizzui'
import { SlSettings } from 'react-icons/sl'
export default function HeaderMenuRight() {
  return (
    <div className='flex items-center gap-1 justify-end w-full'>
      <ActionIcon variant='text'>
        <SlSettings className='h-5 w-5' />
      </ActionIcon>
      <ActionIcon variant='text'>
        <Avatar name='John Doe' initials='SM' size='sm' />
      </ActionIcon>
    </div>
  )
}
