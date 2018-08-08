from operator import add, mul, sub, floordiv

def number_fn(num):
  def handler(fn=None):
    return num if fn is None else fn(num)
  return handler

def ops_fn(fn):
  def num(num1):
    def another_num(num2):
      return fn(num2, num1)
    return another_num
  return num

zero = number_fn(0)
one = number_fn(1)
two = number_fn(2)
three = number_fn(3)
four = number_fn(4)
five = number_fn(5)
six = number_fn(6)
seven = number_fn(7)
eight = number_fn(8)
nine = number_fn(9)

plus = ops_fn(add)
minus = ops_fn(sub)
times = ops_fn(mul)
divide_by = ops_fn(floordiv)

print(two(minus(zero())))
print(five(plus(two())))
