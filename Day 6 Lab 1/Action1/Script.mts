Dim objExcel

Set objExcel = createobject("Excel.application")
objExcel.visible=true 

objExcel.Workbooks.Add
objExcel.cells(1,1).value="hello!!"
objExcel.ActiveWorkbook.SaveAs "C:\Users\Administrator\Desktop\abc1.xlsx"
objExcel.Quit
Set objExcel = Nothing




