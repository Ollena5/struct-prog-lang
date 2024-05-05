fib(0, 0).  % Base case: fib(0) = 0
fib(1, 1).  % Base case: fib(1) = 1
fib(N, Result) :-
    N > 1,
    N1 is N - 1,
    N2 is N - 2,
    fib(N1, F1),
    fib(N2, F2),
    Result is F1 + F2.

?- fib(5, Result).
