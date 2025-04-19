import { useState } from 'react';
import axios from 'axios';


function Upload () {
    const [image,setImage] = useState(null);
    const [url,setUrl] = useState('');

    const handleUpload = async () => {
        const payload = new FormData();
        payload.append("file", image);

        try{
            const res = await axios.post(
                "https://sport-reservation-api-bootcamp.do.dibimbing.id/api/v1/upload-image",
                payload
            );
            console.log(res);
            setUrl(res.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(image);

    return (
    <div>
        <input 
            type="file"
            placeholder="upload image"
            onChange={(e) => setImage(e.target.files[0])}
        />
        <button onClick={handleUpload}>Submit</button>
        {url.length && <p>{url}</p>}
    </div>
    )
}

export default Upload;