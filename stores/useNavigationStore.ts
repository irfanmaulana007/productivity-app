import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type Navigation = 'home' | 'profile'

interface NavigationState {
    activeNavigation: Navigation
    isSideNavShow: boolean

    setActiveNavigation: (navigation: Navigation) => void
    setIsSideNavShow: (isShow: boolean) => void
    resetState: () => void
}

const useNavigationStore = create<NavigationState>()(
    persist(
        (set) => ({
            activeNavigation: 'home',
            isSideNavShow: false,
            setActiveNavigation: (navigation: Navigation) =>
                set((state) => ({ ...state, activeNavigation: navigation })),
            setIsSideNavShow: (isShow: boolean) =>
                set((state) => ({ ...state, isSideNavShow: isShow })),

            resetState: () =>
                set(() => ({
                    activeNavigation: 'home',
                    isSideNavShow: false,
                })),
        }),
        {
            name: 'navigation-store',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)

export default useNavigationStore
