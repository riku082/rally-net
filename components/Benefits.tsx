'use client';

import { motion } from 'framer-motion';
import { Shield, Zap, Heart, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: '安全・安心',
    description: 'プライバシー保護と安全な環境を最優先に設計されています。',
    features: ['身元確認システム', 'プライバシー設定', '24/7サポート']
  },
  {
    icon: Zap,
    title: '使いやすさ',
    description: '直感的なUIで、初心者から上級者まで誰でも簡単に使えます。',
    features: ['シンプルなインターフェース', 'ワンタップ予約', 'スマート通知']
  },
  {
    icon: Heart,
    title: 'コミュニティ',
    description: '温かく支え合うバドミントンコミュニティの一員になれます。',
    features: ['反省会', 'イベント開催', '経験共有']
  },
  {
    icon: Globe,
    title: '全国対応',
    description: '日本全国のプレイヤーと繋がり、どこでも楽しめます。',
    features: ['全国500+コート', '地域別検索', 'コミュニティの公開設定']
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            なぜ
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Rally Net
            </span>
            なのか？
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            練習をしたい時に自分から提案できるようなそんな開けたバドミントンネットワークがあればいいなと思っていました。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                  <ul className="space-y-2">
                    {benefit.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center sm:justify-start space-x-3"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}