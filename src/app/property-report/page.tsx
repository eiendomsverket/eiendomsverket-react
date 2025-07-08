"use client";
import PropertyReport from './PropertyReport';
import { ReportsProvider } from '@/app/utils/ReportsContext';
export default function DashboardPageRouter() {
  return (
    <ReportsProvider>
      <PropertyReport/>
    </ReportsProvider>
  );
}