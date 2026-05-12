import { UserPlus, Cpu, Activity, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Steps() {
  const steps = [
    {
      icon: <UserPlus size={40} />,
      title: 'Đăng ký tài khoản',
      desc: 'Tạo tài khoản và thiết lập thông tin doanh nghiệp.',
    },
    {
      icon: <Cpu size={40} />,
      title: 'Kết nối thiết bị',
      desc: 'Lắp thiết bị định vị và kết nối với hệ thống DriveFleet.',
    },
    {
      icon: <Activity size={40} />,
      title: 'Giám sát & quản lý',
      desc: 'Theo dõi đội xe, tài xế và dữ liệu vận hành real-time.',
    },
    {
      icon: <Zap size={40} />,
      title: 'Tối ưu hiệu quả',
      desc: 'Phân tích dữ liệu để tối ưu chi phí và nâng cao hiệu suất.',
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <div className="grid grid-cols-4 gap-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="w-8 h-8 border border-white rounded-full" />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <h3 className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-4">Quy trình 4 bước</h3>
          <h2 className="text-4xl font-bold mb-4">Bắt đầu chỉ với 4 bước đơn giản</h2>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connector lines (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-500/20 via-blue-500 to-blue-500/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-8">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold ring-4 ring-slate-900">
                  {index + 1}
                </div>
                <div className="w-32 h-32 bg-slate-800 rounded-3xl flex items-center justify-center group-hover:bg-blue-600/20 transition-colors border border-slate-700 group-hover:border-blue-500/50">
                  <div className="text-blue-500 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-slate-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
