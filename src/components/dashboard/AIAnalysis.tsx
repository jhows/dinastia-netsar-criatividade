
import { UserRound } from "lucide-react";

export function AIAnalysis() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Seção do Analista */}
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
        <div className="flex items-center mb-3">
          <UserRound className="h-10 w-10 mr-3 text-blue-500 p-1 bg-blue-100 dark:bg-blue-900 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Análise do Analista</h3>
            <p className="text-xs text-muted-foreground">Insights detalhados</p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <span className="font-semibold text-gray-800 dark:text-gray-100">Análise de performance:</span> Os anúncios 
            de vídeo estão tendo melhor desempenho que imagens estáticas, com CTR 
            médio 40% maior.
          </p>
          <p>
            <span className="font-semibold text-gray-800 dark:text-gray-100">Oportunidade:</span> Três campanhas 
            precisam de ajustes nos orçamentos para melhor escala, especialmente 
            a campanha "Lead Magnet Programação".
          </p>
          <p>
            <span className="font-semibold text-gray-800 dark:text-gray-100">Criativos:</span> O "Vídeo Depoimento João" 
            é o criativo com melhor performance. Recomendo produzir mais conteúdos 
            com depoimentos.
          </p>
        </div>
      </div>

      {/* Seção do Gestor */}
      <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800">
        <div className="flex items-center mb-3">
          <UserRound className="h-10 w-10 mr-3 text-green-500 p-1 bg-green-100 dark:bg-green-900 rounded-full" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Análise do Gestor</h3>
            <p className="text-xs text-muted-foreground">Visão estratégica</p>
          </div>
        </div>
        <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
          <p>
            <span className="font-semibold text-gray-800 dark:text-gray-100">Visão geral:</span> O ROI apresentou 
            crescimento de 23% neste mês, indicando bom retorno dos investimentos em 
            marketing.
          </p>
          <p>
            <span className="font-semibold text-gray-800 dark:text-gray-100">Recomendação:</span> Aumentar o orçamento 
            em 15% para as campanhas de vídeo com foco em conversão, que estão 
            mostrando ROAS acima de 3.0.
          </p>
          <p>
            <span className="font-semibold text-gray-800 dark:text-gray-100">Projeção:</span> Mantendo a estratégia atual, 
            podemos esperar um aumento de 30% nas vendas no próximo trimestre, desde 
            que continue o investimento em criativos de alta performance.
          </p>
        </div>
      </div>
    </div>
  );
}
