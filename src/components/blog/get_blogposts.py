
#importing the “re” module
import re
with open("_config.yml", "r") as file:
    # details = file.read().replace("\n", "")
    details = file.read()

sub = "- url"


#defining the function with two parameters as input string and substring
def strfind(input_str, substr_list):
   # Regular expression is created and initialized as a shape
   shape = "(?=.*" + ")(?=.*".join(substr_list) + ").*"
   #using the findall() function to check for the characters in the string
   matches = re.findall(shape, input_str)
   print('matches:', matches)

   # when the substrings are matched with the strings it returns true else false
   return len(matches) == 1
#initializing the string 
input_str = details
#initializing the characters that need to be found in the input string
substr_list = [ "- url"]

#To check using the if else statement 
if strfind(input_str, substr_list):
#when the characters are matched this statement is printed.
   print("All substrings found!")
else:
#when the characters are not matched this statement is printed.
   print("Not all substrings found.")
    

    
    

