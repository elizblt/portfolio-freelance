export default function StatusBadge() {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
      </span>
      <span className="text-sm font-medium text-slate-700">
        Disponible pour nouveaux projets
      </span>
    </span>
  );
}
