"use client";

import { ReportsProvider } from '@/app/utils/ReportsContext';
import SalesRappport from './SalesRapport';
export default function homePageRoute() {
  return (
    <ReportsProvider>
      <SalesRappport/>
    </ReportsProvider>
  );
}