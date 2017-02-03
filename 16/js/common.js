// JavaScript Document
window.onload = function(){
	var cot = document.getElementById('cot_left');
	var hs = cot.getElementsByTagName('h1');
	for(var i =0;i<hs.length;i++){
		hs[i].index = i;
		hs[i].onmouseover = function(){
			this.className = 'hov';
			this.style.backgroundColor = '#fff';
			
			var h0 = this.index*96;
			var y = this.getElementsByTagName('div')[0].offsetHeight;
			var h = this.getElementsByTagName('div')[0].style.top + y;
			if(h0 > h){
				this.getElementsByTagName('div')[0].style.top = h0/2 + 'px';
			}
		}
		hs[i].onmouseout = function(){
			this.className = '';
			this.style.backgroundColor = '#f8f8f8';
		}
	}
}
