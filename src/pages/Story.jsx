export const Story = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Contáctanos</h1>
      <p>¿Tienes alguna pregunta? ¡Envíanos un mensaje!</p>
      <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input type="text" placeholder="Tu nombre" style={{ padding: "8px" }} />
        <input
          type="email"
          placeholder="Tu correo"
          style={{ padding: "8px" }}
        />
        <textarea
          placeholder="Tu mensaje"
          rows="4"
          style={{ padding: "8px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
          }}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};
