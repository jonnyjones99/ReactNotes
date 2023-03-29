# Back to Basics

---

## References

[docs](https://react.dev/learn)
[js-help](https://javascript.info/import-export#export-default)
[design-patterns](https://refactoring.guru/design-patterns/)

---

## Components

- Components are functions that return markup
  Example syntax:

```
function NavMenu() {
return (

        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Content</li>
            </ul>
        </nav>

    );

}
```

```
export default function MyApp() {
return(

        <header>
            <NavMenu />
        </header>
    )

}
```

### Export Default

- The `export default` keywords specifiy the main component in the file.
- Allows you to call the function from another file after 'importing'.

```
file 1:

function areaOfSquare(length) {
return length \* length;
}
export default areaOfSquare;
```

```
file 2:

import areaFunction from "./export.js";
var length = 4;
console.log("Area of the square is as " + areaFunction(length));
```

### Displaying Data

Curley braces let you escape back into javascript:

```
return (
<h1>
    {user.name}
</h1>
)
```

### Conditional Rendering

- There is no special syntax for writing conditions.
- You can use regular if statements to conditionally render JSX
- Can use the ternany operator for cleaner code `{isLoggedin ? (<MyAccount />) : (<Login />) };`
- Can also use logical AND statment ( && ) `
