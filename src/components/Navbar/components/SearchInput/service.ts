export interface HistoryItem {
  id: number;
  title: string;
}

export async function clearData() {
  return Promise.resolve();
}

function mock(res: HistoryItem[]): HistoryItem[] {
  return res;
}

export async function loadData(): Promise<HistoryItem[]> {
  return mock(
    Array.from({ length: ~~(Math.random() * 10) }).map((_, id) => {
      return { id, title: `标题${id}` };
    }),
  );
}
