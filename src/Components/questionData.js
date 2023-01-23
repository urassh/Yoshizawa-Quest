class Quiz {
    static index = 0;
    static correctCount = 0;
    static totalPoint = 0;
    static quizLength = 10;
    static MIN = 0;
    constructor(text, buttonsList, correct, point, level) {
        if(text === "") {
            console.log(`テキストが、空白の状態です。`);
        } else if (correct > 4) {
            console.log(`correctの値が不正です。`);
        }
        if (level >= 4 || level < 0){
            console.log("Levelの値が不正です。");
        }
        this.text = text;
        this.buttonsList = buttonsList;
        this.correct = correct;
        this.point = point;
        this.level = level;
        Object.freeze(this);
    }
 }

const QUESTIONS = [
    new Quiz("体育活動中の死亡事故で一番多い原因は？", ["心臓発作", "頭部をぶつける", "エレベータで押し合う", "こける"], 1, 2, 2),
    new Quiz("「最初はグー」初めて使った人は。", ["ヒカキン", "吉澤俊介", "じゃんけん協会会長 松本さん", "志村けん"], 4, 2, 1),
    new Quiz("「音楽の父」と称される音楽家は誰でしょう？", ["バッハ", "モーツァルト", "ベートーヴェン", "チャイコフスキー"], 1, 2, 2),
    new Quiz("世界で最も古いとされている奈良にある木造建築の寺の名前はなんでしょう？", ["東大寺", "法隆寺", "金閣寺", "唐招提寺"], 2, 1, 1),
    new Quiz("40人クラスに、誕生日が同じ組み合わせがいる確率でもっとも近いものは？", ["約12%", "約27%", "約90%", "約3%"], 3, 1, 1),
    new Quiz("ダンゴ虫の呼吸法は？何呼吸？", ["肺呼吸", "水の呼吸", "えら呼吸", "皮膚呼吸"], 3, 2, 2),
    new Quiz("夏目漱石の作品、吾輩は猫である の冒頭文「吾輩は猫である。名前は〇〇〇〇。」ここに入る文字は？", ["レオ", "ヨシザワ", "ニャー子", "まだない"], 4, 2, 2),
    new Quiz("日本で初めて拳銃の携帯が認められた職業はなんでしょうか？", ["警察官", "国家警備員", "郵便配達員", "自宅警備隊"], 3, 3, 3),
    new Quiz("FIFA(国際サッカー連盟)の本部がある国の名前は？", ["スイス", "ブラジル", "アルゼンチン", "フランス"], 1, 3, 3),
    new Quiz("吉澤先生の大好きなアーティストは何でしょう？", ["あいみょん", "YOASOBI", "Ado", "Mrs.Green Apple"], 1, 1, 1),

    new Quiz("ゴルフの試合において、選手の打ったボールが観客のリュックのポケットに入るという珍事件が発生した。この場合どのようにしてプレーを続行したでしょうか。(ちなみに、観客はコース内ではなく観覧エリア内にいた。)", ["打ち直し", "観客の位置にボールを置く", "(ボールをプレゼントし)やり直す", "ゲーム中断"], 2, 3, 3),
    new Quiz("東京で最も晴れやすい月は何月か", ["1月", "4月", "8月", "10月"], 1, 2, 2),
    new Quiz("新聞紙を26回折ると、どのくらいの高さになるでしょう", ["歩行者用の信号", "高層マンション", "富士山", "月"], 3, 2, 2),
    new Quiz("メソポタミアの意味は何でしょう？", ["大河", "川の間", "神", "オアシス"], 2, 1, 1),
    new Quiz("クロちゃんの本名は何でしょうか。", ["クロ・チャン", "黒田明人", "黒川明人", "黒川リチ"], 3, 2, 2),
    new Quiz("「神は死んだ。」で有名なツァラトゥストラを書いた人は誰でしょう？", ["ニーチェ", "ヘルマン・ヘッセ", "イエス・キリスト", "アーサー王"], 1, 2, 2),
    new Quiz("ポケモンカードの個人売買の最高額で、ギネス認定されている金額は何億円か。", ["46億円", "3000万円", "20億円", "３億円"], 1, 2, 2),
    new Quiz("気象庁が植物や動物の季節による変化を観測する「生物季節観測」でないものはどれ？", ["たんぽぽ前線", "さくら前線", "ひまわり前線", "もみじ前線"], 3, 3, 3),
    new Quiz("ラー油の「ラー」とはどんな意味でしょうか？", ["辛い", "香ばしい", "赤い", "美味しい"], 1, 1, 1),
    new Quiz("吉澤先生の兄弟構成はどれでしょう？", ["兄_吉澤先生_妹_妹_妹", "吉澤先生_弟_妹", "兄_姉_吉澤先生_妹_弟", "姉_吉澤先生_妹_妹"], 1, 2, 2),

    new Quiz("日本人の血液型で一番多いのはA型です。では、世界的に見た場合に一番多いのは何型でしょうか？", ["A型", "B型", "O型", "AB型"], 3, 1, 1),
    new Quiz("「学ラン」の「ラン」とはなんでしょうか？", ["お花のラン", "オランダ", "毛利 ラン", "ランダム"], 2, 1, 1),
    new Quiz("カップ麺に入っている「かやく」を漢字で書くとどうなるでしょうか？", ["火薬", "化薬", "加薬", "科薬"], 3, 2, 2),
    new Quiz("塾に通っている中学生の割合はどのくらいでしょうか？", ["約10%", "約30%", "約50%", "約70%"], 3, 1, 1),
    new Quiz("2023年度 大学入学共通テスト 英語リーディング 第6問 で出題された虫の名前は何でしょう", ["アリ", "クマムシ", "毛虫", "クモ"], 2, 3, 3),
    new Quiz("大人気漫画「鬼滅の刃」にて、藤の花は鬼にも有効な毒として描かれています。では、現実の藤の花の毒はどの程度の強さでしょうか？", ["人間には一切効かない", "摂りすぎるとめまいや吐き気がする", "少量でも人間の命に関わる", "毒は一切ない"], 2, 2, 2),
    new Quiz("大人気漫画「ワンピース」に登場するキャラクター「サンジ」は当初は違う名前になる予定だったそうです。予定ではどんな名前だったでしょうか？", ["メンマ", "ゲンジ", "ナルト", "カヲル"], 3, 3, 3),
    new Quiz("夏目漱石の本名は何か。", ["夏目金之助", "柳川隆之助", "夏井いつき", "石田なつめ"], 1, 1, 1),
    new Quiz("呪術廻戦 五条悟の台詞に「菊水庵 喜久福 〇〇名物 超うまい」とある。この喜久福が有名な県は？", ["福島県", "岩手県", "新潟県", "宮城県"], 4, 2, 2),
    new Quiz("吉澤先生が一番好きな食べ物は何でしょう？", ["とんかつ", "焼肉", "冷麺", "トマト"], 1, 3, 3),

    new Quiz("ソフトテニスにおいて、ラケットに二回以上ボールが当たってしまったとき、相手の得点になってしまう。このときのファール名をなんというか。", ["ドリブル", "コードバイオレーション", "タイブレーク", "フォルト"], 1, 3, 3),
    new Quiz("ナポレオン・ボナパルトのあだ名は", ["英雄王", "食人鬼", "太陽の沈まぬ王", "獅子心王"], 2, 2, 2),
    new Quiz("エーミールの「そうかそうか、つまり君はそんなやつだったんだな」のセリフが有名な小説『少年の日の思い出』の作者は誰でしょう。", ["ミカエル・ファミリア", "アーノルド・ローベル", "ヘルマン・ヘッセ", "かまきり りゅうじ"], 3, 1, 1),
    new Quiz("「Gorilla gorilla gorilla」という学名を持つゴリラはなんでしょう？", ["クロスリバーゴリラ", "マウンテンゴリラ", "ニシローランドゴリラ", "ヒガシローランドゴリラ"], 3, 2, 2),
    new Quiz("母の日に贈る花で有名な「カーネーション」。さて、黄色のカーネーションの花言葉は次のうちどれ？", ["家族愛", "感謝", "嫉妬", "軽蔑"], 4, 3, 3),
    new Quiz("日常的に「マジ？」って言葉がよく使われますが、その「マジ」という言葉は、一体いつからあったでしょう？", ["江戸時代", "明治時代", "昭和時代", "平成時代"], 1, 1, 1),
    new Quiz("次のうち、実際に北海道に存在する川はどれ？", ["イトオシイ川", "クルオシイ川", "ヤリキレナイ川", "チョウシデナイ川"], 3, 2, 2),
    new Quiz("「見ろ、人がごみのようだ」でお馴染みムスカ大佐。さて、彼の年齢はいくつでしょう？", ["28歳", "32歳", "58歳", "62歳"], 1, 3, 3),
    new Quiz("「ウォーリーを探せ」でお馴染みのウォーリー。彼の肩書きとされているのは、次のうちどれ？", ["コックさん", "脱獄した囚人", "お金配りおじさん", "コメディアン"], 2, 1, 1),
    new Quiz("吉澤先生の大学生時代の学科はなんでしょう？", ["情報メディア科", "哲学科", "サブカルチャー研究科", "日本文学科"], 4, 2, 2),

    new Quiz("大相撲の力士が禁止されているのはどれ", ["ダイエット", "車の運転", "電車の乗車", "小舟の乗船"], 2, 2, 2),
    new Quiz("「雪花菜（きらず）」。これはある食品を指す言葉ですが、その食品とは一体なんでしょうか？", ["砂糖菓子", "菜の花", "おから", "あられ"], 3, 3, 3),
    new Quiz("誇り高きサイヤ人の王子 べジータは何ｃｍでしょう？", ["159cm", "164cm", "179cm", "184cm"], 2, 2, 2),
    new Quiz("「シルバー人材センター」など、高齢者を表す色というイメージがある「銀（シルバー）」。シルバーが高齢者を指す言葉として定着した由来は何でしょうか？", ["銀座", "優先席", "銀歯", "白髪"], 2, 2, 2),
    new Quiz("ことわざの「急がば回れ」の語源となったのはどこでしょうか？", ["富士山", "鳥取砂丘", "清水寺", "琵琶湖"], 4, 3, 3),
    new Quiz("かぐや姫の原作である「竹取物語」の作者は誰でしょうか？", ["紫式部", "清少納言", "聖徳太子", "作者不明"], 4, 1, 1),
    new Quiz("靴の一種、「ローファー」には英語でどんな意味があるでしょうか？", ["怠け者", "働き者", "親不孝者", "幸せ者"], 1, 2, 2),
    new Quiz("海上で事件や事故が起こった時、海上保安庁に通報する番号はどれでしょうか？", ["104", "118", "177", "189"], 2, 1, 1),
    new Quiz("選挙の投票用紙にはある特徴があります。それは一体なんでしょうか？", ["折り曲げても勝手に開く", "燃やせない", "特殊な表面加工が施されている", "高級な紙が使われている"], 1, 1, 1),
    new Quiz("吉澤先生が、2年間このクラスで過ごした 一番 の思い出はなんでしょう？", ["２年生の大掃除でみんながやれることを探してやっていたこと", "試験のたびに学年１位の成績を取っていたこと", "定期的にスマホを没収してほしい人が登場したこと", "体育祭で２年連続優勝したこと"], 1, 3, 3),
];

export {QUESTIONS, Quiz};