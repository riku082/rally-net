import { Users, Calendar, MessageSquare } from 'lucide-react';

export default function CommunityFeatures() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight">
          コミュニティ機能
        </h2>
        {/* メインの機能紹介（画像と説明文） */}
        <div className="flex flex-row items-start gap-4 md:gap-8 mb-16 overflow-x-auto">
          <div className="flex-shrink-0">
            <img
              src="/コミュニティカレンダー.png"
              alt="コミュニティ機能のメイン画面"
              className="object-contain rounded-xl shadow-lg w-[160px] h-[300px] md:w-[280px] md:h-[520px] bg-white"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src="/イベント参加確認.png"
              alt="イベント参加確認画面"
              className="object-contain rounded-xl shadow-lg w-[160px] h-[300px] md:w-[280px] md:h-[520px] bg-white"
            />
          </div>
          <div className="flex-shrink-0 w-[240px] md:w-1/2 text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-800">
              仲間と繋がる、活動を広げる
            </h3>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              Ralley Netのコミュニティ機能で、共通の趣味を持つ仲間と簡単につながり、活動の幅を広げましょう。
              練習会や大会の企画、出欠確認、リアルタイムチャットなど、チームやサークル運営に必要な機能がすべて揃っています。
              交流を深め、バドミントンライフをさらに充実させることができます。
            </p>
          </div>
        </div>

        {/* 各機能カード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100 text-left">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center mb-5 shadow-sm">
              <Users className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 tracking-tight">コミュニティ作成・参加</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">
              同じ目標や興味を持つ仲間とコミュニティを作成。メンバーを募集して、より大きな輪を広げましょう。
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100 text-left">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center mb-5 shadow-sm">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 tracking-tight">イベント管理</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">
              練習会や大会の日程を簡単に作成。参加者の出欠確認もスムーズに行えます。
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100 text-left">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center mb-5 shadow-sm">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 tracking-tight">コミュニティチャット</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">
              メンバー同士でリアルタイムにコミュニケーション。練習の調整や情報共有が簡単に。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 