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
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight">
          掲示板機能
        </h2>
        {/* メインの機能紹介（画像と説明文） */}
        <div className="flex flex-row items-start gap-4 md:gap-8 mb-16 overflow-x-auto">
          <div className="flex-shrink-0">
            <img
              src="/投稿画面.png"
              alt="掲示板機能のメイン画面"
              className="object-contain rounded-xl shadow-lg w-[160px] h-[300px] md:w-[280px] md:h-[520px] bg-white"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src="/コメント画面.png"
              alt="コメント画面"
              className="object-contain rounded-xl shadow-lg w-[160px] h-[300px] md:w-[280px] md:h-[520px] bg-white"
            />
          </div>
          <div className="flex-shrink-0 w-[240px] md:w-1/2 text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-800">
              バドミントン専用の交流の場
            </h3>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              日々の練習の成果や試合の感想、バドミントンに関する疑問や知識を気軽に共有できる専用掲示板です。
              共感できる投稿には「いいね」で気持ちを伝えたり、「リツイート」で仲間と情報を広めることができます。
              活発な交流を通じて、あなたのバドミントンライフをさらに充実させましょう。
            </p>
          </div>
        </div>

        {/* 各機能カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full text-left"
            >
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center mb-5 shadow-sm">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed flex-grow">
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