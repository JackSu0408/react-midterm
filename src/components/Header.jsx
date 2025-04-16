import { ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

function Header({ title }) {
  return (
    <header className="w-full max-w-screen-xl mx-auto flex flex-col items-center bg-[#DDE3EA] py-4 font-[playfair]">
      {/* Logo */}
      <div className="flex items-center justify-between w-full px-6">
        <img
          src="/images/logo.png"
          alt="WA&WA Logo"
          className="h-16 w-auto"
        />
        {/* Title */}
          <h2 className="text-black font-[playfair] text-4xl mt-2">
            {title}
          </h2>
        <div className="flex items-center space-x-4">
          <ShoppingCartOutlined className="text-2xl cursor-pointer" />
          <UserOutlined className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;