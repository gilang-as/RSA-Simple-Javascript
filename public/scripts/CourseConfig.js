// ------------------------------------------------------------------
// Course information file
//
// This file identifies course information that should only need to
// be changed once per term.
//
// This file should be used to contain all course data for the active term. 
// BE SURE TO CHECK THE VARIABLES EVERY TERM.


	var Terms = new Array("","Winter","Spring","Summer","Fall")
	

// ------------------------------------------------------------------
// Insert "Year, Term, and Course" information here.
//   rubric    : subject identifier, e.g., "CS"
//   courseid  : course identifier, e.g., "171"
//   term      : Should be 1, 2, 3, or 4, for "Winter","Spring","Summer","Fall"
//   year      : e.g., "2002"
//   sections  : list of section numbers, e.g., "60...72, 90-91"
//   website   : URL for course website, e.g., "http://www.mcs.drexel.edu/~mcs171/W02"
//   SundayOfWeek1, MondayOfWeek1 : hopefully self explanatory, these are the beginning
//     dates of the term (e.g., "June 16"), and are used to generate due dates 
//     throughout the term, so that for instance, a lab issued in Week 4 will be due 
//     4 weeks past the Sunday of Week 1.

	var rubric = "CS"
	var courseid = "164"
	var coursename = "Introduction to Computer Science"
	var term = 4
	var year = 2011
	var sections = "60..64"
	var website = "http://www.cs.drexel.edu/~introcs/Fa11"
	
	var SundayOfWeek1 = "September 18"
	var MondayOfWeek1 = "September 19"

// Note that changes here should automatically 
// affect every lecture slide

// ------------------------------------------------------------------
// The name(s) of the instructor(s), followed by their e-mail addresses
// remember to close the last entry with a comma
// Examples:
// (for multiple instructors)
// var instructors = new Array("Jeffrey L. Popyack", "JPopyack@CS.Drexel.edu", // primary instructor
//                  "Bruce Char", "bchar@mcs.drexel.edu", // additional instructor
//					"Paul Zoski", "pzoski@mcs.drexel.edu") // last instructor (ends with a closing brace)
// (for single instructors)
// var instructors = new Array("Paul Zoski", "pzoski@mcs.drexel.edu")

	var instructors = new Array("Jeffrey L. Popyack", "JPopyack@CS.Drexel.edu"
							 )
	
	var undergradTA = new Array(
//		new person("Robert Brown", "rmb75@drexel.edu"),
		new person("Yen-Duyen Duong", "ypd23@drexel.edu"),
		new person("Matthew Marron", "mem98@drexel.edu"),
		new person("Nathan Vecchiarelli", "nvv23@drexel.edu")
	  )

	var gradTA = new Array(
		new person("Gavin Harrison", "gmh33@drexel.edu"),
		new person("Thomas Wambold", "taw38@drexel.edu"),
		new person("Zaman", "az99@drexel.edu") /*
		new person("Reza", "mar343@drexel.edu") */
	  )
 
 	var instr = new Array(
		
		new faculty("Prof.", "Jeffrey L. Popyack", "JPopyack@CS.Drexel.edu", 
		"Univ. Crossings 100-D", "(215) 895-1846", 
		"http://www.cs.drexel.edu/~jpopyack", "T 2:00-3:30, W 3:00-4:00, Th 11:00-12:00*")//,

	  )
	
	var deptInfo = new dept("Dept. of Computer Science","100 University Crossings",
							"(215) 895-2669","(215) 895-0545","http://www.cs.drexel.edu")
	
	var lectureSection = new Array(
		new lectureSection("A","Tuesday","11:00-12:20","CAT 61","Prof. Jeffrey L. Popyack","11093")
	)

	var labSection = new Array(
		new labSection(60,"Thursday","11:00-12:50","Korman 117","Zaman, Tom","10464"),
		new labSection(62,"Friday","11:00-12:50","Korman 117","Zaman, Matt","11289"),
		new labSection(61,"Thursday","13:00-14:50","Korman 117","Zaman, Nate","15464"),
		new labSection(63,"Friday","13:00-14:50","Korman 117","Gavin, Matt","10419"),
		new labSection("","","","","",""),
		new labSection(64,"Friday","15:00-16:50","Korman 117","Nate, Yen","13797")
	)

							
// ------------------------------------------------------------------
// Authors of the Course Notes
// (in case you don't want to take the blame for
// their mistakes)
						
	var previousAuthors = new Array(
		"Paul Zoski","PZoski@Math.Drexel.edu",
		"Jeff Salvage","JSalvage@CS.Drexel.edu"
	  )

	var revisionYear = 2011 // the last year somebody corrected the slides
	
	var lectureAuthors = new Array(
		"Jeffrey L. Popyack","JPopyack@CS.Drexel.edu"
	  )

	var campusMap = "http://www.drexel.edu/admissions/visit/directions/map-university-city/"
	var campusTour = "http://www.drexel.edu/em/virtualtour/"
	var KormanMap = "http://www.drexel.edu/irt/facilities/equipment/~/media/Files/irt/swf/kormanMapV2.ashx"
	var DU_bookstore = "http://drexel.bkstore.com/default.asp?m=0201"
	var IRT_FAQ = "http://www.drexel.edu/irt/computers/buyersGuide/"
	var DU_Software = "http://www.drexel.edu/irt/services/comp_mark/software.html"
	var compiler = "Visual C++/Visual Studio .NET 2010 Standard Edition"
	var BB_version = "Blackboard Vista 8.0.6"
	var student_handbook = "http://www.drexel.edu/studentlife/community_standards/community_standards_student_handbook/"
	
	var academicDishonesty = "http://www.drexel.edu/studentlife/community_standards/community_standards_student_handbook/~/media/Files/studentlife/pdf/StudentHandbook2011.ashx"
	var ODS = "http://drexel.edu/disability"
//	var univAcademicCalendar = "http://www.drexel.edu/provost/calendars/quarter/index.html"

	var mostRecentCS171 = "https://www.cs.drexel.edu/~mcs171/Wi11/index.html"
	var yearTermCS171 = "Winter 2011"
	
	var mostRecentCS172 = "https://www.cs.drexel.edu/~mcs172/Sp11/index.html"
	var yearTermCS172 = "Spring 2011"
	var univAcademicCalendar = "http://www.drexel.edu/provost/calendars/quarter/quarter-"+parseInt(year%100)+parseInt((year+1)%100)+".html"


// ------------------------------------------------------------------
// Other variables constructed from information provided above
	
	var coursenum = rubric + " " + courseid               // e.g., "CS 171"
	var course    = coursenum + "-" + sections            // e.g., "CS 171-60...72, 90-91"
	var courseprefix = rubric.toLowerCase() + courseid    // e.g., "cs171"


//	coursenum = "CS 164/SE 101"
//	course = coursenum

//------------------------------------------------------------------
// Set currentAsst=0 at beginning of course.  Update this value whenever
// a new assignment is to be publicized.
	
	var currentAsst = 8