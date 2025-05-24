import React from 'react'
import { PiUserLight } from "react-icons/pi";
import { cardsPerLoad } from '../../pages/home/Home';

const LoadingUsers = () => {
    const loadingUsers = Array(cardsPerLoad).fill("");
    return (
        <div className='users_wrapper py-[30px] grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[480px]:grid-cols-2 min-[940px]:grid-cols-3 lg:grid-cols-4'>
            {
                loadingUsers.map((_, index) => (
                    <div key={index} className='users_card rounded-[8px] overflow-hidden border border-[#3d444d]'>
                        <div className='h-[42px] px-[12px] flex items-center justify-between gap-[4px] border-b border-b-[#3d444d]'>
                            <PiUserLight className='text-[#8b919a] text-[22px] leading-[22px]' />
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a]'>First Name:</p>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a]'>Last Name:</p>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Username:</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(LoadingUsers);