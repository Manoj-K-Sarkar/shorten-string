# Algorithm

* Create **an array(ARR) of length of 64 and store a to z, A to Z, 0 to 9 and three special characters**

## Encode

input: **random**
* Represent every character as 5 bits taking 'a' as 1 \
  **(r -> 10010 | a -> 00001 | n -> 01110 | d -> 00100 | o -> 01111 | m -> 01101)**
* Change it to 6 bits by taking the next characters begining represent bits \
  **(10010 0 | 0001 01 | 110 011 | 10 0010 | 0 01111 | 01101 )**
* Create the outputString from the array \
  **(ARR[10010 0] -> ARR[36] -> K | ARR[0001 01] -> ARR[5] -> f | ...)** \
output: **KfXhT**

## Decode

input: **KfXhT**
* Represent every character as 6 bits which will be the index of the arr(ARR) \
  **( K -> ARR[36] -> ARR[100100] -> 100100 | f -> ARR[5] -> ARR[000101] -> 000101 | ...)**
* Change it to 5 bits series taking prev end bits & beging bits \
  **(10010 | 0 0001 | 01 110 | 001 00 | 0111 1 | 01101 )**
* Create the outputString by adding 96 to the number and change it to character or by ARR[value] \
output: **random**


# Components of the Code

* In frontend there are two components Encode and Decode which are called from App component where user can input the strings and get the required result.

* In the backend it has two end points one for encoding and one for decoding the string. 
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

Original string: helloworld \
Encoded string:  qvJh3FjH \
**link: https://github.com/Manoj-K-Sarkar/shorten-string/blob/main/screenshots/helloworld.jpg**

## example 2

Original string: "" \
Encoded string: "" \
**link: https://github.com/Manoj-K-Sarkar/shorten-string/blob/main/screenshots/emptyString.png  **

## example 3

Original string: aaaaaaaaaaaaaaaabbddd \
Encoded string:  ceiqHceiqHceirciqG \
**link: https://github.com/Manoj-K-Sarkar/shorten-string/blob/main/screenshots/ceiqHceiqHceirciqG.jpg **

## example 4

Using character other than small cases \
**link: https://github.com/Manoj-K-Sarkar/shorten-string/blob/main/screenshots/type-error.jpg**
