
document.write("<table id=myTable>")
document.write("<caption> Mutiplication </caption>")

//need to insert tfoot element instead

//need to write the head, first row
//
document.write("<thead>")
document.write("<tr>")

document.write("<td class=BlackSquare>X</td>")

//now need to write the other 15 elements
for(i = 1; i <= 15; ++i) {

    document.write("<td class=BlackSquare>" + i + "</td>")
}

//close the row
document.write("</tr>")
//close the head
document.write("</thead>")

document.write("<tbody>")
for (i = 1; i <= 15; ++i) {

    document.write("<tr>")
    document.write("<td class=BlackSquare>" + i + "</td>")

    for (j = 1; j <=15; ++j) {

        document.write("<td>" + (i*j) + "</td>")

    }

     document.write("</tr>") //finish writing the row

}

document.write("<tfoot>")
document.write("</tr>")

document.write("<td colspan=16>")
document.write("JavaScript")
document.write("</td>")

document.write("</tr>")
document.write("</tfoot>")

document.write("</tbody>")

document.write("</table>")
//inserting row
