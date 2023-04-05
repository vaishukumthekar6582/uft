'DAY 6 LAB 1 EXAMPLE 4

Dim objExcel

Set objExcel = createobject("Excel.application")
objExcel.visible=true 

'objExcel.Workbooks.Add
'objExcel.cells(1,1).value="hello!!"
set objExcel1=objExcel.Workbooks.open ("C:\Users\Administrator\Desktop\abc1.xlsx")
Set objExcel2=objExcel1.sheets.Add
objExcel2.Name="sheet3"

'set objExcel3=objExcel.sheets("sheet2")	
Set objExcel3=objExcel1.Worksheets("sheet2")					'getting error in this line i.e. subscript out of range 
objExcel3.delete


objExcel1.close
objExcel.Quit


set objExcel1= Nothing
set objExcel2= Nothing
Set objExcel = Nothing
