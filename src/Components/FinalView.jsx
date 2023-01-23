import '../App.css';
import React from 'react';

const FinalView = () => {
    return(
        <React.StrictMode>
            
            <div className="messages">
                <h3 className="final-classLeader">級長からのメッセージ</h3>
                <p className='message'>
                    僕が初めて開発したアプリ<br />「Yoshizawa Quest」<br />で遊んでくれてありがとう!!<br />
                    僕がクラスにいて、誰かは絶対何かヤバそうなことしてるヤツだな。と思っている人がいると思うのですが、これ作ってました!!笑 / 3-3は自発的に色々仕掛けられる人が沢山いて、本当にすごい。さらにこんな僕でも級長として認めてくれる居心地の良さは本当に最高のクラスだと思ってます。今まで2年間ありがとう。
                </p>
            </div>
            <div className="messages">
                <h3 className="final-classLeader">吉澤先生からのメッセージ</h3>
                <p className='message'>
                「読書と勉強を頑張る」を徹底的に貫いてくれたおかげで、素晴らしいクラスが出来上がりました。授業も休み時間もとても居心地が良く、解散するのがもったいないので、私の心の中で永久に留年させておきます。
                </p>
            </div>
        </React.StrictMode>
        
    );
}

export {FinalView};