function Header() {
   return (
      <header className="text-center flex flex-col items-center header bg-[#DDE3EA]" >
         <h2 className="text-black pt-5 pb-2 font-playfair text-3xl ">
            WA&WA
         </h2>
         <div className="flex mt-6 justify-center">
            <hr className="my-[25px] mx-auto w-[100px] border-0 border-t-[6px] border-[#6366F2] opacity-100 rounded" />
         </div>
      </header>
   );
}

export default Header;