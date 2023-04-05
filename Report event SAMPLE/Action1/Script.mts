
 @@ hightlight id_;_-208989960_;_script infofile_;_ZIP::ssf5.xml_;_
Function Launch()
	
	systemutil.Run "C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
	
	If wpfwindow("HPE MyFlight Sample Applicatio").Exist(3) Then
		Reporter.ReportEvent micPass, "Application Launch", "Application launched successfully"
	else
		Reporter.ReportEvent micfail, "Application Launch", "Application not launched successfully"
	End If
End Function

Function Login()
	
	WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john"
	WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "hp" @@ hightlight id_;_2133551216_;_script infofile_;_ZIP::ssf3.xml_;_
	WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click

	if WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Exist(3) Then
	reporter.ReportEvent micPass, "Login","Login Successfull"
	else
	reporter.ReportEvent micFail, "Login","Login unSuccessfull"
	End If
	
End Function

Function Close()
	
	wpfwindow("HPE MyFlight Sample Applicatio").Close
	
	If wpfwindow("HPE MyFlight Sample Applicatio").exist(2) Then	
		reporter.ReportEvent micFail,"close the application", "application closed successfully"
	else
		reporter.ReportEvent micPass,"close the application", "application closed unsuccessfully"
	End If
	
	
End Function


	Function NewOrder()
			 @@ hightlight id_;_2067856168_;_script infofile_;_ZIP::ssf13.xml_;_
	WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_1953325624_;_script infofile_;_ZIP::ssf16.xml_;_
	WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Paris" @@ hightlight id_;_2067818872_;_script infofile_;_ZIP::ssf18.xml_;_
	WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2067822856_;_script infofile_;_ZIP::ssf21.xml_;_
	WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 2,1 @@ hightlight id_;_2067823672_;_script infofile_;_ZIP::ssf22.xml_;_
	WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click @@ hightlight id_;_2067824584_;_script infofile_;_ZIP::ssf23.xml_;_
	WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("passengerName").Set "v" @@ hightlight id_;_2067824680_;_script infofile_;_ZIP::ssf24.xml_;_
	WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("ORDER").Click	
				
	End Function

Call Launch()
Call Login()
Call Close()
Call NewOrder()





 @@ hightlight id_;_2133551936_;_script infofile_;_ZIP::ssf4.xml_;_

