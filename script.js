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
  "<h4 class='lyric-title'>《寶貝》</h4><br/>我的寶貝寶貝<br/>给你一點甜甜<br/>讓你今夜都好眠<br/>我的小鬼小鬼<br/>逗逗你的眉眼<br/>讓你喜歡這世界<br/>哇啦啦啦啦啦我的寶貝<br/>倦的時候有個人陪<br/>哎呀呀呀呀呀我的寶貝<br/>要你知道你最美<hr/>我的寶貝寶貝<br/>給你一點甜甜<br/>讓你今夜很好眠<br/>我的小鬼小鬼<br/>捏捏你的小臉<br/>讓你喜歡整個明天<br/>哇啦啦啦啦啦我的寶貝<br/>孤單時有人把你想念<br/>哎呀呀呀呀呀我的寶貝<br/>讓你知道你最美<br/>哇啦啦啦啦啦<br/>yeah woo yeah woo",
  "<h4 class='lyric-title'>《暖暖》</h4><br/>都可以 隨便的 你說的<br/>我都願意去<br/>小火車 擺動的旋律<br/>都可以 是真的 你說的<br/>我都會相信<br/>因為我 完全信任你<br/>細膩的喜歡<br/>毛毯般的厚重感<br/>曬過太陽<br/>熟悉的安全感<br/>分享熱湯<br/>我們兩支湯匙一個碗<br/>左心房 暖暖的好飽滿<hr/>我想說 其實你很好<br/>你自己卻不知道<br/>真心的對我好<br/>不要求回報<br/>愛一個人<br/>希望他過更好<br/>打從心裡 暖暖的<br/>你比自己更重要<hr/>都可以 隨便的 你說的<br/>我都願意去<br/>回憶裡 滿足的旋律<br/>都可以 是真的 你說的 <br/>我都會相信<br/>因為我 完全信任你<br/>細膩的喜歡<br/>你手掌的厚實感<br/>什麼困難<br/>都覺得有希望<br/>我哼著歌<br/>你自然的就接下一段<br/>我知道 暖暖 就在胸膛<hr/>我想說 其實你很好<br/>你自己卻不知道<br/>真心的對我好<br/>不要求回報<br/>愛一個人<br/>希望他過更好<br/>打從心裡 暖暖的<br/>你比自己更重要<hr/>我想說 其實你很好<br/>你自己卻不知道<br/>真心的對我好<br/>不要求回報<br/>愛一個人<br/>希望他過更好<br/>打從心裡 暖暖的<br/>你比自己更重要",
  "<h4 class='lyric-title'>《旋律》</h4><br/>你是眼裡的音樂<br/>最動心的歌<br/>你播著<br/>全世界突然亮了<br/>多麼實在的感覺<br/>望著你的臉<br/>這一刻<br/>我到了被人遺忘的永遠<br/>在陌生的街<br/>天讓我們遇見<br/>像迷路的人找到回家的路線<hr/>你的美麗我要珍惜<br/>昨天會忘記<br/>是誰遺失了你<br/>我願陪著你<br/>找回自己<br/>當你姓名化作旋律<br/>在我腦海裡<br/>我已確定<br/>那個人就是你<br/>窩在我心裡<br/>最動聽的Melody",
  "<h4 class='lyric-title'>《身邊》</h4><br/>坐在你的身邊是種滿足的體驗<br/>看你看的畫面<br/>過你過的時間<br/>天也晴了<br/>花也開了<br/>微風也沉醉<br/>雖然你不說話<br/>卻也早已萬語千言<br/>分分秒秒顯得清澈又珍貴<br/>只有你才能給我這種感覺<br/>不管心多疲倦<br/>夢想還有多遠<br/>有你陪伴一切都無所謂<br/>我要陪你擦拭每個昨天<br/>相片　日記　書籤<br/>有暖意慢慢浮現<br/>我要用默默的體貼<br/>讓你睜開雙眼<br/>看見昨夜夢想都實現<br/>我也願意幫你打掃房間<br/>把身體好好鍛鍊<br/>好讓你覺得安全<br/>讓你記得我的優點<br/>無論任何時間<br/>對我非常想念<br/>非常想念<br/>坐在你的身邊是種滿足的體驗<br/>看你看的畫面<br/>過你過的時間<br/>天也晴了<br/>花也開了<br/>微風也沉醉<br/>雖然你不說話<br/>卻也早已萬語千言<br/>分分秒秒顯得清澈又珍貴<br/>只有你才能給我這種感覺<br/>不管心多疲倦<br/>夢想還有多遠<br/>有你陪伴一切都無所謂<br/>我要陪你擦拭每個昨天<br/>相片　日記　書籤<br/>有暖意慢慢浮現<br/>我要用默默的體貼<br/>讓你睜開雙眼<br/>看見昨夜夢想都實現<br/>我也願意幫你打掃房間<br/>把牌技好好演練<br/>陪你母親打八圈<br/>為你寫下盈淚詩篇<br/>感覺就像觸電<br/>才會對我想念<br/>非常想念<br/>我要陪你擦拭每個昨天<br/>相片　日記　書籤<br/>有暖意慢慢浮現<br/><hr/>我要用默默的體貼<br/>讓你睜開雙眼<br/>看見昨夜夢想都實現<br/>我也願意幫你打掃房間<br/>幫你的爸爸戒菸<br/>幫你兄弟姐妹買早點<br/>讓你時刻覺得很炫<br/>生活過得悠閒<br/>對我非常想念<br/>非常想念",
  "<h4 class='lyric-title'>《小手拉大手》</h4>還記得那場音樂會的煙火<br/>還記得那個涼涼的深秋<br/>還記得人潮把你推向了我<br/>遊樂園擁擠的正是時候<br/>一個夜晚堅持不睡的等候<br/>一起泡溫泉奢侈的享受<br/>有一次日記裡愚蠢的困惑<br/>因為你的微笑幻化成風<br/>你大大的勇敢保護著我<br/>我小小的關懷喋喋不休<br/>感謝我們一起走了那麼久<br/>又再一次回到涼涼深秋<hr/>給你我的手<br/>像溫柔野獸<br/>把自由交給草原的遼闊<br/>我們小手拉大手<br/>一起郊遊<br/>今天別想太多<br/>你是我的夢<br/>像北方的風<br/>吹著南方暖洋洋的哀愁<br/>我們小手拉大手<br/>今天加油<br/>向昨天揮揮手<hr/>還記得那場音樂會的煙火<br/>還記得那個涼涼的深秋<br/>還記得人潮把你推向了我<br/>遊樂園擁擠的正是時候<br/>一個夜晚堅持不睡的等候<br/>一起泡溫泉奢侈的享受<br/>有一次日記裡愚蠢的困惑<br/>因為你的微笑幻化成風<br/>你大大的勇敢保護著我<br/>我小小的關懷喋喋不休<br/>感謝我們一起走了那麼久<br/>又再一次回到涼涼深秋<hr/>給你我的手<br/>像溫柔野獸<br/>我們一直就這樣向前走<br/>我們小手拉大手<br/>一起郊遊<br/>今天別想太多<br/>你是我的夢<br/>像北方的風<br/>吹著南方暖洋洋的哀愁<br/>我們小手拉大手<br/>今天加油<br/>向昨天揮揮手",
  "<h4 class='lyric-title'>《永不失聯的愛》</h4>親愛的你躲在哪裡發呆<br/>有什麼心事還無法釋懷<br/>我們總把人生想得太壞<br/>像旁人不允許我們的怪<br/>每一片與眾不同的雲彩<br/>都需要找到天空去存在<br/>我們都習慣了原地徘徊<br/>卻無法習慣被依賴<hr/>你給我 這一輩子都不想失聯的愛<br/>相信愛的征途就是星辰大海<br/>美好劇情 不會更改<br/>是命運最好的安排<br/>你是我 這一輩子都不想失聯的愛<br/>何苦殘忍逼我把手輕輕放開<br/>請快回來 想聽你說<br/>說你還在<hr/>走過陪你看流星的天台<br/>熬過失去你漫長的等待<br/>好擔心沒人懂你的無奈<br/>離開我誰還把你當小孩<br/>我猜你一定也會想念我<br/>也怕我失落在茫茫人海<br/>沒關係只要你肯回頭望<br/>會發現我一直都在<hr/>你給我 這一輩子都不想失聯的愛<br/>你的每條訊息都是心跳節拍<br/>每秒都想 擁你入懷<br/>全世界你最可愛<br/>你是我 這一輩子都不想失聯的愛<br/>就算你的呼吸遠在千山之外<br/>請你相信 我給的愛<br/>值得你愛",
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
  lyricsContainer.scrollTop = 0;
}

function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songIndex);
  playSong();
  lyricsContainer.scrollTop = 0;
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
