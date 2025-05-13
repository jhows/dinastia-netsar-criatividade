
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Image, Link, MessageSquare } from "lucide-react";

const creativesData = [
  {
    id: 1,
    name: "Vídeo Depoimento João",
    ctr: 4.8,
    conversionRate: 12.5,
    performance: 92,
    copy: "\"Este curso transformou minha carreira completamente! Em apenas 3 meses, consegui um aumento de 40% no salário.\"",
    cta: "Inscreva-se Agora",
    thumbnailUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    type: "video",
  },
  {
    id: 2,
    name: "Carrossel Resultados",
    ctr: 3.2,
    conversionRate: 8.3,
    performance: 78,
    copy: "Veja os resultados reais dos nossos alunos. Média de aumento salarial de 35% após concluir o curso.",
    cta: "Ver Resultados",
    thumbnailUrl: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    type: "carousel",
  },
  {
    id: 3,
    name: "Imagem Estática Promo",
    ctr: 2.1,
    conversionRate: 5.8,
    performance: 65,
    copy: "PROMOÇÃO LIMITADA: 50% OFF em todos os cursos até sexta-feira. Não perca essa oportunidade!",
    cta: "Aproveitar Desconto",
    thumbnailUrl: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    type: "image",
  },
  {
    id: 4,
    name: "Vídeo Tutorial Rápido",
    ctr: 3.9,
    conversionRate: 9.6,
    performance: 84,
    copy: "Aprenda essa técnica poderosa de Excel em apenas 3 minutos. Economize horas do seu trabalho diário!",
    cta: "Assistir Tutorial Completo",
    thumbnailUrl: "https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjB0dXRvcmlhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    type: "video",
  },
];

export function CampaignPerformance() {
  return (
    <div className="space-y-6">
      {creativesData.map((creative) => (
        <div key={creative.id} className="space-y-3 pb-4 border-b border-border last:border-0">
          <div className="flex gap-3">
            <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-muted">
              <img 
                src={creative.thumbnailUrl} 
                alt={creative.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{creative.name}</h4>
                  <div className="flex items-center gap-1 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {creative.type === "video" && <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Vídeo</Badge>}
                      {creative.type === "image" && <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Imagem</Badge>}
                      {creative.type === "carousel" && <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Carrossel</Badge>}
                    </Badge>
                  </div>
                </div>
                <span className="text-sm font-bold">{creative.performance}%</span>
              </div>
            </div>
          </div>
          
          <div className="mt-2 grid grid-cols-2 gap-2">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MessageSquare className="h-3 w-3" />
              <span className="line-clamp-2">{creative.copy}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Link className="h-3 w-3" />
              <span>{creative.cta}</span>
            </div>
          </div>
          
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>CTR: {creative.ctr}%</span>
            <span>Taxa Conv: {creative.conversionRate}%</span>
          </div>
          <Progress 
            value={creative.performance} 
            className="h-2"
          />
        </div>
      ))}
    </div>
  );
}
