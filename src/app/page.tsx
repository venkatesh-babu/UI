'use client';

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/contact'); // Redirect to the About page
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={handleRedirect}>Go to About</button>
    </div>
  );
}
