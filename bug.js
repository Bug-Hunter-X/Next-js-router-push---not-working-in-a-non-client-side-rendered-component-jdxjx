```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/destination');
  };

  return (
    <button onClick={handleClick}>Go to Destination</button>
  );
}

export default MyComponent;
```