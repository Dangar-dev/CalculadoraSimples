   function Calcular(op,cor)
		   {
			var resu=0;
		    var n1=document.getElementById("but1").value;
		    var n2=document.getElementById("but2").value;
		    
			if (isNaN(n1) || (n1==""))
			{
				alert("1º valor inválido!");
				document.getElementById("but1").value = "";
				document.getElementById("but1").focus();
			}

			else if (isNaN(n2) || (n2==""))
			{
				alert("2º valor inválido!");
				document.getElementById("but2").value = "";
				document.getElementById("but2").focus();
			}

			else 
			{
				n1=parseFloat(n1);
				n2=parseFloat(n2);

				if (op=="+") 
			   		resu = n1+n2;
				else if (op=="-")
					resu = n1-n2;
				else if (op==":")
					resu = n1/n2;
				else
					resu=n1*n2;
			
				document.getElementById("txtresu").style.backgroundColor=cor;
				document.getElementById("txtresu").value = resu.toFixed(3);
		    }
		   }
		  
		    function Limpar()
		    {
		    document.getElementById("but1").focus();
            document.getElementById("but1").value = "";
            document.getElementById("but2").value = "";
            document.getElementById("txtresu").value = "";
		    }
	  