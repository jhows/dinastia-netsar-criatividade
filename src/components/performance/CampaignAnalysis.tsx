
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MessageSquare, TrendingUp } from "lucide-react";

export function CampaignAnalysis() {
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
        <div className="space-y-3 text-sm">
          <p>
            <span className="font-semibold">Análise de performance:</span> Os criativos 
            de vídeo estão superando os demais formatos, com o "Vídeo Depoimento João" 
            liderando em CTR e taxa de conversão.
          </p>
          <p>
            <span className="font-semibold">Oportunidade:</span> A campanha "Black Friday 2023" 
            tem os melhores resultados de conversão. Recomendo aumentar o orçamento em 30% 
            para maximizar os resultados enquanto estiver ativa.
          </p>
          <p>
            <span className="font-semibold">Otimização:</span> A "Imagem Estática Promo" 
            apresenta baixo desempenho. Sugiro refinar o público-alvo e testar variações 
            de copy com enfoque em benefícios mais diretos.
          </p>
        </div>
      </TabsContent>
      
      <TabsContent value="gestor" className="space-y-4">
        <div className="space-y-3 text-sm">
          <p>
            <span className="font-semibold">Visão estratégica:</span> Baseado nos dados 
            da última semana, recomendo um rebalanceamento de 20% do orçamento de imagens 
            estáticas para vídeos e carrosséis.
          </p>
          <p>
            <span className="font-semibold">ROI projetado:</span> Se implementadas as 
            recomendações de otimização, a projeção é de um aumento de 15-18% no ROAS das 
            campanhas ativas no próximo ciclo.
          </p>
          <p>
            <span className="font-semibold">Planejamento:</span> Considerando as tendências 
            sazonais, sugiro iniciar o planejamento da campanha de fim de ano para incrementar 
            o inventário de criativos de vídeo e carrossel, formatos com melhor desempenho.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
}
