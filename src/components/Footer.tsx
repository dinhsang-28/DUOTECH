import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
              <span className="text-xl font-bold text-slate-900">DriveFleet</span>
            </div>
            <p className="text-slate-500 mb-8 max-w-xs">
              Lãnh đạo trong giải pháp quản lý đội xe thông minh, giúp doanh nghiệp tối ưu hóa chi phí và tăng cường hiệu quả vận hành.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Sản phẩm</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Tính năng</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Bảng giá</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Tải về</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Bản cập nhật</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Công ty</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Về chúng tôi</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Liên hệ</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Tuyển dụng</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Blog</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Hỗ trợ</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Trung tâm hỗ trợ</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Tài liệu API</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Điều khoản</a></li>
              <li><a href="#" className="text-slate-500 hover:text-blue-600 text-sm">Bảo mật</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} DriveFleet. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-400">
            <Mail size={16} />
            <span className="text-sm">support@drivefleet.com</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
