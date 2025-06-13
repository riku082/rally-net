'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Play, Users, Trophy, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-16 pb-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              バドミントン愛好家の
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                究極のコミュニティ
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
              プレイヤーと繋がり、試合を見つけ、スキルを向上させる。
              Rally Netで、あなたのバドミントンライフが変わります。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10 px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-3 text-base shadow-xl w-full sm:w-auto">
                <Zap className="w-4 h-4 mr-2" />
                今すぐ無料で始める
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 px-6 py-3 text-base w-full sm:w-auto">
                <Play className="w-4 h-4 mr-2" />
                デモを見る
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto px-4"
          >
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">10,000+</div>
              <div className="text-sm text-gray-600">アクティブユーザー</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">50,000+</div>
              <div className="text-sm text-gray-600">開催された試合</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">500+</div>
              <div className="text-sm text-gray-600">コミュニティ数</div>
            </div>
          </motion.div>
        </div>

        {/* Hero Image Placeholder - Mobile optimized */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative px-4"
        >
          <div className="w-full flex items-center justify-center">
            <img
              src="/スクリーンショット.png"
              alt="アプリのスクリーンショット"
              className="object-contain w-[200px] sm:w-[200px] rounded-xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}