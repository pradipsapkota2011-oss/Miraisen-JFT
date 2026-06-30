// questions.js
const questions = [
  {
    id: 1,
    section: "Vocabulary",
    question: "Look at the illustration and choose the correct word",
    image: "Q1.png",
    options: ["やさい", "くだもの", "飲み物"],
    answer: 1,
    marks: 4
  },
  {
    id: 2,
    section: "Vocabulary",
    question: "Look at the illustration and choose the correct word.",
    image: "Q2.png",
    options: ["おします", "引きます", "触ります"],
    answer: 0,
    marks: 4
  },
  {
    id: 3,
    section: "Vocabulary",
    question: "Look at the illustration and choose the correct word.",
    options: ["たいふ", "じこ", "しゅうり"],
    image: "Q3.png",
    answer: 1,
    marks: 4
  },
{
  id: 4,
  section: "Vocabulary",
  instruction: "Read the sentance and choose the word that fits in( )the most.",
  subtitle: "Choose the correct one.",
  question: "しゅみはピアノを（　　　　）ことです。",
  options: ["ひく", "たたく", "びく"],
  answer: 0,
  marks: 4
},
  {
    id: 5,
    section: "Grammar",
    instruction: "Read the sentance and choose the word that fits in( )the most.",
    question: "新しいふくが（　　　　）。",
    options: ["とても", "ほしい", "さむい"],
    answer: 1,
    marks: 4
  },
  {
    id: 6,
    section: "Grammar",
    instruction: "Read the sentance and choose the kanji that fits in( )the most.",
    question: "かぞくとでんわで（ ）。",
    options: ["勉強します", "吸います", "話します"],
    answer: 2,
    marks: 4
  },
  {
    id: 7,
    section: "Grammar",
    instruction: "Read the sentance and choose the kanji that fits in( )the most.",
    question: "レストランへ行く前に（ ）ことができます。",
    options: ["予約して", "予約した", "予約する"],
    answer: 2,
    marks: 4
  },
 {
  id: 8,
  section: "Grammar",
  instruction: "How do you write the underlined kanji word in hiragana?",
  subtitle: "Choose the correct one.",
  question: "<span style='text-decoration:underline;'>今週</span>はいそがしくてとてもつかれています。",
  options: ["こんしゅ", "こんしゅう", "こんすう"],
  answer: 1,
  marks: 4
},
  {
  id: 9,
  section: "Grammar",
  instruction: "How do you write the underlined kanji word in hiragana?",
  subtitle: "Choose the correct one.",
  question: "東京の会社で<span style='text-decoration: underline;'>働いて</span>います。",
  options: ["はだらいて", "はたらいて", "はたらきて"],
  answer: 1,
  marks: 4
},
 {
  id: 10,
  section: "Grammar",
  instruction: "How do you write the underlined kanji word in hiragana?",
  subtitle: "Choose the correct one.",
  question: "ゆうびんきょくでにもつを<span style='text-decoration: underline;'>送る</span>。",
  options: ["おくる", "おくりる", "おおくる"],
  answer: 0,
  marks: 4
},
  {
    id: 11,
    section: "Grammar",
    instruction: "Read the sentance and choose the kanji that fits in( )the most.",
    question: "こののみものは（ ）そうです。",
    options: ["おいし", "おいしく", "おいしかった"],
    answer: 0,
    marks: 4
  },
  {
    id: 12,
    section: "Grammar",
    instruction: "Read the sentance and choose the kanji that fits in( )the most.",
    question: "こののみものは（ ）そうです。",
    options: ["おいし", "おいしく", "おいしかった"],
    answer: 0,
    marks: 5
  },
 {
  id: 13,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：すみません、いま何時ですか。<br><br>
B：…………………………<br><br>
A：ありがとうございます。<br><br>
B：いいえ。
`,
  options: [
    "9時ですか",
    "9時でした",
    "9時です"
  ],
  answer: 2,
  marks: 5
},
  {
  id: 14,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：ひろしまりょこうはどうでしたか。<br><br>

B：楽しかったです。おいしいものをたくさん食べました。<br>
　　ひろしまのおみやげもかいました。<br><br>

A：どこでかいましたか。<br><br>

B：ひろしまの一番ゆうめいな店で………………<br><br>

A：そうですか。
`,
  options: [
    "かってきます",
    "かってきました",
    "かっていきました"
  ],
  answer: 1,
  marks: 5
},
  {
  id: 15,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：はじめまして。ビンです。<br>
　　………………………………<br><br>

B：はじめまして。なかたです。
`,
  options: [
    "ありがとうございます",
    "えんりょください",
    "どうぞよろしく"
  ],
  answer: 2,
  marks: 5
},
  {
  id: 16,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：これは私の国のおかしです。<br>
　　あまくておいしいです。<br>
　　よかったら、どうぞ。<br><br>

B：ああ、…………………………
`,
  options: [
    "いいんですか",
    "おかげで",
    "いただきます"
  ],
  answer: 0,
  marks: 5
},
 {
  id: 17,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：日本語の勉強はどうですか。<br><br>

B：………………、<br>
　　かんじの勉強は すこし むずかしいです。
`,
  options: [
    "たのしいとき",
    "たのしいけど",
    "たのしいです"
  ],
  answer: 1,
  marks: 5
},
{
  id: 18,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：ありがとうございます。<br>
　　お会計３８００円でございます。<br><br>

B：すみません、…………………………お願いします。<br><br>

A：３８００円です。
`,
  options: [
    "またこんど",
    "もういっぱい",
    "もういちど"
  ],
  answer: 2,
  marks: 5
},
{
  id: 19,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：新しく買った自転車はどうですか。<br><br>

B：軽くて、とても…………………………
`,
  options: [
    "かいやすいです",
    "つかいやすいです",
    "のりやすいです"
  ],
  answer: 2,
  marks: 5
},
{
  id: 20,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：しゅうまつ、どこか旅行へ行きますか。<br><br>

B：今週は仕事がいそがしかったので、<br>
　　どこへも行きたくないです。<br>
　　…………………………いえでゆっくりします。
`,
  options: [
    "きっと",
    "ずっと",
    "とても"
  ],
  answer: 1,
  marks: 5
},
{
  id: 21,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：かいぎしつのでんきはついたままですよ。<br>
　　電気はもったいないですから、<br>
　　けしてくださいね。<br><br>

B：本当にすみません。<br>
　　こんどから…………………………
`,
  options: [
    "だいじょうぶです",
    "きをつけます",
    "つけません"
  ],
  answer: 1,
  marks: 5
},
{
  id: 22,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：たなかさんは中にいますか。<br><br>

B：いいえ、いません。<br><br>

A：どこにいますか。<br><br>

B：私もしりません。<br>
　　たぶん あおきさんに きいたら、<br>
　　…………………………
`,
  options: [
    "わかります",
    "聞いてください",
    "わかるかもしれません"
  ],
  answer: 2,
  marks: 5
},
{
  id: 23,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：さいきん新しくできたレストランは、<br>
　　すごくおいしいですよ。<br>
　　こんどいっしょに食べに<br>
　　…………………………。<br><br>

B：ええ、行きましょう。
`,
  options: [
    "いきませんか",
    "いかなければならない",
    "いってください"
  ],
  answer: 0,
  marks: 5
},
{
  id: 23,
  section: "Expression",
  instruction: "Read the dialog and choose the phrase that fits the most.",
  subtitle: "",
  type: "dialog",
  dialog: `
A：さいきん新しくできたレストランは、<br>
　　すごくおいしいですよ。<br>
　　こんどいっしょに食べに<br>
　　…………………………。<br><br>

B：ええ、行きましょう。
`,
  options: [
    "いきませんか",
    "いかなければならない",
    "いってください"
  ],
  answer: 0,
  marks: 5
},
{
  id: 24,
  section: "Listening",
  question: "二人は何を食べますか。",
  audio: "Q24.mp3",
  options: [
    { image: "Q24-a.png" },
    { image: "Q24-b.png" },
    { image: "Q24-c.png" }
  ],
  answer: 2,
  marks: 5
},
{
  id: 25,
  section: "Listening",
  question: "男の人はどこへ行きますか。",
  audio: "Q25.mp3",
  options: [
    { image: "Q25-a.png" },
    { image: "Q25-b.png" },
    { image: "Q25-c.png" }
  ],
  answer: 0,
  marks: 5
},
{
  id: 26,
  section: "Listening",
  question: "トイレは何階にありますか。",
  audio: "Q26.mp3",
  options: [
    { image: "Q26-a.png" },
    { image: "Q26-b.png" },
    { image: "Q26-c.png" }
  ],
  answer: 1,
  marks: 5
},
{
  id: 27,
  section: "Listening",
  question: "お客様はどの掃除機を購入しますか。",
  audio: "Q27.mp3",
  options: [
    { image: "Q27-a.png" },
    { image: "Q27-b.png" },
    { image: "Q27-c.png" }
  ],
  answer: 0,
  marks: 5
},
{
  id: 28,
  section: "Listening",
  question: "にもつは何時に届きますか。",
  audio: "Q28.mp3",
  options: [
   "10時から12時",
    "12時から14時",
    "14時から16時"
  ],
  answer: 1,
  marks: 5
},
{
  id: 29,
  section: "Listening",
  question: "Typhoon ko kurakani hunxa voli k hunxa vanne kura hunxa",
  options: [
    { image: "Q29-a.png" },
    { image: "Q29-b.png" },
    { image: "Q29-c.png" }
  ],
  answer: 0,
  marks: 5
},
{
  type: "double",
  section: "Listening",
  question: "次の会話を聞いて、質問に答えてください。",
  audio: "Q29.mp3",

  parts: [

    {
      title: "(a) 男の人は何を持ってきますか。",
      options: [
        {image:"Q30-a.png"},
        {image:"Q30-b.png"},
        {image:"Q30-c.png"}
      ],
      answer: 0,
      marks: 6
    },

    {
      title: "(b) いくつ持ってきますか。",
      options:[
        "2",
        "3",
        "4"
      ],
      answer: 1,
      marks:5
    }

  ]
},
{
  type: "double",
  id: "32-33",
  section: "Listening",
  question: "次の会話を聞いて、質問に答えてください。",
  audio: "Q30.mp3",
  parts: [
    {
      title: "(a) 休むときのもうしこみしょはどこにおきますか。",
      options: [
        { image: "Q31-a.png" },
        { image: "Q31-b.png" },
        { image: "Q31-c.png" }
      ],
      answer: 2,
      marks: 6
    },
    {
      title: "(b) もうしこみはいつだしますか。",
      options: [
        "13日",
        "14日",
        "15日"
      ],
      answer: 0,
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "34-35",
  section: "Listening",
  question: "次の会話を聞いて、質問に答えてください。",
  audio: "Q31.mp3",
  parts: [
    {
      title: "(a) 二人はこのあとどこへ行きますか。",
      options: [
        { image: "Q32-a.png" },
        { image: "Q32-b.png" },
        { image: "Q32-c.png" }
      ],
      answer: 0,
      marks: 6
    },
    {
      title: "(b) 昼ご飯のあと何時に集まりますか。",
      options: [
        "12:45",
        "12:50",
        "13:00"
      ],
      answer: 1,
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "36-37",
  section: "Reading",
  question: "Read the Passage and Answer the Following Questions",
  passage: "先週は仕事がいそがしくてとてもつかれました。こんしゅうはゆっくりします。今日と明日は休みです。今日はせんたくをします。明日はゆっくりねたいです。どこにも行きたくないです。",

  parts: [
    {
      title: "(a) 先週はどうでしたか。",
      options: [
        { image: "Q33-a.png" },
        { image: "Q33-b.png" },
        { image: "Q33-c.png" }
      ],
      answer: 2,
      marks: 6
    },
    {
      title: "(b) 今日は何をしますか。",
      options: [
        { image: "Q34-a.png" },
        { image: "Q34-b.png" },
        { image: "Q34-c.png" }

      ],
      answer: 1,
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "38-39",
  section: "Reading",
  question: "Read the Passage and Answer the Following Questions",

  passage: "4月18日（木）すいどうこうじのため、ごご1時から3時まで2時間、水やお湯が出ません。そのあと水が出るとき、ちゃいろい水が出るかのうせいがあります。ちゃいろいときは5分ぐらい水を出してから使ってください。",

  parts: [
    {
      title: "(a) 何時まで水が出ませんか。",
      options: [
        "1時",
        "2時",
        "3時"
      ],
      answer: 2,
      marks: 7
    },
    {
      title: "(b) 水がちゃいろいときはどうすればいいですか。",
      options: [
        "1時間ぐらい待ちます",
        "じぶんでそうじします",
        "5分ぐらい水を出します"
      ],
      answer: 2,
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "40-41",
  section: "Reading",
  question: "Read the Passage and Answer the Following Questions",
  passage: "先週、旅行へ行きました。私はいつも旅行のとき旅館に泊まります。旅館にはいろいろなゆかたがあるので、好きなゆかたを借りて楽しむことができます。でも日曜日は学生がたくさん来るので、ゆっくりご飯を食べることができません。",

  parts: [
    {
      title: "(a) この人はどうしてりょかんにとまりますか。",
      options: [
        "新しいから",
        "やすいから",
        "ゆかたを借りられるから"
      ],
      answer: 2,
      marks: 7
    },
    {
      title: "(b) この人はよくないと思ったことは何ですか。",
      options: [
        "むしがいます",
        "旅館がうるさいです",
        "ご飯がおいしくないです"
      ],
      answer: 1,
      marks: 7
    }
  ]
},
{
  type: "double",
  id: "42-43",
  section: "Reading",
  question: "Look at the information and answer the following questions",

  image: "Q45.png",

  parts: [
    {
      title: "(a) 音楽のばんぐみは何時ですか。",
      options: [
        "20:00",
        "20:45",
        "21:00"
      ],
      answer: 2,
      marks: 7
    },
    {
      title: "(b) ちょうりのばんぐみはどのテレビでありますか。",
      options: [
        "テレビ大山",
        "テレビさくら",
        "テレビふじ"
      ],
      answer: 1,
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "44-45",
  section: "Reading",
  question: "Look at the information and answer the following questions",

  image: "Q46.png",

  parts: [
    {
      title: "(a) 金曜日のメニューは何ですか。",
      options: [
        "焼き魚",
        "てんぷらずし",
        "からあげ"
      ],
      answer:0,
      marks: 6
    },
    {
      title: "(b) からあげはいくらですか。",
      options: [
        "700円",
        "750円",
        "800円"
      ],
      answer: 2,
      marks: 6
    }
  ]
},
{
  type: "double",
  id: "46-47",
  section: "Reading",
  question: "Look at the information and answer the following questions",

  image: "Q47.png",

  parts: [
    {
      title: "(a) スーツケースについて正しいものはどれですか。",
      options: [
        "1～3日間で届きます",
        "いろいろな色から選べます",
        "大きいポケットがあります"
      ],
      answer: 1,
      marks: 6
    },
    {
      title: "(b) 今日このスーツケースを買うとどうなりますか。",
      options: [
        "1000円わりびきがもらえます",
        "無料で送料できます",
        "旅行が楽しくなります"
      ],
      answer: 0,
      marks: 6
    }
  ]
}
]