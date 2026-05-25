export type NewsItem = {
  slug: string;
  date: string;
  category: "Press" | "Service" | "Recruit" | "Event";
  title: string;
  body: string[];
};

export const news: NewsItem[] = [
  {
    slug: "2026-04-18-renewal",
    date: "2026.04.18",
    category: "Press",
    title: "コーポレートサイトをリニューアルしました。",
    body: [
      "創業以来、私たちが大切にしてきた「Bridge to BUSINESS」というメッセージを、より深く伝えるべくコーポレートサイトを刷新いたしました。",
      "本サイトでは、私たちの 6 つの事業領域と、その背景にある思想、そして共に働く仲間の姿をお伝えしてまいります。",
      "今後とも変わらぬご愛顧を賜りますよう、よろしくお願い申し上げます。",
    ],
  },
  {
    slug: "2026-03-02-b-one-advanced",
    date: "2026.03.02",
    category: "Service",
    title: "B-One training に上級カリキュラムを追加。",
    body: [
      "インサイドセールス研修「B-One training」に、リーダー育成を目的とした上級カリキュラムを新設しました。",
      "現場プレイヤーから一段階上のマネジメント層へ進むための、戦略設計・コーチング・組織運営に踏み込んだ全 5 日間のプログラムです。",
    ],
  },
  {
    slug: "2026-01-20-2027-entry",
    date: "2026.01.20",
    category: "Recruit",
    title: "2027 年度新卒採用エントリーを開始しました。",
    body: [
      "2027 年度新卒採用のエントリーを開始いたしました。",
      "「未経験だから、何色にだってなれる。」── BC パートナーズで、自分の色を見つけてみませんか。",
      "エントリーはお問い合わせフォームまたは採用ページよりお願いいたします。",
    ],
  },
];

export const getNews = (slug: string) => news.find((n) => n.slug === slug);
