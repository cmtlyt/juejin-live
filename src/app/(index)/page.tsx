import { Tabbar } from './components/Tabbar';

export default function Home() {
  return (
    <section className="flex-1 overflow-y-auto">
      <Tabbar />
      <main className="h-[300vh]">main</main>
    </section>
  );
}
