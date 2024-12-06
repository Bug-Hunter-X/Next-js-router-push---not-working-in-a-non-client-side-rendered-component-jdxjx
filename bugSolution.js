```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    // Ensure the router is ready before attempting navigation
    if (router.isReady) {
      router.push('/destination');
    }
  };

  return (
    <button onClick={handleClick}>Go to Destination</button>
  );
}

export default MyComponent;
```