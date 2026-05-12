import { Play, ArrowRight, Shield, BarChart3, Clock, TrendingDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden bg-[#0a0f1d] text-white">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm font-semibold mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
              Quản lý xe thông minh trong tầm tay
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Kiểm soát đội xe. <br />
              Tối ưu <span className="text-blue-500">vận hành.</span>
            </h1>
            <p className="text-lg text-slate-400 mb-12 max-w-lg leading-relaxed">
              DriveFleet giúp bạn theo dõi vị trí, tình trạng xe, chi phí và lịch bảo dưỡng – mọi lúc, mọi nơi trên một nền tảng duy nhất.
            </p>

            <div className="flex flex-wrap gap-5 mb-14">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all shadow-2xl shadow-blue-900/20 group">
                Dùng thử miễn phí <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/5 border border-white/10 hover:bg-white/10 text-white px-10 py-4 rounded-full font-bold text-lg flex items-center gap-2 transition-all">
                <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center">
                  <Play size={16} className="fill-current ml-0.5" />
                </div>
                Xem demo
              </button>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-x-10 gap-y-6 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 text-slate-400 font-medium group">
                <Clock className="text-blue-500 group-hover:scale-110 transition-transform" size={22} />
                <span className="text-sm">Theo dõi real-time</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 font-medium group">
                <BarChart3 className="text-blue-500 group-hover:scale-110 transition-transform" size={22} />
                <span className="text-sm">Báo cáo tự động</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 font-medium group">
                <TrendingDown className="text-blue-500 group-hover:scale-110 transition-transform" size={22} />
                <span className="text-sm">Tiết kiệm chi phí</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 font-medium group">
                <Shield className="text-blue-500 group-hover:scale-110 transition-transform" size={22} />
                <span className="text-sm">Bảo mật tuyệt đối</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Image / Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] -z-10" />
            
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] border-[1px] border-white/10 p-2 bg-white/5 backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=2070"
                alt="Semi-truck and Dashboard"
                className="w-full aspect-[4/3] object-cover rounded-[32px]"
                referrerPolicy="no-referrer"
              />
              {/* Dashboard HUD Overlay Effect */}
              <div className="absolute inset-0 rounded-[32px] overflow-hidden pointer-events-none">
                 <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 hidden md:block">
                    <div className="text-[10px] uppercase font-bold text-blue-400 mb-1">Vận tốc hiện tại</div>
                    <div className="text-2xl font-bold flex items-baseline gap-1">82 <span className="text-xs font-normal text-slate-400 uppercase">km/h</span></div>
                 </div>
                 <div className="absolute bottom-8 right-8 bg-blue-600/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 hidden md:block">
                    <div className="text-[10px] uppercase font-bold text-white/70 mb-1">Trạng thái pin</div>
                    <div className="text-2xl font-bold">94%</div>
                 </div>
              </div>
            </div>

            {/* Floating Point On Road Effect */}
            <div className="absolute -bottom-10 left-12 w-24 h-24 bg-blue-500/30 rounded-full blur-2xl animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
