
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getXeroxData } from "@/data/printerData";

export const TrimestralXeroxReport = () => {
  const data = getXeroxData();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Reporte Trimestral - Xerox C7125</h2>
        <span className="text-sm text-gray-500">Marzo - Mayo 2024</span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Usuarios Xerox C7125 - Período Trimestral</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-3 font-semibold">Usuario</th>
                  <th className="text-left p-3 font-semibold">Mes</th>
                  <th className="text-right p-3 font-semibold">Total</th>
                  <th className="text-right p-3 font-semibold">Copias</th>
                  <th className="text-right p-3 font-semibold">Impresiones</th>
                  <th className="text-right p-3 font-semibold">Full Color</th>
                  <th className="text-right p-3 font-semibold">Negro</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="p-3 font-medium">{item.usuario}</td>
                    <td className="p-3">{item.mes}</td>
                    <td className="p-3 text-right font-semibold text-green-600">
                      {item.total.toLocaleString()}
                    </td>
                    <td className="p-3 text-right">{item.copias.toLocaleString()}</td>
                    <td className="p-3 text-right">{item.impresiones.toLocaleString()}</td>
                    <td className="p-3 text-right">{item.fullColor.toLocaleString()}</td>
                    <td className="p-3 text-right">{item.negro.toLocaleString()}</td>
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
