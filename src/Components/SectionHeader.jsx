export function SectionHeader({ title, className }) {
  return (
    <div className={className="text-center space-y-2"}>
      <h2 className="text-3xl font-semibold tracking-tight text-blue-600">
        {title}
      </h2>
      <div className="w-20 h-1 bg-blue-200 mx-auto rounded-full" />
    </div>
  );
}