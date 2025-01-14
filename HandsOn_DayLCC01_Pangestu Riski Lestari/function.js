
/*
    function:
    - suatu proses
    - bisa punya parameter => sesuatu yg dibutuhkan untuk proses tersebut
    - bisa punya hasil => return value

    function masakMie( mienya )
    {
        // direbus
        // ditiriskan
        // dikasih bumbu

        hidangkan mienya => return value
    }

*/

function luasLingkaran(jariJari)
{
    let luas = 3.14 * jariJari * jariJari; // prosesnya

    // console.log(luas);
    
    return luas;
}

let luas_1 = luasLingkaran(10);
console.log(luas_1);

let luas_2 = luasLingkaran(5);
console.log(luas_2);

let luas_3 = luasLingkaran(7);
console.log(luas_3);
