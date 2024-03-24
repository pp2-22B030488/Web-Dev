n = int(input())
p = 1
count = 0
while p <= n:
    if p == n:
        count+=1
    p *= 2

if count >= 1:
    print("YES")
else:
    print("NO")
