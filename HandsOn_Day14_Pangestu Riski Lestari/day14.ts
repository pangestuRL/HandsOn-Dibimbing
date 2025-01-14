//Generic types
function getElements<T>(array: T[]){
    return array[0];
}

const scores = [1,2,3,4,5];
getElements<number>(scores);

const names = [`Muhsin`, `Arfan`, `Arvin`, `Rachmat`];
getElements<string>(names);

const status = [false, true];
getElements<boolean>(status);


type ApiResponse<T> = {
    data: T,
    statusCode: number,
}

const response : ApiResponse<{id: number; name: string}> = {
    data :{
        id: 1,
        name:`muhsin`,
    },
    statusCode: 200,
};

const response2 : ApiResponse<string> = {
    data : `muhsin`,
    statusCode: 200,
};

const response3: ApiResponse<{ message: string[]}> = {
    data : {
        message: [`muhsin`, `ahmed`],
    },
    statusCode: 200,
};

type TData = {
    name: string;
    age: number;
};

//beda pakai type dengan interface adalah kalau interface untuk mendefinisikan tipe objek atau class aja, kalau type lebih fleksibel
interface TData {
    name: string;
    age: number;
}
const handleGetData = ({name, age}: TData) => {
    return `test`;
}

type TInfo = string
const name: TInfo = `muhsin`

export{};