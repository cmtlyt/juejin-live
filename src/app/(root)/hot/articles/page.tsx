interface PageParams {
  params: {
    id?: string;
  };
}

export default function Page({ params }: PageParams) {
  const { id } = params;

  return <main>{id}</main>;
}
