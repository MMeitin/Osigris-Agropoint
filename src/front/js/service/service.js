export const URL =
  "https://3001-mmeitin-osigrisagropoin-li9ak5v9a8k.ws-eu96.gitpod.io/api/user";

const HEADERS = {
  "Content-Type": "application/json",
};

export const registerFarmer = async (newUser) => {
  const raw = JSON.stringify(newUser);
  try {
    console.log("in Create contact on service", newUser);
    const resp = await fetch(`${URL}/signup/farmer`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: raw,
      redirect: "follow",
    });
    return await resp.json();
  } catch (err) {
    console.log("Error al crear nuevo User_Farmer", err);
  }
};

export const loginUser = async (user) => {
  try{
    const res = await fetch(`${URL}/login`,{
      method: "POST",
      headers: HEADERS,
      body:JSON.stringify(user),
    }
    );
    const data = await res.json();
    
    localStorage.setItem("token", data.token)
    
    localStorage.setItem("role", data.role);
    return data.role
  }catch (err){
    console.log("ERROR LOGIN USER", err)
  }
}

export const getInfoUser = async () => {
  try{
    const res = await fetch(`${URL}`,{
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        ...HEADERS,
      },
      });
    const data = await res.json();
    
    return data 

  }catch (err){
    console.log("ERROR GET USER", err)
  }
}