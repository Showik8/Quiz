"use client"
import React from "react"

export default function SlugPage({ params }) {
  const { slug } = React.use(params);

  // Check if `slug` is available
  if (!slug) {
    return <div>Loading...</div>; // Or a loading spinner
  }

  return (
    <div>
      <h1>Slug Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}
