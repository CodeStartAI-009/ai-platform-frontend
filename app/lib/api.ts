export async function getUserProfile() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/User`);
    if (!res.ok) throw new Error("Failed to fetch user profile");
    return res.json();
  }
  