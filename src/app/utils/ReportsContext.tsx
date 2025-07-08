import React, { createContext, useContext, useEffect, useState } from 'react';
import { fetchAllReports } from '@/app/utils/api';
import type { Report } from '@/app/utils/types';

interface ReportsContextType {
  reports: Report[];
  loading: boolean;
  refetch: () => Promise<void>;
}

const ReportsContext = createContext<ReportsContextType | undefined>(undefined);

export const ReportsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [reports, setReports] = useState<Report[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchReports = async () => {
    setLoading(true);
    try {
      const cached = sessionStorage.getItem('reports');
      if (cached) {
        setReports(JSON.parse(cached));
        setLoading(false);
        return;
      }
      const data = await fetchAllReports();
      setReports(data);
      sessionStorage.setItem('reports', JSON.stringify(data));
    } catch {
      setReports([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  return (
    <ReportsContext.Provider value={{ reports, loading, refetch: fetchReports }}>
      {children}
    </ReportsContext.Provider>
  );
};

export const useReports = () => {
  const ctx = useContext(ReportsContext);
  if (!ctx) throw new Error('useReports must be used within ReportsProvider');
  return ctx;
};

