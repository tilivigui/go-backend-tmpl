
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { 
  BarChart3,
  PieChart,
  LineChart,
  Menu
} from "lucide-react";

interface AppSidebarProps {
  activeReport: string;
  setActiveReport: (report: string) => void;
}

const menuItems = [
  {
    id: 'overview',
    title: "Resumen General",
    icon: BarChart3,
  },
  {
    id: 'trimestral-konica',
    title: "Trimestral Konica C454",
    icon: BarChart3,
  },
  {
    id: 'trimestral-xerox',
    title: "Trimestral Xerox C7125",
    icon: BarChart3,
  },
  {
    id: 'mensual-konica',
    title: "Mensual Konica C454",
    icon: BarChart3,
  },
  {
    id: 'mensual-xerox',
    title: "Mensual Xerox C7125",
    icon: BarChart3,
  },
  {
    id: 'top-konica',
    title: "Top 5 Usuarios Konica",
    icon: PieChart,
  },
  {
    id: 'top-xerox',
    title: "Top 3 Usuarios Xerox",
    icon: PieChart,
  },
  {
    id: 'comparative',
    title: "Comparativo Impresoras",
    icon: BarChart3,
  },
  {
    id: 'chart-konica',
    title: "Gráfica Trimestral Konica",
    icon: LineChart,
  },
  {
    id: 'chart-xerox',
    title: "Gráfica Trimestral Xerox",
    icon: LineChart,
  },
];

export function AppSidebar({ activeReport, setActiveReport }: AppSidebarProps) {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">Sistema de Reportes</h2>
        <p className="text-sm text-gray-600">Konica C454 & Xerox C7125</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Reportes Disponibles</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton 
                    onClick={() => setActiveReport(item.id)}
                    isActive={activeReport === item.id}
                    className="w-full justify-start"
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
