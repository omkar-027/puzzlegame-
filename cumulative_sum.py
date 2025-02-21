
def cumulative_sum():

    n = int(input("Enter the number of elements:"))

    
    num_list=[]

    for i in range(n):

        num = int(input(f"Enter element{i+1}:"))

        num_list.append(num)

    cumulative_sum_list=[]

    cumulative_sum = 0

    for num in num_list:

        cumulative_sum += num

        cumulative_sum_list.append(cumulative_sum)

     

    print("cumulative sum list:", cumulative_sum_list)

cumulative_sum()                    

                    

                    
