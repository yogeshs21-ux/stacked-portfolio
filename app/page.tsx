
"use client"
import BlurFade from "@/components/blur-fade";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/resume-data/data";
import { X,AlignJustify } from "lucide-react";
import Image from "next/image";

import React, { useEffect, useRef, useState } from 'react';
import "./stacked-menu.css"
import { cn } from '@/lib/utils';
import Experience from "@/components/experience";
import Project from "@/components/project";
import Home from "@/components/home";
import AboutUS from "@/components/about";

const BLUR_DELAY = 0.04;

interface PageData {
  id: string;
  title: string;
  background: string;
  content:any
}

const StackedMenu: React.FC = () => {
  const toggleRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  
  const pages: PageData[] = [
    { id: 'page1', title: 'CONTACT', background: 'bg-[#2B2D42]',content:(<div>consct</div>)},
    { id: 'page2', title: 'ABOUT', background: 'bg-[#40916C]',content:(<AboutUS/>)},
    { id: 'page3', title: 'EXPERIENCE', background: 'bg-[#8D4B55]', content:(<Experience/>)},
    { id: 'page4', title: 'PROJECT', background: 'bg-[#6998AB]' , content:(<Project/>)},
    { id: 'page5', title: 'HOME', background: 'bg-[#B1D0E0]', content:(<Home/>) },
  ];

  useEffect(() => {
    const handlePageClick = (event: MouseEvent) => {
      const target = event.currentTarget as HTMLElement;
      const pageIndex = parseInt(target.getAttribute('data-index') || '0');
      
      if (toggleRef.current?.checked) {
        const pages = document.querySelectorAll('.page');
        pages.forEach((page, index) => {
          (page as HTMLElement).style.left = index > pageIndex ? '100vw' : '0';
        });
        toggleRef.current.checked = false;
      }
      setIsChecked(false);
    };

    const pages = document.querySelectorAll('.page');
    pages.forEach((page, index) => {
      page.addEventListener('click', handlePageClick as EventListener);
      (page as HTMLElement).setAttribute('data-index', index.toString());
    });

    return () => {
      pages.forEach(page => {
        page.removeEventListener('click', handlePageClick as EventListener);
      });
    };
  }, []);

  const closeMenu=()=>{
    //@ts-expect-error
    toggleRef.current.checked = false
    setIsChecked(false);
    
  }

  return (
    <div className="center bg-black" >
      <div className="menu overflow-hidden">
        <input 
          type="checkbox" 
          className='hidden'
          data-menu={isChecked}
          id="toggle" 
          ref={toggleRef}
          onClick={()=>setIsChecked(true)}
        />
        <label className="w-[40px] h-[40px] flex justify-center items-center">
          <X className='size-6 text-white flex justify-center items-center cursor-pointer' onClick={closeMenu}/>
        </label>
        {pages.map((page) => (
          <div 
            key={page.id}
            className={cn("page text-white",isChecked ? page.background : 'bg-black',)}
            id={page.id}
          >
            <div className="head">
              <label htmlFor="toggle" className="flex justify-center items-center">
                {isChecked||<AlignJustify className='size-6 mx-2 mt-10 text-white flex justify-center items-center cursor-pointer'/>}
              </label>
              {isChecked && <div className="ml-2 mt-8">{page.title}</div>}
            </div>
            <div className="content">
              <div className="text max-w-4xl container mx-auto h-svh overflow-auto">
               {page.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackedMenu;


// "use client"
// import React, { useEffect, useRef, useState } from 'react';
// import "./stacked-menu.css"
// import AboutUS from '@/components/about';
// import Experience from '@/components/experience';
// import Project from '@/components/project';
// import Home from '@/components/home';
// import { AlignJustify, X } from 'lucide-react';
// import { cn } from '@/lib/utils';


// interface PageData {
//   id: string;
//   title: string;
//   background: string;
//   content: any
// }

// const StackedMenu: React.FC = () => {
//   const toggleRef = useRef<HTMLInputElement>(null);
//   const [isChecked, setIsChecked] = useState(false);

//   const pages: PageData[] = [
//     { id: 'page1', title: 'CONTACT', background: 'bg-[#2B2D42]',content:(<div>consct</div>)},
//     { id: 'page2', title: 'ABOUT', background: 'bg-[#40916C]',content:(<AboutUS/>)},
//     { id: 'page3', title: 'EXPERIENCE', background: 'bg-[#8D4B55]', content:(<Experience/>)},
//     { id: 'page4', title: 'PROJECT', background: 'bg-[#6998AB]' , content:(<Project/>)},
//     { id: 'page5', title: 'HOME', background: 'bg-[#B1D0E0]', content:(<Home/>) },
//   ];

//   useEffect(() => {
//     const handlePageClick = (event: MouseEvent) => {
//       const target = event.currentTarget as HTMLElement;
//       const pageIndex = parseInt(target.getAttribute('data-index') || '0');
      
//       if (toggleRef.current?.checked) {
//         const pages = document.querySelectorAll('.page');
//         pages.forEach((page, index) => {
//           (page as HTMLElement).style.left = index > pageIndex ? '100vw' : '0';
//         });
//         toggleRef.current.checked = false;
//       }
//     };

//     const pages = document.querySelectorAll('.page');
//     pages.forEach((page, index) => {
//       page.addEventListener('click', handlePageClick as EventListener);
//       (page as HTMLElement).setAttribute('data-index', index.toString());
//     });

//     return () => {
//       pages.forEach(page => {
//         page.removeEventListener('click', handlePageClick as EventListener);
//       });
//     };
//   }, []);

//   const closeMenu=()=>{
//     //@ts-expect-error
//     toggleRef.current.checked = false
//     setIsChecked(false);
    
//   }

//   return (
//     <>
//       <div className="center bg-black">
//         <div className="menu">
//           <input 
//           type="checkbox" 
//           id="toggle" 
//           ref={toggleRef} 
//           onClick={()=>setIsChecked(true)}
//           />
//           <label htmlFor="toggle" className="toggle-btn">
//             <X className='size-6 text-white flex justify-center items-center cursor-pointer' onClick={closeMenu}/>
//           </label>

//           {pages.map((page, index) => (
//             <div 
//               key={page.id}
//               className={cn("page text-white",isChecked ? page.background : 'bg-black',)}
//               id={page.id}
//               style={{ 
//                 transition: 'color 0.3s ease'
//               }}
//             >
//               <div className="head">
//                 <label htmlFor="toggle" className="toggle-btn2">
//                 {isChecked||<AlignJustify className='size-6 mx-2 text-white flex justify-center items-center cursor-pointer'/>}
//                 </label>
//                 {isChecked && <div className="ml-2 mt-0">{page.title}</div>}
//               </div>
//               <div className="content">
//                 <div className="text">
//                 {page.content}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default StackedMenu;