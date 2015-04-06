var winLand = Ti.UI.createWindow({
	backgroundColor: '#000000'
});

var view = Ti.UI.createView({
		top: '0px',
		height: '10%'
});

var label1 = Ti.UI.createLabel({
	text : 'Build professional networks and develop leadership skills by becoming active in one or more of the following student clubs and organizations. Please click one for more information',
	color : '#ffd700',
	top: '0px',
	font: {fontSize: 12},
	textAlign : 'left'
});

var tableData = [ 'American Marketing Association', 'Beta Alpha Psi and the Student Accounting Association', 
'Distinguished Sophomore Business Club', 'Economics Club', 'Financial Management Association', 'Management Information Systems Association',
'PGA Golf Management Club', 'Operation Management Club', 'Human Resource Management Club' ];

var table = Ti.UI.createTableView({
	top: '100px',
  	data: tableData,
});

allRows = [];

for (var i=0; i<tableData.length; i){
	
	if (i%2 == 0){ // if case is looking to see if there is a remainder or not, in this case we don't want one
		theRow = Ti.UI.createTableViewRow({
			title: tableData[i],
			backgroundColor: '#000000',
			color: '#ffd700',
			clubInfo: table[i]
		});
	};
	
	if( i%2 == 1){ // if case is looking to see if there is a remainder or not, in this case we want a remainder
		theRow = Ti.UI.createTableViewRow({
			title: tableData[i],
			backgroundColor: '#ffd700',
			color: '#000000',
			clubInfo: table[i]
		});
	};
	
	allRows.push(theRow);	
};

table.setData(allRows);
view.add(label1);
winLand.add(view);
winLand.add(table);
winLand.open();


var win1 = titanium.UI.createWindow({
	
});

var label11 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#000000',
	width: 250,
	top:10,
	left:10,
	height: 60,
	fontsize:14,
	text: 'American Marketing Association (AMA): A national organization for students, academics and professionals. Join as early as your freshman year to learn about marketing career opportunities. Faculty Advisor: Sanjay Sisodiya'
});

win1.add(label11);



var win2 = titanium.UI.createWindow({
	
});

var label2 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#000000',
	width: 250,
	top:10,
	left:10,
	height: 60,
	fontsize:14,
	text: 'Beta Alpha Psi (BAP) and the Student Accounting Association (SAA): A national scholastic and professional accounting fraternity. Any University of Idaho student can join the Student Accounting Association. Those who join BAP must be majoring in accounting, information systems, and finance, be in or have completed their first upper-division course in their major, have a 3.0 GPA or higher, and have minimum attendance requirements. SAA and BAP share the same meetings, which often include having professional speakers from nearby businesses. Their meetings may cover topics such as interview techniques, or the groups may engage in socials, fundraisers, and community service. Faculty Advisor: Jane Weiss'
});

win2.add(label2);



var win3 = titanium.UI.createWindow({
	
});

var label3 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#000000',
	width: 250,
	top:10,
	left:10,
	height: 60,
	fontsize:14,
	text: 'Distinguished Sophomore Business Club: A group that recognizes 3.7-4.0 GPA sophomores and junior transfers who are not ready to begin the Integrated Business Curriculum (IBC). Membership provides information about exciting opportunities that enhance ones career opportunities. Faculty Advisor: Daniel Borgia'
});

win3.add(label3);


var win4 = titanium.UI.createWindow({
	
});

var label4 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#000000',
	width: 250,
	top:10,
	left:10,
	height: 60,
	fontsize:14,
	text: 'Economics Club: A great way to learn abut the major before you take more than the introductory economics classes required by all university majors, is to participate in Econ Club meetings throughout the year. The club also helps attract and present a variety of guest speakers practicing economics in a variety of careers.  Faculty Advisor: Steve Peterson.  '
});

win4.add(label4);


var win5 = titanium.UI.createWindow({
	
});

var label5 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#000000',
	width: 250,
	top:10,
	left:10,
	height: 60,
	fontsize:14,
	text: 'Financial Management Association (FMA): A great way to learn about the major before you take any finance classes; participate in meetings throughout the semester. Guest speakers to talk about finance in the workplace. Faculty Advisor, Tom Liesz.  '
});

win5.add(label5);


var win6 = titanium.UI.createWindow({
	
});

var label6 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#000000',
	width: 250,
	top:10,
	left:10,
	height: 60,
	fontsize:14,
	text: 'Management Information Systems Association (MISA): Find out about your major before you even take any Information Systems (IS) classes. Speakers visit regularly from businesses interested in hiring after graduation. Students take field trips to visit businesses in Spokane and Seattle. Become involved with Vandal cybercasting, a MISA activity. Faculty Advisor: Lori Baker-Eveleth.'
});

win6.add(label6);


var win7 = titanium.UI.createWindow({
	
});

var label7 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#000000',
	width: 250,
	top:10,
	left:10,
	height: 60,
	fontsize:14,
	text: 'PGA Golf Management Club: A student organization for students in the PGA Golf Management Program. Faculty Advisor: Cole Mize.'
});

win7.add(label7);

var win8 = titanium.UI.createWindow({
	
});

var label8 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#000000',
	width: 250,
	top:10,
	left:10,
	height: 60,
	fontsize:14,
	text: 'Operation Management Club: The Operation Management club is a good place to find out more about the major. The club is made up of students in the majors and anyone else interested in operations management. The club takes tours of area manufacturing operations, invites in guest speakers (particularly from companies that recruit POM majors), attends meetings of the American Production and Inventory Control Society (APICS - a professional society made up mostly of managers working in operations), and meets occasionally for social activities. All students are welcome to attend Operation Management club meetings. Faculty Advisor: John Lawrence.'
});

win8.add(label8);


var win9 = titanium.UI.createWindow({
	
});

var label9 = Ti.UI.createLabel ({
	borderstyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: '#000000',
	width: 250,
	top:10,
	left:10,
	height: 60,
	fontsize:14,
	text: 'Human Resource Management Club: A student chapter of the national Society for Human Resource Management (SHRM). There are approximately 350 student chapters found on various campuses nationwide. SHRM is a national processional organization of human resource practitioners, educators, and various professionals involved with human resources. Faculty Advisor: Jan Rauk.  '
});

win9.add(label9);

/*
	variable names stand as win11 is the window that will open for win 1 when event reckognized and same for views, labels, etc...
*/

var win11 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
});

var view11 = Ti.UI.createView({
	
});

var label111 = Ti.UI.createLabel({
	text: 'Sanjay Sisodiya',
	text: 'Phone:	(208) 885-0267',
    text: 'Email:	sisodiya@uidaho.edu'
});

var button11 = Ti.UI.createButton({
	title: 'Back',
	bottom: '25%'	
});

view11.add(button11);
view11.add(label111);
win11.add(view11);

var win21 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
});

var view21 = Ti.UI.createView({
	
});

var label21 = Ti.UI.createLabel({
	text: 'Jane Weiss',
	text: 'Phone:	(208) 885-5750',
    text: 'Email:	jmweiss@uidaho.edu'
});

var button21 = Ti.UI.createButton({
	title: 'Back',
	bottom: '25%'
});

view21.add(button21);
view21.add(label21);
win21.add(view21);

var win31 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
});

var view31 = Ti.UI.createView({
	
});

var label31 = Ti.UI.createLabel({
	text: 'Daniel Borgia',
	text: 'Phone:	(208) 885-6800',
    text: 'Email:	dborgia@uidaho.edu'
});

var button31 = Ti.UI.createButton({
	title: 'Back',
	bottom: '25%'
});

view31.add(button31);
view31.add(label31);
win31.add(view31);

var win41 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
});

var view41 = Ti.UI.createView({
	
});

var label41 = Ti.UI.createLabel({
	text: 'Steven Peterson',
	text: 'Phone:	(208) 885-5730',
    text: 'Email:	stevenp@uidaho.edu'
});

var button41 = Ti.UI.createButton({
	title: 'Back',
	bottom: '25%'
});

view41.add(button41);
view41.add(label41);
win41.add(view41);

var win51 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
});

var view51 = Ti.UI.createView({
	
});

var label51 = Ti.UI.createLabel({
	text: 'Tom Leisz',
	text: 'Phone:	(208) 885-5447',
    text: 'Email:	tliesz@uidaho.edu'
});

var button51 = Ti.UI.createButton({
	title: 'Back',
	bottom: '25%'
});

view51.add(button51);
view51.add(label51);
win51.add(view51);

var win61 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
});

var view61 = Ti.UI.createView({
	
});

var label61 = Ti.UI.createLabel({
	text: 'Lori Baker-Eveleth',
	text: 'Phone:	(208) 885-5940',
    text: 'Email:	leveleth@uidaho.edu'
});

var button61 = Ti.UI.createButton({
	title: 'Back',
	bottom: '25%'
});

view61.add(button61);
view61.add(label61);
win61.add(view61);

var win71 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
});

var view71 = Ti.UI.createView({
	
});

var label71 = Ti.UI.createLabel({
	text: 'Cole Mize',
	text: 'Phone:	(208) 885-9772',
    text: 'Email:	colem@uidaho.edu'
});


var button71 = Ti.UI.createButton({
	title: 'Back',
	bottom: '25%'
});

view71.add(button71);
view71.add(label71);
win71.add(view71);

var win81 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
});

var view81 = Ti.UI.createView({
	
});

var label81 = Ti.UI.createLabel({
	text: 'John Lawrence',
	text: 'Phone:	(208) 885-5821',
    text: 'Email:	jjl@uidaho.edu'
});

var button81 = Ti.UI.createButton({
	title: 'Back',
	bottom: '25%'
});

view81.add(button81);
view81.add(label81);
win81.add(view81);

var win91 = Ti.UI.createWindow({
	backgroundColor: '#000000',
	title: 'Contact Information'
});

var view91 = Ti.UI.createView({
	
});

var label91 = Ti.UI.createLabel({
	text: 'Jan Rauk',
	text: 'Phone:	(208) 885-0147',
    text: 'Email:	jrauk@uidaho.edu'
});

var button91 = Ti.UI.createButton({
	title: 'Back',
	bottom: '25%'
});

view91.add(button91);
view91.add(label91);
win91.add(view91);

function openWindow(club){
	var indicator = club.charAt(0);
	
	switch (indicator){
		case 'A': win1.open(); break;
		case 'B': win2.open(); break;
		case 'D': win3.open(); break;
		case 'E': win4.open(); break;
		case 'F': win5.open(); break;
		case 'M': win6.open(); break;
		case 'P': win7.open(); break;
		case 'O': win8.open(); break;
		case 'H': win9.open(); break;
	}
	return null;
};

table.addEventListener('click', function(e){
	openWindow(e.source.clubInfo);
}
);
