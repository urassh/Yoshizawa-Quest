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
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                    テキストテキストテキストテキストテキストテキストテキストテキストテキスト
                </p>
            </div>
        </React.StrictMode>
        
    );
}

export {FinalView};