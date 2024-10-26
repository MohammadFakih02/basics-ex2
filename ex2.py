def odd_num_pyramid(n):
    k=1
    for i in range(1,n+1):
        k=1
        for j in range(1,i+1):
            print(k,end=" ")
            k+=2
        print()
n=int(input("enter size of pyramid "))
odd_num_pyramid(n)