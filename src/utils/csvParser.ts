
export interface PrinterData {
  impresora: string;
  mes: string;
  usuario: string;
  total: number;
  copias: number;
  impresiones: number;
  fullColor: number;
  negro: number;
}

export const parseCSV = async (csvPath: string): Promise<PrinterData[]> => {
  try {
    const response = await fetch(csvPath);
    const csvText = await response.text();
    
    const lines = csvText.trim().split('\n');
    const headers = lines[0].split(',');
    
    return lines.slice(1).map(line => {
      const values = line.split(',');
      return {
        impresora: values[0],
        mes: values[1],
        usuario: values[2],
        total: Number(values[3]),
        copias: Number(values[4]),
        impresiones: Number(values[5]),
        fullColor: Number(values[6]),
        negro: Number(values[7])
      };
    });
  } catch (error) {
    console.error('Error loading CSV data:', error);
    return [];
  }
};
