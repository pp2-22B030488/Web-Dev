n = int(input())
a = list(map(int, input().split()))
cnt = 0
for i in range(1, n):
    if (a[i] < 0 and a[i-1] < 0) or (a[i] > 0 and a[i-1] > 0):
        cnt += 1

if cnt > 0:
    print("YES")

else:
    print("NO")



    