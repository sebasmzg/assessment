export const FormTitle = ({ title, subtitle, icon }: { title?: string, subtitle?: string, icon?: React.ReactElement<SVGElement> }) => {
  return (
    <div className="flex flex-col justify-center">
      <span>{icon}</span>
      <h2 className="text-3xl text-[#7692ff] font-bold text-center">{title}</h2>
      <p className="text-sm text-center text-slate-500">{subtitle}</p>
    </div>
  );
};
