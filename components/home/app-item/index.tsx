import Image from 'next/image'

import { IAppItem } from './type'

export default function AppItem({
    name,
    imageUrl = 'https://cdn-icons-png.freepik.com/512/5361/5361322.png',
}: IAppItem) {
    return (
        <div className='flex flex-col gap-4 items-center justify-center p-4 border rounded'>
            <Image src={imageUrl} height={40} width={40} alt='' />
            <span className='text-xs font-semibold'>{name}</span>
        </div>
    )
}
