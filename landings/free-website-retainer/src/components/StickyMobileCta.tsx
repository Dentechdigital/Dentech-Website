export default function StickyMobileCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/90 bg-[#fafaf9]/95 p-3 shadow-[0_-8px_30px_rgba(15,23,42,0.08)] backdrop-blur-md md:hidden"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <a
        href="#apply"
        className="block w-full rounded-full bg-blue-600 py-3.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      >
        Request this offer
      </a>
    </div>
  );
}
