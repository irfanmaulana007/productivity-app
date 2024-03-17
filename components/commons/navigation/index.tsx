import { faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Navigation() {
    return (
        <div className='fixed bottom-0 w-full max-w-[480px] border-t pt-2 pb-5 bg-white'>
            <div className='flex align-center justify-around'>
                <Link href='/'>
                    <FontAwesomeIcon icon={faHome} height={16} />
                </Link>
                <Link href='/'>
                    <FontAwesomeIcon icon={faHome} height={16} />
                </Link>
                <Link href='/'>
                    <FontAwesomeIcon icon={faHome} height={16} />
                </Link>
                <Link href='/profile'>
                    <FontAwesomeIcon icon={faUser} height={16} />
                </Link>
            </div>
        </div>
    )
}
