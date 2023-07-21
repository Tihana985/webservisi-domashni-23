exports.functionA = async (req, res) => {
    try{
        res.status(200).json({
            status: "success",
            data: "Tihana O. Chingarova"
        });
    }
    catch(err){
        return console.log(err);
    }
}