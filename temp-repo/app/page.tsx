export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className="max-w-3xl">
        <div className="text-6xl mb-6">🚀</div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">
          Xin chào, tôi là Silo
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Nhà phát triển & Người xây dựng không gian sáng tạo
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/blog"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            📝 Vào Blog
          </a>
        </div>
      </div>
    </div>
  );
}
