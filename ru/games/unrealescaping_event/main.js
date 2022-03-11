var screen = {w:0,h:0};
screen.w = 640;
screen.h = 400;
var canvas;
var context;
var scalerate = 1;
var imgBG = new Image();	imgBG.src = "bg.png";
var imgHito = new Image();	imgHito.src = "event.gif";
var imgCel = new Image();	imgCel.src = "cel.png";
var imgShadow = new Image();	imgShadow.src = "shadow.png";

var FPS = 40;			// 繝輔Ξ繝ｼ繝�繝ｬ繝ｼ繝�
var mouse = {x:0,y:0};	// 繝槭え繧ｹ菴咲ｽｮ
var touchdev = false;	// 繧ｿ繝�メ繝�ヰ繧､繧ｹ

// 繧､繝吶Φ繝磯未謨ｰ
var timer_func = new Function();	timer_func = null;
var next_func = new Function();		next_func = null;
var click_func = new Function();	click_func = null;
var release_func = new Function();	release_func = null;

window.onload = function()
{
	if( navigator.userAgent.indexOf('iPhone') > 0
		|| navigator.userAgent.indexOf('iPod') > 0
		|| navigator.userAgent.indexOf('iPad') > 0
		|| navigator.userAgent.indexOf('Android') > 0
		|| navigator.userAgent.indexOf('Windows Phone') > 0 ) {
		touchdev = true;
	}
	scalerate = Math.min(window.innerWidth/screen.w, window.innerHeight/screen.h);
	// 繧ｭ繝｣繝ｳ繝舌せ
	canvas = document.getElementById('canvas');		// canvas隕∫ｴ�繧貞叙蠕�
	canvas.width = screen.w;
	canvas.height = screen.h;
    canvas.style.width = screen.w*scalerate+'px';
    canvas.style.height = screen.h*scalerate+'px';
	
	context = canvas.getContext('2d');
	
	if( touchdev ){
		canvas.ontouchstart = touchStartListner;
		canvas.ontouchend = touchEndListner;
	}else{
		// 繝槭え繧ｹ
		canvas.onmousedown = mouseDownListner;
		canvas.onmouseup = mouseUpListner;
	}
	
	init_game();
	frame_loop();
	start_game();
}

function frame_loop() {
	if( timer_func != null ) timer_func();
//	requestAnimationFrame( frame_loop );
	setTimeout( frame_loop, 1000/FPS ); // 蜀榊ｸｰ
}
function mouseDownListner(e) {
	if( click_func != null ){ adjustXY(e); click_func(); }
}
function mouseUpListner(e) {
	if( release_func != null ){ adjustXY(e); release_func(); }
}
function touchStartListner(e) {
	if( click_func != null ){
		var rect = e.target.getBoundingClientRect();
		mouse.x=e.touches[0].pageX-rect.left;
		mouse.y=e.touches[0].pageY-rect.top;
		if( scalerate>0 ){
			mouse.x /= scalerate;
			mouse.y /= scalerate;
		}
		click_func();
	}
	e.preventDefault();
}
function touchEndListner(e) {
}

// 繝槭え繧ｹ蠎ｧ讓咏畑
function adjustXY(e) {
	var rect = e.target.getBoundingClientRect();
	if( scalerate>0 ){
		mouse.x = (e.clientX-rect.left)/scalerate;
		mouse.y = (e.clientY-rect.top)/scalerate;
	}
}




///////////////////////////////////////////////////
// 繧ｲ繝ｼ繝�
///////////////////////////////////////////////////

var xmax = 4;
var ymax = 4;
var cel = new Array();
var cel_size = 80;
var hito = new Array();
var ban = 0;
var cnt = 0;
var cntmax = 7;

///////////////////////////////////////////////////

function init_game()
{
	var i,j;
	for( i=0; i<ymax; i++ ){
		cel[i] = new Array();
		for( j=0; j<xmax; j++ ){
			cel[i][j] = new Object();
			cel[i][j].x = 320 + j*cel_size - i*cel_size;
			cel[i][j].y = 120 + j*cel_size/2 + i*cel_size/2;
			cel[i][j].cursor = false;
		}
	}
	for( i=0; i<2; i++ ){
		hito[i] = new Object();
		hito[i].x = 0;
		hito[i].y = 0;
		hito[i].dir = 0;
	}
}

function draw_game()
{
	var i,j;
	
	context.drawImage(imgBG, 0, 0, screen.w, screen.h, 0, 0, screen.w, screen.h );
	
	for( i=0; i<ymax; i++ ){
		for( j=0; j<xmax; j++ ){
			if( !cel[i][j].cursor ) continue;
			context.drawImage(imgCel, 0, 0, 80, 60, cel[i][j].x-40, cel[i][j].y-30, 80,60 );
		}
	}
	var w = 60;
	var h = 100;
	for( i=0; i<2; i++ ){
		context.drawImage(imgShadow, hito[i].dir*100, 0, 100, 100, hito[i].x-40, hito[i].y-60, 100, 100 );
		context.drawImage(imgHito, i*w*4+hito[i].dir*w, 0, w, h, hito[i].x-30, hito[i].y-80-hito[i].h, w, h );
	}
	if( hito[0].y > hito[1].y ){
		context.drawImage(imgHito, hito[0].dir*w, 0, w, h, hito[0].x-30, hito[0].y-80-hito[0].h, w, h );
	}
}

// 繧ｲ繝ｼ繝�髢句ｧ�
function start_game()
{
	start_oneplay();
}

// 荳蜍晁ｲ�縺ｮ髢句ｧ�
function start_oneplay()
{
	// 莠ｺ縺ｮ菴咲ｽｮ
	var cx,cy;
	cx = 0;
	cy = 0;
	hito[0].dir = 1;
	hito[0].cx = cx;
	hito[0].cy = cy;
	hito[0].x = cel[cy][cx].x;
	hito[0].y = cel[cy][cx].y;
	hito[0].h = 0;
	cx = 1+Math.floor(Math.random()*3);
	cy = 4-cx;
	hito[1].dir = 2;
	hito[1].cx = cx;
	hito[1].cy = cy;
	hito[1].x = cel[cy][cx].x;
	hito[1].y = cel[cy][cx].y;
	hito[1].h = 0;
	
	start_user();
}

/////////////////////////////
// 繝ｦ繝ｼ繧ｶ繝ｼ
/////////////////////////////

function start_user()
{
	ban = 0;
	
	// 繧ｫ繝ｼ繧ｽ繝ｫ
	show_cursor(true);
	draw_game();
	
	timer_func = null;
	click_func = user_click;
}

// 繧ｫ繝ｼ繧ｽ繝ｫ(遘ｻ蜍募�譚･繧九そ繝ｫ)縺ｮ陦ｨ遉ｺ
function show_cursor( f )
{
	var i,j;
	var n = ban;
	for( i=0; i<ymax; i++ ){
		for( j=0; j<xmax; j++ ){
			cel[i][j].cursor = false;
		}
	}
	if( !f ) return;
	for( i=0; i<ymax; i++ ){
		for( j=0; j<xmax; j++ ){
			if( i==ymax-1 && j==xmax-1 ) continue;
			if( i==hito[0].cy && j==hito[0].cx ) continue;
			if( i==hito[n].cy && Math.abs(j-hito[n].cx)==1 ) cel[i][j].cursor = true;
			if( j==hito[n].cx && Math.abs(i-hito[n].cy)==1 ) cel[i][j].cursor = true;
		}
	}
	if( hito[n].cx==2 && hito[n].cy==3 ) cel[2][3].cursor = true;
	if( hito[n].cx==3 && hito[n].cy==2 ) cel[3][2].cursor = true;
}

function user_click()
{
	var dx = Math.floor(((mouse.y+mouse.x/2)-240)/80);
	var dy = Math.floor(((mouse.y-mouse.x/2)+80)/80);
	
	if( cel[dy][dx].cursor ){
		start_jump(dx,dy);
	}
}

function start_jump( dx, dy )
{
	var n = ban;
	hito[n].dx = dx;
	hito[n].dy = dy;
	hito[n].h = 0;
	
	if( dy<hito[n].cy ){
		hito[n].dir = 3;
	}else if( dy>hito[n].cy ){
		hito[n].dir = 1;
	}else{
		if( dx<hito[n].cx ){
			hito[n].dir=2;
		}else{
			hito[n].dir = 0;
		}
	}
	
	show_cursor(false);
	draw_game();
	
	cnt = 0;
	timer_func = jump;
	click_func = null;
}

function jump()
{
	cnt++;
	
	var n = ban;
	var cx = hito[n].cx;
	var cy = hito[n].cy;
	var dx = hito[n].dx;
	var dy = hito[n].dy;
	hito[n].x = cel[cy][cx].x + (cel[dy][dx].x-cel[cy][cx].x)*cnt/cntmax;
	hito[n].y = cel[cy][cx].y + (cel[dy][dx].y-cel[cy][cx].y)*cnt/cntmax;
	hito[n].h = 50*Math.sin(Math.PI*cnt/cntmax);
	
	if( cnt<cntmax ){
		draw_game();
		return;
	}
	hito[n].cx = dx;
	hito[n].cy = dy;
	hito[n].h = 0;
	
	timer_func = null;
	click_func = null;
	
	if( hito[0].cx==hito[1].cx && hito[0].cy==hito[1].cy ){
		start_catch();
		return;
	}
	draw_game();
	
	if( ban==0 ){
		start_com();
	}else{
		start_user();
	}
}

/////////////////////////////
// COM
/////////////////////////////

function start_com()
{
	ban = 1;
	
	var i,j;
	var list = new Array();
	var c = 0;
	show_cursor(true);
	for( i=0; i<ymax; i++ ){
		for( j=0; j<xmax; j++ ){
			if( !cel[i][j].cursor ) continue;
			list[c] = new Object();
			list[c].x = j;
			list[c].y = i;
			list[c].v = 10+Math.random()*10;
			if( i==2 && j==3 ) list[c].v = 11;	// 隗偵�霑代￥縺ｫ縺ｯ縺ｪ繧九∋縺上＞縺九↑縺�
			if( i==3 && j==2 ) list[c].v = 11;
			if( j==hito[0].cx && i==hito[0].cy ) list[c].v = 0;	// 繝ｦ繝ｼ繧ｶ繝ｼ縺後＞繧�
			if( Math.abs(i-hito[0].cy)+Math.abs(j-hito[0].cx)==1 ) list[c].v = 1+Math.random();	// 繝ｦ繝ｼ繧ｶ繝ｼ縺ｮ髫｣
			c++;
		}
	}
	show_cursor(false);

	var m = -1;
	var n = 0;
	for( i=0; i<c; i++ ){
		if( list[i].v>m ){
			m = list[i].v;
			n = i;
		}
	}
	start_jump( list[n].x, list[n].y );
}

/////////////////////////////
// 謐輔∪縺医◆
/////////////////////////////

function start_catch()
{
	var dx = [2,-2,-2,2];
	var dy = [1,1,-1,-1];
	var d = hito[0].dir;
	
	hito[1].x += dx[d]*12;
	hito[1].y += dy[d]*12;
	draw_game();

	for( i=0; i<2; i++ ){
		hito[i].wc = 50;
		hito[i].c = 0;
		hito[i].dx = dx[d];
		hito[i].dy = dy[d];
	}
	// 隴ｦ螳倥�驕�ｉ縺帙ｋ
	hito[0].wc += 20;
	
	cnt = 0;
	timer_func = runaway;
}

function runaway()
{
	for( var i=0; i<2; i++ ){
		hito[i].wc--;
		if( hito[i].wc>0 ) continue;
		if( i==1 ) hito[1].dir=hito[0].dir;
		hito[i].c++;
		hito[i].x += hito[i].dx*4;
		hito[i].y += hito[i].dy*4;
		hito[i].h = 50*Math.abs(Math.sin(Math.PI*hito[i].c/cntmax));
	}
	draw_game();
	
	cnt++;
	if( cnt>100 ){
		cnt = 0;
		timer_func = fadeout;
	}
}

function fadeout()
{
	context.drawImage(imgBG, 0, 0, screen.w, screen.h, 0, 0, screen.w, screen.h );
	cnt+=2;
	context.fillStyle = 'rgba(147, 217, 0,'+cnt/100+')';
	context.fillRect(0,0,screen.w,screen.h);
	
	if( cnt>=100 ){
		timer_func = null;
		start_link();
	}
}

/////////////////////////////
// 繝ｪ繝ｳ繧ｯ逕ｻ髱｢
/////////////////////////////


function start_link()
{
	var i;
	
	context.fillStyle = 'rgb(147, 217, 0)';
	context.fillRect(0,0,screen.w,screen.h);

	var oy = screen.h/2;
	for( i=0; i<2; i++ ){
		var ax = Math.floor(screen.w/8);
		if( i==0 ) ax *= -1;
		hito[i].x = screen.w/2+ax;
		hito[i].y = oy;
		hito[i].dir = 1;
		hito[i].h = 0;
	}
	
	context.fillStyle = '#fff';
	context.textAlign = 'center';
	context.font = "16px sans-serif";
	var mes = ["Головна","Ще раз"];

	var w = 60;
	var h = 100;
	for( i=0; i<2; i++ ){
		context.drawImage(imgShadow, hito[i].dir*100, 0, 100, 100, hito[i].x-40, hito[i].y-60, 100, 100 );
		context.drawImage(imgHito, i*w*4+hito[i].dir*w, 0, w, h, hito[i].x-30, hito[i].y-80-hito[i].h, w, h );
		context.fillText(mes[i],hito[i].x, hito[i].y+40);
	}
	
	timer_func = null;
	click_func = click_link;
}

function click_link()
{
	var i;
	var n=-1;
	
	for( i=0; i<2; i++ ){
		if( mouse.x<hito[i].x-30 || mouse.x>hito[i].x+55 ) continue;
		if( mouse.y<hito[i].y-80 || mouse.y>hito[i].y+40 ) continue;
		n = i;
	}
	if( n<0 ) return;
	
	click_func = null;
	
	if( n==0 ){
		location.href="https://phonezgames.github.io";
	}else{
		start_oneplay();
	}
}



