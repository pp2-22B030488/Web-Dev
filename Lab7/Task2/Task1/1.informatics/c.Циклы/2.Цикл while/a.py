a = int(input())
i = 1
while(i <= a):
    r = i ** 0.5
    if i // r == r:
        print(i)
    i+=1

