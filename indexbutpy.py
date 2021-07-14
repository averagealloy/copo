# print hello world
print("Hello World!")

"""
write a fucntion that prints numbers from 0 to 100.
if the number is divisible by 3 print Fizz
if the number is divisible by 5 print Buzz
if the number is divisible by 3 and 5 print FizzBuzz
"""
def fizzbuzz():
    for i in range(101):
        if i % 3 == 0 and i % 5 == 0:
            print("FizzBuzz")
        elif i % 3 == 0:
            print("Fizz")
        elif i % 5 == 0:
            print("Buzz")
        else:
            print(i)


fizzbuzz()