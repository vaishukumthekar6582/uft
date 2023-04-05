'DAY 6 LAB 1 EXAMPLE 3


Dim objExcel

Set objExcel = createobject("Excel.application")
objExcel.visible=true 

'objExcel.Workbooks.Add

set objExcel1=objExcel.Workbooks.open ("C:\Users\Administrator\Desktop\abc1.xlsx")
Set objExcel2=objExcel1.Worksheets("sheet1")
Set objExcel3=objExcel2.cells("1,2").EntireRow
objExcel3.Delete
objExcel.ActiveWorkbook.Save
objExcel.ActiveWorkbook.close

objExcel.Quit


set objExcel1= Nothing
set objExcel2= Nothing
Set objExcel = Nothing
