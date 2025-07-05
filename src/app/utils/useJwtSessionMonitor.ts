'use client';
import {useEffect, useRef} from 'react';
import {decodeJwt} from '@/app/utils/jwt';
import {getSessionItem, removeSessionItem} from '@/app/utils/storage';
import {useRouter} from 'next/navigation';

/**
 * Hook that monitors the access-token in sessionStorage and logs out if expired.
 * @param {string} tokenKey - The sessionStorage key for the JWT (default: 'access-token')
 * @param {string} redirectPath - Where to redirect on logout (default: '/home-page')
 */
export function useJwtSessionMonitor(tokenKey = 'access-token', redirectPath = '/home-page') {
  const router = useRouter();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    function checkToken() {
      const tokenStr = getSessionItem(tokenKey);
      if (!tokenStr) return;
      let tokenObj: any = null;
      try {
        tokenObj = typeof tokenStr === 'string' ? JSON.parse(tokenStr) : tokenStr;
      } catch {
        tokenObj = tokenStr;
      }
      // Hent JWT-string fra ulike mulige felter
      const jwt =
          typeof tokenObj === 'string'
              ? tokenObj
              : tokenObj?.access_token;
      if (!jwt) return;
      const decoded = decodeJwt(jwt);
      console.log('Decoded JWT:', decoded);
      if (decoded && decoded.exp && Date.now() / 1000 > decoded.exp) {
        removeSessionItem(tokenKey);
        router.push(redirectPath);
      }
    }

    checkToken();
    intervalRef.current = setInterval(checkToken, 60000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [router, tokenKey, redirectPath]);
}

export function SessionMonitorClient() {
  useJwtSessionMonitor();
  return null;
}
