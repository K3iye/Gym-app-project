import Camera from "../components/Camera";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold">
        JaryAI
      </h1>

      <p className="mb-6 text-lg">
        Form Checker Assistant
      </p>

      <Camera />
    </main>
  );
}