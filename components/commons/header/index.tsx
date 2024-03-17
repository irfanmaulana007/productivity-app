'use client'

import { faList, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import useNavigationStore from 'stores/useNavigationStore'

export default function Header() {
    const { activeNavigation, setIsSideNavShow } = useNavigationStore()

    return (
        <div className='fixed top-0 w-full max-w-[480px] py-4 px-10 bg-white'>
            <div className='flex justify-between align-center'>
                <button onClick={() => setIsSideNavShow(true)}>
                    <FontAwesomeIcon icon={faList} height={20} />
                </button>
                <span className='font-semibold text-sm capitalize'>{activeNavigation}</span>
                <FontAwesomeIcon icon={faSearch} height={20} />
            </div>
        </div>
    )
}
