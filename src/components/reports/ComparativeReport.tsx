
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getMensualTotals } from "@/data/printerData";

interface MensualTotal {
  mes: string;
  total: number;
  copias: number;
  impresiones: number;
  fullColor: number;
  negro: number;
}

export const ComparativeReport = () => {
  const konicaData = getMensualTotals("Konica C454") as MensualTotal[];
  const xeroxData = getMensualTotals("Xerox C7125") as MensualTotal[];

  const konicaTotal = konicaData.reduce((sum: number, mes: MensualTotal) => sum + mes.total, 0);
  const xeroxTotal = xeroxData.reduce((sum: number, mes: MensualTotal) => sum + mes.total, 0);
  const grandTotal = konicaTotal + xeroxTotal;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Reporte Comparativo de Impresoras</h2>
        <span className="text-sm text-gray-500">Análisis Completo</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-center text-blue-600">Konica C454</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {konicaTotal.toLocaleString()}
              </div>
              <div className="text-lg font-semibold mb-4">
                {((konicaTotal / grandTotal) * 100).toFixed(1)}% del total
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full" 
                  style={{ width: `${(konicaTotal / grandTotal) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center text-purple-600">Total General</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {grandTotal.toLocaleString()}
              </div>
              <div className="text-lg font-semibold mb-4">
                Impresiones totales
              </div>
              <div className="text-sm text-gray-600">
                Período: Marzo - Mayo 2024
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-center text-green-600">Xerox C7125</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {xeroxTotal.toLocaleString()}
              </div>
              <div className="text-lg font-semibold mb-4">
                {((xeroxTotal / grandTotal) * 100).toFixed(1)}% del total
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-green-600 h-3 rounded-full" 
                  style={{ width: `${(xeroxTotal / grandTotal) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Comparación Mensual</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="text-left p-3 font-semibold">Mes</th>
                    <th className="text-right p-3 font-semibold text-blue-600">Konica C454</th>
                    <th className="text-right p-3 font-semibold text-green-600">Xerox C7125</th>
                    <th className="text-right p-3 font-semibold">Diferencia</th>
                  </tr>
                </thead>
                <tbody>
                  {['MARZO', 'ABRIL', 'MAYO'].map((mes) => {
                    const konicaMes = konicaData.find((k: MensualTotal) => k.mes === mes);
                    const xeroxMes = xeroxData.find((x: MensualTotal) => x.mes === mes);
                    const konicaTotal = konicaMes ? konicaMes.total : 0;
                    const xeroxTotal = xeroxMes ? xeroxMes.total : 0;
                    const diferencia = konicaTotal - xeroxTotal;
                    
                    return (
                      <tr key={mes} className="border-b hover:bg-gray-50">
                        <td className="p-3 font-medium">{mes}</td>
                        <td className="p-3 text-right text-blue-600 font-semibold">
                          {konicaTotal.toLocaleString()}
                        </td>
                        <td className="p-3 text-right text-green-600 font-semibold">
                          {xeroxTotal.toLocaleString()}
                        </td>
                        <td className={`p-3 text-right font-semibold ${diferencia >= 0 ? 'text-blue-600' : 'text-green-600'}`}>
                          {diferencia >= 0 ? '+' : ''}{diferencia.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Análisis de Eficiencia</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Konica C454</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-blue-600">Promedio mensual:</span>
                    <div className="font-semibold">{Math.round(konicaTotal / 3).toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-blue-600">Usuarios activos:</span>
                    <div className="font-semibold">19</div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Xerox C7125</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-green-600">Promedio mensual:</span>
                    <div className="font-semibold">{Math.round(xeroxTotal / 3).toLocaleString()}</div>
                  </div>
                  <div>
                    <span className="text-green-600">Usuarios activos:</span>
                    <div className="font-semibold">8</div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Métricas Generales</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Impresora más utilizada:</span>
                    <span className="font-semibold text-blue-600">Konica C454</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diferencia de uso:</span>
                    <span className="font-semibold">{(konicaTotal - xeroxTotal).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
