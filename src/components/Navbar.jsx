import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navBarContent = [
    { to: "/products/category/人氣推薦", label: "人氣推薦" },
    { to: "/products/category/日韓必買", label: "日韓必買" },
    { to: "/products/category/台灣美食", label: "台灣美食" },
    { to: "/products/category/歐美選物", label: "歐美選物" },
    { to: "/products/category/東南亞特色", label: "東南亞特色" },
  ];

  // 這段是共用的導覽列內容
  const NavBarContent = ({ onClick }) => (
    <div className="w-full flex flex-col md:flex-row md:justify-center md:space-x-12 text-[#394E5F] font-bold">
      {navBarContent.map(({ to, label }) => (
        <NavLink
          key={to}
          to={to}
          onClick={() => {
            setIsOpen(false); // 點擊後關閉 Drawer
            if (onClick) onClick();
          }}
          className={({ isActive }) =>
            `my-2 md:my-0 text-base text-[#394E5F] transition-all duration-300 ease-in-out ${
              isActive ? "opacity-100 font-bold" : "opacity-60"
            } hover:opacity-100 hover:[text-shadow:0px_0px_30px_white]`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  );

  return (
    <>
      {/* 桌面版導覽列 */}
      <div className="hidden md:flex justify-center items-center w-full mt-3 mb-8">
        <NavBarContent />
      </div>

      {/* 手機版導覽列（漢堡 + Drawer） */}
      <div className="flex justify-start items-center p-3 md:hidden z-50">
        <Button
          type="text"
          className="ml-2"
          icon={<MenuOutlined style={{ fontSize: '24px', color: '#394E5F' }} />}
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Drawer */}
      <Drawer
        title="CATEGORY"
        placement="left"
        onClose={() => setIsOpen(false)}
        open={isOpen}

      >
        <NavBarContent />
      </Drawer>
    </>
  );
}
