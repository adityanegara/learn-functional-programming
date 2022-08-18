const user = {
    firstName: 'Aditya',
    lastName: 'Negara',
    address: 'Jalan Gunuk IVB Nomor 72'
}

const editAddress = (newAddress, user) => {
    user.address = newAddress;
}

const createUserWithAddress = (newAddress, user) => {
    return { ...user, address: newAddress };
}

const newUser = createUserWithAddress('Jalan Sigura gura', user);
console.log(newUser);