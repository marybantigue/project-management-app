import { SiOpenproject } from 'react-icons/si'
import { siteConfig } from '@/config/site.config'
type IconProps = {
  iconOnly?: boolean
  className?: string
}

export default function Logo({ iconOnly = false, ...props }: IconProps) {
  return (
    <span {...props} className='flex items-center gap-2'>
      <SiOpenproject className='w-6 h-6' />
      {!iconOnly && <span className='font-bold'>{siteConfig.title}</span>}
    </span>
  )
}
