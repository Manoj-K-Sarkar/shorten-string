# Algorithm

## Encode

To Encode the String, it traverse the string and counts the consecutive duplicate character frequency.
If the is greater than one then it puts the frequency in front of that character in the output string. 
Else for the single character, it will append the character as it is.

eg: For, "helloworld" instead of encoded to "1h1e2l1o1w1r1l1d" 
	it will encode "hl2loworld"


## Decode

To Decode the string, it transverse the encoded string.
if the current character of the string is numeric then until getting the lower case alphabet it will loop to generate the real number and put the lower case alphabet that times in the output string. 
else it will append the character only once in the output string.

eg: For, "gh12j2t" output will be "ghjjjjjjjjjjjjtt"


# Components of the Code

In frontend there are two components Encode and Decode which are called from App component where user can input the strings and get the required result.

In the backend it has two end points one for encoding and one for decoding the string. 
For both the apis end points, it takes the input from the frontend as a post request and
sends the required responce(Encoded/Decoded) to the frontend.


# Libraries and plugins used

## Frontend
  * react
  * react-dom
  * react-scripts
  * web-vitals

## Backend
  * express
  * cors
  * body-parser
  * path


# Some test cases

## example 1

Original string: helloworld 
Encoded string: he2lworld

