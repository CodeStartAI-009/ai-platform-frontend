'use client';
import { useEffect, useState } from "react";
import { getUserProfile } from "./lib/api";

export default function Home() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    getUserProfile().then(setData).catch(console.error);
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">User Profile</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
