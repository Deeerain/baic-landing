import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
    state: () => ({
        active: false,
    }),
    getters: {
        isActive: (state) => state.active,
    },
    actions: {
        toggle() {
            this.active = !this.active
        }
    }
})