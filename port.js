//アルバムデータ作成
let album = [
    {src: 'img/1.png', msg: '・人生初制作サイト　制作期間：約1か月'},
    {src: 'img/2.png', msg: '・人生初ロゴ制作　Illustrator使用'},
    {src: 'img/3.png', msg: '・オンラインサロン「箕輪編集室」のバナー制作　Illustrator使用'}
];

//最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

//最初の文章を表示しておく
let mainMsg = document.createElement('p');
mainMsg.innerHTML = mainImage.alt;

let mainFlame = document.querySelector('#portfolio .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

//サムネイル写真画像の表示
let thumbFlame = document.querySelector('#portfolio .thumb');
for (let i = 0; i < album.length; i ++){
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}

//クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event){
	if (event.target.src) {
		mainImage.src = event.target.src;
		mainMsg.innerText = event.target.alt;
	}
});

//500msでページトップまで戻る
$(function (){
	let topBtn = $('#scrolltop');
	
	topBtn.click(function (event) {
		event.preventDefault();
		$('body, html').animate({
			scrollTop: 0
		}, 500);
	});
});//アルバムデータ作成
let album = [
    {src: 'img/1.png', msg: '・人生初制作サイト　制作期間：約1か月'},
    {src: 'img/2.png', msg: '・人生初ロゴ制作　Illustrator使用'},
    {src: 'img/3.png', msg: '・オンラインサロン「箕輪編集室」のバナー制作　Illustrator使用'}
];

//最初のデータを表示しておく
let mainImage = document.createElement('img');
mainImage.setAttribute('src', album[0].src);
mainImage.setAttribute('alt', album[0].msg);

//最初の文章を表示しておく
let mainMsg = document.createElement('p');
mainMsg.innerHTML = mainImage.alt;

let mainFlame = document.querySelector('#portfolio .main');
mainFlame.insertBefore(mainImage, null);
mainFlame.insertBefore(mainMsg, null);

//サムネイル写真画像の表示
let thumbFlame = document.querySelector('#portfolio .thumb');
for (let i = 0; i < album.length; i ++){
    let thumbImage = document.createElement('img');
    thumbImage.setAttribute('src', album[i].src);
    thumbImage.setAttribute('alt', album[i].msg);
    thumbFlame.insertBefore(thumbImage, null);
}

//クリックした画像をメインにする
thumbFlame.addEventListener('click', function(event){
	if (event.target.src) {
		mainImage.src = event.target.src;
		mainMsg.innerText = event.target.alt;
	}
});

//500msでページトップまで戻る
$(function (){
	let topBtn = $('#scrolltop');
	
	topBtn.click(function (event) {
		event.preventDefault();
		$('body, html').animate({
			scrollTop: 0
		}, 500);
	});
});
