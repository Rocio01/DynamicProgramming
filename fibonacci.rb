def recursion_fibonacci(n)
  if n <= 2
    return 1
  end
  recursion_fibonacci(n - 1) + recursion_fibonacci(n - 2)  
end

# puts(recursion_fibonacci(3))
# puts(recursion_fibonacci(5))
# puts(recursion_fibonacci(100))

def memo_fibonacci(n, memo = [])
  if  !!(memo[n])
    return memo[n]
  end
  if n <= 2
    return 1
  end
  memo[n] = memo_fibonacci(n - 1, memo) + memo_fibonacci(n - 2, memo)
  memo[n]
end
puts(memo_fibonacci(100))