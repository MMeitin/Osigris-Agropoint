const URL =
  "https://3001-mmeitin-osigrisagropoin-ud5t2tj9qb1.ws-eu95.gitpod.io/api/user";
  const URLCROP =
  "https://3001-mmeitin-osigrisagropoin-ud5t2tj9qb1.ws-eu96.gitpod.io/api/crop";

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

export const addFarm = async (newFarm) => {
  const raw = JSON.stringify(newFarm)
  try{
    console.log("Farm created on service", newFarm);
    const resp = await fetch(`${URLCROP}/addFarm`,{
      method : 'POST',
      headers : {"Content-Type": "application/json"},
      body : raw,
      redirect: "follow"
    });
    return await resp.json();
  } catch (err) {
    console.log("Error al crear el nuevo campo", err)
  }
}