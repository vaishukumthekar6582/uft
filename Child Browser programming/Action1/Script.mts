
'Browser("Browser").Navigate "https://www.google.com/search?q=amazon&oq=amazon&aqs=chrome.0.35i39i67j46i10i131i199i433i465i512j0i10i433i512j0i10i131i433i512j69i60l4.4069j0j7&sourceid=chrome&ie=UTF-8"
'Browser("Browser").Page("amazon - Google Search").Link("Shop Online on Amazon").Click @@ script infofile_;_ZIP::ssf1.xml_;_
'Browser("Browser").Page("Online Shopping site in").Image("Getfitdays").Click @@ script infofile_;_ZIP::ssf2.xml_;_

Dim obj
Set obj=description.Create()
obj("micclass").value="Link"

set chl=Browser("Browser").Page("Online Shopping site in").ChildObjects(obj)
msgbox chl.count

For i = 1 To chl.count-1 Step 1
	
	print chl(i).GetRoProperty("innerhtml")
	
Next


