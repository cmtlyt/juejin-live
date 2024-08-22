import { gc } from '@cmtlyt/base';

interface IProps {
  className?: string;
}

export function SearchHistory(props: IProps) {
  const { className } = props;

  return (
    <section
      className={gc(['hidden', 'absolute left-0 right-0 top-full', 'shadow-border', className])}
    >
      <div className="border-b border-[#dfdfdf] border-solid">title</div>
      <div>content</div>
    </section>
  );
}
