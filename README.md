```
$ npm install

$ ./node_modules/typescript/bin/tsc --version
Version 4.1.3
```

---

`app.ts` is valid TypeScript; to compile it, issue

```
$ ./node_modules/typescript/bin/tsc app.ts
```

which is going to generate an `app.js`. (By default, the transpilation process uses ES5 as its target, so `app.js` will end up using `var` instead of `const`. However, it is possible to create a config file where one can change that target if desired.)
