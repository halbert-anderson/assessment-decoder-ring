# Decoder Ring

This Decoder Ring application was created as part of a surprise birthday party preparation for a friend who loves escape rooms and puzzles; the goal of the project is to write 
three different classic cipher algorithms to encode and decode messages: Caesar Shift, Polybius Square, and Substitution Cipher.
The project is designed to practice algorithm-building and test-driven development (TDD) skills, as such, the code was more complicated than my prior projects
and I wrote unit tests for the code to assure that it is working the way it is suppose to.  
 
## Table of Contents

- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Learning Objectives](#learning-objectives)
- [Project Setup](#project-setup)
- [Usage](#usage)
- [Cipher Descriptions](#cipher-descriptions)
  - [Caesar Shift Cipher](#caesar-shift-cipher)
  - [Polybius Square Cipher](#polybius-square-cipher)
  - [Substitution Cipher](#substitution-cipher)
- [Testing](#testing)


## Project Overview

This project allows encoding and decoding of messages using the following methods:
- **Caesar Shift Cipher** - The Ceasar method shifts the alphabet by a certain amount and every letter of the origianl message can be coded and decoded using the shifted alphabets.
- **Polybius Square Cipher** - The Polybius method uses a 5-by-5 grid on an x/y axis to define what each alphabet is coded to, so each alphabet 
character has a pair of numbers to define it. 
- **Substitution Cipher** - The Substitution method simply transposes 26 unique characters to the original alphabet and 
uses the transposed chracters as the key for cipher.

### Key Features
- Encodes and decodes messages.
- Implements the ciphers to maintain spaces and special characters.
- Handles edge cases (like wrapping around the alphabet or handling non-alphabetic characters).
- Tests implemented using TDD with Mocha and Chai.

## Technologies Used
  + **JavaScript:** The core programming language used for building the algorithms.
  + **Mocha:** Testing framework for running the unit tests.
  + **Chai:** Assertion library used for writing test cases.
## Learning Objectives

This project tests your ability to:
- Build complex algorithms to solve encoding and decoding problems.
- Write unit tests using Mocha and Chai to test your algorithms.
- Follow a TDD process by writing tests before implementing solutions.

## Project Setup

To run this project on your local machine:

1. Clone the repository:
```bash
git clone https://github.com/your-repo/decoder-ring.git
cd decoder-ring
```
2. Install the necessary dependencies:
  ```bash
  npm install
  ```
3. Run the tests to ensure everything is working:
  ```bash
  npm test
  ```

## Usage
You can use this project to encode and decode messages using any of the three ciphers provided.

Example usage for each cipher:

### Caesar Shift Cipher
  ```bash
  const { caesar } = require('./src/caesar');
  const encoded = caesar("Zebra Magazine", 3);  // "cheud pdjdclqh"
  const decoded = caesar("cheud pdjdclqh", 3, false);  // "zebra magazine"
  ```

### Polybius Square Cipher
```bash
const { polybius } = require('./src/polybius');
const encoded = polybius("message");  // "23513434112251"
const decoded = polybius("23513434112251", false);  // "message"
```

### Substitution Cipher
```bash
const { substitution } = require('./src/substitution');
const encoded = substitution("message", "plmoknijbuhvygctfxrdzeswaq");  // "ykrrpik"
const decoded = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq", false);  // "message"
```

## Cipher Descriptions
### Caesar Shift Cipher
  The Caesar Shift Cipher is a type of substitution cipher where each letter in the plaintext is shifted by a certain number of positions in the alphabet. The key features of this cipher in this project include:

  + Returning `false` if the shift value is 0, less than -25, or greater than 25.
  + Ignoring capital letters.
  + Wrapping around when shifts go past 'z'.
  + Maintaining spaces and special characters.

### Polybius Square Cipher
In the Polybius Square Cipher, each letter is represented by its coordinates in a 5x5 grid. The cipher includes:

  + Translating 'i' and 'j' to 42 when encoding.
  + Translating 42 to 'i/j' when decoding.
  + Ignoring capital letters.
  + Maintaining spaces and non-alphabetic characters.

### Substitution Cipher
The Substitution Cipher replaces each letter in the input with a corresponding letter from a given alphabet. This cipher includes:

  + Returning `false` if the alphabet is not 26 characters long.
  + Returning `false` if there are duplicate characters in the alphabet.
  + Maintaining spaces and non-alphabetic characters.
  + Ignoring capital letters.

## Testing
This project follows a Test-Driven Development (TDD) approach. Unit tests are written using Mocha and Chai. To run the tests, use:
  ```bash
  npm test
```
The tests cover various cases, such as:

  + Shifting beyond the end of the alphabet for Caesar Cipher.
  + Encoding and decoding spaces and special characters.
  + Handling duplicate characters in the Substitution Cipher alphabet.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request.
