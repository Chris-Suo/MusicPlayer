const container = document.querySelector(".container");
const lyricsContainer = document.querySelector(".lyrics");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");

const audio = document.querySelector("#audio");
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector("#title");
// const cover = document.querySelector('#cover');

const songs = ["寶貝", "暖暖", "旋律", "身邊", "小手拉大手", "永不失聯的愛"];
const lyrics = [
  "《寶貝》<br/>我的寶貝寶貝 给你一點甜甜<br/>讓你今夜都好眠<br/>我的小鬼小鬼 逗逗你的眉眼<br/>讓你喜歡這世界<br/>哇啦啦啦啦啦我的寶貝<br/>倦的時候有個人陪<br/>哎呀呀呀呀呀我的寶貝<br/>要你知道你最美<br/>我的寶貝寶貝 給你一點甜甜<br/>讓你今夜很好眠<br/>我的小鬼小鬼 捏捏你的小臉<br/>讓你喜歡整個明天<br/>哇啦啦啦啦啦我的寶貝<br/>孤單時有人把你想念<br/>哎呀呀呀呀呀我的寶貝<br/>讓你知道你最美<br/>哇啦啦啦啦啦 yeah woo yeah woo<br/>",
  "《暖暖》<br/>都可以 隨便的 你說的 我都願意去<br/>小火車 擺動的旋律<br/>都可以 是真的 你說的 我都會相信<br/>因為我 完全信任你<br/>細膩的喜歡 毛毯般的厚重感<br/>曬過太陽 熟悉的安全感<br/>分享熱湯 我們兩支湯匙一個碗<br/>左心房 暖暖的好飽滿<br/>我想說 其實你很好 你自己卻不知道<br/>真心的對我好 不要求回報<br/>愛一個人 希望他過更好<br/>打從心裡 暖暖的 你比自己更重要<br/><br/>都可以 隨便的 你說的 我都願意去<br/>回憶裡 滿足的旋律<br/>都可以 是真的 你說的 我都會相信<br/>因為我 完全信任你<br/>細膩的喜歡 你手掌的厚實感<br/>什麼困難 都覺得有希望<br/>我哼著歌 你自然的就接下一段<br/>我知道 暖暖 就在胸膛<br/>我想說 其實你很好 你自己卻不知道<br/>真心的對我好 不要求回報<br/>愛一個人 希望他過更好<br/>打從心裡 暖暖的 你比自己更重要<br/>我想說 其實你很好 你自己卻不知道<br/>真心的對我好 不要求回報<br/>愛一個人 希望他過更好<br/>打從心裡 暖暖的 你比自己更重要",
  "《旋律》<br/>你是眼裡的音樂<br/>最動心的歌<br/>你播著<br/>全世界突然亮了<br/>多麼實在的感覺<br/>望著你的臉<br/>這一刻<br/>我到了被人遺忘的永遠<br/>在陌生的街<br/>天讓我們遇見<br/>像迷路的人找到回家的路線<br/>你的美麗我要珍惜<br/>昨天會忘記<br/>是誰遺失了你 我願陪著你<br/>找回自己<br/>當你姓名化作旋律在我腦海裡<br/>我已確定 那個人就是你<br/>窩在我心裡 最動聽的Melody",
  "《身邊》<br/>坐在你的身邊是種滿足的體驗<br/>看你看的畫面　過你過的時間<br/>天也晴了　花也開了　微風也沉醉<br/>雖然你不說話　卻也早已萬語千言<br/>分分秒秒顯得清澈又珍貴　只有你才能給我這種感覺<br/>不管心多疲倦　夢想還有多遠<br/>有你陪伴一切都無所謂<br/>我要陪你擦拭每個昨天<br/>相片　日記　書籤<br/>有暖意慢慢浮現<br/>我要用默默的體貼<br/>讓你睜開雙眼　看見昨夜夢想都實現<br/>我也願意幫你打掃房間<br/>把身體好好鍛鍊　好讓你覺得安全<br/>讓你記得我的優點　無論任何時間<br/>對我非常想念　非常想念<br/><br/>坐在你的身邊是種滿足的體驗<br/>看你看的畫面　過你過的時間<br/>天也晴了　花也開了　微風也沉醉<br/>雖然你不說話　卻也早已萬語千言<br/>分分秒秒顯得清澈又珍貴　只有你才能給我這種感覺<br/>不管心多疲倦　夢想還有多遠<br/>有你陪伴一切都無所謂<br/>我要陪你擦拭每個昨天<br/>相片　日記　書籤<br/>有暖意慢慢浮現<br/>我要用默默的體貼<br/>讓你睜開雙眼　看見昨夜夢想都實現<br/>我也願意幫你打掃房間　把牌技好好演練<br/>陪你母親打八圈<br/>為你寫下盈淚詩篇<br/>感覺就像觸電<br/>才會對我想念　非常想念<br/>我要陪你擦拭每個昨天<br/>相片　日記　書籤<br/>有暖意慢慢浮現<br/>我要用默默的體貼<br/>讓你睜開雙眼　看見昨夜夢想都實現<br/>我也願意幫你打掃房間<br/>幫你的爸爸戒菸　幫你兄弟姐妹買早點<br/>讓你時刻覺得很炫　<br/>生活過得悠閒　<br/>對我非常想念　非常想念",
  "《小手拉大手》",
  "《永不失聯的愛》",
];
let songIndex = 0;

loadSong(songIndex);

function loadSong(index) {
  title.innerText = songs[index];
  lyricsContainer.innerHTML = lyrics[index];
  audio.src = `Musics/${songs[index]}.mp3`;
  //     cover.src = `Images/${song}.jpg`;
}

function playSong() {
  container.classList.add("play");
  lyricsContainer.classList.add("play");
  playBtn.querySelector("i.fas").classList.remove("fa-play");
  playBtn.querySelector("i.fas").classList.add("fa-pause");

  audio.play();
}

function pauseSong() {
  container.classList.remove("play");
  lyricsContainer.classList.remove("play");
  playBtn.querySelector("i.fas").classList.add("fa-play");
  playBtn.querySelector("i.fas").classList.remove("fa-pause");

  audio.pause();
}

playBtn.addEventListener("click", () => {
  const isPlaying = container.classList.contains("play");

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songIndex);
  playSong();
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songIndex);
  playSong();
}

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

function updateProgress(e){
    // console.log(e.srcElement);
    const {duration, currentTime} = e.srcElement;
    const progressPrecent = (currentTime / duration) * 100;
    progress.style.width = `${progressPrecent}%`;
}

function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}


audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);
