export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Detail Produk</h1>
      <p className="mt-4 text-lg">
        Anda sedang melihat detail untuk produk dengan ID:{" "}
        <span className="font-bold text-blue-500">{id}</span>
      </p>
    </main>
  );
}
