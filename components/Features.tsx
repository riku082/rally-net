'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Heart, Repeat } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: '投稿機能',
    description: '練習の感想や試合の報告、技術的な質問など、自由に投稿できます。',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Heart,
    title: 'いいね機能',
    description: '共感できる投稿に「いいね」を送って、コミュニティの活性化に貢献しましょう。',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Repeat,
    title: 'リツイート機能',
    description: '素晴らしい投稿をリツイートして、より多くの人に共有できます。',
    color: 'from-orange-500 to-red-500'
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 tracking-tight">
          掲示板機能
        </h2>
        {/* 掲示板機能の画面イメージ（タイトル直下） */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-200 mb-10">
          <img src="/投稿画面.png" alt="投稿画面" className="object-contain rounded-xl shadow-lg w-[240px] h-[440px] bg-white flex-shrink-0" />
          <img src="/コメント画面.png" alt="コメント画面" className="object-contain rounded-xl shadow-lg w-[240px] h-[440px] bg-white flex-shrink-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center h-full border border-emerald-50">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-md`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}