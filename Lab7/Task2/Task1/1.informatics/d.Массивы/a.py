N = int(input())
array = input().split()

for i in range(N):
    if i % 2 == 0:
        print(array[i], end=" ")
