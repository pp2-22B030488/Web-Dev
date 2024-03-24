n = int(input())
a = list(map(int, input().split()))
cnt = 0
for i in range(2, n):
    if a[i-2] < a[i-1] and a[i] < a[i-1]:
        cnt+=1

print(cnt)