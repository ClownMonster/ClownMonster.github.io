function main()
{
	var name = document.getElementById("Name").value;
	var p_id = document.getElementById("p-id").value;
	if(name == "" && p_id == "")
	{
		
		alert("Enter Your Credentials");
	}
	else if(name == "" && p_id != "")
	{	
		alert("Enter Your Character Name");
	
	}
	else if(p_id == "" && name != "" )
	{	
		
		alert("Enter Your PUBG ID");
	}
	else 
	{
		var x = document.getElementById("nav-one");
		x.style.display = "block"
	}
	
	
}

function navfun1()
{

	var uc = document.getElementById("sel1").value
	document.getElementById("p1").innerHTML = "UC Choosen :  " + uc+" UC";
}

function navfun2()
{

	var bp = document.getElementById("sel2").value;
	document.getElementById("p2").innerHTML = "BP Choosen :  " + bp+" BP";
}

