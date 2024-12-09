
import { create } from 'zustand';
import type { GroupedByCpf } from '../interfaces/intefaces';

interface SalesStore {
    salesData: GroupedByCpf[] | null;
    setSalesData: (data: GroupedByCpf[]) => void;
}

export const useSalesStore = create<SalesStore>((set) => ({
    salesData: null,
    setSalesData: (data: GroupedByCpf[]) => set({ salesData: data }),
}));
