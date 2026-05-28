async function searchGourmet() {

  // 選択したジャンル取得
  const genre = document.getElementById("genre").value;

  // JSON URL
  const url =
    `https://www.nishita-lab.org/web-contents/jsons/hotpepper/${genre}.json`;

  // データ取得
  const response = await fetch(url);

  // JSON変換
  const data = await response.json();

  // 店舗一覧
  const shops = data.results.shop;

  // 表示場所
  const result = document.getElementById("result");

  let html = "";

  // 繰り返し表示
  shops.forEach(shop => {

    html += `
      <div class="shop">

        <img src="${shop.photo.pc.l}">

        <h2>${shop.name}</h2>

        <p><strong>住所：</strong>${shop.address}</p>

        <p><strong>予算：</strong>${shop.budget.name}</p>

        <p><strong>ジャンル：</strong>${shop.genre.name}</p>

        <p><strong>営業時間：</strong>${shop.open}</p>

        <p><strong>最寄駅：</strong>${shop.station_name}</p>

        <p>
          <a href="${shop.urls.pc}" target="_blank">
            店舗ページを見る
          </a>
        </p>

      </div>
    `;
  });

  result.innerHTML = html;
}