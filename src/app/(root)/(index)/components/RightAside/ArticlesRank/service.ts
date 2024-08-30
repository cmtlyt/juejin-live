'use server';

export interface RankInfo {
  id: number;
  rank: number;
  title: string;
}

function mock(data: RankInfo[]) {
  return data.slice(0, 5);
}

export async function loadData(exposedIds: string = ''): Promise<RankInfo[]> {
  const startId = exposedIds.split(',').filter(Boolean).length;

  return mock(
    Array.from({ length: ~~(Math.random() * 5 + 5) }).map((_, idx) => {
      return {
        id: idx + startId,
        rank: idx + startId + 1,
        title: 'Rspack 1.0 发布：重新定义 webpack 的未来',
      };
    }),
  );
}
