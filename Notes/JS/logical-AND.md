# Logical AND (&&) Operator

---

## References

[MDN doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

---

## Dictionary

- Operand: reprents the data that is to be operated on or manipulated by some sort of operator.

---

- Returns the value of the first false operand it encounters
- If all values are truthy, the value of the last operand is returned

```
function A() {
  console.log("called A");
  return false;
}
function B() {
  console.log("called B");
  return true;
}

console.log(A() && B());
// Logs "called A" to the console due to the call for function A,
// && evaluates to false (function A returns false), then false is logged to the console;
// the AND operator short-circuits here and ignores function
```

## An actual real life example

- Helpful if you don't need an else branch
- In react terms:
- `<main>{isLoggedIn && <AdminPanel />}</main>
