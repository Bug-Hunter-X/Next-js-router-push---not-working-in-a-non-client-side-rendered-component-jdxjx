# Next.js router.push() Issue in Non-Client-Side Rendered Component

This repository demonstrates a common issue encountered when using the `router.push()` method in Next.js within components that aren't directly rendered on the client-side. This typically happens when the component is rendered within a server-side rendered (SSR) page. This causes the navigation to fail, often appearing to do nothing.

The `bug.js` file shows the problematic code. The solution and explanation can be found in `bugSolution.js`.