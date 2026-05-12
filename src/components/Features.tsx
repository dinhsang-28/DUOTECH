import { MapPin, BarChart3, Wallet, BellRing } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  const features = [
    {
      icon: <MapPin className="text-blue-600" size={32} />,
      title: 'Theo dõi vị trí real-time',
      description: 'Giám sát vị trí, lộ trình và trạng thái của xe theo thời gian thực trên bản đồ chi tiết.',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <BarChart3 className="text-emerald-600" size={32} />,
      title: 'Báo cáo & phân tích',
      description: 'Hệ thống báo cáo tự động, trực quan giúp bạn nắm bắt hiệu suất và chi phí dễ dàng.',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: <Wallet className="text-orange-500" size={32} />,
      title: 'Quản lý chi phí',
      description: 'Theo dõi chi phí nhiên liệu, bảo dưỡng, phí đường bộ và các khoản phát sinh rõ ràng.',
      bgColor: 'bg-orange-50',
    },
    {
      icon: <BellRing className="text-indigo-600" size={32} />,
      title: 'Bảo dưỡng & cảnh báo',
      description: 'Nhắc lịch bảo dưỡng, cảnh báo sự cố và các thông báo quan trọng kịp thời qua app, email.',
      bgColor: 'bg-indigo-50',
    },
  ];

  return (
    <section id="tinh-nang" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h3 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Tính năng nổi bật</h3>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Đầy đủ tính năng. Dễ dàng sử dụng.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            DriveFleet cung cấp mọi công cụ bạn cần để quản lý đội xe hiệu quả hơn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all group"
            >
              <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
