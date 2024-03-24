n = int(input())
i = 2

while i <= n:
    x = n // i
    if n == x*i:
        print(i)
        break

    i += 1    