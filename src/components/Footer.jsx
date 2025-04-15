import { Link } from 'react-router';

function Footer() {
  return (
    <footer className="w-full bg-[#AAB7BF] py-8 relative">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* 左側 Logo 和社交媒體 */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-black font-playfair text-3xl mb-4">WA&WA</h2>
          <div className="flex space-x-4">
            <a href = "#" className="text-black hover:text-gray-700">
              <img src="/images/line.png" alt="Line" className="h-6 w-6 rounded-sm" />
            </a>
            <a href = "#" className="text-black hover:text-gray-700">
              <img src="/images/fb.png" alt="Facebook" className="h-6 w-6 rounded-sm" />
            </a>
            <a href = "#" className="text-black hover:text-gray-700">
              <img src="/images/ig.png" alt="Instagram" className="h-6 w-6 rounded-sm" />
            </a>
          </div>
        </div>

        {/* 中間 Customer Service */}
        <div className="text-center md:text-center mt-6 md:mt-0">
          <h3 className="text-black font-bold mb-2">Customer Service</h3>
          <ul className="space-y-1 text-gray-700">
            <li>會員制度</li>
            <li>購物須知</li>
            <li>退換貨條款</li>
            <li>聯絡客服</li>
          </ul>
        </div>

        {/* 右側 Other Information */}
        <div className="text-center md:text-center mt-6 md:mt-0">
          <h3 className="text-black font-bold mb-2">Other Information</h3>
          <ul className="space-y-1 text-gray-700">
            <li>關於我們</li>
            <li>隱私政策</li>
            <li>聯絡我們</li>
          </ul>
        </div>
      </div>

      {/* 右下角圖案 */}
      <img
        src="/images/logo.png"
        alt="Footer Logo"
        className="absolute bottom-2 right-5 h-30 w-auto opacity-50"
      />

      {/* 底部版權聲明 */}
      <div className="text-center mt-8 text-gray-500 text-sm">
        Copyright © 2025 WA&WA. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;