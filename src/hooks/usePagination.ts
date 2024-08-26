import { TAnyFunc, withResolvers } from '@cmtlyt/base';
import { useRef } from 'react';

interface PageInfo {
  loading: boolean;
  page: number;
  pageSize: number;
}

interface Handlers<
  R,
  F extends TAnyFunc,
  Params = Parameters<F>[0],
  Arg = Params & { page: number; pageSize: number },
> {
  paramsHandler?: (params: Arg) => Params;
  resultHandler?: (result: ReturnType<F>) => R;
}

export function usePagination<
  R extends ReturnType<F>,
  F extends TAnyFunc,
  Params = Parameters<F>[0],
  Return = R extends Promise<infer U> ? U : R,
>(
  fetchFunc: F,
  handlers?: Handlers<Return, F>,
): [(params: Params) => Promise<Return>, (newPageInfo: Partial<PageInfo>) => void] {
  const { paramsHandler = (_: any) => _, resultHandler = (_: any) => _ } = handlers || {};

  const promiseRef = useRef<Promise<any>>(Promise.resolve());
  const pageInfo = useRef<PageInfo>({
    loading: false,
    page: 1,
    pageSize: 10,
  });

  return [
    async (params) => {
      if (pageInfo.current.loading) {
        return promiseRef.current;
      }

      const { promise, resolve, reject } = withResolvers<Return>();

      promiseRef.current = promise;
      pageInfo.current.loading = true;

      fetchFunc(
        paramsHandler({
          ...params,
          page: pageInfo.current.page,
          pageSize: pageInfo.current.pageSize,
        }),
      ).then((res: any) => {
        pageInfo.current.loading = false;
        pageInfo.current.page += 1;

        resolve(resultHandler(res));
      }, reject);

      return promise;
    },
    (newPageInfo: Partial<PageInfo>) => {
      pageInfo.current = { ...pageInfo.current, ...newPageInfo };
    },
  ];
}
