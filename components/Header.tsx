'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Zap } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-emerald-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <motion.div 
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="/logo.png" alt="Ralley Net ロゴ" className="w-8 h-8" />
            <span className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Rally Net
            </span>
          </motion.div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden lg:flex items-center space-x-6">
            <motion.a 
              href="#features" 
              className="text-gray-700 hover:text-emerald-600 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              機能
            </motion.a>
            <motion.a 
              href="#benefits" 
              className="text-gray-700 hover:text-emerald-600 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              特徴
            </motion.a>
            <motion.a 
              href="#testimonials" 
              className="text-gray-700 hover:text-emerald-600 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              利用者の声
            </motion.a>
            <motion.a 
              href="#pricing" 
              className="text-gray-700 hover:text-emerald-600 transition-colors text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              料金
            </motion.a>
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" className="text-gray-700 hover:text-emerald-600 text-sm">
              ログイン
            </Button>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-lg text-sm px-4 py-2">
                無料で始める
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="lg:hidden py-4 border-t border-emerald-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
                機能
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
                特徴
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
                利用者の声
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
                料金
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                <Button variant="ghost" className="justify-start">
                  ログイン
                </Button>
                <Button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white">
                  無料で始める
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}