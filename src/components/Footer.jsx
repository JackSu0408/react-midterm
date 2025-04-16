import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="w-full bg-[#AAB7BF] py-10 font-[playfair] relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* 左側 Logo 和社交媒體 */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-black font-playfair text-5xl mb-8 font-bold">WA<br />&WA</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-black hover:text-gray-700">
              <img src="/images/line.png" alt="Line" className="h-6 w-6 rounded-md" />
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              <img src="/images/fb.png" alt="Facebook" className="h-6 w-6 rounded-md" />
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              <img src="/images/ig.png" alt="Instagram" className="h-6 w-6 rounded-md" />
            </a>
            <a href="#" className="text-black hover:text-gray-700">
              <img src="/images/threads.png" alt="Threads" className="h-6 w-6 rounded-md" />
            </a>
          </div>
        </div>

        {/* 中間 Customer Service */}
        <div className="text-center md:text-left">
          <h3 className="text-black font-semibold mb-2 text-lg text-center">Customer Service</h3>
          <ul className="space-y-1 text-black text-sm text-center">
            <li>會員制度</li>
            <li>購物說明</li>
            <li>顧客服務</li>
            <li>付款條則</li>
            <li>隱私權政策</li>
          </ul>
        </div>

        {/* 右側 Other Information */}
        <div className="text-center md:text-left">
          <h3 className="text-black font-semibold mb-2 text-lg text-center">Other Information</h3>
          <ul className="space-y-1 text-black text-sm text-center">
            <li>網站地圖</li>
            <li>聯絡我們</li>
            <li>關於我們</li>
          </ul>
        </div>
      </div>

      {/* 右下角圖片角色 */}
      <img
        src="/images/logo.png"
        alt="哭哭wawa"
        className="absolute bottom-0 right-0 w-32 md:w-40 opacity-80 pointer-events-none"
      />

      {/* 版權宣告 */}
      <div className="text-center text-black 800 text-xs mt-10">
        Copyright ©2025 All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
