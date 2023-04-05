Browser("Your Store").Page("Your Store").Sync
Browser("Your Store").Navigate "https://demo.opencart.com/"
Browser("Your Store").Page("Register Account").WebEdit("firstname").Set "ab" @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("lastname").Set "bc" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email").Set "abbc@gmail.com" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "640aed885daeb69deee897d833b58259c336" @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Your Store").Page("Register Account").WebCheckBox("agree").Set "ON" @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Continue").Click @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Your Store").Page("Register Account").Link("My Account").Click @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("Your Store").Page("Register Account").Link("Login").Click @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email_2").Set "abbc@gmail.com" @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "640aedb6043cb0ef90ee5d949c846a9200c0" @@ script infofile_;_ZIP::ssf10.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Login").Click @@ script infofile_;_ZIP::ssf11.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("email_2").Set "abbc@gmail.com" @@ script infofile_;_ZIP::ssf12.xml_;_
Browser("Your Store").Page("Register Account").WebEdit("password").SetSecure "640aedc60e389974cc306e6bc1332a2daae0" @@ script infofile_;_ZIP::ssf13.xml_;_
Browser("Your Store").Page("Register Account").WebButton("Login").Click @@ script infofile_;_ZIP::ssf14.xml_;_
