
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTopUsers } from "@/data/printerData";

export const TopUsersKonicaReport = () => {
  const topUsers = getTopUsers("Konica C454", 5);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Top 5 Usuarios - Konica C454</h2>
        <span className="text-sm text-gray-500">Período Trimestral</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topUsers.map((user: any, index) => (
          <Card key={index} className={`${index === 0 ? 'ring-2 ring-blue-500' : ''}`}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{user.usuario}</span>
                <span className="text-2xl font-bold text-blue-600">#{index + 1}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span className="font-bold text-blue-600">{user.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Copias:</span>
                  <span>{user.copias.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Impresiones:</span>
                  <span>{user.impresiones.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Full Color:</span>
                  <span>{user.fullColor.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Negro:</span>
                  <span>{user.negro.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Ranking Completo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-gray-50">
                  <th className="text-left p-3 font-semibold">Ranking</th>
                  <th className="text-left p-3 font-semibold">Usuario</th>
                  <th className="text-right p-3 font-semibold">Total</th>
                  <th className="text-right p-3 font-semibold">Copias</th>
                  <th className="text-right p-3 font-semibold">Impresiones</th>
                  <th className="text-right p-3 font-semibold">Full Color</th>
                  <th className="text-right p-3 font-semibold">Negro</th>
                </tr>
              </thead>
              <tbody>
                {topUsers.map((user: any, index) => (
                  <tr key={index} className={`border-b hover:bg-gray-50 ${index === 0 ? 'bg-blue-50' : ''}`}>
                    <td className="p-3 font-bold text-blue-600">#{index + 1}</td>
                    <td className="p-3 font-medium">{user.usuario}</td>
                    <td className="p-3 text-right font-semibold text-blue-600">
                      {user.total.toLocaleString()}
                    </td>
                    <td className="p-3 text-right">{user.copias.toLocaleString()}</td>
                    <td className="p-3 text-right">{user.impresiones.toLocaleString()}</td>
                    <td className="p-3 text-right">{user.fullColor.toLocaleString()}</td>
                    <td className="p-3 text-right">{user.negro.toLocaleString()}</td>
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
