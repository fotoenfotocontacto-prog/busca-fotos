const express = require("express")
const multer = require("multer")

const app = express()
const upload = multer()

app.post("/buscar", upload.single("selfie"), (req,res)=>{

console.log("Selfie recebida")

res.json({
mensagem:"selfie recebida com sucesso"
})

})

app.listen(3000, ()=>{
console.log("Servidor rodando")
})
