import React from 'react'
import { useNavigate } from 'react-router-dom'


const Menu = ({children,component_name}) => {
   const navigate = useNavigate()
   return (
    
<div className='h-full'>
   <aside id="default-sidebar" class="fixed top-4 left-7 bg-black rounded-2xl z-40 w-[5.25rem] h-[41.8rem] transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full">
         <ul class="flex flex-col flex-space font-medium py-4 space">
            <li className='w-full' onClick={()=>{navigate('/')}}>
               <div class="flex items-center cursor-pointer justify-center text-[4rem] hover:text-black text-[#F1D5BB] font-[700] hover:bg-[#F1D5BB] group">
                  S.
               </div>
            </li>
            <li onClick={()=>{navigate('/login')}}>
               <div className={`flex justify-center mt-1 cursor-pointer h-[6.5rem] items-center hover:bg-[#F1D5BB] group`}>
                  <svg className={`fill-white group-hover:fill-black`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                     <path className='' d="M38.9255 17.3981L38.9228 17.3953L22.6043 1.0791C21.9087 0.383301 20.9839 0 20.0002 0C19.0166 0 18.0918 0.382996 17.3959 1.0788L1.08597 17.3868C1.08047 17.3923 1.07498 17.3981 1.06949 17.4036C-0.358882 18.84 -0.356441 21.1707 1.07651 22.6035C1.73117 23.2584 2.59583 23.6377 3.5203 23.6774C3.55784 23.681 3.59568 23.6829 3.63383 23.6829H4.28423V35.6906C4.28423 38.0667 6.21772 40 8.59467 40H14.979C15.626 40 16.151 39.4754 16.151 38.8281V29.4141C16.151 28.3298 17.033 27.4478 18.1174 27.4478H21.8831C22.9675 27.4478 23.8495 28.3298 23.8495 29.4141V38.8281C23.8495 39.4754 24.3742 40 25.0215 40H31.4058C33.7828 40 35.7163 38.0667 35.7163 35.6906V23.6829H36.3194C37.3027 23.6829 38.2275 23.2999 38.9237 22.6041C40.3582 21.1688 40.3588 18.8342 38.9255 17.3981Z"/>
                  </svg>
               </div>
            </li>
            <li onClick={()=>{navigate('/products')}}>
               <div className={`flex items-center mt-1 justify-center cursor-pointer h-[6.5rem] items-center hover:bg-[#F1D5BB] group ${component_name == 'products' ? 'bg-[#F1D5BB]' : null}`}>
                  <svg className={`fill-white group-hover:fill-black ${component_name == 'products' ? '!fill-black' : null}`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M36.4208 15.458C33.0946 18.9609 28.5969 20.0624 25.3962 18.4982L22.321 21.7367L36.7136 36.8937L33.764 40L19.3714 24.843L4.95784 39.978L2.00819 36.8717L22.4256 15.3699C20.9403 11.9993 21.9863 7.2627 25.3125 3.75985C29.329 -0.447975 35.061 -1.24107 38.1152 1.97538C41.1904 5.21386 40.4164 11.2502 36.4208 15.458ZM17.1331 16.2511L11.2128 22.4858L2.44758 13.277C-0.81586 9.81823 -0.81586 4.24452 2.44758 0.807764L17.1331 16.2511Z"/>
                  </svg>
               </div>
            </li>
            <li onClick={()=>{navigate('/cart')}}>
               <div class={`flex items-center mt-1 justify-center cursor-pointer h-[6.5rem] items-center hover:bg-[#F1D5BB] group ${component_name == 'cart' ? 'bg-[#F1D5BB]' : null}`}>
                  <svg className={`fill-white group-hover:fill-black ${component_name == 'cart' ? '!fill-black' : null}`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5879 19.94C31.9081 21.18 30.5886 22 29.0892 22H14.1947L11.9955 26H35.9866V30H11.9955C8.95667 30 7.03739 26.74 8.49684 24.06L11.1958 19.18L3.99852 4H0V0H6.53757L8.41687 4H38.0059C39.5253 4 40.485 5.64 39.7452 6.96L32.5879 19.94ZM34.6071 8H10.3161L15.0543 18H29.0891L34.6071 8ZM11.9956 32C9.79644 32 8.0171 33.8 8.0171 36C8.0171 38.2 9.79644 40 11.9956 40C14.1948 40 15.9941 38.2 15.9941 36C15.9941 33.8 14.1948 32 11.9956 32ZM28.0096 36C28.0096 33.8 29.7889 32 31.9881 32C34.1873 32 35.9866 33.8 35.9866 36C35.9866 38.2 34.1873 40 31.9881 40C29.7889 40 28.0096 38.2 28.0096 36Z"/>
                  </svg>
               </div>
            </li>
            <li>
               <div class={`flex items-center mt-1 justify-center cursor-pointer h-[6.5rem] items-center hover:bg-[#F1D5BB] group`}>
                  <svg className={`fill-white group-hover:fill-black`} xmlns="http://www.w3.org/2000/svg" width="35" height="40" viewBox="0 0 35 40" fill="none">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 0C7.825 0 0 6.26 0 14C0 24.5 17.5 40 17.5 40C17.5 40 35 24.5 35 14C35 6.26 27.175 0 17.5 0ZM4.99989 14C4.99989 8.48 10.5999 4 17.4999 4C24.3999 4 29.9999 8.48 29.9999 14C29.9999 19.76 22.7999 28.38 17.4999 33.76C12.2999 28.42 4.99989 19.7 4.99989 14ZM11.2501 14C11.2501 11.2386 14.0483 9 17.5001 9C19.733 9 21.7963 9.95299 22.9127 11.5C24.0292 13.047 24.0292 14.953 22.9127 16.5C21.7963 18.047 19.733 19 17.5001 19C14.0483 19 11.2501 16.7614 11.2501 14Z"/>
                  </svg>
               </div>
            </li>
            <li>
               <div class={`flex items-center mt-1 justify-center cursor-pointer h-[6.5rem] items-center hover:bg-[#F1D5BB] group`}>
                  <svg className={`fill-white group-hover:fill-black`} xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                     <path d="M28.2044 30.625V33.75C28.2044 37.1964 25.4006 40 21.9541 40H6.25027C2.80377 40 0 37.1964 0 33.75V6.25C0 2.80365 2.80377 0 6.25027 0H21.9541C25.4006 0 28.2044 2.80365 28.2044 6.25V9.375C28.2044 10.238 27.5049 10.9375 26.6418 10.9375C25.7787 10.9375 25.0792 10.238 25.0792 9.375V6.25C25.0792 4.52698 23.6772 3.125 21.9541 3.125H6.25027C4.52718 3.125 3.12514 4.52698 3.12514 6.25V33.75C3.12514 35.473 4.52718 36.875 6.25027 36.875H21.9541C23.6772 36.875 25.0792 35.473 25.0792 33.75V30.625C25.0792 29.762 25.7787 29.0625 26.6418 29.0625C27.5049 29.0625 28.2044 29.762 28.2044 30.625ZM38.8576 17.316L35.3586 13.8171C34.7482 13.2068 33.7588 13.2068 33.1487 13.8171C32.5384 14.4272 32.5384 15.4166 33.1487 16.0266L35.6376 18.5156H16.8757C16.0127 18.5156 15.3132 19.2151 15.3132 20.0781C15.3132 20.9412 16.0127 21.6406 16.8757 21.6406H35.6376L33.1487 24.1296C32.5384 24.7397 32.5384 25.7291 33.1487 26.3391C33.4539 26.6443 33.8537 26.7969 34.2535 26.7969C34.6536 26.7969 35.0534 26.6443 35.3586 26.3391L38.8576 22.8403C40.3808 21.3171 40.3808 18.8391 38.8576 17.316Z"/>
                  </svg>
               </div>
            </li>
         </ul>
      </div>
   </aside>


<div class="sm:ml-52">
    {children}
</div>

</div>
  )
}

export default Menu