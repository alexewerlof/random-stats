# Introduction

This is a very simple program that I used to experiment with some
basic functional programming concepts (purity, composition, etc)
in a long plane trip.

It basically generates numbers and then shows what was the distribution
of the numbers.

The default execution (`npm start`) generates a million numbers from 0 to 9.

## Example

Generate ten million numbers from 0-5 and show the distribution:

```
node index -n 5 -i 1000000
0 : 20.07%
1 : 20.03%
2 : 19.98%
3 : 19.91%
4 : 20.01%
```

# Debugging

To debug the project [in Chrome](https://medium.com/@paul_irish/debugging-node-js-nightlies-with-chrome-devtools-7c4a1b95ae27#.2p137t8y4)
use `npm run debug`.

# Run the tests

```
npm test
```
