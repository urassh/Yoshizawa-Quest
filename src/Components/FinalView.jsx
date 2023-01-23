import '../App.css';
import React from 'react';

const FinalView = () => {
    return(
        <React.StrictMode>
            <h1 className="final-title">3年3組のみんな</h1>
            <div className="messages">
                <h3 className="final-classLeader">級長からのメッセージ</h3>
                <p className='message'>
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
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