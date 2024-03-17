'use client'

import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import clsx from 'clsx'

import useNavigationStore from 'stores/useNavigationStore'

export default function SideNavigation() {
    const { isSideNavShow, setIsSideNavShow } = useNavigationStore()

    return (
        <>
            {isSideNavShow && (
                <div
                    className='z-10 absolute inset-0 bg-black opacity-30 duration-200'
                    onClick={() => setIsSideNavShow(false)}
                />
            )}
            <div
                className={clsx(
                    { 'w-[300px] px-6': isSideNavShow },
                    { 'w-0': !isSideNavShow },
                    'fixed top-0 left-0 h-screen bg-white py-10 z-20 overflow-hidden duration-300',
                )}>
                <div className='flex flex-col gap-10'>
                    <div className='flex align-center justify-end'>
                        <button onClick={() => setIsSideNavShow(false)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    </div>
                    <div className='flex flex-col gap-4 whitespace-nowrap'>
                        <div className='border-b px-4 py-2'>Menu 1</div>
                        <div className='border-b px-4 py-2'>Menu 2</div>
                        <div className='border-b px-4 py-2'>Menu 3</div>
                        <div className='border-b px-4 py-2'>Menu 4</div>
                    </div>
                </div>
            </div>
        </>
    )
}
