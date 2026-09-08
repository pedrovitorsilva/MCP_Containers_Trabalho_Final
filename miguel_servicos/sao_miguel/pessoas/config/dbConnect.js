import mongoose from "mongoose";

// A string de conexao chega pelo docker-compose (environment: MONGODB_CONNECTION).
// O fallback existe apenas para execucao local fora do Docker.
const CONEXAO =
  process.env.MONGODB_CONNECTION || "mongodb://localhost:27017/mercadinho";

// O MongoDB costuma demorar alguns segundos a mais que as APIs para aceitar
// conexoes, entao tentamos algumas vezes antes de desistir.
async function connectToDatabase(tentativas = 10, esperaMs = 3000) {
  for (let tentativa = 1; tentativa <= tentativas; tentativa++) {
    try {
      await mongoose.connect(CONEXAO, { serverSelectionTimeoutMS: 5000 });
      return mongoose.connection;
    } catch (error) {
      console.error(
        `Tentativa ${tentativa}/${tentativas} de conexao com o MongoDB falhou: ${error.message}`,
      );
      if (tentativa === tentativas) {
        throw error;
      }
      await new Promise((resolve) => setTimeout(resolve, esperaMs));
    }
  }
}

export default connectToDatabase;
export { CONEXAO };
