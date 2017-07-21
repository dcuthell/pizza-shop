# _Ping-Pong_

#### _The Ping-Pong site will display numbers, "ping", "pong", and "ping-pong" depending in the user's input and selection, 07/14/17_

#### By _**David Cuthell**_

## Description

_The Ping-Pong site will count up to or down from a user's number, changing multiples of 3, 5, and 15 to "ping", "pong", and "ping-pong", respectively. It will then display the numbers and ping-pongs in a list. If the input given is not a number, the site will display an error pop-up._

## Setup/Installation Requirements

* _Type https://dcuthell.github.io/ping-pong into your web browser_
* _Hit enter to go to the page_
* _Enter a number_
* _Hit "Ping Pong!" or "Pong Ping!"_
* _Check out your results_
* _Rejoice_

## Specs

* It can count up to the provided number.
  * __Example Input:__ 2
  * __Example Output:__ [1,2]
* It can count backwards from the provided number to 0.
  * __Example Input:__ 2
  * __Example Output:__ [1,2]
* It can replace numbers divisible by 3 with the word "ping".
  * __Example Input:__ [3, 4, 5, 6]
  * __Example Output:__ ["ping", 4, 5, "ping"]
* It can replace numbers divisible by 5 with the word "pong".
  * __Example Input:__ [3, 4, 5, 6]
  * __Example Output:__ [3, 4, "pong", 6]
* It can replace numbers divisible by 15 with the word "ping-pong".
  * __Example Input:__ [13, 14, 15, 16]
  * __Example Output:__ [13, 14, "ping-pong", 16]
* It can create list items in a string for each number or word given.
  * __Example Input:__ [14, "ping-pong"]
  * __Example Output:__ "\<li>14\</li>\<li>"ping-pong"\</li>"
* It will throw an alert message if given input that is not a number.
  * __Example Input:__ "12a"
  * __Example Output:__ "Please enter in a valid number"

## Known Bugs

_Some text sizing issues are being addressed_

## Support and contact details

_For technical support, additional information, or feedback, please send an email to dcc1447@gmail.com, or call 503-867-5309. Ask for Jenny._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _Git_
* _Atom_

### License

*This product is licensed under the MIT license*

Copyright (c) 2017 **_David Cuthell_**
