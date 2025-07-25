import { create } from 'zustand'
import { QueueItem, QueueManager } from '../utils/queue-manager'

interface QueueState {
  queue: QueueItem[]
  setQueue: (queue: QueueItem[]) => void
  queueManager: QueueManager | null
  setQueueManager: (manager: QueueManager) => void
}

export const useQueueStore = create<QueueState>((set) => ({
  queue: [],
  setQueue: (queue) => set({ queue }),
  queueManager: null,
  setQueueManager: (manager) => set({ queueManager: manager }),
}))
