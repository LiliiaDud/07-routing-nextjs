'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectToNewPath = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/notes/filter/all');
  }, [router]);
};

export default RedirectToNewPath;
