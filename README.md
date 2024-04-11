Simple and Tiny toasts for success messages 🍞

## features

add your message with `msg`
add toast duration `duration`

## install

```
$ npm install react-tiny-toaster
```

## use

```jsx
import React from "react";
import Toast from "react-tiny-toaster";

function App() {
  // add state. Example:
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button onClick={() => setShowToast(true)}>Toast!</button>
      {showToast && <Toast msg="you have toasted" duration={5000} />}
    </div>
  );
}
```

## License

Licensed under ISC
