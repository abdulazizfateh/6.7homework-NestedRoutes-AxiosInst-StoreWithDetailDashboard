import React, { useEffect, useState } from 'react'
import { PiUserLight } from "react-icons/pi";
import LoadingUsers from '../loadingUsers/LoadingUsers';
import { cardsPerLoad } from "../../pages/home/Home";
import { NavLink } from 'react-router-dom';

const UserCards = ({ userData, count, setCount, loading, lastUser }) => {
    const handleSeeMore = () => {
        setCount(count + cardsPerLoad);
    }

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className='section_users'>
            <div className='container mx-auto'>
                {
                    loading && <LoadingUsers />
                }
                <div className='users_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 sm:grid-cols-3 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[480px]:grid-cols-2 min-[940px]:grid-cols-3 lg:grid-cols-4'>
                    {
                        userData?.users?.map((user) => (
                            <div key={user.id} className='users_card rounded-[8px] overflow-hidden border border-[#3d444d]'>
                                <div className='h-[42px] px-[12px] flex items-center gap-[4px] border-b border-b-[#3d444d]'>
                                    <NavLink to={`/user/${user.id}`}>
                                        <PiUserLight className='text-[#8b919a] text-[18px] md:text-[22px] leading-[22px] hover:text-[#0095f6] duration-300' />
                                    </NavLink>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>First Name: <span className='text-white'>{user.firstName}</span></p>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Last Name: <span className='text-white'>{user.lastName}</span></p>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center'>
                                    <NavLink to={`/user/${user.id}`} className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Username: <span className='text-[#0095f6] cursor-pointer hover:underline'>@{user.username}</span></NavLink>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    !lastUser && showButton && <div className="flex items-center justify-center mb-[30px] sm:mb-[45px] lg:mb-[60px]">
                        <button
                            onClick={handleSeeMore}
                            className='cursor-pointer capitalize text-[11px] sm:text-[14px] font-medium px-[12px] py-[4px] sm:px-[16px] sm:py-[5px] text-[#f0f6fc] border border-[#3f934b] rounded-[6px] bg-[#238636]'>
                            See more
                        </button>
                    </div>
                }
            </div>
        </section>
    )
}

export default React.memo(UserCards);