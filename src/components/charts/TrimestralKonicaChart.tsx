
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { getMensualTotals, getTopUsers } from "@/data/printerData";

export const TrimestralKonicaChart = () => {
  const mensualData = getMensualTotals("Konica C454");
  const topUsers = getTopUsers("Konica C454", 5);

  const COLORS = ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'];

  const chartData = mensualData.map((mes: any) => ({
    mes: mes.mes,
    total: mes.total,
    copias: mes.copias,
    impresiones: mes.impresiones,
    fullColor: mes.fullColor,
    negro: mes.negro
  }));

  const pieData = topUsers.map((user: any, index) => ({
    name: user.usuario,
    value: user.total,
    color: COLORS[index]
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Gráficas Trimestrales - Konica C454</h2>
        <span className="text-sm text-gray-500">Visualización de Datos</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Evolución Mensual - Totales</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip formatter={(value) => [Number(value).toLocaleString(), 'Total']} />
                <Bar dataKey="total" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Distribución por Tipo</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip formatter={(value) => [Number(value).toLocaleString()]} />
                <Line type="monotone" dataKey="fullColor" stroke="#F59E0B" strokeWidth={2} name="Full Color" />
                <Line type="monotone" dataKey="negro" stroke="#6B7280" strokeWidth={2} name="Negro" />
                <Line type="monotone" dataKey="copias" stroke="#10B981" strokeWidth={2} name="Copias" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comparación Copias vs Impresiones</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="mes" />
                <YAxis />
                <Tooltip formatter={(value) => [Number(value).toLocaleString()]} />
                <Bar dataKey="copias" fill="#10B981" name="Copias" />
                <Bar dataKey="impresiones" fill="#3B82F6" name="Impresiones" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top 5 Usuarios - Distribución</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [Number(value).toLocaleString(), 'Total']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Resumen Estadístico</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {chartData.reduce((sum, mes) => sum + mes.total, 0).toLocaleString()}
              </div>
              <div className="text-sm text-blue-600">Total Trimestral</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {chartData.reduce((sum, mes) => sum + mes.copias, 0).toLocaleString()}
              </div>
              <div className="text-sm text-green-600">Total Copias</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">
                {chartData.reduce((sum, mes) => sum + mes.fullColor, 0).toLocaleString()}
              </div>
              <div className="text-sm text-yellow-600">Full Color</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-gray-600">
                {chartData.reduce((sum, mes) => sum + mes.negro, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Negro</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
