'use client'

import { useEffect } from 'react'

import useNavigationStore from 'stores/useNavigationStore'

import AppItem from 'components/home/app-item'

export default function HomePage() {
    const { setActiveNavigation } = useNavigationStore()

    useEffect(() => {
        setActiveNavigation('home')
    }, [])
    return (
        <div className='flex align-center justify-center h-full w-full'>
            <div className='flex flex-col gap-12 w-full'>
                <div className='flex flex-col gap-2 justify-center'>
                    <span className='text-center text-3xl font-bold'>Irfanmaulana007</span>
                    <span className='text-center text-sm tracking-widest font-semibold'>
                        Productivity super app
                    </span>
                </div>
                <div className='grid grid-cols-2 gap-4'>
                    <AppItem name='Working time tracker' />
                    <AppItem name='Money Manager' />
                    <AppItem name='Money Saver' />
                    <AppItem name='Activities Checker' />
                </div>
            </div>
        </div>
    )
}
