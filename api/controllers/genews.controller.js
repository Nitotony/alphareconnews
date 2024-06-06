import Userpref from "../models/userpref.js";

export const gennews= async (req,res,next)=>{
    console.log("frist boom");
    try{
      const {country}=req.body;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&language=en&apiKey=ae140265671f4423b4c771e27fb20e3f`;

    var req = new Request(url);

   await fetch(req).then(function (response) {
      return response.json();
    }).then((data)=>{
      
       res.send(JSON.stringify(data));
    });

   
    
   
    console.log("second boom");

    }catch(error){
      next(error);

    }
    
}
export const  business= async (req, res, next) => {
  console.log("frist boom");
  try {
    const { country } = req.body;
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=business&language=en&apiKey=ae140265671f4423b4c771e27fb20e3f`;

    var req = new Request(url);

    await fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        res.send(JSON.stringify(data));
      });

    console.log("second boom");
  } catch (error) {
    next(error);
  }
};

export const technology = async (req, res, next) => {
  console.log("frist boom");
  try {
    
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=technology&language=en&apiKey=ae140265671f4423b4c771e27fb20e3f`;

    var req = new Request(url);

    await fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        res.send(JSON.stringify(data));
      });

    console.log("second boom");
  } catch (error) {
    next(error);
  }
};





export const specificnews = async (req, res, next) => {
  console.log("frist boom");
  try {
    const { texted, date } = req.body;
    const url = `https://newsapi.org/v2/everything?q=${texted}&from=${date}&language=en&apiKey=66b4af30beba434ab0b3d3e1f0e82cc2`;

    var req = new Request(url);

    await fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then((data) => {
        res.send(JSON.stringify(data));
      });

    console.log("second boom");
  } catch (error) {
    next(error);
  }
};




export const saved= async(req,res)=>{
  const {id,description,title,image,link}=req.body;

  try {
    const savednews = Userpref({
      userid: id,
      title: title,
      description: description,
      image: image,
      link:link,
    });
    await savednews.save();
    
    console.log("success");
  }catch(error){
    console.log(error);
  }
}



// export const savedfetch=async(req,res)=>{

// }