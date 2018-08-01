
	console.log('downloaded');

	var names=prompt("Input names").split(", ");

	var k=document.querySelector("#katya");
	var v=document.querySelector("#vasya");
	var m=document.querySelector("#manya");
	var t=document.querySelector("#tanya");

	var obj={k,v,m,t};

	function showCard(names){
		for (i=0;i<names.length;i++){
			if(names[i]==="Таня"){
				t.style.display='block';
			}
			if(names[i]==="Катя"){
				k.style.display='block';
			}
			if(names[i]==="Вася"){
				v.style.display='block';
			}
			if(names[i]==="Маня"){
				m.style.display='block';
			}
		}

	}

	showCard(names);

	var activeElement;

	var offSetX=0;
	var offSetY=0;

	var mDown=(e)=>{
		activeElement=e.target;
		offSetX=e.offsetX;
		offSetY=e.offsetY;
	};

	var mUp=(e)=>{
		activeElement=null;
	};

	var mMove=(e)=>{
		if (activeElement){
			activeElement.style.top=(e.clientY-offSetY)+'px';
			activeElement.style.left=(e.clientX-offSetX)+'px';
		}
	};

	document.onclick=function(e){
		
		

		e.target.addEventListener('mousedown',mDown);
		e.target.addEventListener('mouseup',mUp);
		document.addEventListener('mousemove', mMove);	
	}