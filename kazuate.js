// 課題4-1: 数当てゲーム
// 正解をランダムで作る
let kotae = Math.floor(Math.random() * 10) + 1;
console.log("答え（デバッグ用）: " + kotae);

// 回数
let kaisu = 0;

// ゲーム終了フラグ
let owari = false;

// 判定関数
function hantei() {

  let yoso = Number(document.getElementById("yoso").value);

  // 終了してる場合
  if (owari || kaisu >= 3) {
    document.getElementById("result").textContent =
      "答えは " + kotae + " でした．すでにゲームは終わっています";
    return;
  }

  // 回数増やす
  kaisu++;

  // 回数表示
  document.getElementById("kaisu").textContent = kaisu;

  // 入力した値を表示
  document.getElementById("yosovalue").textContent = yoso;

  // 正解判定
  if (yoso === kotae) {
    document.getElementById("result").textContent =
      "正解です．おめでとう!";
    owari = true;

  } else {

    if (kaisu === 3) {
      document.getElementById("result").textContent =
        "まちがい．残念でした答えは " + kotae + " です．";
      owari = true;

    } else if (yoso < kotae) {
      document.getElementById("result").textContent =
        "まちがい．答えはもっと大きいですよ";

    } else {
      document.getElementById("result").textContent =
        "まちがい．答えはもっと小さいですよ";
    }
  }
}

// ボタンにイベント登録
document.getElementById("btn").addEventListener("click", hantei);