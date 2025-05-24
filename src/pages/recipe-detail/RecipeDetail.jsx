import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api } from '../../api';
import { IoMdStar } from "react-icons/io";

const RecipeDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    api.get(`/recipes/${id}`)
      .then((response) => {
        setData(response.data);
      }).catch((error) => {
        navigate("*");
        console.error(error);
      })
  }, [])

  return (
    <section className='section_recipe_detail'>
      <div className='container mx-auto'>
        <div className='recipe_detail_wrapper py-[30px] md:py-[22px]'>
          <div className='recipe_detail_top_wrapper grid grid-cols-[2fr_3fr] max-lg:grid-cols-1 gap-[20px] max-lg:gap-[8px] mb-[16px] max-lg:mb-[14px]'>
            <div className='recipe_detail_meal_name flex items-center gap-[4px]'>
              <h1 className='text-[28px] max-md:text-[24px] max-sm:text-[19px] text-white line-clamp-1 max-lg:line-clamp-none'>{data?.name}</h1>
            </div>
            <div className='recipe_detail_meal_instructions_title flex items-end'>
              <h2 className='text-[20px] max-md:text-[17px] max-sm:text-[14px] text-[#bfc4cb] line-clamp-1 max-lg:line-clamp-none'>How to Cook {data?.name} from Scratch: A Step-by-Step Guide</h2>
            </div>
          </div>
          <div className='recipe_detail_full_info grid grid-cols-[2fr_3fr] grid-rows-[166.5px_166.5px_166.5px] gap-[20px] mb-[16px]'>
            <div className='recipe_detail_image rounded-[12px] border border-[#3d444d] row-span-3 max-[500px]:row-span-2 max-[1024px]:col-span-2 overflow-hidden'>
              <img src={data?.image} className='w-full h-full object-cover text-black' alt="" />
            </div>
            <div className='recipe_detail_instructions rounded-[12px] max-[1024px]:col-span-2 row-span-3 grid grid-cols-3 max-[640px]:grid-cols-2 max-[370px]:grid-cols-1 overflow-hidden gap-[12px]'>
              {
                data?.instructions?.map((instruction, index) => (
                  <div key={index} className='recipe_detail_instruction w-full max-[370px]:w-[90%] max-[320px]:w-full mx-auto border rounded-[12px] border-[#3d444d] p-[18px] flex flex-col gap-[16px] max-sm:gap-[8px]'>
                    <div className='flex items-center justify-center flex-1/2'>
                      <h1 className='text-white max-sm:text-[40px] max-sm:leading-[40px] text-[70px] leading-[70px]'>{index + 1}</h1>
                    </div>
                    <div className='flex-1/2'>
                      <p className='text-white max-sm:text-[11px] text-[14px] line-clamp-6 text-center'>{instruction}</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='recipe_detail_tags text-[#8b919a] flex items-center gap-[8px] italic text-nowrap mb-[24px]'>
            {
              data?.tags?.map((tag, index) => (
                <span key={index} className='text-[15px] max-sm:text-[13px] lowercase'>#{tag}</span>
              ))
            }
          </div>
          <div className='recipe_detail_bottom_wrapper grid grid-cols-[1fr_1fr_1fr_1fr_1fr] grid-rows-2 gap-[20px]'>
            <div className='recipe_detail_essentials col-span-2 max-sm:col-span-5 max-lg:col-span-3 row-span-2 px-[16px] rounded-[12px] border border-[#3d444d]'>
              <h5 className='py-[12px] max-sm:py-[8px] text-white text-[20px] max-sm:text-[16px] border-b border-[#3d444d]'>Essentials</h5>
              <p className='py-[12px] max-sm:py-[8px] text-[#8b919a] text-[14px] max-sm:text-[11px] border-b border-[#3d444d]'>Calories Per Serving:  <span className='text-white'>{data?.caloriesPerServing}kcal</span></p>
              <p className='py-[12px] max-sm:py-[8px] text-[#8b919a] text-[14px] max-sm:text-[11px] border-b border-[#3d444d]'>Preparing Difficulty:  <span className='text-white'>{data?.difficulty} Level</span></p>
              <p className='py-[12px] max-sm:py-[8px] text-[#8b919a] text-[14px] max-sm:text-[11px] border-b border-[#3d444d]'>Preparation Time: <span className='text-white'>{data?.prepTimeMinutes}min</span></p>
              <div className='py-[12px] max-sm:py-[8px] text-[#8b919a] text-[14px] max-sm:text-[11px] border-b border-[#3d444d] flex items-center gap-[4px]'><span>Best for:</span>               {
                data?.mealType?.map((meal, index) => (
                  <p key={index} className='text-white'>{meal} {index + 1 !== data?.mealType?.length ? <span>and</span> : null}</p>
                ))
              }
              </div>
              <p className='py-[12px] max-sm:py-[8px] text-[#8b919a] text-[14px] max-sm:text-[11px] border-b border-[#3d444d]'>Servings:  <span className='text-white'>{data?.servings}</span></p>
              <div className='py-[12px] max-sm:py-[8px] text-[#8b919a] text-[14px] max-sm:text-[11px] flex flex-col gap-[4px]'><span>Ingredients:</span>
                {
                  data?.ingredients?.map((ingredient, index) => (
                    <p key={index} className='text-white'><span className='text-[#8b919a]'>{index + 1}:</span> {ingredient}</p>
                  ))
                }
              </div>
            </div>
            <div className='recipe_detail_reviews col-span-2 row-span- max-sm:col-span-5 max-lg:col-span-2 p-[16px] rounded-[12px] border border-[#3d444d] flex flex-col items-center justify-center'>
              <p className='text-[#8b919a] text-[20px] max-sm:text-[16px]'>Rating:</p>
              <p className='text-white max-sm:text-[45px] text-[80px]'>{Math.ceil(data?.rating)}</p>
              <div className='flex items-center gap-[4px] text-white mb-[8px]'>
                {
                  Number.isFinite(data?.rating) &&
                  Array(Math.ceil(data?.rating))
                    .fill("")
                    .map((_, index) => <IoMdStar key={index} />)
                }
              </div>
              <p className='text-[14px] max-sm:text-[11px] text-[#8b919a] text-center'>{data?.reviewCount} people have reviewed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecipeDetail