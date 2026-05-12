import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-[40px] p-8 md:p-20 shadow-xl border border-slate-100 grid lg:grid-cols-2 gap-16 items-center overflow-hidden relative">
          {/* Decorative graphic */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Sẵn sàng tối ưu <br /> đội xe của bạn?
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Tham gia cùng hàng nghìn doanh nghiệp đang tin dùng DriveFleet để quản lý đội xe hiệu quả và tiết kiệm hơn mỗi ngày.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:shadow-blue-200">
                Dùng thử miễn phí 14 ngày
              </button>
              <button className="bg-white border border-slate-200 hover:border-blue-600 text-slate-800 hover:text-blue-600 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all">
                <Phone size={18} />
                Liên hệ tư vấn
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[500px]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
                alt="App Interface"
                className="rounded-2xl shadow-2xl border-4 border-slate-100"
                referrerPolicy="no-referrer"
              />
              {/* Overlapping mobile mockup effect */}
              <div className="absolute -bottom-10 -right-10 w-2/3 md:w-[240px] border-4 border-white bg-white rounded-3xl shadow-2xl overflow-hidden hidden md:block">
                 <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070"
                    alt="Mobile App"
                    className="w-full aspect-[9/16] object-cover"
                    referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
