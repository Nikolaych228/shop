import React from 'react'
import Menu from './Menu'


const Cart = () => {
  return (
    <Menu component_name={'cart'}>
        <div>
            <p className='text-[3.975rem]'>CART</p>
            <div className='w-[9.5rem] h-[0.375rem] bg-[#F1D5BB]'></div>
        </div>
        <div class="mt-10">
            <div class="mr-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div class="rounded-lg max-h-[34rem] overflow-y-auto bg-[#F1D5BB] p-5 md:w-2/3">
                <div class="justify-between bg-white mb-6 rounded-lg p-6 shadow-md border border-solid sm:flex sm:justify-start">
                <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm">259.000 ₭</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
                <div class="justify-between bg-white mb-6 rounded-lg p-6 shadow-md border border-solid sm:flex sm:justify-start">
                <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm">259.000 ₭</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
                <div class="justify-between bg-white mb-6 rounded-lg p-6 shadow-md border border-solid sm:flex sm:justify-start">
                <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm">259.000 ₭</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
                <div class="justify-between bg-white mb-6 rounded-lg p-6 shadow-md border border-solid sm:flex sm:justify-start">
                <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm">259.000 ₭</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
                <div class="justify-between bg-white mb-6 rounded-lg p-6 shadow-md border border-solid sm:flex sm:justify-start">
                <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm">259.000 ₭</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
                <div class="justify-between bg-white mb-6 rounded-lg p-6 shadow-md border border-solid sm:flex sm:justify-start">
                <img src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="product-image" class="w-full rounded-lg sm:w-40" />
                <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div class="mt-5 sm:mt-0">
                    <h2 class="text-lg font-bold text-gray-900">Nike Air Max 2019</h2>
                    <p class="mt-1 text-xs text-gray-700">36EU - 4US</p>
                    </div>
                    <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div class="flex items-center border-gray-100">
                        <span class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                        <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                        <span class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                    </div>
                    <div class="flex items-center space-x-4">
                        <p class="text-sm">259.000 ₭</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div class="mb-2 flex justify-between">
                <p class="text-gray-700">Subtotal</p>
                <p class="text-gray-700">$129.99</p>
                </div>
                <div class="flex justify-between">
                <p class="text-gray-700">Shipping</p>
                <p class="text-gray-700">$4.99</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                <p class="text-lg font-bold">Total</p>
                <div class="">
                    <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                    <p class="text-sm text-gray-700">including VAT</p>
                </div>
                </div>
                <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
            </div>
            </div>
        </div>
    </Menu>
  )
}

export default Cart