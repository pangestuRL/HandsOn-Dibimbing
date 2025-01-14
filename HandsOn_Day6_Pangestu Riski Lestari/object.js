const person = {
    nama : `alice`,
    address : {
        city: `bogor`,
        zip: `11720`
    },
    skills : [`golang`, `javascript`]
}

// menyalin object dengan spreed operator
const updatePerson = {
    ...person,
    address: {
        ...person.address,
        city: `jakarta`,
        street: `jalan bahagia`
    }, //update nested object
    skills: [...person.skills, `nodejs`] //tambah skill baru
}

console.log(`update person`, updatePerson)

//menggabungkan dua object
const additionalInfo = {age: 25, job: `software engineer`};
const mergePerson = {...updatePerson, ...additionalInfo};
// console.log(`Merge person :`, mergePerson);

const dynamicKey = `status`;
const user = {
    name : `bob`,
    [dynamicKey]: `active` //menambahkan property secara dinamis
}
// console.log(`User with dynamic key:`, user);

//merubah properti atau key secara dinamis
const updateProperty = (obj, key, val) => {
    return {...obj, [key]: val};
}

const updateUser = updateProperty(user, `role`, `admin`);
console.log(`Update user : `, updateUser);