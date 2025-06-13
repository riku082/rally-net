import { Users, Calendar, MessageSquare } from 'lucide-react';

export default function CommunityFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 tracking-tight">
          コミュニティ機能
        </h2>
        {/* コミュニティ機能の画面イメージ（タイトル直下） */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-200 mb-10">
          <img src="/コミュニティカレンダー.png" alt="コミュニティカレンダー" className="object-contain rounded-xl shadow-lg w-[240px] h-[440px] bg-white flex-shrink-0" />
          <img src="/イベント参加確認.png" alt="イベント参加確認" className="object-contain rounded-xl shadow-lg w-[240px] h-[440px] bg-white flex-shrink-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center h-full border border-emerald-50">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 tracking-tight">コミュニティ作成・参加</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              同じ目標や興味を持つ仲間とコミュニティを作成。メンバーを募集して、より大きな輪を広げましょう。
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center h-full border border-emerald-50">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 tracking-tight">イベント管理</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              練習会や大会の日程を簡単に作成。参加者の出欠確認もスムーズに行えます。
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center h-full border border-emerald-50">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 tracking-tight">コミュニティチャット</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              メンバー同士でリアルタイムにコミュニケーション。練習の調整や情報共有が簡単に。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 