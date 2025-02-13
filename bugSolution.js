This component uses `useEffect` with a cleanup function to prevent state updates on an unmounted component. The `setTimeout` is cancelled when the component unmounts.

```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  let timeoutId;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
export default MyComponent;
```