set objexcel=createobject("Excel.Application")

Set objworkbook=objexcel.workbooks.open("‪‪‪‪‪C:\Users\Administrator\Desktop\data ad.xlsx")

Set objworksheet=objworkbook.worksheets(1)

rowcount=objworksheet.usedrange.rows.count

msgbox rowcount

For i = 2 To rowcount Step 1


systemutil.Run "https://demo.opencart.com/"
Browser("Account Login").Page("Account Login").WebElement("My Account").Click
Browser("Account Login").Page("Account Login").WebEdit("email").Set cstr(objworksheet.cells(i,1))
Browser("Account Login").Page("Account Login").WebEdit("password").Set cstr(objworksheet.cells(i,2))
Browser("Account Login").Page("Account Login").WebButton("Login").Click


Next

Set objworksheet=nothing
Set objworkbook=nothing
set objexcel=nothing




