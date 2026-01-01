import { create } from "zustand";

interface FHEState {
  isInitialized: boolean;
  setIsInitialized: (isInitialized: boolean) => void;
  balanceUpdateTrigger: number;
  triggerBalanceUpdate: () => void;
}

export const useFHEStore = create<FHEState>((set) => ({
  isInitialized: false,
  setIsInitialized: (isInitialized: boolean) => set({ isInitialized }),
  balanceUpdateTrigger: 0,
  triggerBalanceUpdate: () =>
    set((state) => ({
      balanceUpdateTrigger: state.balanceUpdateTrigger + 1,
    })),
}));
