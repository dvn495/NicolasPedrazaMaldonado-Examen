const URL_API= "http://154.38.171.54:3001/priceM"

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
    deleteData as deleteData, getData as getData, postData as postDatas, updateData as updateData, getElementData as getElementData
};