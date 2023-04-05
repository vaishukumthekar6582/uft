print date

print DateAdd("D",3, "31-DEC-2023")
print DateAdd("W",3, "31-DEC-2023")
print DateAdd("M",3, "31-DEC-2023")
print DateAdd("YYYY",3, "31-DEC-2023")
print DateAdd("H",3, "31-DEC-2023")
print DateAdd("N",3, "31-DEC-2023")
print DateAdd("S",3, "31-DEC-2023")

Print("datediff")
print Datediff("S","1-dec-2023", "31-DEC-2024")
print Datediff("n","1-dec-2026", "31-DEC-2023")
print Datediff("h","1-dec-2026", "31-DEC-2023")
print Datediff("d","1-dec-2026", "31-DEC-2023")
print Datediff("w","1-dec-2026", "31-DEC-2023")
print Datediff("m","1-dec-2026", "31-DEC-2023")
print Datediff("yyyy","1-dec-2026", "31-DEC-2023")


print("day")

print(day(date))

print("formatedatetime")
d=cdate("1-1-2023 11.23")
print(formatdatetime(d,0))
print(formatdatetime(d,1))
print(formatdatetime(d,2))
print(formatdatetime(d,3))
print(formatdatetime(d,4))

print(hour(d))
print(isdate(d))
print(minute(d))
print(second(d))

print(month(d))
print(monthname(2))
print(time)

print(weekday(date,2))


print("math functions")

print(abs(2.6574))
print(exp(9))
print(int(4.546))
print(log(2))
print(rnd(1))
print(sgn(3))
print(sqr(100))



print("string functions")

instr([start,])
