// Version 2.22 
// includes deobfus()
// JL Popyack, Sept 2008
// showit() - adds subject as argument to makeit()
// JL Popyack, Oct 2008
// labSection 
// JL Popyack, Sept 2009
// added CRN field to lectureSection, labSection 
// JL Popyack, Sept 2010


function person(name,youknow)
{
    this.name = name
    this.youknow = youknow
}
	
function faculty(title,name,youknow,office,phone,URL,officeHours)
{
	this.title = title
    this.base = person
	this.base(name,youknow)
	this.office = office
    this.phone = phone
    this.URL = URL
    this.officeHours = officeHours
}

faculty.prototype = new person

function dept(name,location,phone,fax,URL)
{
	this.name = name
    this.location = location
    this.phone = phone
    this.fax = fax
    this.URL = URL
}

function lectureSection(section,day,timeSlot,room,instructor,CRN)
{
    this.section = section
    this.day = day
    this.timeSlot = timeSlot
    this.room = room
    this.instructor = instructor
    this.CRN = CRN
}

function labSection(section,day,timeSlot,room,staff,CRN)
{
    this.section = section
    this.day = day
    this.timeSlot = timeSlot
    this.room = room
    this.staff = staff
    this.CRN = CRN
}
	

function deobfus(x)
{
	var str = ""
	while(x != "")
	{
		str += x.substr(x.length-1,1)
		x = x.substr(0,x.length-1)
	}
	return str
}

function quote(str)
// put quotes around str if str contains more than one blank
{
	// trim it first
	str = str.replace(/^\s+|\s+$/g, '') // from nicknettleton.com
	
	var tag = "\""
	if( str.indexOf(" ") == str.lastIndexOf(" ") ) // zero or one blanks in str
		tag = ""
	return tag + str + tag
}

function makeit(person,show)
{
	return "<a " + 
			deobfus("ERH") + deobfus("am'=F") + deobfus(" :otli") + 
			quote(person.name) + 
			" <" + person.youknow + ">'>" + 
			"<tt>" + person.youknow + "</tt>" + 
			"</a>"
}

function showit(person,subject)
{
	return "<a " + 
			deobfus("ERH") + deobfus("am'=F") + deobfus(" :otli") + 
			quote(person.name) + 
			" <" + person.youknow + ">" + 
			"?Subject=" + subject + "'>" +
			"<i>" + person.name + "</i>" + 
			"</a>"
}

function TA_Entry(ta) 
{
	document.writeln("<tr>")
	document.writeln("<td HEIGHT=12>\n<p>\n</td>")
	document.writeln("<td>\n  <font FACE=\"Arial\">" + 
					 ta.name + "</font>\n</td>")
	document.writeln("<td>\n  ")
	document.writeln( makeit(ta) )
	document.writeln("</td>\n</tr>")
	return ""
}

function instructorTable(instr,deptInfo,pic)
{	
// ----------------------------------------------------------------------------------
//    This creates a table of instructor contact information, with a separate column
//    for each instructor.
// ----------------------------------------------------------------------------------
	
	document.writeln("<table BORDER=0 CELLPADDING=5>")
	// ----------------------------------------------------------------------------------
	//    Header info
	// ----------------------------------------------------------------------------------
	var numCols = parseInt(instr.length) + 1 
	
	if( pic != "" )
	{
		document.writeln("<tr>\n<td HEIGHT=20 COLSPAN=" + numCols + " BGCOLOR=#FFFFFF>")
//		document.writeln("<p><font SIZE=+2 FACE=Arial>Instructors:</font>")
		document.writeln("<div ALIGN=center><br />\n<IMG SRC=" + pic + ">\n</div><br />")
		document.writeln("</td>\n</tr>")
	}
	
	// ----------------------------------------------------------------------------------
	//    Name
	// ----------------------------------------------------------------------------------
	
	document.writeln("<tr>\n<td VALIGN=top> <p> </td>")
	for(var i=0; i<instr.length; i++)
	{
		document.writeln("<td BGCOLOR=#FFFFFF> <p><font FACE=Arial><b>")
		with(instr[i])
		{
			document.writeln(title + " " + name + "<br /></b></font>")
		}
		document.writeln("</td>")
	}
	document.writeln("</tr>\n<tr>\n")
	
	// ----------------------------------------------------------------------------------
	//    Office Location
	// ----------------------------------------------------------------------------------
	
	document.writeln("<td BGCOLOR=#FFFFFF> <p><font FACE=Arial><b>Office</b></td>")
	for(var i=0; i<instr.length; i++)
	{
		document.write("<td VALIGN=top BGCOLOR=#FFFFCC> <p><font FACE=Arial>")
		with(instr[i])
		{
			document.writeln(office + "</font>")
		}
		document.writeln("</td>")
	}
	document.writeln("</tr>\n<tr>\n")
	
	// ----------------------------------------------------------------------------------
	//    Phone Number
	// ----------------------------------------------------------------------------------
	
	document.writeln("<td BGCOLOR=#FFFFFF> <p><font FACE=Arial><b>Phone</b></td>")
	for(var i=0; i<instr.length; i++)
	{
		document.writeln("<td VALIGN=top BGCOLOR=#FFFFCC> <p><font FACE=Arial>")
		with(instr[i])
		{
			document.writeln(phone + "</font>")
		}
		document.writeln("</td>")
	}
	document.writeln("</tr>\n<tr>\n")
	
	// ----------------------------------------------------------------------------------
	//    You Know
	// ----------------------------------------------------------------------------------
	
	document.writeln("<td BGCOLOR=#FFFFFF> <p><font FACE=Arial><b>" +
					 deobfus("mE") + deobfus(" :lia") + "</b></td>")
	
	for(var i=0; i<instr.length; i++)
	{
		document.writeln("<td VALIGN=top BGCOLOR=#FFFFCC> <p>")
//		with(instr[i])
//		{
//			document.writeln("<a HREF=mailto:"+youknow+"%20("+name.replace(/\s+/g,"%20")+")><font FACE=Arial>"+youknow+"</font></a>")
			document.writeln( makeit(instr[i]) )
//		}
		document.writeln("</td>")
	}
	document.writeln("</tr>\n<tr>\n")
	
	// ----------------------------------------------------------------------------------
	//    Home Page
	// ----------------------------------------------------------------------------------
	
	document.writeln("<td BGCOLOR=#FFFFFF> <p><font FACE=Arial><b>Home Page</b></td>")
	for(var i=0; i<instr.length; i++)
	{
		document.writeln("<td VALIGN=top BGCOLOR=#FFFFCC> <p><font FACE=Arial>")
		with(instr[i])
		{
			document.writeln(URL.link(URL) + "</font>")
		}
		document.writeln("</td>")
	}
	document.writeln("</tr>\n<tr>\n")
	
	// ----------------------------------------------------------------------------------
	//    Office Hours
	// ----------------------------------------------------------------------------------
	
	document.writeln("<td BGCOLOR=#FFFFFF> <p><font FACE=Arial><b>Office Hours</b></td>")
	for(var i=0; i<instr.length; i++)
	{
		document.write("<td VALIGN=top BGCOLOR=#FFFFCC> <p><font FACE=Arial>")
		with(instr[i])
		{
			document.writeln(officeHours + "<br />\n<I>and by appointment</I><br /></font>")
		}
		document.writeln("</td>")
	}
	document.writeln("</tr>")
	document.writeln("<tr>\n<td COLSPAN=" + numCols + " HEIGHT=40 VALIGN=bottom BGCOLOR=#FFFFFF><font FACE=Arial><b>"+deptInfo.name+"</b></font></td>")
	document.writeln("<tr><td VALIGN=top BGCOLOR=#FFFFFF><p><font FACE=Arial><b>Phone:<br />\nFax:<br />\nLocation:<br />\nWeb Site:</b></font></P></td>")
	document.writeln("<td VALIGN=top BGCOLOR=#FFFFCC><p>" +
	                "<font FACE=Arial>" + deptInfo.phone + "</font>" +
	                "<font FACE=Arial><br />" + deptInfo.fax + "</font>" +
					"<font FACE=Arial><br />" + deptInfo.location + "</font>" +
					"<font FACE=Arial><br />" + deptInfo.URL.link(deptInfo.URL) + "</font>")
	document.writeln("<br /></P></td></tr>")
	document.writeln("</table>")
}