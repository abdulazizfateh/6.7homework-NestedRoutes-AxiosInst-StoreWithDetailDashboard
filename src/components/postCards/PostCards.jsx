import React, { useEffect, useState } from "react";
import LoadingPosts from "../loadingPosts/LoadingPosts";
import { cardsPerLoad } from "../../pages/home/Home";
import { NavLink } from "react-router-dom";

const PostCards = ({ postsData, count, setCount, loading, lastPost }) => {
    const handleSeeMore = () => {
        setCount((count + cardsPerLoad));
    }

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className='section_posts text-[#fff]'>
            <div className="container mx-auto">
                {
                    loading && <LoadingPosts />
                }
                <div className='posts_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 md:grid-cols-3 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[940px]:grid-cols-3 lg:grid-cols-4'>
                    {
                        postsData?.posts?.map((post) => (
                            <div key={post.id} className='posts_card overflow-hidden rounded-[8px] border border-[#3d444d] flex flex-col'>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>#{post.tags[0]} #{post.tags[1]} #{post.tags[2]}</p>
                                </div>
                                <div className='py-[8px] md:py-[12px]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-2'>Content: <span className='text-white'>{post.body}</span></p>
                                </div>
                                <div className="flex-1 flex items-end justify-end">
                                    <div className='py-[8px] md:py-[12px] w-full flex items-center justify-end h-[34px] md:h-[42px] border-t border-t-[#3d444d]'>
                                        <NavLink to={`/post/${post.id}`} className='block px-[12px] text-[11px] md:text-[14px] cursor-pointer hover:underline text-[#0095f6]'>See the full detail</NavLink>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {!lastPost && showButton && (
                    <div className="flex items-center justify-center mb-[30px] sm:mb-[45px] lg:mb-[60px]">
                        <button
                            onClick={handleSeeMore}
                            className='cursor-pointer capitalize text-[11px] sm:text-[14px] font-medium px-[12px] py-[4px] sm:px-[16px] sm:py-[5px] text-[#f0f6fc] border border-[#3f934b] rounded-[6px] bg-[#238636]'>
                            See more
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
export default React.memo(PostCards);