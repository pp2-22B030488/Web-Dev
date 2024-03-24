def xor(x, y):
    return int(x != y)

x, y = map(int, input().split())
result = xor(x, y)
print(result)
