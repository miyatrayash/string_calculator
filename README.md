# String Calculator

Welcome to the TypeScript TDD (Test-Driven Development) example repository, where we showcase the beauty of TDD using TypeScript and Jest.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before installing, make sure to have [Node.js](https://nodejs.org/en/) and npm (which comes with Node.js) installed on your system.

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/miytrayash/string_calculator.git
cd string_calculator
```

2. Install the required npm packages:

```bash
npm install
```

### Running the Tests

To execute the tests, simply run:

```bash
npm test
```

If you prefer continuous testing while you code, you can use:

```bash
npm run test:watch
```

## Built With
- [Node.js](https://nodejs.org/) - The runtime server environment
- [npm](https://www.npmjs.com/) - Dependency Management
- [TypeScript](https://www.typescriptlang.org/) - The scripting language used
- [Jest](https://jestjs.io/) - The testing framework used

## Version History

### 1.0.0

- Initial release.
- Supports sum of two numbers using the [`add`](./calculator.ts) function.

### 1.0.1

- Add support for handling multiple numbers in the add function

### 1.0.2

- Fix handling of whitespaces between numbers in add function

### 1.1.0

- Add support for different delimiters in add function

### 1.1.1
- Refactor tests and add negative number handling

## Author
- **Yash Miyatra** - Initial work - [miyatrayash](https://github.com/miyatrayash)