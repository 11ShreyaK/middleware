import { useRouter } from 'next/router';

export default function IndiaPage() {
  const router = useRouter();
  const country = router.query.country || 'Unknown';

  return (
    <div>
      <h1>🇮🇳 Namaste You are visiting from India.</h1>
      <p>Detected country: {country}</p>
    </div>
  );
}
