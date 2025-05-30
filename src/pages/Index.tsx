
import React, { useState } from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { TrimestralKonicaReport } from "@/components/reports/TrimestralKonicaReport";
import { TrimestralXeroxReport } from "@/components/reports/TrimestralXeroxReport";
import { MensualKonicaReport } from "@/components/reports/MensualKonicaReport";
import { MensualXeroxReport } from "@/components/reports/MensualXeroxReport";
import { TopUsersKonicaReport } from "@/components/reports/TopUsersKonicaReport";
import { TopUsersXeroxReport } from "@/components/reports/TopUsersXeroxReport";
import { ComparativeReport } from "@/components/reports/ComparativeReport";
import { TrimestralKonicaChart } from "@/components/charts/TrimestralKonicaChart";
import { TrimestralXeroxChart } from "@/components/charts/TrimestralXeroxChart";
import { DashboardOverview } from "@/components/DashboardOverview";

const Index = () => {
  const [activeReport, setActiveReport] = useState('overview');

  const renderContent = () => {
    switch (activeReport) {
      case 'overview':
        return <DashboardOverview />;
      case 'trimestral-konica':
        return <TrimestralKonicaReport />;
      case 'trimestral-xerox':
        return <TrimestralXeroxReport />;
      case 'mensual-konica':
        return <MensualKonicaReport />;
      case 'mensual-xerox':
        return <MensualXeroxReport />;
      case 'top-konica':
        return <TopUsersKonicaReport />;
      case 'top-xerox':
        return <TopUsersXeroxReport />;
      case 'comparative':
        return <ComparativeReport />;
      case 'chart-konica':
        return <TrimestralKonicaChart />;
      case 'chart-xerox':
        return <TrimestralXeroxChart />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar activeReport={activeReport} setActiveReport={setActiveReport} />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <SidebarTrigger />
              <h1 className="text-3xl font-bold text-gray-900">Dashboard de Impresoras LIVIGUI</h1>
            </div>
            {renderContent()}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
