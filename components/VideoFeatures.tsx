import { Video, Share2, ThumbsUp, Eye } from 'lucide-react';

export default function VideoFeatures() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800 tracking-tight">
          動画投稿機能
        </h2>
        {/* メインの機能紹介（画像と説明文） */}
        <div className="flex flex-row items-start gap-4 md:gap-8 mb-16 overflow-x-auto">
          <div className="flex-shrink-0">
            <img
              src="/動画閲覧.png"
              alt="動画投稿機能のメイン画面"
              className="object-contain rounded-xl shadow-lg w-[160px] h-[300px] md:w-[280px] md:h-[520px] bg-white"
            />
          </div>
          <div className="flex-shrink-0">
            <img
              src="/動画作成画面.png"
              alt="動画作成画面"
              className="object-contain rounded-xl shadow-lg w-[160px] h-[300px] md:w-[280px] md:h-[520px] bg-white"
            />
          </div>
          <div className="flex-shrink-0 w-[240px] md:w-1/2 text-left">
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-gray-800">
              プレーを記録、共有、分析
            </h3>
            <p className="text-sm md:text-lg text-gray-600 leading-relaxed">
              Ralley Netの動画投稿機能で、練習や試合の様子を簡単にアップロード・共有できます。
              自分のプレーを振り返ったり、仲間の動画から学びを得たり、技術向上に役立てましょう。
              動画には「いいね」やコメントでフィードバックを送り合うこともでき、
              バドミントンスキルの上達を強力にサポートします。
            </p>
          </div>
        </div>

        {/* 各機能カード */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100 text-left">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center mb-5 shadow-sm">
              <Video className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 tracking-tight">動画アップロード</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">
              練習風景や試合の動画を簡単にアップロード。技術の共有や記録に最適です。
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100 text-left">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center mb-5 shadow-sm">
              <Share2 className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 tracking-tight">シェア機能</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">
              動画を簡単にシェア。コミュニティ内やSNSで共有して、より多くの人とつながりましょう。
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100 text-left">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center mb-5 shadow-sm">
              <ThumbsUp className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 tracking-tight">いいね機能</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">
              素晴らしいプレーや参考になる動画に「いいね」を送って、モチベーションを高め合いましょう。
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full border border-gray-100 text-left">
            <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-md flex items-center justify-center mb-5 shadow-sm">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 tracking-tight">動画閲覧</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-grow">
              投稿された動画をいつでもどこでも閲覧可能。仲間のプレーや参考動画をチェックできます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 