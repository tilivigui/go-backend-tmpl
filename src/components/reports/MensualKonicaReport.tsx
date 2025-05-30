
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMensualTotals } from "@/data/printerData";

export const MensualKonicaReport = () => {
  const data = getMensualTotals("Konica C454");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Reporte Mensual Totales - Konica C454</h2>
        <span className="text-sm text-gray-500">Enero - Marzo 2024</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((mes: any, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-center text-blue-600">{mes.mes}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold text-blue-600">{mes.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Copias:</span>
                  <span>{mes.copias.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Impresiones:</span>
                  <span>{mes.impresiones.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Full Color:</span>
                  <span>{mes.fullColor.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Negro:</span>
                  <span>{mes.negro.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resumen Detallado por Mes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-3 font-semibold">Mes</th>
                  <th className="text-right p-3 font-semibold">Total</th>
                  <th className="text-right p-3 font-semibold">Copias</th>
                  <th className="text-right p-3 font-semibold">Impresiones</th>
                  <th className="text-right p-3 font-semibold">Full Color</th>
                  <th className="text-right p-3 font-semibold">Negro</th>
                </tr>
              </thead>
              <tbody>
                {data.map((mes: any, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{mes.mes}</td>
                    <td className="p-3 text-right font-semibold text-blue-600">
                      {mes.total.toLocaleString()}
                    </td>
                    <td className="p-3 text-right">{mes.copias.toLocaleString()}</td>
                    <td className="p-3 text-right">{mes.impresiones.toLocaleString()}</td>
                    <td className="p-3 text-right">{mes.fullColor.toLocaleString()}</td>
                    <td className="p-3 text-right">{mes.negro.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
