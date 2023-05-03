const URL =
  "https://3001-mmeitin-osigrisagropoin-ylvaxpnz7bo.ws-eu96b.gitpod.io/api/user";

export const registerFarmer = async (newUser) => {
  const raw = JSON.stringify(newUser);
  try {
    const resp = await fetch(`${URL}/signup/farmer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
      redirect: "follow",
    });
    return await resp.json();
  } catch (err) {
    console.log("Error al crear nuevo User_Farmer", err);
  }
};

export const registerTech = async (newUser) => {
  const raw = JSON.stringify(newUser);
  try {
    const resp = await fetch(`${URL}/signup/tech`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: raw,
      redirect: "follow",
    });
    return await resp.json();
  } catch (err) {
    console.log("Error al crear nuevo User_Tech", err);
  }
};
