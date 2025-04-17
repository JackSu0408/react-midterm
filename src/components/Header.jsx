import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router';
import CartSummary from './CartSummary';

function Header({ title }) {
  return (
    <header className="flex flex-col items-center bg-[#DDE3EA] pr-8 py-4 font-[playfair]">
      <div className="flex items-center justify-between w-full max-w-screen-xl px-6">
        <img
          src="/images/logo.png"
          alt="WA&WA Logo"
          className="h-16 w-auto"
        />
        <Link to="/" className="text-black font-[playfair] text-4xl mt-2">
          {title}
        </Link>
        <div className="flex items-center space-x-4">
          <CartSummary className="text-2xl cursor-pointer" />
          <UserOutlined className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
}

export default Header;