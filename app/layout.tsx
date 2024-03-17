import { PropsWithChildren } from 'react'

import Header from 'components/commons/header'
import Navigation from 'components/commons/navigation'
import SideNavigation from 'components/commons/sidenav'

import './globals.css'

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang='en'>
            <body>
                <div className='max-w-[480px] m-auto relative'>
                    <Header />
                    <SideNavigation />
                    <div className='min-h-screen pt-[80px] pb-[73px] px-8'>{children}</div>
                    <Navigation />
                </div>
            </body>
        </html>
    )
}
