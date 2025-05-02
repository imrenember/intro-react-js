const getUser = () => ({
    uid: 'ABC13',
    username: 'imrenember'
})

const user = getUser();
console.log(user);

function getUserActive (nombre) {
    return { 
        uid: 'ABC13',
        username: nombre,

    }
}

const userActive = getUserActive('Renember');
console.log(userActive);

const getUserActive2 = (nombre) => ( { 
    uid: 'ABC13',
    username: nombre,

})
console.log(getUserActive2);


