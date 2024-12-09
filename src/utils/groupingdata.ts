import type { GroupedByCpf, Venda } from "../interfaces/intefaces";

export const organizeDataByCpf = (data: Venda[]): GroupedByCpf[] => {
    if (!Array.isArray(data)) {
      console.error("Expected an array, but got:", data);
      return [];
    }
  
    const groupedByCpf = data.reduce(
      (acc: Record<string, Venda[]>, sale: Venda) => {
        const cpf = sale.client_cgc; 
  
        if (!cpf) {
          console.warn("CPF inválido ou faltando:", sale);
          return acc; 
        }
  
        if (!acc[cpf]) {
          acc[cpf] = [];
        }
  
        acc[cpf].push(sale);
  
        return acc;
      },
      {} as Record<string, Venda[]>
    );
  
    return Object.entries(groupedByCpf).map(([cpf, vendas]) => ({
      cpf,
      vendas,
    }));
  };