import { NavLink } from 'react-router';

export default function NavBar() {

  const navBarContent = [
    { to: "/products/category/人氣推薦", label: "人氣推薦" },
    { to: "/products/category/日韓必買", label: "日韓必買" },
    { to: "/products/category/台灣美食", label: "台灣美食" },
    { to: "/products/category/歐美選物", label: "歐美選物" },
    { to: "/products/category/東南亞特色", label: "東南亞特色" },
  ];  

  return (
    <div className="flex flex-wrap justify-center space-x-17 text-[#394E5F] font-bold">
      {navBarContent.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `mx-6 text-black text-base transition-all duration-500 ease-in-out ${
              isActive ? "opacity-100 font-bold" : "opacity-60"
            } hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

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