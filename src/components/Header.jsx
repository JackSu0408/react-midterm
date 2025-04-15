import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

function Header() {
   return (
      <header className="flex justify-between items-center px-2 py-2 bg-[#DDE3EA]">
      {/* Logo */}
      <div className="flex items-center">
         <img
            src="/images/logo.png"
            alt="WA&WA Logo"
            className="h-10 w-auto pb-2"
         />
      </div>

      {/* Title */}
      <h2 className="text-black font-playfair text-3xl">
         WA&WA
      </h2>

      <div className="flex items-center space-x-4">
         <ShoppingCartOutlined className="text-2xl cursor-pointer" />
         <UserOutlined className="text-2xl cursor-pointer" />
      </div>
   </header>  
   );
}

export default Header;