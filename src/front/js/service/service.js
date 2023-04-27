const URL =
  "https://3001-mmeitin-osigrisagropoin-li9ak5v9a8k.ws-eu96.gitpod.io/api/user";

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
