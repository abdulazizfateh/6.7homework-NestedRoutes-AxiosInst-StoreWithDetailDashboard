import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../api';
import { PiUserLight } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const UserDetail = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        api.get(`/users/${id}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                navigate("*");
                console.error(error);
            })
    }, [])
    return (
        <section className='section_user_detail'>
            <div className="container mx-auto">
                <div className='users_detail_wrapper py-[30px]'>
                    <div key={data?.id} className='users_detail_card w-[40%] max-[1024px]:w-[60%] max-[768px]:w-85% max-[550px]:w-[90%] max-[450px]:w-full mx-auto rounded-[8px] overflow-hidden border border-[#3d444d]'>
                        <div className='h-[42px] px-[12px] flex items-center justify-between gap-[4px] border-b border-b-[#3d444d]'>
                            <PiUserLight className='text-[#8b919a] text-[18px] md:text-[22px] leading-[22px] hover:text-[#0095f6] duration-300' />
                            {
                                data?.age > 30 && (<RiVerifiedBadgeFill className='text-[18px] md:text-[22px] text-[#0095f6]' />)
                            }
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Full name:<span className='text-white'> {data?.firstName} {data?.lastName}</span></p>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Username: <span className='text-[#0095f6] cursor-pointer'>@{data?.username}</span></p>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Gender:<span className='text-white capitalize'> {data?.gender}</span></p>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <a href='mailto:someone@example.com' className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Email:<span className='text-[#0095f6] cursor-pointer hover:underline'> {data?.email}</span></a>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Phone Number:<span className='text-white'> {data?.phone}</span></p>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>University:<span className='text-white'> {data?.university}</span></p>
                        </div>
                        <div className='py-[8px] md:py-[10px] border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-3'>Address:<span className='text-[#0095f6] cursor-pointer hover:underline'> {data?.address?.address}, {data?.address?.city}, {data?.address?.state}, {data?.address?.country}, {data?.address?.postalCode}</span></p>
                        </div>
                        <div className='py-[8px] md:py-[12px] flex flex-col gap-[3px] border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Company:<span className='text-white'> {data?.company?.name}</span></p>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Title:<span className='text-white'> {data?.company?.title}</span></p>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-2'>Company address:<span className='text-[#0095f6] cursor-pointer hover:underline'> {data?.company?.address?.address}, {data?.company?.address?.city}, {data?.company?.address?.state}, {data?.company?.address?.country}, {data?.company?.address?.postalCode}</span></p>
                        </div>
                        <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                            <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>University:<span className='text-white'> {data?.university}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserDetail