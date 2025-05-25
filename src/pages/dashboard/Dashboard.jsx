import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { MdSpaceDashboard } from "react-icons/md";
import { PiUsersLight } from "react-icons/pi";
import { TfiStatsUp } from "react-icons/tfi";
import { PiRankingLight } from "react-icons/pi";
import { MdOutlinePayments } from "react-icons/md";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdOutlinePlayLesson } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoChevronBackOutline } from "react-icons/io5";



const Dashboard = () => {
  return (
    <section className='section_dashboard'>
      <div className='dashboard_top w-full h-[8dvh] grid grid-cols-[2fr_9fr] bg-secondary-darker-bg'>
        <div className='flex items-center gap-[4px] px-[4px] border-b-[.5px] border-border'>
          <Link to={'/'}>
            <span className='size-[36px] rounded-[8px] border border-transparent bg-transparent duration-100 hover:border-[#3d444d] active:bg-[#0d1116] flex items-center justify-center pr-[2px]'>
              <IoChevronBackOutline className='text-[20px] md:text-[22px] text-white' />
            </span>
          </Link>
          <Link to={''}>
            <div className='flex items-center gap-[5px]'>
              <MdSpaceDashboard className='text-[24px] sm:text-[26px] text-white' />
              <p className='text-[20px] md:text-[24px] leading-[100%] text-white'>Dashboard</p>
            </div>
          </Link>
        </div>
        <div className='border-b-[.5px] border-border'></div>
      </div>
      <div className='w-full h-[92dvh] grid grid-cols-[2fr_9fr]'>
        <div className='pr-[8px] py-[16px] bg-secondary-darker-bg border-r-[.5px] border-border max-md:absolute max-md:bottom-0 max-md:left-0 max-md:w-full'>
          <ul className='flex flex-col text-white max-md:flex-row max-md:w-full max-md:justify-between'>
            <li>
              <NavLink className="dashboard_tab w-full py-[12px] px-[10px] pl-[20px] flex items-center gap-[8px] duration-200 cursor-pointer border-l-[1.4px] border-border hover:border-secondary-text" to={""} end={true}>
                <span className='text-[18px]'><PiUsersLight /></span>
                <span className='text-[14px] max-md:hidden'>My Groups</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dashboard_tab w-full py-[12px] px-[10px] pl-[20px] flex items-center gap-[8px] duration-200 cursor-pointer border-l-[1.4px] border-border hover:border-secondary-text" to={"statistics"}>
                <span className='text-[18px]'><TfiStatsUp /></span>
                <span className='text-[14px] max-md:hidden'>Statistics</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dashboard_tab w-full py-[12px] px-[10px] pl-[20px] flex items-center gap-[8px] duration-200 cursor-pointer border-l-[1.4px] border-border hover:border-secondary-text" to={"ranking"}>
                <span className='text-[18px]'><PiRankingLight /></span>
                <span className='text-[14px] max-md:hidden'>Ranking</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dashboard_tab w-full py-[12px] px-[10px] pl-[20px] flex items-center gap-[8px] duration-200 cursor-pointer border-l-[1.4px] border-border hover:border-secondary-text" to={"payments"}>
                <span className='text-[18px]'><MdOutlinePayments /></span>
                <span className='text-[14px] max-md:hidden'>Payments</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dashboard_tab w-full py-[12px] px-[10px] pl-[20px] flex items-center gap-[8px] duration-200 cursor-pointer border-l-[1.4px] border-border hover:border-secondary-text" to={"store"}>
                <span className='text-[18px]'><HiOutlineShoppingBag /></span>
                <span className='text-[14px] max-md:hidden'>Store</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dashboard_tab w-full py-[12px] px-[10px] pl-[20px] flex items-center gap-[8px] duration-200 cursor-pointer border-l-[1.4px] border-border hover:border-secondary-text" to={"extra-lessons"}>
                <span className='text-[18px]'><MdOutlinePlayLesson /></span>
                <span className='text-[14px] max-md:hidden'>Extra Lessons</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dashboard_tab w-full py-[12px] px-[10px] pl-[20px] flex items-center gap-[8px] duration-200 cursor-pointer border-l-[1.4px] border-border hover:border-secondary-text" to={"support"}>
                <span className='text-[18px]'><GoQuestion /></span>
                <span className='text-[14px] max-md:hidden'>Support</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dashboard_tab w-full py-[12px] px-[10px] pl-[20px] flex items-center gap-[8px] duration-200 cursor-pointer border-l-[1.4px] border-border hover:border-secondary-text" to={"contact"}>
                <span className='text-[18px]'><IoCallOutline /></span>
                <span className='text-[14px] max-md:hidden'>Contact with Storé</span>
              </NavLink>
            </li>
            <li>
              <NavLink className="dashboard_tab w-full py-[12px] px-[10px] pl-[20px] flex items-center gap-[8px] duration-200 cursor-pointer border-l-[1.4px] border-border hover:border-secondary-text" to={"settings"}>
                <span className='text-[18px]'><IoSettingsOutline /></span>
                <span className='text-[14px] max-md:hidden'>Settings</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className='p-[16px] max-md:col-span-2'>
          <Outlet />
        </div>
      </div>

    </section >
  )
}

export default Dashboard