N = int(input())
array = list(map(int, input().split()))

for i in range(N - 1, -1, -1):
    print(array[i], end=" ")
