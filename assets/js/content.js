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
      interval: 18000,
      slides: [
        {
          image: "./assets/images/hero-01.svg",
          alt: "SEKISEN premium tomato hero visual",
          eyebrow: "SEKISEN",
          title: "甘さの先に、\n品位がある。",
          text: "食卓にも、贈る場にも、静かに残る。",
          actionLabel: "石戦とは",
          actionHref: "#brand-intro"
        },
        {
          image: "./assets/images/hero-02.svg",
          alt: "SEKISEN gift visual",
          eyebrow: "SEKISEN",
          title: "甘さの先に、\n品位がある。",
          text: "食卓にも、贈る場にも、静かに残る。",
          actionLabel: "石戦とは",
          actionHref: "#brand-intro"
        },
        {
          image: "./assets/images/hero-03.svg",
          alt: "SEKISEN experience visual",
          eyebrow: "SEKISEN",
          title: "甘さの先に、\n品位がある。",
          text: "食卓にも、贈る場にも、静かに残る。",
          actionLabel: "石戦とは",
          actionHref: "#brand-intro"
        }
      ],
      actions: [
        {
          label: "石戦とは",
          href: "#brand-intro",
          style: "button button--dark"
        },
        {
          label: "商品を見る",
          href: "#product-stage",
          style: "button button--ghost-light"
        }
      ]
    },
    intro: {
      eyebrow: "What SEKISEN Keeps",
      image: "./assets/images/intro-hand-fruit.svg",
      alt: "手に持った果実の温度感が伝わる石戦の仮ビジュアル",
      visuals: [
        {
          image: "./assets/images/intro-hand-fruit.svg",
          alt: "手に持った果実を近い距離感で捉えた石戦の仮ビジュアル"
        },
        {
          image: "./assets/images/intro-field.svg",
          alt: "畑の空気感と栽培の基準が伝わる石戦の仮ビジュアル"
        },
        {
          image: "./assets/images/intro-profile.svg",
          alt: "人物の横顔と石戦の静かな緊張感を表した仮ビジュアル"
        }
      ],
      visualLead: "Field / Hand / Profile",
      caption: "畑、手、眼差し。その三つを揃えて、石戦の基準を伝える導入ビジュアルです。",
      title: "石戦は、品質と印象を\n一果で整えるブランドです。",
      lead:
        "育て方、見極め方、届け方までを、同じ基準で整える。",
      text:
        "甘さだけでも、見た目だけでも終わらせない。口にしたあとと、手渡したあと、その両方に品位が残る一果を目指しています。",
      note: {
        label: "Three Standards",
        title: "違いは、三つの基準で支える。",
        text:
          "畑での手間、収穫後の見極め、箱を開ける前の整い方。どれか一つではなく、すべてが揃って初めて石戦になります。"
      },
      facts: [
        {
          label: "育てる",
          value: "味の輪郭から、静かに整える。"
        },
        {
          label: "見極める",
          value: "一粒ごとの張りと余韻を見る。"
        },
        {
          label: "届ける",
          value: "開ける前から、信頼に変える。"
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
      eyebrow: "Value / Difference",
      title: "違いは、ひと口で伝わる。",
      intro: [
        "甘いだけでは、印象に残らない。",
        "石戦のトマトは、味の“濃さ”で記憶に残る。",
        "一度食べれば、他との違いが自然とわかる。"
      ],
      blocks: [
        {
          title: "ひと口で、違いがわかる濃さ。",
          paragraphs: [
            "一般的なトマトにあるツンとした酸味はなく、",
            "甘みと旨みが、はっきりと重なる。",
            "噛んだ瞬間だけでなく、そのあとに続く余韻まで、しっかりと残る味です。"
          ]
        },
        {
          title: "“甘くする”のではなく、\n“旨くする”ための栽培。",
          paragraphs: [
            "水分・栄養・収穫のタイミングまで、すべてを細かく調整。",
            "ただ糖度を上げるのではなく、味全体のバランスを整えることで、",
            "濃く、静かに広がる味わいを生み出しています。"
          ]
        },
        {
          title: "すべての実を、\n同じ品質では出さない。",
          paragraphs: [
            "形・張り・状態をひとつずつ確認し、基準を満たしたものだけを選別。",
            "収穫のタイミングも見極め、最も状態の良いものだけを届けています。",
            "だからこそ、どれを食べても、同じ満足感が続きます。"
          ]
        }
      ]
    },
    reason: {
      eyebrow: "Craft / Quality",
      title: "手間は、味の前から始まっている。",
      text:
        "石戦の価値は、ひとつの強い説明ではなく、工程ごとの静かな積み重ねで生まれます。土づくりから箱詰めまで、一工程ずつ印象を整えています。",
      items: [
        {
          label: "01 / Soil & Environment",
          title: "土から、味の輪郭を整える。",
          text:
            "甘さを後から足すのではなく、根が無理なく張れる土と環境を先に整える。最初の静けさが、あと味のきれいさにつながります。",
          image: "./assets/images/process-soil.svg",
          alt: "土と環境づくりの工程を表現した石戦の仮ビジュアル"
        },
        {
          label: "02 / Cultivation",
          title: "育て方で、果実の品が決まる。",
          text:
            "勢いだけで大きくするのではなく、その日の表情を見ながら伸ばし方を調整する。張りと艶は、日々の手の入れ方で変わります。",
          image: "./assets/images/process-house.svg",
          alt: "ハウス内で栽培管理を行う工程を表現した石戦の仮ビジュアル"
        },
        {
          label: "03 / Water & Texture",
          title: "水分は、多ければいいわけではない。",
          text:
            "みずみずしさを残しながら、ぼやけない食感へ。含ませ方を見誤らないことで、ひと口目の密度が変わります。",
          image: "./assets/images/process-water.svg",
          alt: "水分量と食感の設計を表現した石戦の仮ビジュアル"
        },
        {
          label: "04 / Harvest Timing",
          title: "採る瞬間まで、待ち方がある。",
          text:
            "赤いだけで採らず、張りと香りが立つところを見極める。収穫の数時間の違いが、最初の印象を左右します。",
          image: "./assets/images/process-harvest.svg",
          alt: "収穫タイミングを見極める工程を表現した石戦の仮ビジュアル"
        },
        {
          label: "05 / Selection & Control",
          title: "一粒ずつ見て、一箱として整える。",
          text:
            "個体差をそのまま流さず、見た目、張り、並び方まで揃える。品質管理は、味を守るだけでなく信頼をつくる工程です。",
          image: "./assets/images/process-sorting.svg",
          alt: "選別と品質管理の工程を表現した石戦の仮ビジュアル"
        },
        {
          label: "06 / Packing & Delivery",
          title: "届いた瞬間までが、石戦の品質。",
          text:
            "箱詰めは梱包ではなく、最後の演出です。開ける前からきちんとしていると伝わることで、贈り物として完成します。",
          image: "./assets/images/process-packing.svg",
          alt: "箱詰めと届け方の工程を表現した石戦の仮ビジュアル"
        }
      ],
      summary: "だから石戦は、ただ甘いだけで終わりません。",
      ctas: [
        {
          label: "事業内容を見る",
          href: "./experience.html",
          style: "button button--line"
        },
        {
          label: "お問い合わせ",
          href: "./contact.html",
          style: "button button--line"
        }
      ]
    },
    scenes: {
      eyebrow: "Scenes / Occasion",
      title: "選ばれるのは、味のためだけではない。",
      text:
        "石戦は、食べるためだけのものではありません。渡すとき、開けるとき、囲むとき。その場の空気を少し整えたい日に、静かに選ばれます。",
      items: [
        {
          label: "Gift",
          title: "大切な人へ、気持ちを整えて渡せる。",
          text:
            "言葉を足しすぎなくても、箱を開けた瞬間に気持ちが伝わる。石戦は、贈る側の緊張まできれいにしてくれます。",
          image: "./assets/images/scene-gift.svg",
          alt: "贈答シーンと美しい箱を表現した石戦の仮ビジュアル",
          featured: true
        },
        {
          label: "For Me",
          title: "自分へのご褒美に、少しだけ良いものを。",
          text:
            "慌ただしい日でも、ひと口で空気が変わる。自分のために選ぶときも、石戦は特別すぎず、きちんと嬉しい。",
          image: "./assets/images/scene-reward.svg",
          alt: "自分へのご褒美の時間を表現した石戦の仮ビジュアル"
        },
        {
          label: "Family Table",
          title: "家族の食卓に、静かな主役を置く。",
          text:
            "切って並べるだけで、いつもの食卓に少しだけ緊張感が生まれる。会話のきっかけになる贅沢です。",
          image: "./assets/images/scene-family.svg",
          alt: "家族との食卓を表現した石戦の仮ビジュアル"
        },
        {
          label: "Special Day",
          title: "特別な日は、余白まで美しくしたい。",
          text:
            "記念日や季節の節目に、派手ではない上質さがよく似合う。料理の前から、その日の温度を整えます。",
          image: "./assets/images/scene-special.svg",
          alt: "特別な日の食卓と開封の情景を表現した石戦の仮ビジュアル"
        },
        {
          label: "Corporate Gift",
          title: "手土産にも、法人ギフトにも。",
          text:
            "かしこまりすぎず、軽すぎない。相手との距離を崩さずに、印象だけを上げたい場面で効きます。",
          image: "./assets/images/scene-corporate.svg",
          alt: "法人ギフトや手土産の情景を表現した石戦の仮ビジュアル"
        }
      ]
    },
    trust: {
      eyebrow: "Trust / Record",
      title: "安心は、静かな積み重ねで伝える。",
      text:
        "個人には『ここなら大丈夫』という安心感を。法人には『対応まで整っている』という印象を。石戦では、販売実績、リピーター、レビュー、出店、掲載、相談対応を、強すぎる言い方をせずに置いています。",
      visuals: [
        {
          image: "./assets/images/trust-smile.svg",
          alt: "購入後の笑顔と箱を抱える人物を表現した石戦の仮ビジュアル"
        },
        {
          image: "./assets/images/trust-event.svg",
          alt: "イベント出店風景を表現した石戦の仮ビジュアル"
        },
        {
          image: "./assets/images/trust-packing.svg",
          alt: "箱詰めと発送前の整え方を表現した石戦の仮ビジュアル"
        }
      ],
      producer: {
        label: "Assurance",
        title: "渡す前も、届いたあとも、温度差なく。",
        text:
          "個人の贈答も、法人の手土産も、用途・数量・納期・届け方まで整えて考える。味だけでなく、やり取りの安心感まで含めて信頼につなげています。"
      },
      stats: [
        {
          value: "12,000箱+",
          label: "累計販売箱数",
          note: "贈答・自家需要を含む掲載例"
        },
        {
          value: "68%",
          label: "シーズン内リピート",
          note: "再購入・再依頼の掲載例"
        },
        {
          value: "24回",
          label: "イベント出店",
          note: "催事・マルシェ出店の掲載例"
        },
        {
          value: "120件+",
          label: "法人相談対応",
          note: "手土産・ギフト・企画相談の掲載例"
        }
      ],
      voices: [
        {
          title: "手土産利用",
          text:
            "先方に渡す前に一度見たくなるくらい、箱の整い方がきれいでした。味も青さが残らず、安心して持っていけました。",
          meta: "都内企業 / 役員手土産"
        },
        {
          title: "自宅用",
          text:
            "高いけれど、切って並べたときの空気まで違うので、また頼みたくなりました。味だけではない満足感があります。",
          meta: "神奈川県 / 30代"
        },
        {
          title: "イベント購入",
          text:
            "催事で一度知ってから、季節のたびにお願いしています。派手ではないのに、ちゃんと記憶に残る味でした。",
          meta: "イベント来場 / 40代"
        }
      ],
      supports: [
        {
          label: "法人対応",
          title: "数量、納期、用途の相談に対応。",
          text: "季節の贈答、訪問時の手土産、企画用など、使う場面に合わせて整えやすい体制です。"
        },
        {
          label: "取引の安心感",
          title: "問い合わせから納品まで、温度差なく。",
          text: "返信、確認、届け方まできちんとしていることが、法人との継続につながります。"
        },
        {
          label: "メディア掲載",
          title: "催事や紹介記事でも扱いやすい。",
          text: "味だけでなく、見え方と背景があるから、紹介や掲載の文脈にも乗せやすい構成です。"
        }
      ],
      media: {
        label: "Media / Event",
        items: [
          "催事出店実績",
          "地域メディア紹介",
          "ギフト特集掲載",
          "法人手土産相談"
        ]
      },
      note: "※数値・レビュー・掲載表記は、現在のプレビュー用掲載例です。"
    },
    limited: {
      eyebrow: "Final / Invitation",
      title: "まずは一度、味わってほしい。",
      text:
        "自分のためにも、贈り物にも。石戦は、強く売り込むためではなく、一箱で印象が整う体験として届けています。法人でのご相談も、静かに承ります。",
      items: [
        {
          label: "自分用にも",
          text:
            "日々の食卓に、少しだけ良いものを置きたい日に。石戦は特別すぎず、きちんと嬉しい一箱です。"
        },
        {
          label: "贈り物にも",
          text:
            "箱を開ける前から気持ちが伝わるように。渡す所作まで整えたい場面にも、自然に馴染みます。"
        },
        {
          label: "法人相談も可能",
          text:
            "手土産、季節の贈答、掲載、数量相談など、用途に合わせたご相談も受け付けています。"
        }
      ],
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
        },
        {
          label: "法人のご相談",
          href: "./contact.html",
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
      eyebrow: "Product Guide",
      title: "今の石戦を、迷わず見にいける入口だけを置く。",
      text:
        "気になった人がそのまま次へ進めるように。商品一覧、オンラインショップ、初めての方向け、贈答向け、おすすめ商品を、静かな温度で分けています。",
      callout: {
        label: "Main Entrance",
        title: "まずは、今の石戦を見る。",
        text:
          "最初の一箱なら、全体が見える入口から。自分用か贈答向けかを見比べながら、無理なく次へ進めます。"
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
      ],
      items: [
        {
          label: "Recommended",
          title: "おすすめ商品",
          text: "季節の状態や石戦らしさが最も伝わりやすい入口から見ていただけます。",
          href: "./lineup.html"
        },
        {
          label: "For First Order",
          title: "初めての方向け",
          text: "どれを選べばよいか迷う方が、最初の一箱を決めやすい導線です。",
          href: "./lineup.html"
        },
        {
          label: "For Gift",
          title: "贈答向け",
          text: "箱を開けた瞬間の印象まで大切にしたい方へ。贈り物に合う見せ方から入れます。",
          href: "./lineup.html"
        },
        {
          label: "Contact",
          title: "問い合わせ",
          text: "購入前の相談から法人利用まで、必要な方だけが迷わず辿れる入口です。",
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
