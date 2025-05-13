
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer } from "@/components/dashboard/ChartContainer";
import { StatCard } from "@/components/dashboard/StatCard";
import { RecentCampaigns } from "@/components/dashboard/RecentCampaigns";
import { CampaignPerformance } from "@/components/dashboard/CampaignPerformance";
import { ArrowUp, ArrowDown, TrendingUp, MessageSquare } from "lucide-react"; // Added MessageSquare
import { AIAnalysis } from "@/components/dashboard/AIAnalysis";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Visão geral da performance das suas campanhas e robôs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard 
          title="Campanhas Ativas" 
          value="24" 
          change="+12%" 
          trend="up" 
          description="Últimos 30 dias"
        />
        <StatCard 
          title="CTR Médio" 
          value="3.2%" 
          change="-0.8%" 
          trend="down" 
          description="Comparado à última semana"
        />
        <StatCard 
          title="ROI Total" 
          value="R$ 12.480" 
          change="+23%" 
          trend="up" 
          description="Este mês"
        />
      </div>

      {/* Performance das Campanhas - Full Width */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Performance das Campanhas</span>
              <Tabs defaultValue="7dias">
                <TabsList>
                  <TabsTrigger value="7dias">7 dias</TabsTrigger>
                  <TabsTrigger value="30dias">30 dias</TabsTrigger>
                  <TabsTrigger value="90dias">90 dias</TabsTrigger>
                </TabsList>
              </Tabs>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer />
          </CardContent>
        </Card>
      </div>

      {/* Análise de IA - Full Width with Icons in Title */}
      <div className="grid grid-cols-1 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Análise de IA</span>
              <MessageSquare className="h-5 w-5 text-blue-500" aria-label="Ícone de Analista" />
              <TrendingUp className="h-5 w-5 text-green-500" aria-label="Ícone de Gestor" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AIAnalysis />
          </CardContent>
        </Card>
      </div>

      {/* Performance por Criativo first, then Campanhas Recentes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance por Criativo</CardTitle>
          </CardHeader>
          <CardContent>
            <CampaignPerformance />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Campanhas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentCampaigns />
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Index;
