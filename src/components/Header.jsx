
const Header = () => {

     //Side Bar Functionality
    const toggleMobileMenu = () =>{
        const mobileMenu = document.getElementById("mobileMenu");

        if(mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden');
        }else {
        mobileMenu.classList.add('hidden')
       }
    } 
  return (




   
    <header className="py-1 px-7 flex justify-between items-center sticky top-0 z-50 w-full border-b-[0.3px] border-[#babaff] bg-[#000]">

         {/*left section*/}
        <div className="flex lg:gap-14 gap-4 items-center">
            <img className="md:w-16 w-12" src="images/logo.png" alt="logo-img" />
            <div className="hidden md:flex gap-5 items-center">
                <button className="h-8 px-6 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300 ">
                    PLAY NOW
                </button>

                <button className="h-8 px-6 bg-gradient-to-r from-gray-600 to-gray-400 rounded-lg font-medium text-nowrap hover:opacity-70 transition-all duration-300 ">
                    PLAY NOW
                </button>
            </div>
        </div>

        {/* right section Desktop */}
        <nav className="hidden md:flex lg:gap-8 gap-4">
            <a href="" className="relative p-y text-lg hover:text-purple-300 
            transition-colors duration-300 after:content-[''] 
            after:absolute after:w-0 after:h-0.5 after:bg-purple-400 
            after:left-0 after:bottom-0 after:transition-all hover:after:w-full 
            text-nowrap">
                <i class='bx bx-user-circle'></i>Avatar
            </a>

             <a href="" className="relative p-y text-lg hover:text-purple-300 
            transition-colors duration-300 after:content-[''] 
            after:absolute after:w-0 after:h-0.5 after:bg-purple-400 
            after:left-0 after:bottom-0 after:transition-all hover:after:w-full 
            text-nowrap">
                <i class='bx bx-diamond'></i>Arena
            </a>

             <a href="" className="relative p-y text-lg hover:text-purple-300 
            transition-colors duration-300 after:content-[''] 
            after:absolute after:w-0 after:h-0.5 after:bg-purple-400 
            after:left-0 after:bottom-0 after:transition-all hover:after:w-full 
            text-nowrap">
                <i class='bx bx-chevrons-up'></i>Beyond
            </a>

             <a href="" className="relative p-y text-lg hover:text-purple-300 
            transition-colors duration-300 after:content-[''] 
            after:absolute after:w-0 after:h-0.5 after:bg-purple-400 
            after:left-0 after:bottom-0 after:transition-all hover:after:w-full 
            text-nowrap">
                <i class='bx bx-store'></i>Shop
            </a>

            
        </nav>
        {/**Mobile menu */}
        <button onClick={toggleMobileMenu} className="text-3xl p-2 md:hidden">
           < i class='bx bx-menu'></i>
        </button>

        {/*mobile menu - hidden by default */}
        <div id="mobileMenu" className=" hidden fixed top-14 right-0 left-0 bg-black p-5 md:hidden">
            <nav className="flex flex-col gap-4 items-center">
                 <a href="" className="relative p-y text-lg hover:text-purple-300 
            transition-colors duration-300 after:content-[''] 
            after:absolute after:w-0 after:h-0.5 after:bg-purple-400 
            after:left-0 after:bottom-0 after:transition-all hover:after:w-full 
            text-nowrap">
                <i class='bx bx-user-circle'></i>Avatar
            </a>

             <a href="" className="relative p-y text-lg hover:text-purple-300 
            transition-colors duration-300 after:content-[''] 
            after:absolute after:w-0 after:h-0.5 after:bg-purple-400 
            after:left-0 after:bottom-0 after:transition-all hover:after:w-full 
            text-nowrap">
                <i class='bx bx-diamond'></i>Arena
            </a>

             <a href="" className="relative p-y text-lg hover:text-purple-300 
            transition-colors duration-300 after:content-[''] 
            after:absolute after:w-0 after:h-0.5 after:bg-purple-400 
            after:left-0 after:bottom-0 after:transition-all hover:after:w-full 
            text-nowrap">
                <i class='bx bx-chevrons-up'></i>Beyond
            </a>

             <a href="" className="relative p-y text-lg hover:text-purple-300 
            transition-colors duration-300 after:content-[''] 
            after:absolute after:w-0 after:h-0.5 after:bg-purple-400 
            after:left-0 after:bottom-0 after:transition-all hover:after:w-full 
            text-nowrap">
                <i class='bx bx-store'></i>Shop
            </a>
            </nav>

            <div className="flex flex-col gap-3 w-full mt-4">
                
                    <button className="bg-purple-700 py-2 rounded">
                        Play Now 
                    </button>
                    
                     <button className="bg-gray-500 py-2 rounded">
                        NFT Store 
                    </button>
                
            </div>
        </div>

    </header>
  )
}

export default Header
