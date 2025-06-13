'use client';

import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  product: [
    { name: '機能', href: '#features' },
    { name: '料金', href: '#pricing' },
    { name: 'アップデート', href: '#' },
    { name: 'モバイルアプリ', href: '#' }
  ],
  support: [
    { name: 'ヘルプセンター', href: '#' },
    { name: 'お問い合わせ', href: '#' },
    { name: 'コミュニティ', href: '#' },
    { name: 'よくある質問', href: '#' }
  ],
  company: [
    { name: '会社概要', href: '#' },
    { name: 'ブログ', href: '#' },
    { name: '採用情報', href: '#' },
    { name: 'プレスリリース', href: '#' }
  ],
  legal: [
    { name: 'プライバシーポリシー', href: '#' },
    { name: '利用規約', href: '#' },
    { name: 'セキュリティ', href: '#' },
    { name: 'Cookie設定', href: '#' }
  ]
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter CTA */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto max-w-4xl px-4 py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3">
              最新の情報をお届けします
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
              新機能のお知らせ、トーナメント情報、バドミントンに関する有益な情報を定期的にお送りします。
            </p>
            <div className="flex flex-col gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="メールアドレスを入力"
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 w-full py-3">
                  登録
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto max-w-4xl px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center sm:justify-start space-x-2 mb-4">
                <div className="w-7 h-7 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold">Rally Net</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                バドミントン愛好家のための究極のソーシャルネットワーク。
                世界中のプレイヤーと繋がり、共に成長しましょう。
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>info@Rally Net.com</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>03-1234-5678</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start space-x-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>東京都渋谷区1-2-3</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links - Mobile optimized */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-3 text-sm">プロダクト</h4>
                <ul className="space-y-2">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-3 text-sm">サポート</h4>
                <ul className="space-y-2">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-3 text-sm">会社</h4>
                <ul className="space-y-2">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-3 text-sm">法的事項</h4>
                <ul className="space-y-2">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col items-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 text-xs text-center">
                © 2025 Rally Net. All rights reserved.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}