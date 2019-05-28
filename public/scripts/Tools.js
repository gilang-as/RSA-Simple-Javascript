// ------------------------------------------------------------------
// Tools for generating a page of Course Notes
// REQUIREMENTS:
//   to use these functions, please set values 
//   in the file CourseConfig.js.  You only need 
//   to do that once per term.
//
// REQUIREMENTS:
//   each lecture must have its own config file
//   used to generate the table of contents
//
// v1.0 P. Zoski, 2002
// v1.1 Modified JL Popyack, Sept. 2008 -- modified to use currentAuthor
//      and other minor changes
// v1.2 Modified  JL Popyack, Oct 21, 2008 -- restores page identification on mail to author
// v1.3 Modified  JL Popyack, Dec 12, 2008 -- added social bookmarking
// v1.4 Modified  JL Popyack, May  3, 2011 -- added stripHTML, to remove HTML from title.
// ------------------------------------------------------------------

    var CurrentSlide // some monstrous global that keeps
			    // track of what lecture we're on
			    // the value must be passed into the page using ?
			    // e.g. http://index.html?CurrentSlide=0 for the title slide
			    //
			    // DO NOT mess with this variable

// --------------------------
// stripHTML(html)
// JPopyack@CS.Drexel.edu
// Removes HTML tags from given HTML code
// Adapted from http://www.ehow.com/how_6466439_convert-html-plain-text-javascript.html
//
    function stripHTML(html)
    {
    	var tempDIV = document.createElement("div")
    	tempDIV.innerHTML = html
    	
		// one of these attributes (textContent or innerText) 
		// should be defined for a given browser
		var result = tempDIV.textContent || tempDIV.innerText 
		
    	return result? result: ""
    }
	

// --------------------------
// SetUp()
// pzoski@mcs.drexel.edu
// Reads arguments passed into page from URL
// and puts value into CurrentSlide
// e.g.  for http://index.html?CurrentSlide=0 
// the value of 0 into CurrentSlide
//
// Also performs other page initializations
//
// TO DO: Create check script that sets CurrentSlide to
//	some value if user jumps into lecture directly
//  or supplies some other bogus parameters 

    function SetUp() 
    {
	    var queryData = location.search // arguments passed to web page in URL
				    // e.g. "?CurrentSlide=0"
	    queryData = queryData.substring(1, queryData.length) // remove "?" from queryData
	    var equalPos = queryData.indexOf("=")
	    CurrentSlide = queryData.substring(equalPos + 1, queryData.length)
    		
	    document.title = stripHTML(LectureName) // assign lecture name to the navigator's title bar
    }	
		

// --------------------------
// DisplayContents()
// pzoski@mcs.drexel.edu
// This script is used to create table of contents for the lecture
// Requires: contents.js (contents file for each lecture)
// Modified JL Popyack
		
    function DisplayContents() 
    {
	    document.write("<h3>Contents:</h3>")
    	
	    var numLectures = (Contents.length / 2) 
	    var i
 	    for( i=0; i<numLectures; i++ ) 
	    { 
		    document.write( "<p><b>*</b> ")
		    document.write("<a HREF=\"" + Contents[2 * i + 1] + "?CurrentSlide=" + i + "\">"  // set anchor
		       + "<font color=\"" + fieldTextColor + "\">" // set font
		       + Contents[2 * i]  // display name
		       + "</font></a></li>") // close HTML tags
    		 
	    }
    	
        var thispage = location.href
//		thispage = '"' + thispage + '"'
        var thistitle = document.title // may also be available through Contents[] array
        thistitle = thistitle.replace(/\s/g,"%20") // replace whitespace with ASCII code
        thistitle = thistitle.replace(/'/g,"%27")  // replace ' with ASCII code

        // Facebook setup for link sharing
        var fbPic = new Image()
        fbPic.src = "../../images/facebook-icon.gif"
        var fbHomePage = "http://www.facebook.com/"
        var fbText = "sharer.php?u="
        var fbTitleText = "&t="

        // Digg setup for link sharing
        var fbPic = new Image()
        fbPic.src = "../../images/facebook-icon.gif"
        var fbHomePage = "http://www.facebook.com/"
        var fbText = "sharer.php?u="
        var fbTitleText = "&t="

        // del.icio.us setup for link sharing
        var delPic = new Image()
        delPic.src  = "../../images/delicious_icon.gif"
        var delHomePage = "http://delicious.com/"
        var delText = "save?url="
        var delTitleText = "&title="

        document.write('<p><hr /><font FACE="Arial" SIZE="-2">')
        bookmarkButton(thispage,thistitle,"Facebook",fbHomePage,fbText,fbTitleText,fbPic)
        document.write('&nbsp;')
        bookmarkButton(thispage,thistitle,"del.icio.us",delHomePage,delText,delTitleText,delPic)
        document.write('</font>')
    }
 
// -----------------------------
// LectureBack()
// pzoski@mcs.drexel.edu
// Backs up one lecture slide

    function LectureBack() 
    { 
	    var backTo = (CurrentSlide==0) ? (Contents.length/2-1) : CurrentSlide-1 // index of previous slide
	    document.write("<div align=\"left\">" // format link
	        + "<a HREF=\"" + Contents[2*parseInt(backTo)+1] + "?CurrentSlide=" + parseInt(backTo) +"\">" // set anchor
		    + "<font color=\"" + nextPrevColor + "\" size=\"-1\">" // set font
		    + "Previous Slide" // display text 
		    + "</font></a></div>") // close HTML tags
    }

// -----------------------------
// LectureForward()
// pzoski@mcs.drexel.edu
// Advances one lecture slide

    function LectureForward() 
    {
	    var forwardTo = (CurrentSlide==(Contents.length/2-1)) ? 0 : parseInt(CurrentSlide)+1 // index of next slide
	    document.write("<font color=\"#000066\" size=\"-1\">")
	    document.write("<div align=\"right\">"  // format link
	        + "<a HREF=\"" + Contents[2*parseInt(forwardTo)+1] + "?CurrentSlide=" + parseInt(forwardTo) +"\">" // set anchor
		    + "<font color=\"" + nextPrevColor + "\" size=\"-1\">" // set font		
		    + "Next Slide" // display text
		    + "</font></a></div>") // close HTML tags
	    document.write("</font>")		
    }

// -----------------------------
// LectureTitle()
// pzoski@mcs.drexel.edu
// Prints the title of the lecture
// OOH! AAH!

    function LectureTitle() 
    {
	    document.write("<div align=\"center\">"  // set alignment
	   		    + "<font color=\"" + fieldTextColor + "\" size=\"+2\" ><B>" // set font
			    + coursenum + ": " + Terms[term] + " " + year + " - " + coursename + "<br>"
			    + LectureName + ": " + Contents[2*CurrentSlide] 
			    + "</b></font></div>") // close HTML tags
    }

// -----------------------------
// Credits()
// pzoski@mcs.drexel.edu
// Displays credits for this slide
// 

    function Credits() 
    {
    // Revisions:
    // JL Popyack, Sept 19, 2003
    //   Now includes page identification on mail to author
    // JL Popyack, Sept 16, 2008
    //   Shows current author and previous authors separately
    // JL Popyack, Oct 21, 2008
    //   Restores page identification on mail to author

    // display lecture authors
	    var numAuthors = lectureAuthors.length/2 // number of authors
	    var i
    	
	    var subject = coursenum + " Course Notes: " + LectureName 
	               + "/" + Contents[2*CurrentSlide]
	               + " (" + Contents[2*CurrentSlide+1] + ")" 
    		   
	    document.write("<div align=\"center\"><font size=\"-1\">"
		    + "Last Revision: ")
    		
	    for(i=0 ; i<numAuthors ; i++ )
	    {	
		    document.write( showit( new person(lectureAuthors[2*i],lectureAuthors[2*i+1]), subject ) )
    		
		    if ( i != (numAuthors-1) ) // put comma between authors
			    document.write(", ")
	    }
	    document.write(": <i>" + revisionYear + "</i>; ")
    	
	    numAuthors = previousAuthors.length/2 // number of previous authors
	    document.write("Previous Authors: ")
    		
	    for(i=0 ; i<numAuthors ; i++ )
	    {	
		    document.write("<i>" + previousAuthors[2*i] + "</i>")
    		
		    if ( i != (numAuthors-1) ) // put comma between authors
			    document.write(", ")
	    }
    }


// -----------------------------
// PrinterFriendly()
// JPopyack@CS.Drexel.edu
// shows/hides navigation bar at left of slide

    function PrinterFriendly() 
    {
	    document.write("<font color=\"#000066\" size=\"-1\">")
	    document.write("<div align=\"center\">"  // format link
	        + "<a HREF=\"javascript:ReverseContentDisplay('Nav')\">" 
		    + "Printer Friendly" + 
		    "</a>"
		    + "</div>") 
	    document.write("</font>")		
    }

    // Adapted from http://www.willmaster.com/blog/css/show-hide-floating-div.php
    // By Will Bontrager 

	    function HideContent(d) 
	    {
		    if(d.length < 1) 
			    return; 

		    document.getElementById(d).style.display = "none";
	    }
    	
	    function ShowContent(d) 
	    {
		    if(d.length < 1) 
			    return; 

		    document.getElementById(d).style.display = "table-cell";
	    }
    	
	    function ReverseContentDisplay(d) 
	    {
		    if(d.length < 1) 
			    return; 

		    if(document.getElementById(d).style.display == "none") 
		    { 
			    document.getElementById(d).style.display = "table-cell" 
		    }
		    else 
		    { 
			    document.getElementById(d).style.display = "none"
		    }
	    }

// -----------------------------
// bookmarkButton()
// JPopyack@CS.Drexel.edu
// produces button that can register current page on a social networking site.

    function bookmarkButton(page,title,sitename,homepage,text,text2,pic)
    {
	    document.write(sitename+" <a href="+homepage+text+page+text2+title+" target=_book><img BORDER=0 src="+pic.src+" height=16 width=16 /></a> ")
    }
