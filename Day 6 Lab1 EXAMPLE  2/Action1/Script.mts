'DAY 6 LAB 1 EXAMPLE 2
Dim objExcel

Set objExcel = createobject("Excel.application")
objExcel.visible=true 

objExcel.Workbooks.Add

set objExcel1=objExcel.Workbooks.open ("C:\Users\Administrator\Desktop\abc1.xlsx")
Set objExcel2=objExcel1.Worksheets("sheet1")
msgbox objExcel2.cells(1,2).value

objExcel1.close
objExcel.Quit


set objExcel1= Nothing
set objExcel2= Nothing
Set objExcel = Nothing

