from functools import reduce


my_list=[1,2,3,4,5]

double_list=list(map(lambda x:x+2,my_list))
print(double_list)

even_list=list(filter(lambda x:x%2==0,my_list))
print(even_list)

sum_of_elem=reduce(lambda x,y:x+y,my_list)
print(sum_of_elem)
print(sum(my_list))