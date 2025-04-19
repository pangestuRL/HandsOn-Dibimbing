import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

export const getServerSideProps = async ({ query }) => {
  const resp = await axios.get(
    `https://api-bootcamp.do.dibimbing.id/api/v1/foods/${query.id}`,
    {
      headers: {
        apiKey: "w05KkI9AWhKxzvPFtXotUva-",
      },
    }
  );
  return {
    props: {
      food: resp.data,
    },
  };
};

const FoodDetail = ({ food }) => {
  const router = useRouter();
  const id = router.query.id;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imageUrl: "",
    ingredients: [],
    price: 0,
  });

  useEffect(() => {
    if (food?.data) {
      setFormData({
        name: food.data.name,
        description: food.data.description,
        imageUrl: food.data.imageUrl,
        ingredients: food.data.ingredients || [],
        price: food.data.price,
      });
    }
  }, [food]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "ingredients") {
      setFormData((prev) => ({
        ...prev,
        [name]: value.split(",").map((i) => i.trim()),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleUpdate = async () => {
    console.log(formData);
    try {
      await axios.post(
        `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${id}`,
        formData,
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
          },
        }
      );
      alert("Berhasil diubah!");
      router.reload();
    } catch (err) {
      console.error(err);
      alert("Gagal mengubah data");
    }
  };

  const handleDelete = async () => {
    const confirmDelete = confirm("Yakin ingin menghapus makanan ini?");
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://api-bootcamp.do.dibimbing.id/api/v1/delete-food/${id}`,
        {
          headers: {
            apiKey: "w05KkI9AWhKxzvPFtXotUva-",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
          },
        }
      );
      alert("Berhasil dihapus!");
      router.push("/"); 
    } catch (err) {
      console.error(err);
      alert("Gagal menghapus data");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4">Food Detail</h2>
      <button
            type="button"
            onClick={() => router.back()}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded mb-3"
        >
            Back
        </button>

      <form className="space-y-4">
      <img src={food.data.imageUrl}/>
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded px-3 py-2 mt-1"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            className="w-full border rounded px-3 py-2 mt-1"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            className="w-full border rounded px-3 py-2 mt-1"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700">Ingredients (pisahkan dengan koma)</label>
          <input
            type="text"
            name="ingredients"
            className="w-full border rounded px-3 py-2 mt-1"
            value={formData.ingredients.join(", ")}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            name="price"
            className="w-full border rounded px-3 py-2 mt-1"
            value={formData.price}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={handleUpdate}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Update
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default FoodDetail;
