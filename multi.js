
function timeTable() {
	let number=document.getElementById('digit').value;
	let numbers=document.getElementById('digits').value;
	document.write("<table border=2px width=500px;>")
	document.write("<tr>")
	  for(i=1; i<=number; i++){

	  	document.write("<th>"+i+"</th>")
	 }

	   

	  for (j=1; j<=numbers; j++ ){
	  	
	  	document.write("<tr>")
	   

	     for(k=1; k<=numbers; k++){

          document.write("<td> "+k+" x "+j+" = "+k*j+"    </td>")

	     }
          document.write("</tr>")


	}
      
	  document.write("</tr>")
	  	
	  document.write("</table>")
	
}
