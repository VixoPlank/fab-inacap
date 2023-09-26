const HeaderVideo = () => {
  return (
    <main>
      <video autoPlay loop muted className="w-full bg-cover">
        {/* <source src="https://designlab.uai.cl/assets/uploads/2020/06/video-escuela-fab-lab.mp4" /> */}
        <source src="/fab.mov" />
      </video>
    </main>
  );
};

export default HeaderVideo;
