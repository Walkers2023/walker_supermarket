import {React, useState} from 'react'
import {  HiChevronLeft, HiOutlineCalendar, HiOutlineLocationMarker, HiOutlineLogout, HiOutlineUser, HiOutlineUserGroup, } from "react-icons/hi"
import { BsHeartPulse } from "react-icons/bs"
import { Link, NavLink } from 'react-router-dom'

const Sidebar = ({children}) => {

    // Opening and Closing Sidebar
    const [open, setOpen] = useState(false)


    // Side Bar Menu Items
    const MenuItem = [
        {
            path: "/",
            name: "Account",
            icon: < HiOutlineUser/>
        },
        {
            path: "/address",
            name: "Address",
            icon: < HiOutlineLocationMarker/>
        },
        {
            path: "/health",
            name: "Health",
            icon: < BsHeartPulse/>
        },
        {
            path: "/meal_planner",
            name: "Meal Planner",
            icon: < HiOutlineCalendar/>
        },
        {
            path: "/community",
            name: "Communities",
            icon: < HiOutlineUserGroup />
        },
    ]
    return (
        <main className=' main-container'>
        {/* Sidebar */}
            {/* Desktop and tablet Screen */}
            <aside className={`sidebar ${open ? " w-300 px-3 py-10" : " w-20 px-3 py-10"}`}>
                <section className=' w-full h-10 '>
                    <h3 className={`w-full h-10 px-5 py-[10px] flex gap-5 flex-row items-center rounded-lg text-lg font-semibold ${!open && " hidden"} duration-200 `}>Hello, User</h3>
                    <div className={`open-close ${!open && ' rotate-180'}`} onClick={()=> setOpen(!open)}>
                        <HiChevronLeft fontSize={"50px"} />
                    </div>
                </section>
                <section className='flex flex-col space-y-20'>
                    {
                        MenuItem.map((item, index) => (
                            <NavLink
                            to={item.path}
                            key={index}
                            className={({isActive}) =>
                                isActive ? `bg-white text-secondary w-full h-10 flex flex-row items-center rounded-lg ${!open? " justify-center" : " px-4 py-[10px] gap-4 "}`: `hover:bg-gray w-full h-10 flex gap-4 flex-row items-center rounded-lg ease-in-out duration-300 transition delay-150 ${!open? " justify-center" : " px-4 py-[10px] gap-4 "}` }
                            >
                                <div className=' text-lg font-medium '>{item.icon}</div>
                                <div className={`${!open && " hidden"} duration-200 text-lg font-medium`}>{item.name}</div>
                            </NavLink>
                        ))
                    }
                </section>
                <section className=' w-full h-fit'>
                    <Link className={` mt-3 ${!open ? " justify-center" : "px-5 py-[10px] gap-5 "} w-full h-10 rounded-lg hover:bg-gray ease-in-out duration-300 transition delay-150 text-lg font-medium flex flex-row items-center`}>
                        <div className=''>< HiOutlineLogout/></div>
                        <div className={`${!open && " hidden"} duration-200`}>Logout</div>
                    </Link>
                </section>
            </aside>
        {/* content container */}
            <article className=' transition-all delay-200 ease-in-out duration-300 h-full w-full md:mr-5 bg-white '>
                {children}
            </article>
            
        </main>
    )
}

export default Sidebar