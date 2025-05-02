# string-sanitizer

A lightweight utility to sanitize strings by removing HTML tags, special characters, and extra whitespace.

## Install

```bash
npm i @softbase/string-sanitizer
```

#Usage
```TypeScript
import { sanitize } from 'string-sanitizer';

console.log(sanitize("  Hello <b>world</b>! 😃  ")); // Hello world
```
