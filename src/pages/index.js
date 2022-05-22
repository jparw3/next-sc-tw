import Head from "next/head";
import { Tag } from "../../components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jparw | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex bg-[#0F1521] flex-col items-center justify-center min-h-screen py-2">
        <Tag isPurple rounded>
          Tailwind + Next + Styled Components
        </Tag>
      </main>
    </div>
  );
}
