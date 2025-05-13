
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Eye, MoreHorizontal, TrendingUp, TrendingDown, MessageSquare, Link } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const creatives = [
  {
    id: 1,
    name: "Vídeo Depoimento João",
    type: "video",
    campaign: "Black Friday 2023",
    ctr: 4.8,
    cpc: 13.25,
    conversionRate: 12.5,
    status: "active",
    trend: "up",
    copy: "\"Este curso transformou minha carreira completamente! Em apenas 3 meses, consegui um aumento de 40% no salário.\"",
    cta: "Inscreva-se Agora",
    thumbnailUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: 2,
    name: "Carrossel Resultados",
    type: "carousel",
    campaign: "Black Friday 2023",
    ctr: 3.2,
    cpc: 15.10,
    conversionRate: 8.3,
    status: "active",
    trend: "up",
    copy: "Veja os resultados reais dos nossos alunos. Média de aumento salarial de 35% após concluir o curso.",
    cta: "Ver Resultados",
    thumbnailUrl: "https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyb3VzZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: 3,
    name: "Imagem Estática Promo",
    type: "image",
    campaign: "Lead Magnet Programação",
    ctr: 2.1,
    cpc: 18.75,
    conversionRate: 5.8,
    status: "paused",
    trend: "down",
    copy: "PROMOÇÃO LIMITADA: 50% OFF em todos os cursos até sexta-feira. Não perca essa oportunidade!",
    cta: "Aproveitar Desconto",
    thumbnailUrl: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
  {
    id: 4,
    name: "Vídeo Tutorial Rápido",
    type: "video",
    campaign: "Lançamento Curso Excel",
    ctr: 3.9,
    cpc: 14.30,
    conversionRate: 9.6,
    status: "active",
    trend: "down",
    copy: "Aprenda essa técnica poderosa de Excel em apenas 3 minutos. Economize horas do seu trabalho diário!",
    cta: "Assistir Tutorial Completo",
    thumbnailUrl: "https://images.unsplash.com/photo-1610552050890-fe99536c2615?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjB0dXRvcmlhbHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
  },
  {
    id: 5,
    name: "Imagem Destaque Curso",
    type: "image",
    campaign: "Lançamento Curso Excel",
    ctr: 3.5,
    cpc: 12.85,
    conversionRate: 7.2,
    status: "active",
    trend: "up",
    copy: "Domine o Excel e destaque-se no mercado de trabalho. Curso completo com certificado reconhecido.",
    cta: "Garantir Vaga",
    thumbnailUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZXhjZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
  },
];

export function CreativeTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Criativo</TableHead>
            <TableHead>Campanha</TableHead>
            <TableHead>Copy / CTA</TableHead>
            <TableHead className="text-right">CTR</TableHead>
            <TableHead className="text-right">CPC</TableHead>
            <TableHead className="text-right">Conv. %</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {creatives.map((creative) => (
            <TableRow key={creative.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-md overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src={creative.thumbnailUrl} 
                      alt={creative.name}
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  <div>
                    <span className="font-medium">{creative.name}</span>
                    <Badge variant="outline" className="ml-2">
                      {creative.type === "video" && "Vídeo"}
                      {creative.type === "image" && "Imagem"}
                      {creative.type === "carousel" && "Carrossel"}
                    </Badge>
                  </div>
                </div>
              </TableCell>
              <TableCell>{creative.campaign}</TableCell>
              <TableCell>
                <div className="max-w-[240px]">
                  <div className="flex items-center gap-1 mb-1">
                    <MessageSquare className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs line-clamp-1">{creative.copy}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Link className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs font-medium">{creative.cta}</span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-1">
                  <span className="font-medium">{creative.ctr}%</span>
                  {creative.trend === "up" ? (
                    <TrendingUp className="h-3 w-3 text-green-600" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-600" />
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">R$ {creative.cpc}</TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col items-end">
                  <span>{creative.conversionRate}%</span>
                  <Progress 
                    value={creative.conversionRate * 8} 
                    className="h-1 w-16 mt-1"
                  />
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Badge
                  variant={creative.status === "active" ? "default" : "secondary"}
                >
                  {creative.status === "active" ? "Ativo" : "Pausado"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Detalhes
                    </DropdownMenuItem>
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem>Duplicar</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-600">Pausar</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
