interface ServiceTitleProps {
  title: string;
  description: string;
}

export function ServiceTitle({ title, description }: ServiceTitleProps) {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <h1 className="text-xl font-bold mb-3">{title}</h1>
      <p className="text-sm">{description}</p>
    </div>
  );
}
