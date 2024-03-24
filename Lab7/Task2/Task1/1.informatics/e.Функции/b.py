import math
def power(a, n):
    return math.pow(a,n)

a,n = map(float, input().split())
print(power(a,int(n)))