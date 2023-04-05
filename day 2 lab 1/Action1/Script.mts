systemutil.Run ("C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe")
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_2073240912_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "64105aa99eb0e1e3787d" @@ hightlight id_;_2073179568_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").WaitProperty "visible", true, 10000 @@ hightlight id_;_2073190368_;_script infofile_;_ZIP::ssf4.xml_;_

if WpfWindow("HPE MyFlight Sample Applicatio").exist(12) then
msgbox "working"
else
msgbox "not working"
End If
wait(10)
msgbox"uft"


 @@ hightlight id_;_2073243264_;_script infofile_;_ZIP::ssf3.xml_;_

