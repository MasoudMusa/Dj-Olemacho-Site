window.onload = fetctchData();

function fetctchData() {
  const url =
    "https://api-v2.hearthis.at/djolemacho/?type=tracks&page=1&count=30";
  fetch(url)
    .then(response => response.json())
    .then(jsondata => {
      createDynamicDiv(jsondata);
    });
}

function createDynamicDiv(jsondata) {
  for (let index = 0; index < jsondata.length; index++) {
    var list = document.createElement("div");

    list.innerHTML =
      `<div class="d-block d-md-flex podcast-entry bg-white mb-5" data-aos="fade-up">` +
      `<div class="image" style="background-image: url(${jsondata[index].background_url});"></div>` +
      `<div class="text">` +
      `<h3 class="font-weight-light"><a href="${jsondata[index].stream_url}">${jsondata[index].title}</a></h3>` +
      `<div class=" mb-3 text-black"><span class="text-black-opacity-05"><small>${jsondata[index].user.username}<span class="sep">/</span>${jsondata[index].created_at}<span class="sep">/</span>${jsondata[index].duration}</small></span></div>` +
      `<a href="${jsondata[index].download_url}">Download</a> <br>` +
      `<div class="player">` +
      `<audio id="player2" preload="none" controls style="max-width: 100%">` +
      `<source src="${jsondata[index].stream_url}" type="audio/mp3">` +
      `</audio>` +
      `</div>` +
      `</div>` +
      `</div>`;

    var songs_list = document.getElementsByClassName("songs-list");

    songs_list[0].appendChild(list);
  }
}
