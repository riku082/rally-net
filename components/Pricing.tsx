'use client';

import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const plans = [
  {
    name: 'ベーシック',
    price: '無料',
    description: 'バドミントンを始めたばかりの方に最適',
    features: [
      'プレイヤーマッチング（月10回まで）',
      '基本的なスケジュール管理',
      'コミュニティチャット',
      '成長記録の基本機能',
      'モバイルアプリ利用'
    ],
    buttonText: '無料で始める',
    popular: false,
    gradient: 'from-gray-500 to-gray-600'
  },
  {
    name: 'プレミアム',
    price: '¥980',
    period: '/月',
    description: '本格的にバドミントンを楽しみたい方へ',
    features: [
      'プレイヤーマッチング（無制限）',
      '高度なスケジュール管理',
      '詳細なスキル分析',
      'トーナメント参加',
      'プレミアムサポート',
      '広告非表示',
      'データエクスポート機能'
    ],
    buttonText: 'プレミアムを始める',
    popular: true,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    name: 'プロ',
    price: '¥1,980',
    period: '/月',
    description: 'コーチや指導者、本気で上達を目指す方向け',
    features: [
      'プレミアムの全機能',
      'AIコーチング機能',
      'チーム管理ツール',
      'カスタムトーナメント作成',
      'ビデオ分析機能',
      '優先サポート',
      'API アクセス',
      '月次レポート'
    ],
    buttonText: 'プロプランを始める',
    popular: false,
    gradient: 'from-purple-500 to-pink-500'
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 px-4 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            あなたにぴったりの
            <span className="block sm:inline bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              プランを選択
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            すべてのプランで30日間の無料トライアル付き。いつでもキャンセル可能です。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className={`h-full border-0 shadow-xl relative overflow-hidden ${
                plan.popular 
                  ? 'ring-2 ring-emerald-500 ring-offset-2 ring-offset-transparent' 
                  : ''
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-bl-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3" />
                      <span className="text-xs font-semibold">人気</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${plan.gradient} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 mt-2 text-sm">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-gray-600 ml-1 text-sm">
                          {plan.period}
                        </span>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      className={`w-full py-3 text-base ${
                        plan.popular
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg'
                          : 'border-emerald-500 text-emerald-600 hover:bg-emerald-50'
                      }`}
                      variant={plan.popular ? 'default' : 'outline'}
                    >
                      {plan.buttonText}
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-600 text-sm">
            企業やチーム向けのカスタムプランも提供しています。
            <a href="#" className="text-emerald-600 hover:text-emerald-700 font-semibold ml-1">
              お問い合わせください
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}