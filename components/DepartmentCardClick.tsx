"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function DepartmentCardClick() {
  const router = useRouter();

  useEffect(() => {
    const cards = document.querySelectorAll(".department-card");
    const cleanups: (() => void)[] = [];
    cards.forEach((card) => {
      const link = card.querySelector('a[href^="/"]') as HTMLAnchorElement | null;
      if (!link) return;
      const handler = () => router.push(link.getAttribute("href") || "/");
      card.addEventListener("click", handler);
      cleanups.push(() => card.removeEventListener("click", handler));
    });
    return () => cleanups.forEach((fn) => fn());
  }, [router]);

  return null;
}
