import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-5xl font-extrabold text-red-500">
        404 - Halaman Tidak Ditemukan
      </h2>
      <p className="text-xl">Maaf, halaman yang Anda cari tidak ada.</p>
      <Link
        href="/"
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Kembali ke Beranda
      </Link>
    </main>
  );
}
