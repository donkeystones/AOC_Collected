local file, err = io.open("example.txt",'r')

local text = file:read("*all")

print(text)