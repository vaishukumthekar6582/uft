﻿systemutil.Run Environment("flightpath")


WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set Environment("username")

WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set Environment("password")
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").Close


msgbox environment("OS")
