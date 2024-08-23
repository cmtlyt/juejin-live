export interface NotificationInfo {
  total: number;
}

export async function getNotificationInfo(): Promise<NotificationInfo> {
  return {
    total: Number(Math.random().toFixed(2).slice(2)),
  };
}
