// JavaScript Document
(function(){
	var Menubar = function(){
		this.el = document.querySelector("#sidebar ul");
		this.state = 'allClosed';
		this.el.addEventListener('click',function(e){
			e.stopPropagation();
		});
		var self = this;
		this.currentOpendMenuContent = null;
		this.menuList = document.querySelectorAll("#sidebar ul > li");
		for(var i=0;i<this.menuList.length;i++){
			this.menuList[i].addEventListener('click',function(e){
				var menuContentEl = document.getElementById(e.currentTarget.id);
				//console.log(menuContentEl);
				if(menuContentEl.id == 'gotop'){
				}else if(self.state === 'allClosed'){
					console.log('打开'+menuContentEl.id);
					menuContentEl.lastChild.style.top = '300px';
					menuContentEl.lastChild.className = 'show';
					self.state = 'hasOpened';
				}else{
					console.log('关闭'+menuContentEl.id);
					menuContentEl.lastChild.style.top = '60px';
					menuContentEl.lastChild.className = 'hide';
					console.log('打开'+menuContentEl.id);
					self.state = 'allClosed';
				}
			})
		}
	}
	
	var Sidebar = function(eId,closeBarId){
		//console.log(this);
		this.state = 'closed';
		this.el = document.getElementById(eId||'sidebar');
		this.closeBarEl = document.getElementById(closeBarId||'closebar');
		var self = this;
		this.menubar = new Menubar();
		this.el.addEventListener('click',function(event){
			if(event.target !== this.el){
				//console.log(this);
				self.triggerSwitch();
			}
		});
	}
	Sidebar.prototype.close = function(){
		this.el.style.right = '20px';
		this.el.className = 'sidebar move-right';
		this.closeBarEl.className = 'clo';
		this.state = 'closed';
	};
	Sidebar.prototype.open = function(){
		this.el.style.right = '-60px';
		this.el.className = 'sidebar move-left';
		this.closeBarEl.className = 'op';
		this.state = 'opened';
	};
	Sidebar.prototype.triggerSwitch = function(){
		if(this.state === 'opened'){
			this.close();
		}else{
			this.open();
		}
	}
	var sidebar = new Sidebar();
})();
function returnTop(){
	window.scrollTo(0,0);
}