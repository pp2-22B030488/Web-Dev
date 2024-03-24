import math
k = 109
v = int(input())
t = int(input())

if v == 0 or t == 0:
    print(0)
elif v > 0:
    print(abs(k - v*t))
else:
    print(abs(k + v*t))