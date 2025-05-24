import React from 'react'
import { cardsPerLoad } from '../../pages/home/Home';

const LoadingPosts = () => {
    const loadingPosts = Array(cardsPerLoad).fill("");
    return (
        <div className='posts_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 md:grid-cols-3 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[940px]:grid-cols-3 lg:grid-cols-4'>
            {
                loadingPosts?.map((_, index) => (
                    <div key={index} className='posts_card overflow-hidden rounded-[8px] border border-[#3d444d] flex flex-col'>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'></p>
                        </div>
                        <div className='py-[8px] md:py-[12px] h-[49px] md:h-[66px]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-2'>Content:</p>
                        </div>
                        <div className="flex-1 flex items-end justify-end">
                            <div className='py-[8px] md:py-[12px] w-full flex items-center justify-end h-[34px] md:h-[42px] border-t border-t-[#3d444d]'>
                                <p className='block px-[12px] text-[11px] md:text-[14px] cursor-pointer hover:underline text-[#0095f6]'>See the full detail</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default React.memo(LoadingPosts);