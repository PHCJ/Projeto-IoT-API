const sql = require("./db.js");

class DatabasePostgres {
    async listar() {
        const conjDados = await sql`select * from sensores`;
        return conjDados;
    }
    async gravar(dados) {
        const { temperatura, umidade } = dados;
        await sql`insert into sensores (temperatura, umidade) values (${temperatura}, ${umidade})`.then(()=>{
            console.log(`Dados gravados com sucesso: temperatura: ${temperatura}, umidade: ${umidade}`);
        })
    }
}
module.exports = DatabasePostgres;