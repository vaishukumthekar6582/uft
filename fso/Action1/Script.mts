Dim objfso
Set objfso=createobject("Scripting.FilesystemObject")
'objfso.CreateFolder "C:\uft\samplle"
objfso.CreateTextFile "C:\uft\samplle\sample.txt"
objfso.CreateTextFile "C:\uft\sample.doc"
objfso.CreateTextFile "C:\uft\sample.pdf"
objfso.CreateTextFile "C:\uft\sample.xls"


Set objfso= nothing
