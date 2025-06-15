'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const testimonials = [
  {
    name: '馬場一彰',
    role: 'バドミントンクラブ代表',
    content: 'Rally Netのおかげで、クラブメンバーの管理と新規メンバーの獲得が格段に楽になりました。特にマッチング機能は素晴らしく、レベルに合った相手を見つけやすくなりました。',
    rating: 5,
    initials: '田健'
  },
  {
    name: '高橋郁矢',
    role: '大学生プレイヤー',
    content: 'このアプリで同じレベルの仲間と出会えて、楽しく上達できています。コーチング機能も分かりやすくて重宝しています。',
    rating: 5,
    initials: '佐美'
  },
  {
    name: '山田 雅人',
    role: '社会人プレイヤー',
    content: '仕事が忙しい中でも、効率的に練習相手を見つけられるのが嬉しいです。スケジュール管理機能で、限られた時間を有効活用できています。',
    rating: 5,
    initials: '山雅'
  },
  {
    name: '鈴木 花子',
    role: 'コーチ',
    content: '生徒たちの成長を数値で確認できるのが素晴らしいです。個別指導に活用できるデータが豊富で、指導の質が向上しました。',
    rating: 5,
    initials: '鈴花'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            利用者の
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              リアルな声
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Rally Netを使って、バドミントンライフが変わった方々の体験談
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <CardContent className="p-6">
                  <Quote className="w-6 h-6 text-emerald-500 mb-3 opacity-60" />
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center space-x-3">
                    <Avatar className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500">
                      <AvatarFallback className="text-white font-bold text-sm">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}