import Link from "next/link";

const CloudLogos = () => {
  const imgData = [
    {
      name: "logosEmpresas/iansa",
      url: "https://empresasiansa.cl/iansa-cero-k/",
    },
    { name: "logosEmpresas/vitafoods", url: "https://www.vitafoods.com/" },
    { name: "logosEmpresas/comfrut", url: "https://www.comfrut.com/" },
    { name: "logosEmpresas/rea", url: "https://www.rea.cl/" },
    { name: "logosEmpresas/sernatur", url: "https://www.sernatur.cl/" },
  ];
  return (
    <>
      {imgData.map((item, index) => (
        <Link
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          key={index}
        >
          <picture>
            <img
              src={`/${item.name}.webp`}
              alt={`logo-${item.name}`}
              className="w-52 aspect-auto sm:filter sm:grayscale sm:hover:filter-none sm:transition-all sm:duration-300"
            />
          </picture>
        </Link>
      ))}
    </>
  );
};

export default CloudLogos;
