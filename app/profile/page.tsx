'use client'

import { useEffect } from 'react'

import useNavigationStore from 'stores/useNavigationStore'

export default function ProfilePage() {
    const { setActiveNavigation } = useNavigationStore()

    useEffect(() => {
        setActiveNavigation('profile')
    }, [])
    return (
        <div className='flex align-center justify-center'>
            <div className='flex flex-col gap-2 justify-center'>
                <span className='text-center text-3xl font-bold'>Welcome to</span>
                <span className='text-center text-sm tracking-widest font-semibold'>
                    Profile Page
                </span>
            </div>
        </div>
    )
}
