window.SEKISEN_CONTENT = {
  site: {
    brand: {
      name: "SEKISEN",
      nameJa: "石戦",
      tagline: "Quiet precision for a premium tomato experience.",
      description:
        "石戦は、味の輪郭だけでなく、届ける所作と余韻まで整えるプレミアムトマトブランドです。",
      logo: "./assets/images/sekisen-logo.jpg"
    },
    navigation: [
      { id: "about", label: "石戦とは", href: "./about.html" },
      { id: "lineup", label: "取扱ブランド", href: "./lineup.html" },
      { id: "experience", label: "事業内容", href: "./experience.html" }
    ],
    utilities: [
      {
        label: "ONLINE SHOP",
        href: "./lineup.html",
        style: "site-utility site-utility--dark"
      }
    ],
    footerNote: "SEKISEN Brand Preview Site",
    footerLinks: [
      { label: "石戦とは", href: "./about.html" },
      { label: "取扱ブランド", href: "./lineup.html" },
      { label: "お知らせ", href: "./news.html" },
      { label: "事業内容", href: "./experience.html" },
      { label: "お問い合わせ", href: "./contact.html" }
    ],
    copyright: "© 2026 SEKISEN. All rights reserved.",
    titles: {
      home: "石戦 | SEKISEN",
      about: "石戦とは | SEKISEN",
      lineup: "取扱ブランド | SEKISEN",
      news: "お知らせ | SEKISEN",
      experience: "事業内容 | SEKISEN",
      contact: "お問い合わせ | SEKISEN"
    }
  },
  home: {
    hero: {
      interval: 11800,
      slides: [
        {
          image: "./assets/images/hero-01.svg",
          alt: "SEKISEN premium tomato hero visual",
          eyebrow: "SEKISEN",
          title: "一粒の印象を、\n静かな品格へ。",
          text:
            "静かな余白で、果実の印象を整える。",
          actionLabel: "商品を見る",
          actionHref: "#product-stage"
        },
        {
          image: "./assets/images/hero-02.svg",
          alt: "SEKISEN gift visual",
          eyebrow: "Gift Selection",
          title: "贈る所作まで、\n味わいにする。",
          text:
            "贈るための美しさも、石戦の価値に含める。",
          actionLabel: "オンラインショップへ",
          actionHref: "#shop-stage"
        },
        {
          image: "./assets/images/hero-03.svg",
          alt: "SEKISEN experience visual",
          eyebrow: "Quality",
          title: "食べた瞬間に、\n理由が残る。",
          text:
            "価格ではなく、満足感で納得できる一箱へ。",
          actionLabel: "価格の理由を見る",
          actionHref: "#reason-stage"
        }
      ]
    },
    intro: {
      eyebrow: "Brand Story",
      image: "./assets/images/editorial-cover.svg",
      alt: "SEKISEN editorial overview visual",
      visualLead: "Quiet precision / editorial cut",
      caption: "味・整い方・贈る所作を、一枚の温度感にまとめた仮ビジュアルです。",
      title: "味の良さだけでなく、\n選ばれる空気まで設計する。",
      lead:
        "石戦は、糖度の高さだけで価値を語るブランドではありません。畑で育てるところから、箱を開ける瞬間の整った印象までをひと続きの体験として設計し、価格に見合う納得感をつくっています。",
      text:
        "ヒーローの次に置く言葉も、売り込みより先に世界観と輪郭が伝わることを優先しています。味、選別、届け方の順に視点を絞り、短い文章と余白で温度を揃えることで、初見でもブランドの考え方が読み取りやすい構成に整えています。",
      note: {
        label: "Editorial Note",
        title: "最初に伝えるのは、商品名よりもブランドの視点。",
        text:
          "ローカルフード系アカウントのように、写真と短い見出しで温度感をそろえながら、まずは『どういう感覚で選ぶブランドか』が自然に伝わる並びに調整しています。"
      },
      facts: [
        {
          label: "Tone",
          value: "静けさ / 密度 / 余白"
        },
        {
          label: "Focus",
          value: "味 / 届け方 / 贈答体験"
        },
        {
          label: "Format",
          value: "写真 + 短い見出し + 補足文"
        }
      ]
    },
    story: {
      eyebrow: "How To Read SEKISEN",
      title: "上から順に見るだけで、石戦の輪郭が分かる。",
      text:
        "ヒーロー直下では、情報を増やしすぎず、最初に知ってほしい三つの視点だけを先に見せます。写真の印象と文字の密度を揃えながら、味、箱の整い方、贈る場面の美しさへ自然につながる構成です。",
      steps: [
        {
          label: "01 / Taste",
          title: "ひと口目の印象を、甘さだけで終わらせない。",
          text:
            "みずみずしさ、張り、香りの抜け方まで含めて、一粒の体験として整える。短い言葉でも上質さの理由が伝わるように、味覚の説明は輪郭を絞って配置します。",
          image: "./assets/images/editorial-01.svg",
          alt: "SEKISEN taste editorial placeholder visual"
        },
        {
          label: "02 / Selection",
          title: "一箱で見たときの整い方まで、価値に含める。",
          text:
            "個体差を見極め、並んだときの密度や余白まで整える。商品情報より先にこの空気感が見えると、ブランドの格と価格の理由が直感的に伝わります。",
          image: "./assets/images/editorial-02.svg",
          alt: "SEKISEN selection editorial placeholder visual"
        },
        {
          label: "03 / Gift Scene",
          title: "贈る場面まで想像できると、欲しさが一段深くなる。",
          text:
            "食べる前から『これはきちんとしている』と思える見え方をつくる。文章の終わりを贈答シーンへ着地させることで、オンライン購入への動線も自然につながります。",
          image: "./assets/images/editorial-03.svg",
          alt: "SEKISEN gift editorial placeholder visual"
        }
      ]
    },
    product: {
      eyebrow: "Product / Experience",
      title: "ただのトマトではなく、欲しくなる体験として伝える。",
      lead:
        "断面から分かる果肉の密度、食べた瞬間の甘さとみずみずしさ、贈る箱を開けたときの整った印象まで。石戦は、商品そのものを“欲しくなる体験”として設計しています。",
      visuals: [
        {
          image: "./assets/images/product-cutaway.svg",
          alt: "石戦トマトの断面が分かるビジュアル",
          caption: "断面から見える、果肉の密度とゼリー質の美しさ。"
        },
        {
          image: "./assets/images/product-box.svg",
          alt: "石戦トマトの箱とサイズ感が分かるビジュアル",
          caption: "贈答箱の見え方と、一粒ごとのサイズ感。"
        }
      ],
      highlights: [
        {
          label: "Sweetness",
          title: "食べた瞬間に、甘さが先に立つ。",
          text:
            "角のない甘さがすっと広がり、そのあとに旨みと香りが静かに残ります。"
        },
        {
          label: "Juiciness",
          title: "みずみずしさが、最後まで気持ちよく続く。",
          text:
            "噛んだ瞬間に水分がほどけ、果肉の張りが上質な口当たりをつくります。"
        },
        {
          label: "Aftertaste",
          title: "濃さだけで終わらず、余韻まで整う。",
          text:
            "食べ終えたあとにも重たさが残らず、もう一粒食べたくなるきれいな印象が続きます。"
        }
      ],
      comparison: {
        title: "普通のトマトとの違い",
        rows: [
          {
            label: "口に入れた瞬間",
            sekisen: "甘さと香りが同時に立ち上がり、果肉の張りが残る。",
            regular: "水分はあるが、印象が単調になりやすい。"
          },
          {
            label: "見た目の整い方",
            sekisen: "一箱としての密度や並び方まで揃えている。",
            regular: "個体差が大きく、贈答向けの整い方にはなりにくい。"
          },
          {
            label: "贈ったときの印象",
            sekisen: "箱を開けた瞬間から高級感が伝わる。",
            regular: "日常使いには十分でも、特別感は出しにくい。"
          }
        ]
      },
      scenes: {
        title: "利用シーン",
        items: [
          "大切な相手への贈答",
          "季節のご挨拶や手土産",
          "自分用に少し良いものを選びたい日"
        ]
      },
      specs: {
        title: "箱やサイズ感",
        items: [
          {
            label: "箱仕様",
            value: "贈答向けの化粧箱を想定した整った並び。"
          },
          {
            label: "サイズ感",
            value: "M〜L中心の食べやすいサイズで、見栄えと食べやすさを両立。"
          },
          {
            label: "内容イメージ",
            value: "用途に応じて少量箱から贈答箱まで展開しやすい構成。"
          }
        ]
      },
      ctas: [
        {
          label: "商品を見る",
          href: "./lineup.html",
          style: "button button--dark"
        },
        {
          label: "オンラインショップはこちら",
          href: "./lineup.html",
          style: "button button--line"
        }
      ]
    },
    reason: {
      eyebrow: "Why This Price",
      title: "高いのではなく、理由のある価格に整える。",
      text:
        "石戦の価格は、希少性だけで決まっているわけではありません。一般的なトマトとの違い、手間のかかり方、品質の揃え方、贈答として失敗しにくい価値まで含めて、納得できる価格をつくっています。",
      items: [
        {
          label: "Difference",
          title: "一般的なトマトとの違い",
          text:
            "味覚だけでなく、見た目、箱を開けた瞬間、贈る場面まで含めた総合的な満足感があります。"
        },
        {
          label: "Process",
          title: "手間や工程が多い",
          text:
            "土や環境の調整、日々の見極め、収穫のタイミング、選別、品質管理まで、一粒の印象のために工程を重ねています。"
        },
        {
          label: "Quality",
          title: "品質のばらつきを抑えている",
          text:
            "個体差を減らし、一箱としての密度を揃えるために、見た目と食感の両方で細かく整えています。"
        },
        {
          label: "Gift",
          title: "贈答としての価値がある",
          text:
            "味だけでなく、外したくない贈り物として選びやすいこと自体が、価格に見合う価値になります。"
        }
      ],
      summary: "安さではなく、失敗しにくさと満足度に対する価格です。",
      ctas: [
        {
          label: "品質の理由を見る",
          href: "./experience.html",
          style: "button button--line"
        },
        {
          label: "商品一覧へ",
          href: "./lineup.html",
          style: "button button--line"
        }
      ]
    },
    trust: {
      eyebrow: "Trust / Story",
      title: "安心して選べる理由を、数字と声と背景で整える。",
      text:
        "高価格帯の商品ほど、味以外の判断材料が必要になります。石戦では、生産者の考え方、積み重ねてきた実績、実際の声が見えることで、安心して選べる状態をつくります。",
      producer: {
        label: "Producer Story",
        title: "“ただ甘い”で終わらせず、贈りたくなる一箱まで整える。",
        text:
          "生産者が見ているのは、収穫量だけではありません。食べた瞬間の印象、箱を開けたときの空気、贈るときに恥ずかしくない見え方までを含めて、石戦らしい価値だと考えています。"
      },
      stats: [
        {
          value: "12,000箱+",
          label: "累計販売箱数",
          note: "プレビュー用の掲載例"
        },
        {
          value: "4.8 / 5",
          label: "ギフト満足度",
          note: "プレビュー用の掲載例"
        },
        {
          value: "78%",
          label: "再購入・再依頼率",
          note: "プレビュー用の掲載例"
        }
      ],
      voices: [
        {
          title: "贈答で外したくない日に選びやすい",
          text:
            "箱を開けた瞬間の印象がとても良く、味も上品で安心して贈れました。",
          meta: "東京都 / 40代"
        },
        {
          title: "自分用でも満足感がしっかり残る",
          text:
            "少し高めでも、食べたときの香りとみずみずしさで納得できました。",
          meta: "神奈川県 / 30代"
        },
        {
          title: "季節の挨拶にちょうどいい特別感",
          text:
            "派手すぎず上品なので、相手を選ばず使いやすいと感じました。",
          meta: "大阪府 / 50代"
        }
      ],
      note: "※数値とお客様の声は、現在のプレビュー用掲載例です。"
    },
    limited: {
      eyebrow: "Season / Limited",
      title: "今ご案内できる分だけを、きちんと届ける。",
      text:
        "石戦は、数を優先して通年で大きく広げるブランドではありません。状態の良い時期だけ、無理のない数量だけを整えて案内することで、品質を保っています。",
      items: [
        {
          label: "数量限定",
          text:
            "収穫状況に合わせて出荷数を調整しているため、贈答向け箱は週ごとに上限があります。"
        },
        {
          label: "季節限定",
          text:
            "もっともみずみずしさと張りが美しく出る時期を中心に案内しています。"
        },
        {
          label: "在庫状況",
          text:
            "人気の規格は在庫が少なく、埋まり次第その週の受付を終了します。"
        }
      ],
      ctas: [
        {
          label: "オンラインショップはこちら",
          href: "./lineup.html",
          style: "button button--dark"
        },
        {
          label: "取扱情報を見る",
          href: "./news.html",
          style: "button button--line"
        }
      ]
    },
    news: {
      eyebrow: "News / Pick Up",
      title: "更新だけを、静かな温度で置く。",
      items: [
        {
          date: "2026.03.18",
          category: "Brand",
          title: "石戦ブランドサイトのプレビュー公開を開始しました。",
          href: "./news.html"
        },
        {
          date: "2026.03.08",
          category: "Journal",
          title: "選別と届け方に関する考え方を更新しました。",
          href: "./news.html"
        },
        {
          date: "2026.02.20",
          category: "Season",
          title: "春季出荷に向けた品質設計のトピックを追加しました。",
          href: "./news.html"
        }
      ],
      moreLabel: "VIEW MORE",
      moreHref: "./news.html"
    },
    service: {
      eyebrow: "Service / Quality",
      title: "購入前の不安を減らし、届いたあとの満足まで整える。",
      text:
        "贈答用途か自分用か、どの規格が合うか、どの時期に選ぶべきか。石戦は品質だけでなく、選び方の不安まで減らすことで、安心して購入できる導線をつくります。",
      items: [
        {
          label: "Gift Guide",
          title: "贈答向けか自分用かで、選びやすく整える。",
          text:
            "用途ごとに迷いにくいライン構成にすることで、最初の比較負荷を減らします。"
        },
        {
          label: "Quality Care",
          title: "状態の良いものだけを、無理のない数量で届ける。",
          text:
            "数を優先しすぎず、品質を保てる範囲で案内することで、満足度を崩しません。"
        },
        {
          label: "Support",
          title: "相談や問い合わせにも、静かに応える。",
          text:
            "取扱、掲載、導入、贈答用途など、購入前後の相談先を分かりやすく用意します。"
        }
      ]
    },
    shop: {
      eyebrow: "Purchase / Contact",
      title: "迷わず次の行動に進める入口だけを置く。",
      text:
        "商品を見る、すぐに購入する、ブランド背景を確認する、相談する。必要な入口だけを、押し売りにならない温度で並べています。",
      items: [
        {
          label: "Products",
          title: "商品を見る",
          text: "ラインごとの違いや、贈答向けの構成を確認できます。",
          href: "./lineup.html"
        },
        {
          label: "Online Shop",
          title: "オンラインショップはこちら",
          text: "購入導線へ、いちばん短くつながる入口です。",
          href: "./lineup.html"
        },
        {
          label: "Brand",
          title: "ブランドを見る",
          text: "石戦の背景や、価格の理由になる考え方をご覧いただけます。",
          href: "./about.html"
        },
        {
          label: "Contact",
          title: "問い合わせ",
          text: "導入、掲載、取材、贈答のご相談はこちらからお送りいただけます。",
          href: "./contact.html"
        }
      ]
    }
  },
  pages: {
    about: {
      eyebrow: "石戦とは",
      title: "石戦は、果実の強さを静かな品格へ変えるブランドです。",
      lead:
        "目立つためではなく、選ばれる理由を整える。その姿勢から石戦の高級感は生まれます。",
      sections: [
        {
          label: "Worldview",
          title: "高級感は、強く語ることではなく整っていることから生まれる。",
          text:
            "石戦は、価格や希少性を前面に押し出すのではなく、品質に見合う空気感を画面全体で静かに伝えることを重視します。",
          image: "./assets/images/hero-02.svg",
          alt: "SEKISEN worldview visual",
          action: "Brand Mood"
        },
        {
          label: "Promise",
          title: "石戦が見つめるのは、果実そのものと、その前後に広がる体験です。",
          text:
            "果実の密度、香りの立ち方、みずみずしさ、余韻、贈る所作の美しさ。そうした複数の価値を、ひとつの静かな印象として束ねます。",
          image: "./assets/images/hero-01.svg",
          alt: "SEKISEN promise visual",
          action: "Value Layer"
        }
      ]
    },
    lineup: {
      eyebrow: "取扱ブランド",
      title: "届け方の違いによって、石戦の魅力を丁寧に分けて伝える。",
      lead:
        "同じ石戦の価値でも、贈答と日常では求められる温度が異なります。ラインごとに役割を整理し、見え方も整えています。",
      sections: [
        {
          label: "SEKISEN RESERVE",
          title: "贈る所作まで美しく整える、石戦のシグネチャーライン。",
          text:
            "味の輪郭、箱を開けた瞬間の印象、並んだ姿の美しさまで含めて磨き上げる構成です。大切な相手へ渡す一箱としての説得力を重視します。",
          image: "./assets/images/hero-01.svg",
          alt: "SEKISEN reserve lineup visual",
          action: "Signature Line"
        },
        {
          label: "SEKISEN COLLECTION",
          title: "日々の食卓へ、上質を自然に持ち込むもうひとつの届け方。",
          text:
            "贈答性を保ちながらも、日常の中で無理なく楽しめる距離感へ調整したラインです。静かな高級感を、暮らしの中へ自然に馴染ませます。",
          image: "./assets/images/hero-02.svg",
          alt: "SEKISEN collection lineup visual",
          action: "Daily Premium"
        }
      ]
    },
    news: {
      eyebrow: "お知らせ",
      title: "ブランドの動きや季節の情報を、静かな温度で伝える。",
      lead:
        "石戦のニュースは、情報量よりも読みやすさを優先し、必要な更新を静かに伝える構成にしています。",
      items: [
        {
          date: "2026.03.18",
          category: "Brand",
          title: "石戦ブランドサイトのプレビュー公開を開始しました。",
          body:
            "石戦の世界観を確認いただくためのブランドサイト初期版を公開しました。今後、画像・文言・動きを段階的に更新していきます。"
        },
        {
          date: "2026.03.08",
          category: "Journal",
          title: "石戦が大切にする、選別と届け方の考え方を更新しました。",
          body:
            "果実の美しさを損なわずに届けるための選別基準や、贈答時の見え方に関する考え方を整理して反映しました。"
        },
        {
          date: "2026.02.20",
          category: "Season",
          title: "春季出荷に向けた品質設計のトピックを追加しました。",
          body:
            "季節の変化に応じたみずみずしさや張りの見え方を踏まえ、春季出荷に向けた品質設計のトピックを更新しています。"
        },
        {
          date: "2026.01.27",
          category: "Brand",
          title: "石戦のビジュアルアーカイブを公開しました。",
          body:
            "ブランドの空気感を支えるビジュアルアーカイブを整理し、今後の素材差し替えや更新に備えたベースを公開しました。"
        }
      ]
    },
    experience: {
      eyebrow: "事業内容",
      title: "石戦の価値は、育てることと届けることを分けずに整えることで生まれる。",
      lead:
        "石戦は、数字や希少性だけで語るものではありません。栽培、選別、贈答、販売導線まで一体で設計し、印象全体をブランドとして整えています。",
      sections: [
        {
          label: "Cultivation",
          title: "栽培は、味の強さではなく整い方を磨く工程。",
          text:
            "果実の輪郭が美しく立ち上がるように、土や環境を読み、日々の小さな差を積み重ねます。味の輪郭は畑から始まっています。",
          image: "./assets/images/hero-03.svg",
          alt: "Cultivation and environment visual",
          action: "Field Precision"
        },
        {
          label: "Timing",
          title: "収穫は、数値だけではなく状態を読む感覚も必要になる。",
          text:
            "同じ日でも果実ごとの表情は異なります。見た目や張りの違いを見ながら、もっとも美しく届く瞬間を見極めます。",
          image: "./assets/images/hero-02.svg",
          alt: "Harvest timing visual",
          action: "Harvest Timing"
        },
        {
          label: "Selection & Delivery",
          title: "選別と届け方で、体験としての印象が最後に決まる。",
          text:
            "箱を開けた瞬間の空気、並んだ姿の美しさ、手に取ったときの説得力まで含めて、石戦らしい格を最後に整えます。",
          image: "./assets/images/hero-01.svg",
          alt: "Selection and delivery visual",
          action: "Final Touch"
        }
      ]
    },
    contact: {
      eyebrow: "お問い合わせ",
      title: "石戦についてのご相談やお問い合わせはこちらから。",
      lead:
        "ブランドについて、導入について、今後の掲載についてなど、お気軽にお問い合わせください。",
      panels: [
        {
          label: "Mail",
          title: "hello@sekisen.jp",
          text:
            "ブランドに関するご相談、取材、掲載、コラボレーションのご連絡はこちらへお送りください。",
          href: "mailto:hello@sekisen.jp",
          action: "メールを送る"
        },
        {
          label: "Preview",
          title: "公開プレビューを見ながら調整できます。",
          text:
            "現在のトップページと下層ページは、今後も文言・画像・動きの調整を継続しやすい構造にしています。",
          href: "./index.html",
          action: "トップに戻る"
        }
      ]
    }
  }
};
