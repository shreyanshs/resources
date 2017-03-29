var qpadd=`<a href="https://drive.google.com/open?id=0BwSLQnNZUNnSV0gtSEJiRnFDRXc" target="_blank" > Computer Programming (CSO-101) </a>
		<br/><br/>
		<a href="https://drive.google.com/open?id=0BwSLQnNZUNnSaVlDcE4zZTBZWjQ" target="_blank" > Chemistry (CY-101) </a> 
		<br/><br/>
		<a href="https://drive.google.com/open?id=0BwSLQnNZUNnSZkxVRm9LVHNHTVU" target="_blank"> Chemistry Lab (CY-101 Lab) </a>
		<br/><br/>
		<a href="https://drive.google.com/open?id=0BwSLQnNZUNnScEZhSERvZnIxa00" target="_blank"> Mathematics-1 (MA-101) </a>
		<br/><br/>
		<a href="https://drive.google.com/open?id=0BwSLQnNZUNnSemNXelJBSEJ2eEU" target="_blank"> Mathematics-2 (MA-102) </a>
		<br/><br/>
		<a href="https://drive.google.com/open?id=0BwSLQnNZUNnSV1E5QmUya2w4SVE" target="_blank"> Physics-1 (PHY-101) </a>
		<br/><br/>
		<a href="https://drive.google.com/open?id=0BwSLQnNZUNnSWEtRdnBNWjE1eXM" target="_blank"> Physics-2 (PHY-102) </a>`;
		

window.onload=function(){
	var submitqp = document.getElementById('submitqp');
	submitqp.onclick=function(){
		var subName = document.getElementById('name').value;
		var subCode = document.getElementById('code').value;
		var subLink = document.getElementById('link').value;
		qpadd+=`<br/><br/><a href='${subLink}' target='_blank'>${subName} (${subCode})</a>`;
		var add=document.getElementById('content');
		add.innerHTML=qpadd;
		
		document.getElementById('name').value="";
		document.getElementById('code').value="";
		document.getElementById('link').value="";
	};


	var submiteb = document.getElementById('submiteb');
	submiteb.onclick=function(){
		var flag=0;
		var subName = document.getElementById('name2').value;
		var subCode = document.getElementById('code2').value;
		var subLink = document.getElementById('link2').value;
		var bookName = document.getElementById('book').value;
		var sublist = document.getElementsByClassName('sub');
		for(var i = 0; i < sublist.length; i++) {
			if(subCode.toLowerCase()===sublist[i].id.toLowerCase()){
				var x = document.getElementById(sublist[i].id).innerHTML;
				x+=`<ui><li><a href='${subLink}' target='_blank'>${bookName}</a></li></ui><br/>`;
				document.getElementById(sublist[i].id).innerHTML=x;
				flag=1;
				break;
		}}
			if(flag===0){
				var neweb = document.getElementById('neweb');
			    var x=neweb.innerHTML;
				x+=`<h3><b>${subName} (${subCode})</h3></b>
					<div id="${subCode}" class="sub">
					<ui>
					<li><a href="${subLink}" target="_blank" >${bookName}</a></li>
					</ui>
					<br/>
					</div>`
				neweb.innerHTML=x;
			}
		document.getElementById('name2').value="";
		document.getElementById('code2').value="";
		document.getElementById('link2').value="";
		document.getElementById('book').value="";
	}


	var submittt = document.getElementById('submittt');
	submittt.onclick=function(){
		var Tdetails = document.getElementById('name3').value;
		var Tlink = document.getElementById('link3').value;
		var tcontent = document.getElementById('tcontent');
		var x=tcontent.innerHTML;
		x+=`<a href="${Tlink}" target="_blank" >${Tdetails}</a><br/>`
		tcontent.innerHTML=x;
		
		document.getElementById('name3').value="";
		document.getElementById('link3').value="";
		
	}
}