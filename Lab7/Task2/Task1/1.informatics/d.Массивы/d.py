n = int(input())
a = list(map(int, input().split()))
cnt = 0
j = -9999
for i in a:
    if i > j:
        cnt+=1
    j = i

print(cnt-1)
