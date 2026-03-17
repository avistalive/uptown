import { Button } from '../ui/button'
import Link from 'next/link';

interface BackButtonProps {
    href:string;
    label: string;
}

const BackButton = ({href, label}: BackButtonProps) => {
  return (
    <Button 
      variant="link"
      className='font-light w-full text-midnight hover:no-underline'
      size='sm'
      asChild
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  )
}

export default BackButton