import '../App.css';
import React from 'react';
import styled from "styled-components";

const Message = () => {
    return(
        <React.StrictMode>
            <CONTAINER>
                <div className="messages leader">
                    <h3 className="title">級長からのメッセージ</h3>
                    <p className='message'>
                        僕が初めて開発したアプリ<br />「Yoshizawa Quest」<br />で遊んでくれてありがとう!!<br />
                        僕がクラスにいて、誰かは絶対何かヤバそうなことしてるヤツだな。と思っている人がいると思うのですが、これ作ってました!!笑 / 3-3は自発的に色々仕掛けられる人が沢山いて、本当にすごい。こんな僕でも級長として認めてくれて、本当に最高のクラスだと思ってます。今まで2年間ありがとう。
                    </p>
                </div>
                <div className="messages teacher">
                    <h3 className="title">吉澤先生からのメッセージ</h3>
                    <p className='message'>
                    「読書と勉強を頑張る」を徹底的に貫いてくれたおかげで、素晴らしいクラスが出来上がりました。授業も休み時間もとても居心地が良く、解散するのがもったいないので、私の心の中で永久に留年させておきます。
                    </p>
                </div>
            </CONTAINER>
        </React.StrictMode>
        
    );
}

const CONTAINER = styled.div`
    padding: 16px;
`;

export {Message};