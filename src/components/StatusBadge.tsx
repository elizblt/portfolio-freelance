export default function StatusBadge() {
  return (
    <div className="flex items-center gap-2 mb-6">
      <span className="relative flex h-3 w-3">
        {/* Cercle d’animation (le "ping") */}
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

        {/* Point vert fixe au centre */}
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <span className="text-sm text-green-600 font-medium">
        Ouverte aux nouvelles opportunités
      </span>
    </div>
  );
}
