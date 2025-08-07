import { create } from 'zustand';

interface ServiceStore {
  selectedService: string | null;
  setSelectedService: (service: string | null) => void;
}

export const useServiceStore = create<ServiceStore>((set) => ({
  selectedService: null,
  setSelectedService: (service: string | null) => set({ selectedService: service }),
}));
