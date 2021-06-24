// myScript.js
// {exact: "environment"}
//


// ブラウザが音声合成に対応しているかチェック
SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
if ('SpeechRecognition' in window) {
  // ユーザのブラウザは音声合成に対応しています。
  alert("音声合成に対応しています");
} else {
  // ユーザのブラウザは音声合成に対応していません。
  alert("音声合成に対応していません");
}
// safari=webkitなのでプレフィックスwebkitを入れる
this.recognition = new webkitSpeechRecognition();
this.recognition.lang = 'ja-JP'; //入力言語 日本語: ja-JP アメリカ英語: en-US 中国語: zh-CN 韓国語: ko-KR
this.recognition.interimResults = true; //認識途中でもとにかく出力！ falseだとisFinalが発火後に出力

// 字幕表示用
this.recognition.onresult = (e) => {
  // 認識した音をid=speechTextに入れて表示させる
  document.getElementById('speechText').textContent = e.results[0][0].transcript;
  console.log("isFinal = "+e.results[0].isFinal);
  // 音声認識が一区切りついたかどうか
    if (e.results[0].isFinal){
      console.log("isFinal = "+e.results[0].isFinal);
      // 音声認識を止める
      this.recognition.stop();
    }
}
this.recognition.start();



this.recognition.onend = () => { console.log('on end')
this.recognition.start();
}
