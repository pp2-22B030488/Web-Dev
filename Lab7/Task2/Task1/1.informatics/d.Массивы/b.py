N = int(input())
array = list(map(int, input().split()))

for i in range(N):
    if array[i] % 2 == 0:
        print(array[i], end=" ")
