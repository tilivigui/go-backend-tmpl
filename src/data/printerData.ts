
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

export const printerData: PrinterData[] = [
  // Konica C454 - Mayo
  { impresora: "Konica C454", mes: "MAYO", usuario: "MREYES", total: 15561, copias: 1059, impresiones: 14502, fullColor: 11138, negro: 3364 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "IAPAZA", total: 11976, copias: 341, impresiones: 11635, fullColor: 10429, negro: 1206 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "GYACO", total: 9369, copias: 221, impresiones: 9148, fullColor: 7195, negro: 1953 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "RTICONA", total: 6382, copias: 6382, impresiones: 0, fullColor: 0, negro: 0 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "NARCE", total: 5285, copias: 28, impresiones: 5257, fullColor: 4300, negro: 957 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "MAPAZA", total: 4581, copias: 45, impresiones: 4536, fullColor: 4393, negro: 143 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "AQUINTANILLA", total: 4045, copias: 270, impresiones: 3775, fullColor: 3331, negro: 444 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "PCALCINA", total: 3040, copias: 93, impresiones: 2947, fullColor: 2546, negro: 401 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "MHUERTA", total: 2767, copias: 49, impresiones: 2718, fullColor: 1687, negro: 1031 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "MDELGADO", total: 2422, copias: 30, impresiones: 2392, fullColor: 2171, negro: 221 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "EMAMANI", total: 1536, copias: 203, impresiones: 1333, fullColor: 1132, negro: 201 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "RMEZA", total: 1483, copias: 0, impresiones: 1483, fullColor: 1233, negro: 250 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "DPENA", total: 856, copias: 81, impresiones: 775, fullColor: 619, negro: 156 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "AMOLINA", total: 670, copias: 68, impresiones: 602, fullColor: 514, negro: 88 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "JCHURATA", total: 317, copias: 0, impresiones: 317, fullColor: 265, negro: 52 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "HANCASI", total: 200, copias: 4, impresiones: 196, fullColor: 166, negro: 30 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "MCONDORI", total: 193, copias: 24, impresiones: 169, fullColor: 58, negro: 111 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "RBEJARANO", total: 159, copias: 1, impresiones: 158, fullColor: 141, negro: 17 },
  { impresora: "Konica C454", mes: "MAYO", usuario: "JZEVALLOS", total: 7, copias: 1, impresiones: 6, fullColor: 5, negro: 1 },

  // Konica C454 - Abril
  { impresora: "Konica C454", mes: "ABRIL", usuario: "IAPAZA", total: 12215, copias: 375, impresiones: 11840, fullColor: 10599, negro: 1241 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "MREYES", total: 14980, copias: 1020, impresiones: 13960, fullColor: 10740, negro: 3220 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "RTICONA", total: 6520, copias: 6520, impresiones: 0, fullColor: 0, negro: 0 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "GYACO", total: 9200, copias: 230, impresiones: 8970, fullColor: 6995, negro: 1975 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "NARCE", total: 5010, copias: 25, impresiones: 4985, fullColor: 4085, negro: 900 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "MAPAZA", total: 4320, copias: 42, impresiones: 4278, fullColor: 4152, negro: 126 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "AQUINTANILLA", total: 3800, copias: 260, impresiones: 3540, fullColor: 3112, negro: 428 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "PCALCINA", total: 3100, copias: 90, impresiones: 3010, fullColor: 2608, negro: 402 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "AANAMPA", total: 2560, copias: 35, impresiones: 2525, fullColor: 2310, negro: 215 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "MHUERTA", total: 2680, copias: 45, impresiones: 2635, fullColor: 1610, negro: 1025 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "EMAMANI", total: 1470, copias: 195, impresiones: 1275, fullColor: 1095, negro: 180 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "RMEZA", total: 1440, copias: 0, impresiones: 1440, fullColor: 1205, negro: 235 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "DPENA", total: 890, copias: 85, impresiones: 805, fullColor: 640, negro: 165 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "JCHURATA", total: 295, copias: 0, impresiones: 295, fullColor: 240, negro: 55 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "HANCASI", total: 190, copias: 5, impresiones: 185, fullColor: 155, negro: 30 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "MCONDORI", total: 200, copias: 20, impresiones: 180, fullColor: 65, negro: 115 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "RBEJARANO", total: 180, copias: 2, impresiones: 178, fullColor: 158, negro: 20 },
  { impresora: "Konica C454", mes: "ABRIL", usuario: "JZEVALLOS", total: 9, copias: 1, impresiones: 8, fullColor: 6, negro: 2 },

  // Konica C454 - Marzo
  { impresora: "Konica C454", mes: "MARZO", usuario: "MREYES", total: 15200, copias: 1030, impresiones: 14170, fullColor: 10910, negro: 3260 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "IAPAZA", total: 11850, copias: 330, impresiones: 11520, fullColor: 10340, negro: 1180 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "GYACO", total: 9010, copias: 215, impresiones: 8795, fullColor: 6980, negro: 1815 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "RTICONA", total: 6450, copias: 6450, impresiones: 0, fullColor: 0, negro: 0 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "NARCE", total: 5340, copias: 30, impresiones: 5310, fullColor: 4320, negro: 990 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "MAPAZA", total: 4620, copias: 50, impresiones: 4570, fullColor: 4430, negro: 140 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "AQUINTANILLA", total: 3950, copias: 280, impresiones: 3670, fullColor: 3220, negro: 450 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "PCALCINA", total: 3010, copias: 92, impresiones: 2918, fullColor: 2510, negro: 408 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "MHUERTA", total: 2710, copias: 52, impresiones: 2658, fullColor: 1660, negro: 998 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "AANAMPA", total: 2380, copias: 33, impresiones: 2347, fullColor: 2130, negro: 217 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "EMAMANI", total: 1500, copias: 200, impresiones: 1300, fullColor: 1100, negro: 200 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "RMEZA", total: 1470, copias: 0, impresiones: 1470, fullColor: 1220, negro: 250 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "DPENA", total: 880, copias: 80, impresiones: 800, fullColor: 630, negro: 170 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "JCHURATA", total: 310, copias: 0, impresiones: 310, fullColor: 260, negro: 50 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "HANCASI", total: 195, copias: 3, impresiones: 192, fullColor: 160, negro: 32 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "MCONDORI", total: 190, copias: 25, impresiones: 165, fullColor: 55, negro: 110 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "RBEJARANO", total: 160, copias: 2, impresiones: 158, fullColor: 140, negro: 18 },
  { impresora: "Konica C454", mes: "MARZO", usuario: "JZEVALLOS", total: 8, copias: 1, impresiones: 7, fullColor: 5, negro: 2 },

  // Xerox C7125 - Mayo
  { impresora: "Xerox C7125", mes: "MAYO", usuario: "MAPAZA", total: 9372, copias: 469, impresiones: 8903, fullColor: 7029, negro: 2343 },
  { impresora: "Xerox C7125", mes: "MAYO", usuario: "CVELARDE", total: 6600, copias: 330, impresiones: 6270, fullColor: 4950, negro: 1650 },
  { impresora: "Xerox C7125", mes: "MAYO", usuario: "CVILLANUEVA", total: 3696, copias: 185, impresiones: 3511, fullColor: 2772, negro: 924 },
  { impresora: "Xerox C7125", mes: "MAYO", usuario: "YMEDINA", total: 2112, copias: 106, impresiones: 2006, fullColor: 1584, negro: 528 },
  { impresora: "Xerox C7125", mes: "MAYO", usuario: "WLAZO", total: 1320, copias: 66, impresiones: 1254, fullColor: 990, negro: 330 },
  { impresora: "Xerox C7125", mes: "MAYO", usuario: "KTICONA", total: 660, copias: 33, impresiones: 627, fullColor: 495, negro: 165 },
  { impresora: "Xerox C7125", mes: "MAYO", usuario: "AMOLINA", total: 528, copias: 27, impresiones: 501, fullColor: 396, negro: 132 },
  { impresora: "Xerox C7125", mes: "MAYO", usuario: "LCARPIO", total: 264, copias: 14, impresiones: 250, fullColor: 198, negro: 66 },

  // Xerox C7125 - Abril
 { impresora: "Xerox C7125", mes: "ABRIL", usuario: "MAPAZA", total: 9180, copias: 455, impresiones: 8725, fullColor: 6890, negro: 2360 },
 { impresora: "Xerox C7125", mes: "ABRIL", usuario: "CVELARDE", total: 6410, copias: 320, impresiones: 6090, fullColor: 4800, negro: 1620 },
 { impresora: "Xerox C7125", mes: "ABRIL", usuario: "CVILLANUEVA", total: 3810, copias: 192, impresiones: 3618, fullColor: 2840, negro: 930 },
 { impresora: "Xerox C7125", mes: "ABRIL", usuario: "YMEDINA", total: 2240, copias: 112, impresiones: 2128, fullColor: 1650, negro: 478 },
 { impresora: "Xerox C7125", mes: "ABRIL", usuario: "WLAZO", total: 1275, copias: 64, impresiones: 1211, fullColor: 960, negro: 251 },
 { impresora: "Xerox C7125", mes: "ABRIL", usuario: "KTICONA", total: 690, copias: 35, impresiones: 655, fullColor: 510, negro: 145 },
 { impresora: "Xerox C7125", mes: "ABRIL", usuario: "AMOLINA", total: 550, copias: 28, impresiones: 522, fullColor: 408, negro: 114 },
 { impresora: "Xerox C7125", mes: "ABRIL", usuario: "LCARPIO", total: 278, copias: 13, impresiones: 265, fullColor: 200, negro: 65 },


  // Xerox C7125 - Marzo
  { impresora: "Xerox C7125", mes: "MARZO", usuario: "MAPAZA", total: 8946, copias: 448, impresiones: 8498, fullColor: 6709, negro: 2237 },
  { impresora: "Xerox C7125", mes: "MARZO", usuario: "CVELARDE", total: 6300, copias: 315, impresiones: 5985, fullColor: 4725, negro: 1575 },
  { impresora: "Xerox C7125", mes: "MARZO", usuario: "CVILLANUEVA", total: 3528, copias: 177, impresiones: 3351, fullColor: 2646, negro: 882 },
  { impresora: "Xerox C7125", mes: "MARZO", usuario: "YMEDINA", total: 2016, copias: 101, impresiones: 1915, fullColor: 1512, negro: 504 },
  { impresora: "Xerox C7125", mes: "MARZO", usuario: "WLAZO", total: 1260, copias: 63, impresiones: 1197, fullColor: 945, negro: 315 },
  { impresora: "Xerox C7125", mes: "MARZO", usuario: "KTICONA", total: 630, copias: 32, impresiones: 598, fullColor: 472, negro: 158 },
  { impresora: "Xerox C7125", mes: "MARZO", usuario: "AMOLINA", total: 504, copias: 26, impresiones: 478, fullColor: 378, negro: 126 },
  { impresora: "Xerox C7125", mes: "MARZO", usuario: "LCARPIO", total: 252, copias: 13, impresiones: 239, fullColor: 189, negro: 63 },
];

export const getKonicaData = () => printerData.filter(item => item.impresora === "Konica C454");
export const getXeroxData = () => printerData.filter(item => item.impresora === "Xerox C7125");

export const getTrimestralData = (impresora: string) => {
  return printerData.filter(item => item.impresora === impresora);
};

export const getMensualTotals = (impresora: string) => {
  const data = printerData.filter(item => item.impresora === impresora);
  const monthlyTotals = data.reduce((acc: any, item) => {
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
  const userTotals = data.reduce((acc: any, item) => {
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
