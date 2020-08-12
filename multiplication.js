timeTable(12);

function timeTable(number){
  document.write("<table border=2px width=700px; style='background-color: red'>")
  document.write("<tr style:''>")
  for(i=1; i<=number; i++){
    document.write("<th> ["+i+"] </th>")
    
  
    
}
 document.write("</tr>")

for(j=1; j<=number; j++){
  let colorCode="";
  if(j%2 ===0){
  colorCode="yellow"
  }
  else{
    colorCode="red";
  }
 
  document.write("<tr style='background-color: "+colorCode+"'>");
 

  
  
  
  for (k=1; k<=number; k++){
    //  document.write(k);
    
    document.write("<td style= 'font-size:15px;'>  "+k+" x "+j+" = "+k*j+" </td>");
    
  }
  
  document.write("</tr>");
  
  
  }
  document.write("</table")


}