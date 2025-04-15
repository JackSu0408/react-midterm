function Navbar() {
    return (
      <nav className="flex justify-center items-center px-5 py-3 bg-[#DDE3EA]">
        {/* Center Section: Navigation Links */}
        <ul className="flex space-x-17 text-[#394E5F] font-bold">
          <li className="cursor-pointer hover:text-black">人氣推薦</li>
          <li className="cursor-pointer hover:text-black">日韓必買</li>
          <li className="cursor-pointer hover:text-black">台灣美食</li>
          <li className="cursor-pointer hover:text-black">歐美選物</li>
          <li className="cursor-pointer hover:text-black">東南亞特色</li>
        </ul>
      </nav>
    );
  }
  export default Navbar;
// import { NavLink } from 'react-router';
// import { useState } from 'react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const navBarContent = [
//     { to: "/products/category/popular", label: "人氣推薦" },
//     { to: "/products/category/japan-korea", label: "日韓必買" },
//     { to: "/products/category/taiwan", label: "台灣美食" },
//     { to: "/products/category/europe-america", label: "歐美選物" },
//     { to: "/products/category/southeast-asia", label: "東南亞特色" },
//   ];

//   const NavBarContent = () => (
//     <div className="flex flex-col md:flex-row md:justify-around md:space-x-12">
//       {navBarContent.map(({ to, label }) => (
//         <NavLink
//           key={to}
//           to={to}
//           onClick={() => setIsOpen(false)}
//           className={({ isActive }) =>
//             `my-3 md:my-0 text-lg font-bold transition-all duration-500 ease-in-out ${
//               isActive ? "text-black" : "text-[#394E5F]"
//             } hover:text-black`
//           }
//         >
//           {label}
//         </NavLink>
//       ))}
//     </div>
//   );

//   return (
//     <>
//       {/* 桌面版導覽列 */}
//       <div className="hidden md:flex justify-center items-center px-5 py-3 bg-[#DDE3EA] shadow-md">
//         <NavBarContent />
//       </div>

//       {/* 手機版 Drawer */}
//       <div className="drawer md:hidden">
//         <input
//           id="drawer-toggle"
//           type="checkbox"
//           className="drawer-toggle"
//           checked={isOpen}
//           readOnly
//         />
//         <label
//           htmlFor="drawer-toggle"
//           className="absolute top-4 left-4 cursor-pointer"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <div className="w-6 h-6 flex flex-col justify-between">
//             <span className="block w-full h-1 bg-black"></span>
//             <span className="block w-full h-1 bg-black"></span>
//             <span className="block w-full h-1 bg-black"></span>
//           </div>
//         </label>
//         <div className="drawer-side z-50">
//           <label
//             htmlFor="drawer-toggle"
//             className="drawer-overlay"
//             onClick={() => setIsOpen(false)}
//           ></label>
//           <div className="menu p-4 w-64 min-h-full bg-[#DDE3EA]">
//             <h2 className="text-xl font-bold mb-10">CATEGORY</h2>
//             <NavBarContent />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;