module.exports={
    async indexedDB(request, response){
        const ong_id = request.header.authorization;

        const incidents=await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        return response.json(incidents); 
    }
}