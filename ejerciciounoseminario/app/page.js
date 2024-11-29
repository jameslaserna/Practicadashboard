import CardAmarrilo from "./components/CardAmarrilo";
import CardChat from "./components/CardChat";
import CardDolar from "./components/CardDolar";
import CardMasterCard from "./components/CardMasterCard";
import CardMiniVideo from "./components/CardMiniVideo";
import CardProfile from "./components/CardProfile";
import CardSearch from "./components/CardSearch";
import CardStadistica from "./components/CardStadistica";
import CardVideo from "./components/CardVideo";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <div className="flex bg-gray-200 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 p-2 bg-black">
        {/* Primera fila */}
        <div className="grid grid-cols-1 gap-2 ml-10">
        {/* Primera Fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {/* Primera Tarjeta: Video */}
          <div className="flex justify-center items-center">
            <CardVideo />
          </div>
          {/* Segunda Tarjeta: Perfil */}
          <div className="flex justify-center items-center">
            <CardProfile />
          </div>
          {/* Tercera Tarjeta: Mini Video */}
          <div className="flex justify-center items-center">
            <CardMiniVideo />
          </div>
        </div>

        {/* Segunda Fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {/* Primera Tarjeta: CardMasterCard */}
          <div className="flex justify-center items-center">
            <CardMasterCard />
          </div>
          {/* Segunda Tarjeta: CardStadistica */}
          <div className="flex justify-center items-center">
            <CardStadistica />
          </div>
          {/* Tercera Tarjeta: CardDolar */}
          <div className="flex justify-center items-center">
            <CardDolar />
          </div>
        </div>

        {/* Tercera Fila */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {/* Primera Tarjeta: CardSearch */}
          <div className="flex justify-center items-center">
            <CardSearch />
          </div>
          {/* Segunda Tarjeta: CardAmarrilo */}
          <div className="flex justify-center items-center">
            <CardAmarrilo />
          </div>
          {/* Tercera Tarjeta: CardChat */}
          <div className="flex justify-center items-center">
            <CardChat />
          </div>
        </div>
      </div>


      </div>
    </div>
  );
}
