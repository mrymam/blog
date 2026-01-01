export const SITE = {
  website: "https://blog.mrymam.net/",
  author: "Tsukasa Maruyama",
  profile: "https://github.com/mrymam",
  desc: "Tsukasa Maruyamaの技術ブログ",
  title: "mrymam",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: false, // trueにすると切り替えボタンが表示される
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "https://github.com/mrymam/blog/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr",
  lang: "ja",
  timezone: "Asia/Tokyo",
} as const;
