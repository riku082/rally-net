import { Video, Share2, ThumbsUp, Eye } from 'lucide-react';

export default function VideoFeatures() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-gray-800 tracking-tight">
          動画投稿機能
        </h2>
        {/* 動画投稿機能の画面イメージ（タイトル直下） */}
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-emerald-200 mb-10">
          <img src="/動画作成画面.png" alt="動画作成画面" className="object-contain rounded-xl shadow-lg w-[240px] h-[440px] bg-white flex-shrink-0" />
          <img src="/スクリーンショット.png" alt="動画閲覧画面" className="object-contain rounded-xl shadow-lg w-[240px] h-[440px] bg-white flex-shrink-0" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center h-full border border-emerald-50">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <Video className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 tracking-tight">動画アップロード</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              練習風景や試合の動画を簡単にアップロード。技術の共有や記録に最適です。
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center h-full border border-emerald-50">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <Share2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 tracking-tight">シェア機能</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              動画を簡単にシェア。コミュニティ内やSNSで共有して、より多くの人とつながりましょう。
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center h-full border border-emerald-50">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <ThumbsUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 tracking-tight">いいね機能</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              素晴らしいプレーや参考になる動画に「いいね」を送って、モチベーションを高め合いましょう。
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow flex flex-col items-center text-center h-full border border-emerald-50">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl flex items-center justify-center mb-6 shadow-md">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800 tracking-tight">動画閲覧</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              投稿された動画をいつでもどこでも閲覧可能。仲間のプレーや参考動画をチェックできます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 