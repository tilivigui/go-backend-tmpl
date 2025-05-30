import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { printerData } from "@/data/printerData";

export const DashboardOverview = () => {
  const konicaTotal = printerData
    .filter(item => item.impresora === "Konica C454")
    .reduce((sum, item) => sum + item.total, 0);

  const xeroxTotal = printerData
    .filter(item => item.impresora === "Xerox C7125")
    .reduce((sum, item) => sum + item.total, 0);

  const totalGeneral = konicaTotal + xeroxTotal;

  const konicaUsers = new Set(printerData
    .filter(item => item.impresora === "Konica C454")
    .map(item => item.usuario)).size;

  const xeroxUsers = new Set(printerData
    .filter(item => item.impresora === "Xerox C7125")
    .map(item => item.usuario)).size;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total General</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalGeneral.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">Todas las impresiones</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Konica C454</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{konicaTotal.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{konicaUsers} usuarios activos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Xerox C7125</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{xeroxTotal.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">{xeroxUsers} usuarios activos</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cuota de Uso</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">
              {((konicaTotal / totalGeneral) * 100).toFixed(1)}%
            </div>
            <p className="text-xs text-muted-foreground">Konica vs Xerox</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Resumen por Impresora</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-blue-800">Konica C454</h3>
                  <p className="text-sm text-blue-600">{konicaUsers} usuarios registrados</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-800">{konicaTotal.toLocaleString()}</p>
                  <p className="text-sm text-blue-600">total impresiones</p>
                </div>
              </div>
              
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                <div>
                  <h3 className="font-semibold text-green-800">Xerox C7125</h3>
                  <p className="text-sm text-green-600">{xeroxUsers} usuarios registrados</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-800">{xeroxTotal.toLocaleString()}</p>
                  <p className="text-sm text-green-600">total impresiones</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Información del Sistema</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Período de datos:</span>
                <span className="text-sm">Marzo - Mayo 2025</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Total usuarios únicos:</span>
                <span className="text-sm">{konicaUsers + xeroxUsers}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Impresoras monitoreadas:</span>
                <span className="text-sm">2</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Última actualización:</span>
                <span className="text-sm">Mayo 2025</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
