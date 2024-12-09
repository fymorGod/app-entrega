
export interface Address {
  LOGRADOURO: string;
  RUA: string;
  NUM_CASA: string;
  COMPLEMENTO: string;
  BAIRRO: string;
  MUNICIPIO: string;
  UF: string;
  CEP: string;
}

export interface Product {
  PRODUTO: string;
  DESCRICAO: string;
  EAN: string;
  QTDE: string;
  CATEGORIA_COD: string;
  CATEGORIA_DESC: string;
  PRODUTO_EMB: string;
  EMB_QTD_TOTAL: string;
  LOTE: string | null;
  MOTIVO: string | null;
  ENTREGUE: string;
  QTDNAOENTREGUE: string;
  EMB_QTD_NAO_ENT: string;
  OBS: string;
}

export interface GroupedByCpf {
  cpf: string; 
  vendas: Venda[]; 
};

export interface Img {
  nome: string;
  img: string;
}

export interface Venda {
  id: string;
  romaneio: string;
  store: string;
  store_digitation: string;
  invoice: string;
  issue_date: string;
  dav: string;
  preinvoice: string;
  client_name: string;
  client_cgc: string;
  client_phone: string;
  travel_date: string;
  shift: string;
  carrier: string;
  status: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  obs: string | null;
  d_e_l_e_t_: number;
  i_m_p_r_e_s_s_: number;
  audit_id: string | null;
  t_r_a_v_e_l_: number;
  travel_at: string;
  travel_up: string;
  team_id: string;
  owner_id: string;
  coordenadas: string;
  travel_order: number;
  delivery_type: string;
  delivery_price: number;
  type_origin: number;
  weight: number;
  cubage: number;
  square_meters: number;
  finance_total_liq: number;
  neighborhood: string;
  imgs: Img[];
  address: Address;
  products: Product[];
}
