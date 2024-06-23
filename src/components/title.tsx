interface ServiceTitleProps {
  title: string;
  description: string;
}

export function ServiceTitle({ title, description }: ServiceTitleProps) {
  return (
    <div className="bg-slate-50">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-lg">{description}</p>
    </div>
  );
}
