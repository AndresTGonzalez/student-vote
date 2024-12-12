export default function HomeAdminPage() {
  return (
    <div className="p-5 flex flex-col ">
      <div className="flex flex-col">
        <h1 className="text-lg">Bienvenido al Panel de Administrador</h1>
        <h2 className="text-sm font-light">
          Elecciones estudiantiles 2024 - 2025
        </h2>
      </div>
      <div className="flex flex-col py-8">
        <div className="flex flex-row">
          <div className="flex flex-col gap-5">
            <div className="p-6 flex flex-col gap-2 bg-white rounded-2xl shadow-xl">
              <span className="tracking-tight leading-5 inline whitespace-nowrap">
                Estudiantes pendientes de voto
              </span>
              <span className="text-4xl font-bold">500</span>
            </div>
            <div className="p-6 flex flex-col gap-2 bg-white rounded-2xl shadow-xl">
              <span className="tracking-tight leading-5 inline whitespace-nowrap">
                Estudiantes pendientes de voto
              </span>
              <span className="text-4xl font-bold">500</span>
            </div>
          </div>
          <div className="h-5 w-full"></div>
        </div>
      </div>
    </div>
  );
}
