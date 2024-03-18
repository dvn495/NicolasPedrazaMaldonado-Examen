const URL_API= "http://localhost:3000/users"

const myHeaders = new Headers({
    "Content-Type": "application/json"
});


const getData = async() => {
    try {
        return await fetch(URL_API);
    } catch(error){
        console.log(error);
    }

}

const newId = async () => {
    try {
        const response = await getData();
        if (response.ok) {
            const responseData = await response.json();
            const generatedID = responseData.length + 1;
            const data = {
                id: generatedID,
                name: " ",
                contact: 0,
                email: " ",
                cotizacion: 0 
            };
            await postData(data);
            return generatedID;
        } else {
            throw new Error('Error fetching data');
        }
    } catch (error) {
        console.error('Error fetching new ID:', error);
        throw error;
    }
};

// const updateData = async (newData, endpoint, id) => {
//     try {
//         const response = await fetch(${URL_API}/${endpoint}/${id}, {
//             method: "PATCH",
//             headers: myHeaders,
//             body: JSON.stringify(newData)
//         });

//         if (!response.ok) {
//             throw new Error('Error al actualizar el dato');
//         }

//         const data = await response.json();
//         return data
//     } catch (error) {
//         console.error('Error en la solicitud', error.message);
//         throw error;
//     }
// }
const getUserData = async () => {
    try {
        let generatedID = await newId();
        const USER_URL_API = `http://localhost:3000/users/${generatedID}`;
        return await fetch(USER_URL_API);
    } catch (error) {
        console.error('Error getting user data:', error);
        throw error;
    }
};

const postData = async (datos) => {
    try {
        return await fetch(URL_API, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(datos)
        });
    } catch (error) {
        console.error('Error en la solicitud', error.message);
    }
}
export {
    getData as getData, postData as postData, newId, getUserData, getId //updateData as updateData
}