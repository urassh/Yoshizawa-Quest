import {Quiz} from './Quiz';

const QUESTIONS = [
    new Quiz("このクラス 3年3組の人数は？", ["53人", "54人", "55人"], 2, 2, 2),
    new Quiz("3年生の時の文化祭の店名は？", ["ネームプレート ", "君の名は", "ネームボード"], 1, 4, 4),
    new Quiz("マザー牧場に行った日はいつ？", ["5月31日", "6月8日", "7月1日"], 1, 4, 4),
    new Quiz("修学旅行は何泊何日？", ["5泊6日", "6泊7日", "7泊8日"], 1, 4, 4),
    new Quiz("あまりの声のデカさに、アラームとして使われてしまった先生は？", ["瀧先生", "齋藤先生", "山中先生"], 1, 4, 4),

    new Quiz("2年生の時のこのクラスの級長は誰でしょう？", ["浦山秀斗", "葛西雷火", "小林邦光"], 3, 4, 4),
    new Quiz("2年の時の体育祭のハチマキの色は？", ["青色", "赤色", "黄色"], 1, 4, 4),
    new Quiz("2年の時の文化祭は何月？", ["9月", "10月", "11月"], 1, 3, 3),
    new Quiz("2年生の文化祭の出し物はなんでしょう？", ["ネームプレート", "和菓子店", "ビーンズ"], 1, 4, 4),
    new Quiz("クラス本にある漫画はどれ？", ["おーい龍馬", "聲の形", "天気の子"], 1, 4, 4),

    new Quiz("吉澤先生の好きなお菓子はなんでしょう？", ["ドーナツ", "アルフォート", "ホワイトチョコ"], 2, 4, 4),
    new Quiz("吉澤先生が好きな国語の作品はなんでしょう？", ["孤独のチカラ", "こころ", "山月記"], 3, 4, 4),
    new Quiz("吉澤先生が好きなジブリ作品はなんでしょう？", ["千と千尋の神隠し", "耳を澄ませば", "ハウルの動く城"], 1, 4, 4),
    new Quiz("吉澤先生が二年間過ごした一番の思い出はなんでしょう？", ["体育祭で２年連続優勝したこと", "定期的にスマホを没収してほしい人が登場したこと", "２年生の大掃除でみんながやれることを探してやっていたこと"], 1, 4, 4),
    new Quiz("吉澤先生の誕生日はいつでしょう？", ["5月31日", "6月8日", "7月1日"], 1, 4, 4),
];

export {QUESTIONS};