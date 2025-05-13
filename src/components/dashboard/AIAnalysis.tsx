
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, TrendingUp } from "lucide-react";

export function AIAnalysis() {
  return (
    <Tabs defaultValue="analista" className="space-y-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="analista">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span>Analista</span>
          </div>
        </TabsTrigger>
        <TabsTrigger value="gestor">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span>Gestor</span>
          </div>
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="analista" className="space-y-4">
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Análise de performance:</span> Os anúncios 
            de vídeo estão tendo melhor desempenho que imagens estáticas, com CTR 
            médio 40% maior.
          </p>
          <p>
            <span className="font-semibold">Oportunidade:</span> Três campanhas 
            precisam de ajustes nos orçamentos para melhor escala, especialmente 
            a campanha "Lead Magnet Programação".
          </p>
          <p>
            <span className="font-semibold">Criativos:</span> O "Vídeo Depoimento João" 
            é o criativo com melhor performance. Recomendo produzir mais conteúdos 
            com depoimentos.
          </p>
        </div>
      </TabsContent>
      
      <TabsContent value="gestor" className="space-y-4">
        <div className="space-y-2 text-sm">
          <p>
            <span className="font-semibold">Visão geral:</span> O ROI apresentou 
            crescimento de 23% neste mês, indicando bom retorno dos investimentos em 
            marketing.
          </p>
          <p>
            <span className="font-semibold">Recomendação:</span> Aumentar o orçamento 
            em 15% para as campanhas de vídeo com foco em conversão, que estão 
            mostrando ROAS acima de 3.0.
          </p>
          <p>
            <span className="font-semibold">Projeção:</span> Mantendo a estratégia atual, 
            podemos esperar um aumento de 30% nas vendas no próximo trimestre, desde 
            que continue o investimento em criativos de alta performance.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
