# n = int(input())
# a = []
# cnt = 0
# for i in range(n):
#     a.append(int(input()))

# for i in range(n):
#     if a[i] > 0:
#         cnt+=1

# print(cnt)

N = int(input())
array = list(map(int, input().split()))

count_positive = 0
for num in array:
    if num > 0:
        count_positive += 1

print(count_positive)
