
import { parseCSV, PrinterData } from "@/utils/csvParser";

let printerData: PrinterData[] = [];

// Cargar datos del CSV
const loadData = async () => {
  printerData = await parseCSV('/src/data/data_impresoras.csv');
};

// Inicializar datos
loadData();

export { PrinterData };

export const getKonicaData = () => printerData.filter(item => item.impresora === "Konica C454");
export const getXeroxData = () => printerData.filter(item => item.impresora === "Xerox C7125");

export const getTrimestralData = (impresora: string) => {
  return printerData.filter(item => item.impresora === impresora);
};

export const getMensualTotals = (impresora: string) => {
  const data = printerData.filter(item => item.impresora === impresora);
  const monthlyTotals = data.reduce((acc: Record<string, any>, item) => {
    if (!acc[item.mes]) {
      acc[item.mes] = {
        mes: item.mes,
        total: 0,
        copias: 0,
        impresiones: 0,
        fullColor: 0,
        negro: 0
      };
    }
    acc[item.mes].total += item.total;
    acc[item.mes].copias += item.copias;
    acc[item.mes].impresiones += item.impresiones;
    acc[item.mes].fullColor += item.fullColor;
    acc[item.mes].negro += item.negro;
    return acc;
  }, {});
  
  return Object.values(monthlyTotals);
};

export const getTopUsers = (impresora: string, limit: number) => {
  const data = printerData.filter(item => item.impresora === impresora);
  const userTotals = data.reduce((acc: Record<string, any>, item) => {
    if (!acc[item.usuario]) {
      acc[item.usuario] = {
        usuario: item.usuario,
        total: 0,
        copias: 0,
        impresiones: 0,
        fullColor: 0,
        negro: 0
      };
    }
    acc[item.usuario].total += item.total;
    acc[item.usuario].copias += item.copias;
    acc[item.usuario].impresiones += item.impresiones;
    acc[item.usuario].fullColor += item.fullColor;
    acc[item.usuario].negro += item.negro;
    return acc;
  }, {});
  
  return Object.values(userTotals)
    .sort((a: any, b: any) => b.total - a.total)
    .slice(0, limit);
};

// Exportar los datos para compatibilidad con componentes existentes
export { printerData };
