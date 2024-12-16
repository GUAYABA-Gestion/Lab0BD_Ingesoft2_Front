import Link from "next/link";
const Tabs = () => {
    const tabs = ["Persona", "Vivienda", "Propiedad Vivienda", "Negocio"];
  
    return (
      <div className="hero">
        <div className="flex-1 pt-36 flex justify-center w-full">
          <div className="w-full max-w-[1440px]">
            <h1 className="hero__title text-center">
              Implementación de la BD de Lab0
            </h1>
            {/* Tabs */}
            <div className="flex justify-center space-x-4 my-6">
              {tabs.map((tab, idx) => (
                <Link key={idx} href={`/${tab.toLowerCase().replace(' ', '-')}`}>
                  <button className="px-6 py-2 rounded-full font-medium bg-emerald-600 text-black">
                    {tab}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Tabs