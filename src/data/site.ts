// All content below is taken from the original www.pdaic.ca website.
export const org = {
  nameZh: "加拿大華人職能發展協會",
  nameZhShort: "加拿大職能發展協會",
  nameEn: "Professional Development Association in Canada",
  email: "info@pdaic.ca",
  phone: "(778) 233-0005",
  phoneHref: "tel:+17782330005",
  address: ["#719-938 Howe St", "Vancouver, BC V6Z 1N9", "Canada"],
  registration: "BCS0080460",
  siteUrl: "https://www.pdaic.ca",
};

export const purposes = [
  {
    title: "專業職能發展",
    en: "Professional Development",
    body: "提升國家整體全方位之專業商務人才素質及國際競爭力，協助各產業商務人士、畢業人才、二度就業與華裔族群就業無礙、職業技術升級。",
  },
  {
    title: "商務交流合作",
    en: "Business Exchange",
    body: "促進商務產學交流研討。強化職業技能、提升自我價值及競爭力。",
  },
  {
    title: "社區關懷公益",
    en: "Community & Charity",
    body: "身心靈全方位優化會員生活品質，啟動善良循環，進而回饋社會推動慈善。",
  },
];

export type Member = {
  slug: string;
  nameZh?: string;
  nameEn: string;
  roleZh: string;
  roleEn?: string;
  image: string;
  imgPos?: string; // Tailwind object-position class to align the person consistently
  sections: { heading: string; items: string[] }[];
  links?: { label: string; href: string }[];
  note?: string;
};

export const members: Member[] = [
  {
    slug: "josephine-wu", nameZh: "吳秀美", nameEn: "Josephine Wu", roleZh: "會長", roleEn: "President",
    image: "/images/team-josephine-wu.webp",
    imgPos: "object-[50%_50%]",
    sections: [
      { heading: "經歷", items: ["Global Digital Cross Industry of Taiwan Overseas Council (GITOC) 創會長及第一第二屆會長", "世華第十屆理事、第十一第二副會長", "加拿大中文電台新聞主播", "多家電視台記者／主播"] },
      { heading: "現任", items: ["悠活生活網 執行總監", "悠活母嬰孕產創辦人", "悠傳媒 執行總監"] },
    ],
    links: [{ label: "悠活網", href: "http://yohovancouver.com/" }],
  },
  {
    slug: "kat-chang", nameZh: "張竹婷", nameEn: "Kat Chang", roleZh: "副會長", roleEn: "Vice President",
    image: "/images/team-kat-chang.webp",
    sections: [
      { heading: "經歷", items: ["台灣青商會第5屆財務", "台灣青商會第6屆會長"] },
      { heading: "現任", items: ["AMPM Development 合夥人", "RIKR Development 開發總監", "Nextone 教會拓展委員"] },
    ],
    note: "擁有豐富的建築行業經驗。專注於各階段的建築服務，包括諮詢、建築設計、規劃、施工和竣工。業務範圍涵蓋定制住宅、後巷屋及項目管理。",
    links: [{ label: "AMPM Development", href: "https://ampmdevelopment.com/" }],
  },
  {
    slug: "vic-chen", nameZh: "陳正傑", nameEn: "Vic Chen", roleZh: "總幹事", roleEn: "Executive Director",
    image: "/images/team-vic-chen.webp",
    sections: [
      { heading: "現任", items: ["FoundMe Academy Founder", "Global Career Development Facilitator", "Sound Healing Practitioner"] },
      { heading: "經歷", items: ["HR COO / Vice President of DBS Bank Taiwan", "20 years of HR Professional", "UBC Alumnus"] },
    ],
    links: [{ label: "數位名片", href: "https://reurl.cc/yWLAZO" }],
  },
  {
    slug: "sandy-weng", nameZh: "翁嘉㻺", nameEn: "Sandy Weng", roleZh: "活動總監", roleEn: "Events Director",
    image: "/images/team-sandy-weng.webp",
    sections: [
      { heading: "現任", items: ["Regional Project Manager, JM Consulting", "English and Chinese Tutor, Engoo"] },
      { heading: "經歷", items: ["Training & Development Manager, InterContinental Kaohsiung", "General Manager's Special Assistant, Silks Place Tainan", "Senior Sales Manager, Regent Taipei"] },
    ],
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/sandyweng/" }],
  },
  {
    slug: "lydia-huang", nameEn: "Lydia Huang", roleZh: "財務總監", roleEn: "Finance Director",
    image: "/images/team-lydia-huang.webp",
    sections: [
      { heading: "現任", items: ["華語教師"] },
      { heading: "經歷", items: ["國小老師"] },
    ],
  },
  {
    slug: "patty-chen", nameZh: "陳珮盈", nameEn: "Patty Chen", roleZh: "公關總監", roleEn: "PR Director",
    image: "/images/team-patty-chen.webp",
    sections: [
      { heading: "現任", items: ["Co-Founder and Senior Mortgage Broker, First Choice Mortgage"] },
      { heading: "經歷", items: ["Senior Financial Advisor, CIBC Imperial Service", "11th President, TJCCBC", "UBC Sauder BCom, Finance and Marketing"] },
    ],
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/patty-chen-firstchoicemortgage" }],
  },
  {
    slug: "jason-ho", nameZh: "何宣霈", nameEn: "Jason Ho", roleZh: "資訊科技總監", roleEn: "IT Director",
    image: "/images/team-jason-ho.webp",
    sections: [
      { heading: "現任", items: ["Kootenay Columbia College Digital Business Management Instructor", "弘光科技大學文化設計與行銷系助理教授"] },
      { heading: "經歷", items: ["Focus Share Inc. 數位媒體製作人", "兔將創意影業 專案經理", "Arts Club Theatre Company 廣告設計師"] },
    ],
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/jasonho0618" }],
  },
  {
    slug: "ingrid-chi", nameZh: "季長馨", nameEn: "Ingrid Chi", roleZh: "行銷傳播總監", roleEn: "Marketing Communication Director",
    image: "/images/team-ingrid-chi.webp",
    sections: [
      { heading: "現任", items: ["Unwealth Financial independent insurance broker 僑富金融理財顧問"] },
      { heading: "經歷", items: ["MZ Wealth Operation Manager", "Canada Life Financial Security Advisor", "HSBC Canada Premium Banker", "Crabtree & Evelyn Brand Ambassador"] },
    ],
    links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/ingrid-chi-757294180" }],
  },
  {
    slug: "susan-chou", nameZh: "周素蓮", nameEn: "Susan Chou", roleZh: "常務監事", roleEn: "Chief Supervisor",
    image: "/images/team-susan-chou.webp",
    sections: [
      { heading: "經歷", items: ["僑委會溫哥華 僑務促進委員", "世界華人工商婦女協會 第九、十屆會長", "世華總會國際理事", "世華溫哥華分會 名譽會長", "中僑合家歡第十三屆會長", "溫哥華合家歡獨立首任會長", "全加總會舘理事"] },
      { heading: "曾任", items: ["經營永麗專業美容美體負責人", "美善品科技廚房用品"] },
      { heading: "現任", items: ["世華工商婦女企管協會名譽會長"] },
    ],
  },
  {
    slug: "ting", nameEn: "TING", roleZh: "市場行銷", roleEn: "Marketing",
    image: "/images/team-ting.webp",
    sections: [
      { heading: "簡介", items: ["TBA"] },
    ],
  },
];

export type EventItem = {
  slug: string;
  title: string;
  date: string; // ISO date, used to decide upcoming vs past
  time: string;
  dateLabel: string;
  location: string;
  image?: string;
  summary: string;
  body?: string[];
  status: string;
};

export const events: EventItem[] = [
  {
    slug: "2026fang-dai-yu-shui-wu-ce-lue-jiang-zuo",
    title: "2026房貸與稅務策略講座",
    date: "2026-04-11", dateLabel: "2026年4月11日（週六）", time: "下午1:00 – 下午3:00",
    location: "Pacific Autism Family Network, 3688 Cessna Dr, Richmond, BC V7B 0A2",
    image: "/images/events-2026-mortgage-tax.webp",
    summary: "由加拿大華人職能發展協會精心規劃的專業講座，介紹2026加拿大與BC省最新稅務變化與房貸策略。",
    body: ["房貸這樣做，真的可以幫你省錢、甚至賺錢！", "還在每個月默默繳房貸，卻不知道其實有方法可以「少繳利息、增加現金流」嗎？", "由 Professional Development Association in Canada（加拿大華人職能發展協會）精心規劃的專業講座。", "主題包括：2026加拿大與BC省最新稅務變化。"],
    status: "報名已截止",
  },
  {
    slug: "wei-ai-er-wu-dance-for-autism",
    title: "為愛而舞｜Dance for Autism",
    date: "2026-04-11", dateLabel: "2026年4月11日（週六）", time: "上午10:30 – 下午12:00",
    location: "PAFN（2F）3688 Cessna Dr, Richmond, BC V7B 0A2",
    image: "/images/events-dance-for-autism.webp",
    summary: "點亮孩子們的未來——零基礎也能跟上，活力跳動一小時，把愛跳出來！",
    body: ["點亮孩子們的未來——4/11（六）", "零基礎也能跟上，活力跳動一小時，把愛跳出來！", "報到：10:30 AM", "跳舞：11:00–12:00（60 分鐘）", "地點：PAFN（2F）3688 Cessna Dr, Richmond, BC"],
    status: "報名已截止",
  },
  {
    slug: "hua-yi-huo-dong",
    title: "花藝活動",
    date: "2024-10-27", dateLabel: "2024年10月27日（週日）", time: "下午2:00 – 下午4:00",
    location: "#220 - 2052 West 41st Ave, Vancouver",
    image: "/images/events-floral-workshop.webp",
    summary: "萬聖節前夕，由職能協會專業持牌花藝老師帶領大家雕刻南瓜盅，插上具節慶儀式感的花卉。",
    body: ["職能協會開課的品質誠意滿滿。", "萬聖節前夕，職能協會專業持牌花藝老師帶領大家雕刻出最有創意的南瓜盅，插上最有節慶儀式感的花卉。", "超有質感花藝課，包含法國藍帶高級下午茶，南瓜花卉美美帶回家。"],
    status: "活動已結束",
  },
  {
    slug: "pdac-jia-na-da-zhi-neng-fa-zhan-xie-hui-shang-ye-bo-lan-hui",
    title: "PDAC 加拿大職能發展協會商業博覽會",
    date: "2024-08-24", dateLabel: "2024年8月24日（週六）", time: "上午11:00 – 下午5:00",
    location: "3688 Cessna Dr, Richmond, BC",
    summary: "加拿大職能發展協會年度商業博覽會。",
    status: "活動已結束",
  },
  {
    slug: "hua-dao-liao-yu",
    title: "花道聊癒",
    date: "2024-07-22", dateLabel: "2024年7月22日（週一）", time: "上午10:30 – 下午12:30",
    location: "1200 W 73rd Ave, Vancouver, BC V6P 6G5",
    image: "/images/events-ikebana.webp",
    summary: "在炎熱的夏天，透過插花來靜心養性。",
    body: ["在炎熱的夏天，透過插花來靜心養性。", "Carol 老師花道8年研習。"],
    status: "活動已結束",
  },
  {
    slug: "hu-wai-jian-xing-neng-liang-zhi-lu",
    title: "戶外健行能量之旅",
    date: "2024-07-14", dateLabel: "2024年7月14日（週日）", time: "上午9:30 – 下午1:30",
    location: "Squamish, British Columbia",
    summary: "前往 Sea to Sky Gondola，到酋長石上享受山峰瑜珈體驗。",
    body: ["我們會前往 Sea to Sky Gondola 到酋長石上享受山峰瑜珈體驗。"],
    status: "活動已結束",
  },
];

// Reference "today" for the site; events strictly after this are upcoming.
export function isUpcoming(e: EventItem, now: Date = new Date()) {
  return new Date(e.date + "T23:59:59") >= now;
}

export const mailto = (subject: string) =>
  `mailto:${org.email}?subject=${encodeURIComponent(subject)}`;
