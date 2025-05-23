import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { api } from "../../api"
import { MdOutlineDone } from "react-icons/md";

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    api.get(`/product/${id}`)
      .then((response) => {
        setData(response.data);
      }).catch((error) => {
        console.log(error);
      })
  }, [])

  const [mainImage, setMainImage] = useState(0);

  return (
    <section className='section_product_detail'>
      <div className='container mx-auto'>
        <div className='product_detail_wrapper py-[30px] grid grid-cols-[2fr_1fr] grid-rows-[100px_100px_100px_100px_100px_100px] max-lg:grid-cols-1 max-md:grid-rows-[85px_85px_85px_85px_85px_85px] max-sm:grid-rows-[60px_60px_60px_60px_60px_60px] gap-[30px]'>
          <div className='row-span-6 rounded-[12px] border border-[#3d444d] p-[15px] max-md:p-[10px] grid grid-cols-6 grid-rows-20 max-lg:grid-rows-28 gap-[10px]'>
            <div className='col-span-6 row-span-1 max-lg:row-span-2 text-white px-[12px] flex items-center gap-[16px]'>
              <p className='text-[14px] max-sm:text-[11px]'><span className='underline'>{data?.rating}</span><span className='underline'> ({data?.reviews?.length} reviews)</span> - <span>{data.stock} available for order</span>
              </p>
            </div>
            <div className='col-span-5 max-lg:col-span-6 row-span-15 rounded-[12px] border border-[#3d444d] flex items-center justify-center'>
              <img className='object-contain w-full h-full' src={data?.images?.[mainImage]} alt="" />
            </div>
            {
              data?.images?.map((image, index) => (
                <div key={index} className={`rounded-[12px] row-span-3 max-lg:col-span-2 max-lg:row-span-5 ${mainImage === index ? 'border-blue-500' : 'border-[#3d444d]'} border border-[#3d444d]`}>
                  <img onClick={() => setMainImage(index)} className='w-full h-full object-contain' src={image} alt="" />
                </div>
              ))
            }
            <div className='rounded-[12px] col-span-6 max-lg:row-span-7 row-span-4 border border-[#3d444d] p-[12px]'>
              <h1 className='text-[24px] max-sm:text-[20px] text-white mb-[4px] line-clamp-1'>{data.title}</h1>
              <p className='text-[14px] max-sm:text-[11px] text-white line-clamp-3'>{data.description}</p>
            </div>
          </div>
          <div className='row-span-3 rounded-[12px] border border-[#3d444d] overflow-hidden flex flex-col pb-[15px] max-md:pb-[10px]'>
            <div className='py-[12px] max-md:py-[8px] max-md:px-[10px] px-[15px] border-b border-[#3d444d]'>
              <p className='text-[hotpink] text-[32px] max-md:text-[26px] max-sm:text-[24px]'>${data?.price}</p>
            </div>
            <div className='py-[12px] max-md:py-[8px] max-md:px-[10px] px-[15px] border-b border-[#3d444d] flex items-center gap-[12px]'>
              <p className='text-white text-[14px] max-sm:text-[11px]'><span className='text-[#8b919a]'>Availability status:</span> {data?.availabilityStatus}</p>
              <div className='size-[24px] border-[0.5px] border-[#3d444d] rounded-[4px] flex items-center justify-center'>
                <MdOutlineDone className='text-white' />
              </div>
            </div>
            <div className='py-[12px] max-md:py-[8px] max-md:px-[10px] px-[15px] border-b border-[#3d444d]'>
              <p className='text-white text-[14px] max-sm:text-[11px]'><span className='text-[#8b919a]'>Return Policy:</span> {data?.returnPolicy} <span></span></p>
            </div>
            <div className='py-[12px] max-md:py-[8px] max-md:px-[10px] px-[15px] border-b border-[#3d444d]'>
              <p className='text-white text-[14px] max-sm:text-[11px]'><span className='text-[#8b919a]'>Shipping Information:</span> {data?.returnPolicy} <span></span></p>
            </div>
            <div className='py-[12px] max-md:py-[8px] max-md:px-[10px] px-[15px] border-b border-[#3d444d]'>
              <p className='text-white text-[14px] max-sm:text-[11px]'><span className='text-[#8b919a]'>Warranty Information:</span> {data?.warrantyInformation} <span></span></p>
            </div>
            <div className='flex-1 flex flex-col justify-end pt-[14px]'>
              <button className='cursor-pointer max-lg:w-[50%] w-[94%] mx-auto max-lg:h-[40px] max-md:h-[35px] max-sm:text-[14px] max-md:rounded-[8px] h-[50px] text-[18px] font-medium text-[#f0f6fc] border border-[#3f934b] rounded-[12px] bg-[#238636]'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetail;