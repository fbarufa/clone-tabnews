function Home() {
  return (
    <div
      style={{
        backgroundColor: "#000000",
        color: "white",
        padding: "20px",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center", // Corrected for vertical centering
        justifyContent: "center", // Added for horizontal centering
      }}
    >
      <h1 style={{ fontSize: '96px' }}>
        Oi Léo, estou com saudade de você <br />
        Vai Corinthians!
      </h1>
    </div>
  );
}

export default Home;
