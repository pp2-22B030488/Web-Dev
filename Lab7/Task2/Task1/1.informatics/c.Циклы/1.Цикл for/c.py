import math

a = int(input())
b = int(input())

for i in range(a, b+1):
    r = math.sqrt(i) 
    if i // r == r:
        print(i, end=" ")